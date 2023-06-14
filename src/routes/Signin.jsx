import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Card";
import sea from "../assets/sea.mp4";
import "../components/CardStyles.css";
function SignIn() {
  return (
    <div>
      <video src={sea} autoPlay muted loop id="myVideo" />
      <Navbar />
      <div className="content">
        <Cards />
      </div>
      <Footer />
    </div>
  );
}
export default SignIn;
