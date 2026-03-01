import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <h2>Register</h2>
      {/* <label>Username:</label> */}
      <input type="text" placeholder="Enter username" /><br></br>
      {/* <label>Email:</label> */}
      <input type="email" placeholder="Enter email" /><br></br>
      {/* <label>Password:</label> */}
      <input type="password" placeholder="Enter password" />
      <Link to="/Login">
        <button>Register</button>
      </Link>
      <p className="login-text">
        Already have an account? <span>Login</span>
      </p>
    </div>
  );
}

export default Register;
