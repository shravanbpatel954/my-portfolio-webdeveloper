import React, { useState } from 'react';

const certificates = [
  { src: require('../../img/certificate1.jpg'), alt: 'Full-Stack Web Development - DevTown' },
  { src: require('../../img/internshala.jpg'), alt: 'Internshala Certificate' },
  { src: require('../../img/nsdc.jpg'), alt: 'NSDC Skill India Certificate' },
];

const Certificates = () => {
  const [modalIdx, setModalIdx] = useState(null);
  return (
    <section className="certificates" id="certificates" style={{padding: '3rem 0', background: 'none'}}>
      <h2 className="heading" style={{textAlign: 'center', marginBottom: '2rem', color: '#00e5fe', letterSpacing: '2px', fontWeight: 700, textShadow: '0 2px 12px rgba(0,229,254,0.15)'}}>Certificates</h2>
      <div className="certificates__gallery" style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
        {certificates.map((cert, idx) => (
          <div className="certificate-glass animated-col" key={idx} style={{transition: 'transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s', border: '2.5px solid #00e5fe', borderRadius: '18px', overflow: 'hidden', position: 'relative', cursor: 'pointer', animation: `fadeInUp 0.7s ${0.2 + idx * 0.2}s both`, background: 'rgba(20,30,40,0.35)', backdropFilter: 'blur(8px)', boxShadow: '0 8px 32px rgba(0,229,254,0.10), 0 2px 8px rgba(0,0,0,0.18)'}} onClick={() => setModalIdx(idx)}>
            <img src={cert.src} alt={cert.alt} className="certificate__img" style={{maxWidth: '260px', borderRadius: '16px', display: 'block', filter: 'brightness(1)'}} />
            <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '8px', background: 'linear-gradient(90deg, #00e5fe 0%, #0fffc3 100%)', opacity: 0.7, borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px'}}></div>
          </div>
        ))}
      </div>
      {modalIdx !== null && (
        <div className="modal-overlay" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={() => setModalIdx(null)}>
          <div className="modal-content" style={{background: 'rgba(20,30,40,0.85)', borderRadius: '18px', padding: '2rem', maxWidth: '700px', width: '90%', position: 'relative', boxShadow: '0 8px 32px rgba(0,229,254,0.18)'}} onClick={e => e.stopPropagation()}>
            <button onClick={() => setModalIdx(null)} style={{position: 'absolute', top: 10, right: 20, background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#00e5fe'}}>&times;</button>
            <img src={certificates[modalIdx].src} alt={certificates[modalIdx].alt} style={{width: '100%', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 4px 24px rgba(0,229,254,0.18)'}} />
            <div style={{textAlign: 'center', fontWeight: 600, color: '#00e5fe', fontSize: '1.1rem'}}>{certificates[modalIdx].alt}</div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .certificate-glass.animated-col:hover {
          transform: scale(1.07) rotate(-1deg);
          box-shadow: 0 12px 40px #00e5fe44, 0 2px 8px rgba(0,0,0,0.18);
          border-color: #00e5fe;
        }
      `}</style>
    </section>
  );
};

export default Certificates; 