import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';
import Typical from '../TypicalText/TypicalText';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg/>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
            
                <p data-aos="fade-up" data-aos-delay="600">
                    Hello
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    Hi, I'm <span style={{ color: '#00e5fe' }}>Shravankumar.B.Patel</span>
                </h1>
                <div data-aos="fade-up" data-aos-delay="1000" style={{fontSize: '2.1rem', fontWeight: 600, color: '#00e5fe', margin: '1rem 0'}}>
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      'Web Developer', 1500,
                      'Frontend Developer', 1500,
                      'Backend Developer', 1500,
                      'Full Stack Web Developer', 1500,
                      'React Developer', 1500,
                      'DevOps & CI/CD Enthusiast', 1500,
                    ]}
                  />
                </div>
                
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/shravan-kumar-patel/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=918104479942&text=Hello !" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://github.com/shravanbpatel954" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/shravan___1809/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/shravan-kumar-patel/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/shravanbpatel954/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href="https://www.instagram.com/shravan___1809/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                    </a>
                    <a className="button" href="https://api.whatsapp.com/send?phone=918104479942" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <span>Whatsapp</span>
                    </a>
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;