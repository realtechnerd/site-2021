import React from "react";
import { Container } from "react-bootstrap";

export default function Error() {
  document.title = "Error! | realtechnerd";
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <Container className="text-center p-3">
        <img
          src={`${process.env.PUBLIC_URL}/logo192.png`}
          className="text-center"
        />
        <h1 className="mt-2" style={{ fontFamily: "Manrope" }}>
          404! Not Found!
        </h1>
      </Container>
    </div>
  );
}
