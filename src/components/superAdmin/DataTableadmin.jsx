// import * as React from "react";
// import Forminput from "./Forminput";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import {
//   Box,
//   Button,
//   Container,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
// import { styled } from "@mui/material/styles";

// // format: (value) => value.toLocaleString("en-US")

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor:'#66CCCC',
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     "&:last-child td, &:last-child th": {
//       border: 0,
//     },
//   }));

// const columns = [
//   { id: "name", label: "ผู้ป่วย" },
//   { id: "age", label: "อายุ", align: "center" },
//   {
//     id: "weight",
//     label: "Weight",
//     align: "center",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "height",
//     label: "height",
//     align: "center",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "qtySbp",
//     label: "SBP",
//     align: "center",
//   },
//   {
//     id: "qtyDpb",
//     label: "DPB",
//     align: "center",
//   },
//   {
//     id: "pulse",
//     label: "Pulse",
//     align: "center",
//   },
// ];

// function createData(name, age, weight, height, qtySbp, qtyDpb, pulse) {
//   return { name, age, weight, height, qtySbp, qtyDpb, pulse };
// }

// const rows = [
//   createData("นันทวัฒน์ มาศวิเศษ", 20, 65, 174, 150, 95, 84),
//   createData("นายวิทยา", 28, 65, 180, 150, 95, 84),
//   createData("นางสาวสุภาพร", 25, 55, 165, 110, 70, 80),
//   createData("นายณัฐพล", 35, 80, 175, 125, 80, 72),
//   createData("นางอรทัย", 32, 60, 160, 118, 72, 78),
//   createData("นายประพล", 40, 75, 178, 130, 85, 68),
//   createData("นางสาวศุภรัตน์ ", 27, 52, 162, 112, 68, 75),
//   createData("นายสุรชัย", 38, 78, 172, 128, 82, 70),
//   createData("นางจารุวรรณ", 29, 58, 168, 114, 74, 77),
//   createData("นายพีรศักดิ์", 33, 72, 176, 122, 78, 74),
//   createData("นางสาวปราณี", 31, 65, 170, 118, 76, 79),
// ];

// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Box>
//       <Container>
//         <Typography
//           sx={{
//             textAlign: "center",
//             marginBottom: 3,
//             marginTop: 10,
//             fontSize: 25,
//           }}
//         >
//           ตารางผู้ป่วย
//         </Typography>
//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>ผู้ป่วย</StyledTableCell>
//                 <StyledTableCell align="center">อายุ</StyledTableCell>
//                 <StyledTableCell align="center">น้ำหนัก</StyledTableCell>
//                 <StyledTableCell align="center">ส่วนสูง</StyledTableCell>
//                 <StyledTableCell align="center">SBP</StyledTableCell>
//                 <StyledTableCell align="center">DPB</StyledTableCell>
//                 <StyledTableCell align="center">
//                 Pulse
//                 </StyledTableCell>
//                 <StyledTableCell></StyledTableCell>
//                 <StyledTableCell></StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row) => {
//                   return (
//                     <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.age}>
//                       {columns.map((column) => {
//                         const value = row[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {column.format && typeof value === "number"
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         );
//                       })}
//                       <TableCell>
//                         <IconButton color="warning" sx={{ fontSize: 14 }}>
//                           <EditNoteIcon />
//                           เเก้ไข
//                         </IconButton>
//                       </TableCell>
//                       <TableCell>
//                         <IconButton color="error" sx={{ fontSize: 14 }}>
//                           <DeleteForeverOutlinedIcon />
//                           ลบ
//                         </IconButton>
//                       </TableCell>
//                     </StyledTableRow>
//                   );
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           checkboxSelection
//         />
//           <Forminput/>
//       </Container>
//     </Box>
//   );
// }
import { DataGrid, GridToolbarQuickFilter   } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Forminput from './Forminput'

const rows = [
  {
    id: 1,
    patientCode: "65309010001",
    patientCard: "1739902009000",
    title: "นาย",
    name: "กฤษณชัย",
    surname: "อุบลทิพย์",
    age: 59,
    weight:64,
    height:176,
    qtySbp:150,
    qtyDpb:95,
    pulse:84,
    tel: "0987654332",
  },
  {
    id: 2,
    patientCode: "65309010002",
    patientCard: "1739902009000",
    title: "นาย",
    name: "นันทวัฒน์",
    surname: "มาศวิเศษ",
    age: 60,
    weight:55,
    height:174,
    qtySbp:151, 
    qtyDpb:85,
    pulse:79,
    tel: "0982079678",
  },
  {
    id: 3,
    patientCode: "65309010003",
    patientCard: "1739902009598",
    title: "นาย",
    name: "วิทยา",
    surname: "วิทยา",
    age: 72,
    weight:71,
    height:162,
    qtySbp:110,
    qtyDpb:76,
    pulse:75,
    tel: "0633368153",
  },
  {
    id: 4,
    patientCode: "65309010009",
    patientCard: "1739902009015",
    title: "นางสาว",
    name: "สุภาพร",
    surname: "สุภาพร",
    age: 75,
    weight:68,
    height:168,
    qtySbp:125, 
    qtyDpb:78,
    pulse:86,
    tel: "0891685718",
  },
  {
    id: 5,
    patientCode: "65309010004",
    patientCard: "1739902009758",
    title: "นางสาว",
    name: "ศุภรัตน์",
    surname: "ศุภรัตน์",
    age: 55,
    weight:47,
    height:158,
    qtySbp:118, 
    qtyDpb:85,
    pulse:77,
    tel: "0954626971",
  },
  {
    id: 6,
    patientCode: "65309010005",
    patientCard: "1739902009000",
    title: "นาย",
    name: "สุรชัย",
    surname: "สุรชัย",
    age: 60,
    weight:69,
    height:173,
    qtySbp:130, 
    qtyDpb:70,
    pulse:80,
    tel: "0809228314",
  },
  {
    id: 7,
    patientCode: "65309010006",
    patientCard: "1739902009000",
    title: "นาง",
    name: "จารุวรรณ",
    surname: "จารุวรรณ",
    age: 79,
    weight:83,
    height:168,
    qtySbp:122, 
    qtyDpb:95,
    pulse:84,
    tel: "0899107105",
  },
];

// เพิ่มคอลัมน์เลขลำดับ
const rowsWithIndex = rows.map((row, index) => ({ ...row, index: index + 1 }));

const columns = [
  { field: "index", headerName: "#", width: 50 },
  {
    field: "patientCode",
    headerName: "รหัสผู้ป่วย",
    flex: 2,
    minWidth: 120,
    maxWidth: 200,
  },
  {
    field: "patientCard",
    headerName: "หมายเลขบัตรประชาชน",
    flex: 2,
    minWidth: 150,
    maxWidth: 200,
  },
  {
    field: "title",
    headerName: "คำนำหน้า",
    flex: 1,
    minWidth: 70,
    maxWidth: 100,
  },
  { field: "name", headerName: "ชื่อ", flex: 2, minWidth: 100, maxWidth: 150 },
  {
    field: "surname",
    headerName: "นามสกุล",
    flex: 2,
    minWidth: 100,
    maxWidth: 150,
  },
  {
    field: "age",
    headerName: "อายุ",
    flex: 2,
    minWidth: 70,
    maxWidth: 100,
  },
  {
    field: "weight",
    headerName: "น้ำหนัก",
    flex: 2,
    minWidth: 70,
    maxWidth: 100,
  },
  {
    field: "height",
    headerName: "ส่วนสูง",
    flex: 2,
    minWidth: 70,
    maxWidth: 100,
  },
  {
    field: "qtySbp",
    headerName: "SBP",
    flex: 2,
    minWidth: 70,
    maxWidth: 100,
  },
  {
    field: "qtyDpb",
    headerName: "DPB",
    flex: 2,
    minWidth: 70,
    maxWidth: 100,
  },
  {
    field: "pulse",
    headerName: "pulse",
    flex: 2,
    minWidth: 70,
    maxWidth: 100,
  },
  {
    field: "tel",
    headerName: "เบอร์โทร",
    flex: 2,
    minWidth: 120,
    maxWidth: 220,
  },
  {
    field: "actions",
    headerName: "",
    width: 200,
    align:"center",
    renderCell: (params) => (
      <div>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<BorderColorIcon />}
            onClick={() => handleEdit(params.row.id)}
          >
            แก้ไข
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(params.row.id)}
          >
            ลบ
          </Button>
        </Stack>
      </div>
    ),
  },
];

const handleEdit = (id) => {
  // เขียนโค้ดสำหรับการแก้ไขข้อมูลด้วย ID ที่ได้รับ
  console.log("Edit clicked for row with ID:", id);
};

const handleDelete = (id) => {
  // เขียนโค้ดสำหรับการลบข้อมูลด้วย ID ที่ได้รับ
  console.log("Delete clicked for row with ID:", id);
};

const DataStudents = () => {
  return (

    <Box>
      <Container>
        <Typography  sx={{
            textAlign: "center",
            marginBottom: 3,
            marginTop: 10,
            fontSize: 25,
          }}>
            ตารางผู้ป่วย
        </Typography>
        <DataGrid rows={rowsWithIndex} columns={columns} slots={{ toolbar: GridToolbarQuickFilter }}/>
        <Forminput/>
      </Container>
    </Box>



  );
};

export default DataStudents;