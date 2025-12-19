import React from "react"; 
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/authContext";


const StartPage = () => {

    const context = useContext(AuthContext);
  
    return context.isAuthenticated ? (
        <>
        <div style={{ textAlign: "center"}}>
        <h2 style={{ color: "white", fontSize: "32px", marginBottom: "20px" }}>
            Welcome {context.userName}! 
        </h2>
        <p style={{ fontSize: "20px", marginBottom: "20px", color: "white" }}>
            Discover movies or view your profile.
          </p>
          </div>
         <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              to="/movies/home"
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#b0060f",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Movies
            </Link>
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#b0060f",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Profile
            </Link>
          </div>
        </>
        
    ) : (
          <>
          <div style={{ textAlign: "center"}}>
          <h2 style={{ color: "white", fontSize: "36px", marginBottom: "20px" }}>
            Welcome!
          </h2>
          <p style={{ color: "white", fontSize: "26px", marginBottom: "20px" }}>
            Please log in or sign up to discover movies.
          </p>
          </div>
          <div style={{ color: "white", display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                backgroundColor: "#b0060f",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                backgroundColor: "#b0060f",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Signup
            </Link>
          </div>
        </>
    );
  };

export default StartPage;