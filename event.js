//for jquery and event on the  html head
$(document).ready(function () {
    $(".click-me").click(function () {
        if ($(this).text()=== "more"){
            $(this).text("less")
        }else{
            $(this).text("more")
        };
        $(".des").toggle();

    });
});

$(document).ready(function () {
    $(".left-side").click($(".red").click(function () {
        $(".left-side").css("background-color", "red")
    }));
    $(".left-side").click($(".blue").click(function () {
        $(".left-side").css("background-color", "blue")
    }));
    $(".left-side").click($(".green").click(function () {
        $(".left-side").css("background-color", "green")
    }));
    $(".left-side").click($(".yellow").click(function () {
        $(".left-side").css("background-color", "yellow")
    }));
});