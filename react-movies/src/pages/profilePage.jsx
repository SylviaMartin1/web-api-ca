import React from "react"; 
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router";

const ProfilePage = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
  
    return context.isAuthenticated ? (
        <p style={{ color: "white" }}>
            User profile: {context.userName}
        </p>


    ) : (
        <p style={{ color: "white" }}>
            You must log in to see your profile! {" "}
            <button onClick={() => navigate('/login')}>Login</button>
      </p>
    );
};

export default ProfilePage;
