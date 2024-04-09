const mic_btn = document.querySelector('#mic');
const playback = document.querySelector('.playback');

mic_btn.addEventListener('click', ToggleMic);

let can_record = false;
let is_recording = false;

let recorder = null;
let chunks = []; // store anything we record in segments of an array;

// create a function that will have access to all mics using media api;
function SetupAudio() {
    console.log("Setup");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { // checks if the media api is currently available;
        navigator.mediaDevices
            .getUserMedia({
                audio:true
            })
            .then(SetupStream)
            .catch(err => {
                console.error(err)
            });
    }
}

SetupAudio();

// create a function to make the recorder to record the audio

function SetupStream(stream) {
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = e => {
        chunks.push(e.data);
    }

    recorder.onstop = e => {
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus"});
        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        playback.src = audioURL;
    }
    can_record = true;
}