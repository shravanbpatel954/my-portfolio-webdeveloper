import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';
import Typical from '../TypicalText/TypicalText';
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import cv from '../../cv/cv.pdf';

const HERO_TAGS = ['React.js', 'Node.js', 'MongoDB', 'Python', 'React Native', 'Docker', 'FAISS', 'ONNX'];

const SEEKING_ROLES = ['Full-Time', 'Internship', 'Graduate SDE'];

const Content = () => (
  <div className="contenido">
    <ParticleHeaderBg />
    <section className="inicio" id="inicio">
      <div className="hero-glass-container" data-aos="zoom-in" data-aos-duration="1000">
        <div className="hero-badge">
          <span className="hero-badge__dot" aria-hidden />
          <FormattedMessage
            id="hero-badge"
            defaultMessage="MCA Candidate · Open to full-time & internship roles"
          />
        </div>

        <p className="hero-greeting">
          <FormattedMessage id="greeting" defaultMessage="Hello, I'm" />
        </p>

        <h1 className="hero-title">
          <span className="gradient-text">
            <FormattedMessage id="name" defaultMessage="Shravankumar B. Patel" />
          </span>
        </h1>

        <p className="hero-education">
          <FormattedMessage
            id="hero-education"
            defaultMessage="Master of Computer Applications (MCA) — BVIMIT, Navi Mumbai · B.Sc. Computer Science"
          />
        </p>

        <p className="hero-role-line">
          <FormattedMessage id="hero-role-line" defaultMessage="Aspiring" />{' '}
          <span className="hero-typewriter">
            <Typical
              loop={Infinity}
              wrapper="span"
              steps={[
                'Full-Stack Developer',
                1500,
                'Software Engineer',
                1500,
                'AI / ML Engineer',
                1500,
                'React Native Developer',
                1500,
              ]}
            />
          </span>
        </p>

        <p className="hero-summary">
          <FormattedMessage
            id="hero-summary"
            defaultMessage="MCA student with hands-on project experience in MERN stack, React Native, and AI pipelines. Built award-winning hackathon systems, a live deployed web platform, university software, and an Android ML app — now seeking a graduate developer role."
          />
        </p>

        <div className="hero-seeking">
          <span className="hero-seeking__label">
            <FormattedMessage id="hero-seeking-label" defaultMessage="Open to" />
          </span>
          {SEEKING_ROLES.map((role) => (
            <span key={role} className="hero-seeking__chip">
              {role}
            </span>
          ))}
        </div>

        <div className="hero-tags">
          {HERO_TAGS.map((tag) => (
            <span key={tag} className="hero-tech-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="hero-cta">
          <Link to="proyectos" spy offset={-150} href="#proyectos" className="custom-btn btn">
            <FormattedMessage id="btn-more-projects" defaultMessage="View Projects" />
          </Link>
          <a
            href={cv}
            download="Shravankumar-Patel-Resume.pdf"
            className="custom-btn btn-codigo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="btn-cv" defaultMessage="Download Resume" />
          </a>
          <a
            href="https://www.linkedin.com/in/shravan-kumar-patel/"
            className="custom-btn btn-codigo"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi" className="hero-scroll-link">
          <div className="scroll-down" aria-hidden />
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
