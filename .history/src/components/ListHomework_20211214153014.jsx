import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import VerticalListHomework from "./VerticalListHomework";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  label: {
    fontSize: 18,
  },
});
const topicHomework = [{ topic: }] 
export default function ListHomework() {
  const [value, setValue] = React.useState("1");
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="list-homework">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList centered onChange={handleChange}>
              <Tab
                label="Danh sách bài tập"
                className={classes.label}
                value="homework"
              />
              <Tab
                className={classes.label}
                label="Danh sách tài liệu"
                value="document"
              />
            </TabList>
          </Box>
          <TabPanel value="homework">
            <VerticalListHomework type={"Homework"} />
          </TabPanel>
          <TabPanel value="document">
            <VerticalListHomework type={"Document"} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
