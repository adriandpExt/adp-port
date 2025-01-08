import { ExpertiseData } from "@/types";

import { ReactElement } from "react";

import Grid2 from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

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
                  ":hover": {
                    transform: "scale(1.1)",
                  },
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
        data-aos="fade-up"
      >
        {renderGridComponent(expertiseData)}
      </Grid2>
    </Container>
  );
};

export default Expertise;
