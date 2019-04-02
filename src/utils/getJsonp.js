//jsonp
const getJSONP = (url, data, param) => {
    if (!url) {
        console.error('缺少url参数!')
        return;
    }
    if(!param){
        param = 'jsonpCallback';
    }
    return new Promise((resolve, reject) => {
        window[param] = (result) => {
            resolve(result)
        }
        var JSONP = document.createElement("script");
        var datas = getDatas(data);
        var time = Number(new Date());
        JSONP.type = "text/javascript";
        JSONP.src = `${url}?jsonp=${param}&${datas}_s=${time}`;
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName("head")[0].removeChild(JSONP)
        }, 500)
    })
}

const getDatas = (data) => {
    if (data) {
        let d = '';
        for (let key in data) {
            d += key + '=' + data[key] + '&';
        }
        return d;
    } else {
        return false;
    }
}

export default getJSONP;

