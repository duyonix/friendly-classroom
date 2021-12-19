import React, { useEffect, useState } from "react";
import ListMember from "../../components/ListMember";
import OperationMember from "../../components/OperationMember";
import { useDispatch, useSelector } from "react-redux";
import { actFetchPeopleList } from "../../redux/modules/People/action";
import Loading from "../../components/Loading";
function Member() {
  const dispatch = useDispatch();
  const id = null;
  if (localStorage.getItem("classroomId")) {
    const id = localStorage.getItem("classroomId");
  }
  useEffect(() => {
    dispatch(actFetchPeopleList(id));
  }, []);
  const data = useSelector((state) => state.peopleReducer?.data);
  const loading = useSelector((state) => state.peopleReducer?.loading);
  const err = useSelector((state) => state.peopleReducer?.err);
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
