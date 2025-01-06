import { RenderGridCardProps } from "@/types";

import { memo, ReactElement, useRef, useState } from "react";

import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { projectData } from "@/utils";

import { Container } from "./common";

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
  const [isHovered, setIsHovered] = useState(false);

  const randomColor = useRef(getRandomColor());

  return (
    <Grid2 size={6} data-aos="zoom-in-up">
      <Box
        sx={{
          backgroundColor: randomColor.current,
          borderRadius: "4px",
          height: "400px",
          padding: "3rem",
          overflow: "hidden",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          loading="lazy"
          src={src}
          width={"100%"}
          height={"100%"}
          style={{
            backgroundRepeat: "no-repeat",
            objectFit: "contain",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: isHovered ? "scale(1.3)" : "scale(1)",
          }}
        />
      </Box>

      <Typography variant="h5" marginTop={2}>
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
