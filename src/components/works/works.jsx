import React from 'react'
import { workExp } from '../../utils/data'
import css from './works.module.scss'
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerChildren, staggerContainer, textVariant2, zoomIn } from '../../utils/motion'

const Works = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${css.wrapper}`}>
            <a className="container" id="works"></a>

            <div className={`innerWidth flexCenter ${css.container}`}>
                <span className='yPaddings primaryText'>My Work Experience</span>

                <div
                    className={`flexCenter ${css.experience}`}>
                    {workExp.map((work, i) => {
                        return (
                            <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                                <div className={css.post}>
                                    <h1>{work.place}</h1>
                                    <p>{work.tenure}</p>
                                </div>

                                <div className={css.role}>
                                    <h1>{work.role}</h1>
                                    <p>{work.detail}</p>
                                </div>
                            </motion.div>
                        )
                    })}

                    <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
                        <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={`${css.line}`}></motion.div>
                        <div><div className={css.circle} style={{ background: "#286F6C" }}></div></div>
                        <div><div className={css.circle} style={{ background: "#F2704E" }}></div></div>
                        {/* <div><div className={css.circle} style={{ background: "#EEC048" }}></div></div> */}
                    </motion.div>
                </div>

            </div>
        </motion.section>
    )
}

export default Works