import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  children?: ReactNode;
}

function Hero({ title, children }: HeroProps) {
  return (
    <div className="flex items-center relative h1 h-[calc(100vh-4.5rem)] bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <div className="absolute w-full h-full pointer-events-none backdrop-blur-sm" />
      <div className="container z-10 flex flex-col items-center justify-between mx-auto gap-y-12">
        <h1 className="text-6xl font-bold">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default Hero;
