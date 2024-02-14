import { DataGrid, GridToolbarQuickFilter  } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormDataUser from './FormDataUser'

const rows = [
  {
    id: 1,
    name: "กฤษณชัย",
    surname: "อุบลทิพย์",
    username: "kritsanachai@gmail.com",
    role: "SuperAdmin",
  },
  {
    id: 2,
    name: "นันทวัฒน์",
    surname: "มาศวิเศษ",
    username: "nantawat@gmail.com",
    role: "BranchAdmin",
  },
  {
    id: 3,
    name: "วิทยา",
    surname: "วิทยา",
    username: "vitaya@gmail.com",
    role: "Branch Staff",
  },
  {
    id: 4,
    name: "สุภาพร",
    surname: "สุภาพร",
    username: "supaporn@gmail.com",
    role: "Branch Staff",
  },
  {
    id: 5,
    name: "ศุภรัตน์",
    surname: "ศุภรัตน์",
    username: "suparuk@gmail.com",
    role: "Doctor",
  },
  {
    id: 6,
    name: "สุรชัย",
    surname: "สุรชัย",
    username: "surachai@gmail.com",
    role: "Nurse",
  },
  {
    id: 7,
    name: "จารุวรรณ",
    surname: "จารุวรรณ",
    username: "jaruwun@gmail.com",
    role: "Nurse",
  },
];

// เพิ่มคอลัมน์เลขลำดับ
const rowsWithIndex = rows.map((row, index) => ({ ...row, index: index + 1 }));

const columns = [
  { field: "index", headerName: "#", width: 150 },
  { field: "name", headerName: "ชื่อ", flex: 2, minWidth: 150, maxWidth: 200 },
  {
    field: "surname",
    headerName: "นามสกุล",
    flex: 2,
    minWidth: 100,
    maxWidth: 150,
  },
  {
    field: "username",
    headerName: "ชื่อผู้ใช้งาน",
    flex: 2,
    minWidth: 120,
    maxWidth: 200,
  },
  {
    field: "role",
    headerName: "role",
    flex: 2,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    field: "actions",
    headerName: "",
    width: 200,
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
            ผู้ใช้งาน
        </Typography>
        <DataGrid rows={rowsWithIndex} columns={columns} slots={{ toolbar: GridToolbarQuickFilter }}/>
        <FormDataUser/>
      </Container>
    </Box>



  );
};

export default DataStudents;