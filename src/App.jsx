import { useState } from "react";
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

function App() {
  return (
    <div className="scroll-smooth md:overflow-hidden">
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
              </>
            }
          />
          <Route path="/plan-checkout/:id" element={<PlanCheckout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
