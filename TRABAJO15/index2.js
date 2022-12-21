const express = require('express');
const app = express();
const port=300;


app.get('/', (req, res) => {
  const resultado = 1 + 1;
  res.send(`La suma de 1+1 es: ${resultado}. ¡Hola! Bienvenido a mi sitio.`);
});


app.listen(3000, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${port}/`);
  });