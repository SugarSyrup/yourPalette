import {atom, selector} from 'recoil';

export interface IColorType {
    hue:number,
    saturation:number,
    lightness:number,
}

export const isDarkMode = atom<boolean>({
    key:"isDarkMode",
    default:false,
});

export const settingColors = atom<IColorType[]>({
    key:"settingColors",
    default : [],
})