import { motion } from "motion/react";
import { useEffect, useState } from "react";

function Intro({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 500);

    const timer2 = setTimeout(() => {
      setStage(2);
    }, 1100);

    const timer3 = setTimeout(() => {
      setStage(3);
    }, 1800);

    const timer4 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: stage === 3 ? "-100%" : 0 }}
      transition={{
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#0b0d10]
        text-white
      "
    >
      <div className="w-full max-w-7xl px-6">

        {/* TOP */}
        <div className="mb-12 flex items-center justify-between">

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-gray-500
            "
          >
            Portfolio / 2026
          </p>

          <p
            className="
              text-xs
              font-bold
              text-lime-400
            "
          >
            01
          </p>

        </div>


        {/* MAIN */}
        <div className="overflow-hidden">

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: stage >= 1 ? 0 : 50,
              opacity: stage >= 1 ? 1 : 0,
            }}
            transition={{ duration: 0.7 }}
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-lime-400
            "
          >
            Hello, I'm
          </motion.p>


          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{
              y: stage >= 1 ? 0 : 120,
              opacity: stage >= 1 ? 1 : 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              text-[16vw]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.06em]

              sm:text-[13vw]
              lg:text-[11vw]
            "
          >
            DHARAMVEER
          </motion.h1>


          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: stage >= 2 ? 0 : 100,
              opacity: stage >= 2 ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              mt-4
              text-[16vw]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.06em]
              text-lime-400

              sm:text-[13vw]
              lg:text-[11vw]
            "
          >
            SAHU
          </motion.h2>

        </div>


        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: stage >= 2 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-gray-400
            "
          >
 {/* Content*/}
          </motion.p>


          {/* PROGRESS */}
          <div className="w-full max-w-xs">

            <div className="mb-2 flex justify-between text-[10px] uppercase tracking-widest text-gray-500">

              <span>
                Loading experience
              </span>

              <span>
                {stage === 0
                  ? "01"
                  : stage === 1
                  ? "45"
                  : stage === 2
                  ? "80"
                  : "100"}
                %
              </span>

            </div>

            <div className="h-[2px] w-full bg-white/10">

              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width:
                    stage === 0
                      ? "20%"
                      : stage === 1
                      ? "45%"
                      : stage === 2
                      ? "80%"
                      : "100%",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="
                  h-full
                  bg-lime-400
                "
              />

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default Intro;