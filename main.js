// $(document).ready(function(){
//   var letters = $('.des').text();
//   var nHTML = '';
//   for(var letter of letters) {
//     nHTML+="<span class='x'>"+letter+"</span>";
//   }
//   $('.des').html(nHTML);
// })

// $("#augen").hover(function(){
//   $("#a1").css("opacity", 1);
//   }, function(){
//   $("#a1").css("opacity", 0);
// });

// $("#augen").hover(function(){
//   $("#a1").css("opacity", 1);
//   }, function(){
//   $("#a1").css("opacity", 0);
// });


$("#text").html(
  $("#text").text().split("").map(a => `<span class="x">${a}</span>`)
);
$(".header").html(
  $(".header").text().split("").map(a => `<span class="x">${a}</span>`)
);

// $( "#a1").click(function() {
//   $( ".index" ).toggle( "slide", {direction: "left" });
// });

// $(window).scroll(function() {
//   if ( $(window).scrollTop() + $(window).height() == $(document).height() ) {
//     window.scrollTo(0, 0);
//   }
// });




