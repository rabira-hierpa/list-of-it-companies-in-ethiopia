import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    fetch("readme.md")
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
    </div>
  );
}

export default App;
