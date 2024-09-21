import { useState } from 'react';

const TeamCard = ({ title, description, imageSrc }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    // Para a rotação após 2 segundos (2000 milissegundos)
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <div
      className={`justify-center ring-2 ring-white items-center w-60 bg-jiinf-primary rounded-xl shadow-md overflow-hidden m-4 text-white
      cursor-pointer transition-transform duration-1000`}
      onClick={handleClick}
      style={{
        transform: isSpinning ? 'rotateY(360deg)' : 'rotateY(0deg)',
        transformStyle: 'preserve-3d',
        transition: 'transform 1s ease-in-out',
        perspective: '1000px', // Profundidade para efeito 3D
      }}
    >
      <div className="p-4">
        <h2 className="text-3xl font-pixel mb-2 text-center pb-4">{title}</h2>
        <div className="flex justify-center pb-4">
          <img
            className="rounded-full ring-2 ring-white h-36 w-36"
            src={imageSrc}
            alt={title}
          />
        </div>
        <p className="mt-4 font-semibold text-sm text-center">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
