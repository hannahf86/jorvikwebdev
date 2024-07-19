// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// MOTION
import { motion } from "framer-motion";

// motion details
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    z: 4,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
    z: -1,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 200,
    },
  },
};

const Landing = () => {
  // STYLES
  const layoutStyles = {
    background:
      "bg-gradient-to-b from-green to-lightGreen h-screen w-screen z-0 overflow-hidden relative",
    logo: "flex flex-col justify-center items-center pt-24",
    textContainer: "relative mx-10 z-30",
    image: "hidden md:block",
    buttonContainer: "relative flex flex-col justify-center items-center ",
    button:
      "text-mono bg-button text-white text-base rounded-xl w-60 px-8 py-3 mx-2 my-3 hover:bg-accent z-40",
  };

  const textStyles = {
    logoText: "text-white font-bold",
    title: "text-white font-bold text-5xl pb-8 text-center ",
    subtitle:
      "text-lightGreen tracking-widest text-center font-bold text-sm pt-12 pb-4 ",
    desc: "text-white text-base text-center pb-8 ",
    slidingText:
      "absolute -bottom-40 whitespace-nowrap z-10 text-9xl font-serif font-bold text-white/30",
  };

  return (
    <div id="Landing" className={layoutStyles.background}>
      <div id="wrapper">
        <motion.div
          id="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
          className={layoutStyles.textContainer}>
          <div className={layoutStyles.logo}>
            <img src="./logo.png" alt="jorvik web dev logo" />
            <p className={textStyles.logoText}>JORVIK WEB DEV</p>
          </div>
          <motion.h2
            variants={textVariants}
            className={textStyles.subtitle}
            id="subtitle">
            LATEST PRODUCT - from £150
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className={textStyles.title}
            id="title">
            FastTrack Build
          </motion.h1>

          <motion.h3 className={textStyles.desc} id="description">
            We will design and build a <strong>high quality</strong>,{" "}
            <strong>responsive website</strong> with{" "}
            <strong>excellent user experience</strong> and{" "}
            <strong>basic SEO</strong> for your business or personal use in{" "}
            <strong>24 hours</strong>. <br />
            <br />
            Friendly and professional, putting your goals first.
          </motion.h3>

          <img
            id="heroImage"
            src="/hero.png"
            alt="web design on different platforms"
            className={layoutStyles.image}
          />

          <div className={layoutStyles.buttonContainer} id="buttonContainer">
            <Link to="services">
              <button className={layoutStyles.button}>Find out more</button>
            </Link>
            <Link to="contact">
              <button className={layoutStyles.button}>Get in touch</button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={sliderVariants}
        initial="initial"
        // id="slidingText"
        className={textStyles.slidingText}
        animate="animate">
        Web dev ~ UI & UX design ~ SEO ~
      </motion.div>
    </div>
  );
};

export default Landing;
