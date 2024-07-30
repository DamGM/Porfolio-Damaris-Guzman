import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logo1 from "../assets/img/logo.svg";
import vite from "../assets/img/vitejs.svg";
import html from "../assets/img/html-1.svg";
import css from "../assets/img/css-3.svg";
import js from "../assets/img/javascript-1.svg";
import bt from "../assets/img/bootstrap-5-1.svg";
import figma from "../assets/img/figma-icon.svg";

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          <br></br>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                <img src={html} alt="Logo" />
                              </div>
                              <div className="item">
                                 <img src={css} alt="Logo" />
                              </div>
                              <div className="item">
                                <img src={js} alt="Logo" />
                              </div>
                              <div className="item">
                                 <img src={logo1} alt="Logo" />
                              </div>
                              <div className="item">
                                 <img src={bt} alt="Logo" />
                              </div>
                              <div className="item">
                                 <img src={vite} alt="Logo" />
                              </div>
                              <div className="item">
                                 <img src={figma} alt="Logo" />
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }