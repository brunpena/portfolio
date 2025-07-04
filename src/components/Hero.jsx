import { useState, useEffect } from 'react';
import { Download, ArrowDown } from 'lucide-react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Desenvolvedor Full Stack';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 lg:-top-40 lg:-right-40 w-20 h-20 sm:w-40 sm:h-40 lg:w-80 lg:h-80 bg-primary/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 lg:-bottom-40 lg:-left-40 w-20 h-20 sm:w-40 sm:h-40 lg:w-80 lg:h-80 bg-primary-glow/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        {/* Profile Image */}
        <div className="mb-4 sm:mb-6 lg:mb-8 relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-2 sm:border-4 border-primary/30 pulse-glow">
            <img
              src="https://avatars.githubusercontent.com/u/130068559?v=4"
              alt="Bruno Eduardo Pena"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>

        {/* Text Content */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
          <span className="block text-foreground">Bruno Eduardo</span>
          <span className="block gradient-text">Pena</span>
        </h1>

        <div className="mb-3 sm:mb-4 lg:mb-6 h-5 sm:h-6 lg:h-8">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-muted-foreground">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          18 anos, estudante do Ensino Médio Integrado em Desenvolvimento de Sistemas na{' '}
          <span className="text-primary font-semibold">UTFPR</span>.
          Especializado em soluções web de alta performance e integração de sistemas.
        </p>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3 mb-4 sm:mb-6 lg:mb-8 px-2">
          {['C', 'C++', 'Python', 'TypeScript', 'JavaScript', 'SQL'].map((tech) => (
            <span key={tech} className="tech-badge text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - INTEGRADOS sem <Button> */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center items-center px-4 sm:px-0">
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm sm:text-base font-medium px-8 py-3 bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow"
          >
            <Download className="h-4 w-4" />
            Download CV
          </button>

          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm sm:text-base font-medium px-8 py-3 border border-primary/30 hover:bg-primary/10 transition-all duration-300"
          >
            Ver Projetos
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
