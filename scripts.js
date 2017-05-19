$(document).ready(function(){

    $(".nose").on("click", function(){
        $(".mouth").toggle("puff");
    })

    $(".circle").on("click", function(){
        $(".small-circle").toggle("blind");
    })

    $(".mouth").on("click", function(){
        $(".hair").toggle("explode");
        $(".nose").toggle("puff");
        $(".small-circle").toggle("slide");
        // $(".circle").toggle("fold");
        $(".top").toggle("explode");
        $(".top-teeth").toggle("blind");
        $(".bottom-teeth").toggle("blind", {"direction": "down"});
    })

})