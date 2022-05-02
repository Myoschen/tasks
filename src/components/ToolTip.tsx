interface ToolTipProps {
  label: string;
  className?: string;
}

function ToolTip({ label, className = '' }: ToolTipProps) {
  return (
    <span
      className={`${className} absolute left-[4.5rem] z-10 px-2 py-1 text-sm font-bold rounded-sm bg-cherrystone-500 whitespace-nowrap pointer-events-none duration-300 delay-100 opacity-0 group-hover:opacity-100
        before:content-[''] before:absolute before:top-1/2 before:-left-1 before:w-2 before:h-2 before:rotate-45 before:-translate-y-1/2 before:bg-cherrystone-500`}
    >
      {label}
    </span>
  );
}

export default ToolTip;
