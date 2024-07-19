import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Interfaces Intuitivas
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xl text-white/70 mt-5">
            En OPENGROW, diseñamos interfaces que no solo son visualmente
            atractivas, sino también increíblemente fáciles de usar. Cada sitio
            web y chatbot es creado para ofrecer una experiencia fluida y
            efectiva para tus usuarios.
          </p>
        </div>
        <Image
          src={appScreen}
          alt="Captura de pantalla del producto"
          className="mt-14"
        />
      </div>
    </div>
  );
};
