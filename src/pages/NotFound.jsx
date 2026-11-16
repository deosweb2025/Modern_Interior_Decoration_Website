import { Link } from "react-router-dom";
import { Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#f7f3eb] via-[#ede4d4] to-[#dfd3bf] px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-white/90 border border-[#c59b27]/40 flex items-center justify-center text-[#9e761b] mx-auto shadow-md">
          <Sparkles className="w-8 h-8 text-[#c59b27]" />
        </div>

        <span className="font-mono text-sm tracking-widest text-[#9e761b] uppercase block font-bold">
          404 Error
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#131e34] tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-[#384661] leading-relaxed">
          The interior space or page you are searching for does not exist or has been relocated.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e0be63] via-[#c59b27] to-[#9e761b] hover:brightness-105 transition-all shadow-md shadow-[#c59b27]/25"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-3 rounded-full text-xs font-bold tracking-wider text-[#131e34] bg-white/80 border border-[#c59b27]/30 hover:bg-white transition-all"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </main>
  );
}
