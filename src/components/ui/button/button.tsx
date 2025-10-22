import * as React from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "flex gap-2 items-center py-2 px-4 bg-white border border-[#d9d9d9] box-border shadow-[0_0_2px_rgba(0,0,0,0.0015)] rounded-[2px] text-[#595959] text-base/[24px] cursor-pointer",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
