import { Link } from "react-router-dom";
import { Button } from "../common/Button";

export function MobileMenu({ open, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed rounded top-20 z-50 h-content py-3 w-[80%] bg-bg/50 border border-line shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          open ? "left-1/2 -translate-x-1/2" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-4">
          <ul className="flex flex-col gap-10 text-muted">
            <li>
              <Link
                to="/"
                onClick={onClose}
                className="text-lg transition-all hover:text-primary-light"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={onClose}
                className="text-lg transition-all hover:text-primary-light"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/skills"
                onClick={onClose}
                className="text-lg transition-all hover:text-primary-light"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                onClick={onClose}
                className="text-lg transition-all hover:text-primary-light"
              >
                Project
              </Link>
            </li>
          </ul>

          <div className="mt-8">
             <Button  to="/contact" text="Let's talk" />
          </div>
        </div>
      </div>
    </>
  );
}
