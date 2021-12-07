import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

function OperationMember() {
  return (
    <section className="operation-member">
      <div className="classname">TOÁN 6</div>
      <FormControl>
        <TextField fullWidth label="Tìm kiếm thành viên" id="fullWidth" />
      </FormControl>
    </section>
  );
}

export default OperationMember;
