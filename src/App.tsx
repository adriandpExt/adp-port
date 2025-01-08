import {
  lazy,
  PropsWithChildren,
  ReactElement,
  Suspense,
  useEffect,
} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { styled } from "@mui/material/styles";

const Navigation = lazy(() => import("@/components/common/Navigation"));
const Hero = lazy(() => import("@/components/Hero"));
const Expertise = lazy(() => import("@/components/Expertise"));
const Timeline = lazy(() => import("@/components/Timeline"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

import bgImage from "@/assets/bg-pattern.svg";
import { Stack, Typography } from "@mui/material";

const Layout = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backgroundImage: `url(${bgImage})`,
}));

const LazyLoading = (props: PropsWithChildren): ReactElement => {
  const { children } = props;

  return (
    <Suspense
      fallback={
        <Stack justifyContent="center" alignItems="center" height="90vh">
          <Typography variant="h2" color="warning" fontWeight={700}>
            LOADING ...
          </Typography>
        </Stack>
      }
    >
      <Layout>{children}</Layout>
    </Suspense>
  );
};

const App = (): ReactElement => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <LazyLoading>
      <Navigation />
      <Hero />
      <Expertise />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </LazyLoading>
  );
};

export default App;
