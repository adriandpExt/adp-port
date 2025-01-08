import { ReactElement, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { styled } from "@mui/material/styles";

import Navigation from "@/components/common/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import bgImage from "@/assets/bg-pattern.svg";

const Layout = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backgroundImage: `url(${bgImage})`,
}));

const App = (): ReactElement => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Layout>
      <Navigation />
      <Hero />
      <Expertise />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default App;
