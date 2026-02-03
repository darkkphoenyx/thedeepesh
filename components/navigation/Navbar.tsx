"use client";

import { useNavigation } from "@/hooks/useNavigation";
import { NavigationInterface } from "@/interfaces/navigation.interface";
import { DesktopNavLinks } from "./DesktopNavigation";
import { Logo } from "./Logo";
import { MobileMenu, MobileNavLinks } from "./MobileNavigation";

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
      className={`transition-all duration-300 ease-in ${
        scrolled
          ? "backdrop-blur-2xl shadow-sm bg-background/50"
          : "bg-background"
      }`}
    >
      <div className="mx-2.5">
        <div
          className={`flex items-center justify-between w-full mx-auto py-4 pl-2 transition-all duration-300 ease-in-out`}
          style={{
            maxWidth: width,
          }}
        >
          {/* Logo */}
          <Logo navigation={handleRefNavigation} />

          {/* Desktop Nav Links */}
          <DesktopNavLinks
            activeSection={activeSection}
            handleRefNavigation={handleRefNavigation}
          />

          {/* Mobile Menu Toggle */}
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            lines={lines}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileNavLinks
          isMobileMenuOpen={isMobileMenuOpen}
          activeSection={activeSection}
          handleRefNavigation={handleRefNavigation}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
