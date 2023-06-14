import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../assets/contact.jpeg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid contact"
        heroImg={contactImg}
        title="Contact Us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
export default Contact;
