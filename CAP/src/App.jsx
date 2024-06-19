import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";
import { Billing, Phases, Contact, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, About } from "./components";

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
                <Phases />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<About />} />
            <Route path="/contact" element={<Contact />} />
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
