$(function () {
    $("#link-reg").on("click", function () {
        $(".login-box").hide();
        $(".reg-box").show();
    })
    $("#link-login").on("click", function () {
        $(".reg-box").hide();
        $(".login-box").show();
    })
    var form = layui.form;
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repwd: function (value) {
            var pwd = $('.reg-box [name=password]').val()
            if (value != pwd) {
                return ("确认密码错误")
            }
        }

    })
    $('#form_reg').on('submit', function (e) {
        e.preventDefault()
        $.post('/api/reguser', { username: $('#form_reg [name=username]').val(), password: $('#form_reg [name=password]').val() }, function (res) {
            if (res.status !== 0) {
                return console.log(res.message)
            }
            else { console.log('注册成功！') }
        })
    })
    $('#form_login').on('submit', function (e) {
        e.preventDefault()

        $.post('/api/login', { username: $('#form_login [name = username]').val(), password: $('#form_login [name = password]').val() }, function (res) {
            if (res.status !== 0) {
                return console.log(res.message)
            }
            else {
                localStorage.setItem('token', res.token)
                console.log(res)
                location.href = '/index.html'
            }
        })
    })
})

