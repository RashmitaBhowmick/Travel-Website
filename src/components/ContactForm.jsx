import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Get in Touch with Us</h1>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Phone Number" type="number" />
        <input placeholder="Subject" type="text" />
        <textarea placeholder="Message" rows="4" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default ContactForm;
