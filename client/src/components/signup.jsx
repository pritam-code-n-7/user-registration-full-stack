import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //password validation check
    if (password.length < 6) {
      setError("Password length should be at least 6 characters");
      return;
    }
    //if password is correct then proceed
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0 mt-3"
          >
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link
          to="/login"
          className="btn btn-default bg-light border rounded-0 text-decoration-none w-100"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
