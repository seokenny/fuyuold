$(document).ready(function(){

    $(".photo_gallery").addClass("active");
    $(".nav_home").on("click",function(){
        $(".fuyu_store").stop().fadeOut(500,function(){
            $(".photo_gallery").stop().fadeIn(500);
        });
        $(".menu_contain").stop().fadeOut(500,function(){
            $(".photo_gallery").stop().fadeIn(500);
        });
    });

    $(".nav_about").on("click",function(){
        $(".photo_gallery").stop().fadeOut(500,function(){
            $(".fuyu_store").stop().fadeIn(500);
        });
        $(".menu_contain").stop().fadeOut(500,function(){
            $(".fuyu_store").stop().fadeIn(500);
        });
    });
    $(".nav_menu").on("click",function(){
        $(".photo_gallery").stop().fadeOut(500,function(){
            $(".menu_contain").fadeIn(500);
        });
        $(".fuyu_store").stop().fadeOut(500,function(){
            $(".menu_contain").fadeIn(500);
        });
    });
});

$(".nav_home").on("click",function(){
    if($(".fuyu_store").hasClass("active")){
        $(".fuyu_store").stop().fadeOut("fast",function(){
            // $("#contact_contain").fadeOut("fast",function(){
            //     $("#about_contain").fadeIn("fast");
            // });			
            $(".photo_gallery").stop().fadeOut(500);
        });
        $(".fuyu_store").removeClass("active");
        $(".photo_gallery").addClass("active");
    }
    else if($(".menu_contain").hasClass("active")){
        $(".menu_contain").stop().fadeOut("fast",function(){
            $(".menu_contain").fadeOut("fast",function(){
                $(".photo_gallery").fadeIn("fast");
            });			
        });
        $(".menu_contain").removeClass("active");
        $(".photo_gallery").addClass("active");
    };
});

$(".nav_about").on("click",function(){
    if($(".photo_gallery").hasClass("active")){
        $(".photo_gallery").stop().fadeOut("fast",function(){
            // $("#contact_contain").fadeOut("fast",function(){
            //     $("#about_contain").fadeIn("fast");
            // });			
            $(".fuyu_store").stop().fadeOut(500);
        });
        $(".photo_gallery").removeClass("active");
        $(".fuyu_store").addClass("active");
    }
    else if($(".menu_contain").hasClass("active")){
        $(".menu_contain").stop().fadeOut("fast",function(){
            $(".menu_contain").fadeOut("fast",function(){
                $(".fuyu_store").fadeIn("fast");
            });			
        });
        $(".menu_contain").removeClass("active");
        $(".fuyu_store").addClass("active");
    };
});

$(".nav_menu").on("click",function(){
    if($(".photo_gallery").hasClass("active")){
        $(".photo_gallery").stop().fadeOut("fast",function(){
            // $("#contact_contain").fadeOut("fast",function(){
            //     $("#about_contain").fadeIn("fast");
            // });			
            $(".menu_gallery").stop().fadeOut(500);
        });
        $(".photo_gallery").removeClass("active");
        $(".menu_gallery").addClass("active");
    }
    else if($(".menu_contain").hasClass("active")){
        $(".menu_contain").stop().fadeOut("fast",function(){
            $(".menu_contain").fadeOut("fast",function(){
                $(".menu_gallery").fadeIn("fast");
            });			
        });
        $(".menu_contain").removeClass("active");
        $(".menu_gallery").addClass("active");
    };
});