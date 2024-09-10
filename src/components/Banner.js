import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isHovered, setIsHovered] = useState(false);
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = ["Web Developer", "Web Designer"];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text.length]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenido a mi Portfolio</span>
                  <h1>{`Hola! Soy Dámaris`}</h1>
                  <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p>"Empecé mi camino en el mundo de la tecnología hace unos años de forma autodidacta. Al principio lo tenía como un hobby, 
                    pero en 2023 decidí formalizar mis conocimientos estudiando Desarrollo Web. Siempre he sentido una gran pasión por el diseño 
                    y todo lo relacionado con la creatividad, por lo que encontrar una disciplina que uniera ambos mundos, diseño y tecnología, 
                    me pareció la opción perfecta.
                  </p>
                  <p>
                    Aunque mi formación inicial fue en el ámbito de la salud, siendo Técnico en Higiene Bucodental y habiendo cursado el 
                    Grado de Enfermería en la Universidad de Sevilla, decidí dar un giro a mi carrera profesional. Esta transición refleja 
                    mi deseo de combinar creatividad y tecnología para construir soluciones innovadoras y útiles. El mundo del desarrollo 
                    web me brinda la oportunidad de aplicar estas habilidades en proyectos concretos que tienen un impacto directo, y es 
                    algo que me entusiasma profundamente."
                  </p>
                  <a
                    href="mailto:dguzmar@gmail.com"
                    className="contact-link"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button>
                      {isHovered ? 'dguzmar@gmail.com' : 'Contacta'} <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>

            <div className="">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
          <Col xs={12} md={6} xl={12} className="centered-button">
            <a href="/D%C3%A1marisGuzm%C3%A1n.Cv%20(1).pdf" download="Damaris_CV.pdf" style={{ textDecoration: 'none' }}>
              <button className="download-button">Descarga CV</button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
