import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-img">
        <img src={props.img} alt="Image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default TripData;
