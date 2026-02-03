import {
  MobileMenuInterface,
  MobileNavLinksInterface,
} from "@/interfaces/navigation.interface";
import { DialogTitle } from "@radix-ui/react-dialog";

import { NavRoutes } from "../data/NavRoutes";
import { Sheet, SheetContent } from "../ui/sheet";

export const MobileMenu = ({
  toggleMobileMenu,
  isMobileMenuOpen,
  lines,
}: MobileMenuInterface) => {
  return (
    <div className="md:hidden overflow-hidden" id="mobile-menu">
      <button
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-duration="100"
        className="flex flex-col gap-2"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle mobile navigation menu"
      >
        {lines.map((cls, i) => (
          <div
            key={i}
            className={`h-0.5 bg-primary w-7 transition-all rounded-full duration-300 ${cls}`}
          />
        ))}
      </button>
    </div>
  );
};

export const MobileNavLinks = ({
  activeSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleRefNavigation,
}: MobileNavLinksInterface) => {
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetContent className="mt-16 w-full">
        <div className="md:hidden px-4 pb-4 w-full overflow-hidden">
          <ul className="flex flex-col gap-4">
            {NavRoutes.map((link, index) => (
              <DialogTitle className="text-primary font-normal" key={link.id}>
                <li
                  data-aos="fade-left"
                  data-aos-delay={`${index * 50}`}
                  data-aos-duration="400"
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
              </DialogTitle>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
