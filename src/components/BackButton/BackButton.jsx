import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:border-green-500 hover:text-green-600 dark:border-white/15 dark:text-white/80 dark:hover:border-lime-400 dark:hover:text-lime-400"
      aria-label="Back to home"
    >
      <ArrowLeft size={16} />
      Back to Home
    </button>
  );
}

export default BackButton;