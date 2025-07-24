import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        Page created by Shravankumar
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                <a href="https://www.linkedin.com/in/shravan-kumar-patel/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/shravanbpatel954/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/shravan___1809/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=918104479942" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="fab fa-whatsapp"></i></a>
                     </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);