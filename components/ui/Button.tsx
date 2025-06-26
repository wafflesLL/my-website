// components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}) => {
  return (
    <button
      className="border-[7px] border-[#00D9FF] font-montserrat text-7xl text-white hover:shadow-[0_0_20px_#00D9FF] rounded-[30px] margin px-4 py-4"
    >
      {children}
    </button>
  );
};
