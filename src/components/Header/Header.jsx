import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import { BiPhoneCall, BiMenuAltRight } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'


const Header = () => {

    // const [headerShown, setHeaderShown] = useState(false)
    const headerShadow = useHeaderShadow()
    const [menuOpened, setMenuOpened] = useState(false);
    

    const menuRef = useRef(null)
    //to handle click outside of sidebar on mobile
    useOutsideAlerter({
        menuRef,
        setMenuOpened,
    });


    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={headerVariants}
            className={`bg-primary ${css.wrapper}`}
            style={{ boxShadow: headerShadow }}
        >
            <div className={`innerwidth xPaddings ${css.container} flexCenter`}>
                <div className={css.name}>
                    Suneel
                </div>
                <ul
                    ref={menuRef}
                    style={getMenuStyles(menuOpened)}
                    className={`flexCenter ${css.menu}`}>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#latestWorks">Portfolio</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>+91 9542384676</p>
                        <BiPhoneCall size={'20px'} />
                    </li>
                </ul>
                <div className={css.menuIcon} onClick={() => setMenuOpened((Prev) => !Prev)}>
                    <BiMenuAltRight size={'20px'} />
                </div>
            </div>

        </motion.div>
    )
}

export default Header