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
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalFireDepartmentTwoToneIcon from "@mui/icons-material/LocalFireDepartmentTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Chart } from "react-google-charts";
import { Box, Divider, ListItem, ListItemText } from "@mui/material";
import { CSVLink } from "react-csv";
import CustomDatagrid from "./CustomDatagrid";
import Ranking from "./Ranking";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const details = () => {};

const Summmary = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const summary = [
    {
      icon: <AccessTimeIcon />,
      value: 5,
      text: "hours focused",
    },
    {
      icon: <CalendarMonthOutlinedIcon />,
      value: 2,
      text: "days accessed ",
    },
    {
      icon: <LocalFireDepartmentTwoToneIcon />,
      value: 1,
      text: "day streak",
    },
  ];
  summary.map((item) => console.log(item));

  const handleEdit = () => {
    console.log("edit");
  };

  const CustomChart = () => {
    const data = [
      ["Element", "Density", { role: "style" }],
      ["Copper", 8.94, "#b87333"], // RGB value
      ["Silver", 10.49, "silver"], // English color name
      ["Gold", 19.3, "gold"],
      ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
    ];

    return (
      <Box
        sx={{
          width: 526,
          height: 550,
        }}
      >
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
        />
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              zIndex: 1,
              backgroundColor: "white",
              fontWeight: "bold",
              color: "rgb(87, 87, 87)",
              fontSize: "18px",
            }}
          >
            <Typography>Activity Summary</Typography>
          </Box>
          <Box
            sx={{
              height: "1px",
              width: "90%",
              mt: "13px",
              paddingRight: "12px",
              backgroundColor: "rgb(240, 240, 240)",
              position: "absolute",
            }}
          >
            <Divider />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {summary.map((item) => (
            <Box
              sx={{
                backgroundColor: "rgb(248, 232, 231)",
                marginRight: "14px",
                marginBottom: "14px",
                padding: "18px 14px",
                textAlign: "right",
                minWidth: "120px",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginBottom: "6px",
                  color: "rgb(213, 117, 114)",
                }}
              >
                {item.icon}
                {item.value}
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "rgb(213, 117, 114)",
                }}
              >
                {item.text}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              zIndex: 1,
              backgroundColor: "white",
              fontWeight: "bold",
              color: "rgb(87, 87, 87)",
              fontSize: "18px",
            }}
          >
            <Typography>Focus Hours</Typography>
          </Box>
          <Box
            sx={{
              height: "1px",
              width: "90%",
              mt: "13px",
              paddingRight: "12px",
              backgroundColor: "rgb(240, 240, 240)",
              position: "absolute",
            }}
          >
            <Divider />
          </Box>
        </Box>
        <Box
          sx={{
            marginRight: "30px",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                border: "2px solid rgb(225, 155, 153)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "18px",
                marginTop: "25px",
                width: "330px",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Days" value="1" />
                <Tab label="Weeks" value="2" />
                <Tab label="Months" value="3" />
              </TabList>
            </Box>
            <Box
              sx={{
                borderRadius: "8px",
                display: "flex",
                marginBottom: "18px",
                width: "230px",
                fontSize: "12px",
                alignItems: "center",
                justifyContent: "space-between",
                border: "2px solid rgb(225, 155, 153)",
              }}
            >
              sds
            </Box>
            <TabPanel value="1">
              <CustomChart />
            </TabPanel>
            <TabPanel value="2">
              <CustomChart />
            </TabPanel>
            <TabPanel value="3">
              <CustomChart />
            </TabPanel>
          </TabContext>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="outlined"
            onClick={handleEdit}
            startIcon={<SettingsOutlinedIcon />}
            sx={{ color: "grey", border: "2px solid rgba(0, 0, 0, 0.4) " }}
          >
            Edit
          </Button>
        </Box>
        <Box>
          <ListItem>
            <ListItemText primary="PROJECT" />
            <Box sx={{ display: "flex" }}>
              <ListItemText primary="TIME(HH:MM)" />
            </Box>
          </ListItem>
          <Divider />
          <ListItem divider>
            <Box
              sx={{
                backgroundColor: "rgba(255, 71, 108, 0.2)",
                border: "1px solid rgba(173, 0, 35, 0.8)",
                height: "14px",
                width: "14px",
                display: "inlineBlock",
                marginRight: "12px",
              }}
            ></Box>
            <ListItemText primary="CODER" />
            <Box sx={{ display: "flex" }}>
              <ListItemText primary="00:03" />
            </Box>
          </ListItem>
          <ListItem>
            <ListItemText primary="Total" />
            <Box sx={{ display: "flex" }}>
              <ListItemText primary="00:03" />
            </Box>
          </ListItem>
          <Divider />
        </Box>
      </Box>
    </>
  );
};

const Detail = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tasks = [
    {
      date: 10,
      minutes: 5,
      name: "hours focused",
    },
    {
      date: 10,
      minutes: 5,
      name: "hours focused",
    },
    {
      date: 10,
      minutes: 5,
      name: "hours focused",
    },
  ];

  const handleEdit = () => {
    console.log("edit");
  };
  const handleDelete = () => {
    console.log("delete");
  };
  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  ];

  return (
    <Box sx={{ width: 526, height: 550 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              zIndex: 1,
              backgroundColor: "white",
              fontWeight: "bold",
              color: "rgb(87, 87, 87)",
              fontSize: "18px",
            }}
          >
            <Typography>Focus Time Detail</Typography>
          </Box>
          <Box
            sx={{
              height: "1px",
              width: "90%",
              mt: "13px",
              paddingRight: "12px",
              backgroundColor: "rgb(240, 240, 240)",
              position: "absolute",
            }}
          >
            <Divider />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            onClick={handleEdit}
            startIcon={<SettingsOutlinedIcon />}
            sx={{ color: "grey", border: "2px solid rgba(0, 0, 0, 0.4) " }}
          >
            Insert
          </Button>
          <Button
            variant="outlined"
            onClick={handleEdit}
            startIcon={<SettingsOutlinedIcon />}
            sx={{ color: "grey", border: "2px solid rgba(0, 0, 0, 0.4) " }}
          >
            <CSVLink className="hidden" data={csvData}>
              Download
            </CSVLink>
            ;
          </Button>
        </Box>
        <Box>
          <CustomDatagrid />
        </Box>
      </Box>
    </Box>
  );
};

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

export default function ReportModal() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<InsertChartOutlinedRoundedIcon />}
        sx={{ color: "white", borderColor: "white" }}
      >
        Report
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Summary" value="1" />
            <Tab label="Detail" value="2" />
            <Tab label="Ranking" value="3" />
          </TabList>
          <TabPanel value="1">
            <Summmary />
          </TabPanel>
          <TabPanel value="2">
            <Detail />
          </TabPanel>
          <TabPanel value="3">
            <Ranking />
          </TabPanel>
        </TabContext>
      </BootstrapDialog>
    </Box>
  );
}
