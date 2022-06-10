
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
let volume = document.getElementById('volume');
let userChoice = '';

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
    if (userChoice === 'up') {
        volume++;
    } else if (userChoice === 'down') {
        volume--;
    }
}

function volumeDisplay() {
    volume.value = volume;
}
