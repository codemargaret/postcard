
$(document).ready(function(){
  $("#formOne").submit(function(event){
    var nameInput= $("input#name").val();
    var addressInput= $("input#address").val();
    var placeInput= $("input#place").val();
    var messageInput= $("input#message").val();
    var yourNameInput= $("input#yourName").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".place").text(placeInput);
    $(".message").text(messageInput);
    $(".yourName").text(yourNameInput);

    $(".postcard").show();
    $(".postcardback").show();

    event.preventDefault();
  });
});
