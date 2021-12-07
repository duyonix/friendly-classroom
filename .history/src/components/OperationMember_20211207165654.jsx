import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

function OperationMember() {
  return (
    <section className="operation-member">
      <div className="classname">TOÁN 6</div>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </FormControl>
    </section>
  );
}

export default OperationMember;
