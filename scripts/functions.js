

let lightMode = true

function turnMode() {
    document.documentElement.style.setProperty('--body-bg', lightMode ? 'black' : 'white');
    document.documentElement.style.setProperty('--body-color', lightMode ? 'white' : 'black');
    document.documentElement.style.setProperty('--image-invert', lightMode ? 1 : 0);
    lightMode = !lightMode
}