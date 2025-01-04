let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Populate the voice options when voices are loaded
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    // Set the first voice by default
    speech.voice = voices[0];

    // Clear the current options
    voiceSelect.innerHTML = '';

    // Add each available voice to the select dropdown
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i); // Create an option element
        voiceSelect.appendChild(option); // Add option to the select element
    });
};

// Event listener for when a button is clicked
document.querySelector("button").addEventListener("click", () => {
    // Get the selected voice
    let selectedVoiceIndex = voiceSelect.value;
    speech.voice = voices[selectedVoiceIndex];

    // Set the text and start speaking
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
