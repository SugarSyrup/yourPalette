import {COLOR_DICT}  from '../module/COLOR.js';
import {TONE_DICT} from '../module/TONE.js';

const palettes = document.querySelectorAll(".palette");

Array.prototype.forEach.call(palettes, (palette) => {
    const tone = palette.getElementsByClassName("tone-name")[0].innerHTML;
    const tone_saturation = `${tone}_saturation`;
    const tone_lightness = `${tone}_lightness`;
    const colors = palette.getElementsByClassName("colors")[0];
    Object.keys(COLOR_DICT).forEach((COLOR) => {
        var color = document.createElement('div');
        color.style.backgroundColor = `hsl(${COLOR_DICT[COLOR]}, ${TONE_DICT[tone_saturation]}%, ${TONE_DICT[tone_lightness]}%)`;
        color.className = COLOR + " color";
        colors.appendChild(color);
    });
});

palettes.forEach((palette) => {
    palette.addEventListener('click', (event) => {
        localStorage.setItem("tone", palette.querySelector(".tone-name").innerHTML);
        location.href = "details.html";
    })
})
