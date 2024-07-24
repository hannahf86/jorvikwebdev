// REACT
import { useRef } from "react";

// REACT ACCORDION
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// STYLES
import "./accordion.css";

// MOTION
import { motion } from "framer-motion";

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

const Faqs = () => {
  const ref = useRef();

  // STYLES
  const layoutStyles = {
    background: "bg-green to-lightGreen h-full w-screen z-0 ",
    buttonContainer:
      "relative flex flex-col justify-center items-center my-8 bg-white w-full md:py-8",
    serviceCard:
      "bg-white m-10 p-8 rounded-lg border-2 border-white hover:border-accent flex flex-col justify-center items-center",
    cardImage: "w-80 ",
    textContainer: "relative mx-10 md:px-12 lg:px-20 xl:px-40",
  };

  const textStyles = {
    title: "text-white pt-32 pb-8 text-center text-5xl md:text-4xl",
    subtitle:
      "text-lightGreen tracking-widest text-center font-bold text-5xl pt-4 pb-4 ",
    subtitleAccent:
      "underline decoration-accent decoration-wavy text-md text-white font-bold",
    questionText: "text-white text-md bg-green mx-4 mb-4",
    listItem: "list-disc text-white my-2 ml-8",
  };

  return (
    <motion.div
      className={layoutStyles.background}
      id="faqs"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}>
      <motion.div className="titleContainer" variants={variants}>
        <h1 className={textStyles.title}>Frequently Asked Questions</h1>
      </motion.div>

      <motion.div className={layoutStyles.textContainer} variants={variants}>
        {/* Q1 */}
        <motion.div className="box">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Can you redesign my existing website?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={textStyles.questionText}>
                Absolutely! We specialise in website redesigns! We can improve:
                <li className={textStyles.listItem}>
                  <strong>User Friendly and Responsive UI Design</strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong>Functional User Experience</strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong>Website structure</strong>
                </li>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Q2 */}
        <motion.div className="box">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How long does it take to build a website?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={textStyles.questionText}>
                For our starter <a href="#day">FastTrack Build</a> we aim to
                deliver the website within 2 working days after we have received
                all your information, i.e. images, text etc.
                <br />
                <br />
                For our more advanced builds, depending on the size, we aim to
                have this to you between 5 working days to a month, depening on
                the size from initial consultation to launch.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Q3 */}
        <motion.div className="box">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How much does a website cost?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={textStyles.questionText}>
                Build packages start from £150. You can find out more on our{" "}
                <a href="/#services">Services</a> page . Alternatively, you can
                contact us directly via our <a href="/#contact">Contact</a> page
                for more personalised pricing.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Q4 */}
        <motion.div className="box">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Do you provide website maintenance services?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={textStyles.questionText}>
                Yes we absolutely do! This can be funded by paying our hourly
                rate of £50 or you can join the JWD Squad!
                <br />
                <br />
                For a monthly subscription of £15, you can join the{" "}
                <a href="/#subs">JWD Squad</a> and have access to services such
                as:
                <li className={textStyles.listItem}>
                  <strong>
                    4 hours of content updates spread throughout 12 months to
                    use as you see fit
                  </strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong>Servicing and maintenance when required</strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong>Security and accessibility updates</strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong>
                    20% reduction in fees for projects you buy in the future.
                  </strong>
                </li>
                Plus more! Find out how you can join the JWD Squad and save on
                website updates and maintenance <a href="/#jwdSquad">here</a>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Q5 */}
        <motion.div className="box">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Do you offer SEO services?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={textStyles.questionText}>
                We offer basic SEO for your website in our StartUp and Business
                Build packages. This will include a meta description, an
                effective website title and the use of keywords and phrases for
                on-page SEO.
                <br />
                {/* For more information on SEO tips as a business owner, please see
                our blog which can be found <a href="#">here</a> */}
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Q6 */}
        <motion.div className="box">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Do you provide content writing for websites?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={textStyles.questionText}>
                Yes, but at an additional cost to all packages
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Q7 */}
        <motion.div className="box">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How do you ensure the security of my website?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={textStyles.questionText}>
                The security of your website is built into our build process.
                This means we implement the best practices such as secure coding
                standards, SSL certificates across all packages.
                <br />
                <br />
                As a member of the JWD Squad aka our technical support
                subscription service, we provide regular software updates and
                ongoing security monitoring to protect against threats and
                vulnerabilities through the use of the Vercel hosting platform.
                <br />
                <br />
                You can find out more about the JWD Squad{" "}
                <a href="/#jwdSquad">here</a>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Q8 */}
        <motion.div className="box">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Will my website be mobile-friendly?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={textStyles.questionText}>
                Yes, all websites we build are designed to be responsive and
                accessible for all devices, including screen readers.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Q9 */}
        <motion.div className="box">
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Will you create and edit graphics for my website?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={textStyles.questionText}>
                This is something we can do, however there will be as additional
                cost, plus an extension to your estimated build time.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>

      <div className={layoutStyles.buttonContainer}>
        <h3 className="mx-10 md:mx-20 text-center">
          At Jorvik Web Dev, transparency is at the core of our ethos. <br />
          <br />
          If your question has not been answered above, please do not hesitate
          to contact our Chief, Hannah directly via{" "}
          <strong className="text-button hover:text-accent cursor-pointer">
            hello@jorvikweb.dev
          </strong>{" "}
          or through our contact page.
        </h3>
      </div>
    </motion.div>
  );
};

export default Faqs;
