import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownPreview() {
  const [markdownText, setMarkdownText] = useState("");

  const handleMarkdownChange = (event) => {
    setMarkdownText(event.target.value);
  };
  
  const aStyle = {
    fontSize: '50px',
    textAlign: 'center',
    bordeRadius: '5px',
    margin: '10px',

  };
  
  

  return (
    <div  style={aStyle}>
      <h1>Markdown Previewer</h1>
      <textarea value={markdownText} onChange={handleMarkdownChange} />
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPreview;