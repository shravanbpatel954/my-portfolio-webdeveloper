import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

// ─── Knowledge Base ───────────────────────────────────────────────────────────
const KB = [
  {
    tags: ['hello','hi','hey','greet','start','help','what can'],
    answer: `👋 Hey there! Great to meet you!\n\nI'm Shravan AI — Shravankumar's digital twin. I can tell you all about:\n\n🚀 Projects & live demos\n🏆 Hackathon achievements (2nd prize! 🥈)\n💻 Tech stack & skills\n🤖 AI & Machine Learning work\n📱 Mobile app development\n☁️ DevOps & cloud deployment\n🎓 Education & background\n📜 Certifications\n📞 How to hire / contact Shravan\n\nJust ask me anything! 😊`,
  },
  {
    tags: ['who','about','bio','profile','introduce','summary','shravan','background','tell me about'],
    answer: `👨‍💻 About Shravankumar Patel:\n\nI'm an MCA student at BVIMIT, Navi Mumbai and a passionate Full-Stack Developer. I build end-to-end products — from architecting backends to shipping AI-powered mobile apps.\n\n🔥 What makes me unique:\n• Won 2nd prize at Innov8 Hackathon among 60+ teams\n• Built & deployed 10+ projects (AI, web, mobile)\n• Strong in both classic MERN stack AND cutting-edge AI/ML\n• NPTEL Top 5% in Cloud Computing (IIT Kharagpur)\n\nI love turning real-world problems into elegant, working software! 💡`,
  },
  {
    tags: ['education','degree','college','university','mca','bsc','bvimit','ratnam','qualification','study'],
    answer: `🎓 Education:\n\n• MCA — Bharati Vidyapeeth Institute of Management & IT (BVIMIT), Navi Mumbai\n  📅 Sep 2025 – Present\n\n• B.Sc. Computer Science — N.E.S. Ratnam College, Mumbai\n  📅 2022 – 2025\n\n• Higher Secondary (PCMB) — Raminiranjan Jhunjhunwala College, Mumbai\n  📅 2021 – 2022\n\nCurrently pursuing MCA while actively building real-world projects! 🚀`,
  },
  {
    tags: ['skill','tech','stack','technology','language','framework','tool','use','know','expertise','proficient'],
    answer: `💻 Tech Stack:\n\n🔤 Languages: JavaScript, Python, Java\n\n🎨 Frontend: React.js, React Native, HTML5, CSS3, TypeScript\n\n⚙️ Backend: Node.js, Express.js, REST APIs\n\n🗄️ Databases: MongoDB, PostgreSQL, MySQL, Firebase Firestore\n\n🤖 AI/ML: MiniLM, FAISS, ONNX, NLP, Gemini API, OpenAI, Isolation Forest\n\n☁️ DevOps: Docker, Git, GitHub, CI/CD, Render, Railway, Vercel\n\nFull-stack from DB to deployment — and AI on top! 🔥`,
  },
  {
    tags: ['project','portfolio','build','made','create','work','app','platform','system','all project','list'],
    answer: `🚀 10 Projects Built:\n\n1. 🥈 Multilingual Duplicate Detection System (Hackathon Winner)\n2. 🏠 RealtorBazar — Live real-estate platform\n3. 📦 Mumbai University Inventory Management System\n4. 🧠 MindGuard — AI Mental Health Android App\n5. 📚 StudyBuddy — AI Adaptive Learning Platform\n6. 🎯 Prepa — AI Interview Preparation\n7. 🤖 AIO — AI Advisor Application\n8. 👗 Lakshwear — Fashion Platform\n9. 🎮 Online Game Lab\n10. ♻️ Creative Recycle Solution\n\nAsk me about any specific project for details! 😊`,
  },
  {
    tags: ['studybuddy','study buddy','learning','adaptive','quiz','gemini','education app'],
    answer: `📚 StudyBuddy — AI Adaptive Learning Platform\n\n🔗 Live: studybuddy-kc2m.onrender.com\n📅 Oct – Nov 2025\n\n🛠️ Tech: React.js, Node.js, MongoDB, Google Gemini API\n\n✨ Key Features:\n• Personalized study recommendations based on learner performance\n• AI-powered dynamic content generation via Gemini API\n• Adaptive quiz system that adjusts to your level\n• Full React frontend + Node/Express backend on Render\n\nA complete end-to-end AI learning product! 🎓`,
  },
  {
    tags: ['mindguard','mind guard','mental health','anomaly','isolation forest','android','behavioral'],
    answer: `🧠 MindGuard — AI Mental Health Android App\n\n📅 Feb – Mar 2026\n🛠️ Tech: React Native, Firebase, Isolation Forest, Node.js\n\n✨ What it does:\n• Detects behavioral deviation patterns using on-device AI\n• Monitors screen time, app usage, mobility & night-time activity\n• Uses Isolation Forest algorithm for privacy-first risk scoring\n• CalmBot AI intervention when stress patterns detected\n• Guardian alerts + live location sharing via Firebase\n\nBuilt for real mental wellness impact — privacy first! 💙`,
  },
  {
    tags: ['realtorbazar','realtor','real estate','property','listing','client','broker'],
    answer: `🏠 RealtorBazar — Live Real Estate Platform\n\n🔗 Live: realtorbazar.com\n📅 Mar – Apr 2026 (Client Project)\n🛠️ Tech: React.js, Node.js, MongoDB, Express.js\n\n✨ Key Features:\n• Built for a real property broker client (deployed & live!)\n• Admin dashboard to manage listings, pricing & images\n• Dynamic property listing pages with REST APIs\n• Complete backend property management system\n\nA real client, real users, real production deployment! 💼`,
  },
  {
    tags: ['inventory','mumbai university','stock','billing','challan','ledger','exam','department'],
    answer: `📦 Inventory Management System — Mumbai University\n\n📅 Dec 2025 – Apr 2026\n🛠️ Tech: React.js, Node.js, MySQL\n\n✨ Built for Mumbai University's Examination Department:\n• Purchase entries, challans, billing & stock issue modules\n• Ledger-based reporting workflows\n• Role-based admin functionalities\n• Audit logs, vendor/item management\n• Fully responsive dashboard UI\n\nLarge-scale institutional project with real operational impact! 🎓`,
  },
  {
    tags: ['prepa','interview','preparation','practice','question','feedback','interview prep'],
    answer: `🎯 Prepa — AI Interview Preparation Platform\n\n✨ Key Features:\n• AI-powered tailored interview questions\n• Real-time AI-generated feedback on your answers\n• Domain-specific question sets\n• Helps users practice and improve confidence\n\nBuilt to help people land their dream jobs! 💼`,
  },
  {
    tags: ['aio','advisor','recommendation','conversational','domain'],
    answer: `🤖 AIO — AI Advisor Application\n\n✨ Key Features:\n• Personalized recommendations across multiple domains\n• Intelligent conversational interface\n• Context-aware advice system\n\nAI-powered guidance, available anytime! 💡`,
  },
  {
    tags: ['duplicate','multilingual','detection','minilm','faiss','onnx','semantic','streamlit','nlp pipeline'],
    answer: `🌍 Multilingual Duplicate Detection System\n\n🏆 2nd Prize — Innov8 Hackathon, Pixels 2026 (60+ teams)\n📍 SIES College of Management Studies\n🛠️ Tech: Python, MiniLM, FAISS, ONNX, Streamlit\n\n✨ What it does:\n• Detects duplicate content across multiple languages\n• MiniLM embeddings for semantic understanding\n• FAISS vector search for lightning-fast similarity matching\n• ONNX optimization for high-speed CPU inference\n• Streamlit real-time detection & cleaning interface\n\n🎯 My Role: Backend & ML Pipeline Lead\n\nBeat 60+ teams to win 2nd prize! 🥈`,
  },
  {
    tags: ['hackathon','innov8','pixels','prize','award','win','competition','2nd','sies'],
    answer: `🏆 Hackathon Achievement:\n\n🥈 2nd Prize — Innov8 Hackathon (Pixels 2026)\n📍 SIES College of Management Studies, Mumbai\n👥 Beat 60+ competing teams!\n\n🛠️ Project: Multilingual Duplicate Detection System\n• Used MiniLM + FAISS for cross-lingual semantic search\n• ONNX-optimized for fast CPU inference\n• Built Streamlit real-time detection app\n\n🎯 My Role: Backend & ML Pipeline Lead\n\nOne of the proudest moments of my dev journey! 🚀`,
  },
  {
    tags: ['ai','machine learning','ml','nlp','vector','embedding','onnx','faiss','minilm','artificial intelligence'],
    answer: `🤖 AI & Machine Learning Experience:\n\n📌 Technologies I've worked with:\n• MiniLM — Sentence embeddings for semantic search\n• FAISS — Vector database for fast similarity matching\n• ONNX — Model optimization for fast CPU inference\n• Isolation Forest — Anomaly/behavioral deviation detection\n• Google Gemini API — LLM integration for content generation\n• OpenAI API — Conversational AI integration\n• NLP pipelines — Text processing & classification\n\n🏆 Used in production: Hackathon winner project + StudyBuddy + MindGuard\n\nAI isn't just a buzzword for me — I ship it! 🚀`,
  },
  {
    tags: ['mobile','react native','android','firebase','app'],
    answer: `📱 Mobile Development:\n\nI build Android applications using React Native with:\n• Firebase Firestore for real-time data\n• Firebase Auth for user management\n• On-device AI/ML model integration\n• Push notifications & background services\n\n🔥 Key project: MindGuard — AI mental health app that runs ML models directly on device (privacy-first!)\n\nFrom web to mobile — full stack, literally! 📲`,
  },
  {
    tags: ['devops','docker','cicd','ci/cd','cloud','deployment','render','railway','vercel','github actions'],
    answer: `☁️ DevOps & Cloud Skills:\n\n🐳 Docker — Containerized application deployment\n🔄 CI/CD — Automated build & deployment pipelines\n☁️ Cloud Platforms:\n  • Render (deployed StudyBuddy here!)\n  • Railway\n  • Vercel\n🔧 Git & GitHub — Version control & collaboration\n\n🚀 I don't just build apps — I deploy them properly!\n\nAll my major projects are live in production. 💪`,
  },
  {
    tags: ['certification','certificate','nptel','devtown','internshala','automation anywhere','course','nsdc','skill india'],
    answer: `📜 Certifications:\n\n🥇 NPTEL Cloud Computing\n   Top 5% nationally • Elite Silver • 86% • IIT Kharagpur (May 2026)\n\n🥇 NPTEL Object-Oriented Programming in Java\n   Elite Silver • 77% • IIT Roorkee (May 2026)\n\n✅ Full-Stack Web Development — DevTown (Jan 2025)\n\n✅ Web Development Training — Internshala & Skill India/NSDC (Jul 2025)\n\n✅ Essentials Automation Certification — Automation Anywhere (May 2026)\n\nTop 5% nationally in Cloud Computing — that's a flex! 🎖️`,
  },
  {
    tags: ['contact','email','phone','linkedin','github','hire','reach','connect','whatsapp','recruit','job','opportunity','available'],
    answer: `📞 Let's Connect!\n\nShravan is open to Full-Time & Internship roles! 🚀\n\n📧 Email: shravan.b.patel954@gmail.com\n📱 Phone: +91 8104479942\n💼 LinkedIn: linkedin.com/in/shravan-kumar-patel\n💻 GitHub: github.com/shravanbpatel954\n🌐 Portfolio: shravankumar.co.in\n\nDon't hesitate to reach out — Shravan responds fast! ⚡`,
  },
  {
    tags: ['frontend','react','reactjs','ui','interface','html','css','typescript','design'],
    answer: `🎨 Frontend Development:\n\n⚛️ React.js — Primary framework for web apps\n📱 React Native — Mobile app development\n🔷 TypeScript — Type-safe development\n🎨 HTML5 + CSS3 — Semantic markup & responsive design\n\n🔥 Built multiple production-ready UIs:\n• RealtorBazar property listings (live!)\n• StudyBuddy learning dashboard\n• Mumbai University admin dashboard\n• MindGuard mobile app screens\n\nClean, fast, responsive UI is a must for me! ✨`,
  },
  {
    tags: ['backend','node','nodejs','express','api','rest','server','endpoint'],
    answer: `⚙️ Backend Development:\n\n🟢 Node.js + Express.js — My primary backend stack\n🔗 REST APIs — Clean, documented API design\n🔐 Auth — JWT, Firebase Auth\n📡 Real-time — Firebase Firestore, WebSockets\n\n🔥 Backend systems I've shipped:\n• RealtorBazar property management APIs\n• StudyBuddy AI-powered learning endpoints\n• MindGuard behavioral monitoring backend\n• Mumbai University inventory system\n\nScalable, maintainable backends that actually work in production! 💪`,
  },
  {
    tags: ['database','mongodb','sql','mysql','postgresql','firebase','firestore','db','data'],
    answer: `🗄️ Database Experience:\n\n📦 MongoDB — NoSQL, flexible document storage (most projects)\n🐘 PostgreSQL — Relational, complex queries\n🗃️ MySQL — Mumbai University project (institutional)\n🔥 Firebase Firestore — Real-time, mobile apps (MindGuard)\n\nI pick the right DB for the job — not just the one I know best! 🎯`,
  },
  {
    tags: ['live','demo','deployed','production','url','link','website'],
    answer: `🌐 Live Deployed Projects:\n\n🔗 RealtorBazar: realtorbazar.com\n🔗 StudyBuddy: studybuddy-kc2m.onrender.com\n🔗 Portfolio: shravankumar.co.in\n\nThese are real, live, production apps — not just GitHub repos! 🚀\n\nAsk me about any specific project for more details.`,
  },
  {
    tags: ['seminar','cybersecurity','ethical hacking','network security','neural network','predictive'],
    answer: `🎤 Seminars Attended:\n\n🔐 Cybersecurity Seminar\n   Topics: Ethical Hacking, Network Security, Data Privacy\n\n🤖 AI & Machine Learning Seminar\n   Topics: Neural Networks, NLP, Predictive Analytics\n\nAlways learning beyond the classroom! 📚`,
  },
  {
    tags: ['python','java','javascript','js','programming','language','code','coding'],
    answer: `🔤 Programming Languages:\n\n🟡 JavaScript — Primary language (frontend + backend)\n🐍 Python — AI/ML projects, data pipelines\n☕ Java — NPTEL certified, OOP fundamentals\n\n💡 I choose JavaScript for speed of delivery and Python when AI/ML is involved. Java gives me solid CS fundamentals.\n\nVersatile across paradigms — OOP, functional, async! 🚀`,
  },
  {
    tags: ['strength','best','good at','expert','passionate','speciality','specialty','niche'],
    answer: `💪 What I'm Best At:\n\n1. 🤖 AI Integration — Embedding real ML models into production apps\n2. ⚛️ Full-Stack MERN — End-to-end web development\n3. 🚀 Fast Delivery — I build and ship, not just prototype\n4. 🧩 Problem Solving — Won hackathon among 60+ teams!\n5. 📱 Cross-Platform — Web + Android with shared logic\n\nI don't just learn tech — I use it to build real things that work! 💡`,
  },
  {
    tags: ['open','available','internship','fulltime','full time','job','role','position','work','employ','recruit'],
    answer: `✅ Yes! Shravan is actively looking for opportunities!\n\n🎯 Open to:\n• Full-Time Developer Roles\n• Internships (Tech startups preferred!)\n• Freelance / Contract projects\n\n🔥 What you get:\n• Full-stack MERN expertise\n• AI/ML integration skills\n• Real production deployment experience\n• Fast learner, team player, ships quality code\n\n📞 Contact now:\n📧 shravan.b.patel954@gmail.com\n📱 +91 8104479942\n💼 linkedin.com/in/shravan-kumar-patel\n\nDon't wait — reach out today! 🚀`,
  },
];

// ─── Smart Matcher ─────────────────────────────────────────────────────────────
function getBotReply(rawInput) {
  const input = rawInput.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const words = input.split(' ');

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of KB) {
    let score = 0;
    for (const tag of entry.tags) {
      if (input.includes(tag)) {
        score += tag.split(' ').length * 2; // multi-word tags score higher
      } else {
        for (const word of words) {
          if (word.length > 2 && tag.includes(word)) score += 1;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) return bestMatch.answer;

  return `🤔 I'm not sure about that specific topic, but I can tell you about:\n\n🚀 Projects (StudyBuddy, MindGuard, RealtorBazar...)\n🏆 Hackathon win (2nd prize, 60+ teams!)\n💻 Tech stack (MERN, AI/ML, DevOps)\n📜 Certifications (NPTEL Top 5%!)\n🎓 Education (MCA at BVIMIT)\n📞 Contact & hiring info\n\nTry asking something like:\n• "Tell me about StudyBuddy"\n• "What did you win at the hackathon?"\n• "What technologies do you use?"`;
}

// ─── Quick Prompts ─────────────────────────────────────────────────────────────
const QUICK_PROMPTS = [
  { label: '🏆 Hackathon win', text: 'Tell me about the hackathon win' },
  { label: '🚀 Projects', text: 'Show me all your projects' },
  { label: '💻 Tech stack', text: 'What is your tech stack?' },
  { label: '📜 Certifications', text: 'Show your certifications' },
  { label: '📞 Contact', text: 'How can I contact Shravan?' },
  { label: '🤖 AI work', text: 'Tell me about your AI and ML work' },
];

const initialMessages = [
  {
    from: 'bot',
    text: `👋 Hi! I'm Shravan AI — his digital twin!\n\nAsk me anything about:\n🚀 Projects & live demos\n🏆 Hackathon achievements\n💻 Tech stack & skills\n🤖 AI & Machine Learning\n📱 Mobile Development\n☁️ DevOps & Cloud\n🎓 Education\n📜 Certifications\n📞 Contact & hiring\n\nWhat would you like to know?`,
  },
];

function TypingDots() {
  return (
    <div className="chatbot-typing-dots">
      <span /><span /><span />
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────────
const Chatbot = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [showQuick, setShowQuick] = useState(true);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 80);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, open]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed || typing) return;
    setInput('');
    setShowQuick(false);

    const userMsg = { from: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    // Simulate natural typing delay (400–900ms)
    const delay = 400 + Math.min(trimmed.length * 12, 500);
    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setMessages((prev) => [...prev, { from: 'bot', text: reply }]);
      setTyping(false);
    }, delay);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const attention = showHint && !open;

  return (
    <div className="chatbot-widget" aria-live="polite">
      {open && (
        <div className="chatbot-shell">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header__title">
              <span className="chatbot-avatar">AI</span>
              <div>
                <div className="chatbot-name">Shravan AI</div>
                <div className="chatbot-role">Projects • AI • Full-Stack • DevOps</div>
              </div>
            </div>
            <div className="chatbot-header__right">
              <span className="chatbot-dot chatbot-dot--green" />
              <button
                type="button"
                className="chatbot-close"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message chatbot-message--${msg.from}`}>
                <div className="chatbot-bubble">{msg.text}</div>
              </div>
            ))}
            {typing && (
              <div className="chatbot-message chatbot-message--bot">
                <div className="chatbot-bubble"><TypingDots /></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompts */}
          {showQuick && (
            <div className="chatbot-quick-row">
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  className="chatbot-quick-btn"
                  onClick={() => sendMessage(q.text)}
                  disabled={typing}
                >
                  {q.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about projects, AI, skills or achievements..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={typing}
            />
            <button type="submit" disabled={typing || !input.trim()} aria-label="Send">
              <i className="fas fa-paper-plane" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      {/* FAB */}
      <button
        type="button"
        className={`chatbot-fab${open ? ' chatbot-fab--open' : ''}${attention ? ' chatbot-fab--attention' : ''}`}
        onClick={() => { setOpen((v) => !v); setShowHint(false); }}
        aria-label="Open AI assistant chat"
      >
        <span className="chatbot-fab__glow" />
        <i className={`fas ${open ? 'fa-times' : 'fa-robot'}`} aria-hidden="true" />
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
