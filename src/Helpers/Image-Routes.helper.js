const absolutePath = process.env.PUBLIC_URL + 'images/';

export const background = absolutePath + 'background.png';
export const logo_dark = absolutePath + 'logo_dark.png';
export const loader = absolutePath + 'loader.svg';
export const logo_light = absolutePath + 'logo_light.png';


export function imageUrl(image) {
    return process.env.PUBLIC_URL + '/assets/images/' + image;
}