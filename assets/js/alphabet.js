/*
play() method
- The HTMLMediaElement play() method attempts to begin playback of the media.
- It returns a Promise object (completion or failure of an asynchronous operation) and its resulting value.
- The returned Promise is resolved when playback has been successfully started.

Audio() constructor
- creates and returns a new HTMLAudioElement which can be attached to a document for the user to interact and/or to listen to.
- a new HTMLAudioElement object, configured to be used for playing back the audio specified by the url.

new
- the new operator lets lets developers create an instance of a user defined object or of one built-in object types that has a constructor function.

playAudio()
- playAudio() is a function that plays the audio files that takes one parameter which is the audio path.
- inside the function, a new Audio object is created using the new keyword and passing audioPath as an argument.
- the created Audio object - a built-in JS object that allows us to work with audio files - represents the audio we want to play.
- after the Audio object is created, the play() method is called to play the audio represented by the Audio object.
*/ 

function playAudio(audioPath) {
    let audio = new Audio(audioPath);
    audio.play();
}

/*
- add an event listener to the keydown event on the document;
- when a key is pressed down, find any .key elements with a data-key attribute (keyboard key code values) matching the pressed key's code;
- if found,change the colour of the kbd element inside those .key elements to green;
- once the key is released, return to the original colour and font-size;

Source: https://www.oreilly.com/library/view/javascript-dhtml/9780596514082/apb.html
*/

document.addEventListener('keydown', function(event) {
    const keyPressed = event.keyCode;
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        const dataKey = parseInt(key.getAttribute('data-key'));
        const kbd = key.querySelector('kbd');

        if (dataKey === keyPressed) {
            kbd.style.color = '#2d706c';
            kbd.style.fontSize = '1.6rem';
        }
    });
});

document.addEventListener('keyup', function(event) {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        const kbd = key.querySelector('kbd');
        kbd.style.color = ''; // remove applied colour;
        kbd.style.fontSize = ''; // remove applied font size;
    });
});