var isPhoneDevice="ontouchstart"in document.documentElement;$(document).ready(function(){isPhoneDevice||(wow=new WOW({offset:50}),wow.init())}),function($){"use strict";$(window).scroll(function(){$("#mainNav").offset().top>100?$("#mainNav").addClass("navbar-shrink"):$("#mainNav").removeClass("navbar-shrink")}),$("body").scrollspy({target:"#mainNav",offset:68}),$("a.page-scroll").bind("click",function(a){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top-68},1250,"easeInOutExpo"),a.preventDefault()}),$(".navbar-collapse>ul>li>a, .navbar-brand").click(function(){$(".navbar-collapse").collapse("hide")}),$("button.navbar-toggler").click(function(){$(".navbar-collapse").toggleClass("collapse"),$(".navbar-toggler").toggleClass("clicked")}),$("body").on("input propertychange",".floating-label-form-group",function(a){$(this).toggleClass("floating-label-form-group-with-value",!!$(a.target).val())}).on("focus",".floating-label-form-group",function(){$(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){$(this).removeClass("floating-label-form-group-with-focus")}),$(".team-carousel").owlCarousel({items:3,navigation:!0,pagination:!1,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}),$(".testimonials-carousel, .mockup-carousel").owlCarousel({singleItem:!0,navigation:!0,pagination:!0,autoHeight:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],transitionStyle:"backSlide"}),$("header.video").vide({mp4:"https://cosmicjs.imgix.net/2c3b1420-8767-11e7-8b86-7db4f533bdd3-chicago-skyline-compressed.mp4",poster:"https://cosmicjs.imgix.net/43525180-6da1-11e7-a91e-510a8fff38c6-bg-mobile-fallback.png"},{posterType:"png"})}(jQuery);