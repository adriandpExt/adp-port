import { LabelValue } from "@/types";

import { ReactElement, useState } from "react";

import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { navItems } from "@/utils";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu } from "lucide-react";
import Drawer from "./Drawer";
import useScroll from "@/store/useScroll";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  flexGrow: 1,
}));

export const Navigation = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const { scrollToSection } = useScroll();
  const theme = useTheme();
  const isMatches = useMediaQuery(theme.breakpoints.up("lg"));

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  const renderMenuButton = (data: LabelValue[]): ReactElement => {
    return (
      <Box>
        {data.map((item) => (
          <Button
            key={item.value}
            color="primary"
            onClick={() => scrollToSection(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    );
  };

  const toggleDrawerOpen = (): void => {
    setOpen(!open);
  };

  const toggleDrawerClose = (): void => {
    setOpen(!open);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <IconButton>
          <Typography color="primary">{`<ADRIAN />`}</Typography>
        </IconButton>
        {isMatches ? (
          renderMenuButton(navItems)
        ) : (
          <IconButton onClick={toggleDrawerOpen}>
            <Menu color="black" size={42} strikethroughThickness={3} />
          </IconButton>
        )}
      </Toolbar>

      <Drawer open={open} onClose={toggleDrawerClose} item={navItems} />
    </StyledAppBar>
  );
};

export default Navigation;
