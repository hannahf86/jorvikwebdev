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

// REACT ROUTER DOM
import { Link } from "react-router-dom";

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
    background:
      "bg-gradient-to-b from-green to-lightGreen h-full w-screen z-0 pb-12",
    buttonContainer: "relative flex flex-col justify-center items-center my-8",
    button:
      "text-mono bg-button text-white text-md rounded-xl w-80 px-8 py-3 mx-2 my-3 hover:bg-accent z-40",
    serviceCard:
      "bg-white m-10 p-8 rounded-lg border-2 border-white hover:border-accent flex flex-col justify-center items-center",
    cardImage: "w-80 ",
    textContainer: "relative mx-10 z-30",
  };

  const textStyles = {
    title: "text-white text-2xl pt-32 pb-8 text-center text-5xl",
    subtitle:
      "text-lightGreen tracking-widest text-center font-bold text-5xl pt-4 pb-4 ",
    subtitleAccent:
      "underline decoration-accent decoration-wavy text-md text-white font-bold",
    questionText: "text-white text-md mx-3 my-3",
    listItem: "list-none text-white my-2",
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
                Absolutely! We specialise in website redesigns! We will improve:
                <li className={textStyles.listItem}>
                  <strong>User Friendly Design</strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong>Functional User Experience</strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong>Information Architecture</strong>
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
                For our starter <a href="#day">Website in a day</a> package the
                website can be delivered to you within 24 hours upon receiving
                all content required, with additional time for any addons you
                have included. <br />
                <br />
                For our more advanced packages, depending on the size, we aim to
                have this to you between 4-6 weeks from initial consultation to
                launch.
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
                For all our pricing, please refer to our{" "}
                <a href="#services">Services</a> page. Alternatively, you can
                contact us directly via our <a href="#contact">Contact</a> page
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
                Yes we absolutely do! For a monthly subscription of £12, you can
                join the <a href="/#subs">JWD Squad</a> and have access to
                services such as:
                <li className={textStyles.listItem}>
                  <strong>
                    4 x 1 hour content updates spread throughout the year or to
                    use as you see fit
                  </strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong> servicing and maintenance when required</strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong> security and accessibility updates</strong>
                </li>
                <li className={textStyles.listItem}>
                  <strong>
                    20% reduction in fees for projects you buy in the future.
                  </strong>
                </li>
                <br />
                We do also offer maintenance outside of the JWD Squad, but it
                will be priced at our hourly/daily rate.
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
                As standard, we offer basic SEO improvements for your website
                across all packages, however this is not currently something we
                specialise in... yet!
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
                No, this is not something we offer... yet! However we do offer
                client support documentation to help with utilising keywords
                etc. for when it comes to your writing.
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
                standards, SSL certificates, regular software updates,and
                ongoing security monitoring to protect against threats and
                vulnerabilities through the use of the Vercel hosting platform.
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
                This is something we can do, however there will be additional
                fees and we would encourage you to mention this in your initial
                meeting.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>

      <div className={layoutStyles.buttonContainer}>
        <Link to="contact">
          <button className={layoutStyles.button}>
            Get in touch for more info
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Faqs;
