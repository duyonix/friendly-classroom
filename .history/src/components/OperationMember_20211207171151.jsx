import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
function OperationMember() {
  return (
    <section className="operation-member">
      <div className="classname">TOÁN 6</div>

      <InputGroup>
        <TextField label="Tìm kiếm thành viên" />
        <SearchIcon color="primary" />
      </InputGroup>
    </section>
  );
}

export default OperationMember;
