/* eslint-disable react/prop-types */

// REACT
import { useState } from "react";

// REACT ROUTER DOM
import { Outlet, Link } from "react-router-dom";

// PAGES
import Footer from "./Footer";

// MOTION
import { motion } from "framer-motion";

// COMPONENTS
import ToggleButton from "./ToggleButton";

// ICONS
import { HiHome, HiBriefcase, HiBookOpen, HiMail } from "react-icons/hi";
import { TbMessage2Question } from "react-icons/tb";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const RootNav = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };

  // TOP OF PAGE
  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // STYLES
  const mobileStyles = {
    container: "fixed w-screen h-24 bg-green z-40",
    logo: "absolute right-16 z-[99] cursor-pointer",
    fullMenu:
      "bg-white fixed w-screen h-screen p-20 md:p-0 flex flex-col justify-center items-center z-30 md:w-4/6 lg:w-3/6 ",
    menuItem:
      "bg-button text-white w-80 h-16 m-8 rounded-lg flex justify-center items-center sm:w-96 sm:h-16 sm:my-8 hover:bg-accent hover:text-white",
    menuIcon: "mr-2 tracking-widest text-md sm:text-md",
  };

  const desktopStyles = {
    container:
      "hidden md:block fixed flex w-3/6 top-0 right-0 h-24 bg-transparent z-40 items-center",
    linkSubContainer: "absolute top-8 right-6 flex items-center",
    link: "mx-12 font-bold text-white hover:bg-accent p-2 rounded-sm",
    button:
      "text-mono bg-button text-white text-sm rounded-lg px-6 py-3 hover:bg-accent",
  };

  return (
    <div id="rootNav">
      {/* MOBILE NAV */}
      <motion.div
        id="nav"
        className={mobileStyles.container}
        animate={open ? "open" : "closed"}>
        <div className={mobileStyles.logo}></div>

        <motion.div variants={variants} className={mobileStyles.fullMenu}>
          <motion.div onClick={handleNav}>
            <Link to="/" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <HiHome className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Home</p>
              </span>
            </Link>

            <Link to="services" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <HiBriefcase className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Services</p>
              </span>
            </Link>

            <Link to="about" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <HiBookOpen className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Why Us</p>
              </span>
            </Link>

            {/* <Link to="projects">
              <span className={mobileStyles.menuItem}>
                <HiDesktopComputer className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Projects</p>
              </span>
            </Link> */}

            <Link to="faqs" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <TbMessage2Question className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">FAQs</p>
              </span>
            </Link>

            <Link to="contact" onClick={toTop}>
              <span className={mobileStyles.menuItem}>
                <HiMail className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Contact</p>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <ToggleButton setOpen={setOpen} />
      </motion.div>

      {/* DESKTOP NAV */}
      <header className={desktopStyles.container}>
        <nav>
          {/* LINKS */}
          <div className={desktopStyles.linkSubContainer}>
            <Link to="services" onClick={toTop} className={desktopStyles.link}>
              SERVICES
            </Link>
            <Link to="faqs" onClick={toTop} className={desktopStyles.link}>
              FAQs
            </Link>
            <Link to="contact" onClick={toTop}>
              <button className={desktopStyles.button}>
                Book your website
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default RootNav;
