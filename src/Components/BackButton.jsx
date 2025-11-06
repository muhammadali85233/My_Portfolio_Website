// BackToPortfolio.jsx
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackToPortfolio = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { state: { scrollToPortfolio: true } });
  };

  return (
    <div className=" sticky left-4  z-50 top-0 py-2 md:px-8">
      <button
        onClick={handleBack}
        className="flex items-center gap-2 bg-[#32cd32] font-bold transition-all px-4 py-2
        rounded-lg border-[#32cd32] border-2 hover:bg-black hover:text-[#32cd32]"
      >
        <FaArrowLeft size={16} />
        Back to Projects
      </button>
    </div>
  );
};

export default BackToPortfolio;
