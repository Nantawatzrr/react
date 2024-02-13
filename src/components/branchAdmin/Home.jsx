import { Card, Box, Typography, Grid } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import Chart from "./Chart";

const DashboardCard = () => {
  const userData = [
    { title: "จำนวนผู้ใช้งาน", value: 200, icon: <HomeOutlinedIcon /> },
    { title: "จำนวนผู้ใช้งาน", value: 200 },
    { title: "จำนวนผู้ใช้งาน", value: 200 },
    { title: "จำนวนผู้ใช้งาน", value: 200 },
    // เพิ่มข้อมูลอื่น ๆ ตามต้องการ
  ];
  return (
    <Box sx={{ display: "flex" , marginTop:25 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          {userData.map((data, index) => (
            <Card variant="outlined" sx={cardStyle}>
              <Box
                sx={{
                  borderRadius: "50%",
                  background: "#F08383",
                  border: 0,
                  width: "3rem",
                  height: "3rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 1.5,
                  }}
                >
                  {data.icon}
                </Box>
              </Box>
              <Box sx={{ padding: 0, margin: 0 }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {data.title}
                </Typography>
                <Typography sx={{ fontSize: 25 }}>{data.value}</Typography>
              </Box>
            </Card>
          ))}
        </Grid>
        <Grid item xs={8}>
          {/* <Chart /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

const cardStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 2,
  margin: 1,
  height: 100,
  // width:200
};

export default DashboardCard;
