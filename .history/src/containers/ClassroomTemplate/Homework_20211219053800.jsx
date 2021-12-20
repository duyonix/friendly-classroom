import React, { useEffect } from "react";
import ListHomework from "../../components/ListHomework";
import OperationHomework from "../../components/OperationHomework";

export default function Homework() {
  
  return (
    <div className="homework">
      <OperationHomework />
      <ListHomework />
    </div>
  );
}
