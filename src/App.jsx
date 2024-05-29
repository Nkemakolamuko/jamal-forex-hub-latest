import { createContext, useState } from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import MessageUs from "./components/MessageUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanCheckout from "./components/PlanCheckout";
import SignUpForm from "./components/SignUpForm";
import CookieConsent from "./components/AcceptCookies";

export const FormContext = createContext(null);

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const closeForm = () => setIsFormVisible(false);

  return (
    <FormContext.Provider value={{ isFormVisible, setIsFormVisible }}>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <Features />
                  <Pricing />
                  <Testimonials />
                  <Contact />
                  <Footer />
                  <MessageUs />
                  {/* Sign Up Form Overlay */}
                  <SignUpForm isVisible={isFormVisible} onClose={closeForm} />
                  <CookieConsent />
                </>
              }
            />
            <Route path="/plan-checkout/:id" element={<PlanCheckout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </FormContext.Provider>
  );
}

export default App;
