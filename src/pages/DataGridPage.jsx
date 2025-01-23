import DataGrid from "../components/DataGrid";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

const API_URL = "http://localhost:3000/api";

export default function DataGridPage() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
 
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/get-all");
      //console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData, refresh]);
  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }
  return <DataGrid apiUrl={API_URL} data={data} refresh={setRefresh} />;
}
