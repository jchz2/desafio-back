const mongoose = require("mongoose");

//Aquí se guardan los datos encriptados
const schema = new mongoose.Schema({
  email: {
    type: String,
    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    minlength: 5,
    maxlength: 50,
    required: true,
  },
  password: {
    //encriptado
    type: String,
    required: true,
  },
});
//Exportando un valor = Modelo representado con una constante que inicia con mayus
module.exports = mongoose.model("users", schema);
