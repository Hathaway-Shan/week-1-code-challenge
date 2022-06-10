
// state


// component
    // define and grab DOM elements
    // display functions
    // subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components


// page load actions

const downButton = document.getElementById('down-button');
const upButton = document.getElementById('up-button');
const volume = document.getElementById('volume');
let userChoice = '';
let volumeLevel = 10;

downButton.addEventListener('click', () => {
    userChoice = 'down';

    changeVolume();
    volumeDisplay();
});
upButton.addEventListener('click', () => {
    userChoice = 'up';

    changeVolume();
    volumeDisplay();
});



function changeVolume() {
    //changes display based on user inputs
    if (userChoice === 'up') {
        volumeLevel++;
    } else if (userChoice === 'down') {
        volumeLevel--;
    }
        //set limits at 0 and 20
    if (volumeLevel > 20) {
        volumeLevel = 20;
    }
    if (volumeLevel < 0) {
        volumeLevel = 0;
    }
}

function volumeDisplay() {
    volume.textContent = volumeLevel;
}