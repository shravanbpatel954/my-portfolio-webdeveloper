import React, { useState } from 'react';
import './Chatbot.css';

const initialMessages = [
  {
    from: 'bot',
    text: 'Hi! I am Shravan’s DevOps & AI assistant. Ask me about his DevOps stack (Git, GitHub, GitLab, Jenkins, Docker, Kubernetes), projects like StudyBuddy, or his MCA education.',
  },
];

const faqAnswers = [
  {
    keywords: ['studybuddy', 'study buddy', 'learning platform'],
    answer:
      'StudyBuddy is an AI-powered adaptive learning platform built with React.js, Node.js/Express, MongoDB and Google Gemini API. It delivers personalised study recommendations and adaptive quizzes based on learner performance and is deployed on Render.',
  },
  {
    keywords: ['education', 'qualification', 'qualifications', 'degree', 'degrees', 'mca', 'master of computer applications', 'postgraduate', 'bvimit', 'bharati', 'computer applications'],
    answer:
      'Education (Qualifications):\n\n• Master of Computer Applications (MCA) — Sep 2025 – Present — Bharati Vidyapeeth Institute of Management & IT (BVIMIT), Navi Mumbai\n• B.Sc Computer Science — 2022 – 2025 — N.E.S Ratnam College of Arts, Science & Commerce\n• High School — 2021 – 2022 — PCMB (Physics, Chemistry, Mathematics, Biology) — Raminiranjan Jhunjhunwala College',
  },
  {
    keywords: ['devops', 'git', 'github', 'gitlab', 'jenkins', 'docker', 'kubernetes', 'kubernates'],
    answer:
      'On the DevOps side, Shravan works with Git for version control, GitHub and GitLab for hosting and collaboration, Jenkins for CI pipelines, Docker for containerisation, and Kubernetes for orchestrating and scaling containerised services.',
  },
  {
    keywords: ['certificates', 'certificate', 'devtown', 'internshala', 'nsdc', 'skill india'],
    answer:
      'Certificates:\n\n• DevTown — Full-Stack Web Development\n• Internshala — Internshala Certificate\n• NSDC / Skill India — NSDC Skill India Certificate',
  },
  {
    keywords: ['about', 'who is shravan', 'about me', 'profile', 'bio'],
    answer:
      'Shravan is an MCA student and a DevOps-minded full-stack developer. He builds production-ready apps and also works with CI/CD, Docker, and Kubernetes to ship reliably.',
  },
  {
    keywords: ['projects', 'project', 'work', 'portfolio'],
    answer:
      'Projects:\n\n• StudyBuddy — AI-Powered Adaptive Learning Platform (React.js, Node.js, MongoDB, Google Gemini) — https://studybuddy-kc2m.onrender.com/\n• Prepa — AI Interview Prep Application\n• AIO — AI-Based Advisor Web Application\n• Lakshwear — E-commerce Website\n• Online Game Lab\n• Creative Recycle Solution Web',
  },
  {
    keywords: ['contact', 'email', 'whatsapp', 'linkedin'],
    answer:
      'Contact:\n\nEmail: shravan.b.patel954@gmail.com\nWhatsApp: https://api.whatsapp.com/send?phone=918104479942\nLinkedIn: https://www.linkedin.com/in/shravan-kumar-patel/\nGitHub: https://github.com/shravanbpatel954',
  },
  {
    keywords: ['stack', 'tech stack', 'technologies', 'skills'],
    answer:
      'His main stack is React, TypeScript, HTML/CSS, Node.js/Express, MySQL and MongoDB, plus DevOps tooling like Git/GitHub/GitLab, Jenkins, Docker and Kubernetes.',
  },
  {
    keywords: ['lakshwear', 'e-commerce', 'laksh wear'],
    answer:
      'Lakshwear is a production e-commerce website built with React and JavaScript, focused on clean UI, secure checkout and a smooth shopping experience.',
  },
  {
    keywords: ['prepa', 'interview prep'],
    answer:
      'Prepa is an AI interview preparation app that generates tailored questions and feedback to help users practise for job interviews.',
  },
  {
    keywords: ['contact', 'hire', 'reach out', 'email', 'whatsapp'],
    answer:
      'You can contact Shravan via email at shravan.b.patel954@gmail.com, LinkedIn, GitHub or WhatsApp — all links are available in the hero section and Contact section.',
  },
];

function getBotReply(rawText) {
  const text = rawText
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Simple intent matching (keyword-based) so it works fully offline.
  // Order matters: put the most specific intents first.
  const ordered = [...faqAnswers];

  for (const entry of ordered) {
    for (const k of entry.keywords) {
      const keyword = k.toLowerCase();
      if (text.includes(keyword)) return entry.answer;
    }
  }

  return "Great question! I can answer things about Shravan's projects, DevOps tools (Git, GitHub, GitLab, Jenkins, Docker, Kubernetes), skills, and education. Try asking, for example: “What DevOps tools does Shravan use?” or “Tell me about the StudyBuddy project.”";
}

const Chatbot = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { from: 'user', text: trimmed };
    const botMsg = { from: 'bot', text: getBotReply(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const attention = showHint && !open;

  return (
    <div className="chatbot-widget" aria-live="polite">
      {open && (
        <div className="chatbot-shell" data-aos="fade-up">
          <div className="chatbot-header">
            <div className="chatbot-header__title">
              <span className="chatbot-avatar">SB</span>
              <div>
                <div className="chatbot-name">Shravan&apos;s DevOps Assistant</div>
                <div className="chatbot-role">DevOps &amp; CI/CD Q&amp;A</div>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message chatbot-message--${msg.from}`}
              >
                <div className="chatbot-bubble">{msg.text}</div>
              </div>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask about projects or DevOps skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <i className="fas fa-paper-plane" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={`chatbot-fab ${open ? 'chatbot-fab--open' : ''} ${attention ? 'chatbot-fab--attention' : ''}`}
        onClick={() => {
          setOpen((v) => !v);
          setShowHint(false);
        }}
        aria-label="Open AI assistant chat"
      >
        <span className="chatbot-fab__glow" />
        <i className="fas fa-robot" aria-hidden="true" />
      </button>
      {showHint && !open && (
        <div className="chatbot-fab-hint">
          <span>Talk to My Digital Twin</span>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

