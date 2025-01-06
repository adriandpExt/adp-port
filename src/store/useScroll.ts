import { create } from "zustand";

interface ScrollToSection {
  scrollToSection: (id: string) => void;
}

const useScroll = create<ScrollToSection>(() => ({
  scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  },
}));

export default useScroll;
