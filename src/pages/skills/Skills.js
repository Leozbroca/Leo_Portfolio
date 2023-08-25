import React, { useEffect, useState } from "react";
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
  Decoration9resp,
  Decoration10resp,
  Skill,
  Skill1,
  SkillName,
  SkillPorcentage,
  LoadingRed,
  LoadingBlue,
  LoadingGreen,
  LoadingPurple,
  LoadingOrange,
  LoadingYellow,
  LoadingBack,
  LoadingLightBlue,
  Box,
  BoxContainer,
  StyledButton,
  Align,
  AlignName,
  PSpecial,
  DivBodyHtml
} from "./styled";
import ScreenLoading from "../../components/screenLoading/ScreenLoading";
import resume from "../../assets/cv_port.png"

const SkillsPage = () => {
  return (
    <MainDiv>
      <ScreenLoading />
      <Main1>
        <Decoration1>{"<html>"}</Decoration1>
        <Decoration2>{"<body>"}</Decoration2>
        <Decoration3>{"<h2>"}</Decoration3>
        <Title>
          <b>Skills {`&`} Experience</b>
        </Title>
        <Decoration4>{"</h2>"}</Decoration4><br/>
        <Decoration5>{"<p>"}</Decoration5>

        <Text>
        Passionate about technology, I am a professional with a strong focus on detail and a drive to constantly improve my skills. 1 years of experience in the field, I have developed a wide range of technical skills and the ability to adapt to new technologies quickly. My exceptional communication and teamwork skills, combined with my technical expertise, have allowed me to effectively collaborate with cross-functional teams to deliver high-quality projects on time. I am confident that my passion for technology, combined with my experience and skills, will allow me to make a valuable contribution to any organization.
        <br/><br/>
        Highly skilled Full Stack developer with extensive knowledge in <PSpecial>HTML</PSpecial>, <PSpecial>CSS</PSpecial>, <PSpecial>Javascript</PSpecial>, <PSpecial>React</PSpecial>, <PSpecial>Python</PSpecial>, <PSpecial>Node</PSpecial>, <PSpecial>MySQL</PSpecial>, <PSpecial>Firebase</PSpecial>, <PSpecial>AWS</PSpecial> and <PSpecial>Unit testing</PSpecial>. With a wealth of experience in project development, particularly using React on the front-end and Node.js on the back-end. I have strong skills in problem-solving, performance optimization, and system integration. I seek opportunities to continue growing as a professional and contribute to the success of complex and challenging projects.
        <br/><br/>
        In addition to programming, I am an experienced professional in technical support and customer service, with skills in problem solving and effective communication. I worked as technical support at a medical company, where I developed my skills in efficiently and accurately solving technology-related issues. Additionally, I had the opportunity to work as a store attendant, enhancing my ability to deal with customers in a courteous and professional manner.
        <br/><br/>
        Financial management graduate with extensive experience in financial data analysis, strategic planning and risk management. I have strong skills in interpreting financial reports as well as identifying investment opportunities and maximizing profits. I have held leadership positions in finance teams, having a proactive and innovative approach to resolving financial challenges.
        </Text>
        <Decoration6>{"</p>"}</Decoration6>
        <Align>
        <a href={resume} download="Resume">
        <StyledButton>Download my resume</StyledButton>
        </a>
        </Align>
        <Decoration9>{"</body>"}</Decoration9>
        <Decoration10>{"</html>"}</Decoration10>
      </Main1>
      <Main2>
        <Skill1>
        <AlignName>
          <SkillName>React</SkillName>
        </AlignName>
          <SkillPorcentage>
            <LoadingRed/>
            <LoadingBack/>
          </SkillPorcentage>
        </Skill1>
        <Skill>
        <AlignName>
        <SkillName>Node.js</SkillName>
        </AlignName>
          <SkillPorcentage>
            <LoadingPurple/>
            <LoadingBack/>
          </SkillPorcentage>
        </Skill>
        <Skill>
        <AlignName>
        <SkillName>Typescript</SkillName>
        </AlignName>
          <SkillPorcentage>
            <LoadingBlue/>
            <LoadingBack/>
          </SkillPorcentage>
        </Skill>
        <Skill>
        <AlignName>
        <SkillName>Python</SkillName>
        </AlignName>
          <SkillPorcentage>
            <LoadingGreen/>
            <LoadingBack/>
          </SkillPorcentage>
        </Skill>
        <Skill>
        <AlignName>
        <SkillName>Firebase</SkillName>
        </AlignName>
        <SkillPorcentage>
            <LoadingYellow/>
            <LoadingBack/>
          </SkillPorcentage>
        </Skill>
        <Skill>
        <AlignName>
        <SkillName>Mysql</SkillName>
        </AlignName>
        <SkillPorcentage>
            <LoadingLightBlue/>
            <LoadingBack/>
          </SkillPorcentage>
        </Skill>
        <Skill>
        <AlignName>
        <SkillName>Aws</SkillName>
        </AlignName>
        <SkillPorcentage>
            <LoadingOrange/>
            <LoadingBack/>
          </SkillPorcentage>
        </Skill>
        <BoxContainer>
        <Box className='animate__animated animate__slideInUp animate__delay-2s'>
          <h1>Tecnician Suport</h1>
          <p>Star Teleradiologia</p>
          <h2>2017-2018</h2>
          <p>home-office work as a technical support specialist during the night shift. Main activities: Development of administrative spreadsheets, customer service, and problem solving focused on the system. </p>
          </Box>
        <Box className='animate__animated animate__slideInUp animate__delay-2s'>
          <h1>Clerk</h1>
          <p>Guarabyte</p>
          <h2>2014-2015</h2>
          <p>Clerk at guarabyte store. Main activities: customer service.
            </p>
        </Box>
        </BoxContainer>
        <DivBodyHtml>
        <Decoration9resp>{"</body>"}</Decoration9resp>
        <Decoration10resp>{"</html>"}</Decoration10resp>
        </DivBodyHtml>
        
      </Main2>
    </MainDiv>
  );
};

export default SkillsPage;