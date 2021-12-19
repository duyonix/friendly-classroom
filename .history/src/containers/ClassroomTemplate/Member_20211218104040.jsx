import React, { useEffect } from "react";
import ListMember from "../../components/ListMember";
import OperationMember from "../../components/OperationMember";
import { useDispatch, useSelector } from "react-redux";
import { actFetchPeopleList } from "../../redux/modules/People/action";
import Loading from "../../components/Loading";
function Member() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchHomeworkList());
  });
  const data = useSelector((state) => state.homeworkReducer?.data);
  const loading = useSelector((state) => state.homeworkReducer?.loading);
  const err = useSelector((state) => state.homeworkReducer?.err);
  console.log(data);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="member">
      <OperationMember />
      <ListMember />
    </div>
  );
}

export default Member;
