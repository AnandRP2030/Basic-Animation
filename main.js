// hide , show & toggle

$(".hide-btn").on("click",function(){
    $("h1").hide();
});


$(".show-btn").on("click",function(){
    $("h1").show();
});

$(".toggle-btn").on("click",function(){
    $("h1").toggle();
})



// fadeOut , fadeIn , fadeToggle
$(".fade-out").on("click",function(){
    $("h1").fadeOut();
})

$(".fade-in").on("click",function(){
    $("h1").fadeIn();
})

$(".fade-toggle").on("click",function(){
    $("h1").fadeToggle();
})


// slideUp, slideDown, slideToggle

$(".slide-up").on("click",function(){
    $("h1").slideUp();
});

$(".slide-down").on("click",function(){
    $("h1").slideDown();
});

$(".slide-toggle").on("click",function(){
    $("h1").slideToggle();
})



// animation - (opacity,margin,fontSize)

$(".opacity-btn").on("click",function(){
    $("h1").animate({
        opacity:.5
    })
})

$(".opa-inc-btn").on("click",function(){
    $("h1").animate({
        opacity:100
    })
})

$(".change-margin").on("click",function(){
    $("h1").animate({
        margin:50
    })
})

$(".font-size-inc").on("click",function(){
    $("h1").animate({
        fontSize : 50
    })
})

$(".font-size-dec").on("click",function(){
    $("h1").animate({
        fontSize:"20px"
    })
})

$(".multiple-task").on("click",function(){
    $("h1").animate({
        marginLeft:"150px",
        marginRight:"200px",
        marginTop:"100px"
    }).slideToggle().fadeToggle().animate({
        opacity:.5
    })
})