
import charData from "./Js/data.js";
import {Character} from "./Js/Character.js";


function attack() {
    wizard.setDiceHtml();
    orc.setDiceHtml();
    orc.takeDamage(wizard.currentDiceScore);
    wizard.takeDamage(orc.currentDiceScore);
    render();
    if(wizard.dead || orc.dead) {
        endGame();
    }
}

function endGame() {
    const endMessage = (wizard.health === 0 && orc.health === 0) ?
        "No One Wins, both are dead" :
        (wizard.health > 0) ? "Wizard Wins" :
        "Orc wins";

    const endEmoji = (!wizard.dead) ? "🔮" : "☠️";

    document.querySelector("body").innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2> 
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
    `
}

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterhtml();
    document.getElementById("monster").innerHTML = orc.getCharacterhtml();
}

document.getElementById("attack-button").addEventListener("click",attack);
const wizard = new Character(charData.hero);
const orc = new Character(charData.monster);

render();
