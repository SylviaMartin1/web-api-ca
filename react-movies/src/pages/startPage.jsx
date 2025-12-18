import React from "react";
import { Link } from "react-router";

const StartPage = () => {
  
    return(
        <>
            <p>
                Welcome to Movies! View your <Link to="/movies/home">Movies</Link> or your <Link to="/profile">Profile</Link>.
            </p>
            <p>
                <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to view movies!
            </p>
        </>
    );
  };

export default StartPage;