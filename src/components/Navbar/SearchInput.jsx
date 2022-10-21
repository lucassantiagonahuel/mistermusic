import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";

const SearchBar = () => (
    <form >
      <TextField
        id="search-bar"
        className="text"
        label="Buscar mas..."
        variant="outlined"
        placeholder="Buscar..."
        size="small"
        sx={{backgroundColor: '#ffebee'}}
        color="success"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "white" }} />
      </IconButton>
    </form>
  );

function SearchInput() {
  return (
 <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <SearchBar/>
    </div>
  );
}
export default SearchInput;
