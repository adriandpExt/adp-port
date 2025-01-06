import { ExpertiseData } from "@/types";

import { ReactElement } from "react";

import { Chip, Grid2, Stack, Typography } from "@mui/material";

import { expertiseData } from "@/utils";

import { Container } from "./common";

const Expertise = (): ReactElement => {
  const renderGridComponent = (data: ExpertiseData[]): ReactElement[] => {
    return data.map((item) => (
      <Grid2 key={item.title} size={6}>
        <Stack gap={2} paddingY={1}>
          <Typography variant="h5" fontWeight={500}>
            {item.title}
          </Typography>
          <Typography>{item.description}</Typography>
          <Stack
            display={"flex"}
            flexDirection="row"
            flexWrap={"wrap"}
            alignItems={"center"}
            gap={1}
          >
            <Typography>Teck Stack:</Typography>
            {item.techStacks.map((tech, ids) => (
              <Chip
                key={ids}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  boxShadow: 3,
                  backgroundColor: "#FFFFFF",
                  borderColor: "#FFFFFF",
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Grid2>
    ));
  };

  return (
    <Container id="expertise" title="Expertise">
      <Grid2
        container
        spacing={2}
        flexWrap={"wrap"}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderGridComponent(expertiseData)}
      </Grid2>
    </Container>
  );
};

export default Expertise;
