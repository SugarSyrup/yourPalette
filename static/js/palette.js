import * as COLOR  from '../module/COLOR.js';
import {TONE_DICT} from '../module/TONE.js';

const palettes = document.getElementsByClassName("palette");

Array.prototype.forEach.call(palettes, (palette) => {
    const tone = palette.getElementsByClassName("tone-name")[0].innerHTML;

    console.log(tone);
    console.log("SATURATION : " + TONE_DICT[`${tone}_saturation`]);
    console.log("LIGHTNESS : " + TONE_DICT[`${tone}_lightness`]);
});
