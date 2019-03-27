const HW = document.getElementsByTagName('html')[0].clientWidth;

const Resizes = () => {
    // const HH = document.getElementsByTagName('html')[0].clientHeight;
    let ww = HW > 320 ? HW : 320;
    document.getElementsByTagName('html')[0].style.fontSize = ww / 1366 * 100 + 'px';
}

const GetHtmlWidth = () => {
    return HW;
}

module.exports = {
    Resizes, GetHtmlWidth
}