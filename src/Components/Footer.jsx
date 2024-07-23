// REACT ROUTER DOM

// ICONS
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // STYLES
  const layoutStyles = {
    container: "w-screen p-6 bg-green bottom-0 ",
    desc: "text-white text-xs mb-3",
    form: "flex",
    button:
      "text-mono bg-button text-white text-sm rounded-lg px-8 py-2 mx-2 hover:bg-accent",
    input: "px-2 rounded-md",
    socialContainer: "flex mt-3",
    icons: "text-white hover:text-accent mr-4 cursor-pointer",
    navContainer: "flex justify-between mt-4 text-white cursor-pointer",
    navLink: "hover:text-accent font-thin text-xs",
  };

  return (
    <div id="footer" className={layoutStyles.container}>
      <div id="col01">
        {/* NEWSLETTER */}
        <p className={layoutStyles.desc}>
          Sign up to our newsletter to receive updates, offers and tips
        </p>
        <form id="newsletter" className={layoutStyles.form}>
          <input placeholder="Email" className={layoutStyles.input} />
          <button className={layoutStyles.button}>Sign up</button>
        </form>
        {/* SOCIAL ICONS */}
        <div id="socialIcons" className={layoutStyles.socialContainer}>
          <FaFacebookSquare size={25} className={layoutStyles.icons} />
          <FaInstagram size={25} className={layoutStyles.icons} />
          <FaYoutube size={25} className={layoutStyles.icons} />
        </div>
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
        <Link to="projects" className={layoutStyles.navLink}>
          Projects
        </Link>
        <Link to="faqs" className={layoutStyles.navLink}>
          FAQs
        </Link>
        <Link to="contact" className={layoutStyles.navLink}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Footer;
