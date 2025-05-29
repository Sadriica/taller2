const pokeneaService = require('../services/pokeneaService');

exports.getBasicInfo = (req, res) => {
    const data = pokeneaService.getRandomPokenea();
    res.json(data);
};

exports.getImageAndPhrase = (req, res) => {
    const data = pokeneaService.getRandomImageAndPhrase();
    res.send(`
        <html>
            <body style="text-align:center; font-family:sans-serif;">
                <h2>${data.phrase}</h2>
                <img src="${data.image}" alt="Pokenea" style="max-width:300px;">
                <p>Contenedor: ${data.containerId}</p>
            </body>
        </html>
    `);
};
