import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      
      {/* HERO SECTION */}
      <div className="home-hero">
        <div className="home-text">
          <h1>Welcome to Online Book Store 📚</h1>
          <p>
            Discover, read, and buy your favorite books anytime, anywhere.
          </p>

          <div className="home-buttons">
            <Link to="/books">
              <button className="btn-primary">Explore Books</button>
            </Link>
            <Link to="/cart">
              <button className="btn-secondary">View Cart</button>
            </Link>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="Books"
          className="home-img"
        />
      </div>

      {/* FEATURES SECTION */}
      <div className="features">
        <div className="feature-card">
          <h3>📖 Huge Collection</h3>
          <p>Programming, novels, academic & more</p>
        </div>

        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your books delivered quickly</p>
        </div>

        <div className="feature-card">
          <h3>💳 Secure Payment</h3>
          <p>Safe and trusted payment options</p>
        </div>
      </div>

    </section>
  );
}

export default Home;
