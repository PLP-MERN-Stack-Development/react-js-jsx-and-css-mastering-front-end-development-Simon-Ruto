import { useTheme } from "../context/ThemeContext";

const Card = ({ title, description }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-4 rounded-xl shadow-md transition-colors duration-300 
      ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
     >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Card;
