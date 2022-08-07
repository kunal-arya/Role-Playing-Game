import {getDiceRollArray} from "./utils.js";

function Character(data){
    Object.assign(this,data);
    this.getDiceHtml = () => getDiceRollArray(this.diceCounts).map( dice => `<div class="dice"> ${dice} </div>`).join('');

    this.getCharacterhtml = function(){
        const {elementId, name , avatar , health , diceCounts } = this;
        
        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src= ${avatar}  alt="hero Image" />
            <div class="health"> health: <span> ${health} </span></div>
            <div class="dice-container">
            ${this.getDiceHtml()}
            </div>
        </div>
        `
    }
}

export {Character};