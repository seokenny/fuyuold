$(document).ready(function(){

    $(".photo_gallery").addClass("active");
    
	$(".nav_home").on("click",function(){
		if($(".fuyu_store").hasClass("active")){
			$(".fuyu_store").stop().fadeOut("fast",function(){
				$(".photo_gallery").fadeIn("fast");
			});
			$(".fuyu_store").removeClass("active");
			$(".photo_gallery").addClass("active");
        }
		else if($(".menu_contain").hasClass("active")){
            $("#left_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({marginLeft:"50%",width:"50%"},500);
			$(".menu_contain").stop().fadeOut("fast",function(){
				$(".photo_gallery").fadeIn("fast");		
			});
			$(".menu_contain").removeClass("active");
			$(".photo_gallery").addClass("active");
		}
		else if($(".hours_location").hasClass("active")){
			$(".hours_location").stop().fadeOut("fast",function(){
				$(".photo_gallery").fadeIn("fast");		
			});
			$(".hours_location").removeClass("active");
			$(".photo_gallery").addClass("active");
		}
    });

	$(".nav_about").on("click",function(){
		if($(".photo_gallery").hasClass("active")){
			$(".photo_gallery").stop().fadeOut("fast",function(){
				$(".fuyu_store").fadeIn("fast");
			});
			$(".photo_gallery").removeClass("active");
			$(".fuyu_store").addClass("active");
		}
		else if($(".menu_contain").hasClass("active")){
            $("#left_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({marginLeft:"50%",width:"50%"},500);
			$(".menu_contain").stop().fadeOut("fast",function(){
				$(".fuyu_store").fadeIn("fast");		
			});
			$(".menu_contain").removeClass("active");
			$(".fuyu_store").addClass("active");
		}
		else if($(".hours_location").hasClass("active")){
			$(".hours_location").stop().fadeOut("fast",function(){
				$(".fuyu_store").fadeIn("fast");		
			});
			$(".hours_location").removeClass("active");
			$(".fuyu_store").addClass("active");
		}
    });

	$(".nav_menu").on("click",function(){
		if($(".fuyu_store").hasClass("active")){
			$(".fuyu_store").stop().fadeOut("fast",function(){
				$(".menu_contain").fadeIn("fast");
			});
			$(".fuyu_store").removeClass("active");
			$(".menu_contain").addClass("active");
		}
		else if($(".photo_gallery").hasClass("active")){
			$(".photo_gallery").stop().fadeOut("fast",function(){
				$(".menu_contain").fadeIn("fast");		
			});
			$(".photo_gallery").removeClass("active");
			$(".menu_contain").addClass("active");
		}
		else if($(".hours_location").hasClass("active")){
			$(".hours_location").stop().fadeOut("fast",function(){
				$(".menu_contain").fadeIn("fast");		
			});
			$(".hours_location").removeClass("active");
			$(".menu_contain").addClass("active");
		}
	});
	
	$(".nav_hours").on("click",function(){
		if($(".fuyu_store").hasClass("active")){
			$(".fuyu_store").stop().fadeOut("fast",function(){
				$(".hours_location").fadeIn("fast");
			});
			$(".fuyu_store").removeClass("active");
			$(".hours_location").addClass("active");
		}
		else if($(".photo_gallery").hasClass("active")){
			$(".photo_gallery").stop().fadeOut("fast",function(){
				$(".hours_location").fadeIn("fast");		
			});
			$(".photo_gallery").removeClass("active");
			$(".hours_location").addClass("active");
		}
		else if($(".menu_contain").hasClass("active")){
            $("#left_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({width:"50%"},500);
            $("#right_contain").stop().animate({marginLeft:"50%",width:"50%"},500);
			$(".menu_contain").stop().fadeOut("fast",function(){
				$(".hours_location").fadeIn("fast");		
			});
			$(".menu_contain").removeClass("active");
			$(".hours_location").addClass("active");
		}

    });
    

    $(".nav_menu").on("click",function(){
        $("#left_contain").stop().animate({width:"25%"},500);
        $("#right_contain").stop().animate({width:"75%"},500);
        $("#right_contain").stop().animate({marginLeft:"25%",width:"75%"},500);
    });
});