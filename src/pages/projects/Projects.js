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
                <p>Meu portfolio</p>
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
                  Projeto com o objetivo de recriar uma pokédex, onde é possível
                  adicionar ou remover pokémons, além de conseguir visualizar
                  suas informações.
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
                        <p>Visitar site </p>
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
                  O projeto LabeFoods teve como objetivo simular um app de
                  entregas tal como o UberEats, Rappi e Ifood. Layout para
                  mobile.
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
                        <p>Visitar site </p>
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
                  Um site mostrando os filmes mais populares do momento, sendo
                  possível filtra-los por página e ver toda a sua descrição.
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
                        <p>Visitar site </p>
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
                  Site de receitas. Contém várias receitas adicionadas e é
                  possível adicionar sua própria receita. É necessário login
                  para acessar todas as funcionalidades.
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
                        <p>Visitar site </p>
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
                <p>Site para criação de playlists com músicas do Spotfy.</p>
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
                        <p>Visitar site </p>
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
                <p>E-commerce de uma saboaria.</p>
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
                        <p>Visitar site </p>
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
