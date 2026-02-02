import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
  } 

const Button: React.FC<ButtonProps> =({  children }) => {
  return (
    <button className="outline-dashed bg-black font-bold">
      <div className="default-btn text-xs">
        <span>{children}</span>
      </div>
      <div className="hover-btn text-xs">
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
