import { useEffect, useRef, useState } from 'react';
import '../ui/background.css';

export const CardEmployed = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollAmount = scrollPosition;
    let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

    const autoScroll = () => {
      if (!isPaused) {
        scrollAmount += 2; // Ajusta la velocidad del scroll aquí
        if (scrollAmount >= maxScrollLeft) {
          scrollAmount = 0; // Reinicia el scroll
        }
        scrollElement.scrollLeft = scrollAmount;
      } else {
        setScrollPosition(scrollElement.scrollLeft);
      }
    };

    const scrollInterval = setInterval(autoScroll, 20); // Ajusta la velocidad del intervalo aquí

    return () => clearInterval(scrollInterval); // Limpia el intervalo cuando el componente se desmonta
  }, [isPaused, scrollPosition]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div id="Equipo" className="bg-black-custom flex flex-col items-center min-h-screen justify-center p-5 overflow-hidden">
      <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-12 text-center pb-14 w-full">
        Equipo
      </h2>

      <div ref={scrollRef} className="relative w-full max-w-screen-lg overflow-x-hidden hide-scrollbar">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-transparent to-blue-600 rounded-lg blur-md opacity-30 -z-10"></div>
        <div className="flex space-x-6 pb-6 scroll-smooth">
          {[
            { name: 'David Felipe Vaszquez Pardo', role: 'Junior Software Dev', img: '/src/fotos/David.jpg', logo: '/LogoValleDelSoftware.svg', message: 'Apasionado por el desarrollo web y la inteligencia artificial.' },
            { name: 'Angel Daniel Diaz Bastidas', role: 'Junior Software Dev', img: '/src/fotos/Daniel.jpg', logo: '/LogoValleDelSoftware.svg', message: 'Amante de la programación y las soluciones innovadoras.' },
            { name: 'Jhon Deivid Ramirez Nuñez', role: 'Junior Software Dev', img: '/src/fotos/Jhon.jpg', logo: '/LogoValleDelSoftware.svg', message: 'Siempre dispuesto a aprender y enfrentar nuevos desafíos.' },
            { name: 'Jonatan Andres Novoa Rodriguez', role: 'Junior Software Dev', img: '/src/fotos/Jonatan.jpg', logo: '/LogoValleDelSoftware.svg', message: 'Comprometido con el desarrollo de software de calidad.' },
            { name: 'Rafael Leonardo Piedrahita Correa', role: 'Junior Software Dev', img: '/src/fotos/Pita.jpg', logo: '/LogoValleDelSoftware.svg', message: 'Enfocado en la mejora continua y la eficiencia en proyectos.' },
            { name: 'Nicolas Valentin Ordoñez Sarmiento', role: 'Junior Software Dev', img: '/src/fotos/Nicolas.jpg', logo: '/LogoValleDelSoftware.svg', message: 'Explorador de nuevas tecnologías y metodologías ágiles.' },
            { name: 'Juan Sebastian Garcia Redondo', rol: 'Junior Software Dev', img: '', logo: '/LogoValleDelSoftware.svg', message: 'Comprometido con el desarrollo de software de calidad.'}
          ].map((employee, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-96 bg-slate-900 border border-gray-800 text-white p-10 rounded-lg shadow-lg relative cursor-pointer transition-transform duration-300 ${
                selectedCard === index ? 'transform scale-105 border-blue-500' : ''
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(index)}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <img src={employee.logo} alt="Logo" className="w-16 h-14 transform" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-center mb-4">
                    <span className="p-2 bg-gradient-to-r from-blue-500 to-blue-800">
                      <img src={employee.img} alt="Foto" className="w-32 h-32 rounded-lg" />
                    </span>
                  </div>
                  <p className="text-center italic">
                    {employee.message}
                  </p>
                  <div className="mt-4 text-center">
                    <p className="font-bold">{employee.name}</p>
                    <p className="text-sm">{employee.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
