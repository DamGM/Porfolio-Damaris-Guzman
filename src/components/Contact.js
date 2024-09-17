import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");

    // Validación personalizada
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      setStatus({ success: false, message: 'Por favor, rellena todos los campos.' });
      setButtonText("Enviar");
      return;
    }

    const phonePattern = /^\+?\d+$/; // Permitir + al inicio y solo números después
    if (!phonePattern.test(formDetails.phone)) {
      setStatus({ success: false, message: 'El teléfono solo debe contener números y puede empezar con +.' });
      setButtonText("Enviar");
      return;
    }

    const messagePattern = /^[a-zA-Z0-9\s";.!?]*$/; // Permitir letras, números, espacios y ciertos caracteres
    if (!messagePattern.test(formDetails.message)) {
      setStatus({ success: false, message: 'El mensaje solo debe contener texto, números y los caracteres ";.!?' });
      setButtonText("Enviar");
      return;
    }

    let response = await fetch("/api/server", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Mensaje enviado correctamente' });
    } else {
      setStatus({ success: false, message: 'Algo ha salido mal, inténtalo de nuevo más tarde.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contacto</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.firstName} 
                          placeholder="Nombre" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                          required 
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.lastName} 
                          placeholder="Apellido" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                          required 
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="email" 
                          value={formDetails.email} 
                          placeholder="Email" 
                          onChange={(e) => onFormUpdate('email', e.target.value)} 
                          required 
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.phone} 
                          placeholder="Teléfono" 
                          onChange={(e) => onFormUpdate('phone', e.target.value)} 
                          title="El teléfono solo debe contener números." 
                          required 
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea 
                          rows="6" 
                          value={formDetails.message} 
                          placeholder="Mensaje" 
                          onChange={(e) => onFormUpdate('message', e.target.value)} 
                          required 
                        ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
