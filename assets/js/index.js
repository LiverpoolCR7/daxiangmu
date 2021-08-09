$(function () {
    getUserInfo()
    // if (!localStorage.getItem('token')) {
    //     location.href = '/login.html'
    // } else {
    //     getUserInfo()
    // }
})

function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem('token') || ''
        // },
        success: function (res) {
            if (res.status == 0) {
                renderAvater(res.data)
            }
        },
        // complete: function (res) {
        //     console.log(res);
        //     if (res.responseJSON.status == 1 && res.responseJSON.message == "身份认证失败！&&") {
        //         location.href = '/login.html'
        //         localStorage.removeItem('token')
        //     }
        // }


    })
}
function renderAvater(user) {
    if (user.user_pic != null) {
        $("text-avater").hide()
        $(".layui-nav-img").attr('src', user.user_pic).show()
    } else {
        var name = user.nickname || user.username
        var first = name[0].toUpperCase()
        $("#welcome").html("欢迎" + "  " + name)
        $(".text-avater").html(first)
    }
}
$(".tuichuBT").on('click', function () {
    // console.log("123")
    layer.confirm('确定退出吗?', { icon: 3, title: '提示' }, function (index) {
        localStorage.removeItem('token')
        location.replace('http://127.0.0.1:5500//login.html')
        //do something

        layer.close(index);
    });

})