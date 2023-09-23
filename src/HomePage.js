import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <p>Please click the link below to log in or sign up.</p>
      <Link to="/auth">Log in or sign up</Link>
    </div>
  );
};

export default HomePage;
