import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Display from "./Display";
import Item from "./Item";
import AddEditModal from "../Modal/AddEditModal";
import { useDispatch, useSelector } from "react-redux";

const Listitem = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.data);
  console.log(tasks);
  return (
    <>
      <Display />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          borderBottom: "2px solid rgba(255, 255, 255, 0.6)",
          width: "70%",
          mt: "25px",
        }}
      >
        <Typography variant="h5">Task</Typography>
        <MoreVertOutlinedIcon />
      </Box>
      {tasks?.map((task, index) => (
        <Item data={task} />
      ))}
      <Box
        sx={{
          width: "70%",
          height: "60px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          opacity: 0.8,
          mt: "12px",
          border: "2px dashed rgba(255, 255, 255, 0.4)",
          color: "#fff",
        }}
      >
        <AddEditModal />
      </Box>
      <Box
        sx={{
          width: "70%",
          mt: "28px",
          padding: "20px 0px",
          borderTop: "1px solid rgba(255, 255, 255, 0.8)",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            margin: "0px 8px",
            display: "flex",
            justifyContent: "space-around",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <Typography> Est: 2</Typography>
          <Typography> Act: 0</Typography>
          <Typography> Finish at 14:14</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Listitem;
