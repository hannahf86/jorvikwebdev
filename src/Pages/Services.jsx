/* eslint-disable react/prop-types */

// REACT
import { useRef } from "react";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// MOTION
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const layoutStyles = {
    background:
      "bg-gradient-to-b from-green to-lightGreen h-screen w-screen z-0 overflow-hidden",
    textContainer: "relative mx-10 z-30",
    button:
      "text-mono bg-button text-white text-base rounded-xl w-60 px-8 py-3 mx-2 my-3 hover:bg-accent z-40",
    logo: "flex flex-col justify-center items-center pt-24",
  };

  const textStyles = {
    logoText: "text-white font-bold",
    title: "text-white text-2xl pb-8 text-center ",
    subtitle:
      "text-lightGreen tracking-widest text-center font-bold text-5xl pt-4 pb-4 ",
    desc: "text-white text-base text-center pb-8 ",
  };

  return (
    <motion.div
      className="services"
      id="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}>
      {/* TITLE */}
      <motion.div className="titleContainer" variants={variants}>
        <div className={layoutStyles.logo}>
          <img src="/logo.png" alt="jorvik web dev logo" />
          <h2 className={textStyles.title}>
            <motion.b>Let&apos;s</motion.b> work together
          </h2>
        </div>

        <div className="subtitle">
          <h1 className={textStyles.subtitle}>
            <motion.b>Services</motion.b>
          </h1>
          <h3 className={textStyles.desc}>
            All websites come with up-to-date security and accessibility
            requirements as standard.
          </h3>
        </div>
      </motion.div>

      {/* SERVICES CONTAINER */}
      <motion.div className="servicesContainer" variants={variants}>
        {/* ITEM 01 */}
        <Link to="fasttrack">
          <div className="bg-white m-10 p-8 rounded-lg">
            <h2 className="text-center font-bold text-xl pb-4 text-black ">
              FastTrack Build
            </h2>
            <img src="./FastTrack.webp" className="pb-4 w-32" />
            <h3 className="description">
              <li>Up to 4 pages</li>
            </h3>
            <h4 className="price">from £150</h4>
          </div>
        </Link>

        {/* ITEM 02 */}
        <Link to="fasttrack">
          <div className="bg-white m-10 p-8 rounded-lg">
            <h2 className="text-center font-bold text-xl pb-4 text-black ">
              FastTrack Build
            </h2>
            <img src="./FastTrack.webp" className="pb-4 w-32" />
            <h3 className="description">
              <li>Up to 4 pages</li>
            </h3>
            <h4 className="price">from £150</h4>
          </div>
        </Link>

        {/* ITEM 03 */}
        <Link to="fasttrack">
          <div className="bg-white m-10 p-8 rounded-lg">
            <h2 className="text-center font-bold text-xl pb-4 text-black ">
              FastTrack Build
            </h2>
            <img src="./FastTrack.webp" className="pb-4 w-32" />
            <h3 className="description">
              <li>Up to 4 pages</li>
            </h3>
            <h4 className="price">from £150</h4>
          </div>
        </Link>

        {/* ITEM 04 */}
        <Link to="fasttrack">
          <div className="bg-white m-10 p-8 rounded-lg">
            <h2 className="text-center font-bold text-xl pb-4 text-black ">
              FastTrack Build
            </h2>
            <img src="./FastTrack.webp" className="pb-4 w-32" />
            <h3 className="description">
              <li>Up to 4 pages</li>
            </h3>
            <h4 className="price">from £150</h4>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Services;
