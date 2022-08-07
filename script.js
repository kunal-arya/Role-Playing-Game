
const charData = {
    hero: {
        name: "Wizard",
        avatar: "./images/wizard.png",
        health: 60,
        diceCounts : 3
    },
    monster: {
        name: "Orc",
        avatar: "./images/orc.png",
        health: 10,
        diceCounts: 1
    }
}

// to generate random dice possibilties
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map( () => {
        return Math.floor(Math.random() * 6) + 1;
    })
}

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

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterhtml();
    document.getElementById("monster").innerHTML = orc.getCharacterhtml();
}

const wizard = new Character(charData.hero);
const orc = new Character(charData.monster);
render();
