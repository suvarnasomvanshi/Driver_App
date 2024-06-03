import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { get, ref } from "firebase/database";
import { db } from "../firebase.config";

export default function UsersQuery() {
  const [applications, setApplications] = React.useState([
    { id: "name", label: "Name", minWidth: 0, align: "center" },
    { id: "email", label: "Email", minWidth: 0, align: "center" },
    { id: "contactNo", label: "Contact", minWidth: 0, align: "center" },
    { id: "state", label: "State", minWidth: 0, align: "center" },
    { id: "city", label: "City", minWidth: 0, align: "center" },
    { id: "roles", label: "Roles", minWidth: 0, align: "center" },
    { id: "additionalInfo", label: "Message", minWidth: 0, align: "center" },
    { id: "timeStamp", label: "Date & Time", minWidth: 0, align: "center" },
  ]);
  const [demoRequest, setDemoRequest] = React.useState([
    { id: "name", label: "Name", minWidth: 0, align: "center" },
    { id: "email", label: "Email", minWidth: 0, align: "center" },
    { id: "contactNo", label: "Contact", minWidth: 0, align: "center" },
    { id: "state", label: "State", minWidth: 0, align: "center" },
    { id: "city", label: "City", minWidth: 0, align: "center" },
    { id: "additionalInfo", label: "Message", minWidth: 0, align: "center" },
    { id: "timeStamp", label: "Date & Time", minWidth: 0, align: "center" },
  ]);
  const [query, setQuery] = React.useState([
    { id: "name", label: "Name", minWidth: 0, align: "center" },
    { id: "email", label: "Email", minWidth: 0, align: "center" },
    { id: "message", label: "Message", minWidth: 0, align: "center" },
    { id: "timeStamp", label: "Date & Time", minWidth: 0, align: "center" },
  ]);
  const [columns, setColumns] = React.useState([
    { id: "name", label: "Name", minWidth: 0, align: "center" },
    { id: "email", label: "Email", minWidth: 0, align: "center" },
    { id: "message", label: "Message", minWidth: 0, align: "center" },
    { id: "timeStamp", label: "Date & Time", minWidth: 0, align: "center" },
  ]);
  const [select, setSelect] = React.useState("Querys");
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  React.useEffect(() => {
    if (select == "Applications") setColumns(applications);
    if (select == "DemoRequests") setColumns(demoRequest);
    if (select == "Querys") setColumns(query);
    const fetchData = async () => {
      const queryref = ref(db, select);
      try {
        const snapshot = await get(queryref);
        const temp = Object.values(snapshot.val());
        console.log(temp);
        setData(temp);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [select]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          my: 2,
        }}
      >
        <Typography variant="h4" my={2} color="initial">
          Visitores Querys
        </Typography>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          size="small"
          sx={{ fontSize: "15px", width: "150px" }}
        >
          <MenuItem value={"Applications"}>Applications</MenuItem>
          <MenuItem value={"DemoRequests"}>Demo Requests</MenuItem>
          <MenuItem value={"Querys"}>Querys</MenuItem>
        </Select>
        <Paper sx={{ width: "90%", fontSize:'15px' }}>
          <TableContainer sx={{ height: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontSize: 14 }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={`row.code${index}`}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{ fontSize: 12 }}
                            >
                              {value ? value : "-"}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            sx={{
              fontSize: "15px",
              "& .MuiToolbar-root": { fontSize: "15px" },
              "& .MuiTablePagination-selectLabel": { fontSize: "15px" },
              "& .MuiTablePagination-displayedRows": { fontSize: "15px" },
            }}
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
