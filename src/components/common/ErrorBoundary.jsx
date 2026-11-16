import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Auto-reload once if dynamic import chunk failed after a fresh deployment
    const isChunkFailed =
      error?.message?.includes("Failed to fetch dynamically imported module") ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("Importing a module script failed");

    if (isChunkFailed) {
      const hasReloaded = sessionStorage.getItem("chunk_reload_attempted");
      if (!hasReloaded) {
        sessionStorage.setItem("chunk_reload_attempted", "true");
        window.location.reload();
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#ede4d4] px-4 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-white border border-[#c59b27]/35 shadow-xl">
            <h2 className="font-heading text-xl font-bold text-[#131e34]">
              Something unexpected happened
            </h2>
            <p className="mt-2 text-sm text-[#5b6a88]">
              We recently updated our studio showcase. Please reload to load the latest design blueprints.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  sessionStorage.removeItem("chunk_reload_attempted");
                  window.location.reload();
                }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e0be63] via-[#c59b27] to-[#9e761b] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform cursor-pointer"
              >
                Reload Page
              </button>
              <a
                href="/"
                className="px-5 py-2.5 rounded-full bg-white border border-[#c59b27]/40 text-[#131e34] text-xs font-bold uppercase tracking-wider hover:bg-black/5 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
