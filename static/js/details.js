import {COLOR_DICT}  from '../module/COLOR.js';
import {TONE_DICT} from '../module/TONE.js';

const tone = localStorage.getItem("tone");
const tone_saturation = `${tone}_saturation`;
const tone_lightness = `${tone}_lightness`;

const content = document.querySelector("content");

Object.keys(COLOR_DICT).forEach((COLOR) => {
    //create color div
    var color = document.createElement('div');
    color.style.backgroundColor = `hsl(${COLOR_DICT[COLOR]}, ${TONE_DICT[tone_saturation]}%, ${TONE_DICT[tone_lightness]}%)`;
    color.className = COLOR + " color";

    //create span : color name
    var colorName = document.createElement('span');
    colorName.innerHTML = COLOR;
    color.appendChild(colorName);

    //create span : copy
    var copySpan = document.createElement('span');
    copySpan.innerHTML = "COPY";
    color.appendChild(copySpan);

    content.appendChild(color);
});