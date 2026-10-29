import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export function Button({ text, to }) {
  return (
    <Link
      to={to}
      className="py-2 px-4 font-semibold bg-blue hover:bg-blue-hover hover:scale-95 rounded text-text flex items-center gap-2 transform transition-all duration-300"
    >
      {text}
      <FaArrowRight />
    </Link>
  );
}
