import React from "react";
import PageTitle from "../components/PageTitle";
import { Card, Container, Row, Col } from "react-bootstrap";
import config from "../config.json";

export default function About() {
  document.title = "About | realtechnerd";

  function getCurrentAge(year) {
    return new Date().getFullYear().toString() - year;
  }

  return (
    <>
      <div style={{ minHeight: "calc(100vh - 106px)" }}>
        <PageTitle title="About" />
        <br />
        <Container>
          <Card style={{ fontFamily: "Inter" }} className="site-card">
            <Card.Body>
              <Row>
                <Col sm>
                  <img
                    src={`${process.env.PUBLIC_URL}/imgs/simba.jpg`}
                    className="w-100 rounded-2xl"
                  />
                </Col>
                <Col className="p-3" sm>
                  <h2>Hey there!</h2>
                  <p>
                    My name is Nithil Krishnaraj! I'm a {getCurrentAge(2006)}{" "}
                    year old tech enthusiast. I have a passion for technology,
                    from computer programming to smartphones. In my free time, I
                    enjoy long bike rides around my community, listening to
                    music, and taking photos of nature and other things I find
                    fascinating. I started to code at the age of 13. I enjoy
                    writing on a blog I co-founded called TechTalkers. Founded
                    by me and a good friend of mine, TechTalkers is a
                    Medium-based blog that talks about the latest news in the
                    world of science, technology, and innovation. I also have a
                    YouTube on which I post high quality technology and
                    occasionally, gaming videos. Also, this site was created
                    using React.js, Bootstrap, Tailwind, and button.css.
                  </p>
                  <h5>Find me on:</h5>
                  <a
                    className="olgdanger px-3 lb"
                    href={config.YOUTUBE_CHANNEL_LINK}
                    target="_blank"
                  >
                    YouTube
                  </a>
                  <a
                    className="ml-1 odark px-3 lb"
                    href={config.GITHUB_PROFILE_LINK}
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    className="ml-1 odark px-3 lb"
                    href={config.MEDIUM_PROFILE_LINK}
                    target="_blank"
                  >
                    Medium
                  </a>
                  <a
                    className="ml-1 oprimary px-3 lb"
                    href={config.LINKEDIN_PROFILE_LINK}
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        <br />
      </div>
    </>
  );
}
