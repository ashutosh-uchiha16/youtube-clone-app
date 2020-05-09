import React from "react";
import { Paper, Typography } from "@material-ui/core";

const videoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading .....</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(videoSrc);

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          width="100%"
          height="80%"
          title="videoPlayer"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h5">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}{" "}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default videoDetails;
