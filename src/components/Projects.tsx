import { RenderGridCardProps } from "@/types";

import { memo, ReactElement, useRef } from "react";

import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import { projectData } from "@/utils";

import { Container } from "./common";
import { styled, useTheme } from "@mui/material/styles";
import { Card, useMediaQuery } from "@mui/material";

const StyledImage = styled("img")({
  backgroundRepeat: "no-repeat",
  objectFit: "contain",
  "&:hover": {
    transition: "transform 0.5s ease, opacity 0.3s ease",
    transform: "scale(1.3)",
  },
});

const getRandomColor = () => {
  const colors = [
    "#C6E7FF",
    "#F6EFBD",
    "#EDDFE0",
    "#E5D9F2",
    "#B0EBB4",
    "#DFCCFB",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const RenderGridCard = memo((props: RenderGridCardProps): ReactElement => {
  const { src, title } = props;

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));

  const randomColor = useRef(getRandomColor());

  return (
    <Grid2 size={6} data-aos="zoom-in-up">
      <Card
        elevation={10}
        sx={{
          backgroundColor: randomColor.current,
          borderRadius: "0.5rem",
          height: "400px",
          padding: isMedium ? "3rem" : null,
          overflow: "hidden",
        }}
      >
        <StyledImage loading="lazy" src={src} width={"100%"} height={"100%"} />
      </Card>

      <Typography variant="h5" marginTop={2} fontWeight={600}>
        {title}
      </Typography>
    </Grid2>
  );
});

const Projects = (): ReactElement => {
  return (
    <Container id="project" title="Projects">
      <Grid2 container spacing={5} flexWrap={"wrap"} columns={{ md: 12 }}>
        {projectData.map((data, ids) => (
          <RenderGridCard key={ids} src={data.src} title={data.title} />
        ))}
      </Grid2>
    </Container>
  );
};

export default Projects;
