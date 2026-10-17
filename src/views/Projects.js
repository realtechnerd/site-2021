import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/Projects.json";

export default function Projects() {
  const [search, setSearch] = useState("");
  document.title = "Projects | realtechnerd";
  return (
    <>
      <div style={{ minHeight: "calc(100vh - 106px)" }}>
        <PageTitle title="Projects" />
        <div className="p-3 text-center" style={{ fontFamily: "Inter" }}>
          <input
            type="search"
            className="p-2.5 border-none rounded-md shadow-sm outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for projects.."
          />
        </div>

        <Container>
          <Row>
            {ProjectData.filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              } else if (
                val.desc.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            }).map((i, idx) => (
              <ProjectCard
                title={i.title}
                description={i.desc}
                image={i.img}
                key={i.id}
                id={idx}
                link={i.link}
              />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
