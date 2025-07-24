import React from 'react';

const Skills = () => (
  <section className="skills" id="skills">
    <h2 className="heading">Skills</h2>
    <div className="skills-list">
      <div className="skill-item">
        <h3>HTML</h3>
        <div className="skill-bar">
          <div className="skill-progress" style={{width: '65%'}}>65%</div>
        </div>
      </div>
      <div className="skill-item">
        <h3>CSS</h3>
        <div className="skill-bar">
          <div className="skill-progress" style={{width: '45%'}}>45%</div>
        </div>
      </div>
      <div className="skill-item">
        <h3>React.js</h3>
        <div className="skill-bar">
          <div className="skill-progress" style={{width: '65%'}}>65%</div>
        </div>
      </div>
      <div className="skill-item">
        <h3>Python</h3>
        <div className="skill-bar">
          <div className="skill-progress" style={{width: '55%'}}>55%</div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 