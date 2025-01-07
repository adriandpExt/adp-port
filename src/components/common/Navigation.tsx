import { LabelValue } from "@/types";

import { ReactElement } from "react";
import { Menu } from "lucide-react";

import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { navItems } from "@/utils";
import useScroll from "@/store/useScroll";
import useNavigation from "@/store/useNavigation";

import Drawer from "./Drawer";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  flexGrow: 1,
}));

const MenuButton = styled(Button)({
  backgroundColor: "#0C0C0C",
  color: "white",
  boxShadow: "4px 4px 1px 0px #F97300",
  transition: "background-color 0.3s ease, color 0.3s ease",
  ":hover": {
    color: "#F97300",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
});

export const Navigation = (): ReactElement => {
  const { scrollToSection } = useScroll();
  const { isOpen, toggleDrawerClose, toggleDrawerOpen } = useNavigation();
  const theme = useTheme();
  const isMatches = useMediaQuery(theme.breakpoints.up("lg"));

  const renderMenuButton = (data: LabelValue[]): ReactElement => {
    return (
      <Box display={"flex"} gap={1}>
        {data.map((item) => (
          <MenuButton
            key={item.value}
            variant="text"
            onClick={() => scrollToSection(item.value)}
          >
            {item.label}
          </MenuButton>
        ))}
      </Box>
    );
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <IconButton>
          <Typography
            color="warning"
            fontWeight={600}
          >{`<ADRIAN />`}</Typography>
        </IconButton>
        {isMatches ? (
          renderMenuButton(navItems)
        ) : (
          <IconButton onClick={toggleDrawerOpen}>
            <Menu color="black" size={42} strikethroughThickness={3} />
          </IconButton>
        )}
      </Toolbar>

      <Drawer open={isOpen} onClose={toggleDrawerClose} item={navItems} />
    </StyledAppBar>
  );
};

export default Navigation;
