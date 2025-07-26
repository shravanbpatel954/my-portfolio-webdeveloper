import React from 'react';
import { FormattedMessage } from 'react-intl';

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="services" defaultMessage="Services" />
    </h2>
    <div className="row">
      <div className="columns" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-drafting-compass"></i>
        <h3>
          <FormattedMessage id="design" defaultMessage="UI/UX Design" />
        </h3>
        <p>
          <FormattedMessage
            id="design-info"
            defaultMessage="Modern, user-friendly interface designs for web and mobile platforms to enhance user experience and brand identity."
          />
        </p>
      </div>

      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-laptop"></i>
        <h3>
          <FormattedMessage id="development" defaultMessage="Web Development" />
        </h3>
        <p>
          <FormattedMessage
            id="development-info"
            defaultMessage="Responsive, interactive, and well-structured websites built with clean code and modern tech stacks."
          />
        </p>
      </div>

      <div className="columns" data-aos="fade-up" data-aos-delay="400">
        <i className="fas fa-robot"></i>
        <h3>
          <FormattedMessage id="ai" defaultMessage="AI Integration" />
        </h3>
        <p>
          <FormattedMessage
            id="ai-info"
            defaultMessage="Build smart features using AI tools—like chatbots, recommendation engines, and automation—to enhance user interaction and business efficiency."
          />
        </p>
      </div>

      <div className="columns" data-aos="fade-up" data-aos-delay="500">
        <i className="fas fa-wrench"></i>
        <h3>
          <FormattedMessage id="maintenance" defaultMessage="Site Maintenance" />
        </h3>
        <p>
          <FormattedMessage
            id="maintenance-info"
            defaultMessage="Keep your website updated, bug-free, and secure with regular content and feature updates."
          />
        </p>
      </div>

      <div className="columns" data-aos="fade-up" data-aos-delay="600">
        <i className="fas fa-search"></i>
        <h3>
          <FormattedMessage id="seo" defaultMessage="SEO Optimization" />
        </h3>
        <p>
          <FormattedMessage
            id="seo-info"
            defaultMessage="Improve search engine rankings to reach more users organically across Google, Bing, and more."
          />
        </p>
      </div>

      <div className="columns" data-aos="fade-up" data-aos-delay="700">
        <i className="fas fa-tachometer-alt"></i>
        <h3>
          <FormattedMessage id="optimization" defaultMessage="Performance Optimization" />
        </h3>
        <p>
          <FormattedMessage
            id="optimization-info"
            defaultMessage="Enhance website speed and usability with fast-loading assets and clean structure."
          />
        </p>
      </div>
    </div>
  </section>
);

export default React.memo(Service);
