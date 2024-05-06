 /*
 * === Play Audio ===
 * JS function to play audio files: letter sounds and word examples

 * --- playAudio() ---
 * playAudio() is a function that plays the audio files that takes one parameter which is the audio path.
 * inside the function, a new Audio object is created using the new keyword and passing audioPath as an argument.
 * the created Audio object - a built-in JS object that allows us to work with audio files - represents the audio we want to play.
 * after the Audio object is created, the play() method is called to play the audio represented by the Audio object.
 
 * === Further Details ===

 * --- play() method ---
 * The HTMLMediaElement play() method attempts to begin playback of the media.
 * It returns a Promise object (completion or failure of an asynchronous operation) and its resulting value.
 * The returned Promise is resolved when playback has been successfully started.

 * --- Audio() constructor ---
 * creates and returns a new HTMLAudioElement which can be attached to a document for the user to interact and/or to listen to.
 * a new HTMLAudioElement object, configured to be used for playing back the audio specified by the url.

 * --- new ---
 * the new operator lets developers create an instance of a user defined object or of one built-in object types that has a constructor function.
 */

function playAudio(audioPath) {
    let audio = new Audio(audioPath);
    audio.play();
}

 /*
 * === Select Letters via Keyboard ===

 * The code below was inspired by the "Make a JavaScript Drum Kit in Vanilla JS!" (https://www.youtube.com/watch?v=VuN8qwZoego) tutorial.
 * The idea is to select a group of letters that start with the same one. E.g.: G, Gw, Gh etc.
 * This should visually help the use to see these groups.
 * 
 * The code listens for when you press the key on a keyboard while the user is on the page.
 * When a key is pressed, the code checks if there any HTML element on the page represent that key.
 * Should the match has found, the colour of that letter will be changed to green and slightly increase in font size.
 * Once the key is released, the colour and the font will return to their default values.
 */

document.addEventListener('keydown', function(event) { // set event listener to the keydown event (for when the key is pressed)
    // on the keydown even execute the code inside the curly braces {} / the code below

    // get the key that is pressed
    const keyPressed = event.key;

    // get all elements with the same class name "key" and store them in the "keys" variable
    const keys = document.querySelectorAll('.key');

    // loop over each element in the keys variable
    keys.forEach(key => {

        // get the value of the "data-key" attribute from the current element (key)
        // the "data-key" attribute is used to identify which key on the keyboard corresponds to the HTML element
        const dataKey = key.getAttribute('data-key');

        // select the <kbd> element which represents the keyboard input inside the current key element
        const kbd = key.querySelector('kbd');

        // if the value of the "data-key" element matches the key that is pressed, apply the colour and font styles
        if (dataKey === keyPressed) {
            kbd.style.color = '#2d706c';
            kbd.style.fontSize = '2.5rem';
        }
    });
});


document.addEventListener('keyup', function(event) {

    // get all elements with the same class name "key" and store them in the "keys" variable
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {

        // select the <kbd> element which represents the keyboard input inside the current key element
        const kbd = key.querySelector('kbd');
        kbd.style.color = ''; // remove applied colour;
        kbd.style.fontSize = ''; // remove applied font size;
    });
});