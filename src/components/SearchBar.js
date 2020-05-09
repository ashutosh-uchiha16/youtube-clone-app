import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  changeHandler = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
  };
  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.submitHandler}>
          <TextField
            fullWidth
            label="Search..."
            onChange={this.changeHandler}
          />
        </form>
      </Paper>
    );
  }
}
export default SearchBar;
