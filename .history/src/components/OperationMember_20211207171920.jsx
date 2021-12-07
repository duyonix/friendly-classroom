import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
function OperationMember() {
  return (
    <section className="operation-member">
      <div className="classname">TOÁN 6</div>
      <div class="input-group">
        <TextField label="Tìm kiếm thành viên" />
        <TextField label="Tìm kiếm thành viên" />
      <SearchIcon color="primary" />
        <SearchIcon color="primary" sx={{ fontSize: 35 }} />
      </div>
    </section>
  );
}

export default OperationMember;
