// menu菜单栏
let menuBotton = document.querySelector('.menu');
let menuBox = document.querySelector('.menu-box');
let closeBotton = document.querySelector('.close');
menuBotton.addEventListener('click', function() {
    menuBox.style.display = 'block';
})
closeBotton.addEventListener('click',function(){
    menuBox.style.display = 'none';
})

// nav
$("#nav a").on("click",function(){
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#nav .slide1").css({opacity:1,left:+position.left,width:width});
});
$("#nav a").on("mouseover",function(){
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#nav .slide2").css({opacity:1,left:+position.left,width:width}).addClass("squeeze");
});
$("#nav a").on("mouseout",function(){
    $("#nav .slide2").css({opacity:0}).removeClass("squeeze");
});
var currentWidth = $("#nav li:nth-of-type(3) a").parent("li").width();
var current = $("#nav li:nth-of-type(3) a").position();
$("#nav .slide1").css({left:+current.left, width:currentWidth});

// 视差滚动
const showBlocks = document.querySelectorAll('.showBlock');
gsap.registerPlugin(ScrollTrigger);
showBlocks.forEach(function(showBlock){
    gsap.fromTo(
        showBlock,
        {
            backgroundPositionY: `-${window.innerHeight / 2}px`,
        },
        {
            backgroundPositionY:`${window.innerHeight / 2}px`,
            ease:'none',
            scrollTrigger: {
                trigger: showBlock,
                scrub:true,
            }
        }
    )
})