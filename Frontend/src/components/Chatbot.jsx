import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect } from "react";
import { spiral } from "ldrs";

function App() {
  function parseMarkdown(text) {
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    text = text.replace(/^\# (.*)/gm, "<h1>$1</h1>");
    text = text.replace(/^\#\# (.*)/gm, "<h2>$1</h2>");

    text = text.replace(/\n\s+/g, " ");
    text = text.replace(/<p>(.*?)<\/p>/g, function (match, content) {
      return "<p>" + content.replace(/\n/g, "<br/>") + "</p>";
    });

    text = text.replace(/^\*\s+(.*)/gm, "<ul><li>$1</li></ul>");
    text = text.replace(/^\*\s+(.*)$/gm, "<ul><li>$1</li></ul>"); 

    return text;
  }

  spiral.register();
  const [generatedContent, setGeneratedContent] = useState([
    "Im ready to assist you, provide me with details",
  ]);
  const [prompt, setPrompt] = useState("this a bot for gym and health queries,only respond to those queries, begin with hello how can i help you");
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDLfAsYpBy-G4ojAMQQvHsDB0fXh9nhc5k"
  );

  async function run() {
    setLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(response);
    const contentArray = Array.isArray(text) ? text : [text];
    setLoading(false);
    setGeneratedContent(contentArray);
  }

  useEffect(() => {
    run();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-top gap-6 h-screen ">
      <div className="flex gap-2 pt-5">
        <input
          type="text"
          placeholder="Enter Prompt"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={run} className="btn btn-primary">
          Generate
        </button>
      </div>
      <div>
        <div className="p-2">
          <p className="p-10 bg-gray-800 w-auto rounded-lg ">
            {!loading && <h2>Heres your answer:</h2>}
            {loading === true ? (
              <l-spiral size="50" speed="0.9" color="#727bfa"></l-spiral>
            ) : (
              generatedContent.map((line, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: parseMarkdown(line) }}></div>
                ))
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
