const axios = require('axios');

const getClima = async(nombre ,lat, lng) => {
    const datos = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8180434e5406eca79735f3a54a1f7c8e`);
    if(datos.lenght === 0){
        throw new Error('No existen datos para', nombre);
    }
    const temp = datos.data.main.temp;
    //console.log(temp);
    return {temp};
    
};

module.exports = {
    getClima
}