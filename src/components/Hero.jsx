import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >


        <div className="w-full flex justify-center items-center h-screen max-w-7xl mx-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#915EFF]'>brtk</span>.cloud
          </h1>
        </div>
      </div>

  

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
