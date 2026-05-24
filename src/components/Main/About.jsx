import React from 'react';
import cv from '../../cv/cv.pdf';
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='Shravankumar B. Patel — Full Stack Web Developer'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage="’m a Full-Stack Developer specializing in building scalable web and mobile applications using React.js, React Native, Node.js, and MongoDB. I focus on developing AI-powered solutions, including NLP-based systems, semantic search pipelines, and real-time applications.

I’ve built multiple production-ready projects, including an AI-based multilingual duplicate detection system and adaptive learning platforms. My work emphasizes performance optimization, clean architecture, and user-centric design."
                    />
                </p>
                <ul className="about-facts">
                    <li>
                        <p><span>Education:</span> MCA (Pursuing), BVIMIT · B.Sc. CS</p>
                    </li>
                    <li>
                        <p><span>Looking for:</span> Full-Time · Internship · Graduate SDE</p>
                    </li>
                    <li>
                        <p><span>Email:</span> shravan.b.patel954@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage id="from" defaultMessage="Location:" />
                            </span>
                            Mumbai, India
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>LinkedIn:</span>{' '}
                            <a href="https://www.linkedin.com/in/shravan-kumar-patel/" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/shravan-kumar-patel
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>GitHub:</span>{' '}
                            <a href="https://github.com/shravanbpatel954" target="_blank" rel="noopener noreferrer">
                                github.com/shravanbpatel954
                            </a>
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="Shravankumar-patel.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download Resume'
                        />
                    </a>

                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>
                    <FormattedMessage id="tools" defaultMessage="Technical stack" />
                </h3>
                
                <h4>Languages</h4>
                <div className="skill">
                    <div>
                        <img alt="JS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="TS" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        <h5>TypeScript</h5>
                    </div>
                    <div>
                        <img alt="Python" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="Java" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <h5>Java</h5>
                    </div>
                </div>

                <h4>Front-End & Mobile</h4>
                <div className="skill">
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React.js</h5>
                    </div>
                    <div>
                        <img alt="React Native" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style={{ transform: 'rotate(20deg)' }} />
                        <h5>React Native</h5>
                    </div>
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML5</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS3</h5>
                    </div>
                </div>

                <h4>Back-End & Databases</h4>
                <div className="skill">
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>Node.js</h5>
                    </div>
                    <div>
                        <img alt="Express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img alt="MongoDB" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongoDB</h5>
                    </div>
                    <div>
                        <img alt="Postgre" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                        <h5>PostgreSQL</h5>
                    </div>
                    <div>
                        <img alt="MySQL" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="Firebase" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                        <h5>Firebase</h5>
                    </div>
                </div>

                <h4>AI & Machine Learning</h4>
                <div className="skill">
                    <div>
                        <div className="icons-skils-fa-fallback"><i className="fas fa-brain" style={{ fontSize: '2.5rem', color: '#00f2fe' }}></i></div>
                        <h5>MiniLM / NLP</h5>
                    </div>
                    <div>
                        <div className="icons-skils-fa-fallback"><i className="fas fa-search" style={{ fontSize: '2.5rem', color: '#6366f1' }}></i></div>
                        <h5>FAISS Vector</h5>
                    </div>
                    <div>
                        <div className="icons-skils-fa-fallback"><i className="fas fa-microchip" style={{ fontSize: '2.5rem', color: '#3b82f6' }}></i></div>
                        <h5>ONNX Runtime</h5>
                    </div>
                    <div>
                        <div className="icons-skils-fa-fallback"><i className="fas fa-robot" style={{ fontSize: '2.5rem', color: '#a855f7' }}></i></div>
                        <h5>Gemini / LLMs</h5>
                    </div>
                </div>

                <h4>DevOps & Infrastructure</h4>
                <div className="skill">
                    <div>
                        <img alt="Docker" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                        <h5>Docker</h5>
                    </div>
                    <div>
                        <img alt="Git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="GitHub" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        <h5>GitHub</h5>
                    </div>
                    <div>
                        <div className="icons-skils-fa-fallback"><i className="fas fa-cloud-upload-alt" style={{ fontSize: '2.5rem', color: '#00f2fe' }}></i></div>
                        <h5>Render / Railway</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);
