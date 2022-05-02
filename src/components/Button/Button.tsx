import { MouseEvent, ReactNode } from 'react';

type ClickTypes =
  (() => void) | ((event: MouseEvent<HTMLButtonElement>) => void);

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  handleClick: ClickTypes;
}

function Button({
  className = '', children, handleClick,
}: ButtonProps) {
  return (
    <button
      className={`${className} 
        p-2 text-lg font-bold rounded-md
        bg-gray-200 dark:bg-nord-700 text-nord-600 dark:text-nord-100 
        hover:bg-gray-400 dark:hover:bg-nord-500  active:ring-2 active:ring-blue-300 transition-colors
      `}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
