import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import config from "../config.json";

export default function Footer() {
  return (
    <>
      <Nav
        className="justify-content-center bg-white p-1"
        style={{
          fontFamily: "Inter",
          boxShadow: "0px 0px 15px rgb(0 0 0 / 10%)",
        }}
      >
        <Nav.Item>
          <Link className="nav-link text-black" to="/">
            home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link text-black" to="/about">
            about
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link text-black" to="/projects">
            projects
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-black"
            href={config.OLD_WEBSITE_LINK}
            target="_blank"
          >
            old website
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
