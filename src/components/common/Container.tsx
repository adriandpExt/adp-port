import { PropsWithChildren, ReactElement } from "react";

import MuiContainer from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material";

interface ContainerProps extends PropsWithChildren {
  id: string;
  title: string;
  sx: SxProps<Theme>;
}

export const Container = (props: Partial<ContainerProps>): ReactElement => {
  const { id, title, children, sx } = props;

  return (
    <MuiContainer id={id} maxWidth="lg" sx={{ padding: "5rem 1rem", ...sx }}>
      <Typography variant="h2" fontWeight={500} paddingBottom={"2rem"}>
        {title}
      </Typography>
      {children}
    </MuiContainer>
  );
};

export default Container;
