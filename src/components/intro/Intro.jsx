import { motion } from "motion/react";
import { useEffect, useState } from "react";

function Intro({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 350);
    const timer2 = setTimeout(() => setStage(2), 850);
    const timer3 = setTimeout(() => setStage(3), 1450);
    const timer4 = setTimeout(() => onComplete(), 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  const progress =
    stage === 0
      ? "20%"
      : stage === 1
        ? "45%"
        : stage === 2
          ? "80%"
          : "100%";

  const percentage =
    stage === 0
      ? "20"
      : stage === 1
        ? "45"
        : stage === 2
          ? "80"
          : "100";

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: stage === 3 ? "-100%" : "0%",
      }}
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
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-lime-400/[0.04]
          blur-[130px]
        "
      />

      <div className="relative w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= TOP ================= */}

        <div className="mb-10 flex items-center justify-between sm:mb-16">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: stage >= 1 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-gray-500
              sm:text-xs
              sm:tracking-[0.3em]
            "
          >
            Dharamveer Sahu / 2026
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: stage >= 1 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="
              text-[10px]
              font-bold
              text-lime-400
              sm:text-xs
            "
          >
            01 / 01
          </motion.p>

        </div>

        {/* ================= MAIN ================= */}

        <div className="overflow-hidden">

          {/* ROLE */}

          <motion.p
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: stage >= 1 ? 0 : 40,
              opacity: stage >= 1 ? 1 : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              mb-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-lime-400
              sm:mb-5
              sm:text-sm
            "
          >
            Full-Stack Developer
          </motion.p>

          {/* DHARAMVEER */}

          <motion.h1
            initial={{
              y: 120,
              opacity: 0,
            }}
            animate={{
              y: stage >= 1 ? 0 : 120,
              opacity: stage >= 1 ? 1 : 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              select-none
              whitespace-nowrap
              text-[12.5vw]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.045em]
              sm:text-[12vw]
              lg:text-[10.5vw]
            "
          >
            DHARAMVEER
          </motion.h1>

          {/* SAHU */}

          <motion.h2
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: stage >= 2 ? 0 : 100,
              opacity: stage >= 2 ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              mt-2
              select-none
              whitespace-nowrap
              text-[12.5vw]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.045em]
              text-lime-400
              sm:mt-4
              sm:text-[12vw]
              lg:text-[10.5vw]
            "
          >
            SAHU
          </motion.h2>

        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-8
            sm:mt-16
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >

          {/* POSITIONING */}

          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: stage >= 2 ? 0 : 20,
              opacity: stage >= 2 ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-gray-300
                sm:text-xs
              "
            >
              Building Web Experiences
            </p>

            <p
              className="
                mt-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-gray-500
                sm:text-xs
              "
            >
              Exploring AI & Real-Time Systems
            </p>
          </motion.div>

          {/* ================= PROGRESS ================= */}

          <div className="w-full max-w-xs">

            <div
              className="
                mb-2
                flex
                items-center
                justify-between
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-gray-500
                sm:text-[10px]
              "
            >
              <span>
                Initializing
              </span>

              <span className="text-gray-400">
                {percentage}%
              </span>
            </div>

            <div className="h-[2px] w-full bg-white/10">

              <motion.div
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: progress,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="h-full bg-lime-400"
              />

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default Intro;