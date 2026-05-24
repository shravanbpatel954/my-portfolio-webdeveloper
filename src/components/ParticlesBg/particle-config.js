const particlesConfig = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#00f2fe", "#6366f1"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#6366f1",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.6
        }
      },
      push: {
        particles_nb: 3
      }
    }
  },
  retina_detect: true
};

export const particlesConfigLight = {
  ...particlesConfig,
  particles: {
    ...particlesConfig.particles,
    color: { value: ["#0891b2", "#6366f1"] },
    opacity: { value: 0.35, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
    line_linked: {
      ...particlesConfig.particles.line_linked,
      color: "#94a3b8",
      opacity: 0.15,
    },
  },
};

export default particlesConfig;