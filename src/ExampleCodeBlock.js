import React from 'react';
import { CodeBlock, dracula } from "react-code-blocks";

export default function ExampleCodeBlock({ code, language, showLineNumbers }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}
