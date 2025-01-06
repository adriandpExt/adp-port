import { PropsWithChildren, ReactElement } from "react";

import MuiContainer from "@mui/material/Container";
import Typography from "@mui/material/Typography";

interface ContainerProps extends PropsWithChildren {
  id: string;
  title: string;
}

export const Container = (props: ContainerProps): ReactElement => {
  const { id, title, children } = props;

  return (
    <MuiContainer id={id} maxWidth="lg" sx={{ padding: "5rem 1rem" }}>
      <Typography variant="h4" fontWeight={500} paddingBottom={"2rem"}>
        {title}
      </Typography>
      {children}
    </MuiContainer>
  );
};

export default Container;
