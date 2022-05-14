//---Navbar Sticky---
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//---Navbar Highlight---
$(document).ready(function(){

    $(window).on('scroll', function() {
        var bottom = $(window).height();
        if($(window).scrollTop()<=bottom){
            $('a').parent().removeClass('active');
        }
        else{
            $('.section').each(function() {
                if($(window).scrollTop() >= $(this).offset().top-50) {
                    var id = $(this).attr('id');
                    $('a').parent().removeClass('active');
                    $('a[href="#'+ id +'"]').parent().addClass('active');
                }
            });
        }
        
    });
  });
