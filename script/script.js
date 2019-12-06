
  var swiper = new Swiper('.swiper-container', {
    
     centeredSlides: true,
     speed: 2500,
     autoplay: {
         delay: 2500,
         disableOnInteraction: false,
       },
     pagination: {
         el: '.swiper-pagination',
         clickable: true,
         dynamicBullets: true,
       },
   });


   $(function(){
    $('#funny-text1').funnyText({
        speed: 500,
		borderColor: 'black',
		activeColor: 'white',
		color: 'white',
		fontSize: '1em',
		direction: 'vertical'
    });


    $('#funny-text2').funnyText({
        speed: 500,
		borderColor: 'black',
		activeColor: 'white',
		color: 'white',
		fontSize: '1em',
		direction: 'vertical'
    });

    $('#funny-text3').funnyText({
        speed: 500,
		borderColor: 'black',
		activeColor: 'white',
		color: 'white',
		fontSize: '1em',
		direction: 'vertical'
    });



$('#card-one').mouseenter(function (){
  $(this).css({
    transform:" scale(1.1)",
    transition:" all 0.5s"
  })
  $('#card-two,#card-three').css({
    transform:" scale(0.85)",
    transition:" all 0.5s",
    opacity:"0.5",
    boxShadow:"none"
  })
})
$('#card-one').mouseleave(function(){
  $(this).css({
    transform:" scale(1)",
    transition:" all 0.5s"
  })
  $('#card-two,#card-three').css({
    transform:" scale(1)",
    transition:" all 0.5s",
    opacity:"1",
    boxShadow:" 0px 3px 6px rgba(0,0,0, 0.5)"
  })
});




$('#card-two').mouseenter(function (){
  $(this).css({
    transform:" scale(1.1)",
    transition:" all 0.5s"
  })
  $('#card-one,#card-three').css({
    transform:" scale(0.85)",
    transition:" all 0.5s",
    opacity:"0.5",
    boxShadow:"none"
  })
})
$('#card-two').mouseleave(function(){
  $(this).css({
    transform:" scale(1)",
    transition:" all 0.5s"
  })
  $('#card-one,#card-three').css({
    transform:" scale(1)",
    transition:" all 0.5s",
    opacity:"1",
    boxShadow:" 0px 3px 6px rgba(0,0,0, 0.5)"
  })
});




$('#card-three').mouseenter(function (){
  $(this).css({
    transform:" scale(1.1)",
    transition:" all 0.5s"
  })
  $('#card-one,#card-two').css({
    transform:" scale(0.85)",
    transition:" all 0.5s",
    opacity:"0.5",
    boxShadow:"none"
  })
})
$('#card-three').mouseleave(function(){
  $(this).css({
    transform:" scale(1)",
    transition:" all 0.5s"
  })
  $('#card-one,#card-two').css({
    transform:" scale(1)",
    transition:" all 0.5s",
    opacity:"1",
    boxShadow:" 0px 3px 6px rgba(0,0,0, 0.5)"
  })
});



 
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2000,
  speedAsDuration: true
});




  });






   var typed = new Typed('#front1', {
    strings: ["Krim Khalifa", "Front-Fnd Developer","From Alexandria"],
    typeSpeed: 90,
    loop:true
  });


  var typed = new Typed('#front2', {
    strings: ["Krim Khalifa", "Front-Fnd Developer","From Alexandria"],
    typeSpeed: 90,
    loop:true
  });



  var typed = new Typed('#front3', {
    strings: ["Krim Khalifa", "Front-Fnd Developer","From Alexandria"],
    typeSpeed: 90,
    loop:true
  });





