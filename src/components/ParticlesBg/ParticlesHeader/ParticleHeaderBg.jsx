import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleHeaderBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // Loaded callback
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-2-css"
      options={{
        background: {
          color: "transparent"
        },
        fullScreen: {
          enable: false
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
                opacity: 0.45
              }
            },
            push: {
              particles_nb: 3
            }
          }
        },
        particles: {
          color: {
            value: ["#00f2fe", "#6366f1"]
          },
          links: {
            enable: true,
            color: "#6366f1",
            distance: 140,
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 45
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1
            }
          },
          size: {
            value: 2.5,
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5
            }
          },
          shape: {
            type: "circle"
          }
        },
        retina_detect: true
      }}
    />
  );
}
