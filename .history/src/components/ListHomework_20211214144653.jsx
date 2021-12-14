import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import VerticalListHomework from "./VerticalListHomework";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
export default function ListHomework() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="list-homework">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList centered style={{}} onChange={handleChange}>
              <Tab label="Danh sách bài tập" value="1" />
              <Tab label="Danh sách tài liệu" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <VerticalListHomework />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
