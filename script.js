
import charData from "./Js/data.js";
import {Character} from "./Js/Character.js";


function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterhtml();
    document.getElementById("monster").innerHTML = orc.getCharacterhtml();
}

const wizard = new Character(charData.hero);
const orc = new Character(charData.monster);
render();
