
import charData from "./Js/data.js";
import {Character} from "./Js/Character.js";
// to generate random dice possibilties
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map( () => {
        return Math.floor(Math.random() * 6) + 1;
    })
}



function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterhtml();
    document.getElementById("monster").innerHTML = orc.getCharacterhtml();
}

const wizard = new Character(charData.hero);
const orc = new Character(charData.monster);
render();
