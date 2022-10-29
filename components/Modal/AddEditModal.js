import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/system";
import { Input, TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddEditModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        startIcon={<AddCircleIcon />}
        sx={{ color: "white", borderColor: "white" }}
      >
        Add Task
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            textAlign: "left",
            marginTop: "12px",
            boxShadow:
              "rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px",
            animation: "0.1s ease-in-out 0s 1 normal none running expand",
          }}
        >
          <Input placeholder="What are you working on?" />
          <Box sx={{ color: "rgb(85, 85, 85)", fontWeight: "bold" }}>
            Est pomodoros
          </Box>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            variant="filled"
            size="small"
          />
          <Button variant="contained">
            <KeyboardArrowDownIcon />
          </Button>
          <Button variant="contained">
            <KeyboardArrowUpIcon />
          </Button>
          <TextField fullWidth label="some notes" id="fullWidth" />
        </Box>
        <DialogActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Button autoFocus onClick={handleClose}>
                Delete
              </Button>
            </Box>
            <Box>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
              <Button autoFocus onClick={handleClose}>
                Save
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
