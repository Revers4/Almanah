import type { JSX } from "react";
import { Link } from "react-router-dom";

interface HighlightedTextProps {
  text: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => {
  const regex = /(\*([^*]+)\*)|_([^_]+)_=>([^<]+)<=/g;

  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const start = match.index;
    const end = regex.lastIndex;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    // *жирный*
    if (match[1]) {
      parts.push(
        <span key={start} className="font-bold">
          {match[2]}
        </span>
      );
    }

    // _текст_=>ссылка<=
    if (match[3]) {
      const underlineText = match[3];
      const link = match[4];
      parts.push(
        <Link to={link} key={start} className="underline hover:underline">
          {underlineText}
        </Link>
      );
    }

    lastIndex = end;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <p>{parts}</p>;
};

export default HighlightedText;
