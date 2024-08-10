let speech = new SpeechSynthesisUtterance();
let voiceover = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voiceover = window.speechSynthesis.getVoices();
    speech.voice = voiceover[0];
    
    // Clear the select options before adding new ones
    voiceselect.innerHTML = '';

    voiceover.forEach((voice, i) => {
        // Create a new option element
        let option = new Option(voice.name, i);
        // Append the option to the select element
        voiceselect.add(option);
    });
};

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector(".texts").value;
    // Set the selected voice
    speech.voice = voiceover[voiceselect.value];
    window.speechSynthesis.speak(speech);
});
