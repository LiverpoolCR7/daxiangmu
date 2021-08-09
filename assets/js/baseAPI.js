$.ajaxPrefilter(function (options) {

    if (options.url[1] == 'm') {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    options.complete = function (res) {
        console.log(res);
        if (res.responseJSON.status == 1 && res.responseJSON.message == "身份认证失败！") {
            location.replace('http://127.0.0.1:5500//login.html')
            // location.href = '/login.html'
            localStorage.removeItem('token')
        }
    }
})