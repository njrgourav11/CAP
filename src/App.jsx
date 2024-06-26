import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";
import { Billing,Team, Contact, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero, About } from "./components";
import  Register from "./components/login/register";
import  Login from "./components/login/login";
import  Dashboard from "./components/login/dashboard";
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
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