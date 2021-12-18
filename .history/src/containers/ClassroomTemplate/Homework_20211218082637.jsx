import React from "react";
import ListHomework from "../../components/ListHomework";
import OperationHomework from "../../components/OperationHomework";
import { useDispatch, useSelector } from "react-redux";
export default function Homework() {
  const data = useSelector((state) => state.loginReducer.data);
  const loading = useSelector((state) => state.loginReducer.loading);
  const err = useSelector((state) => state.loginReducer.err);
  return (
    <div className="homework">
      <OperationHomework />
      <ListHomework />
    </div>
  );
}
