import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js";

function Character(data){
    Object.assign(this,data);

    this.maxHealth = this.health;
    this.diceHtml = getDicePlaceholderHtml(this.diceCounts);
    this.setDiceHtml = () => {
        this.currentDiceScore = getDiceRollArray(this.diceCounts);
        this.diceHtml = this.currentDiceScore
        .map((item) => `<div class="dice"> ${item} </div>`)
        .join("");
    };

    this.takeDamage = (opponentDiceScore) => {
        let damage = opponentDiceScore.reduce((sum,item) => sum + item);
        this.health -= damage;
        if(this.health <= 0){
            this.dead = true;
            this.health = 0;
        }
    }

    this.getCharacterhtml = function(){
        const { name , avatar , health , diceCounts, diceHtml } = this;
        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src= ${avatar}  alt="hero Image" />
            <div class="health"> health: <span> ${health} </span></div>
            <div class="dice-container">
            ${diceHtml}
            </div>
        </div>`
    }
}

export {Character};