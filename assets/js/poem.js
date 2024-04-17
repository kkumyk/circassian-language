
/*
 * === Play Poem and Highlight Text / Reset Audio and Remove Highlighting ===
 */

let swallowPoem = document.getElementById("swallowPoem"); // get the audio HTML element by its ID
let isPlaying = false;      // set the default audio playing state to false == not playing
let timeoutIDs = [];        // set an array to store timeout IDs
const originalColours = {}; // set an object to store default colours

/*
 * --- Toggle Play ---
 */

function togglePlay() {
    if (isPlaying) {         // on click check if audio is playing
        swallowPoem.pause(); // if it is playing, then pause the audio and
        clearTimeouts();     // clear existing timeouts when pausing by calling the clearTimeouts() function
    } else {
        swallowPoem.play();
        const lineIDs = {
            // Пцӏащхъуэ цӏыкӏу.
            "line1-1": 1.6,
            "line1-2": 2,
            "line1-3": 2.5,
            "line1-4": 2.7,
            // Pts’aśxwä ts’y2kw’.
            "line2-1": 4.5,
            "line2-2": 5,
            "line2-3": 5.5,
            "line2-4": 5.6,
            // Гъатхэр къосри, удзхэр къокӀ.
            "line3-1": 7.6,
            "line3-2": 7.9,
            "line3-3": 8.6,
            "line3-4": 9,
            "line3-5": 9.7,
            "line3-6": 10,
            "line3-7": 10.7,
            "line3-8": 11,
            // Ghatkhär q’osri, wdzkhär q’ok’.
            "line4-1": 13.4,
            "line4-2": 13.7,
            "line4-3": 14.4,
            "line4-4": 14.9,
            "line4-5": 15.5,
            "line4-6": 15.9,
            "line4-7": 16.2,
            "line4-8": 16.6,
            // ПцӀащхъуэ цӀыкӀухэр къолъэтэж.
            "line5-1": 18.5,
            "line5-2": 18.9,
            "line5-3": 19.4,
            "line5-4": 19.9,
            "line5-5": 20.9,
            "line5-6": 21.2,
            "line5-7": 21.5,
            // Pts’aśxwä ts’y2kw’khär q’olhätäzh.
            "line6-1": 23.9,
            "line6-2": 24.4,
            "line6-3": 24.6,
            "line6-4": 25.1,
            "line6-5": 25.5,
            "line6-6": 26.1,
            "line6-7": 26.2,
            // ПцӀащхъуэ цӀыкӀухэр къытхуогуфӀэ,
            "line7-1": 28.5,
            "line7-2": 29.4,
            "line7-3": 30.2,
            "line7-4": 30.7,
            "line7-5": 31.5,
            "line7-6": 31.9,
            "line7-7": 32.0,
            "line7-8": 32.5,
            // Pts’aśxwä ts’y2kw’khär q’y2tkhwogwf’ä,
            "line8-1": 34.0,
            "line8-2": 34.8,
            "line8-3": 35.0,
            "line8-4": 35.7,
            "line8-5": 36.1,
            "line8-6": 36.5,
            "line8-7": 37.2,
            "line8-8": 73.7

            // ПыгуфӀыкӀхэу къытхуосыж.

            // Py2gwf’y2k’khäw q’y2tkhwosy2zh.

            // ПцӀащхъуэ цӀыкӀуу зи бзэр дахэ,

            // Pts’aśxwä ts’y2kw’w zi bzär dakhä,

            // Хугу уэстынщи, уэрэд жыӀэ.

            // Khwgw wästy2nśi, wäräd zhy2ä.

            // ЩӀыпӀэ жыжьэм щыплъэгъуахэр

            // Ś’y2p’ä zhy2źäm śy2plhäghwakhär

            // Пэжагъ хэлъу къыджеӀэж.

            // Päzhagh khälhw q’y2dzhe’äzh.

        };
        // loop over lineIDs object
        Object.entries(lineIDs).forEach(([linePartId, seconds]) => {
            const linePart = document.getElementById(linePartId);
            // get and store the original colour linePart in the originalColours object
            originalColours[linePartId] = linePart.style.color;

            // store timeoutId (a positive integer) created by the setTimeout() - a method that sets a timer
            // an anonymous function / a callback function is defined inside the setTimeout function to execute a code after a delay
            const timeoutID = setTimeout(function() { 
                linePart.style.color = "#2d706c"; // apply green colour to the current linePart after specified delay in milliseconds
            }, (seconds - swallowPoem.currentTime) * 1000); // calculate remaining time - the delay after which the green should be applied

            timeoutIDs.push(timeoutID); // push (store) timeoutID into the timeoutIDs array
        });
    }
    isPlaying = !isPlaying; // toggle isPlaying
}

// clear any existing timeouts when the audio is paused and create new timeouts when the audio is resumed
function clearTimeouts() {
    // clear all stored timeouts
    timeoutIDs.forEach(id => {
        clearTimeout(id); // a built-in function to cancel a timeout previously set by calling setTimeout() function
    });
    timeoutIDs = []; // clear the timeoutIDs array
}

swallowPoem.onplaying = function() {
    isPlaying = true;
};

swallowPoem.onpause = function() {
    isPlaying = false;
};

/*
 * --- Reset Audio ---
 */

function resetAudio() {
    swallowPoem.pause();
    swallowPoem.currentTime = 0;
    isPlaying = false;
    clearTimeouts(); // clear existing timeouts

    // restore original text colours
    Object.entries(originalColours).forEach(([linePartId, color]) => {
        document.getElementById(linePartId).style.color = ""; // restore the default text colour
    });
}


/*
 * === Read and Record a Poem ===
 */

const mic_btn = document.querySelector('#mic');
const playback = document.querySelector('.playback');

mic_btn.addEventListener('click', ToggleMic);

let can_record = false;
let is_recording = false;

let recorder = null;
let chunks = []; // store anything we record in segments of an array;

// get access to user's mics using media api;
function SetupAudio() {
    console.log("Setup");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { // checks if the media api is currently available;
        navigator.mediaDevices
            .getUserMedia({
                audio: true
            })
            .then(SetupStream)
            .catch(err => {
                console.error(err)
            });
    }
}

SetupAudio();

// record the audio
function SetupStream(stream) {
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = e => {
        chunks.push(e.data);
    }

    recorder.onstop = e => {
        const blob = new Blob(chunks, {
            type: "audio/ogg; codecs=opus"
        });
        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        playback.src = audioURL;
    }
    can_record = true;
}

// start recording
function ToggleMic() {
    if (!can_record) return;

    is_recording = !is_recording;

    if (is_recording) {
        recorder.start(); // this will make the recorder listening to our stream of data;
        mic_btn.classList.add("is-recording");
    } else {
        recorder.stop();
        mic_btn.classList.remove("is-recording");
    }

}