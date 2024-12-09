const model = require('../models/model');

function message(req, res) {
  res.send('Ambiente configurado');
}

function doubleValue(req, res) {
  const value = parseInt(req.params.value);
  if (isNaN(value)) {
    return res.status(400).send('O valor precisar ser um número');
  }
  const result = parseInt(model.doubleValue(value));
  res.send(`O dobro de ${value} é ${result}`);
}

module.exports = { message, doubleValue };