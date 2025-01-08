import { create } from "zustand";

interface Navigation {
  isOpen: boolean;

  toggleDrawerOpen: () => void;
  toggleDrawerClose: () => void;
  scrollToSection: (id: string) => void;
}

const useNavigation = create<Navigation>((set) => ({
  isOpen: false,

  toggleDrawerOpen: () => set({ isOpen: true }),
  toggleDrawerClose: () => set({ isOpen: false }),
  scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  },
}));

export default useNavigation;
