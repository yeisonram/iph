
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/submit', (req, res) => {
    const pin = req.query.pin;
    // Aquí puedes agregar la lógica para guardar el PIN en un archivo JSON
    const data = { pin };
    const fs = require('fs');
    fs.writeFileSync('pins.json', JSON.stringify(data, null, 2));
    res.send('PIN recibido con éxito');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
