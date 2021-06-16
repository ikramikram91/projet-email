$("#count").text(""+$("h6").length+"")
$(".trash").on('click',event,function(){
    console.log('click detecter!');
   $(this).parent().remove()
   $("#count").text(""+$("h6").length+"")
}
    
);
// var para = $("p").text($("#add-message").val());
$("#btn-add").click(function(){
    var texte= $("#add-message").val()
    $('body').append(

        ` <div class="row">
        <img class="avatar" src="avatar-2.jpg">
        <div>
            <h6>Ikram</h6>
            <p>${texte}</p>           
        </div>
        <img class="trash" src="trash.png">

    </div>`)
    $('#add-message').val("")
   

    $("#count").text(""+$("h6").length+"")
})

$("#btn-search").click(function () {
    $("h6").each( function(){
        //  console.log($(this).text());
         if($(this).text() == $("#search-message").val()){
    $(this).parent().parent().show()
         }
         else{
             $(this).parent().parent().fadeOut()
         }
    }
    
    
    )
    })

