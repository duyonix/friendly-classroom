import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeworkCard from "./HomeworkCard";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function VerticalListHomework() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
        paddingLeft: 10,
        width: "100%",
      }}
      className="vertical-list-homework"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Tab label="Tất cả chủ đề" {...a11yProps(0)} />
        <Tab label="Chương 1" {...a11yProps(1)} />
        <Tab label="Chương 2" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} style={{ width: "100%" }} index={0}>
        <Box
          style={{
            width: "40%",
            alignItems: "center",
            margin: "0 auto",
            transform: "translate(-50%)",
          }}
          centered
        >
          <Typography variant="h6">Chương 1</Typography>
          <HomeworkCard />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Chương 1
      </TabPanel>
      <TabPanel value={value} index={2}>
        Chương 2
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  );
}
