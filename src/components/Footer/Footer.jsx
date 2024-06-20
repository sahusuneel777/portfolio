import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
import { mapUrl } from "../../utils/data";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>


      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <a href={mapUrl}
            >Shilpa Hills, Kothaguda, Gachibowli, Hyderabad</a>
          </div>
          <ul className={css.menu}>
            <li><a href="#services">Services</a></li>
            <li><a href="#works">Works</a></li>
            <li>Notes</li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;