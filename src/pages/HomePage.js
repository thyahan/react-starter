import React from "react";
import SignUpComponent from "../components/Sigup";

const HomePage = () => {
  console.count("render:");
  return (
    <div className="home-page">
      <SignUpComponent
        defaultValue={{ username: "thyahan" }}
        onSubmit={(value) => console.log(value)}
      />
    </div>
  );
};

export default HomePage;
