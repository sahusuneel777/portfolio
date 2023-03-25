import React from 'react'
import css from './Header.module.scss'

const Header = () => {
  return (
    <div className={`bg-primary ${css.wrapper}`}>
        <div className={css.wrapper}>
            <div className={css.name}>
                Suneel
            </div>
        </div>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </div>
  )
}

export default Header