class Pokenea {

    /**
     * POKENEA ATTRIBUTES
     * this._id - number - contains the Pokenea's unique identifier
     * this._name - string - contains the Pokenea's name
     * this._height - number - contains the Pokenea's height in meters
     * this._skill - string - contains the Pokenea's special skill
     * this._image - string - contains the Pokenea's image URL
     * this._phrase - string - contains the Pokenea's philosophical phrase
     */


    constructor(id, name, height, skill, image, phrase) {
        this._id = id;
        this._name = name;
        this._height = height;
        this._skill = skill;
        this._image = image;
        this._phrase = phrase;
    }

    getId() {
        return this._id;
    }

    setId(newId) {
        this._id = newId;
    }

    getName() {
        return this._name;
    }

    setName(newName) {
        this._name = newName;
    }

    getHeight() {
        return this._height;
    }

    setHeight(newHeight) {
        this._height = newHeight;
    }

    getSkill() {
        return this._skill;
    }

    setSkill(newSkill) {
        this._skill = newSkill;
    }

    getImage() {
        return this._image;
    }

    setImage(newImage) {
        this._image = newImage;
    }

    getPhrase() {
        return this._phrase;
    }

    setPhrase(newPhrase) {
        this._phrase = newPhrase;
    }
}

module.exports = Pokenea;
