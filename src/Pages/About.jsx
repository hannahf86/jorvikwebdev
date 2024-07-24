// MOTION
import { motion } from "framer-motion";

const About = () => {
  const layoutStyles = {
    background:
      "bg-gradient-to-b from-green to-lightGreen h-full w-screen z-0 pb-12 px-6",
    textContainer:
      "relative mx-8 z-30 flex flex-col justify-center items-center",
    button:
      "text-mono bg-button text-white text-base rounded-xl w-60 px-8 py-3 mx-2 my-3 hover:bg-accent z-40",
    logoContainer: "flex flex-col justify-center items-center pt-32 pb-8",
    logo: "w-20 mr-2",
  };

  const textStyles = {
    logoText: "text-white font-bold",
    title: "text-lightGreen font-bold text-5xl pb-8 text-center ",
    subtitle: "text-white text-lg text-center",
    sectionTitle: "text-accent font-bold pt-6 pb-2 text-lg",
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
        <h3 className={textStyles.subtitle}>
          <motion.b whileHover={{ color: "orange" }}>Peace</motion.b> of mind
          from a <br />
          service you can trust
        </h3>
      </div>

      {/* TEXT CONTAINER */}
      <div className={layoutStyles.textContainer}>
        <h1 className={textStyles.title}>Why work with us?</h1>
        <div>
          <p className={textStyles.desc}>
            Welcome to Jorvik Web Dev, where innovation meets compassion in the
            digital realm. We are a premier web development agency committed to
            bringing your digital dreams to life while upholding our core values
            of kindness, transparency, and efficiency. Our team of dedicated
            professionals combines technical expertise with a human touch,
            ensuring every project is not just a success but a positive
            experience for all involved.
          </p>
          <h2 className={textStyles.sectionTitle}>Our Philosophy</h2>
          <p className={textStyles.desc}>
            At the heart of Jorvik web Dev is a steadfast belief in kindness. We
            understand that behind every website, app, or digital solution is a
            person with a vision. We strive to nurture that vision with care,
            respect, and genuine enthusiasm. Our team fosters an environment
            where collaboration thrives, and every idea is valued. By
            approaching each project with empathy, we build not only outstanding
            digital products but also lasting relationships with our clients.
          </p>
          <h2 className={textStyles.sectionTitle}>Transparency</h2>
          <p className={textStyles.desc}>
            We believe that transparency is the cornerstone of trust. From the
            initial consultation to project delivery, we maintain open and
            honest communication. Our clients are kept in the loop at every
            stage of the development process. We provide clear timelines,
            regular progress updates, and detailed reports. No hidden fees, no
            surprises—just straightforward, honest service. This commitment to
            transparency ensures that our clients can make informed decisions
            and feel confident in our partnership.
          </p>
          <h2 className={textStyles.sectionTitle}>Efficiency</h2>
          <p className={textStyles.desc}>
            In the fast-paced world of web development, efficiency is key. Our
            streamlined processes and agile methodologies enable us to deliver
            high-quality solutions on time and within budget. We leverage the
            latest technologies and best practices to ensure that every project
            is executed flawlessly. Our team is dedicated to continuous
            improvement, always seeking ways to optimize our workflows and
            enhance our services. By prioritizing efficiency, we help our
            clients achieve their goals faster and more effectively.
          </p>
          <h2 className={textStyles.sectionTitle}>What We Do</h2>
          <p className={textStyles.desc}>
            JWD specialises in a wide range of web development services,
            including website design, e-commerce solutions, mobile app
            development, and digital marketing. Whether you are a startup
            looking to make your mark or an established business seeking to
            enhance your online presence, we have the skills and experience to
            make it happen. Our customized solutions are tailored to meet the
            unique needs of each client, ensuring a perfect fit every time.
          </p>
          <h2 className={textStyles.sectionTitle}>Join Us </h2>
          <p className={textStyles.desc}>
            When you partner with JWD, you are not just hiring a web development
            agency—you are joining a community that values kindness, embraces
            transparency, and champions efficiency. Let us help you navigate the
            digital landscape and achieve your vision with a team that truly
            cares. Discover the JWD difference today. Together, we can build
            something remarkable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
