import React, { useEffect } from "react";
import ListHomework from "../../components/ListHomework";
import OperationHomework from "../../components/OperationHomework";
import { useDispatch, useSelector } from "react-redux";
import { actFetchHomeworkList } from "../../redux/modules/Homework/action";
import Loading from "../../components/Loading";
export default function Homework() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchHomeworkList());
  });
  const data = useSelector((state) => state.homeworkReducer?.data);
  const loading = useSelector((state) => state.homeworkReducer.loading);
  const err = useSelector((state) => state.homeworkReducer.err);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div className="homework">
      <OperationHomework />
      <ListHomework />
    </div>
  );
}
