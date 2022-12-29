import React from "react";
import { Button, Box } from "@mui/material";
import { getPagesRightRoute, getPagesRight } from "../constants/constant";
import SelectLanguage from "./SelectLanguage";

function RightNav({ isEnglish, setIsEnglish }) {
  const pagesRight = getPagesRight(isEnglish);
  const pagesRightRoute = getPagesRightRoute(isEnglish);
  return (
    <Box sx={{ display: "flex" }}>
      {pagesRight.map((page, index) => {
        return (
          <Button
            key={page}
            sx={{
              color: "black",
              textTransform: "none",
              visibility: page === "" ? "hidden" : "visible",
            }}
            href={`#${pagesRightRoute[index]}`}
          >
            {page}
          </Button>
        );
      })}
      <div className="select-lang">
        <SelectLanguage setIsEnglish={setIsEnglish} isEnglish={isEnglish} />
      </div>
    </Box>
  );
}

export default RightNav;
