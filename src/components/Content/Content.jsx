import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';
import Typical from '../TypicalText/TypicalText';
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import cv from '../../cv/cv.pdf';

const SEEKING_ROLES = ['Full-Time', 'Internship'];

const HERO_PEEKS = [
  {
    id: 'hero-peek-projects',
    defaultMessage: '10 projects',
    subId: 'hero-peek-projects-sub',
    subDefault: 'MERN, mobile & AI',
    to: 'proyectos',
    icon: 'fa-layer-group',
  },
  {
    id: 'hero-peek-live',
    defaultMessage: '1 live product',
    subId: 'hero-peek-live-sub',
    subDefault: 'realtorbazar.com',
    to: 'proyectos',
    icon: 'fa-globe',
  },
  {
    id: 'hero-peek-hackathon',
    defaultMessage: 'Hackathon win',
    subId: 'hero-peek-hackathon-sub',
    subDefault: '2nd of 50+ teams',
    to: 'hackathon',
    icon: 'fa-trophy',
  },
];

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
          <Typical
            className="hero-typewriter"
            loop={Infinity}
            wrapper="span"
            typeSpeed={58}
            deleteSpeed={32}
            steps={[
              'Full-Stack Developer',
              2200,
              'Software Engineer',
              2200,
              'AI / ML Engineer',
              2200,
              'React Native Developer',
              2200,
              'Cloud-Ready Developer',
              2200,
            ]}
          />
        </p>

        <p className="hero-hook">
          <FormattedMessage
            id="hero-hook"
            defaultMessage="The intro is short on purpose — scroll for live deployments, hackathon proof, and the full project list."
          />
        </p>

        <div className="hero-peeks" role="navigation" aria-label="Quick links to portfolio highlights">
          {HERO_PEEKS.map((peek) => (
            <Link
              key={peek.id}
              to={peek.to}
              spy
              smooth
              offset={-120}
              href={`#${peek.to}`}
              className="hero-peek"
            >
              <i className={`fas ${peek.icon}`} aria-hidden />
              <span className="hero-peek__title">
                <FormattedMessage id={peek.id} defaultMessage={peek.defaultMessage} />
              </span>
              <span className="hero-peek__sub">
                <FormattedMessage id={peek.subId} defaultMessage={peek.subDefault} />
              </span>
            </Link>
          ))}
        </div>

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

        <div className="hero-cta">
          <Link to="proyectos" spy offset={-120} href="#proyectos" className="custom-btn btn">
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

        <Link
          to="profile-glance"
          spy
          smooth
          offset={-100}
          href="#profile-glance"
          className="hero-scroll-cta"
        >
          <span className="hero-scroll-cta__text">
            <FormattedMessage id="hero-scroll-cta" defaultMessage="See what's below" />
          </span>
          <div className="scroll-down" aria-hidden />
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
