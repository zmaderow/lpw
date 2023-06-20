

let lightMode = true

function turnMode() {
    document.querySelector('body').style.backgroundColor = lightMode ? 'black' : 'white';
    document.querySelector('body').style.color = lightMode ? 'white' : 'black';
    document.querySelector('.box').style.color = lightMode ? 'white' : 'black';
    document.querySelector('.mid .box').style.borderColor = lightMode ? 'white' : 'black';
    lightMode = !lightMode
}