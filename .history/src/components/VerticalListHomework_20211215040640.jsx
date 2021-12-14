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
  console.log(listHomework);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderTopics = (topic) => {
    return topic?.map((item, index) => {
      return (
        <Box key={index + 1000} className="section">
          <Typography variant="h6">{item.title}</Typography>
          <HomeworkCard type={type} />
          
        </Box>
      );
    });
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
        <Tab label="Tất cả chủ đề" {...a11yProps(0)} />
        {listHomework?.map((topic, index) => {
          return (
            <Tab
              key={index + 2000}
              label={topic.topic}
              {...a11yProps(index + 1)}
            />
          );
        })}
      </Tabs>

      <Box sx={{ width: "100%" }}>
        <TabPanel
          className="tabAllTopics"
          value={value}
          style={{ width: "100%" }}
          index={0}
        >
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

        {listHomework?.map((topic, index) => {
          return (
            <TabPanel value={value} style={{ width: "86.5%" }} index={index}>
              <Box
                style={{
                  display: "block",
                  width: "70%",
                  alignItems: "center",
                  margin: "0 auto",
                }}
                centered
              ></Box>
            </TabPanel>
          );
        })}
      </Box>
    </Box>
  );
}
