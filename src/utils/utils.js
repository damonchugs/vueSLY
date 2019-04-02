const HW = document.getElementsByTagName('html')[0].clientWidth;

// 页面重新调整跨度
const Resizes = () => {
    // const HH = document.getElementsByTagName('html')[0].clientHeight;
    let ww = HW > 320 ? HW : 320;
    document.getElementsByTagName('html')[0].style.fontSize = ww / 1366 * 100 + 'px';
}

// 获取页面宽度
const GetHtmlWidth = () => {
    return HW;
}

module.exports = {
    Resizes, GetHtmlWidth
}