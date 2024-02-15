import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import swal from "sweetalert";
import InputforPassword from "../components/Inputforpassword";
import Logo from "../icons/logo.png";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return <></>;
}

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const jsonData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    fetch("http://localhost:4000/api/employee/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
      if(response.status == 200){
        response.json() 
        .then((data) => {
            swal({
              title: "เข้าสู่ระบบ",
              text: "ยินดีต้อนรับ",
              icon: "success",
              timer: 890,
              buttons: false,
            }).then(() => {
              switch (data.data.role) {
                case "0":
                  localStorage.setItem("token", data.data.token);
                  navigate("/superAdmin");
                  break;
                case "1":
                  localStorage.setItem("token", data.data.token);
                  navigate("/branchAdmin");
                  break;
                case "2":
                  localStorage.setItem("token", data.data.token);
                  navigate("/doctorpage");
                  break;
                case "3":
                  localStorage.setItem("token", data.data.token);
                  navigate("/nursepage");
                  break;
                default:
                  console.error("บทบาทที่ไม่รู้จัก:");
              }
            }); 
        })
      }else{
        swal({
          title: "รหัสผ่านไม่ถูกต้อง",
          text: "You clicked the button!",
          icon: "error",
          timer: 1000,
          button: false,
        });
      }})
      
      
      
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            justifyContent: "center",
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={Logo}
            sx={{ width: 150, height: 150 }}
          />

          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            
          </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            เข้าสู่ระบบ
          </Typography> */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <InputforPassword />
            <Grid container marginTop={2}>
              <Grid item xs>
                <Link href="#" variant="body2" underline="hover">
                  ลืมรหัสผ่าน
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2, backgroundColor: "#00CD66" }}
            >
              <LoginIcon />
              เข้าสู่ระบบ
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
