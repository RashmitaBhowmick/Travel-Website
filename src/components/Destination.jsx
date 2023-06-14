import Customer1 from "../assets/cust1.jpeg";
import Customer2 from "../assets/cust2.jpeg";
import Customer3 from "../assets/cust3.jpeg";
import Customer4 from "../assets/cust4.jpeg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

function Destination() {
  return (
    <div className="destination">
      <h1>Tourist Stories</h1>
      <p>Call It A Dream</p>
      <DestinationData
        className="first-des"
        heading="New York"
        text="'New York, concrete jungle where dreams are made. There's nothing you can't do once you're in New York. These streets will make you feel brand new, big lights will inspire you..Let's hear it for New York! With RBTrips we had one of the best experience ever... it was one of the best decisions we ever made'"
        img1={Customer1}
        img2={Customer2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Japan"
        text="'I think my guide made my holiday a truly successful one. Akemi Nozawa was wonderful, nothing was ever too much. The whole group loved her, she was more than thoughtful and she supported everybody. I would not have had her patience!'"
        img1={Customer3}
        img2={Customer4}
      />
    </div>
  );
}
export default Destination;
