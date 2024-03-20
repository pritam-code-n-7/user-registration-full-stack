import { Link } from "react-router-dom";
import './Body.css'; 

function Body() {
  return (
    <div className="body-container">
      <div className="body-content">
        <h1>Welcome to Our Website</h1>
        <p>Sign up to access exclusive content and features.</p>
        <Link to="/register" className="btn btn-success">
          Register Here
        </Link>
      </div>
    </div>
  );
}

export default Body;
