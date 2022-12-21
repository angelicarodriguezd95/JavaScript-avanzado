const express = require('express');
const app = express();
const port=3001;


app.get('/', (req, res) => {
  const resultado = 1 + 1;
  res.send(`La suma de 1+1 es: ${resultado}. ¡Hola! Bienvenido a mi sitio.`);
});


app.listen(3001, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${port}/`);
  });
