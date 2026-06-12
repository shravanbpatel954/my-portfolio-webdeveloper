import { useState, useRef, useEffect } from "react";

const SHRAVAN_CONTEXT = `You are "Shravan AI" — the personal AI assistant and digital twin of Shravankumar Bhavrlal Patel, embedded on his portfolio website at shravankumar.co.in. You speak in first person AS Shravan's representative. Be enthusiastic, warm, and concise. Use emojis naturally. Never say you don't know — use what you know from his profile.

== SHRAVAN'S COMPLETE PROFILE ==

PERSONAL:
- Name: Shravankumar Bhavrlal Patel
- Location: Mumbai / Navi Mumbai, India
- Phone: +91 8104479942
- Email: shravan.b.patel954@gmail.com
- LinkedIn: linkedin.com/in/shravan-kumar-patel
- GitHub: github.com/shravanbpatel954
- Portfolio: shravankumar.co.in
- Open to: Full-Time & Internship roles

EDUCATION:
- MCA (Sep 2025 – Present) — Bharati Vidyapeeth Institute of Management & IT (BVIMIT), Navi Mumbai
- B.Sc. Computer Science (2022–2025) — N.E.S. Ratnam College, Mumbai
- Higher Secondary PCMB (2021–2022) — Raminiranjan Jhunjhunwala College, Mumbai

PROFESSIONAL SUMMARY:
Full-Stack Developer with hands-on experience building scalable web and mobile applications using React.js, React Native, Node.js, and MongoDB. Strong expertise in AI integration, NLP pipelines, vector databases (FAISS, MiniLM, ONNX), and cloud deployment. Proven ability to build end-to-end production-ready products.

TECHNICAL SKILLS:
- Languages: JavaScript, Python, Java
- Frontend: React.js, React Native, HTML5, CSS3, TypeScript
- Backend: Node.js, Express.js, REST APIs
- Databases: MongoDB, PostgreSQL, MySQL, Firebase Firestore
- AI/ML: MiniLM, FAISS, ONNX, NLP, Gemini API, OpenAI, Isolation Forest
- DevOps: Docker, Git, GitHub, CI/CD, Render, Railway, Vercel
- Version Control: Git & GitHub

PROJECTS:
1. Multilingual Duplicate Detection System (Hackathon Winner 🏆)
   - 2nd Prize among 60+ teams, Innov8 Hackathon – Pixels 2026, SIES College
   - Tech: Python, MiniLM, FAISS, ONNX, Streamlit
   - Used MiniLM + FAISS for cross-lingual semantic similarity search
   - ONNX optimization for high-speed CPU performance
   - Shravan's role: Backend & ML Pipeline Lead

2. RealtorBazar – Real Estate Listing Platform (Live Client Project)
   - Live: https://realtorbazar.com | March–April 2026
   - Tech: React.js, Node.js, MongoDB, Admin Dashboard
   - Built for a property broker client; includes admin dashboard, property management, REST APIs

3. Inventory Management System (Mumbai University Project)
   - Dec 2025 – April 2026 | Tech: React.js, Node.js, MySQL
   - Full-stack system for Mumbai University exam department
   - Modules: purchase entries, challans, billing, stock issue, ledger reporting, role-based admin

4. MindGuard – On-Device Mental Health Detection App
   - Feb–Mar 2026 | Tech: React Native, Firebase, Isolation Forest, Node.js
   - AI-powered Android app for behavioral deviation detection
   - Privacy-first: screen time, app usage, mobility, night-time activity monitoring
   - Isolation Forest risk scoring, CalmBot intervention, guardian alerts

5. StudyBuddy – AI-Powered Adaptive Learning Platform
   - Live: https://studybuddy-kc2m.onrender.com | Oct–Nov 2025
   - Tech: React.js, Node.js, MongoDB, Google Gemini API
   - Personalized study recommendations, adaptive quizzes, Gemini API integration

6. Prepa – AI Interview Preparation Platform
   - AI-powered interview prep with tailored questions and AI-generated feedback

7. AIO – AI Advisor Application
   - Personalized recommendations across multiple domains via conversational interface

8. Lakshwear – Fashion Platform
9. Online Game Lab
10. Creative Recycle Solution

HACKATHON ACHIEVEMENT:
- 🥈 2nd Prize at Innov8 Hackathon – Pixels 2026 (60+ teams) for AI multilingual duplicate detection system

CERTIFICATIONS:
- NPTEL Cloud Computing — Top 5% nationwide, Elite Silver, 86% — IIT Kharagpur (May 2026)
- NPTEL Object Oriented Programming in Java — Elite Silver, 77% — IIT Roorkee (May 2026)
- Full-Stack Web Development — DevTown (Jan 2025)
- Web Development Training — Internshala & Skill India/NSDC (Jul 2025)
- Essentials Automation Certification — Automation Anywhere (May 2026)

SEMINARS:
- Cybersecurity: Ethical Hacking, Network Security, Data Privacy
- AI & ML: Neural Networks, NLP, Predictive Analytics

== BEHAVIOR RULES ==
- Keep replies concise (3-6 sentences max unless asked for detail)
- Use bullet points for lists of 3+ items
- Use emojis naturally (not excessively)
- If asked about hiring/opportunities, always share contact details enthusiastically
- Never make up projects or skills not listed above
- Be proud, confident, and friendly — you represent Shravan!`;

const QUICK_PROMPTS = [
  { label: "🏆 Hackathon win", text: "Tell me about your hackathon achievement" },
  { label: "🚀 Projects", text: "What are your main projects?" },
  { label: "💻 Tech stack", text: "What technologies do you work with?" },
  { label: "📜 Certifications", text: "Show me your certifications" },
  { label: "📞 Contact", text: "How can I contact Shravan?" },
  { label: "🤖 AI/ML work", text: "Tell me about your AI and ML experience" },
];

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "4px 2px" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.7)",
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            display: "inline-block",
          }}
        />
      ))}
    </div>
  );
}

function Message({ msg }) {
  const isBot = msg.from === "bot";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        marginBottom: 12,
        alignItems: "flex-end",
        gap: 8,
      }}
    >
      {isBot && (
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: 13,
            color: "#fff",
            fontWeight: 700,
          }}
        >
          AI
        </div>
      )}
      <div
        style={{
          maxWidth: "78%",
          padding: "10px 14px",
          borderRadius: isBot ? "18px 18px 18px 4px" : "18px 18px 4px 18px",
          background: isBot
            ? "rgba(99,102,241,0.08)"
            : "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: isBot ? "inherit" : "#fff",
          fontSize: 14,
          lineHeight: 1.55,
          border: isBot ? "1px solid rgba(99,102,241,0.15)" : "none",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {msg.typing ? <TypingDots /> : msg.text}
      </div>
    </div>
  );
}

export default function ShravanChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `👋 Hi! I'm Shravan AI — his digital twin!\n\nAsk me anything about:\n🚀 Projects & live demos\n🏆 Hackathon achievements\n💻 Tech stack & skills\n🤖 AI/ML experience\n📜 Certifications\n📞 How to hire Shravan\n\nWhat would you like to know?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [hintDismissed, setHintDismissed] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [messages, open]);

  useEffect(() => {
    if (!hintDismissed) {
      const timer = setTimeout(() => setShowHint(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [hintDismissed]);

  const sendMessage = async (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed || loading) return;
    setInput("");

    const userMsg = { from: "user", text: trimmed };
    const typingMsg = { from: "bot", typing: true };
    setMessages((prev) => [...prev, userMsg, typingMsg]);
    setLoading(true);

    const history = messages
      .filter((m) => !m.typing)
      .map((m) => ({
        role: m.from === "user" ? "user" : "assistant",
        content: m.text,
      }));

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SHRAVAN_CONTEXT,
          messages: [...history, { role: "user", content: trimmed }],
        }),
      });
      const data = await response.json();
      const reply =
        data?.content?.map((b) => b.text || "").join("") ||
        "Sorry, something went wrong. Please try again!";
      setMessages((prev) => [
        ...prev.filter((m) => !m.typing),
        { from: "bot", text: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev.filter((m) => !m.typing),
        { from: "bot", text: "Oops! Connection issue. Please try again 🔄" },
      ]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(99,102,241,0); }
        }
        @keyframes hintSlide {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .shravan-send-btn:hover { background: rgba(99,102,241,0.15) !important; }
        .shravan-quick:hover { background: rgba(99,102,241,0.12) !important; border-color: rgba(99,102,241,0.4) !important; }
        .shravan-input:focus { outline: none; border-color: rgba(99,102,241,0.5) !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.1) !important; }
        .shravan-fab:hover { transform: scale(1.08); }
        .shravan-messages::-webkit-scrollbar { width: 4px; }
        .shravan-messages::-webkit-scrollbar-track { background: transparent; }
        .shravan-messages::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.25); border-radius: 4px; }
      `}</style>

      {/* Chatbot panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 360,
            height: 520,
            background: "var(--color-background-primary, #fff)",
            borderRadius: 20,
            border: "1px solid rgba(99,102,241,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 20px rgba(99,102,241,0.12)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "fadeSlideUp 0.28s ease-out",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                border: "2px solid rgba(255,255,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              AI
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: 15, lineHeight: 1.2 }}>
                Shravan AI
              </div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>
                Shravan's digital twin • Always online
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} />
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "none",
                  borderRadius: 8,
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 18,
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                }}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            className="shravan-messages"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 14px 8px",
            }}
          >
            {messages.map((msg, i) => (
              <Message key={i} msg={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompts */}
          {messages.length <= 2 && (
            <div
              style={{
                padding: "4px 14px 8px",
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q.label}
                  className="shravan-quick"
                  onClick={() => sendMessage(q.text)}
                  disabled={loading}
                  style={{
                    padding: "5px 10px",
                    borderRadius: 20,
                    border: "1px solid rgba(99,102,241,0.25)",
                    background: "rgba(99,102,241,0.06)",
                    color: "var(--color-text-secondary, #666)",
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              padding: "10px 14px 14px",
              borderTop: "1px solid rgba(99,102,241,0.1)",
              display: "flex",
              gap: 8,
              alignItems: "flex-end",
            }}
          >
            <textarea
              ref={inputRef}
              className="shravan-input"
              rows={1}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 90) + "px";
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask about projects, skills, achievements..."
              disabled={loading}
              style={{
                flex: 1,
                resize: "none",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: 12,
                padding: "9px 12px",
                fontSize: 14,
                fontFamily: "inherit",
                background: "var(--color-background-secondary, #f8f8f8)",
                color: "inherit",
                lineHeight: 1.5,
                transition: "border 0.2s, box-shadow 0.2s",
                overflow: "hidden",
              }}
            />
            <button
              className="shravan-send-btn"
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                border: "1px solid rgba(99,102,241,0.3)",
                background: input.trim() && !loading
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "transparent",
                color: input.trim() && !loading ? "#fff" : "rgba(99,102,241,0.4)",
                cursor: input.trim() && !loading ? "pointer" : "default",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Hint bubble */}
      {showHint && !open && (
        <div
          style={{
            position: "fixed",
            bottom: 94,
            right: 84,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff",
            padding: "8px 14px",
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 500,
            boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
            animation: "hintSlide 0.3s ease-out",
            zIndex: 9998,
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
          onClick={() => {
            setOpen(true);
            setShowHint(false);
            setHintDismissed(true);
          }}
        >
          💬 Talk to my digital twin!
          <span
            style={{
              position: "absolute",
              right: -6,
              bottom: 10,
              width: 12,
              height: 12,
              background: "#8b5cf6",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      )}

      {/* FAB button */}
      <button
        className="shravan-fab"
        onClick={() => {
          setOpen((v) => !v);
          setShowHint(false);
          setHintDismissed(true);
        }}
        aria-label="Open AI assistant chat"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: open
            ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
            : "linear-gradient(135deg, #6366f1, #8b5cf6)",
          border: "none",
          cursor: "pointer",
          fontSize: 24,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(99,102,241,0.5)",
          zIndex: 10000,
          transition: "transform 0.2s, background 0.2s",
          animation: !open && !hintDismissed ? "pulse 2s ease-in-out infinite" : "none",
        }}
      >
        {open ? "×" : "🤖"}
      </button>
    </>
  );
}
