/**
 * Responsible for handling logic to Pokenea selection and formatting.
 */

const pokeneas = require('../models/pokeneasData');
const os = require('os');

function getRandomPokenea() {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const pokenea = pokeneas[randomIndex];

    return {
        id: pokenea.getId(),
        name: pokenea.getName(),
        height: pokenea.getHeight(),
        skill: pokenea.getSkill(),
        containerId: os.hostname()
    };
}

function getRandomImageAndPhrase() {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const pokenea = pokeneas[randomIndex];

    return {
        image: pokenea.getImage(),
        phrase: pokenea.getPhrase(),
        containerId: os.hostname()
    };
}

module.exports = {
    getRandomPokenea,
    getRandomImageAndPhrase
};
