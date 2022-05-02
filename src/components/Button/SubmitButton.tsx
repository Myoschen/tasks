import { ButtonProps } from './Button';

function SubmitButton({ className = '', children, handleClick }: ButtonProps) {
  return (
    <button
      className={`${className} 
        p-2 text-lg font-bold rounded-md
        bg-gray-100 dark:bg-nord-600 text-nord-600 dark:text-nord-100 
        hover:bg-gray-400 dark:hover:bg-nord-500  active:ring-2 active:ring-blue-300 transition-colors
      `}
      type="submit"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
