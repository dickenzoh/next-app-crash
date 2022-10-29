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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Switch, TextField } from "@mui/material";
import { Box } from "@mui/system";

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

export default function SettingsModal() {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<SettingsOutlinedIcon />}
        sx={{ color: "white", borderColor: "white" }}
      >
        Setting
      </Button>
      <Box
        sx={{
          position: "relative",
          maxWidth: "780px",
          height: "auto",
          margin: "auto",
        }}
      >
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            <Box
              sx={{
                fontSize: "16px",
                color: "rgb(187, 187, 187)",
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              {" "}
              Timer Setting
            </Box>
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>Time (minutes)</Typography>
            <Box
              sx={{
                display: "flex",
                borderTop: "1px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="filled-number"
                label="pomodoro"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                InputProps={{
                  inputProps: {
                    min: 0,
                  },
                }}
              />
              <TextField
                id="filled-number"
                label="Short Break"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                InputProps={{
                  inputProps: {
                    min: 0,
                  },
                }}
              />
              <TextField
                id="filled-number"
                label="Long Break"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                InputProps={{
                  inputProps: {
                    min: 0,
                  },
                }}
              />
            </Box>
          </DialogContent>
          <DialogContent dividers>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Auto start Breaks?</Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </DialogContent>
          <DialogContent dividers>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Auto start Pomodoros?</Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </DialogContent>
          <DialogContent dividers>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Long Break interval</Typography>
              <TextField
                id="filled-number"
                label="Long Break"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                InputProps={{
                  inputProps: {
                    min: 1,
                  },
                }}
              />
            </Box>
          </DialogContent>
          <DialogContent dividers>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Alarm Sound</Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </DialogContent>
          <DialogContent dividers>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Tracking Sound</Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </DialogContent>
          <DialogContent dividers>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Hour Format</Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </DialogContent>
          <DialogContent dividers>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Dark Mode when running</Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </DialogContent>
          <DialogContent dividers>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Notification</Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Ok
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </div>
  );
}
