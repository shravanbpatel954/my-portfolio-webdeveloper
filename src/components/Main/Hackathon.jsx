import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './Hackathon.css';

const hackathonImages = [
  { src: require('../../img/hackathon_certs.png'), title: 'Certificates of Merit' },
  { src: require('../../img/hackathon_team1.png'), title: 'Receiving the 2nd Prize Award' },
  { src: require('../../img/hackathon_team2.png'), title: 'Team StackStorm with Certificates' },
  { src: require('../../img/hackathon_team3.jpg'), title: 'SIES College Event Stage' },
];

const Hackathon = () => {
  const [activeImgIdx, setActiveImgIdx] = useState(null);

  return (
    <section className="hackathon-section" id="hackathon">
      <h2 className="heading">
        <FormattedMessage id="hackathon" defaultMessage="Hackathon Victory" />
      </h2>
      <p className="section-subtitle">
        <FormattedMessage
          id="hackathon-subtitle"
          defaultMessage="Pixels 2026 — Innov8 Hackathon at SIES College of Management Studies, Navi Mumbai."
        />
      </p>

      <div className="row container">
        <div className="columns hackathon-detail-card" data-aos="fade-right">
          <h3>
            <span aria-hidden>🥈</span>
            <FormattedMessage
              id="hackathon-prize"
              defaultMessage="2nd Prize among 600+ registered teams and 64+ offline round teams"
            />
          </h3>
          <h4>
            <FormattedMessage
              id="hackathon-project"
              defaultMessage="Multilingual Duplicate Detection System"
            />
          </h4>
          <p>
            <FormattedMessage
              id="hackathon-desc"
              defaultMessage="At Innov8 Hackathon (Pixels 2026), team StackStorm built a cross-lingual deduplication system with real-time semantic analysis across 50+ languages — supported by Impactsure Technologies and Emisha."
            />
          </p>

          <div className="hackathon-contrib-box">
            <h5>
              <FormattedMessage id="hackathon-contrib-title" defaultMessage="My contributions" />
            </h5>
            <ul>
              <li>
                <strong>Core pipeline:</strong>{' '}
                <FormattedMessage
                  id="hackathon-c1"
                  defaultMessage="MiniLM sentence embeddings + FAISS index for fast semantic similarity search."
                />
              </li>
              <li>
                <strong>ONNX optimization:</strong>{' '}
                <FormattedMessage
                  id="hackathon-c2"
                  defaultMessage="PyTorch to ONNX Runtime conversion for ~4.5× CPU inference speedup."
                />
              </li>
              <li>
                <strong>Productization:</strong>{' '}
                <FormattedMessage
                  id="hackathon-c3"
                  defaultMessage="End-to-end processing pipeline and Streamlit dashboard for real-time validation."
                />
              </li>
            </ul>
          </div>

          <p className="hackathon-team">
            <strong>Team StackStorm:</strong> Pooja Naik · Kaif Khan · Vrushket Mulye · Shravankumar Patel
          </p>
        </div>

        <div className="columns" data-aos="fade-left">
          <h4 className="hackathon-gallery-title">Hackathon Gallery</h4>
          <div className="hackathon-grid">
            {hackathonImages.map((img, idx) => (
              <div
                className="gallery-item-glass"
                key={idx}
                onClick={() => setActiveImgIdx(idx)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveImgIdx(idx)}
                role="button"
                tabIndex={0}
                aria-label={img.title}
              >
                <img src={img.src} alt={img.title} />
                <div className="caption">
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeImgIdx !== null && (
        <div
          className="hackathon-lightbox"
          onClick={() => setActiveImgIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="hackathon-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="hackathon-lightbox__close"
              onClick={() => setActiveImgIdx(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img src={hackathonImages[activeImgIdx].src} alt={hackathonImages[activeImgIdx].title} />
            <p className="hackathon-lightbox__caption">{hackathonImages[activeImgIdx].title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(Hackathon);
