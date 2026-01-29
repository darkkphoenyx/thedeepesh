"use client";
import { useNavigation } from "@/hooks/useNavigation";
import { NavigationInterface } from "@/interfaces/navigation";
import Heading from "../../shared/Heading";
import { NavRoutes } from "../data/NavRoutes";

const Navbar = ({ sectionRefs }: NavigationInterface) => {
  const {
    navRef,
    scrolled,
    width,
    lines,
    toggleMobileMenu,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    activeSection,
    handleRefNavigation,
  } = useNavigation({ sectionRefs });
  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main Navigation"
      className={`sticky top-0 z-20 transition-all duration-300 ease-in ${
        scrolled
          ? "backdrop-blur-xl shadow-sm bg-background/50"
          : "bg-background"
      }`}
    >
      <div className="mx-[10px]">
        <div
          className={`flex items-center justify-between w-full mx-auto py-4 md:px-4 pl-2 transition-all duration-300 ease-in-out`}
          style={{
            maxWidth: width,
          }}
        >
          {/* Logo */}
          <Logo navigation={handleRefNavigation} />

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <ul className="flex gap-10 text-lg">
              {NavRoutes.map((link, index) => (
                <li
                  data-aos="fade-down"
                  data-aos-delay={`${index * 50}`}
                  data-aos-once="true"
                  key={link.id}
                >
                  <a
                    href={`#${link.link}`}
                    className={`transition hover:text-secondary cursor-none ${
                      activeSection === link.link
                        ? "font-medium text-secondary"
                        : ""
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden" id="mobile-menu">
            {/* <button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile navigation menu"
            >
              {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button> */}
            <button
              className="flex flex-col gap-2"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile navigation menu"
            >
              {lines.map((cls, i) => (
                <div
                  key={i}
                  className={`h-[2px] bg-primary w-7 transition-all rounded-full duration-300 ${cls}`}
                />
              ))}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 w-full overflow-hidden">
          <ul className="flex flex-col gap-4">
            {NavRoutes.map((link, index) => (
              <li
                data-aos="fade-left"
                data-aos-delay={`${index * 50}`}
                data-aos-duration="400"
                key={link.id}
              >
                <a
                  href={`#${link.link}`}
                  className={`block w-full py-2 ${
                    activeSection === link.link
                      ? "font-medium text-secondary"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    handleRefNavigation(link.link);
                  }}
                >
                  {link.nav}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const Logo = ({ navigation }: { navigation: any }) => {
  const handleRefNavigation = navigation;

  return (
    <div>
      <a
        href="#knowMe"
        onClick={(e) => {
          e.preventDefault();
          handleRefNavigation("knowMe");
        }}
      >
        <Heading
          animation="fade-right"
          title="theDeepesh"
          className="text-2xl md:text-3xl font-bold cursor-none text-primary mb-0"
          once
        />
      </a>
    </div>
  );
};
