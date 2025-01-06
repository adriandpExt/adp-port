import { ReactElement } from "react";

import { styled } from "@mui/material/styles";

import Navigation from "@/components/common/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "./components/Footer";

const App = (): ReactElement => {
  const Layout = styled("main")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
  }));

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
