import { Box, Typography } from "@mui/material";
import React from "react";

const ErrorPage = () => {
  return (
    <Box
      sx={{ width: "100vw", height: "100vw" }}
      marginTop={"20%"}
      marginLeft={"20%"}
    >
      <Typography p={"3%"} variant="h3" color={"red"}>
        Sorry..! Page Not Found
      </Typography>
      <Typography variant="h4" color={"lightgreen"}>
        Please click YouTube logo to go to Home Page
      </Typography>
    </Box>
  );
};

export default ErrorPage;
