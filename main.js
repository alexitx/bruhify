const textRaw = document.getElementById('text-raw');
const textBruhified = document.getElementById('text-bruhified');
const fancyBruh = document.getElementById('fancy-bruh');
const copy = document.getElementById('copy');

textRaw.addEventListener('keyup', function() {
    bruhify();
});

textRaw.addEventListener('change', function() {
    bruhify();
});

fancyBruh.addEventListener('change', function() {
    bruhify();
});

copy.addEventListener('click', function() {
    textBruhified.select();
    document.execCommand('copy');
});

let bruhified;

function bruhify() {
    bruhified = textRaw.value.replace(new RegExp(/b|p/, 'gi'), '🅱️');

    if (fancyBruh.checked) {
        bruhified = bruhified.replace(new RegExp('🅱️ruh', 'gi'), '🅱️𝓻𝓾𝓱');
    }

    textBruhified.value = bruhified;
}
