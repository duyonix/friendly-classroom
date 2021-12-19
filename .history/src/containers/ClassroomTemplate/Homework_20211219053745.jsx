import React, { useEffect } from "react";
import ListHomework from "../../components/ListHomework";
import OperationHomework from "../../components/OperationHomework";
import { useDispatch, useSelector } from "react-redux";
import { actFetchHomeworkList } from "../../redux/modules/Homework/action";
import Loading from "../../components/Loading";
export default function Homework() {
  
  return (
    <div className="homework">
      <OperationHomework />
      <ListHomework />
    </div>
  );
}
