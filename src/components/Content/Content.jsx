import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';
import Typical from '../TypicalText/TypicalText';
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import cv from '../../cv/cv.pdf';

const HERO_TAGS = [
  'React',
  'Node.js',
  'MongoDB',
  'React Native',
  'AI / ML',
];

const HERO_STATS = [
  { number: '5+', label: 'Projects Built' },
  { number: '3+', label: 'Hackathons' },
  { number: '1', label: 'Live Platform' },
];

const Content = () => (
  <div className="contenido">
    <ParticleHeaderBg />

    <section className="inicio" id="inicio">
      <div
        className="hero-glass-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge__dot" aria-hidden />
          <FormattedMessage
            id="hero-badge"
            defaultMessage="Open to Software Engineering · Full-Stack · AI Roles"
          />
        </div>

        {/* Main Heading */}
        <h1 className="hero-main-heading">
          <FormattedMessage
            id="hero-main-heading"
            defaultMessage="Building scalable web & AI-powered applications."
          />
        </h1>

        {/* Name */}
        <h2 className="hero-name">
          <span className="gradient-text">
            <FormattedMessage
              id="name"
              defaultMessage="Shravankumar B. Patel"
            />
          </span>
        </h2>

        {/* Education */}
        <p className="hero-education">
          <FormattedMessage
            id="hero-education"
            defaultMessage="Master of Computer Applications (MCA) — BVIMIT, Navi Mumbai · B.Sc. Computer Science"
          />
        </p>

        {/* Dynamic Role */}
        <div className="hero-role-line">
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
              'Full-Stack Developer',
              1800,
              'Software Engineer',
              1800,
              'AI-Powered App Builder',
              1800,
              'React Native Developer',
              1800,
            ]}
          />
        </div>

        {/* Summary */}
        <p className="hero-summary">
          <FormattedMessage
            id="hero-summary"
            defaultMessage="MCA student building production-ready web, mobile, and AI applications using MERN, React Native, and modern AI pipelines. Experienced in hackathons, scalable UI systems, and real-world deployment."
          />
        </p>

        {/* Stats */}
        <div className="hero-stats">
          {HERO_STATS.map((item) => (
            <div key={item.label} className="hero-stat-card">
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="hero-tags">
          {HERO_TAGS.map((tag) => (
            <span key={tag} className="hero-tech-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <Link
            to="proyectos"
            spy
            smooth
            offset={-100}
            className="custom-btn btn"
          >
            <FormattedMessage
              id="btn-projects"
              defaultMessage="View My Work"
            />
          </Link>

          <a
            href={cv}
            download="Shravankumar-Patel-Resume.pdf"
            className="custom-btn btn-codigo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage
              id="btn-cv"
              defaultMessage="Resume"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shravan-kumar-patel/"
            className="custom-btn btn-codigo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Connect
          </a>
        </div>

        {/* Scroll Down */}
        <Link
          to="sobre-mi"
          smooth
          offset={-70}
          className="hero-scroll-link"
        >
          <div className="scroll-down" aria-hidden />
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
