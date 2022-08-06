

const hero = {
    elementId : "hero",
    name: "Wizard",
    avatar: "./images/wizard.png",
    health: 60,
    diceCounts : 3
}

const monster = {
    elementId : "monster",
    name: "Orc",
    avatar: "./images/orc.png",
    health: 10,
    diceCounts: 1
}

// to generate random dice possibilties
function getDiceRoll(diceCount) {
    return new Array(diceCount).fill(0).map( () => {
        return Math.floor(Math.random() * 6) + 1;
    })
}

function getDiceHtml(diceCount) {
    return getDiceRoll(diceCount).map( dice => {
        return `<div class="dice"> ${dice} </div>`
    }).join('');
}


// render the character on the page
function renderCharacter(data) {
    const {elementId, name , avatar , health , diceCounts } = data;
    document.getElementById(elementId).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src= ${avatar}  alt="hero Image" />
        <div class="health"> health: <span> ${health} </span></div>
        <div class="dice-container">
        ${getDiceHtml(diceCounts)}
        </div>
    </div>
    `
} 

renderCharacter(hero);
renderCharacter(monster)


