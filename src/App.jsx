import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styled from "styled-components";
import logo from "./assets/logoPieza.png";
import Mountain from "./assets/Mountain.png";
import BackgroundMountain from "./assets/verdecita.png";
import team1 from "./assets/team1.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";
import Grupo2417 from "./assets/Grupo 2417.png";
import Verdecita2 from "./assets/Trazado 1979.png";
import Grupo2418 from "./assets/Grupo 2418.png";
import Grupo2419 from "./assets/Grupo 2419.png";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import Trazado from "./assets/Trazado 1976.png";
import { Paper, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
const theme = createTheme();

function App() {
  const [value, setValue] = useState();

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  console.log(value);

  return (
    <ThemeProvider theme={theme}>
      <ContainerSuperMain>
        <Header>
          <nav>
            <div className="header-right">
              <a>Empresas</a>
              <img src={logo} alt="LaPieza.io" />
            </div>
            <div className="header-middle">
              <ul className="tabs">
                <li>Vacantes</li>
                <li>Operativas</li>
                <li>Buscar empresas</li>
                <li>Beneficios</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <ul className="socialmedia">
                <li>
                  <i class="fab fa-facebook"></i>
                </li>
                <li>
                  <i class="fab fa-linkedin-in"></i>
                </li>
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
                <li>
                  <i class="fab fa-youtube"></i>
                </li>
              </ul>
            </div>
            <div className="header-left">
              <button>Iniciar sesión</button>
            </div>
          </nav>
          <h1>
            Somos un equipo <br /> joven y ambicioso, <br /> con ganas de <br />{" "}
            crear un <span>impacto</span> <br /> global
          </h1>
          <figure>
            <img className="Mountain" src={Mountain} alt="" />
          </figure>
          <figure className="background-container">
            <img className="background" src={BackgroundMountain} alt="" />
          </figure>
        </Header>

        <ContainerWe>
          <h1>
            ¿<span>Quiénes</span> somos?
          </h1>
          <p>
            Nos definimos con 3 palabras: <span>innovacion, impacto</span> y{" "}
            <span>ambición</span>
          </p>
          <p>
            A través de la tecnología, queremos generar un cambio positivo{" "}
            <br /> en la sociedad, buscando que cada persona pueda competir de{" "}
            <br /> manera justa a cualquier vacante.
          </p>
        </ContainerWe>
        <ContainerTimeLine>
          <div className="shadow">
            <section>
              <i className="fas fa-check"></i>
            </section>
            <div>
              <span>2018</span>
              <p>Creación de la sociedad</p>
            </div>
          </div>
          <div className="shadow">
            <section>
              <i className="fas fa-calendar-check"></i>
            </section>
            <div>
              <span>25 años</span>
              <p>Creación de la sociedad</p>
            </div>
          </div>
          <div className="shadow">
            <section>
              <i className="fas fa-user-friends"></i>
            </section>
            <div>
              <span>+30</span>
              <p>Creación de la sociedad</p>
            </div>
          </div>
          <div className="shadow">
            <section>
              <i className="fas fa-user-friends"></i>
            </section>
            <div>
              <span>50 | 50</span>
              <p>Creación de la sociedad</p>
            </div>
          </div>
        </ContainerTimeLine>

        <ContainerMainFirst>
          <div className="container-info">
            <section>
              <hr />
              <h1>¡Equipo multicultural!</h1>
              <p>
                ¿México? ¿Francia? ¿Alemania? ¿USA? En LaPieza.io no <br />
                importa de dónde seas, lo que importa es tu talento, <br /> tú
                motivación y tus ganas de comerte al mundo.
                <strong>
                  ¿No tienes título universitario? <br /> No pasa nada,
                  ¡queremos conocerte!
                </strong>
              </p>
            </section>
            <figure>
              <img className="team1" src={team1} />
            </figure>
          </div>
          <img className="background-verdecita" src={Verdecita2} alt="" />
        </ContainerMainFirst>
        <ContainerMainFirst>
          <div className="container-info">
            <figure>
              <img className="team1" src={team2} />
            </figure>
            <section className="flex-end">
              <hr />
              <h1>¿Jeans o corbata?</h1>
              <p>
                En realidad, no importa. Si vas a nuestras oficinas, <br />
                tal vez nadie te reciba con traje, pero sí con una sonrisa{" "}
                <br /> y un alto nivel de profesionalismo. <br /> ¿Una tacita de
                café, tal vez?
              </p>
            </section>
          </div>
        </ContainerMainFirst>
        <ContainerMainFirst>
          <div className="container-info">
            <section>
              <hr />
              <h1>¡Una súper comunicación!</h1>
              <p>
                Queremos que todas las personas se sientan a gusto <br /> y
                tomen decisiones. Cada mes tenemos sesiones <br /> 1-1 con Pol,
                CEO, para ver puntos de mejora y despejar dudas.
              </p>
            </section>
            <figure>
              <img className="team1" src={team3} />
            </figure>
          </div>
        </ContainerMainFirst>
        <Line>
          <hr />
          <h1>
            <span> Productos </span> desarrollados{" "}
          </h1>
        </Line>
        <ContainerProductos>
          <div className="background"></div>
          <section className="grid-products">
            <div>
              <img className="Grupo2417" src={Grupo2417} />
              <h4>ATS</h4>
              <p>Applicant Tranking System.</p>
            </div>
            <div>
              <img className="Grupo2418" src={Grupo2418} />
              <h4> Headhunting </h4>
              <p>
                Con ayuda de nuestros bots y herramientas de growth hacking,
                nuestro equipo de hunting encontrará a los candidatos perfectos
                para tus posiciones.
              </p>
              <button> Conoce más </button>
            </div>
            <div>
              <img className="Grupo2419" src={Grupo2419} />
              <h4> Universidades </h4>
              <p> Una bolsa de trabajo única para tu comunidad. </p>
            </div>
          </section>
        </ContainerProductos>
        <>
          <h1>
            <span> Nuestros </span> valores{" "}
          </h1>
        </>
        <ContainerAcordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>Respeto</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ejercer acciones considerando a los demás.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography> Responsabilidad</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Conociendo y aceptando posibles consecuencias.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>Justicia</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Que cada persona tenga lo quele corresponde o pertenece.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>Honestidad</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Decir la verdad.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>Comunicación</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Expresarse de forma empática, directa y con respeto.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContainerAcordion>
        <ContainerFinal>
          <div>
            <h1> Si leíste todo hasta aquí </h1>
            <h3> ¡Queremos conocerte! </h3>
          </div>
          <div>
            <button> Ver vacantes </button>
          </div>
          <img className="Trazado 1976.png" src={Trazado} alt="" />
        </ContainerFinal>
        <ContainerFooter>
          <FooterWrapper>
            <PrimeraColumna>
              <Box>
                <FooterTitle>
                  <img src={logo} alt="LaPieza.io" />
                </FooterTitle>
                <p>
                  <a> +52 55 5351 8288 </a>
                </p>
                <p>
                  <a> pol@lapieza.io </a>
                </p>
              </Box>
              <a> © TALENTO STARTUP SAPI DE CV </a>
            </PrimeraColumna>
            <FooterColumn>
              <FooterTitle> Empresa </FooterTitle>
              <a> Nosotros </a>
              <a> Beneficios </a>
              <a> FAQs </a>
              <a> Contacto </a>
              <a> Blog </a>
              <a> Pricing </a>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle> Información </FooterTitle>
              <a> Aviso de Privacidad </a>
              <a> Términos y Condiciones </a>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle> También nos puedes encontrar en </FooterTitle>
              <a>
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a>
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a>
                <i class="fab fa-instagram"></i>
              </a>
            </FooterColumn>
          </FooterWrapper>
        </ContainerFooter>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <p> blabla </p>
              <p> jjjjj </p>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
          </Grid>
        </div>
      </ContainerSuperMain>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={onChange}></textarea>
    </ThemeProvider>
  );
}

const ContainerSuperMain = styled.main`
  font-family: "'sofia-pro', sans-serif";
`;

const Header = styled.header`
  height: 50rem;
  padding: 1rem;
  position: relative;
  max-width: 1400px;
  margin: auto;
  .Mountain {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .background-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 5%;
    left: 0;
    z-index: -2;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  h1 {
    color: white;
    font-weight: 100;
    position: absolute;
    transform: translate(20%, 60%);
    span {
      color: black;
    }
  }
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .socialmedia {
      li {
        display: inline;
        list-style: none;
        color: white;
        margin-left: 1rem;
      }
    }

    .tabs {
      li {
        display: inline;
        list-style: none;
        padding-left: 1rem;
        padding-right: 1rem;
        color: white;
        margin-left: 3rem;
      }
    }
    .header-left {
      button {
        background: #014d43;
        color: white;
        width: 13rem;
        height: 2.5rem;
        border-radius: 5px;
        border: none;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      img {
        height: 2rem;
        margin-left: 1rem;
      }
    }
  }
`;

const ContainerMainFirst = styled.main`
  max-width: 1400px;
  margin: auto;
  position: relative;
  padding-left: 4rem;
  .background-verdecita {
    position: absolute;
    z-index: -1;
    right: -40%;
    top: 40%;
    height: 40rem;
  }

  .container-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
    section {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      justify-content: center;
      hr {
        width: 5rem;
        height: 1px;
        background: #6b9791;
      }
      h1 {
        margin-top: 1rem;
        font-size: 2.5rem;
        color: #014d43;
      }
      p {
        margin-top: 1rem;
        font-size: 1.6rem;
      }
      strong {
        margin-top: 1.6rem;
        display: block;
        font-size: 1.6rem;
      }
    }
    .flex-end {
      display: flex;
      align-items: flex-end;
      p {
        text-align: end;
      }
    }
    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 40rem;
      }
    }
  }
`;

const ContainerWe = styled.section`
  max-width: 1400px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  span {
    color: #014d43;
  }
  p {
    font-size: 1.4rem;
    text-align: center;
    margin: 1rem 0;
  }
  h1 {
    font-size: 2rem;
  }
`;

const ContainerTimeLine = styled.section`
  max-width: 1400px;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  div {
    display: flex;
    justify-content: center;
    height: 6rem;
    border-top-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 2.5rem;
        margin-right: 1rem;
        color: #014d43;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      span {
        font-size: 1.2rem;
        font-weight: bold;
        color: #014d43;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  .shadow:hover {
    box-shadow: 2px 5px 13px rgba(0, 0, 0, 0.2);
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  hr {
    width: 5rem;
    height: 1px;
    background: #295b3f;
  }
  span {
    color: #224d44;
  }
`;

const ContainerProductos = styled.section`
  position: relative;
  max-width: 1400px;
  margin: auto;
  margin-bottom: 3rem;
  .grid-products {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: auto;
    max-width: 900px;
    margin: auto;
    div {
      margin-top: 10rem;
      width: 50rem;
      height: 30rem;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5rem;
      box-shadow: 3px -2px 9px rgba(0, 0, 0, 0.2);
      img {
        height: 13rem;
      }
      h4 {
        margin-bottom: 2rem;
        font-size: 2rem;
        margin-top: 2rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
    div:nth-child(2) {
      height: 40rem;
      position: relative;
      button {
        background: #224d44;
        position: absolute;
        color: white;
        border: none;
        font-size: 1rem;
        width: 9rem;
        height: 3rem;
        border-radius: 5px;
        bottom: -2%;
      }
    }
  }
  .background {
    position: absolute;
    height: 40rem;
    width: 100%;
    background-color: #a3d3c4;
    z-index: -1;
    top: 50%;
  }
`;

const ContainerAcordion = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1400px;
  margin: auto;
`;

const ContainerFinal = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin-top: 9rem;
  max-height: 5rem;
  gap: 1rem;
  h1 {
    margin-bottom: 2rem;
    color: #224d44;
  }
  h3 {
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 100;
  }
  button {
    background: #224d44;
    color: white;
    border: none;
    font-size: 1rem;
    width: 9rem;
    height: 3rem;
    border-radius: 5px;
  }
  img {
    position: absolute;
    z-index: -1;
    bottom: -1250%;
  }
`;

const ContainerFooter = styled.div`
  background: radial-gradient(
    circle,
    rgba (92, 39, 251, 1) 0%,
    rgba (112, 71, 247, 1) 100%
  );
  border: 1px solid;
  margin-top: 10rem;
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  border: 1px solid;
  background: #303e46;
`;

const FooterColumn = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-rows: repeat(1, 1fr);
  margin-left: 6rem;
  @media (max-width: 600px) {
    display: flex;
  }
  @media (max-width: 900px) {
    display: flex;
  }
  @media (max-width: 1280px) {
    display: flex;
  }
  @media (max-width: 1920px) {
    display: flex;
  }
`;

const FooterTitle = styled.p`
  color: white;
  font-size: 18px;
`;

const PrimeraColumna = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;

// <= 600px celulares
// <= 900px tabletas
// <= 1280px laps
// <= 1920px laps o pc de escritorio con full HD
