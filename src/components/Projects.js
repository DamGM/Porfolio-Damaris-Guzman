import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // Lista completa de proyectos
  const projects = [
    {
      title: "Tecnologías",
      description: "HTML, CSS, javaScript",
      imgUrl: projImg1,
      url:"https://github.com/DamGM/plataforma_universae",
    
    },
    {
      title: "Tecnologías",
      description: "React+vite, Node.js+express, MongoDB, Boostrap",
      imgUrl: projImg2,
    },
    {
      title: "Tecnologías",
      description: "React,Boostrap , Supabase",
      imgUrl: projImg3,
      url:"https://github.com/DamGM/TIENDA_CURSOS_FRONT",
    
    },
    {
      title: "Tecnologías",
      description: "React",
      imgUrl: projImg4,
      url:"https://github.com/DamGM/react_cards",
    },
    {
      title: "Tecnologías",
      description: "HTML,CSS,Boostrap",
      imgUrl: projImg5,
      url:"https://github.com/DamGM/dance_connection",
    },
    {
      title: "Tecnologías",
      description: "Vue.js",
      imgUrl: projImg6,
      url:"https://github.com/DamGM/events_app",
    },
    {
      title: "Tecnologías",
      description: "HTML,CSS, javaScript",
      imgUrl: projImg7,
    },
    {
      title: "Tecnologías",
      description: "HTML,CSS, javaScript",
      imgUrl: projImg8,
    },
   
  ];

  // Divide los proyectos en 3 grupos
  const firstProjects = projects.slice(0, 3);
  const secondProjects = projects.slice(3,6);
  const thirdProjects = projects.slice(6,8);
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {firstProjects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {secondProjects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                       <Row> 
                         {thirdProjects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>  
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
