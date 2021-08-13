$(function () {
    var form = layui.form;

    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        samePwd: function (value) {
            if (value === $('[name = oldPwd]').val()) {
                return ('新的和旧的不能一致')
            }
        }
    })
    $('.layui-form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function (res) {
                console.log("res:");
                console.log(res);
                if (res.status != 0) {
                    return layui.layer.msg('更新失败！')
                }
                else {
                    layui.layer.msg('更新成功！')
                }
            },


        });
        $('.layui-form')[0].reset()

    })
})