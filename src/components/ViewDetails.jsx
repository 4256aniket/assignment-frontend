import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

const ViewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100dvh",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" component="h1" style={{ marginBottom: "16px" }}>
        {data ? `${data.Brand} ${data.Model}` : "Loading..."}
      </Typography>
      {data && (
        <Card>
          <CardContent>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Brand
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.Brand}
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Model
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.Model}
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Acceleration (0-100 km/h)
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.AccelSec} seconds
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Top Speed
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.TopSpeed_KmH} km/h
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Range
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.Range_Km} km
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Efficiency
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.Efficiency_WhKm} Wh/km
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Fast Charge
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.FastCharge_KmH} km/h
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Rapid Charge
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.RapidCharge}
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Power Train
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.PowerTrain}
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Plug Type
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.PlugType}
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Body Style
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.BodyStyle}
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Segment
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.Segment}
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Seats
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.Seats}
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Price
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  €{parseInt(data.PriceEuro).toLocaleString()}
                </Typography>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="subtitle2" color="textSecondary">
                  Date
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {new Date(data.Date).toLocaleDateString()}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        style={{ marginTop: "5dvh" }}
      >
        Back to DataGrid
      </Button>
    </Container>
  );
};

export default ViewDetail;
