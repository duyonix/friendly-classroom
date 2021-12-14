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
export default function VerticalListHomework(props) {
  const [value, setValue] = React.useState(0);
  const { type, listHomework } = props;
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
        paddingLeft: 22,
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
          width: "13.5%",
        }}
      >
        {listHomework?.map((item, index)=>{
          return <Tab label={index==1} {...a11yProps(0)} />
        })}
        <Tab label="Tất cả chủ đề" {...a11yProps(0)} />
        
      </Tabs>
      <TabPanel value={value} style={{ width: "100%" }} index={0}>
        <Box
          style={{
            display: "block",
            width: "70%",
            alignItems: "center",
            margin: "0 auto",
          }}
          centered
        >
          <Box className="section">
            <Typography variant="h6">Chương 1</Typography>
            <HomeworkCard type={type} />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
