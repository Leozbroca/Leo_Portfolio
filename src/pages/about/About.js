import React, { useState } from "react";
import TextSphere from "../../components/TextSphere/TextSphere";

import {
  MainDiv,
  Main1,
  Main2,
  Title,
  Text,
  Decoration1,
  Decoration2,
  Decoration3,
  Decoration4,
  Decoration5,
  Decoration6,
  Decoration9,
  Decoration10,
  MyImg,
  Border,
  ImgBorder,
  FixedB,
} from "./styled";
import ScreenLoading from "../../components/screenLoading/ScreenLoading";
import Footer from "../../components/footer/Footer";
import leo from "../../assets/leo.jpg"

const AboutPage = () => {
  const [hasClick, setHasClick] = useState(false);

  const handleClick = () => {
    if (hasClick == true) {
      setHasClick(false);
    } else {
      setHasClick(true);
    }
  };

  return (
    <MainDiv>
      <ScreenLoading />
      <Main1>
        <FixedB>
        <Decoration1>{"<html>"}</Decoration1>
        <Decoration2>{"<body>"}</Decoration2>
        <Decoration3>{"<h2>"}</Decoration3>
        <Title>About me</Title>
        <Decoration4>{"</h2>"}</Decoration4>
        <br />
        <Decoration5>{"<p>"}</Decoration5>
        <Text>
        Professional with a solid academic background and diverse experience. I began my journey in the world of technology with a technical course in informatics, where I developed practical skills in various computing areas. Later, I sought to enhance my knowledge and obtained a degree in Financial Management, which provided me with a comprehensive understanding of financial and business matters.<br/><br/>

Currently, I am committed to expanding my knowledge in the field of Data Science, where I have been exploring advanced data analysis techniques and machine learning. My passion for technological challenges and thirst for learning have been crucial to my continuous professional growth.<br/><br/>

Furthermore, my experience includes working as a technical support specialist, which allowed me to develop problem-solving skills and excel in customer service. I am excited to apply this unique combination of skills and knowledge in future professional opportunities, contributing to innovative and impactful projects. <br/><br/>

In addition to my professional pursuits, I lead a fulfilling life outside of work, engaging in various hobbies and daily activities. I am an avid gamer and find enjoyment in exploring virtual worlds and challenging my skills in different gaming genres. <br/><br/>

Reading is another passion of mine, and I am constantly immersed in books across a wide range of genres, expanding my knowledge and imagination through literature. <br/><br/>

Caring for my dogs brings me immense joy and a sense of responsibility. Spending quality time with them, taking them for walks, and ensuring their well-being are essential parts of my daily routine. <br/><br/>

These hobbies and activities not only provide me with relaxation and entertainment but also foster a balanced and enriched life. I believe that the combination of my professional expertise and personal interests makes me a well-rounded individual, ready to tackle new challenges and embrace all aspects of life with enthusiasm. <br/>

        </Text>
        <Decoration6>{"</p>"}</Decoration6>
        <Decoration9>{"</body>"}</Decoration9>
        <Decoration10>{"</html>"}</Decoration10>
       
      </FixedB>
      </Main1>
      <Main2>
        <TextSphere />
      </Main2>
    </MainDiv>
  );
};

export default AboutPage;
