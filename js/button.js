$(window).on("load", star);


function star() {
    console.log("star");

    $(".star_animation").addClass("fadein");
    $(".mail_animation").addClass("titelhide");
    $(".star_animation").on("animationend", mail);
}

function mail() {
    console.log("mail");

    $(".star_animation").off("animationend", mail);
    $(".star_animation").removeClass("fadein");
    $(".mail_animation").removeClass("titelhide");
    $(".mail_animation").addClass("fadein");

}
