import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({ trackingNumber, onChangeValue, onRequestSearch }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      value={trackingNumber}
      onChange={(event) => onChangeValue(event.target.value)}
      placeholder="Search with Tracking Number"
      variant="outlined"
      size="small"
      style={{ width: "60%" }}
    />
    <IconButton
      aria-label="search"
      onClick={(e) => {
        e.preventDefault();
        onRequestSearch();
      }}
    >
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);

export default SearchBar;
