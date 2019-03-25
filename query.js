$("ul").on("click", "li",  function(){

    $(this).toggleClass("done");
})

// deleting data
$("ul").on("click", "span", function (event) {        
    $(this).parent().fadeOut(200, function () {
        $(this).remove();
    });        
    event.stopPropagation();
})

// add data
$("input").on("keypress", function (event) {
    if(event.which === 13){
        let task = $("input").val();
        let str = 
        $("ul").append("<li> <span class='delete'><i class='fab fa-angellist'></i></span>" + task.toUpperCase() + "</li>");

    }
    console.log($("input").val())

})




// Código análogo
/*     if ($(this).css("color") == "rgb(0, 128, 0)") {

        $(this).css({
            color: "black",
            textDecoration:"none"         
    
        })
        
    }else{

        $(this).css({
            color: "green",
            textDecoration:"line-through"         
    
        })

    }
    console.log($(this).css("color"))
 */