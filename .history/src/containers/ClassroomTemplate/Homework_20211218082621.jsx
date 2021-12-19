import React from "react";
import ListHomework from "../../components/ListHomework";
import OperationHomework from "../../components/OperationHomework";
import { useDispatch, useSelector } from "react-redux";
export default function Homework() {
  return (
    <div className="homework">
      <OperationHomework />
      <ListHomework />
    </div>
  );
}
