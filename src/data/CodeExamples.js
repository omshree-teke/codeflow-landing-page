// export const codeExamples = {
//   "App.jsx": `
//     import { useState } from "react";
//     import { CodeFlow } from "@codeflow/ai";

//     function App() {
//     const [code, setCode] = useState("");

//     const handleAICompletion = async () => {
//         const suggestion = await CodeFlow.complete(code);
//         setCode(suggestion);
//     };

//     return (
//         <div className="app">
//         <CodeEditor
//             onChange={setCode}
//             onAI={handleAICompletion}
//         />
//         </div>
//     );
//     }
//   `,

//    "Hero.jsx": `
//     import { useState } from "react";
//     import { CodeFlow } from "@codeflow/ai";

//     function Hero() {
//     const [code, setCode] = useState("");

//     const handleAICompletion = async () => {
//         const suggestion = await CodeFlow.complete(code);
//         setCode(suggestion);
//     };

//     return (
//         <div className="app">
//         <CodeEditor
//             onChange={setCode}
//             onAI={handleAICompletion}
//         />
//         </div>
//     );
//     }
//   `,

//    "Navbar.jsx": `
//     import { useState } from "react";
//     import { CodeFlow } from "@codeflow/ai";

//     function Navbar() {
//     const [code, setCode] = useState("");

//     const handleAICompletion = async () => {
//         const suggestion = await CodeFlow.complete(code);
//         setCode(suggestion);
//     };

//     return (
//         <div className="app">
//         <CodeEditor
//             onChange={setCode}
//             onAI={handleAICompletion}
//         />
//         </div>
//     );
//     }
//   `,
// };

export const codeExamples = {
  "App.jsx": `
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleReset = () => {
    setCount(0);
    setName("");
  };

  return (
    <div className="app">
      <h1>Hello, {name || "World"}!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
  `,

  "Hero.jsx": `
import { useState } from "react";

function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="hero">
      <h1>Welcome to CodeFlow</h1>
      <p>AI-powered code editor for developers</p>
      <p>Write better code, faster than ever before</p>
      {submitted ? (
        <p>Thanks for signing up, {email}!</p>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>
            Get Started
          </button>
        </div>
      )}
    </section>
  );
}
  `,

  "Navbar.jsx": `
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = ["Home", "Features", "Pricing", "Testimonials"];

  return (
    <nav className="navbar">
      <span className="logo">CodeFlow</span>
      <div className="nav-links">
        {links.map((link) => (
          
            key={link}
            href={"#" + link.toLowerCase()}
            onClick={() => setActive(link)}
            style={{
              fontWeight: active === link ? "bold" : "normal",
            }}
          >
            {link}
          </a>
        ))}
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </button>
    </nav>
  );
}
  `,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "💡",
    title: "Smart Completion",
    content: "AI-powered code suggestions in real-time",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    content: "Dynamic typing effects generated automatically",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    content: "Intelligent code search across your project",
  },
};
