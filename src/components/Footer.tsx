import { ReactElement } from "react";

import { Heart } from "lucide-react";

import { Stack, Typography } from "@mui/material";

const Footer = (): ReactElement => {
  return (
    <footer style={{ padding: "3rem" }}>
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
