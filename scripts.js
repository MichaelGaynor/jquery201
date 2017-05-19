$(document).ready(function(){

    $(".top-teeth").toggle("blind");
    $(".bottom-teeth").toggle("blind", {"direction": "down"})

    $(".nose").on("click", function(){
        $(".hair").toggle("explode");
        $(".nose").toggle("puff");
        $(".small-circle").toggle("scale", {"percent": 1});
        // $(".circle").toggle("fold");
        $(".top").toggle("explode");
    })

    $(".circle").on("click", function(){
        $(".small-circle").toggle("scale", {"percent": 142});
    })

    $(".mouth").on("click", function(){
        $(".top-teeth").toggle("blind");
        $(".bottom-teeth").toggle("blind", {"direction": "down"});
    })
})