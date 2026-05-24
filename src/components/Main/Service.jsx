import React from 'react';
import { FormattedMessage } from 'react-intl';

const expertiseAreas = [
  { icon: 'fa-laptop-code', titleId: 'design', infoId: 'design-info', delay: 200 },
  { icon: 'fa-brain', titleId: 'development', infoId: 'development-info', delay: 300 },
  { icon: 'fa-mobile-alt', titleId: 'seo', infoId: 'seo-info', delay: 400 },
  { icon: 'fa-cloud', titleId: 'marketing', infoId: 'marketing-info', delay: 500 },
];

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="skills" defaultMessage="Technical Skills" />
    </h2>
    <p className="section-subtitle">
      <FormattedMessage
        id="skills-subtitle"
        defaultMessage="Core technologies I have applied across academic projects, hackathons, and deployed applications."
      />
    </p>
    <div className="row expertise-grid">
      {expertiseAreas.map((area) => (
        <div
          key={area.titleId}
          className="columns"
          data-aos="fade-up"
          data-aos-delay={area.delay}
        >
          <i className={`fas ${area.icon}`} />
          <h3>
            <FormattedMessage id={area.titleId} />
          </h3>
          <p>
            <FormattedMessage id={area.infoId} />
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default React.memo(Service);
