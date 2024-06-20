import Blogs from "./components/Blogs/blogs";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/works/works";
import css from './styles/app.module.scss'

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Works />
      <Portfolio />
      <Blogs />
      {/* <Testimonials /> */}
      <Footer/>

    </div>
  )
};

export default App;
