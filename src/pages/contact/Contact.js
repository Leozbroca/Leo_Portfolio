import React, { useEffect, useState } from "react";
import {
  MainDiv,
  Main1,
  Main2,
  Title,
  Text,
  Form,
  DivForm,
  StyledInputs,
  StyledInput1,
  StyledInput2,
  StyledInput3,
  StyledInput4,
  StyledInput5,
  Decoration1,
  Decoration2,
  Decoration3,
  Decoration4,
  Decoration5,
  Decoration6,
  Decoration7,
  Decoration8,
  Decoration9,
  Decoration10,
  Cv_photo,
  TitleCV,
  Button_CV,
  DivBodyHtml,
  Decoration10resp,
  Decoration9resp,
  DivFormAlign,
  MainDivSub
} from "./styled";
import ScreenLoading from "../../components/screenLoading/ScreenLoading";
import port from "../../assets/cv_port.png";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineAtSymbol } from "react-icons/hi";


const ContactPage = () => {
  const submiting = function (e) {
    e.preventDefault();
  };

  return (
    <MainDiv>
      <ScreenLoading />
      <MainDivSub>
      <Main1>
        <Decoration1>{"<html>"}</Decoration1>
        <Decoration2>{"<body>"}</Decoration2>
        <Decoration3>{"<h2>"}</Decoration3>
        <Title>
          <b>Contact me</b>
        </Title>
        <Decoration4>{"</h2>"}</Decoration4>
        <Decoration5>{"<p>"}</Decoration5>
        <Text>
          I'm interested in freelance opportunities - especially ambitious or
          large projects. However, if you have other request or question, don't
          hesitate to use the form.
        </Text>
        <Decoration6>{"</p>"}</Decoration6>

        <Decoration7>{"<form>"}</Decoration7>


        <Form onSubmit={submiting}>
          <DivForm>
            <StyledInput1 name="Name" type="text" placeholder="Name" />
            <StyledInput2 name="Email" type="text" placeholder="Email" />
            <StyledInput3 name="Subject" type="text" placeholder="Subject" />
            <StyledInput4 name="Message" type="text" placeholder="Message" />
          </DivForm>

          <DivFormAlign>
            <StyledInput5 className="btn btn-4">Send</StyledInput5>
          </DivFormAlign>
        </Form>


        <Decoration8>{"</form>"}</Decoration8>
        <Decoration9>{"</body>"}</Decoration9>
        <Decoration10>{"</html>"}</Decoration10>

      </Main1>

      <Main2 className="google-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d18864.69187125386!2d-45.26006007843933!3d-22.789963914920918!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1677816503747!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="map-content">
        <p>Leonardo Broca</p>
        <span>Brazil - Sp. Guaratinguetá
        <br />
        11/2, 12508-110 Bom Jardim II
        </span>
        <br /><br />
        <span className="InnerInfo" style={{marginBottom:"-15px"}}><HiOutlineAtSymbol style={{color:"blue"}}/> <p>: leozbroca@gmail.com</p></span>
        <br />
         <span className="InnerInfo"><BsWhatsapp style={{color:"green"}}/> <p>: +55 (12) 99159-5699</p></span>
        </div>

        <DivBodyHtml>
        <Decoration9resp>{"</body>"}</Decoration9resp>
        <Decoration10resp>{"</html>"}</Decoration10resp>
        </DivBodyHtml>
      </Main2>
      </MainDivSub>
    </MainDiv>
  );
};

export default ContactPage;
