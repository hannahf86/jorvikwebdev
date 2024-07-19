/* eslint-disable react/prop-types */

// REACT
import { useRef } from "react";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// MOTION
import { motion } from "framer-motion";

// ICONS
import { FaCheck } from "react-icons/fa";

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
      "bg-gradient-to-b from-green to-lightGreen h-screen w-screen z-0 ",
    textContainer: "relative mx-10 z-30",
    button:
      "text-mono bg-button text-white text-base rounded-xl w-60 px-8 py-3 mx-2 my-3 hover:bg-accent z-40",
    logo: "flex flex-col justify-center items-center pt-24",
    descContainer: "flex flex-col mx-10 text-center",
    serviceCard:
      "bg-white m-10 p-8 rounded-lg border-2 border-white hover:border-accent",
    cardLayout: "grid grid-cols-3 grid-rows-10",
    cardImage: "w-32 col-start-1 row-span-2",
    cardTitle:
      "text-left pl-2 font-bold text-xl text-black col-start-2 col-span-2  self-center",
    price: "text-left pl-2 col-start-2",
    cardDesc: "row-start-3 row-span-10 col-span-3 col-start-1 mt-4",
    listItem: "list-none my-2 ml-4",
  };

  const textStyles = {
    logoText: "text-white font-bold",
    title: "text-white text-2xl pb-8 text-center ",
    subtitle:
      "text-lightGreen tracking-widest text-center font-bold text-5xl pt-4 pb-4 ",
    subtitleAccent:
      "underline decoration-accent decoration-wavy text-md text-white font-bold",
    desc: "text-white text-base text-center ",
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
          <h2 className={textStyles.title}>
            <motion.b>Let&apos;s</motion.b> work together
          </h2>
        </div>

        <div className="subtitle">
          <h1 className={textStyles.subtitle}>
            <motion.b>Services</motion.b>
          </h1>
          <div className={layoutStyles.descContainer}>
            <h3 className={textStyles.desc}>
              All websites come with up-to-date security and accessibility
              requirements
            </h3>
            <h3 className={textStyles.subtitleAccent}>as standard.</h3>
          </div>
        </div>
      </motion.div>

      {/* SERVICES CONTAINER */}
      <motion.div className="servicesContainer" variants={variants}>
        {/* ITEM 01 */}
        <Link to="fasttrack">
          <div className={layoutStyles.serviceCard}>
            <div className={layoutStyles.cardLayout}>
              <img
                src="./FastTrack.webp"
                alt="fast track build image"
                className={layoutStyles.cardImage}
              />
              <h2 className={layoutStyles.cardTitle}>FastTrack Build</h2>
              <h3 className={layoutStyles.cardDesc}>
                {/* DETAILS */}
                <div className="flex items-center">
                  <FaCheck />
                  <li className={layoutStyles.listItem}>Up to 4 pages</li>
                </div>
                <div className="flex items-center">
                  <FaCheck />
                  <li className={layoutStyles.listItem}>
                    Modern UI responsive design
                  </li>
                </div>
                <div className="flex items-center">
                  <FaCheck />
                  <li className={layoutStyles.listItem}>
                    Contact form with 1 custom email
                  </li>
                </div>
                <div className="flex items-center">
                  <FaCheck />{" "}
                  <li className={layoutStyles.listItem}>
                    Footer & Google approved sitemap
                  </li>
                </div>
                <div className="flex items-center">
                  <FaCheck />{" "}
                  <li className={layoutStyles.listItem}>FREE favicon</li>
                </div>
                <div className="flex items-center">
                  <FaCheck />{" "}
                  <li className={layoutStyles.listItem}>Two calls to action</li>
                </div>
                <div className="flex items-center">
                  <FaCheck />
                  <li className={layoutStyles.listItem}>
                    Up to 5 stock photos
                  </li>
                </div>
                <div className="flex items-center">
                  <FaCheck />{" "}
                  <li className={layoutStyles.listItem}>
                    Links to your social media pages
                  </li>
                </div>
                <div className="flex items-center">
                  <FaCheck />
                  <li className={layoutStyles.listItem}>
                    Receive all files upon completion
                  </li>
                </div>
              </h3>
              <h4 className={layoutStyles.price}>from £150</h4>
            </div>
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
