import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Process />
        <Testimonials />
        <CTASection />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
