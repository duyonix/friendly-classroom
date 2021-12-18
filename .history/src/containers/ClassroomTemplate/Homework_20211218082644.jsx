import React from "react";
import ListHomework from "../../components/ListHomework";
import OperationHomework from "../../components/OperationHomework";
import { useDispatch, useSelector } from "react-redux";
export default function Homework() {
  const data = useSelector((state) => state.homeworkR.data);
  const loading = useSelector((state) => state.homeworkR.loading);
  const err = useSelector((state) => state.homeworkR.err);
  return (
    <div className="homework">
      <OperationHomework />
      <ListHomework />
    </div>
  );
}
