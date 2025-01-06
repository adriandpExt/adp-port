import { LabelValue } from "@/types";

import { X } from "lucide-react";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useScroll from "@/store/useScroll";

interface IDrawer {
  item: LabelValue[];
  open: boolean;
  onClose: () => void;
}

const StyledDrawer = styled(MuiDrawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "100%",
    height: "100%",
  },
});

export const Drawer = (props: IDrawer) => {
  const { item, open, onClose } = props;

  const { scrollToSection } = useScroll();

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
    >
      <Paper
        sx={{
          backgroundColor: "whitesmoke",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <X
          size={100}
          strokeWidth={3}
          onClick={onClose}
          color="black"
          style={{ padding: "1rem" }}
        />

        <Stack
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {item.map((nav) => (
            <Typography
              key={nav.label}
              variant="h2"
              fontWeight={700}
              onClick={() => handleToScroll(nav.value)}
            >
              {nav.label.toUpperCase()}
            </Typography>
          ))}
        </Stack>
      </Paper>
    </StyledDrawer>
  );
};

export default Drawer;
