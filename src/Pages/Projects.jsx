// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS

const Projects = () => {
  const layoutStyles = {
    background:
      "bg-gradient-to-b from-green to-lightGreen h-full w-screen z-0 pb-12",
    textContainer: "relative mx-10 z-30",
    button:
      "text-mono bg-button text-white text-base rounded-xl w-40 px-8 py-2 mx-2 mt-8 hover:bg-accent z-40",
    serviceCard:
      "bg-white m-10 p-8 rounded-lg border-2 border-white hover:border-accent flex flex-col justify-center items-center",
    cardImage: "w-80 ",
  };

  const textStyles = {
    title: "text-white text-2xl pt-32 pb-8 text-center text-5xl",
    subtitle:
      "text-lightGreen tracking-widest text-center font-bold text-5xl pt-4 pb-4 ",
    subtitleAccent:
      "underline decoration-accent decoration-wavy text-md text-white font-bold",
    desc: "text-white text-base text-center ",
    cardTitle: "text-left font-bold text-xl text-black text-center",
    cardSubtitle: "text-center pt-2 pb-4 text-green",
  };

  return (
    <div id="services" className={layoutStyles.background}>
      <h1 className={textStyles.title}>Projects</h1>
      <p className="mx-10 text-white text-center text-base">
        Take a look at our most recent projects below
      </p>

      {/* PROJECT #01 */}
      <div className={layoutStyles.serviceCard}>
        <h2 className={textStyles.cardTitle}>Isaac Cardow</h2>
        <h4 className={textStyles.cardSubtitle}>Musician&apos;s Portfolio</h4>
        <img
          src="./isaac.webp"
          alt="fast track build image"
          className={layoutStyles.cardImage}
        />
        <Link to="https://www.isaaccardow.com/" target="_blank">
          <button className={layoutStyles.button}>Visit</button>{" "}
        </Link>
      </div>

      {/* PROJECT #02 */}
      <div className={layoutStyles.serviceCard}>
        <h2 className={textStyles.cardTitle}>Childcare Invoice Generator</h2>
        <h4 className={textStyles.cardSubtitle}>Local Business</h4>
        <img
          src="./childcare.webp"
          alt="fast track build image"
          className={layoutStyles.cardImage}
        />
        <Link
          to="https://childcare-invoice-generator.vercel.app/"
          target="_blank">
          <button className={layoutStyles.button}>Visit</button>{" "}
        </Link>
      </div>

      {/* PROJECT #03 */}
      <div className={layoutStyles.serviceCard}>
        <h2 className={textStyles.cardTitle}>Landscaping Business</h2>
        <h4 className={textStyles.cardSubtitle}>Local Business</h4>
        <img
          src="./landscape.webp"
          alt="fast track build image"
          className={layoutStyles.cardImage}
        />
        <Link to="https://landscaping-pi.vercel.app/" target="_blank">
          <button className={layoutStyles.button}>Visit</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Projects;
