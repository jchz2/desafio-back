//Importar el export del documento de modelo
const Users = require("./../models/users");
//const bcrypt = require('./../models/users')
const jwt = require("jsonwebtoken");

function signup(email, password) {
  //const passwordEncripted = await bcrypt.hash(password, 10)
  return Users.create({ email, password: passwordEncripted });
}

async function login(email, password) {
  // 1. verificar que el usuario exista en la base de datos
  // 2. Si existe, verificar que la contraseña proporcionada sea la misma que la que esta registrada.

  const userFound = await Users.findOne({ email });

  if (!userFound) throw new Error("Invalid data");

  const isPasswordValid = await bcrypt.compare(password, userFound.password);

  if (!isPaswordValid) throw new Error("Invalid data");

  const token = jwt.sign({ id: userFound._id }, process.env.JWT.SECRET);

  return token;
}

module.exports = {
  signup,
  login,
};
