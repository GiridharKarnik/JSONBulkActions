import React from "react";
import './Button.css';

interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ icon, text, onClick }) => {
  return (
    <button className="button-container" onClick={onClick}>
      {icon && <div className="icon-container">{icon}</div>}
      <p className="button-text">{text}</p>
    </button>
  );
};
