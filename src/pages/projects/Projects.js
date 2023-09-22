import React, { useState } from "react";
import {
  MainDiv,
  Title,
  DivLogo,
  ImgHeader,
  Decoration3,
  Decoration4,
  SecondMainDiv,
} from "./styled";
import ScreenLoading from "../../components/screenLoading/ScreenLoading";
import site1 from "../../assets/site1.png";
import site2 from "../../assets/site2.png";
import site3 from "../../assets/site3.png";
import site4 from "../../assets/site4.png";
import site5 from "../../assets/site5.png";
import site6 from "../../assets/site6.png";
import site7 from "../../assets/encantada_saboaria.png";
import site8 from "../../assets/site7.png";
import { BsGithub } from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";

import Burger from "../../components/Burger/Burger.js";
import Menu from "../../components/Menu/Menu.js";

const ProjectsPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <MainDiv>
      <ScreenLoading />
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <SecondMainDiv>
        <ImgHeader src="https://capsule-render.vercel.app/api?type=waving&color=red&height=80&section=header" />
        <Title>
          <Decoration3>{"<h1>"}</Decoration3>
          <b>Projects</b>
          <Decoration4>{"</h1>"}</Decoration4>
        </Title>
        <div className="container">
          <div className="box">
            <div className="imgBox">
              <img src={site4} />
            </div>
            <div className="content">
              <h2>Leozbroca Portfólio</h2>
              <div className="info">
                <p>My portfolio</p>
                <DivLogo>
                  <a
                    href="https://github.com/Leozbroca/Leo_Portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Github</p>

                        <div>
                          <BsGithub size="1.25em" />
                        </div>
                      </div>
                    </button>
                  </a>
                </DivLogo>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={site2} />
            </div>
            <div className="content">
              <h2>Pokedéx</h2>
              <div className="info">
                <p>
                Project with the aim of recreating a Pokédex, where it's possible to add or remove Pokémon, as well as view their information.
                </p>
                <DivLogo>
                  <a
                    href="https://github.com/Leozbroca/Pokedex"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Github</p>

                        <div>
                          <BsGithub size="1.25em" />
                        </div>
                      </div>
                    </button>
                  </a>
                  <a
                    href="https://historical-boundary.surge.sh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Visit website</p>
                        <div>
                          <FiArrowRightCircle size="1.5em" />
                        </div>
                      </div>
                    </button>
                  </a>
                </DivLogo>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={site3} />
            </div>
            <div className="content">
              <h2>LabeFood</h2>
              <div className="info">
                <p>
                The LabeFoods project aimed to simulate a food delivery app similar to UberEats, Rappi, and iFood. Mobile layout.
                </p>
                <DivLogo>
                  <a
                    href="https://github.com/Leozbroca/LabeFood"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Github</p>

                        <div>
                          <BsGithub size="1.25em" />
                        </div>
                      </div>
                    </button>
                  </a>
                  <a
                    href="https://carver-labefood5.surge.sh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Visit website</p>
                        <div>
                          <FiArrowRightCircle size="1.5em" />
                        </div>
                      </div>
                    </button>
                  </a>
                </DivLogo>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={site1} />
            </div>
            <div className="content">
              <h2>TMDB Movies</h2>
              <div className="info">
                <p>
                A website displaying the most popular movies of the moment, allowing you to filter them by page and view their full description.
                </p>
                <DivLogo>
                  <a
                    href="https://github.com/Leozbroca/TMDB-movies-Case"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Github</p>

                        <div>
                          <BsGithub size="1.25em" />
                        </div>
                      </div>
                    </button>
                  </a>
                  <a
                    href="https://famous-work.surge.sh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Visit website</p>
                        <div>
                          <FiArrowRightCircle size="1.5em" />
                        </div>
                      </div>
                    </button>
                  </a>
                </DivLogo>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={site5} />
            </div>
            <div className="content">
              <h2>Cookenu</h2>
              <div className="info">
                <p>
                Recipe website. It contains several added recipes, and it's possible to add your own recipe. Login is required to access all functionalities.
                </p>
                <DivLogo>
                  <a
                    href="https://github.com/Leozbroca/Cookenu-FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Github</p>

                        <div>
                          <BsGithub size="1.25em" />
                        </div>
                      </div>
                    </button>
                  </a>
                  <a
                    href="https://upbeat-receipt.surge.sh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Visit website</p>
                        <div>
                          <FiArrowRightCircle size="1.5em" />
                        </div>
                      </div>
                    </button>
                  </a>
                </DivLogo>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={site6} />
            </div>
            <div className="content">
              <h2>Labefy</h2>
              <div className="info">
                <p>Website for creating playlists with Spotify songs.</p>
                <DivLogo>
                  <a href="" target="_blank" rel="noreferrer">
                    <button>
                      <div className="button-content">
                        <p>Github</p>

                        <div>
                          <BsGithub size="1.25em" />
                        </div>
                      </div>
                    </button>
                  </a>
                  <a
                    href="https://gigantic-apples.surge.sh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Visit website</p>
                        <div>
                          <FiArrowRightCircle size="1.5em" />
                        </div>
                      </div>
                    </button>
                  </a>
                </DivLogo>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={site7} />
            </div>
            <div className="content">
              <h2>Encantada Saboaria</h2>
              <div className="info">
                <p>E-commerce for a soap shop.</p>
                <DivLogo>
                  <a
                    href="https://github.com/Leozbroca/Encantada-Saboaria-Front-end"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Github</p>

                        <div>
                          <BsGithub size="1.25em" />
                        </div>
                      </div>
                    </button>
                  </a>
                  <a
                    href="https://encantada-saboaria-front-end.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      <div className="button-content">
                        <p>Visit website</p>
                        <div>
                          <FiArrowRightCircle size="1.5em" />
                        </div>
                      </div>
                    </button>
                  </a>
                </DivLogo>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img src={site8} />
            </div>
            <div className="content">
              <h2>Lotus Store</h2>
              <div className="info">
                <h3>In Work.</h3>
                <DivLogo>
                  <a href="" target="_blank" rel="noreferrer"></a>
                  <a
                    href="https://gigantic-apples.surge.sh"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </DivLogo>
              </div>
            </div>
          </div>
        </div>
      </SecondMainDiv>
    </MainDiv>
  );
};

export default ProjectsPage;
