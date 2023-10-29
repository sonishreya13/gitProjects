// import { red } from '@mui/material/colors';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   let navigate = useNavigate(); 
//   const routeChange = () =>{ 
//     navigate('/home');
//   }
//   return (
//     <div>
//       <h1 className= 'h1'>Start your <span style={{color:"red"}}>ZAIKA</span>-licious journey</h1>
//       <form className='form2'>
//         <label>
//           Email:
//           <input type="email" />
//         </label>
//         <br></br>
//         <label>
//           Password:
//           <input type="password" />
//         </label>
//         <br></br>
//         <input type="submit" value="Login" onClick={routeChange} />
//       </form>
//     </div>
//   )
// }

// export default Login;
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// import "./Login.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  cnf_password: "",
};

const Login = () => {
  const [isMember, setIsMember] = useState(false);
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const registerUser = async (currentUser) => {
    try {
      const response = await axios.post(
        `https://git-projects-cj6th77rv-shreya-sonis-projects.vercel.app/api/food`,
        currentUser
      );
      console.log("User",response)
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/foods");
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post(
        `https://git-projects-cj6th77rv-shreya-sonis-projects.vercel.app/api/food`,
        currentUser
      );
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/foods");
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cnf_password } = values;
    console.log(values);
    const currentUser = { name, email, password, cnf_password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };
  return (
    <div className="contact-form">
      <h2>Login/Signup</h2>
      <div className="container">
        <form onSubmit={onSubmit}>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          {!isMember && (
            <div>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                required
                name="name"
                value={values.name}
                onChange={onHandleChange}
              />
            </div>
          )}
          <div>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
              name="email"
              required
              value={values.email}
              onChange={onHandleChange}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              variant="standard"
              required
              onChange={onHandleChange}
            />
          </div>
          {!isMember && (
            <div>
              <TextField
                id="standard-basic"
                label="Confirm Password"
                name="cnf_password"
                type="password"
                variant="standard"
                required
                onChange={onHandleChange}
              />
            </div>
          )}
          <Button variant="contained" type="submit">
            {isMember ? "Login" : "Register"}
          </Button>
          {isMember && (
            <p className="login-register-text">
              Don't have an account? Please
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
              >
                Register
              </span>
            </p>
          )}
          {!isMember && (
            <p className="login-register-text">
              Already have an account? Please
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
              >
                Login
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
