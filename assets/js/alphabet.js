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