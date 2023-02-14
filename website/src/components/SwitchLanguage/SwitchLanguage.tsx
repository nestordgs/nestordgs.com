import React from "react";

interface ISwitchProps {
  label: string;
  isChecked: boolean;
  onClick: (e: any) => void;
}

export const SwitchLanguage: React.FC<ISwitchProps> = ({
  label,
  isChecked,
  onClick,
}) => {
  return (
    <input
      className="form-check-input language-switch"
      type="checkbox"
      role="switch"
      id="language-switch"
      data-testid="language-switch"
      name="language-switch"
      onChange={onClick}
      checked={isChecked}
      data-language={label}
    />
  );
};
