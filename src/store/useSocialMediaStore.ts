import { create } from "zustand";

interface SocialMediaStore {
  toggleGithub: () => void;
  toggleLinkedin: () => void;
}

export const useSocialMediaStore = create<SocialMediaStore>(() => ({
  toggleGithub: () => {
    window.open("https://github.com/adriandpExt", "_blank");
  },
  toggleLinkedin: () => {
    window.open("https://www.linkedin.com/in/adrian-d-p/", "_blank");
  },
}));
