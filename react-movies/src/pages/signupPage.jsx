import React from "react"; 
import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from '../contexts/authContext';
import InfoButton from "../components/infoButton";

const SignUpPage = () => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [usernameError, setUsernameError ] = useState("")
  const [passwordError, setPasswordError ] = useState("")
  const [passwordMatchError, setPasswordMatchError] = useState("");
  
  const register = async () => {

    let usernameRegEx = /^[a-zA-Z0-9]{3,20}$/;
    const validUserName = usernameRegEx.test(userName)
    if (!validUserName) {
      setUsernameError("Username must be 3-20 characters and contain only letters and numbers.");
    }


    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);
     if (!validPassword) {
      setPasswordError("Password must be at least 8 chars, include uppercase, lowercase, number, and symbol.");
    }

     if (password !== passwordAgain) {
      setPasswordMatchError("Passwords do not match.");
    }

    if (validUserName && validPassword && password === passwordAgain) {
      let result = await context.register(userName, password);
      setRegistered(result);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginBottom: "20px"}}>
     <InfoButton description={
        `Usernames must be 3-20 characters and contain only letters and numbers.
        Passwords must be at least 8 characters long and include:
        • Uppercase letter
        • Lowercase letter
        • Number
        • Symbol`
          } />
      <h2 style={{ color: "white", textAlign: "center", fontSize: "36px" }}>Sign Up</h2>
      </div>
     
           <div style={{ textAlign: "center"}}>
      <input value={userName} placeholder="user name" style={{ width: "300px", marginBottom: "10px" }} onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      {usernameError && <p style={{color: "red"}}>{usernameError}</p>}
      


      <input value={password} type="password" placeholder="password" style={{ width: "300px", marginBottom: "10px" }} onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {passwordError && <p style={{color: "red"}}>{passwordError}</p>}

      <input value={passwordAgain} type="password" placeholder="password again" style={{ width: "300px", marginBottom: "10px" }} onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />
      {passwordMatchError && <p style={{color: "red"}}>{passwordMatchError}</p>}

      {/* Login web form  */}
      <button  
      style={{
        fontSize: "15px"
      }}
      onClick={register}>Register</button>
      </div>
    </>
  );
};

export default SignUpPage;