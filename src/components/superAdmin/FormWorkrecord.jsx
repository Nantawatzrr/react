import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Container>
        <form action="">
          <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="subject"
            name="subject"
            label="เรื่อง"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}sm={8}>
          <TextField
            id="details"
            name="details"
            label="รายละเอียด"
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
          {/* {editId ? "แก้ไข" : "เพิ่ม"} */}
        </Button>
        </form>
      
        </Container>

   
    </React.Fragment>
  );
}
