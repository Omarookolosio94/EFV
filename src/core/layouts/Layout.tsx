import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo_full.png";

export default function Layout() {
  return (
    <div className="bg-home relative min-h-screen w-full">
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      <div className="relative z-10 min-h-[60vh]">
        <nav className="w-full bg-white py-3 text-center">
          <Link to="/">
            <img
              loading="lazy"
              src={logo}
              alt="Property Visualizer"
              className="inline-flex h-8 w-auto"
            />
          </Link>
        </nav>
        <div className="mx-auto w-11/12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
