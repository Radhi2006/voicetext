if (! "webkitSpeechRecognition" in window) {
    alert("Speech Recognition Not Available")
}

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

let recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'id';

recognition.onError = () => {
    console.log('error...')
};

recognition.onresult = function (event) {
    console.log(event.results)

    
    let textResult = ''
    for (let i = 0; i < event.results.length; i++) {
        textResult += event.results[i][0].transcript
    }

    console.log(textResult)
    document.querySelector("#result").innerHTML = textResult
}


document.querySelector("#start").onclick = () => {
    // Start the speech recognition
    recognition.start();
};
//
document.querySelector("#stop").onclick = () => {
    recognition.stop();
};
