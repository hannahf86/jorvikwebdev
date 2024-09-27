// MOTION
import { motion } from "framer-motion";

const About = () => {
  const layoutStyles = {
    background: "bg-green to-lightGreen h-full w-screen z-0 ",
    textContainer:
      "relative mx-8 z-30 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 xl:px-40",
    button:
      "text-mono bg-button text-white text-base rounded-xl w-60 px-8 py-3 mx-2 my-3 hover:bg-accent z-40",
    logoContainer: "flex flex-col justify-center items-center pt-32 pb-8",
    logo: "w-32 ",
    callToAction:
      "relative flex flex-col justify-center items-center my-8 py-8 px-1 bg-white w-full md:py-8 md:px-12 lg:px-20 xl:px-40",
  };

  const textStyles = {
    logoText: "text-white font-bold",
    tagline: "text-white text-md ",
    title: "text-lightGreen font-bold text-6xl pb-8 text-center ",
    subtitle: "text-white font-bold text-2xl pt-8 pb-4 text-center ",
    sectionTitle:
      "text-white underline decoration-accent decoration-double font-bold pt-6 pb-2 text-lg",
    desc: "text-white text-base  text-justify",
  };

  return (
    <div id="about" className={layoutStyles.background}>
      {/* LOGO CONTAINER */}
      <div id="logoContainer" className={layoutStyles.logoContainer}>
        <img
          src="/logo.png"
          alt="jorvik web dev logo"
          className={layoutStyles.logo}
        />
        <h3 className={textStyles.tagline}>
          <motion.b whileHover={{ color: "orange" }}>Peace</motion.b> of mind
          from a service you can trust
        </h3>
      </div>

      {/* TEXT CONTAINER */}
      <div className={layoutStyles.textContainer}>
        <h1 className={textStyles.title}>About</h1>
        <div>
          <h2 className={textStyles.subtitle}>Why us?</h2>
          <p className="text-center text-white text-lg pb-8">
            Welcome to Jorvik Web Dev! We are small, yet mighty!
          </p>
          <h2 className={textStyles.sectionTitle}>Who Are We?</h2>
          <p className="text-justify text-white text-base ">
            A small team based in the centre of York in the United Kingdom,
            hence &quot;Jorvik&quot;, which was the old name for York, and why
            we have the small lean towards Vikings across our brand.
            <br />
            <br />
          </p>
          <h2 className={textStyles.sectionTitle}>Our Philosophy</h2>
          <p className={textStyles.desc}>
            At the heart of Jorvik Web Dev is the belief in kindness and
            helpfulness. Behind every website is a person who wants their goal
            to succeed. We want to use our passion to help boost yours.
            <br />
            <br /> We operate ourselves with care, respect, and genuine
            enthusiasm from small single page applications, to gigantic and
            complex user based e-commerce websites.
            <br />
            <br />
            By approaching each project with empathy, we build not only
            successful digital products but also lasting relationships with our
            clients.
            <br />
            <br />
          </p>
          <h2 className={textStyles.sectionTitle}>Transparency</h2>
          <p className={textStyles.desc}>
            We believe in transparency across every aspect of our business. It
            has been our experience that the field of web design be confusing,
            full of jargon and even hidden costs.
            <br />
            <br />
            You will <strong>never</strong> have any hidden or extra costs after
            the contracts have been signed. The price agreed upon will remain
            the final price of the project (unless of course alterations are
            requested by the client).
            <br />
            <br />
            Our clients are kept in the loop at every stage of the development
            process. We provide clear timelines and regular progress updates, if
            requested.
            <br />
            <br />
            No hidden fees, no surprises—just straightforward, honest service.
            This commitment to transparency ensures that our clients can make
            informed decisions and feel confident in our partnership.
            <br />
            <br />
          </p>
          <h2 className={textStyles.sectionTitle}>Efficiency</h2>
          <p className={textStyles.desc}>
            Efficiency is key. It benefits both parties for JWD to be efficient.
            Our streamlined processes enable us to deliver the finished products
            on time and within budget.
            <br />
            <br />
          </p>
          <h2 className={textStyles.sectionTitle}>What We Actually Do</h2>
          <p className={textStyles.desc}>
            JWD specialises in website redesign, single page applications,
            websites for small businesses and startup companies, as well as
            e-commerce solutions.
            <br />
            <br />
            Whether you are a startup looking to make your mark or an
            established business looking for a change, we have the skills and
            experience to make it happen.
            <br />
            <br />
          </p>
          <h2 className={textStyles.sectionTitle}>Join Us </h2>
          <p className={textStyles.desc}>
            When you partner with JWD, you can take comfort in knowing what you
            see is what you get. No fuss, no drama llamas, just good business
            partnerships.
            <br />
            <br />
          </p>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className={layoutStyles.callToAction}>
        <h3 className="text-center font-bold text-black text-base">
          Let&apos;s work together!
          <br />
          <br />
          Hannah is ready for your requests!
          <br />
          <br /> Email {""}
          <strong className="text-button hover:text-accent cursor-pointer">
            hello@jorvikweb.dev
          </strong>{" "}
          with your project ideas.
        </h3>
      </div>
    </div>
  );
};

export default About;
