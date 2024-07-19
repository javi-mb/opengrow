import { Laptop, BotMessageSquare, FileKey2, Search } from 'lucide-react';

const features = [
  {
    title: 'Desarrollo Web Personalizado',
    description:
      'Creamos sitios web a medida que se adaptan perfectamente a las necesidades de tu negocio, con diseños modernos y funcionales.',
    icon: Laptop,
  },
  {
    title: 'Chatbots Inteligentes',
    description:
      'Implementamos chatbots de WhatsApp impulsados por inteligencia artificial para mejorar la atención al cliente y automatizar procesos.',
    icon: BotMessageSquare,
  },
  {
    title: 'Seguridad y Confianza',
    description:
      'Tus datos están seguros con nuestra encriptación de extremo a extremo, protegiendo tu información de accesos no autorizados.',
    icon: FileKey2,
  },
  {
    title: 'Optimización SEO',
    description:
      'Mejoramos la visibilidad de tu sitio web en los motores de búsqueda mediante técnicas avanzadas de SEO, aumentando tu alcance y atrayendo más clientes potenciales.',
    icon: Search,
  },
];

export const Features = () => {
  return (
    <div className='bg-black py-[72px] text-white sm:py-24'>
      <div className='container'>
        <h2 className='text-center text-5xl font-bold tracking-tighter sm:text-6xl'>
          Todo lo que necesitas
        </h2>
        <div className='mx-auto max-w-xl'>
          <p className='mt-5 text-center text-xl text-white/70'>
            Disfruta de soluciones personalizadas, herramientas de colaboración
            y seguimiento inteligente, todo en un solo lugar. Optimiza tu
            negocio con nuestras soluciones avanzadas.
          </p>
        </div>
        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className='transform rounded-xl border border-white/30 p-8 text-center transition-transform hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 sm:flex-1'
            >
              <div className='inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black shadow-lg'>
                <Icon
                  size={24}
                  className='text-gradient-to-r from-indigo-500 to-purple-500'
                />
              </div>
              <h3 className='mt-6 text-xl font-bold'>{title}</h3>
              <p className='mt-2 text-white/70'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
