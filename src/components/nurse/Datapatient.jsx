import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ForminputPatient from "./ForminputPatient";

const rows = [
  {
    id: 1,
    patientCode: "65309010001",
    peopleCard: "1739902009000",
    title: "นาย",
    name: "กฤษณชัย",
    surname: "อุบลทิพย์",
    age: 59,
    weight: 64,
    height: 176,
    qtySbp: 150,
    qtyDpb: 95,
    pulse: 84,
    tel: "0987654332",
  },
  {
    id: 2,
    patientCode: "65309010002",
    peopleCard: "1739902009000",
    title: "นาย",
    name: "นันทวัฒน์",
    surname: "มาศวิเศษ",
    age: 60,
    weight: 55,
    height: 174,
    qtySbp: 151,
    qtyDpb: 85,
    pulse: 79,
    tel: "0982079678",
  },
  {
    id: 3,
    patientCode: "65309010003",
    peopleCard: "1739902009598",
    title: "นาย",
    name: "วิทยา",
    surname: "วิทยา",
    age: 72,
    weight: 71,
    height: 162,
    qtySbp: 110,
    qtyDpb: 76,
    pulse: 75,
    tel: "0633368153",
  },
  {
    id: 4,
    patientCode: "65309010009",
    peopleCard: "1739902009015",
    title: "นางสาว",
    name: "สุภาพร",
    surname: "สุภาพร",
    age: 75,
    weight: 68,
    height: 168,
    qtySbp: 125,
    qtyDpb: 78,
    pulse: 86,
    tel: "0891685718",
  },
  {
    id: 5,
    patientCode: "65309010004",
    peopleCard: "1739902009758",
    title: "นางสาว",
    name: "ศุภรัตน์",
    surname: "ศุภรัตน์",
    age: 55,
    weight: 47,
    height: 158,
    qtySbp: 118,
    qtyDpb: 85,
    pulse: 77,
    tel: "0954626971",
  },
  {
    id: 6,
    patientCode: "65309010005",
    peopleCard: "1739902009000",
    title: "นาย",
    name: "สุรชัย",
    surname: "สุรชัย",
    age: 60,
    weight: 69,
    height: 173,
    qtySbp: 130,
    qtyDpb: 70,
    pulse: 80,
    tel: "0809228314",
  },
  {
    id: 7,
    patientCode: "65309010006",
    peopleCard: "1739902009000",
    title: "นาง",
    name: "จารุวรรณ",
    surname: "จารุวรรณ",
    age: 79,
    weight: 83,
    height: 168,
    qtySbp: 122,
    qtyDpb: 95,
    pulse: 84,
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
    field: "peopleCard",
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
    align: "center",
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
  swal({
    title: "ต้องการลบ?",
    text: "ถ้าต้องการลบกด OK  ถ้าไม่ต้องการกด Cancle",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("ลบข้อมูลเสร็จสิ้น", {
        icon: "success",
      });
    } else {
      swal("ข้อมูลยังไม่ถูกลบ", {
        icon: "success",
      });
    }
  });
};

const DataStudents = () => {
  return (
    <Box>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: 3,
            marginTop: 10,
            fontSize: 25,
          }}
        >
          ตารางผู้ป่วย
        </Typography>
        <DataGrid
          rows={rowsWithIndex}
          columns={columns}
          slots={{ toolbar: GridToolbarQuickFilter }}
        />
        <ForminputPatient />
      </Container>
    </Box>
  );
};

export default DataStudents;
