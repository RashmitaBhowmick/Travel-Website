import "./CardStyles.css";

function Cards() {
  return (
    <div className="card-container">
      <div className="form">
        <div className="Heading">
          <h1>Welcome to our Family</h1>
          <p>Please Enter your details</p>
        </div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone Number" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
      </div>
    </div>
  );
}
export default Cards;
