import { ReactNode } from 'react';

interface ContentProps {
  title: string;
  children: ReactNode;
}

function Content({ title, children }: ContentProps) {
  return (
    <main className="flex-1 h-screen overflow-auto transition-colors p-7 bg-nord-100/20 dark:bg-nord-600 ">
      <div className="container flex flex-col items-start p-5 pt-8">
        <h1 className="mb-16 text-6xl font-bold dark:text-nord-100">
          {title}
        </h1>
        {children}
      </div>
    </main>
  );
}

export default Content;
