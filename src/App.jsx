import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";
import { Billing,Team, Contact, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero, About } from "./components";
import  Register from "./components/login/register";
import  Login from "./components/login/login";
import  Dashboard from "./components/login/dashboard";
import  Blogs from "./components/blog/blog";
import  Post from "./components/blog/int";
import  BlogDetail from "./components/blog/bloglist";
import  Gallery from "./components/gallery";
import PageNotFound from "./components/page";
const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <CTA />

              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" component={BlogDetail} />
            <Route path="/post" element={<Post />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
