import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=is&k=20&c=sEtg3kiGcREzfi0k_FWwv81Edp9sEs18NtNPJltDLBY=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card className="weatherCard">
          <CardMedia
            component="img"
            sx={{ height: 150, objectFit: "cover" }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            alt="Weather"
          />
          <CardContent className="weatherContent">
            <Typography variant="h4" component="div">
              {info.city}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Temperature = {info.temp}°C
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Humidity = {info.humidity}%
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Max Temp = {info.tempMax}°C
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Min Temp = {info.tempMin}°C
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", marginTop: 1 }}
            >
              The weather can be described as <b>{info.weather}</b> and feels
              like <b>{info.feelslike}°C</b>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
