import EcosystemIcon from "../assets/icons/ecosystem.svg";
const features = [
  {
    title: "Desarrollo Web Personalizado",
    description:
      "Creamos sitios web a medida que se adaptan perfectamente a las necesidades de tu negocio, con diseños modernos y funcionales.",
  },
  {
    title: "Chatbots Inteligentes",
    description:
      "Implementamos chatbots de WhatsApp impulsados por inteligencia artificial para mejorar la atención al cliente y automatizar procesos.",
  },
  {
    title: "Seguridad y Confianza",
    description:
      "Tus datos están seguros con nuestra encriptación de extremo a extremo, protegiendo tu información de accesos no autorizados.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Todo lo que necesitas
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Disfruta de soluciones personalizadas, herramientas de colaboración
            y seguimiento inteligente, todo en un solo lugar. Optimiza tu
            negocio con nuestras soluciones avanzadas.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"
            >
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
