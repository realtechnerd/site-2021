import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function PageTitle(props) {
  return (
    <Jumbotron
      style={{
        fontFamily: !props.font ? "Manrope" : props.font,
        borderRadius: "0",
      }}
      className="mb-0"
    >
      <h1 className="text-center text-white p-4 text-5xl">{props.title}</h1>
    </Jumbotron>
  );
}
