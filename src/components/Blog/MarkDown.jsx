import React from "react";
import ReactMarkdown from "react-markdown";
import "tailwindcss/tailwind.css"; // Ensure your Tailwind CSS is imported

const MarkDown = ({ content }) => {
  return (
    <div className='prose'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkDown;
