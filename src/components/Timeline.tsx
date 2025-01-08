import { TimelineData } from "@/types";

import { ReactElement } from "react";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

import { timelineData } from "@/utils";

import { Container } from "./common";

const StyledTimeline = styled(MuiTimeline)({
  [`& .${timelineItemClasses.root}:before`]: {
    flex: 0,
    padding: 0,
  },
});

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)({
  m: "auto 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  variant: "body2",
  color: "text.secondary",
});

const StyledTimelineDot = styled(TimelineDot)({
  backgroundColor: "#F97300",
  padding: "1rem",
});

const StyledTimelineConnector = styled(TimelineConnector)({
  height: "auto",
  minHeight: "50px",
  borderLeft: "5px solid #F97300",
});

const StyledTimelineContent = styled(TimelineContent)({
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: 5,
  padding: "1rem",
  marginLeft: "50px",
  marginTop: "10px",
});

const Timeline = (): ReactElement => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const renderDescription = (description: string): ReactElement => {
    const lines = description.split("\n").map((line) => line.trim());

    const hasBullets = lines.some((line) => line.startsWith("*"));

    if (hasBullets) {
      return (
        <Box component="ul" sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {lines.map((line, idx) => (
            <Typography variant="body2" component="li" key={idx}>
              {line.startsWith("*") ? line.replace("*", "").trim() : line}
            </Typography>
          ))}
        </Box>
      );
    }

    return <Typography variant="body2">{description}</Typography>;
  };

  const renderTimelineItems = (data: TimelineData[]): ReactElement[] => {
    return data.map((item, ids) => (
      <TimelineItem key={ids}>
        <StyledTimelineOppositeContent
          align="center"
          fontWeight={500}
          data-aos="fade-right"
          data-aos-delay={ids * 500}
        >
          {item.duration}
        </StyledTimelineOppositeContent>

        <TimelineSeparator>
          <StyledTimelineConnector data-aos="zoom-in" />
          <StyledTimelineDot data-aos="zoom-in">
            <FontAwesomeIcon icon={faBriefcase} size="3x" />
          </StyledTimelineDot>
          <StyledTimelineConnector data-aos="zoom-in" />
        </TimelineSeparator>

        <StyledTimelineContent data-aos="fade-left" data-aos-delay={ids * 500}>
          <Card
            elevation={10}
            sx={{
              padding: 4,
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6" component="span">
              {item.jobTitle}
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              {item.company}
            </Typography>
            {renderDescription(item.description)}
          </Card>
        </StyledTimelineContent>
      </TimelineItem>
    ));
  };

  const renderTimelineMobile = (data: TimelineData[]): ReactElement[] => {
    return data.map((item, ids) => (
      <TimelineItem key={ids} position="right">
        <TimelineSeparator>
          <StyledTimelineConnector data-aos="zoom-in" />
          <StyledTimelineDot data-aos="zoom-in">
            <FontAwesomeIcon icon={faBriefcase} size={isMobile ? "1x" : "3x"} />
          </StyledTimelineDot>
          <StyledTimelineConnector data-aos="zoom-in" />
        </TimelineSeparator>

        <StyledTimelineContent data-aos="fade-up" data-aos-delay={ids * 500}>
          <Typography variant="h6" component="span">
            {item.jobTitle}
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            {item.company}
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            {item.duration}
          </Typography>
          {renderDescription(item.description)}
        </StyledTimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <Container id="career" title="Career History">
      <StyledTimeline>
        {isMobile
          ? renderTimelineMobile(timelineData)
          : renderTimelineItems(timelineData)}
      </StyledTimeline>
    </Container>
  );
};

export default Timeline;
