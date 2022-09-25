import {COLOR_DICT}  from '../module/COLOR.js';
import {DETAIL_COLOR_DICT}  from '../module/DETAILCOLOR.js';
import {TONE_DICT} from '../module/TONE.js';

const tone = localStorage.getItem("tone");
const tone_saturation = `${tone}_saturation`;
const tone_lightness = `${tone}_lightness`;

const content = document.querySelector("content");
const flash_message = document.querySelector(".flash-message");

function copyToClipboard(copyString) {
    var tempElem = document.createElement('textarea');
    tempElem.value = copyString;  
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);

    flash_message.querySelector('span').innerHTML = `${copyString} 가 복사되었습니다`;
    flash_message.querySelector('span').style.color = copyString;
}

var txtFLag = true;

Object.keys(DETAIL_COLOR_DICT).forEach((COLOR) => {
    //create color div
    var color = document.createElement('div');
    color.style.backgroundColor = `hsl(${DETAIL_COLOR_DICT[COLOR]}, ${TONE_DICT[tone_saturation]}%, ${TONE_DICT[tone_lightness]}%)`;
    color.className = COLOR + " color";

    //create span : copy
    var copySpan = document.createElement('span');
    copySpan.innerHTML = "COPY";
    copySpan.className = "copy-btn";
    copySpan.style.display = "none";
    color.appendChild(copySpan);

    color.addEventListener('mouseenter', (event) => {
        copySpan.style.display = "block";
    })
    color.addEventListener('mouseleave', (event) => {
        copySpan.style.display = "none";
    })

    color.addEventListener('click', (event) => {
        var colorCodes = event.target.parentNode.style.backgroundColor.substr(3).slice(1,-1).split(",");
        var rgbCode = "#";
        colorCodes.forEach((colorCode) => {
            rgbCode += parseInt(colorCode.trim()).toString(16).toUpperCase();
        });
        copyToClipboard(rgbCode);
        flash_message.style.display = "flex";
        flash_message.classList.add("flash-message-effect");

        setTimeout(() => {
            flash_message.style.display = "none";
        }, 1000)
    })

    //create span : color name
    if(txtFLag){
        var colorName = document.createElement('span');
        colorName.innerHTML = COLOR;
        colorName.className = "color-name";
        color.appendChild(colorName);
        txtFLag = false;
    } else {
        txtFLag = true;
    }
    content.appendChild(color);
});