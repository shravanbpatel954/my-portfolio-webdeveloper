import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import particlesConfig, { particlesConfigLight } from './particle-config';

const getIsLight = () => document.body.classList.contains('light');

export default function ParticleBackground() {
  const [isLight, setIsLight] = useState(getIsLight);

  useEffect(() => {
    const observer = new MutationObserver(() => setIsLight(getIsLight()));
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      id="particles"
      className="particles-css"
      params={isLight ? particlesConfigLight : particlesConfig}
    />
  );
}
