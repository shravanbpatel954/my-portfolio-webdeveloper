import React from 'react';
import { FormattedMessage } from 'react-intl';
import './RecruiterHighlights.css';

const highlights = [
  {
    icon: 'fa-graduation-cap',
    id: 'highlight-mca',
    defaultMessage: 'MCA (Pursuing) — BVIMIT, Navi Mumbai',
  },
  {
    icon: 'fa-trophy',
    id: 'highlight-hackathon',
    defaultMessage: '2nd Prize — Innov8 Hackathon (50+ teams)',
  },
  {
    icon: 'fa-certificate',
    id: 'highlight-nptel',
    defaultMessage: 'NPTEL Elite Silver — Top 5% Cloud Computing',
  },
  {
    icon: 'fa-rocket',
    id: 'highlight-live',
    defaultMessage: 'Live deployed project — realtorbazar.com',
  },
];

const RecruiterHighlights = () => (
  <section className="recruiter-highlights" id="profile-glance" aria-label="Profile summary for recruiters">
    <h2 className="recruiter-highlights__heading">
      <FormattedMessage id="profile-glance" defaultMessage="Profile at a Glance" />
    </h2>
    <div className="recruiter-highlights__grid">
      {highlights.map((item, idx) => (
        <div
          key={item.id}
          className="recruiter-highlights__card"
          data-aos="fade-up"
          data-aos-delay={100 + idx * 80}
        >
          <i className={`fas ${item.icon}`} aria-hidden />
          <p>
            <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default React.memo(RecruiterHighlights);
