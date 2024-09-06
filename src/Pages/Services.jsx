/* eslint-disable react/prop-types */

// REACT
import { useRef } from "react";

// MOTION
import { motion } from "framer-motion";

// ICONS
import { FaCheck } from "react-icons/fa";
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
      "bg-white mx-10 mt-10 p-8 rounded-lg border-2 border-white md:mx-6 max-w-100",
    squadCard:
      "bg-white mx-10 mt-10 p-8 rounded-lg border-4 border-accent md:mx-6 max-w-100",
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

      {/* SERVICES CONTAINER */}
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
            <h2 className={layoutStyles.cardTitle}>FastTrack Build</h2>
            <h4 className={layoutStyles.price}>from £180</h4>

            <h3 className={layoutStyles.cardDesc}>
              <p className="mb-2 font-bold text-black self-start">
                Included in this package...
              </p>
              {/* DETAILS */}
              <div className="flex items-center">
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
        </div>

        {/* --------- ITEM 02 --------- */}

        <div className={layoutStyles.serviceCard}>
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
              <div className="flex items-center">
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
        </div>

        {/* --------- ITEM 03 --------- */}

        <div className={layoutStyles.serviceCard}>
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
              </p>
              {/* DETAILS */}
              <div className="flex items-center">
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
            </h3>
            <h4 className={layoutStyles.price}>from £550</h4>
          </div>
        </div>

        {/* --------- ITEM 04 --------- */}

        <div className={layoutStyles.squadCard}>
          <div className={layoutStyles.cardLayout}>
            <img
              src="./Business.webp"
              alt="business build image"
              className={layoutStyles.cardImage}
            />
            <h2 className={layoutStyles.cardTitle}>JWD Squad</h2>
            <h3 className={layoutStyles.cardDesc}>
              <p className="mb-2 font-bold text-black">
                Join our sqaud with a monthly subscription and receive the
                benefits of...
              </p>
              {/* DETAILS */}
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Security and accessibility updates
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Domain stability checks
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Two SEO updates over 12 months
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  25% discount on future products and services
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>
                  Four hours worth of content updates over 12 months
                </li>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-lightGreen" />
                <li className={layoutStyles.listItem}>Website maintenance</li>
              </div>
            </h3>
            <h4 className={layoutStyles.price}>£15 a month</h4>
          </div>
        </div>
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

export default Services;
