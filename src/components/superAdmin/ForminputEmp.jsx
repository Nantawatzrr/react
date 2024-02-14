import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import swal from "sweetalert";

const title = [
  {
    value: "",
    label: "",
  },
  {
    value: "นาย",
    label: "นาย",
  },
  {
    value: "นาง",
    label: "นาง",
  },
  {
    value: "นางสาว",
    label: "นางสาว",
  },
];

const handleDelete = (id) => {
  event.preventDefault();
  swal({
    title: "บันทึกเสร็จสิ้น",
    text: "ขอบคุณ",
    icon: "success",
    timer: 890,
    buttons: false,
  });
};
export default function AddressForm() {
  return (
    <React.Fragment>
      <Box component="form" onSubmit={handleDelete}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="empCode"
                name="empCode"
                label="รหัสพนักงาน"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="branchId"
                name="branchId"
                label="สาขา"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="title"
                select
                label="คำนำหน้า"
                fullWidth
                defaultValue="EUR"
                SelectProps={{
                  native: true,
                }}
                helperText="กรุณาเลือกคำนำหน้า"
                variant="standard"
              >
                {title.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="firstName"
                name="firstName"
                label="ชื่อจริง"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="lastName"
                name="lastName"
                label="นามสกุล"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="age"
                name="age"
                label="อายุ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="username"
                name="username"
                label="ผู้ใช้งาน"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="tel"
                name="tel"
                label="เบอร์โทร"
                fullWidth
                variant="standard"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ backgroundColor: "#00CD66", marginBottom: 5, marginTop: 5 }}
          >
            เพิ่ม
          </Button>
        </Container>
      </Box>
    </React.Fragment>
  );
}
