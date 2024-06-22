import React from 'react'
import css from './Blogs.module.scss'
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerChildren, staggerContainer, textVariant2, zoomIn } from '../../utils/motion'
import { blogs } from '../../utils/data'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${css.wrapper}`}>
            <a className="container" id="blogs"></a>

            <div className={`innerWidth flexCenter ${css.container}`}>
                <span className='yPaddings primaryText'>My Latest Blogs <a href='https://medium.com/@sahusuneel777' target='_blank' className={`secondaryText ${css.viewall}`}>View all</a></span>

                <div className={`flexCenter ${css.blogContainer}`}>
                  <div className={`yPaddings flexCenter ${css.showCase}`}>
                      <motion.img  variants={fadeIn("up", "tween", .5, .6)} src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jqEWFVc_wls1Gqb19-Qruw.png" alt="LinkedIn" />
                      <div className={css.blogDescription}>
                          <h1>{blogs[0].name}</h1>
                          <p>{blogs[0].description}</p>
                          <a style={{ textDecoration: 'none', color: 'inherit' }} href={blogs[0].link} target='_blank'>Read more</a>
                      </div>
                  </div>

                  <div className={css.allBlogs}>
                      {blogs.map((blog, i) => {
                          return (
                              <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.blog}`}>
                                  <div className={css.blogDescription}>
                                      <h1>{blog.name}</h1>
                                      <p>{blog.description}</p>
                                      {/* <p>Read more</p> */}
                                  </div>
                                  <button
                                      onClick={() => {
                                        window.open(blog.link, '_blank');
                                        //   window.location.href = blog.link
                                      }}
                                  >
                                      <FaRegArrowAltCircleRight size={'20px'} />
                                  </button>

                                  
                              </motion.div>
                          )
                      })}
                      </div>
                    </div>
              

            </div>
        </motion.section>
  )
}

export default Blogs