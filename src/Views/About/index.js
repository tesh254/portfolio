import React from "react";
import "./index.scss";

const About = () => (
  <div className="about-view">
    <section>
      <h1>About</h1>
      <p>
        Hi there, I am <span className="bold">Erick Wachira</span>. I really
        enjoy working with modern web technologies like React, Next, Node, and
        Firebase, I share what I learn about them on my personal{" "}
        <a href="https://werick.codes" className="bold">
          blog
        </a>
      </p>
      <h3>Stacks</h3>
      <p>
        Being a fullstack developer I tend to work with multiple stacks on
        multiple projects. These include:
        <ul>
          <li>Node</li>
          <li>Reactjs Library</li>
          <li>Nextjs Framework</li>
          <li>PHP (but not much)</li>
        </ul>
      </p>
      <h3>Work</h3>
      <p>
        I am currently a <span className="bold">Software Developer </span>
        at{" "}
        <a href="https://andela.com" target="_blank" className="bold">
          Andela
        </a>
      </p>
      <span>
        Follow and reach out to me on twitter{" "}
        <a
          href="https://twitter.com/wachira_dev?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="true"
          target="_blank"
        >
          Follow @wachira_dev
        </a>
      </span>
    </section>
  </div>
);

export default About;