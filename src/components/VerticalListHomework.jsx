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
          <Box>{children}</Box>
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
    return (
      <Box className="section">
        <Typography variant="h6">{topic.topic}</Typography>
        {topic[type === "Homework" ? "homeworks" : "documents"].map(
          (homework, index) => {
            return (
              <HomeworkCard
                key={index + 3000}
                type={type}
                homework={homework}
              />
            );
          }
        )}
      </Box>
    );
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
          style={{ width: "86.5%" }}
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
              {listHomework?.map((topic, index) => {
                return (
                  <Box key={index} className="section">
                    <Typography variant="h6">{topic.topic}</Typography>
                    {topic[type === "Homework" ? "homeworks" : "documents"].map(
                      (homework, index) => {
                        return (
                          <HomeworkCard
                            key={index + 3000}
                            type={type}
                            homework={homework}
                          />
                        );
                      }
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </TabPanel>

        {listHomework?.map((topic, index) => {
          return (
            <TabPanel
              key={index + 4000}
              value={value}
              style={{ width: "86.5%" }}
              index={index + 1}
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
                {renderTopics(topic)}
              </Box>
            </TabPanel>
          );
        })}
      </Box>
    </Box>
  );
}
