import React from "react";
import VideoItem from "./VideoItem";

import { Grid } from "@material-ui/core";

const videoList = ({ videos, videoSelect }) => {
  const listOfItems = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={videoSelect}
      />
    );
  });
  return (
    <Grid container spacing={10}>
      {listOfItems}
    </Grid>
  );
};
export default videoList;
