import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  // Navigate to Book Details
  const goToBookDetails = () => {
    // Here we can navigate to a route, e.g., '/books'
    navigate("/books");
  };

  return (
    <section className="contact">
      <h2>Contact Our Bookstore</h2>
      <p className="subtitle">
        Visit us or explore our books online. Click below to see book details and buy now!
      </p>

      <div className="contact-card">
        <div className="contact-info">
          <h3>📍 Address</h3>
          <p>Book Haven Store</p>
          <p>2nd Floor, Knowledge Plaza</p>
          <p>MG Road, Hyderabad</p>
          <p>Telangana, India</p>

          <h3>📧 Email</h3>
          <p>support@bookhaven.com</p>

          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-action">
          <h3>Ready to Buy?</h3>
          <p>Explore our collection and order your favorite books now.</p>
          <button className="buy-btn" onClick={goToBookDetails}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
