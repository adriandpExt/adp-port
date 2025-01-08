import { LabelValue } from "@/types";

import { X } from "lucide-react";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import useNavigation from "@/store/useNavigation";

import bgImage from "@/assets/bg-pattern.svg";
interface IDrawer {
  item: LabelValue[];
  open: boolean;
  onClose: () => void;
}

const StyledDrawer = styled(MuiDrawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "90%",
    height: "100%",
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backgroundImage: `url(${bgImage})`,
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const MenuButton = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  padding: "1rem",
  backgroundColor: "#0C0C0C",
  boxShadow: "8px 10px 1px 0px #F97300",
  transition: "background-color 0.3s ease, color 0.3s ease",
}));

const StyledCloseIcon = styled(X)(({ theme }) => ({
  color: theme.palette.warning.main,
  padding: "1rem",
  transition: "transform 0.3s ease",
  display: "inline-block",
  ":hover": {
    transform: "rotate(90deg)",
    color: theme.palette.common.black,
  },
}));

export const Drawer = (props: IDrawer) => {
  const { item, open, onClose } = props;

  const { scrollToSection } = useNavigation();

  const handleToScroll = (id: string): void => {
    scrollToSection(id);
    onClose();
  };

  return (
    <StyledDrawer
      open={open}
      onClose={onClose}
      elevation={16}
      variant="temporary"
      anchor="right"
      transitionDuration={1500}
    >
      <StyledPaper>
        <StyledCloseIcon size={100} strokeWidth={3} onClick={onClose} />

        <Stack
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          {item.map((nav, idx) => (
            <MenuButton
              key={nav.label}
              variant="h3"
              fontWeight={600}
              onClick={() => handleToScroll(nav.value)}
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
              data-aos-delay={idx * 500}
            >
              {nav.label.toUpperCase()}
            </MenuButton>
          ))}
        </Stack>
      </StyledPaper>
    </StyledDrawer>
  );
};

export default Drawer;
