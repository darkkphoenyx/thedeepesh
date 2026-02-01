import RotatingText from "@/components/animations/text-animations/rotating-text/RotatingText";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Links = [
  {
    id: 1,
    media: "Facebook",
    display: "Facebook - Deepesh Sunuwar",
    link: "https://www.facebook.com/deepesh.sunuwar.08",
    icon: <Facebook size={18} />,
  },
  {
    id: 2,
    media: "Instagram",
    display: "Instagram - sun_deepesh",
    link: "https://www.instagram.com/sun_deepesh/",
    icon: <Instagram size={18} />,
  },
  {
    id: 3,
    media: "Github",
    display: "Github - darkkphoenyx",
    link: "https://github.com/darkkphoenyx",
    icon: <Github size={18} />,
  },
  {
    id: 4,
    media: "LinkedIn",
    display: "LinkedIn - Deepesh Sunuwar",
    link: "https://www.linkedin.com/in/deepeshsunuwar/",
    icon: <Linkedin size={18} />,
  },
  {
    id: 5,
    media: "Gmail",
    display: "Gmail - Deepesh Sunuwar",
    link: "sun.08deepesh@gmail.com",
    icon: <Mail size={18} />,
  },
];

const ConnectWithMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    const currentLink = Links[currentIndex].link;
    if (Links[currentIndex].media === "Gmail") {
      // Open default mail client
      window.open(`mailto:${currentLink}`, "_blank");
    } else {
      window.open(currentLink, "_blank");
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Links.length);
    }, 3000); // Match with RotatingText interval

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-once="true"
      className="px-4"
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-primary text-background px-4 py-2 rounded-4xl transition hover:scale-105 hover:bg-secondary cursor-none shadow-[0px_0px_70px_10px_rgba(248,109,63,0.4)]"
      >
        {Links[currentIndex].icon}
        <RotatingText
          texts={Links.map((link) => link.display)}
          rotationInterval={3000}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          initial={{ y: "100%" }}
          staggerFrom="last"
          staggerDuration={0.025}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          mainClassName="overflow-hidden text-sm"
          splitLevelClassName="overflow-hidden"
        />
      </button>
    </div>
  );
};

export default ConnectWithMe;
