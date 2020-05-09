import React, { Component } from "react";
// import styles from "./App.module.css";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";

require("dotenv").config();

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  submitHandler = async (searchTerm) => {
    const response = await youtube.get(`search`, {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_KEY, //API key of youtube Data Api
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <Grid container spacing={10} justify="center">
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.submitHandler} />
            </Grid>
            <Grid item xs={7}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={5}>
              <VideoList videos={videos} videoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
