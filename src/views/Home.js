  import React, { useRef } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/Projects.json";
import config from "../config.json";

export default function Home() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  document.title = "Home | realtechnerd";

  return (
    <>
      <div className="Home d-flex align-items-center justify-content-center text-center">
        <div>
          <h5 className="mb-0 text-white" style={{ fontFamily: "Manrope" }}>
            Hi, I'm
          </h5>
          <h1 className="text-white text-6xl" style={{ fontFamily: "Manrope" }}>
            <b>nithil krishnaraj</b>
          </h1>
          <h5 className="text-white" style={{ fontFamily: "Manrope" }}>
            Web developer, tech enthusiast, and YouTuber.
          </h5>
          <div className="btns mt-3">
            <Link className="lgbhydrogen lb px-3 hover:text-white" to="/about">
              About Me
            </Link>
            <a
              className="ml-1 lgbdanger px-3 lb hover:text-white"
              href={config.YOUTUBE_CHANNEL_LINK}
              target="_blank"
            >
              My Channel
            </a>
          </div>
          <div className="arrow bounce text-white">
            <button
              className="fa fa-chevron-down fa-2x text-white border-none bg-transparent"
              onClick={executeScroll}
            ></button>
          </div>
        </div>
      </div>
      <div className="HomeBottom" style={{ fontFamily: "Inter" }}>
        <h1 className="p-3 mt-2 text-center" ref={myRef}>
          My latest projects!
        </h1>
        <div className="HomeCards container">
          <Row>
            {ProjectData.slice(0, 3).map((i) => (
              <ProjectCard
                title={i.title}
                description={i.desc}
                image={i.img}
                key={i.id}
                id={i.id}
                link={i.link}
                gh={i.gh}
              />
            ))}
          </Row>
        </div>
      </div>
      <br />
    </>
  );
}
