import ArrowWIcon from "../assets/icons/arrow-w.svg";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Bienvenido a OPENGROW
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Conoce Más</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex ">
            Creando el Futuro <br /> de tu Negocio
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Transformamos tus ideas en realidad con el desarrollo de páginas web
            modernas y chatbots de WhatsApp impulsados por inteligencia
            artificial. ¡Impulsa tu negocio al siguiente nivel con nosotros!
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </div>
  );
};
