import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './Certificates.css';

const certificates = [
  {
    src: require('../../img/nptel_cloud.jpg'),
    alt: 'NPTEL Cloud Computing — IIT Kharagpur (Elite Silver | Top 5%)',
  },
  {
    src: require('../../img/nptel_oop.png'),
    alt: 'NPTEL Fundamentals of OOP in Java — IIT Roorkee (Elite Silver | 77%)',
  },
  { src: require('../../img/certificate1.jpg'), alt: 'Full-Stack Web Development — DevTown' },
  {
    src: require('../../img/nsdc.jpg'),
    alt: 'Web Development Training — Internshala & Skill India (NSDC)',
  },
  { src: require('../../img/internshala.jpg'), alt: 'Web Development Training — Internshala' },
];

const Certificates = () => {
  const [modalIdx, setModalIdx] = useState(null);

  return (
    <section className="certificates" id="certificates">
      <h2 className="heading">
        <FormattedMessage id="certificates" defaultMessage="Certificates" />
      </h2>
      <p className="section-subtitle">
        <FormattedMessage
          id="certificates-subtitle"
          defaultMessage="NPTEL Elite Silver (Top 5% in Cloud Computing), full-stack training, and industry certifications."
        />
      </p>
      <div className="certificates__gallery">
        {certificates.map((cert, idx) => (
          <div
            className="certificate-card"
            key={idx}
            onClick={() => setModalIdx(idx)}
            onKeyDown={(e) => e.key === 'Enter' && setModalIdx(idx)}
            role="button"
            tabIndex={0}
            aria-label={cert.alt}
          >
            <img src={cert.src} alt={cert.alt} />
            <div className="certificate-card__bar" />
          </div>
        ))}
      </div>

      {modalIdx !== null && (
        <div
          className="certificate-modal-overlay"
          onClick={() => setModalIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="certificate-modal__close"
              onClick={() => setModalIdx(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img src={certificates[modalIdx].src} alt={certificates[modalIdx].alt} />
            <p className="certificate-modal__title">{certificates[modalIdx].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
