import { DesktopNavLinksInterface } from "@/interfaces/navigation.interface";
import { NavRoutes } from "../data/NavRoutes";

export const DesktopNavLinks = ({
  activeSection,
  handleRefNavigation,
}: DesktopNavLinksInterface) => {
  return (
    <div className="hidden md:block overflow-hidden">
      <ul className="flex gap-10 text-lg">
        {NavRoutes.map((link, index) => (
          <li
            data-aos="fade-left"
            data-aos-delay={`${index * 50}`}
            data-aos-once="true"
            key={link.id}
          >
            <a
              href={`#${link.link}`}
              className={`transition hover:text-secondary cursor-none ${
                activeSection === link.link ? "font-medium text-secondary" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleRefNavigation(link.link);
              }}
            >
              {link.nav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
