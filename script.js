
import charData from "./Js/data.js";
import {Character} from "./Js/Character.js";


let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
    const newMosterData = charData[monstersArray.shift()];
    return newMosterData ? new Character(newMosterData) : {};
}

function attack() {
    wizard.setDiceHtml();
    monster.setDiceHtml();
    monster.takeDamage(wizard.currentDiceScore);
    wizard.takeDamage(monster.currentDiceScore);
    render();
    if(wizard.dead) {
        endGame();
    } else {
        if(monster.dead) {
            if(monstersArray.length > 0){
                monster = getNewMonster();
                render();
            } else {
                endGame();
            }
        }
    }
}

function endGame() {
    const endMessage = (wizard.health === 0 && monstersArray.length === 0) ?
        "No One Wins, both are dead" :
        (wizard.health > 0) ? "Wizard Wins" :
        "monsters win";

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
    document.getElementById("monster").innerHTML = monster.getCharacterhtml();
}

document.getElementById("attack-button").addEventListener("click",attack);
const wizard = new Character(charData.hero);
let monster = getNewMonster();

render();
