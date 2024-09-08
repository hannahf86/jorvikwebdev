/* eslint-disable react/prop-types */

// REACT
import { useRef } from "react";

// MOTION
import { motion } from "framer-motion";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { BsStars } from "react-icons/bs";

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

const Offer = () => {
  // TOP OF PAGE
  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const ref = useRef();

  const layoutStyles = {
    background: "bg-green h-full w-screen z-0 mb-12",
    button:
      "bg-button text-white text-sm rounded-md py-4 px-4 mt-12 hover:bg-accent ",
    logo: "flex flex-col justify-center items-center pt-32",
    gridContainer: "grid auto-cols-auto lg:grid-cols-3 ",
    cardContainer: "bg-white lg:mx-8 xl:mx-20 px-12 py-8 rounded-md",
    cardImage: "w-32 py-2 m-auto",
    listItem: "list-none my-2 ml-4 text-black",
  };

  const textStyles = {
    logoText: "text-white font-bold",
    title: "text-white text-2xl pb-8 text-center ",
    secondTitle:
      "text-accent text-4xl text-center flex content-center justify-center",
    subtitle:
      "text-lightGreen text-lg tracking-widest text-center font-bold xl:text-3xl lg:text-2xl pt-8 pb-4 ",
    savings: "text-white tracking-widest text-center text-lg lg:text-md pb-4 ",
    desc: "text-white text-base text-center ",
    ctaTitle: "text-accent text-lg font-bold",
  };

  return (
    <motion.div
      className={layoutStyles.background}
      id="offer"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}>
      {/* TITLE */}
      <motion.div variants={variants}>
        <div className={layoutStyles.logo}>
          <img src="/logo.png" alt="jorvik web dev logo" />
          <h1 className={textStyles.title}>
            <motion.b>JORVIK WEB DEV</motion.b>
          </h1>
        </div>

        <div className="flex flex-col mx-6 justify-items-center">
          <h1 className={textStyles.secondTitle}>
            <BsStars className="mr-4" />
            <motion.b>SEPTEMBER OFFERS</motion.b>
            <BsStars className="ml-4" />
          </h1>
          <div className={layoutStyles.gridContainer}>
            {/* ITEM 01 */}
            <div className="lg:col-start-1">
              <h2 className={textStyles.subtitle}>
                <motion.b>FastTrack Build</motion.b>
              </h2>
              <h3 className={textStyles.savings}>
                <motion.b>~ ONLY £99 | SAVE £81 ~</motion.b>
              </h3>

              <div className={layoutStyles.cardContainer}>
                <img
                  src="./FastTrack.webp"
                  alt="fast track build image"
                  className={layoutStyles.cardImage}
                />

                <div className="m-auto">
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Up to <strong>4</strong> pages
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Modern UI responsive design
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Contact form with <strong>1</strong> custom email
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Footer & Google approved sitemap
                    </li>
                  </div>

                  <div className="font-bold text-center pt-4">PLUS MORE!</div>

                  <div className="flex justify-center">
                    <Link to="services">
                      <button onClick={toTop} className={layoutStyles.button}>
                        Find out more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 02 */}
            <div className="lg:col-start-2">
              <h2 className={textStyles.subtitle}>
                <motion.b>StartUp Build</motion.b>
              </h2>
              <h3 className={textStyles.savings}>
                <motion.b>~ ONLY £195 | SAVE £100 ~</motion.b>
              </h3>

              <div className={layoutStyles.cardContainer}>
                <img
                  src="./StartUp.webp"
                  alt="fast track build image"
                  className={layoutStyles.cardImage}
                />

                <div className="m-auto">
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Up to <strong>6</strong> pages
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Modern UI responsive design
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Contact form with <strong>3</strong> custom email
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Footer & Google approved sitemap
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      <strong>FREE</strong> favicon
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Basic SEO implementation
                    </li>
                  </div>
                  <div className="font-bold text-center pt-4">PLUS MORE!</div>
                  <div className="flex justify-center">
                    <Link to="services">
                      <button onClick={toTop} className={layoutStyles.button}>
                        Find out more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 03 */}
            <div className="lg:col-start-3">
              <h2 className={textStyles.subtitle}>
                <motion.b>Business Build</motion.b>
              </h2>
              <h3 className={textStyles.savings}>
                <motion.b>~ ONLY £400 | SAVE £150 ~</motion.b>
              </h3>

              <div className={layoutStyles.cardContainer}>
                <img
                  src="./Business.webp"
                  alt="business build image"
                  className={layoutStyles.cardImage}
                />

                <div className="m-auto">
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Up to <strong>10</strong> pages
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Modern UI responsive design
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Contact form with <strong>3</strong> custom email
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Animated page transitions
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      UX research & user journeys
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Basic SEO implementation
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      <strong>FREE</strong> domain set up
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      One year&apos;s <strong>FREE</strong> hosting
                    </li>
                  </div>
                  <div className="flex items-center justify-center">
                    <li className={layoutStyles.listItem}>
                      Google analytics implementation
                    </li>
                  </div>
                  <div className="font-bold text-center pt-4">PLUS MORE!</div>
                  <div className="flex justify-center">
                    <Link to="services">
                      <button onClick={toTop} className={layoutStyles.button}>
                        Find out more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Offer;
