/**
 * @param axios Variable que tiene la configuración par ahacer la petición al servidor del clima
 */
const axios = require('./config/axios-config');

axios.getLugar()
    .then(reso => console.log(reso))
    .catch(err => console.log(err));