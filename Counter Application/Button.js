import React from "react";
// import Button from "react-bootstrap-button";
// import "bootstrap/dist/css/bootstrap.min.css";

const CounterButton = (props) => {
  return <button className={props.className} onClick={props.func} disabled={props.condition}>{props.content}</button>;
};

export default CounterButton;
