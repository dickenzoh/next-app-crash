import { Box, Typography } from "@mui/material";
import React from "react";

const Display = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Typography>#2</Typography>
      <Typography>Deersrsrs</Typography>
    </Box>
  );
};

export default Display;
