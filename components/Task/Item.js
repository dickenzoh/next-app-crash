import { Button, IconButton, Snackbar, Stack, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import EditModal from "../Modal/EditModal";

const Itm = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-between",
}));

const Item = () => {
  return (
    <Box
      sx={{
        width: "70%",
        mt: "15px",
      }}
    >
      <Stack spacing={2}>
        <Itm>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="delete" disabled color="primary">
              <CheckCircleOutlineOutlinedIcon />
            </IconButton>
            <Typography variant="body2">dsesdsesdses</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">2/1</Typography>
            <EditModal />
          </Box>
        </Itm>
      </Stack>
    </Box>
  );
};

export default Item;
