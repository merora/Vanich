import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className = "", ...props }: Props) {
  return (
    <button
      {...props}
      className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}
