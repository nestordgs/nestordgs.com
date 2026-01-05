import React from "react";

interface ISwitchProps {
  label: string;
  isChecked: boolean;
  onClick: () => void;
}

export const SwitchLanguage: React.FC<ISwitchProps> = ({
  isChecked,
  onClick,
}) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-center px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-bold text-gray-300 hover:text-white hover:border-white/30 transition-all uppercase tracking-wider h-8 min-w-[3rem]"
      data-testid="language-switch"
    >
      {isChecked ? "EN" : "ES"}
    </button>
  );
};
