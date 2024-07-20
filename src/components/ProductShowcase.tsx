import Image from 'next/image';
import appScreen from '../assets/images/app-screen.png';

export const ProductShowcase = () => {
  return (
    <div className='bg-black bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] text-white sm:py-24'>
      <div className='container'>
        <h2 className='text-center text-5xl font-bold tracking-tighter sm:text-6xl'>
          Interfaces Intuitivas
        </h2>
        <div className='mx-auto max-w-xl'>
          <p className='mt-5 text-center text-xl text-white/70'>
            En OPENGROW, diseñamos interfaces que no solo son visualmente
            atractivas, sino también increíblemente fáciles de usar. Cada sitio
            web y chatbot es creado para ofrecer una experiencia fluida y
            efectiva para tus usuarios.
          </p>
        </div>
        <Image
          src={appScreen}
          alt='Captura de pantalla del producto'
          className='mt-14'
        />
      </div>
    </div>
  );
};
