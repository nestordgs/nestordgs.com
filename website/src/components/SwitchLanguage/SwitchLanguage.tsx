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
      className="flex items-center justify-center px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:border-primary/30 dark:hover:border-white/30 transition-all uppercase tracking-wider h-8 min-w-[3rem]"
      data-testid="language-switch"
    >
      {isChecked ? "EN" : "ES"}
    </button>
  );
};
