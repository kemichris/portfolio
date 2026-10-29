import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export function Button({ text, to }) {
  return (
    <Link
      to={to}
      className="py-2 px-4 font-semibold bg-blue hover:bg-blue-hover rounded text-text flex items-center gap-2"
    >
      {text}
      <FaArrowRight />
    </Link>
  );
}
