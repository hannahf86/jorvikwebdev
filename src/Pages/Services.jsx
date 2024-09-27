/* eslint-disable react/prop-types */

// REACT
import { useRef } from "react";

// MOTION
import { motion } from "framer-motion";

// // ICONS
// import { FaCheck } from "react-icons/fa";

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
      "bg-gradient-to-b from-green to-lightGreen h-full w-screen z-0 ",
    button:
      "text-mono bg-button text-white text-md rounded-xl py-4 px-4 my-3 hover:bg-accent mb-12 ",
    logo: "flex flex-col justify-center items-center pt-32",
    descContainer: "flex flex-col mx-10 text-center",

    servicesContainer: "flex flex-wrap justify-center mb-10",
    serviceCard:
      "bg-white mx-10 mt-10 p-6 rounded-lg border-2 border-white md:mx-6 max-w-80",

    cardLayout: "flex flex-col justify-center items-center",
    cardImage: "w-40 col-start-1 col-span-3 row-span-2 justify-self-center",
    cardTitle: "text-center font-bold text-lg text-black my-4",
    cardDesc: " text-center",

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

      {/* SERVICES HIGHLIGHT CONTAINER */}
      <motion.div
        className={layoutStyles.servicesContainer}
        variants={variants}>
        {/* --------- ITEM 01 --------- */}
        <div className={layoutStyles.serviceCard}>
          <div className={layoutStyles.cardLayout}>
            <img
              src="./FastTrack.webp"
              alt="fast track build image"
              className={layoutStyles.cardImage}
            />
            <h2 className={layoutStyles.cardTitle}>Web Design</h2>
            <p className={layoutStyles.cardDesc}>
              Make a statement and stand out with a modern and fully responsive
              design from our expert UI designer
            </p>
          </div>
        </div>

        {/* --------- ITEM 02 --------- */}
        <div className={layoutStyles.serviceCard}>
          <div className={layoutStyles.cardLayout}>
            <img
              src="./StartUp.webp"
              alt="fast track build image"
              className={layoutStyles.cardImage}
            />
            <h2 className={layoutStyles.cardTitle}>Web Development</h2>
            <p className={layoutStyles.cardDesc}>
              Our experienced developers will make sure your website will be
              fast and secure with
            </p>
          </div>
        </div>

        {/* --------- ITEM 03 --------- */}
        <div className={layoutStyles.serviceCard}>
          <div className={layoutStyles.cardLayout}>
            <img
              src="./Business.webp"
              alt="fast track build image"
              className={layoutStyles.cardImage}
            />
            <h2 className={layoutStyles.cardTitle}>e-Commerce</h2>

            <p className={layoutStyles.cardDesc}>
              Sell your products online and reach markets across the world using
              your choice of Shopify or Stripe
            </p>
          </div>
        </div>

        {/* --------- ITEM 04 --------- */}
        <div className={layoutStyles.serviceCard}>
          <div className={layoutStyles.cardLayout}>
            <img
              src="./Tech.webp"
              alt="fast track build image"
              className={layoutStyles.cardImage}
            />
            <h2 className={layoutStyles.cardTitle}>SEO</h2>

            <p className={layoutStyles.cardDesc}>
              Stay ahead of your competitors and rank higher with the latest SEO
              techniques
            </p>
          </div>
        </div>
      </motion.div>

      {/* SERVICES CONTAINER - ORIGINAL */}
      <motion.div
        className={layoutStyles.servicesContainer}
        variants={variants}>
        {/* --------- ITEM 01 --------- */}
        {/* <div className={layoutStyles.serviceCard}>
          <div className={layoutStyles.cardLayout}>
            <img
              src="./FastTrack.webp"
              alt="fast track build image"
              className={layoutStyles.cardImage}
            />
            <h2 className={layoutStyles.cardTitle}>FastTrack Build</h2>
            <h4 className={layoutStyles.price}>from £180</h4>

            <h3 className={layoutStyles.cardDesc}>
              <p className="mb-2 font-bold text-black self-start">
                Included in this package...
              </p> */}
        {/* DETAILS */}
        {/* <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Up to <strong>4</strong> pages
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Modern UI responsive design
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Contact form with <strong>1</strong> custom email
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  Footer & Google approved sitemap
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  <strong>FREE</strong> favicon
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>Two calls to action</li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Up to <strong>5</strong> stock photos
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  Links to your social media pages
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Receive all files upon completion
                </li>
              </div>
            </h3>
          </div>
        </div> */}

        {/* --------- ITEM 02 --------- */}

        {/* <div className={layoutStyles.serviceCard}>
          <div className={layoutStyles.cardLayout}>
            <img
              src="./StartUp.webp"
              alt="fast track build image"
              className={layoutStyles.cardImage}
            />
            <h2 className={layoutStyles.cardTitle}>StartUp Build</h2>
            <h3 className={layoutStyles.cardDesc}>
              <p className="mb-2 font-bold text-black">
                Included in this package...
              </p>
              {/* DETAILS */}
        {/* <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Up to <strong>6</strong> pages
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Modern UI responsive design
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Contact form with <strong>3</strong> custom email
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  Footer & Google approved sitemap
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  <strong>FREE</strong> favicon
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>Two calls to action</li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Up to <strong>8</strong> stock photos
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  Links to your social media pages
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  Basic SEO implementation
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  <strong>FREE</strong> domain set up
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  One year&apos;s <strong>FREE</strong> hosting
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Receive all files upon completion
                </li>
              </div>
            </h3>
            <h4 className={layoutStyles.price}>from £295</h4>
          </div> 
        </div> */}

        {/* --------- ITEM 03 --------- */}

        {/* <div className={layoutStyles.serviceCard}>
          <div className={layoutStyles.cardLayout}>
            <img
              src="./Business.webp"
              alt="business build image"
              className={layoutStyles.cardImage}
            />
            <h2 className={layoutStyles.cardTitle}>Business Build</h2>
            <h3 className={layoutStyles.cardDesc}>
              <p className="mb-2 font-bold text-black">
                Included in this package...
              </p> */}
        {/* DETAILS */}
        {/* <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Up to <strong>10</strong> pages
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Modern UI responsive design
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Animated page transitions
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Animated menu navigation
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>Image gallery design</li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  UX research & user journeys
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Contact form with <strong>5</strong> custom email
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  Footer & Google approved sitemap
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  <strong>FREE</strong> favicon
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>Two calls to action</li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Up to <strong>10</strong> stock photos
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  Links to your social media pages
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  Basic SEO implementation
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  Analytics implementation
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  <strong>FREE</strong> domain set up
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />{" "}
                <li className={layoutStyles.listItem}>
                  One year&apos;s <strong>FREE</strong> hosting
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Receive all files upon completion
                </li>
              </div>
            </h3> */}
        {/* <h4 className={layoutStyles.price}>from £550</h4> */}
        {/* </div>
        </div> */}
      </motion.div>

      {/* --------- CALL TO ACTION --------- */}
      <div className={layoutStyles.ctaContainer}>
        <div>
          <a href="/contact">
            <button className={layoutStyles.button}>
              Book your website now
            </button>
          </a>
        </div>

        <h3 className={textStyles.ctaTitle}>
          Can&apos;t find exactly what you&apos;re looking for?
        </h3>
        <p className="pt-2 pb-4 text-md">
          We&apos;re here to help you achieve your goal, whether its personal or
          business.
        </p>
        <p className="text-md">
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

export default Services;
