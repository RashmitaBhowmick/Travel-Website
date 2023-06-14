import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.jpeg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </div>
  );
}
export default About;
