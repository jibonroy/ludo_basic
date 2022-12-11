var redDice = document.querySelector('#red-dice');
var blueDice = document.querySelector('#blue-dice');
var yellowDice = document.querySelector('#yellow-dice');
var greenDice = document.querySelector('#green-dice');

blueDice.style.display = 'none';
yellowDice.style.display = 'none';
greenDice.style.display = 'none';

// ==========================red Turn================================ //
redDice.style.display = 'inline-block';

redDice.addEventListener('click', function(){
    dice = Math.floor(Math.random()*6) + 1;

    var redDice = document.querySelector('#red-dice');
    var blueDice = document.querySelector('#blue-dice');

    var redLoc1 = document.querySelector('.red-loc-1');

    redDice.src = './src/dice'+dice+'.png';    

    if(dice==1||dice == 2||dice==3||dice==4||dice==5){
        redDice.style.display = 'none'
        blueDice.style.display = 'inline-block';
    } 
})
// ============================Blue Turn============================= //
blueDice.addEventListener('click', function(){
    dice = Math.floor(Math.random()*6) + 1;

    var blueDice = document.querySelector('#blue-dice');
    var yellowDice = document.querySelector('#yellow-dice');

    blueDice.src = './src/dice'+dice+'.png';    

    if(dice==1||dice == 2||dice==3||dice==4||dice==5){
        blueDice.style.display = 'none'
        yellowDice.style.display = 'inline-block';
    }
})

// ==========================yellow turn=========================== //
yellowDice.addEventListener('click', function(){
    dice = Math.floor(Math.random()*6) + 1;

    var yellowDice = document.querySelector('#yellow-dice');
    var greenDice = document.querySelector('#green-dice');

    yellowDice.src = './src/dice'+dice+'.png';    

    if(dice==1||dice == 2||dice==3||dice==4||dice==5){
        yellowDice.style.display = 'none'
        greenDice.style.display = 'inline-block';
    }
})

// ==========================green turn=========================== //
greenDice.addEventListener('click', function(){
    dice = Math.floor(Math.random()*6) + 1;

    var greenDice = document.querySelector('#green-dice');
    var redDice = document.querySelector('#red-dice');

    greenDice.src = './src/dice'+dice+'.png';    

    if(dice==1||dice == 2||dice==3||dice==4||dice==5){
        greenDice.style.display = 'none'
        redDice.style.display = 'inline-block';
    }
})

