const button = document.querySelector('button');

const sentence = document.querySelector('#sentance');

const letter = document.querySelector('#letter');

const display = document.querySelector('h2')

button.addEventListener('click', function() {

    let str = sentance.value;

    let temp = letter.value;

    let n = str.indexOf(temp)

    if (n == -1) {

        display.textContent = 'The letter does not exist in the sentence'

    } else {

        let s = str.slice(n + 1, str.length)

        display.textContent = s;

    }

});