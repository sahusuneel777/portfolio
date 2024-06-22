import React from 'react'
import css from './portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={css.wrapper}>
            <a className="anchor" id="latestWorks"></a>

            <div className={`innerWidth flexCenter  ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className='primaryText'>My Latest Works</span>
                        <p style={{ marginTop: "10px" }} className={'secondaryText'}>Perfect solution for digital experience</p>
                    </div>
                    <a className={css.exploreMore} href='https://github.com/sahusuneel777' target="_blank">Explore More</a>
                </div>

                <div className={`flexCenter paddings ${css.showCase}`}>
                    <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./linkedin1.jpg" alt="LinkedIn" />
                    <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./netflix.png" alt="netflix" />
                    <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./foodDelivery.png" alt="Quickbite" />
                </div>

            </div>
        </motion.section>
    )
}

export default Portfolio