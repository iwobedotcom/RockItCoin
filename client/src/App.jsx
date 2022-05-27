import React from "react";
import {
  Navbar,
  Hero,
  Services,
  GetStarted,
  Transactions,
  CTA,
  Testimonial,
  Footer,
} from "./components/";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="gradient__background">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <GetStarted />
      <Transactions />
      <CTA />
      <Testimonial />
      <div className="footer__background">
        <Footer />
      </div>
    </div>
  );
}
