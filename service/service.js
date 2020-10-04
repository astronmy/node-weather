const axios = require('axios');

const getWeatherByCity = async(city) => {
    const key = "[RAPID_KEY_HERE]";

    const encodeUlr = encodeURI(city);

    const instance = axios.create({
        baseURL: "https://community-open-weather-map.p.rapidapi.com/weather",
        headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": key,
            "useQueryString": true,
        },
        params: {
            "q": encodeUlr,
            "units": "%22metric%22 or %22imperial%22",
        }
    });

    const response = await instance.get();
    if (!response.data) {
        throw new Error("No results found");
    }
    return response.data.main;

}

const getWeatherByCoords = async(latitude, longitude) => {
    const instance = axios.create({
        baseURL: "https://community-open-weather-map.p.rapidapi.com/weather",
        headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "b188e84bdamshbf9092b638282bbp149eaejsn71d8a1925963",
            "useQueryString": true,
        },
        params: {
            "lat": latitude,
            "lon": longitude,
            "units": "%22metric%22 or %22imperial%22",
        }
    });

    const response = await instance.get();
    if (!response.data) {
        throw new Error("No results found");
    }
    return response.data.main;

}
module.exports = {
    getWeatherByCity,
    getWeatherByCoords
}