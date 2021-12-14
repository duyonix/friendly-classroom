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
const topicHomework = [
  {
    topic: "Chương 1",
    homeworks: [
      {
        title: "Nhân biểu thức",
        attachedFiles: ["https1", "https2"],
        _id: "abcxyz",
        deadline: "20.11.2021",
      },
      {
        title: "Chia biểu thức",
        attachedFiles: ["https1", "https2"],
        _id: "abcxyz2",
        deadline: "20.11.2021",
      },
    ],
  },
  {
    topic: "Chương 2",
    homeworks: [
      {
        title: "Cộng biểu thức",
        attachedFiles: ["https1", "https2"],
        _id: "abcxyz",
        deadline: "20.11.2021",
      },
      {
        title: "Trừ biểu thức",
        attachedFiles: ["https1", "https2"],
        _id: "abcxyz2",
        deadline: "20.11.2021",
      },
    ],
  },
  {
    topic: "Chương 3",
    homeworks: [
      {
        title: "Cộng biểu thức",
        attachedFiles: ["https1", "https2"],
        _id: "abcxyz",
        deadline: "20.11.2021",
      },
      {
        title: "Trừ biểu thức",
        attachedFiles: ["https1", "https2"],
        _id: "abcxyz2",
        deadline: "20.11.2021",
      },
    ],
  },
  {
    topic: "Chương 4",
    homeworks: [
      {
        title: "Cộng biểu thức",
        attachedFiles: ["https1", "https2"],
        _id: "abcxyz",
        deadline: "20.11.2021",
      },
      {
        title: "Trừ biểu thức",
        attachedFiles: ["https1", "https2"],
        _id: "abcxyz2",
        deadline: "20.11.2021",
      },
    ],
  },
];
const topicDocument = [
  {
    topic: "Chương 1",
    documents: [
      {
        title: "Nhân biểu thức",
        _id: "abcxyz",
        createdAt: "20.11.2021",
      },
      {
        title: "Chia biểu thức",

        _id: "abcxyz2",
        createdAt: "20.12.2021",
      },
    ],
  },
  {
    topic: "Chương 2",
    documents: [
      {
        title: "Nhân biểu thức",
        _id: "abcxyz",
        createdAt: "20.11.2021",
      },
      {
        title: "Chia biểu thức",

        _id: "abcxyz2",
        createdAt: "20.12.2021",
      },
    ],
  },
  {
    topic: "Chương 3",
    documents: [
      {
        title: "Nhân biểu thức",
        _id: "abcxyz",
        createdAt: "20.11.2021",
      },
      {
        title: "Chia biểu thức",

        _id: "abcxyz2",
        createdAt: "20.12.2021",
      },
    ],
  },
];
export default function ListHomework() {
  const [value, setValue] = React.useState("homework");
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
            <VerticalListHomework
              type={"Homework"}
              listHomework={topicHomework}
            />
          </TabPanel>
          <TabPanel value="document">
            <VerticalListHomework
              type={"Document"}
              listDocument={topicDocument}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
