import React from 'react'
import css from './Expertise.module.scss'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion'


const Expertise = () => {
    return (
        <section className={`${css.wrapper}`}>
            <motion.div
                variants={staggerContainer}
                whileInView="show"
                initial="hidden"
                viewport={{ once: false, amount: 0.25 }}
                className={`flexCenter yPaddings innerWidth ${css.container}`}>
                <a className="anchor" id="experience"></a>

                <div className={`${css.leftside}`}>
                    {projectExperience.map((exp, i) => {
                        return (<motion.div
                            variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                            key={i} className={`${css.exp}`}>
                            <exp.icon size={10} color="white" style={{ backgroundColor: exp.bg }} />
                            <div className={`${css.expDetails}`}>
                                <span>{exp.name}</span>
                                {/* <span className='secondaryText'>{`${exp.projects} projects`}</span> */}
                                <span className='secondaryText'>{`${exp.skills}`}</span>

                            </div>
                        </motion.div>)
                    })
                    }
                </div>

                <motion.div
                    variants={textVariant(0.5)}
                    className={`${css.rightside}`}>
                    <span className='primaryText'>What do i help?</span>
                    {WhatDoIHelp.map((help, i) => {
                        return (
                            <div className='secondaryText' key={i}>
                                {help}
                            </div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Expertise