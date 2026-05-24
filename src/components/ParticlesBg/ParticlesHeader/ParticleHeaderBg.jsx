import React, { useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const headerParticleOptions = {
  background: {
    color: 'transparent',
  },
  fullScreen: {
    enable: false,
  },
  fpsLimit: 60,
  detectRetina: true,
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: true,
        mode: ['grab', 'bubble'],
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 220,
        links: {
          opacity: 0.55,
          blink: true,
        },
      },
      bubble: {
        distance: 180,
        size: 6,
        duration: 2.5,
        opacity: 0.35,
      },
      push: {
        quantity: 4,
      },
    },
  },
  particles: {
    color: {
      value: ['#00f2fe', '#6366f1', '#a78bfa', '#22d3ee'],
    },
    links: {
      enable: true,
      color: '#6366f1',
      distance: 155,
      opacity: 0.28,
      width: 1.2,
      triangles: {
        enable: true,
        opacity: 0.04,
      },
    },
    move: {
      enable: true,
      speed: 1.4,
      direction: 'none',
      random: true,
      straight: false,
      outModes: {
        default: 'out',
      },
      attract: {
        enable: true,
        rotateX: 900,
        rotateY: 1200,
      },
    },
    number: {
      density: {
        enable: true,
        area: 700,
      },
      value: 85,
    },
    opacity: {
      value: { min: 0.15, max: 0.65 },
      animation: {
        enable: true,
        speed: 0.8,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 3.5 },
      animation: {
        enable: true,
        speed: 2.5,
        sync: false,
      },
    },
    shape: {
      type: ['circle', 'star'],
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.08,
        opacity: 0.85,
      },
    },
    rotate: {
      value: { min: 0, max: 360 },
      animation: {
        enable: true,
        speed: 4,
        sync: false,
      },
    },
  },
};

export default function ParticleHeaderBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = useMemo(() => headerParticleOptions, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="particles-2-css"
      options={options}
    />
  );
}
