import React, { useEffect } from "react";
import ListHomework from "../../components/ListHomework";
import OperationHomework from "../../components/OperationHomework";
import { useDispatch, useSelector } from "react-redux";
import { actFetchHomeworkList } from "../../redux/modules/Homework";
export default function Homework() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchHomeworkList());
  });
  return (
    <div className="homework">
      <OperationHomework />
      <ListHomework />
    </div>
  );
}
