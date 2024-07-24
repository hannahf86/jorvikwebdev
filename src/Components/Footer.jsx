// REACT ROUTER DOM

// ICONS
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // STYLES
  const layoutStyles = {
    container:
      "w-screen p-6 sm:px-10 bg-green bottom-0 md:grid grid-cols-4 grid-rows-3",
    logo: "w-20",
    newsletterContainer:
      "md:col-start-2 md:row-start-1 md:col-span-3 md:row-span-2",
    desc: "text-white text-sm mb-3",
    form: "flex",
    button:
      "text-mono bg-button text-white text-sm rounded-lg px-8 py-2 mx-2 hover:bg-accent",
    input: "px-2 rounded-md",
    socialContainer: "flex mt-3 md:ml-3",
    icons: "text-white hover:text-accent mr-4 cursor-pointer",
    navContainer:
      "flex justify-between mt-4 text-white cursor-pointer md:col-start-4 md:row-start-1 md:flex-col md:text-right md:row-span-3",
    navLink: "hover:text-accent font-thin text-xs",
    legalContainer:
      "flex flex-col justify-center mt-2 md:row-start-3 md:col-start-2 md:col-end-4",
    legalLinkContainer:
      "flex justify-between mx-10 sm:mx-32 md:mx-0 md:justify-start",
    privacy:
      "text-center font-thin text-white text-xs tracking-widest hover:text-accent md:text-left md:mr-20",
  };

  return (
    <div id="footer" className={layoutStyles.container}>
      {/* LOGO */}
      <div className="flex items-center mr-8">
        <img src="./logo.png" className={layoutStyles.logo} />
        <h3 className="text-white font-bold">JORVIK WEB DEV</h3>
      </div>
      {/* NEWSLETTER */}
      <div id="col01" className={layoutStyles.newsletterContainer}>
        <p className={layoutStyles.desc}>
          Sign up to our newsletter to receive updates, offers and tips
        </p>
        <form id="newsletter" className={layoutStyles.form}>
          <input placeholder="Email" className={layoutStyles.input} />
          <button className={layoutStyles.button}>Sign up</button>
        </form>
      </div>

      {/* SOCIAL ICONS */}
      <div id="socialIcons" className={layoutStyles.socialContainer}>
        <Link to="#">
          <FaFacebookSquare size={25} className={layoutStyles.icons} />
        </Link>
        <Link to="#">
          <FaInstagram size={25} className={layoutStyles.icons} />
        </Link>
        {/* <Link to="#">
            <FaYoutube size={25} className={layoutStyles.icons} />
          </Link> */}
      </div>

      {/* NAV */}
      <div id="navArea" className={layoutStyles.navContainer}>
        <Link to="/" className={layoutStyles.navLink}>
          Home
        </Link>
        <Link to="services" className={layoutStyles.navLink}>
          Services
        </Link>
        <Link to="about" className={layoutStyles.navLink}>
          About
        </Link>
        {/* <Link to="projects" className={layoutStyles.navLink}>
          Projects
        </Link> */}
        <Link to="faqs" className={layoutStyles.navLink}>
          FAQs
        </Link>
        <Link to="contact" className={layoutStyles.navLink}>
          Contact
        </Link>
      </div>
      {/* LEGAL */}
      <div id="legal" className={layoutStyles.legalContainer}>
        <p className="text-center md:text-left text-white">
          ________________________________________
        </p>
        <div className={layoutStyles.legalLinkContainer}>
          <Link to="privacyPolicy" className={layoutStyles.privacy}>
            PRIVACY POLICY
          </Link>
          <Link to="terms" className={layoutStyles.privacy}>
            TERMS OF USE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
