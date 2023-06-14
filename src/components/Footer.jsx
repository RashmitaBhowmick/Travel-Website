import "./FooterStyles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>RBTrips</h1>
          <p>Plan Your Journey With Us</p>
        </div>
        <div>
          <a href="/">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">Verification</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Partners</a>
          <a href="/">Collaboration</a>
          <a href="/">New Launches</a>
          <a href="/">Issues</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support Us</a>
          <a href="/">Trouble Shooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms and Condition</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
