import "./TripStyles.css";
import Trip1 from "../assets/trip1.jpeg";
import Trip2 from "../assets/trip2.jpeg";
import Trip3 from "../assets/trip3.jpeg";

import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Our Upcoming Trips</h1>
      <p>Making dreams come true.See the World with Us</p>
      <div className="tripcard">
        <TripData
          img={Trip1}
          heading="Bali"
          text="Province of Indonesia, Bali is on every travel enthusiast’s list. With an abundance gift of nature, Bali is known for its alluring arts which includes traditional and modern dance forms, its splendid sculptures, its flashy paintings, excellent leather, beautiful metalworking and amazing music."
        />
        <TripData
          img={Trip3}
          heading="Greece"
          text="Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization.Greece is also known for its beaches, from the black sands of Santorini to the party resorts of Mykonos."
        />
        <TripData
          img={Trip2}
          heading="Maldives"
          text="The Maldives has one of the most delicate environments anywhere on the planet. Coral reefs are the foundation of the islands. They offer protection to the tiny islands as its natural defense system, and the country’s economy depends heavily on the health of its reefs and ecosystems."
        />
      </div>
    </div>
  );
}
export default Trip;
