import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    fetch("/readme.md")
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

  return (
    <div className="App">
      <Markdown
        className={"flex flex-col space-x-1"}
        remarkPlugins={[gfm]}
        rehypePlugins={[remarkRehype, rehypeRaw]}
        children={markdown}
      />
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            className="logo tailwind"
            alt="TailwindCSS logo"
          />
        </a>
      </div>
      <h1 className="font-bold">Vite + React + TailwindCSS</h1>
      <div className="card">
        <button
          className="text-blue-400"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
