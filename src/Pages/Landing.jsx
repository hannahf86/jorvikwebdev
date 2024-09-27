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
  // TOP OF PAGE
  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // STYLES
  const layoutStyles = {
    background:
      "bg-gradient-to-b from-green to-lightGreen h-screen w-screen z-0 overflow-x-hidden relative p-6",
    logo: "flex flex-col justify-center items-center pt-24 lg:col-start-1 lg:row-start-1 lg:justify-start lg:items-start",
    textContainer:
      "relative mx-10 z-30 xl:grid grid-cols-4 grid-rows-3 lg:flex lg:flex-col",
    image: "hidden xl:block items-start",
    buttonContainer:
      "relative flex flex-col justify-center items-center md:flex-row lg:justify-start lg:col-start-1 lg:row-start-4",
    button:
      "text-mono bg-button text-white text-base rounded-xl w-60 px-8 py-3 mx-2 my-3 hover:bg-accent z-40 lg:mx-0 lg:mr-8 lg:text-md",
  };

  const textStyles = {
    logoText: "text-white font-bold lg:col-start-3 lg:row-start-1 lg:ml-3",
    title:
      "text-white font-bold text-5xl pb-8 text-center lg:text-left lg:col-start-1 lg:col-span-3 lg:row-start-2",
    subtitle:
      "text-lightGreen tracking-widest text-center font-bold text-md pt-12 xl:pt-2 pb-4 lg:text-left lg:row-start-2",
    desc: "text-white text-base text-center pb-4 lg:text-left lg:row-start-3 lg:col-span-2",
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
          <div className="lg:col-start-1 lg:col-span-3 lg:row-start-2">
            <motion.h2
              variants={textVariants}
              className={textStyles.subtitle}
              id="subtitle">
              LATEST PRODUCT - from £180
            </motion.h2>
            <motion.h1
              variants={textVariants}
              className={textStyles.title}
              id="title">
              FastTrack Build
            </motion.h1>
          </div>

          <motion.h3 className={textStyles.desc} id="description">
            We will design and build a <strong>high quality</strong>,{" "}
            <strong>responsive website</strong> with{" "}
            <strong>excellent user experience</strong> and{" "}
            <strong>basic SEO</strong> for your business or personal use in{" "}
            <strong>5</strong> working days.
            <br />
            <br />
            Friendly and professional, putting your goals first.
          </motion.h3>

          <div className="lg:col-start-3 lg:row-start-1 lg:row-span-4 lg:col-span-2 lg:justify-self-end lg:self-center">
            <img
              id="heroImage"
              src="/hero.png"
              alt="web design on different platforms"
              className={layoutStyles.image}
            />
          </div>

          <div className={layoutStyles.buttonContainer} id="buttonContainer">
            <Link to="services" onClick={toTop}>
              <button className={layoutStyles.button}>Find out more</button>
            </Link>
            <Link to="contact" onClick={toTop}>
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
