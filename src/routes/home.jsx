import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1631867675167-90a456a90863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80"
        title="For Beautiful Trips"
        text="Plan Your Journey With Us"
        buttonText="Travel Plans"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default Home;
