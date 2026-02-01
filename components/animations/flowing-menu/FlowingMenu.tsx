import React from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  link: string;
  text: string;
  subHeader: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ text, subHeader }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = React.useState(true);
  const hoverTimeline = React.useRef<gsap.core.Timeline | null>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number,
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    if (hoverTimeline.current) {
      hoverTimeline.current.kill();
    }

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );

    setTextVisible(false); // Hide text

    hoverTimeline.current = gsap.timeline({ defaults: animationDefaults });
    hoverTimeline.current
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    if (hoverTimeline.current) {
      hoverTimeline.current.kill();
    }

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );

    hoverTimeline.current = gsap.timeline({
      defaults: animationDefaults,
      onStart: () => {
        setTextVisible(true); // Re-show text immediately when exit animation starts

        // Optional: Fade in for smoother text reappearance
        const h2 = itemRef.current?.querySelector("h2");
        if (h2) {
          gsap.fromTo(
            h2,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: "power2.out" },
          );
        }
      },
    });

    hoverTimeline.current
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(
        marqueeInnerRef.current,
        { y: edge === "top" ? "101%" : "-101%" },
        "<",
      );
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 2 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-background uppercase font-normal text-xl md:text-4xl w-full">
          {subHeader}
        </span>
      </React.Fragment>
    ));
  }, [subHeader]);

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
      ref={itemRef}
    >
      <h2
        className={`flex items-center justify-center h-full relative uppercase no-underline font-semibold text-primary text-[4vh] hover:text-background transition-opacity duration-300 ${
          textVisible ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </h2>

      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-secondary translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
