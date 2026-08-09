import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  let info = {
    city: "Delhi",
    feelslike: 41,
    temp: 33,
    tempMin: 27.05,
    tempMax: 27.05,
    humidity: 46,
    weather: "haze",
  };

  return (
    <div className="InfoBox">
      <h1>WeatherInfo - {info.weather}</h1>

      <div className="cardContainer">
        <Card className="weatherCard">
          <CardMedia
            component="img"
            sx={{ height: 150, objectFit: "cover"}}
            image={INIT_URL}
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
