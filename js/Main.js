
//评价
    $(document).ready(function () {
        $(".ea-item").hover(
            function () {$(this).addClass("ea-item-active");},
            function () {$(this).removeClass("ea-item-active")}
        )
    });

//焦点轮播
$(document).ready(function () {
    var anoe=$('.noe');
    var elist=$('.exposure1');
    $('.noe').click(function () {
        var i=$('.noe').index(this);
        $(elist[i]).fadeIn().siblings().fadeOut();
        $(this).addClass("act").parent().siblings().find("a").removeClass("act");
        clearInterval(timer);
        return false;
    });
    var _index = 0;
    function NextPlay() {
        if(_index>3){
            _index= 0;
            $(elist[_index]).fadeIn(1000).siblings().fadeOut(500);
            $(anoe[_index]).addClass("act").parent().siblings().find("a").removeClass("act")
        }else{
            $(elist[_index]).fadeIn(1000).siblings().fadeOut(500);
            $(anoe[_index]).addClass("act").parent().siblings().find("a").removeClass("act")
        }
        _index++
    }
    timer=setInterval(NextPlay,2500)
});

//中间轮播
$(document).ready(function () {
    function lf() {
        $("#starGoods").css("marginLeft","0px");
        $("#left").addClass("act2").siblings().removeClass("act2");
        return false
    }
    function rh() {
        $("#starGoods").css("marginLeft","-1232.5px");
        $("#right").addClass("act2").siblings().removeClass("act2");
        return false
    }
    //$("#left").click(lf);
    //$("#right").click(rh);
    $("#left").click(function () {
        clearInterval(timer2);
        lf();
        return lf()
    });
    $("#right").click(function () {
        clearInterval(timer2);
        rh();
        return rh()
    });

    var sladeA=$('.next');
    var slideIndex = 0;
    function slidePlay() {
        if(slideIndex==0){
            slideIndex = 1;
            rh();
            //$("#starGoods").css("marginLeft", "0px");
            //$("#left").addClass("act2").siblings().removeClass("act2");
            //return false
        }else if(slideIndex==1){
            slideIndex =0;
            lf();
            // $("#starGoods").css("marginLeft","-1232.5px");
            // $("#right").addClass("act2").siblings().removeClass("act2");
            //return false
        }
    }
    timer2 =setInterval(slidePlay,7000);
});

//侧边;
$(document).ready(function () {
    $(".category-item").hover(function () {
        $(this).children(".side-haid").toggle()
    })
});

//上面下拉菜单
$(document).ready(function () {
    var jlist=$(".Jnlist");
    $(".ItemHas").mouseenter(function () {
        $("#JnContainer").empty();
        var i =$(".ItemHas").index(this);
        $("#JnContainer").append(jlist[i]);
        $(".J_navMenu").stop(true, false).slideDown(150, jmenu());
    });
    var a = $(".ItemHas").mouseleave(function () {
        $(".J_navMenu").stop(true, false).slideUp(200);
    });
    function jmenu() {
        $(".J_navMenu").mouseenter(function () {
            $(".J_navMenu").stop(a, false, false);
        });
        $(".J_navMenu").mouseleave(function () {
            $(".J_navMenu").slideUp(200);
        })
    }
});


