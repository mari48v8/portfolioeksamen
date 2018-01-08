$(window).ready(function () {
    setTimeout(function () {
        $(".container_drop").click(function () {
            $(".container_drop").toggleClass("change");
            $(".dropdown").slideToggle();
        });
    });
});
