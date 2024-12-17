let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Update voices when available
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];  // Default to the first voice

    // Populate the voice selection dropdown
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// Change voice when the user selects a new one
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Play the text when the Play button is clicked
document.getElementById('playButton').addEventListener('click', () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// Pause the speech when the Pause button is clicked
document.getElementById('pauseButton').addEventListener('click', () => {
    window.speechSynthesis.pause();
});

// Resume the speech when the Resume button is clicked
document.getElementById('resumeButton').addEventListener('click', () => {
    window.speechSynthesis.resume();
});

// Stop the speech when the Stop button is clicked
document.getElementById('stopButton').addEventListener('click', () => {
    window.speechSynthesis.cancel();
});
