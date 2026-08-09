# Weather Application

A React based weather application built to revise and practice core React concepts such as components, state management, props, and API integration.

## About

This project lets a user search for the current weather of any city, or fetch the weather for their current location using geolocation. The app fetches live data from the OpenWeatherMap API and displays temperature, humidity, and general weather conditions.

This was built as a practice project, not a major/production project, to strengthen React fundamentals.

## Features

- Search weather by city name
- Get weather for current location using the browser's geolocation
- Displays temperature, feels like temperature, min/max temperature, and humidity
- Weather card background image changes based on the current weather condition
- Error handling for invalid city names or location errors
- API key stored securely using environment variables

## Tech Stack

- React
- Vite
- Material UI (MUI)
- OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js installed on your system
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. Clone the repository

```
git clone https://github.com/Pankaj2004s/Weather-Application.git
```

2. Move into the project folder

```
cd Weather-Application
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file in the root directory and add your API key

```
VITE_WEATHER_API_KEY=your_api_key_here
```

5. Run the project

```
npm run dev
```

## Project Structure

```
src/
  SearchBox.jsx    - handles city search and geolocation input
  InfoBox.jsx       - displays the fetched weather details
  WeatherApp.jsx    - main component that connects SearchBox and InfoBox
  App.jsx           - root component
```