let speech = new SpeechSynthesisUtterance();
const playBtn = document.querySelector('button');

let voices = [];

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[5]
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
};

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value]
})

playBtn.addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})