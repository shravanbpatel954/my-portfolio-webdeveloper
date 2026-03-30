import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Education.css';

const educationData = [
  {
    level: 'Postgraduate',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Bharati Vidyapeeth Institute of Management & IT (BVIMIT), Navi Mumbai',
    period: 'Sep 2025 – Present',
    status: 'current',
  },
  {
    level: 'Graduation',
    degree: 'B.Sc Computer Science',
    institution: 'N.E.S Ratnam College of Arts, Science & Commerce',
    period: '2022 – 2025',
    status: 'completed',
  },
  {
    level: 'High School',
    degree: 'PCMB (Physics, Chemistry, Mathematics, Biology)',
    institution: 'Raminiranjan Jhunjhunwala College',
    period: '2021 – 2022',
    status: 'completed',
  },
];

const Education = () => (
  <section className="education-section" id="education">
    <h2 className="heading education-section__title">
      <FormattedMessage id="education" defaultMessage="Education" />
    </h2>
    <p className="education-section__subtitle">
      <FormattedMessage
        id="education-subtitle"
        defaultMessage="Academic journey — from foundations to postgraduate studies."
      />
    </p>

    <div className="education-timeline" role="list">
      {educationData.map((edu, idx) => (
        <div
          className={`education-timeline__item ${
            edu.status === 'current' ? 'education-timeline__item--current' : ''
          }`}
          key={`${edu.level}-${edu.period}`}
          role="listitem"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={100 + idx * 120}
        >
          <span className="education-timeline__marker" aria-hidden="true" />
          <article className="education-card">
            <div className="education-card__top">
              <div className="education-card__icon" aria-hidden="true">
                <i className="fas fa-graduation-cap" />
              </div>
              <div className="education-card__meta">
                <span className="education-card__level">{edu.level}</span>
                {edu.status === 'current' && (
                  <span className="education-card__badge">
                    <FormattedMessage id="education-current" defaultMessage="Current" />
                  </span>
                )}
              </div>
            </div>
            <h3 className="education-card__degree">{edu.degree}</h3>
            <p className="education-card__school">{edu.institution}</p>
            <div className="education-card__period">
              <i className="far fa-calendar-alt" aria-hidden="true" />
              <span>{edu.period}</span>
            </div>
          </article>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
