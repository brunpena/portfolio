// import { useState, useEffect, useRef } from 'react';
// import { Download, ArrowDown } from 'lucide-react';

// export function Hero() {
// const [displayText, setDisplayText] = useState('');
// const fullText = 'Desenvolvedor Full Stack';

// const galaxyRef = useRef(null);

// useEffect(() => {
// let i = 0;
// const timer = setInterval(() => {
//     if (i < fullText.length) {
//     setDisplayText(fullText.slice(0, i + 1));
//     i++;
//     } else {
//     clearInterval(timer);
//     }
// }, 100);

// return () => clearInterval(timer);
// }, []);

// // Galáxia: lógica das estrelas
// useEffect(() => {
// const stars = galaxyRef.current.querySelectorAll('.star');

// const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;

//     stars.forEach((star) => {
//     const rect = star.getBoundingClientRect();
//     const dx = rect.left + rect.width / 2 - clientX;
//     const dy = rect.top + rect.height / 2 - clientY;
//     const distance = Math.sqrt(dx * dx + dy * dy);

//     if (distance < 100) {
//         const angle = Math.atan2(dy, dx);
//         const moveX = Math.cos(angle) * 50;
//         const moveY = Math.sin(angle) * 50;

//         star.style.transform = `translate(${moveX}px, ${moveY}px)`;
//     } else {
//         star.style.transform = `translate(0, 0)`;
//     }
//     });
// };

// window.addEventListener('mousemove', handleMouseMove);
// return () => window.removeEventListener('mousemove', handleMouseMove);
// }, []);

// return (
// <section
//     ref={galaxyRef}
//     className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-black"
// >
//     {/* Galáxia: estrelas */}
//     {Array.from({ length: 200 }).map((_, i) => {
//     const size = Math.random() * 3 + 1; // 1px ~ 4px
//     const opacity = size / 4;
//     const blur = size * 2;

//     return (
//         <div
//         key={i}
//         className="star absolute rounded-full bg-white"
//         style={{
//             width: `${size}px`,
//             height: `${size}px`,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             opacity: opacity,
//             boxShadow: `0 0 ${blur}px ${blur / 2}px white`,
//             transition: 'transform 0.2s ease',
//         }}
//         />
//     );
//     })}

//     {/* Conteúdo principal */}
//     <div className="container mx-auto text-center relative z-10 max-w-4xl">
//     {/* Foto de perfil */}
//     <div className="mb-4 sm:mb-6 lg:mb-8 relative">
//         <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-2 sm:border-4 border-primary/30">
//         <img
//             src="https://avatars.githubusercontent.com/u/130068559?v=4"
//             alt="Bruno Eduardo Pena"
//             className="w-full h-full object-cover"
//         />
//         </div>
//         <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 lg:-bottom-2 lg:-right-2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full border-2 sm:border-2 lg:border-4 border-black flex items-center justify-center">
//         <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-white rounded-full animate-pulse" />
//         </div>
//     </div>

//     {/* Títulos */}
//     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
//         <span className="block text-white">Bruno Eduardo</span>
//         <span className="block bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
//         Pena
//         </span>
//     </h1>

//     <div className="mb-3 sm:mb-4 lg:mb-6 h-5 sm:h-6 lg:h-8">
//         <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-300">
//         {displayText}
//         <span className="animate-pulse">|</span>
//         </h2>
//     </div>

//     <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
//         18 anos, estudante do Ensino Médio Integrado em Desenvolvimento de Sistemas na{' '}
//         <span className="text-blue-500 font-semibold">UTFPR</span>. Especializado em soluções web de alta performance e integração de sistemas.
//     </p>

//     {/* Tech stack */}
//     <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3 mb-4 sm:mb-6 lg:mb-8 px-2">
//         {['C', 'C++', 'Python', 'TypeScript', 'JavaScript', 'SQL'].map((tech) => (
//         <span
//             key={tech}
//             className="bg-white/10 text-gray-200 border border-white/20 rounded-full text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5"
//         >
//             {tech}
//         </span>
//         ))}
//     </div>

//     {/* Botões de ação */}
//     <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center items-center px-4 sm:px-0">
//         <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-md hover:opacity-90 transition-all text-sm sm:text-base">
//         <Download className="w-4 h-4" />
//         Download CV
//         </button>
//         <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500/10 transition-all text-sm sm:text-base">
//         Ver Projetos
//         </button>
//     </div>

//     {/* Scroll indicator */}
//     <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400" />
//     </div>
//     </div>
// </section>
// );
// }

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
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 lg:-bottom-2 lg:-right-2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-success rounded-full border-2 sm:border-2 lg:border-4 border-background flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-white rounded-full animate-pulse" />
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
