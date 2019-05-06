$(document).ready(function(){

    $(".clickable").click(function(evt){
        $(this).children(".hide").toggle(1200);
        $(this).children("img").toggle(1200);
    });
});

function sendForm() {
    document.getElementById("myForm").style.display = "block";
    alert("");
    $('form').attr('action','new path');
}
