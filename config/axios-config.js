/**
 * @param argv Variable de acceso al yargs para tener acceso a los comandos introducidos por consola
 */
const argv = require('./yargs').argv;

/**
 * @param setURL Contiene el valor formateado de la dirección ingresada desde consolas
 */
const setURL = encodeURI(argv.direccion);

/**
 * @param axios Isntancia la librería axios que trabaja con promesas, permitiendo el uso de sync y async
 */
const axios = require('axios');
const clima = require('./clima');
/**
 * 
 * @param {*} getLugar Funcion asincrona que si o si debe de recibir un parametro, en este caso la ciudad
 */
const getLugar = async (direccion = setURL) => {
    const instancia = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
        headers: { 'x-rapidapi-key': '1370e8188amsh272f9830180c2c2p15d1fbjsn4df4df28f688' }
    });
    /**
     * @param resp Funcion asincrona que permite estar cargando los datos
     */
    const resp = await instancia.get();
    if (resp.data.Results[0] === 0) {
        throw new Error(`No hay resultados para ${argv.direccion}`);
    }
    const datos = resp.data.Results[0];
    const ciudad = datos.name;
    const latitud = datos.lat;
    const longitud = datos.lon;

    const info = clima.getClima(ciudad, 19.280001, -99.830002)
        .then(console.log)
        .catch(err => console.log(err));
    //console.log(info);
    return {
        ciudad,
        latitud,
        longitud,
        info
    }
}

/**
 * Se exportan todos los modulos para ser usados desde otro archivo
 */
module.exports = {
    getLugar: getLugar
}