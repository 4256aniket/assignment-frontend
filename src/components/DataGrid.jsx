import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import axios from "axios";
import { MenuItem, Select, TextField, Button } from "@mui/material";

ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz.withParams({
  spacing: 2,
  foregroundColor: "rgb(14, 68, 145)",
  backgroundColor: "rgb(241, 247, 255)",
  headerBackgroundColor: "rgb(228, 237, 250)",
  rowHoverColor: "rgb(216, 226, 255)",
});

const DataGrid = ({ apiUrl, data, refresh }) => {
  const [rowData, setRowData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterColumn, setFilterColumn] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const navigate = useNavigate();

  const columnDefs = [
    ...Object.keys(data[0])
      .map((key) => ({
        headerName: key.replace(/_/g, " "),
        field: key,
      }))
      .slice(1),
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: (params) => (
        <div>
          <Button
            onClick={() => viewDetails(params.data)}
            variant="outlined"
            size="small"
            style={{ marginRight: "10px" }}
          >
            View
          </Button>
          <Button
            onClick={() => deleteRow(params.data)}
            variant="outlined"
            color="error"
            size="small"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const viewDetails = (data) => {
    navigate(`/view/${data._id}`);
  };

  const deleteRow = async (data) => {
    alert(`Delete row with \nBrand: ${data.Brand}\nModel: ${data.Model}`);
    try {
      await axios.delete(`${apiUrl}/delete/${data._id}`);
      refresh((prev) => !prev);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${apiUrl}/search?query=${searchQuery}`);
      setRowData(response.data);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  };

  const handleFilter = async () => {
    if (!filterColumn || !filterCriteria) {
      alert("Please select both a column and criteria!");
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/filter`, {
        column: filterColumn,
        criteria: filterCriteria,
        value: filterValue,
      });
      setRowData(response.data);
    } catch (error) {
      console.error("Error filtering data:", error);
    }
  };

  useEffect(() => {
    setRowData(data);
  }, [data]);

  return (
    <div style={{ height: "85vh", padding: "2rem" }}>
      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </div>

      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
        <Select
          value={filterColumn}
          onChange={(e) => setFilterColumn(e.target.value)}
          displayEmpty
          size="small"
        >
          <MenuItem value="">Select Column</MenuItem>
          {Object.keys(data[0])
            .map((key) => {
              return (
                <MenuItem key={key} value={key}>
                  {key.replace(/_/g, " ")}
                </MenuItem>
              );
            })
            .slice(1)}
        </Select>

        <Select
          value={filterCriteria}
          onChange={(e) => setFilterCriteria(e.target.value)}
          displayEmpty
          size="small"
        >
          <MenuItem value="">Select Criteria</MenuItem>
          <MenuItem value="contains">Contains</MenuItem>
          <MenuItem value="equals">Equals</MenuItem>
          <MenuItem value="starts with">Starts With</MenuItem>
          <MenuItem value="ends with">Ends With</MenuItem>
          <MenuItem value="is empty">Is Empty</MenuItem>
        </Select>

        <TextField
          label="Value"
          variant="outlined"
          size="small"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          disabled={filterCriteria === "is empty"}
        />

        <Button variant="contained" onClick={handleFilter}>
          Filter
        </Button>
      </div>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination
        theme={myTheme}
        rowHeight={35}
      />
    </div>
  );
};

export default DataGrid;
