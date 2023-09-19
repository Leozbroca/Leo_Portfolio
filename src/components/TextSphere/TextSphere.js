import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import "./styled.css";

const TextSphere = () => {
  useEffect(() => {
    const TagCloud = require("TagCloud");
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "R. Native",
      "Python",
      "Next",
      "NodeJS",
      "MySql",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB",
      "AWS",
      "FireBase",
      "Tests",
    ];

    const options = {
      radius: 250,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className="text-shpere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
