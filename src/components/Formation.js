import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export const Formation = () => {
  return (
    <section className="formation" id="formation">
      <Container>
        <Row>
          <Col xs={12} md={6}>
                <div >
                  <h2>Formación</h2>
                  <p>
                   Universae Fp 2023-2024 Ciclo superior de Desarrollo de Aplicaciones Web (DAW). Este programa de formación técnica orientado a proporcionar una comprensión profunda del desarrollo de aplicaciones web, incluyendo el diseño de interfaces, la programación en el lado del cliente y del servidor, y la gestión de bases de datos.
                  </p>
                  <ul>
                    <li><strong>Temario:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB, entre otros.</li>
                    <li><strong>Proyectos:</strong> Desarrollo de aplicaciones web desde el concepto hasta la implementación, incluyendo prácticas de usabilidad y accesibilidad.</li>
                    <li><strong>Habilidades Adquiridas:</strong> Desarrollo front-end y back-end, integración de API, optimización de rendimiento.</li>
                  </ul>
                </div>
          </Col>
          <Col xs={12} md={6}>
                <div >
                  <h2>Prácticas en Empresa</h2>
                  <p>
                    Durante el programa de DAW, he realizado prácticas en empresa (HIGHER EDUCATION BARCELONA S.L.U), lo que me ha permitido aplicar los conocimientos adquiridos en entornos reales y enfrentar desafíos profesionales.
                  </p>
                  <ul>
                    <li><strong>Proyecto 1:</strong> Desarrolladora Front-end. Trabajé en la implementación de nuevas funcionalidades para una plataforma de comercio electrónico.</li>
                    <li><strong>Proyecto 2:</strong> Desarrolladora Full Stack. Participé en el desarrollo y mantenimiento de una aplicación web, incluyendo el diseño de la base de datos y la implementación de la lógica de negocio.</li>
                  </ul>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
