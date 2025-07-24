import React from 'react';

const educationData = [
  {
    title: 'Graduation',
    degree: 'B.Sc Computer Science',
    institution: 'N.E.S Ratnam College of Arts, Science & Commerce',
    year: '2022 - 2025',
  },
  {
    title: 'High School',
    degree: 'PCMB (Physics, Chemistry, Mathematics, Biology)',
    institution: 'Raminiranjan Jhunjhunwala College',
    year: '2021 - 2022',
  },
];

const Education = () => (
  <section className="education" id="education" style={{padding: '3rem 0', background: 'none'}}>
    <h2 className="heading" style={{textAlign: 'center', marginBottom: '2rem', color: '#00e5fe', letterSpacing: '2px', fontWeight: 700, textShadow: '0 2px 12px rgba(0,229,254,0.15)'}}>Education</h2>
    <div className="education__content" style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
      {educationData.map((edu, idx) => (
        <div className="education-card animated-col" key={idx} style={{border: '2.5px solid #00e5fe', background: 'rgba(20,30,40,0.35)', backdropFilter: 'blur(8px)', borderRadius: '18px', boxShadow: '0 8px 32px rgba(0,229,254,0.10), 0 2px 8px rgba(0,0,0,0.18)', padding: '2rem', minWidth: '260px', maxWidth: '340px', transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s', cursor: 'pointer', animation: `fadeInUp 0.7s ${0.2 + idx * 0.2}s both`}}>
          <h3 style={{color: '#00e5fe', marginBottom: '0.5rem', textShadow: '0 0 8px #00e5fe55'}}>{edu.title}</h3>
          <div style={{fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem', color: '#fff', textShadow: '0 0 8px #00e5fe33'}}>{edu.degree}</div>
          <div style={{color: '#e0f7fa', marginBottom: '0.5rem', fontWeight: 600, fontSize: '1.05rem', textShadow: '0 0 8px #00e5fe22'}}>{edu.institution}</div>
          <div style={{color: '#00e5fe', fontWeight: 600, letterSpacing: '1px'}}>{edu.year}</div>
        </div>
      ))}
    </div>
    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .education-card.animated-col:hover {
        transform: scale(1.07) rotate(-1deg);
        box-shadow: 0 12px 40px #00e5fe44, 0 2px 8px rgba(0,0,0,0.18);
        border-color: #00e5fe;
      }
    `}</style>
  </section>
);

export default Education; 