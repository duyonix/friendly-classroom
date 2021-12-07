import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
function OperationMember() {
  return (
    <section className="operation-member">
      <div className="classname">TOÁN 6</div>
      
        <TextField label="Tìm kiếm thành viên" />
        <SearchIcon color="primary" />
      </FormControl>
    </section>
  );
}

export default OperationMember;
