import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js";

class Character{
    constructor(data) {
        Object.assign(this,data);
        this.maxHealth = this.health;
        this.diceHtml = getDicePlaceholderHtml(this.diceCounts);
    }
    
    setDiceHtml(){
        this.currentDiceScore = getDiceRollArray(this.diceCounts);
        this.diceHtml = this.currentDiceScore
        .map((item) => `<div class="dice"> ${item} </div>`)
        .join("");
    };

    takeDamage(opponentDiceScore){
        let damage = opponentDiceScore.reduce((sum,item) => sum + item);
        this.health -= damage;
        if(this.health <= 0){
            this.dead = true;
            this.health = 0;
        }
    }

    gethealthbar(){
        let percent = getPercentage(this.maxHealth,this.health);
        console.log(percent);
       return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}"  style = "width: ${percent}%"> 
                    </div>
               </div> `
    }

    getCharacterhtml(){
        const { name , avatar , health , diceHtml } = this;
        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src= ${avatar}  alt="hero Image" />
            <div class="health"> health: <span class="b"> ${health} </span></div>
            ${this.gethealthbar()}
            <div class="dice-container">
            ${diceHtml}
            </div>
        </div>`
    }
}

export {Character};