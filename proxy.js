const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 4000;

// Ruta para redirigir solicitudes a la API de noticias
app.get('/api/news', async (req, res) => {
  try {
    const apiKey = 'd766bc99f3834102b779f9296aabaf73';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener noticias' });
  }
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor proxy en funcionamiento en el puerto ${port}`);
});
