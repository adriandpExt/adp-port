import { ReactElement } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useSocialMediaStore } from "@/store/useSocialMediaStore";
import bgImage from "@/assets/bg-light.png";

const StyledContainer = styled("section")({
  display: "initial",
});

const AboutSection = styled("div")({
  display: "flex",
  gap: "30px",
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

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  ":hover": {
    backgroundColor: theme.palette.common.black,
  },
}));

const Hero = (): ReactElement => {
  const { toggleGithub, toggleLinkedin } = useSocialMediaStore();

  return (
    <StyledContainer id="home">
      <AboutSection>
        <Stack>
          <Stack sx={{ flexDirection: "row" }}>
            <StyledIconButton size="medium" onClick={toggleGithub}>
              <GitHubIcon fontSize="large" color="warning" />
            </StyledIconButton>

            <StyledIconButton size="medium" onClick={toggleLinkedin}>
              <LinkedInIcon fontSize="large" color="warning" />
            </StyledIconButton>
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
