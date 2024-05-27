import { useState } from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import MessageUs from "./components/MessageUs";

function App() {
  return (
    <div className="scroll-smooth md:overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <MessageUs />
    </div>
  );
}

export default App;
