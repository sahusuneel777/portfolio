import React from 'react'
import css from './Hero.module.scss'
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="services"></a>
            <motion.div
                variants={staggerContainer}
                whileInView="show"
                initial="hidden"
                viewport={{ once: false, amount: 0.25 }}

                className={`innerWidth ${css.container}`}>
                {/* upper part */}
                <div className={`${css.upperElements}`}>
                    <motion.span variants={fadeIn("right","tween",0.2,1)} className='primaryText'>Hello World, <br />I'm Suneel.</motion.span>
                    <motion.span variants={fadeIn('left',"tween",0.4,1)} className='secondaryText'>First, solve the problem.<br /> Then, write the code.
                       </motion.span>
                </div>

                <motion.div variants={fadeIn('up',"tween",0.2,1)} className={`${css.person}`}>
                    <motion.img variants={slideIn('up',"tween",0.2,1)} src='./suneel1.png' alt="my profile" />
                </motion.div>

                <a className={`${css.email}`} href='mailto:sahusuneel777@gmail.com'>
                    sahusuneel777
                </a>

                {/* lowerpart */}
                <div className={`${css.lowerElements}`}>
                    <motion.div 
                    variants={fadeIn('right',"tween",0.2,1)}
                    className={`${css.experience}`}>
                        <div className='primaryText'>2</div>
                        <div className='secondaryText'>
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div 
                     variants={fadeIn('left',"tween",0.2,1)}
                    className={`${css.certificate}`}>
                        <img src="./certificate.png" alt="certificate" />
                        <span>PROFESIONAL<br />
                            FULLSTACK DEVELOPER</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero