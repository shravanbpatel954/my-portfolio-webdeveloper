import React, { useState } from 'react';
import '../../pages/Project/ProjectPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

const projects = [
  {
    title: "StudyBuddy – AI-Powered Adaptive Learning Platform",
    subtitle: "2024 · Full-Stack Web App",
    description:
      "Full-stack AI-driven learning platform with personalised study recommendations from learner performance. End-to-end stack: React.js, Node.js/Express, MongoDB, deployment on Render, and Google Gemini API for dynamic content and adaptive quizzes.",
    live: "https://studybuddy-kc2m.onrender.com/",
    image: require("../../img/studybuddy.jpeg"),
    tech: "React.js • Node.js • MongoDB • Google Gemini API",
  },
  {
    title: "Prepa – AI Interview Prep Application",
    subtitle: "AI Interview Prep",
    description: "AI-powered app for job interview practice with real-time feedback and tailored questions.",
    live: "https://prepa-d7e15.web.app",
    repo: "https://github.com/shravanbpatel954/prepa-ai-interview-prep",
    image: require("../../img/prepa.jpeg"),
    tech: "HTML5 • CSS • React • Python",
  },
  {
    title: "AIO – AI-Based Advisor Web Application",
    subtitle: "AI Advisor Platform",
    description: "Intelligent advisor platform offering personalized advice, recommendations, and insights.",
    live: "https://aio-5igz.onrender.com",
    repo: "https://github.com/shravanbpatel954/aio-advisor",
    image: require("../../img/aio.jpeg"),
    tech: "HTML5 • CSS • React • Node.js",
  },
  {
    title: "Lakshwear – Cloth E-commerce Website",
    subtitle: "E-commerce",
    description: "User-friendly e-commerce platform for seamless shopping, secure checkout, and user accounts.",
    live: "https://lakshwear-full-stack-frontend.onrender.com/",
    repo: "https://github.com/shravanbpatel954/lakshwear-ecommerce",
    image: require("../../img/lakshwear.jpeg"),
    tech: "HTML5 • CSS • React • JavaScript",
  },
  {
    title: "Online Game Lab",
    subtitle: "Game Lab",
    description: "Personal project to experiment with game logic and web interactivity. Collection of simple games.",
    live: "https://onlinegamelab.onrender.com/",
    repo: "https://github.com/shravanbpatel954/online-game-lab",
    image: require("../../img/onlinegamelab.jpeg"),
    tech: "HTML5 • CSS • React • JavaScript",
  },
  {
    title: "Creative Recycle Solution Web",
    subtitle: "Recycle Solution",
    description: "Guides users to recycle or creatively repurpose everyday items into reusable or valuable products.",
    live: "https://crwa.onrender.com/",
    repo: "https://github.com/shravanbpatel954/creative-recycle-web",
    image: require("../../img/crwa.jpeg"),
    tech: "HTML5 • CSS • React • JavaScript",
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIdx, setModalIdx] = useState(null);
  return (
    <section className="proyectos mas-proyect" id="proyectos">
      <h2 className="heading" style={{textAlign: 'center', marginBottom: '2rem'}}>Projects</h2>
      <Swiper
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className='proyectos-slider mySwiper'
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
      >
        {projects.map((project, idx) => (
          <SwiperSlide className='caja' key={idx}>
            <div className="project-card" style={{cursor: 'pointer', background: 'transparent', boxShadow: 'none', textAlign: 'center'}}>
              <img src={project.image} alt={project.title} style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem', background: '#eee'}} />
              <h3 style={{margin: '1rem 0 0.5rem 0', textAlign: 'center', fontWeight: 700}}>{project.title}</h3>
              <div style={{color: '#00e5fe', fontWeight: 500, marginBottom: '0.5rem'}}>{project.subtitle}</div>
              <div style={{color: '#bdbdbd', fontSize: '1.1rem', marginBottom: '0.5rem'}}>{project.tech}</div>
              {activeIndex === idx && (
                <>
                  <p className="project-desc-swiper">{project.description}</p>
                  <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', margin: '1rem 0', flexWrap: 'wrap'}}>
                    <a href={project.live} className="custom-btn btn" target="_blank" rel="noopener noreferrer">Demo</a>
                    {project.repo && (
                      <a href={project.repo} className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                    )}
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {modalIdx !== null && (
        <div className="modal-overlay" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={() => setModalIdx(null)}>
          <div className="modal-content" style={{background: '#fff', borderRadius: '16px', padding: '2rem', maxWidth: '600px', width: '90%', position: 'relative'}} onClick={e => e.stopPropagation()}>
            <button onClick={() => setModalIdx(null)} style={{position: 'absolute', top: 10, right: 20, background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#00e5fe'}}>&times;</button>
            <img src={projects[modalIdx].image} alt={projects[modalIdx].title} style={{width: '100%', borderRadius: '12px', marginBottom: '1rem'}} />
            <h3 style={{margin: '1rem 0 0.5rem 0', textAlign: 'center'}}>{projects[modalIdx].title}</h3>
            <p style={{fontSize: '1.1rem', textAlign: 'center', marginBottom: '0.5rem'}}>{projects[modalIdx].description}</p>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href={projects[modalIdx].live} className="custom-btn btn" target="_blank" rel="noopener noreferrer">Demo</a>
              {projects[modalIdx].repo && (
                <a href={projects[modalIdx].repo} className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
              )}
            </div>
          </div>
        </div>
      )}
      <style>{`
        .project-desc-swiper {
          font-size: 1.1rem;
          text-align: center;
          margin: 1rem 0 1.5rem 0;
          border-radius: 8px;
          padding: 0.7rem 1rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          transition: background 0.3s, color 0.3s;
        }
        body.dark .project-desc-swiper {
          background: transparent;
          color: #fff;
        }
        body.light .project-desc-swiper {
          background: #fff;
          color: #222;
        }
      `}</style>
    </section>
  );
};

export default Project;