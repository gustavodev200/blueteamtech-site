'use client';

import { motion } from 'framer-motion';

export const Illustration: React.FC = () => {
  return (
    <>
      <div className="relative max-[1200px]:hidden">
        <motion.img
          transition={{ duration: 1, ease: 'easeInOut' }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          src="/rocket-bg.svg"
          alt="Rocket"
          width={430}
          height={320}
        />

        <motion.div
          className="absolute -bottom-40 w-[193px] h-[50px] left-[calc(50%-96.5px)] bg-black/50 rounded-[50%] blur-lg"
          variants={{
            fadeIn: {
              opacity: [0, 1],
            },
            grow: {
              scaleX: [0.8, 1],
              transition: {
                ease: 'easeInOut',
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            },
          }}
          initial={['fadeIn', 'grow']}
          animate={['grow', 'fadeIn']}
        />

        <motion.img
          className="absolute -top-6 left-[calc(50%-96.5px)]"
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          variants={{
            fadeIn: {
              opacity: [0, 1],
            },
            fly: {
              y: [-100, -20],
              transition: {
                ease: 'easeInOut',
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            },
          }}
          initial={['fadeIn', 'fly']}
          animate={['fly', 'fadeIn']}
          src="/rocket.svg"
          alt="Rocket"
          width={193}
          height={490}
        />
      </div>

      <img
        src="/rocket-static.svg"
        alt="Rocket"
        width="100%"
        className="max-w-[320px] min-[1200px]:hidden max-[400px]:max-w-[150px]"
      />
    </>
  );
};
