import { Route, Routes } from "react-router-dom"
import Home from "../home/home";
import About from "../about/about";
import Contact from "../contact/contact";
import Services from "../services/service";
import Portfolio from "../portfolio/portfolio";
import Blog from "../blog/blog";
import FAQ from "../faq/faq";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  )
}
export default RouterConfig;


