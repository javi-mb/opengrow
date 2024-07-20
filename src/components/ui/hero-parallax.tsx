'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import Image from 'next/image';

export const HeroParallax = ({
  products,
}: {
  products: {
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className='relative flex flex-col  self-auto overflow-hidden bg-gradient-to-b from-black to-[#5D2CA8] py-40 antialiased [perspective:1000px] [transform-style:preserve-3d] md:h-[230vh]'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        <motion.div className='mb-20 flex flex-row-reverse space-x-20 space-x-reverse'>
          {firstRow.map((product, key) => (
            <ProductCard product={product} translate={translateX} key={key} />
          ))}
        </motion.div>
        <motion.div className='mb-20 flex  flex-row space-x-20 '>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.thumbnail}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse space-x-20 space-x-reverse'>
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.thumbnail}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='relative left-0 top-0 mx-auto w-full max-w-7xl px-4  py-20 md:py-40'>
      <h1 className='text-2xl font-bold md:text-7xl dark:text-white'>
        Interfaces Intuitivas
      </h1>
      <p className='mt-8 max-w-2xl text-base md:text-xl dark:text-neutral-200'>
        En OPENGROW, diseñamos interfaces que no solo son visualmente
        atractivas, sino también increíblemente fáciles de usar. Cada sitio web
        y chatbot es creado para ofrecer una experiencia fluida y efectiva para
        tus usuarios.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.thumbnail}
      className='group/product relative h-48 w-[20rem] flex-shrink-0 md:h-96 md:w-[30rem]'
    >
      <Image
        src={product.thumbnail}
        height='600'
        width='600'
        className='absolute inset-0 h-full w-full rounded-md object-cover object-left-top'
        alt='page example'
      />

      <div className='pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80'></div>
    </motion.div>
  );
};
