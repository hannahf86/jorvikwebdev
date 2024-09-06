/* eslint-disable react/prop-types */

// REACT
import { useRef } from "react";

// MOTION
import { motion } from "framer-motion";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

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

const Blank = () => {
  const ref = useRef();

  const layoutStyles = {
    background:
      "bg-gradient-to-b from-green to-lightGreen h-full w-screen z-0 ",
    button:
      "text-mono bg-button text-white text-md rounded-xl py-4 px-4 my-3 hover:bg-accent mb-12 ",
    logo: "flex flex-col justify-center items-center pt-32",
    descContainer: "flex flex-col mx-10 text-center",

    servicesContainer: "flex flex-wrap justify-center mb-10",
    serviceCard:
      "bg-white mx-10 mt-10 p-8 rounded-lg border-2 border-white md:mx-6 max-w-100",
    cardLayout: "grid grid-cols-3 grid-rows-15",
    cardImage: "w-32 col-start-1 row-span-2 pr-1",
    cardTitle:
      "text-left pl-2 font-bold text-xl text-black col-start-2 col-span-2 self-center",
    price: "text-left pl-2 col-start-2 text-black",
    cardDesc: "row-start-3 row-span-10 col-span-3 col-start-1 items-start mt-4",
    listItem: "list-none my-2 ml-4 text-black",

    ctaContainer: "w-full bg-white py-8 px-10 text-center ",
  };

  const textStyles = {
    logoText: "text-white font-bold",
    title: "text-white text-2xl pb-8 text-center ",
    subtitle:
      "text-lightGreen tracking-widest text-center font-bold text-5xl pt-4 pb-4 ",
    subtitleAccent:
      "underline decoration-accent decoration-double text-md text-white font-bold",
    desc: "text-white text-base text-center ",

    ctaTitle: "text-accent text-lg font-bold",
  };

  return (
    <motion.div
      className={layoutStyles.background}
      id="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}>
      {/* TITLE */}
      <motion.div className="titleContainer" variants={variants}>
        <div className={layoutStyles.logo}>
          <img src="/logo.png" alt="jorvik web dev logo" />
          <h1 className={textStyles.title}>
            <motion.b>PAGE TITLE</motion.b>
          </h1>
        </div>

        <div className="subtitle">
          <h2 className={textStyles.subtitle}>
            <motion.b>SUBTITLE</motion.b>
          </h2>
          <div className={layoutStyles.descContainer}>
            <h3 className={textStyles.desc}>
              All websites come with up-to-date security and accessibility
              requirements{" "}
              <strong className={textStyles.subtitleAccent}>as standard</strong>
              .
            </h3>
            <br />
            <br />
            <h3 className="text-white text-base mt-8 xl:mx-40">
              Choose a build package that fits your criteria as closely as
              possible, then get in touch via our contact page, or you can email{" "}
              <strong className="font-bold "> hello@jorvikweb.dev</strong> to
              begin the consultation process.
            </h3>
            <br />
            <br />
          </div>
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className={layoutStyles.servicesContainer}
        variants={variants}>
        {/* --------- ITEM 01 --------- */}

        <div className={layoutStyles.serviceCard}></div>
      </motion.div>

      {/* --------- CALL TO ACTION --------- */}
      <div className={layoutStyles.ctaContainer}>
        <div>
          <Link>
            <button className={layoutStyles.button}>
              Book your website now
            </button>
          </Link>
        </div>

        <h3 className={textStyles.ctaTitle}>
          Can&apos;t find exactly what you&apos;re looking for?
        </h3>
        <p className="pt-2 pb-4">
          We&apos;re here to help you achieve your goal, whether its personal or
          business.
          <br />
          <br />
          Addons such as videos, blogs, image galleries, booking systems and
          more can be added.
        </p>
        <p>
          Email{" "}
          <strong className="text-button hover:text-accent cursor-pointer">
            hello@jorvikweb.dev
          </strong>{" "}
          to discuss your project.
        </p>
      </div>
    </motion.div>
  );
};

export default Blank;
