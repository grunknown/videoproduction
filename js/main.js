$(function(){
	/*Dropdown Menu*/
	$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
	/*End Dropdown Menu*/

	$('.tabs-btn').click(function () {
		$('.tabs-btn').removeClass('active');
		$(this).addClass('active');
	});

    $(".toggle-password").click(function() {
        $(this).toggleClass("eye-slash");
        var input = $(this).parents('.password-input').find('.footer__form-input');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $(".modal").each( function(){
        $(this).wrap('<div class="overlay"></div>')
    });

    $(".open-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;
        
        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).parents(".overlay").addClass("open");
        setTimeout( function(){
            $(modal).addClass("open");
        }, 350);
        
        $(document).on('click', function(e){
            var target = $(e.target);
            
            if ($(target).hasClass("overlay")){
                $(target).find(".modal").each( function(){
                    $(this).removeClass("open");
                });
                setTimeout( function(){
                    $(target).removeClass("open");
                }, 350);
            }
            
        });
        
    });

    $(".close-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;
        
        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).removeClass("open");
        setTimeout( function(){ 
            $(modal).parents(".overlay").removeClass("open");
        }, 350);
        
    });

});