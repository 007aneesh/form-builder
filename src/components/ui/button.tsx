import React from "react";

interface ButtonProps {
  text?: string; 
  type?: "button" | "submit" | "reset"; 
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  className,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      className={`px-8 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg ${className}`}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
};

export default Button;
