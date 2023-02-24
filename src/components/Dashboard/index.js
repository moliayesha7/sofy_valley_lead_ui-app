import React,{useEffect} from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";     
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Checkbox from '@mui/material/Checkbox';
import Tooltip from "@mui/material/Tooltip"; 
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MultipleSelectChip from "../Forms/AdvancedElements/MultipleSelectChip";
import Button from '@mui/material/Button';
import BasicDatePicker from "../../components/Forms/AdvancedElements/BasicDatePicker";
import 'bootstrap/dist/css/bootstrap.min.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function InvoiceList(props) {

  const theme = useTheme();

  const { count, page, rowsPerPage, onPageChange } = props;
 
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

InvoiceList.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  name,
  phone,
  followup_date,
  note,
  lead_assignees_name,
  email,
  lead_preferred_countries_name,
  lead_status_color,
  source_name
) {
  return {
    name,
    phone,
    followup_date,
    note,
    lead_assignees_name,
    email,
    lead_preferred_countries_name,
    lead_status_color,
    source_name
  };
}

const rows = [
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
  createData(
    "Laptop Macos Pro",
    "14250",  
    "10 Jan 2023",
    "Work",
    "Jon",
    "10 Jan 2023",
    "wadedave@gmail.com",
    "Not Interest",
    "Facebook",
  ),
].sort((a, b) => (a.orderID < b.orderID ? -1 : 1));

export default function InvoiceLists() {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [item,setItem] = React.useState([]);
  const [assignee, setAssignee] =  React.useState([]);
  const [selectedAssignee, setSelectedAssignee] =  React.useState([]);

  
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          // borderRadius: "10px",
          p: "25px 25px 10px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignitems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
          }}
        >
          <Grid
            container
            rowSpacing={.5}
            columnSpacing={{ xs: .5, sm: .5, md: .5, lg: .5, xl:.5 }}
          >
            <Grid item xs={12} md={12} lg={4} xl={2}>
              <MultipleSelectChip value="Statuses"/>
            </Grid>

            <Grid item xs={12} md={12} lg={4} xl={2}>
              <MultipleSelectChip value="Sources"/>
            </Grid>

            <Grid item xs={12} md={12} lg={4} xl={2}>
              <MultipleSelectChip value="Assignees"/>
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={3}>         
              <BasicDatePicker/>                 
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={1.5}>
                <Button variant="outlined" size="medium" fullWidth  sx={{ mt: "5px", padding: '7px 8px' }}>
                  Filter
                </Button>
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={1.5} >
                <Button variant="outlined" size="medium" fullWidth sx={{ mt: "5px", padding: '7px 8px' }}>
                Reset Filter
                </Button>
            </Grid>
          </Grid>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table sx={{ width: "100%" }} aria-label="custom pagination table">
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                      <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                  Lead Name
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                  Phone
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                 Followup Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                  Last Note
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                  Assigned
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                  Preferred Coumtries
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                  Source
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "10px",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.orderID}>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      fontSize: "12px",
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                    }}
                  >
                    <Checkbox {...label} size="small" />

                 
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    {row.name}
                  </TableCell>

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                    }}
                  >
                     {row.phone}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    {row.followup_date}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    {row.note}
                  </TableCell>
 
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 500,
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "10px",
                      padding: "8px 10px",
                    }}
                  >
                    <span className={row.badgeClass}>
                      {row.lead_assignees_name}
                    </span>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                    }}
                  >
                     {row.email}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    {row.lead_preferred_countries_name}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    {row.lead_status_color}
                  </TableCell>
 
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 500,
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "10px",
                      padding: "8px 10px",
                    }}
                  >
                    <span className={row.badgeClass}>
                      {row.source_name}
                    </span>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                      }}
                    >
                      <Tooltip title="Delete" placement="top">
                        <IconButton
                          aria-label="remove"
                          size="small"
                          color="danger"
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="View" placement="top">
                        <IconButton
                          aria-label="view"
                          size="small"
                          color="info"
                        >
                          <RemoveRedEyeIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
  
                      <Tooltip title="Rename" placement="top">
                        <IconButton
                          aria-label="rename"
                          size="small"
                          color="primary"
                        >
                          <DriveFileRenameOutlineIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell
                    colSpan={7}
                    style={{ borderBottom: "1px solid #F7FAFF" }}
                  />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={8}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={InvoiceList}
                  style={{ borderBottom: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
