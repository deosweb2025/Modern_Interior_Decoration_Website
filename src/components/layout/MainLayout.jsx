import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-[#ede3d2] text-[#241410] selection:bg-[#c69a43] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Dual Floating Action Buttons: WhatsApp & Call */}
      <FloatingButtons />

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
