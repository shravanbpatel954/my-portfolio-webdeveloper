import React, { useState } from 'react';
import './Chatbot.css';

const initialMessages = [
{
from: 'bot',
text: `👋 Hi! I'm Shravan AI.

I know everything about Shravan's:

🚀 Projects
🏆 Hackathon Achievements
💻 Technical Skills
🤖 AI & Machine Learning
📱 Mobile Development
☁️ DevOps & Cloud
🎓 Education
📜 Certifications
📞 Contact Information

Try asking:

• Tell me about StudyBuddy
• What did you build at Innov8 Hackathon?
• What technologies do you use?
• Show your certifications
• Tell me about your AI projects`,
},
];

const faqAnswers = [
{
keywords: ['about', 'who is shravan', 'about me', 'profile', 'bio'],
answer:
'Shravan is an MCA student and Full-Stack Developer with experience in AI/ML, React Native, DevOps, NLP, cloud deployment and product development. He enjoys building end-to-end solutions that solve real-world problems.',
},

{
keywords: ['education', 'qualification', 'degree', 'mca', 'bvimit'],
answer:
'🎓 Education:\n\n• MCA (2025 - Present) — Bharati Vidyapeeth Institute of Management & IT (BVIMIT), Navi Mumbai\n\n• B.Sc Computer Science (2022 - 2025) — N.E.S Ratnam College of Arts, Science & Commerce\n\n• Higher Secondary (PCMB) — Raminiranjan Jhunjhunwala College',
},

{
keywords: ['skills', 'stack', 'tech stack', 'technologies'],
answer:
'💻 Technical Skills:\n\nFrontend: React.js, React Native, HTML5, CSS3, JavaScript, TypeScript\n\nBackend: Node.js, Express.js, REST APIs\n\nDatabases: MongoDB, PostgreSQL, MySQL, Firebase\n\nAI/ML: MiniLM, FAISS, ONNX, NLP, Gemini API\n\nDevOps: Docker, Git, GitHub, CI/CD, Render, Railway, Vercel\n\nLanguages: JavaScript, Python, Java',
},

{
keywords: ['studybuddy', 'study buddy'],
answer:
'📚 StudyBuddy is an AI-powered adaptive learning platform built with React.js, Node.js, MongoDB and Google Gemini API. It provides personalized learning recommendations, AI-powered assistance and adaptive quizzes.',
},

{
keywords: ['mindguard', 'mental health', 'android'],
answer:
'📱 MindGuard is a React Native Android application that uses AI-powered anomaly detection with Isolation Forest algorithms to identify behavioural deviations while maintaining privacy.',
},

{
keywords: ['hackathon', 'innov8', 'pixels', 'award', 'prize'],
answer:
'🏆 Shravan secured 2nd Prize at Innov8 Hackathon (Pixels 2026) among 50+ teams. He worked as Backend & ML Pipeline Lead on a Multilingual Duplicate Detection System using MiniLM, FAISS and ONNX.',
},

{
keywords: ['duplicate detection', 'multilingual'],
answer:
'🌍 Multilingual Duplicate Detection System uses MiniLM embeddings, FAISS vector search and ONNX optimization to perform semantic duplicate detection across multiple languages.',
},

{
keywords: ['ai', 'machine learning', 'ml', 'nlp'],
answer:
'🤖 Shravan has experience with NLP, MiniLM embeddings, FAISS vector databases, ONNX optimization and Gemini API integrations. His AI work focuses on solving practical real-world problems.',
},

{
keywords: ['devops', 'docker', 'ci cd', 'cloud', 'deployment'],
answer:
'☁️ Shravan works with Docker, Git, GitHub, cloud deployment platforms like Render, Railway and Vercel, along with CI/CD concepts and modern development workflows.',
},

{
keywords: ['mobile', 'react native'],
answer:
'📱 Shravan develops Android applications using React Native and Firebase. His projects combine mobile development with AI and backend services.',
},

{
keywords: ['realtorbazaar', 'real estate'],
answer:
'🏠 RealtorBazaar is a live real-estate platform developed using React.js, Node.js, Express and MongoDB. It includes property listings, admin dashboards and management tools.',
},

{
keywords: ['prepa', 'interview'],
answer:
'🎯 Prepa is an AI-powered interview preparation platform that helps users practice interviews through tailored questions and AI-generated feedback.',
},

{
keywords: ['aio', 'advisor'],
answer:
'🤖 AIO is an AI-based advisor application that provides personalized recommendations across multiple domains through an intelligent conversational interface.',
},

{
keywords: ['projects', 'portfolio', 'project'],
answer:
'🚀 Major Projects:\n\n• Multilingual Duplicate Detection System\n• StudyBuddy\n• MindGuard\n• RealtorBazaar\n• Mumbai University Inventory System\n• Prepa\n• AIO\n• Lakshwear\n• Online Game Lab\n• Creative Recycle Solution',
},

{
keywords: ['certificate', 'certification', 'certificates'],
answer:
'📜 Certifications:\n\n• NPTEL Cloud Computing (Top 5%)\n• NPTEL OOP in Java\n• Full-Stack Web Development (DevTown)\n• Internshala Web Development Training\n• Skill India / NSDC\n• Automation Anywhere Essentials',
},

{
keywords: ['contact', 'email', 'linkedin', 'github', 'whatsapp', 'hire'],
answer:
'📞 Contact Information:\n\n📧 [shravan.b.patel954@gmail.com](mailto:shravan.b.patel954@gmail.com)\n\n💼 LinkedIn: linkedin.com/in/shravan-kumar-patel\n\n💻 GitHub: github.com/shravanbpatel954\n\n🌐 Portfolio: shravankumar.co.in',
},
];

function getBotReply(rawText) {
const text = rawText
.toLowerCase()
.replace(/[^a-z0-9\s-]/g, ' ')
.replace(/\s+/g, ' ')
.trim();

for (const entry of faqAnswers) {
for (const keyword of entry.keywords) {
if (text.includes(keyword.toLowerCase())) {
return entry.answer;
}
}
}

return `I can help with:

🚀 Projects
🤖 AI & Machine Learning
💻 Technical Skills
☁️ DevOps & Cloud
📱 Mobile Development
🏆 Hackathon Achievements
🎓 Education
📜 Certifications

Try asking:
• Tell me about StudyBuddy
• What technologies do you use?
• What did you build at Innov8 Hackathon?
• Tell me about your AI projects`;
}

const Chatbot = () => {
const [messages, setMessages] = useState(initialMessages);
const [input, setInput] = useState('');
const [open, setOpen] = useState(false);
const [showHint, setShowHint] = useState(true);

const handleSend = (e) => {
e.preventDefault();

```
const trimmed = input.trim();

if (!trimmed) return;

const userMsg = {
  from: 'user',
  text: trimmed,
};

const botMsg = {
  from: 'bot',
  text: getBotReply(trimmed),
};

setMessages((prev) => [...prev, userMsg, botMsg]);

setInput('');
```

};

const attention = showHint && !open;

return ( <div className="chatbot-widget" aria-live="polite">
{open && ( <div className="chatbot-shell" data-aos="fade-up"> <div className="chatbot-header"> <div className="chatbot-header__title"> <span className="chatbot-avatar">AI</span>

```
          <div>
            <div className="chatbot-name">
              Shravan AI
            </div>

            <div className="chatbot-role">
              Projects • AI • Full-Stack • DevOps
            </div>
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
            <div className="chatbot-bubble">
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form
        className="chatbot-input-row"
        onSubmit={handleSend}
      >
        <input
          type="text"
          placeholder="Ask about projects, AI, skills or achievements..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">
          <i
            className="fas fa-paper-plane"
            aria-hidden="true"
          />
        </button>
      </form>
    </div>
  )}

  <button
    type="button"
    className={`chatbot-fab ${
      open ? 'chatbot-fab--open' : ''
    } ${
      attention ? 'chatbot-fab--attention' : ''
    }`}
    onClick={() => {
      setOpen((v) => !v);
      setShowHint(false);
    }}
    aria-label="Open AI assistant chat"
  >
    <span className="chatbot-fab__glow" />
    <i
      className="fas fa-robot"
      aria-hidden="true"
    />
  </button>

  {showHint && !open && (
    <div className="chatbot-fab-hint">
      <span>Talk to My Digital Twin</span>
    </div>
  )}
</div>
```

);
};

export default Chatbot;
