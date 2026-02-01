import { useState } from "react";

interface HoverPreviewProps {
  label: string;
  url: string;
  skill: string;
}

const HoverPreview: React.FC<HoverPreviewProps> = ({ label, url, skill }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* The clickable link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b-2 border-secondary cursor-none hover:text-primary"
      >
        {label}
      </a>

      {/* The iframe preview on hover, wrapped in a clickable link */}
      {show && (
        <a
          data-aos="zoom-in"
          data-aos-duration="150"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-none absolute z-50 bottom-full mb-2 left-0 w-[200px] h-auto shadow-lg rounded-md hidden md:block "
        >
          <img src={`/skills/${skill}.png`} alt="skills" />
        </a>
      )}
    </div>
  );
};

export default HoverPreview;
