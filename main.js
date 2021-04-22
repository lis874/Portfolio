// $(document).ready(function(){
//   var letters = $('#text').text();
//   var nHTML = '';
//   for(var letter of letters) {
//     nHTML+="<span class='x'>"+letter+"</span>";
//   }
//   $('#text').html(nHTML);
// })



$("#t1").html(
  $("#t1").text().split("").map(a => `<span class="x">${a}</span>`)
);

$("#t2").html(
  $("#t2").text().split("").map(a => `<span class="x">${a}</span>`)
);

$("#t3").html(
  $("#t3").text().split("").map(a => `<span class="x">${a}</span>`)
);

$("#t4").html(
  $("#t4").text().split("").map(a => `<span class="x">${a}</span>`)
);

$("#blue").html(
  $("#blue").text().split("").map(a => `<span class="x">${a}</span>`)
);




// $( "#a1").click(function() {
//   $( ".index" ).toggle( "slide", {direction: "left" });
// });

// $(window).scroll(function() {
//   if ( $(window).scrollTop() + $(window).height() == $(document).height() ) {
//     window.scrollTo(0, 0);
//   }
// });




