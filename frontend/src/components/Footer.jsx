import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Car Rental</h3>
          <p>Reliable and affordable car rental services for all your travel needs.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@carrental.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Belgaum, Karnataka, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Car Rental. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
