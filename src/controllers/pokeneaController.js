const pokeneaService = require('../services/pokeneasService');
const pokeneas = require('../models/pokeneasData');
const os = require('os');

exports.getBasicInfo = (req, res) => {
    const data = pokeneaService.getRandomPokenea();
    res.json(data);
};

exports.getImageAndPhrase = (req, res) => {
    const data = pokeneaService.getRandomImageAndPhrase();
    res.render('index', {
        name: data.name,
        image: data.image,
        phrase: data.phrase,
        containerId: data.containerId
    });
};

exports.getPokeneaById = (req, res) => {
    const id = parseInt(req.params.id);
    const pokenea = pokeneas.find(p => p.getId() === id);

    if (!pokenea) {
        return res.status(404).send('Pokenea not found');
    }

    res.render('pokeneas', {
        name: pokenea.getName(),
        image: pokenea.getImage(),
        phrase: pokenea.getPhrase(),
        containerId: os.hostname()
    });
};
