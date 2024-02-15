import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import logo from "../../icons/logo.png";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Groups2SharpIcon from "@mui/icons-material/Groups2Sharp";
import Home from "../../components/branchAdmin/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Datapatient from "../../components/branchAdmin/Datapatient";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import DataEmp from "../../components/branchAdmin/DataEmp";
import DataUser from "../../components/branchAdmin/DataUser";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import Keepingrecords from "../../components/branchAdmin/Keepingrecords";
import Appointment from "../../components/branchAdmin/Appointment";
import Fwservice from "../../components/branchAdmin/Fwservice";
import FormReceiving from "../../components/branchAdmin/FormReceiving";
import Swal from 'sweetalert2';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  useEffect(() => {
    const tokenJWT = localStorage.getItem("token");
    if (!tokenJWT) {
      Swal.fire({
        title: "ไม่สามารถใช้งานได้",
        text: "กรุณาเข้าสู่ระบบก่อน",
        width: 600,
        padding: "3em",
        color: "#FF6633",
        icon: "error",
      }).then(() => {
        window.location = "/login";
      });
    }
  });

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menudata, setMenudata] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
              sx={{
                marginRight: 2.5,
                ...(open && { display: "flex" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} height={50} width={50} />
            <Typography variant="h6" noWrap component="div" marginLeft={3}>
              Elderlycare Server
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Home")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Datapatient")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DataSaverOffOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="ตารางผู้ป่วย"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Empdata")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Groups2SharpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="พนักงาน"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("DataUser")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PersonAddAltIcon />
                </ListItemIcon>
                <ListItemText
                  primary="ผู้ใช้งาน"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("FormReceivingService")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <EditRoadIcon />
                </ListItemIcon>
                <ListItemText
                  primary="ลงทะเบียนผู้รับบริการ"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Keepingrecords")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SaveAsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="บันทึกการรักษา"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Appointment")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MoreTimeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="บันทึกการนัดหมาย"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Fwservice")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ArrowOutwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="บันทึกการส่งต่อบริการ"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={handleLogout}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {menudata == "Home" && <Home />}
          {menudata == "Datapatient" && <Datapatient />}
          {menudata == "Empdata" && <DataEmp />}
          {menudata == "DataUser" && <DataUser />}
          {menudata == "FormReceivingService" && <FormReceiving />}
          {menudata == "Appointment" && <Appointment />}
          {menudata == "Fwservice" && <Fwservice />}
          {menudata == "Keepingrecords" && <Keepingrecords />}
        </Box>
      </Box>
    </>
  );
}
