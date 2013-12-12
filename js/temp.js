/**
 * Created with IntelliJ IDEA.
 * User: Nikhil
 * Date: 12/11/13
 * Time: 5:49 PM
 * To change this template use File | Settings | File Templates.
 */

// Using for Smooth Scrolling
$(document).ready(function()
{
    setScreenWidth();
    stickyNavbar();
    SmoothScrolling();

});


function setScreenWidth(){
    $('.screenwidth').css({'width':screen.width});
}


//--------------------------------sticky navbar start--------------------------------------
function stickyNavbar()
{
    var stickyNavTop = $('.navbar').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

}
//--------------------------------sticky navbar end--------------------------------------
//----------------------------- smooth scroll start--------------------------------------
function SmoothScrolling(){

    function filterPath(string) {
        return string
            .replace(/^\//,'')
            .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
            .replace(/\/$/,'');
    }
    var locationPath = filterPath(location.pathname);
    var scrollElem = scrollableElement('html', 'body');

    $('a[href*=#]').each(function() {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (  locationPath == thisPath
            && (location.hostname == this.hostname || !this.hostname)
            && this.hash.replace(/#/,'') ) {
            var $target = $(this.hash), target = this.hash;
            if (target) {
                var targetOffset = $target.offset().top;
                $(this).click(function(event) {
                    event.preventDefault();
                    $(scrollElem).animate({scrollTop: targetOffset}, 900, function() {
                        location.hash = target;
                    });
                });
            }
        }
    });

    // use the first element that is "scrollable"
    function scrollableElement(els) {
        for (var i = 0, argLength = arguments.length; i <argLength; i++) {
            var el = arguments[i],
                $scrollElement = $(el);
            if ($scrollElement.scrollTop()> 0) {
                return el;
            } else {
                $scrollElement.scrollTop(1);
                var isScrollable = $scrollElement.scrollTop()> 0;
                $scrollElement.scrollTop(0);
                if (isScrollable) {
                    return el;
                }
            }
        }
        return [];
    }

};
//----------------------------- smooth scroll end--------------------------------------
