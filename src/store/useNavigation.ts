import { create } from "zustand";

interface Navigation {
  isOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
  toggleDrawerOpen: () => void;
  toggleDrawerClose: () => void;
  scrollToSection: (id: string) => void;
}

const useNavigation = create<Navigation>((set) => ({
  activeSection: "home",
  isOpen: false,

  setActiveSection: (section) => set({ activeSection: section }),
  toggleDrawerOpen: () => set({ isOpen: true }),
  toggleDrawerClose: () => set({ isOpen: false }),
  scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      set({ activeSection: id });
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  },
}));

export default useNavigation;
