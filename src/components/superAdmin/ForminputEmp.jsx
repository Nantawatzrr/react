// import React, { useState } from "react";
// import { TextField, Container, Stack, Box } from "@mui/material";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import Autocomplete from "@mui/material/Autocomplete";

// const options = ["SuperAdmin ", "BranchAdmin" , "Branch Staff" , "Doctor" , "Nurse"];
// const mr = ["นาย", "นาง" , "นางสาว" ,];
// const Forminput = () => {
//   // const {fname,lname,age,weight,height,sbp,dpb,pulse,editId,setTitle} = props;
//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit} action={<Link to="/login" />}>
//         <Stack
//           spacing={4}
//           direction="row"
//           sx={{ marginBottom: 4, marginTop: 4 }}
//         >
//            <Autocomplete
//             id="controllable-states-demo"
//             options={mr}
//             fullWidth
//             renderInput={(params) => <TextField {...params}  label="คำนำหน้า" />}
//           />
//           <TextField
//             type="text"
//             variant="outlined"
//             color="secondary"
//             label="ชื่อจริง"
//             // value={fname}
//             onChange={(e) => setTitle(e.target.value)}
//             fullWidth
//             required
//           />
//           <TextField
//             type="text"
//             variant="outlined"
//             color="secondary"
//             label="นามสกุล"
//             // value={lname}
//             fullWidth
//             required
//           />
//           <TextField
//             type="text"
//             variant="outlined"
//             color="secondary"
//             label="ชื่อผู้ใช้"
//             // value={lname}
//             fullWidth
//             required
//           />
//         </Stack>
//         <Stack
//           spacing={4}
//           direction="row"
//           sx={{ marginBottom: 4, marginTop: 4 }}
//         >
//           <TextField
//             type="text"
//             variant="outlined"
//             color="secondary"
//             label="สาขา"
//             // value={age}
//             fullWidth
//             required
//             sx={{ mb: 4 }}
//           />
//           <TextField
//             type="number"
//             variant="outlined"
//             color="secondary"
//             label="เบอร์โทร"
//             // value={weight}
//             required
//             fullWidth
//             sx={{ mb: 4 }}
//           />
//           <TextField
//             type="number"
//             variant="outlined"
//             color="secondary"
//             label="รหัสพนักงาน"
//             // value={height}
//             required
//             fullWidth
//             sx={{ mb: 4 }}
//           />
//           {/* <TextField
//             type="text"
//             variant="outlined"
//             color="secondary"
//             label="ตำเเหน่ง"
//             // value={sbp}
//             required
//             fullWidth
//             sx={{ mb: 4 }}
//           /> */}
//           <Autocomplete
//             id="controllable-states-demo"
//             options={options}
//             fullWidth
//             renderInput={(params) => <TextField {...params}  label="ตำแหน่ง" />}
//           />
//         </Stack>
//         <Button
//           type="submit"
//           variant="contained"
//           color="success"
//           sx={{ backgroundColor: "#00CD66", marginBottom: 5 }}
//         >
//           เพิ่ม
//           {/* {editId ? "แก้ไข" : "เพิ่ม"} */}
//         </Button>
//       </form>
//     </>
//   );
// };

// export default Forminput;

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';


const title = [
  {
    value: '',
    label: '',
  },
  {
    value: 'นาย',
    label: 'นาย',
  },
  {
    value: 'นาง',
    label: 'นาง',
  },
  {
    value: 'นางสาว',
    label: 'นางสาว',
  },
];
export default function AddressForm() {
  return (
    <React.Fragment>
      <Container>
        <form action="">
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="empCode"
            name="empCode"
            label="รหัสพนักงาน"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
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
            required
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
            required
            id="username"
            name="username"
            label="ผู้ใช้งาน"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
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
          sx={{ backgroundColor: "#00CD66", marginBottom: 5  , marginTop:5}}
        >
          เพิ่ม
        </Button>
        </form>
      
        </Container>

   
    </React.Fragment>
  );
}
