// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";
import { Billing, Team, Contact, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero, About } from "./components";
import Register from "./components/login/register";
import Login from "./components/login/login";
import { AuthProvider } from "./components/login/authContext";
import ProtectedRoute from "./components/login/protected";
import Dashboard from "./components/login/dashboard";
import Post from "./components/blog/int";
import Blogs from './components/blog/blog';
import BlogDetail from './components/blog/blogdetail';
import Gallery from "./components/gallery";
import PageNotFound from "./components/page";
import Downloads from "./components/Downloads";

const App = () => (
  <AuthProvider>
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
              {/* <Route path="/register" element={<Register />} /> */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
              <Route path="/post" element={
                <ProtectedRoute>
                <Post />
                </ProtectedRoute>
                } />
              <Route path="/downloads" element={
                <ProtectedRoute>
                  <Downloads />
                </ProtectedRoute>
              } />
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
  </AuthProvider>
);

export default App;
