const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        },
    })
    .help().argv;

/**
 * Se exportan los módulos que se desea sean usados desde otro archivo
 */
module.exports = {
    argv: argv
}