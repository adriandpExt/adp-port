import { ReactElement } from "react";

import { Heart } from "lucide-react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { useSocialMediaStore } from "@/store/useSocialMediaStore";

const Footer = (): ReactElement => {
  const { toggleGithub, toggleLinkedin } = useSocialMediaStore();

  return (
    <footer style={{ padding: "3rem" }}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <IconButton size="small" onClick={toggleGithub}>
          <GitHubIcon fontSize="small" />
        </IconButton>

        <IconButton size="small" onClick={toggleLinkedin}>
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <Typography variant="body1">Made with</Typography>

        <Heart color="#E72929" />
        <Typography variant="body1">by Adrian.</Typography>
      </Stack>
    </footer>
  );
};

export default Footer;
