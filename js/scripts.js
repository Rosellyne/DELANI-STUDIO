$(document).ready(function(){

    $(".clickable").click(function(evt){
        $(this).children(".hide").toggle(1200);
        $(this).children("img").toggle(1200);
    });

    $(".card").hover(function(event){
        $(".text").hide();
        $(this).children(".text").toggle();
    });
    $("button").click(function(event) {
        event.preventDefault();
        var dataName = $("#number1").val();
        alert(dataName + " we've received your message, thank you for getting in touch with us");
      });
    
});