const argv = require('yargs')
    .command('city', "Consult the weather by city", {
        city: {
            alias: 'c',
            desc: 'Enter the city to consult, separating the acronym of the country by comma. For example: "Mendoza,ar"'
        }
    })
    .command('coords', "Consult the weather by coords", {
        latitude: {
            demand: true,
            alias: 'lat',
        },
        longitude: {
            desc: "Enter longitude",
            demand: true,
            alias: 'lng',
            desc: "Enter latitude",

        },
    })
    .command('location', "Consult the weather by the current location", {})
    .help()
    .argv;


module.exports = {
    argv
}