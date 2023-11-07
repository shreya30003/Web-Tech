import React from "react";

const MainPage = (props) => {
  const mainPageStyle = {
    color: "white",
    textAlign: "center",
    padding: "40px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
  };

  const pstyle={
    fontSize:"20px"
  }

  return (
    <div style={mainPageStyle}>
      <h1 style={titleStyle}>{props.title}</h1>
      <p style={pstyle}>{props.description}</p>
    </div>
  );
};

export default MainPage;
