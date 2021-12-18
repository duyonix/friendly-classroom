import React from "react";
import ListMember from "../../components/ListMember";
import OperationMember from "../../components/OperationMember";
import { useDispatch, useSelector } from "react-redux";
import { actFetchHomeworkList } from "../../redux/modules/Homework/action";
import Loading from "../../components/Loading";
function Member() {
  return (
    <div className="member">
      <OperationMember />
      <ListMember />
    </div>
  );
}

export default Member;
