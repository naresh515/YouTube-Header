$(document).ready(function (e) {
    $("#form-search").click(function () {
        $(".form-2").fadeToggle();
    })
    $('#sidebar-btn').click(function () {
        $('#sidebar').toggleClass('visible');
    });
});