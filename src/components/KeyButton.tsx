
import { LucideIcon } from "lucide-react";

interface KeyButtonProps {
  keyCode: string;
  label: string;
  isPressed: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
}

const KeyButton = ({ keyCode, label, isPressed, className = "", size = "md", icon: Icon }: KeyButtonProps) => {
  const sizeClasses = {
    sm: "min-w-8 h-8 text-xs px-1",
    md: "min-w-10 h-10 text-xs px-1",
    lg: "min-w-12 h-12 text-sm px-2"
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        border rounded-lg flex flex-col items-center justify-center font-mono font-medium
        transition-all duration-200 ease-out
        select-none cursor-default
        ${isPressed 
          ? "bg-gradient-to-br from-cyan-500 to-blue-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/25 scale-95" 
          : "bg-slate-700/50 border-slate-600 text-slate-200 hover:bg-slate-600/50 hover:border-slate-500"
        }
        ${className}
      `}
      data-key={keyCode}
    >
      {Icon && (
        <Icon className="w-3 h-3 mb-0.5" />
      )}
      <span className="leading-none text-center break-all overflow-hidden">
        {label}
      </span>
    </div>
  );
};

export default KeyButton;
