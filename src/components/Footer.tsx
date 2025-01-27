import { ReactElement } from "react";

import { Heart } from "lucide-react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { useSocialMediaStore } from "@/store/useSocialMediaStore";

const MuiFooter = styled("footer")({
  padding: "3rem",
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  ":hover": {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.black,
  },
}));

const Footer = (): ReactElement => {
  const { toggleGithub, toggleLinkedin } = useSocialMediaStore();

  const date = new Date();

  return (
    <MuiFooter>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <StyledIconButton size="small" onClick={toggleGithub}>
          <GitHubIcon fontSize="medium" />
        </StyledIconButton>

        <StyledIconButton size="small" onClick={toggleLinkedin}>
          <LinkedInIcon fontSize="medium" />
        </StyledIconButton>
      </Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <Typography variant="body1">
          {date.getFullYear()} | Made with
        </Typography>

        <Heart color="#F97300" fill="#F97300" />
        <Typography variant="body1">by Adrian.</Typography>
      </Stack>
    </MuiFooter>
  );
};

export default Footer;
