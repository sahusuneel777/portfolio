import React, { useState } from 'react'
import css from './Header.module.scss'
import { BiPhoneCall, BiMenuAltRight } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'


const Header = () => {

    const [headerShown, setHeaderShown] = useState(false)
    const headerShadow = useHeaderShadow()

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={headerVariants}
            className={`paddings ${css.wrapper}`}
            style={{ boxShadow: headerShadow }}
        >
            <div className={`flexCenter innerwidth ${css.container}`}>
                <div className={css.name}>
                    Suneel
                </div>
                <ul
                    style={getMenuStyles(headerShown)}
                    className={`flexCenter ${css.menu}`}>
                    <li><a href="">Services</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+91 9542384676</p>
                        <BiPhoneCall size={'20px'} />
                    </li>
                </ul>
                <div className={css.menuIcon} onClick={() => setHeaderShown((Prev) => !Prev)}>
                    <BiMenuAltRight size={'20px'} />
                </div>
            </div>

        </motion.div>
    )
}

export default Header