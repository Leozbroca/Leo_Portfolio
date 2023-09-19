import React, { useEffect, useState } from "react";
import {
  ContainerScreen,
  Loading,
  CentralL,
  LoadingBack,
  Photo,
  EmptyDiv,
} from "./styled";
import sephiroth from "../../assets/Sephiroth.gif";
import cloud_seph from "../../assets/cloud-seph.gif";

const ScreenLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <EmptyDiv>
      {isLoading ? (
        <ContainerScreen className="animate__animated animate__fadeOut animate__delay-2s">
          {window.innerWidth <= 800 ? (
            <Photo src={sephiroth} />
          ) : (
            <Photo src={cloud_seph} />
          )}
          <p>Leozbroca is thinking...</p>
          <CentralL>
            <Loading />
            <LoadingBack />
          </CentralL>
        </ContainerScreen>
      ) : (
        <></>
      )}
    </EmptyDiv>
  );
};

export default ScreenLoading;
