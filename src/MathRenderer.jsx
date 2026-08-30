import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export function MathRenderer({ content }) {
  if (!content) return null;

  const processedContent = content
    .replace(/^[ \t]+/gm, '')
    .replace(/\\\[([\s\S]*?)\\\]/g, '$$\n$1\n$$')
    .replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');

  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {processedContent}
    </ReactMarkdown>
  );
}
