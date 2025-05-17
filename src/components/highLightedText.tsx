import type { JSX } from "react";

interface HighlightedTextProps {
  text: string;
  symbol?: string; // по умолчанию *
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, symbol = "*" }) => {
  const regex = new RegExp(`\\${symbol}([^${symbol}]+)\\${symbol}`, "g");

  const parts: (string | JSX.Element)[] = [];

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const start = match.index;
    const end = regex.lastIndex;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    parts.push(
      <span key={start} style={{ fontWeight: "bold", color: "#d97706" }}>
        {match[1]}
      </span>
    );

    lastIndex = end;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
};

export default HighlightedText;
