import { useTheme } from "../../../entities/product/hooks/useTheme";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative
        flex
        h-8
        w-16
        items-center
        rounded-full
        transition-all
        duration-300
        cursor-pointer
        ${
          isDark
            ? "bg-slate-700"
            : "bg-gray-200"
        }
      `}
    >
      <div
        className={`
          absolute
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-md
          transition-all
          duration-300
          ${
            isDark
              ? "translate-x-9"
              : "translate-x-1"
          }
        `}
      >
        {isDark ? "🌙" : "☀️"}
      </div>
    </button>
  );
};

export default ThemeButton;