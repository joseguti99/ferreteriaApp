import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TextField from "@mui/material/TextField";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import Prices from "../ListOfPrice/BERGER-03-06-2022 (1).json";

const PreciosBerger = () => {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [rows, setRows] = useState([]);
  const [items, setItems] = useState(Prices);
  const [percent, setPercent] = useState(72);
  const [resultsTable, setResultsTable] = useState(items)

  const addPercentage = (num) => {
    const percent = 80;
    const result = num + num * (percent / 100);
    return result;
  };

  const formatPrice = (price) => {
    const result = price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return result;
  };

  const handleSearch = (event) => {
    const search = event.target.value.toString().toLowerCase();

    if (search !== "") {
      const results = items.filter(
        (item) => 
        item.COD.toString().includes(search) ||
        item.DETALLE.toLowerCase().includes(search)
      );
      setResultsTable(results);
      setPage(0);
    } else {
      setResultsTable(items);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="container">
      <div className="row mt-3 justify-content-center">
        <h1 className="display-4 text-center my-2">Productos Activos</h1>
        <TableContainer component={Paper} className="bg-fondo-tabla">
          <div className="my-2 bg-white col-11 col-md-12 col-lg-12 py-2">
            <form>
              <input
                className="form-control col-10 col-md-11 col-lg-11"
                placeholder="Buscar por Codigo o Nombre"
                onChange={handleSearch}
              />
            </form>
          </div>
          <div className="text-end"></div>
          <Table
            sx={{ minWidth: 300 }}
            className="stickyHeader rounded bg-white mt-3"
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow className="bg-gray">
                <TableCell align="center" style={{ width: "10%" }}>
                  CODIGO
                </TableCell>
                <TableCell align="center" style={{ width: "50%" }}>
                  PRODUCTO
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  PRECIO DE COSTO
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  PRECIO DE VENTA
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultsTable.length
                ? resultsTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{data.COD}</TableCell>
                      <TableCell align="center">{data.DETALLE}</TableCell>
                      <TableCell align="center">
                        {formatPrice(data.PVENTA)}
                      </TableCell>
                      <TableCell align="center">
                        {formatPrice(addPercentage(data.PVENTA))}
                      </TableCell>
                    </TableRow>
                  ))
                : ""}
            </TableBody>
          </Table>
          <div className="d-flex-row align-items-center justify-content-center mb-5 bg-white">
            <TablePagination
              rowsPerPageOptions={[8, 10]}
              component="div"
              labelRowsPerPage="Filas por pagina"
              count={items.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </TableContainer>
      </div>
    </div>
  );
};

export default PreciosBerger;
