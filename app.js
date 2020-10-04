const argv = require("./config/yargs").argv;
const service = require("./service/service");
const colors = require("colors");

let command = argv._[0];

switch (command) {
    case 'city':
        service.getWeatherByCity(argv.city).then(result => {
            console.log("======= Temp de ".green + argv.city + " =======".green);
            console.log("Temperature:".green + " " + result.temp);
            console.log("Feels Like:".green + " " + result.feels_like);
            console.log("Min:".green + " " + result.temp_min);
            console.log("Max:".green + " " + result.temp_max);
            console.log("Humidity:".green + " " + result.humidity);
            console.log("====================================".green);
        }).catch(err => console.log(err));
        break;
    case 'coords':
        service.getWeatherByCoords(argv.latitude, argv.longitude).then(result => {
            console.log("======= Temp de ".green + argv.latitude + " " + argv.longitude + " =======".green);
            console.log("Temperature:".green + " " + result.temp);
            console.log("Feels Like:".green + " " + result.feels_like);
            console.log("Min:".green + " " + result.temp_min);
            console.log("Max:".green + " " + result.temp_max);
            console.log("Humidity:".green + " " + result.humidity);
            console.log("====================================".green);
        }).catch(err => console.log(err));
        break;
}