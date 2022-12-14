function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map( () => {
        return Math.floor(Math.random() * 6) + 1;
    })
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map( () => {
        return `<div class="dice-placeholder"></div>`
    } ).join("");
}

let getPercentage = (max,change) => (change/max) * 100;

export {getDiceRollArray, getDicePlaceholderHtml,getPercentage};