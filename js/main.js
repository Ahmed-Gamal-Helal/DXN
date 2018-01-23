$(function(){
    'use strict';
    $(".co-products .products-content ul.nav-tabs li a, ul.navbar-nav li").click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
});