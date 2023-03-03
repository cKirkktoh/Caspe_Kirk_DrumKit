// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!

console.log('music player script file');

let allAudio = document.querySelectorAll('audio')

window.addEventListener('keyup', findMatchingAudio);

function findMatchingAudio(event) {
    // event is what gets generated evry time the user does something in the browser.

    //in this case, the event is the keyup event - it has a lots of information about the event, including which key was pressed and the key code that identifies it.
    //debugger;
    // square brackets are an attribute selector -> element[attribute]
    //ex. input[type="text"]
    let audioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        targetDiv = document.querySelector(`div[data-key=${event.keyCode}]`);
    //rewind the audio clip and THEN play it (over and over and over again)

    // the operator tests for a negative condition (not true)
    // in this case, if there is NOT a matching audio clip (audioClip will be null) then exit the function and don't continue
    if (!audioClip) { return; }
    audioClip.currentTime = 0;
   // play the matching audio clip
   audioClip.play();

   targetDiv.classList.add('playing')
}

function resetDivs() {
    let currentDiv = document.querySelector(`div[data-key=${this.dataset.key}]`);

    currentDiv.classList.remove('playing');
}

allAudio.forEach(audio => audio.addEventListener(`ended`, resetDivs)); 
