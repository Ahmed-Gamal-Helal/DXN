$(function(){
    'use strict';
    $(".co-products .products-content ul.nav-tabs li a").click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
});

// Animation
