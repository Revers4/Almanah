import type { JSX } from "react";
import { Link } from "react-router-dom";

interface HighlightedTextProps {
  text: string;
  url?: string
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, url }) => {
  const regex = /(\*([^*]+)\*)|(_([^_]+)_)/g;

  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const start = match.index;
    const end = regex.lastIndex;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    if (match[1]) {
      parts.push(
        <span key={start} className="font-bold">
          {match[2]}
        </span>
      );
    } else if (match[3]) {
      if (url) {
        parts.push(
          <Link to={url} key={start} className="underline">
            {match[4]}
          </Link>
        );
      } else {
        parts.push(
          <span key={start} className="underline">
            {match[4]}
          </span>
        );
      }
    }

    lastIndex = end;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
};

export default HighlightedText;
