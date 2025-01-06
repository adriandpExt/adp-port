import { ReactElement } from "react";

import { IconButton, Stack, styled, Typography } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import bgImage from "@/assets/bg-light.png";

const StyledContainer = styled("section")({
  display: "initial",
});

const AboutSection = styled("div")({
  display: "flex",
  gap: "30px",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  padding: "0px 15%",
  height: "90vh",
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
});

const Hero = (): ReactElement => {
  const toggleGithub = () => {
    window.open("https://github.com/adriandpExt", "_blank");
  };

  const toggleLinkedin = () => {
    window.open("https://www.linkedin.com/in/adrian-d-p/", "_blank");
  };

  return (
    <StyledContainer>
      <AboutSection>
        <Stack>
          <Stack sx={{ flexDirection: "row" }}>
            <IconButton size="large" onClick={toggleGithub}>
              <GitHubIcon fontSize="large" />
            </IconButton>

            <IconButton size="large" onClick={toggleLinkedin}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Stack>

          <Typography variant="h2" fontWeight={700}>
            Adrian Del Prado
          </Typography>
          <Typography variant="h6">Full Stack Engineer</Typography>
        </Stack>
      </AboutSection>
    </StyledContainer>
  );
};

export default Hero;
