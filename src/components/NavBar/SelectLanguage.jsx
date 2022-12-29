import React from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function SelectLanguage({ isEnglish, setIsEnglish }) {
  const handleChange = (event) => {
    setIsEnglish(event.target.value === "English" ? true : false);
  };
  return (
    <FormControl>
      <Select
        value={isEnglish ? "English" : "Vietnamese"}
        onChange={handleChange}
      >
        <MenuItem value={"English"}>EN</MenuItem>
        <MenuItem value={"Vietnamese"}>VI</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectLanguage;
