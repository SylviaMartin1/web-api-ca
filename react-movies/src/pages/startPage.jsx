import React from "react"; 
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/authContext";


const StartPage = () => {

    const context = useContext(AuthContext);
  
    return context.isAuthenticated ? (
        <p style={{ color: "white" }}>
            Welcome {context.userName}! Discover  <Link to="/movies/home">Movies</Link> or view your <Link to="/profile">Profile</Link>.
        </p>
    ) : (
        <p style={{ color: "white" }}>
            <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to discover movies!
        </p>
    );
  };

export default StartPage;