/**
 * Created by changqi on 15/5/27.
 */

window.scrollTo(0,0);
$(document).ready(function () {
    window.scrollTo(0,0);
    $('#fullpage').fullpage({
        scrollingSpeed: 700,
        touchSensitivity: 15,
        resize: false,
        onLeave: function (index, nextIndex, direction) {

            console.log(index, nextIndex, direction);

        },
        afterLoad: function (anchorLink, index) {
            console.log("afterRender", anchorLink, index);

            window.scrollTo(0,0);
            switch (index) {
                case 1:
                    $(".pic1").transition({
                        y: "-250px"
                    }, 100000, "linear");

                    $(".intro1-0")
                        .textillate({
                            in: {
                                effect: 'fadeIn',
                                delay: 200
                            },
                            initialDelay: 500
                        });

                    $(".intro1-1")
                        .textillate({
                            in: {
                                effect: 'fadeIn',
                                delay: 200
                            },
                            initialDelay: 1000
                        });

                    $(".intro1-2")
                        .textillate({
                            in: {
                                effect: 'fadeIn',
                                delay: 200
                            },
                            initialDelay: 2500
                        });

                    $(".intro1-3")
                        .textillate({
                            in: {
                                effect: 'fadeInDown',
                                delay: 100
                            },
                            initialDelay: 4000
                        });
                    $(".intro1-4")
                        .textillate({
                            in: {
                                effect: 'fadeInDown',
                                delay: 100
                            },
                            initialDelay: 4500
                        });

                    /*
                     $(".intro1-0")
                     .addClass("animated slideInDown")
                     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                     $(this).removeClass("animated slideInDown");
                     });

                     $(".intro1-1")
                     .addClass("animated slideInLeft")
                     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                     $(this).removeClass("animated slideInLeft");
                     });

                     $(".intro1-2")
                     .addClass("animated fadeInDown")
                     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                     $(this).removeClass("animated fadeInDown");
                     });
                     $(".intro3-0")
                     .addClass("animated rotateIn")
                     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                     $(this).removeClass("animated rotateIn");
                     });
                     $(".intro2-0")
                     .addClass("animated fadeInUp")
                     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                     $(this).removeClass("animated fadeInUp");
                     });
                     $(".intro2-1")
                     .addClass("animated slideInLeft")
                     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                     $(this).removeClass("animated slideInLeft");
                     });



                     $(".intro1-1")
                     .css({opacity: 0.1, top: "20px", left: "20px", fontSize: "24px"})
                     .transition({top: "50px", opacity: 1}, 2000,"ease");
                     $(".intro1-2")
                     .css({top: "100px", left: "-150px", fontSize: "45px", opacity: 0,fontWeight:"bold"})
                     .transition({left: "20px", delay: 500, opacity: 1}, 2000, "ease");
                     $(".intro1-3")
                     .css({top: "150px", left: "20px", fontSize: "24px", opacity: 0})
                     .transition({
                     opacity: 1,
                     perspective: "100px",
                     rotateY: "20deg",
                     fontSize: "26px",
                     delay: 2000
                     }, 1000, "ease");
                     $(".intro1-4")
                     .css({top: "150px", left: "120px", fontSize: "24px", opacity: 0})
                     .transition({
                     opacity: 1,
                     perspective: "100px",
                     rotateY: "-20deg",
                     fontSize: "26px",
                     delay: 2000
                     }, 1000, "ease");


                     $(".intro2-0")
                     .css({bottom: "50px", right: 0, left: 100, opacity: 0, fontSize: "20px"})
                     .transition({opacity: 1, fontSize: "22px", delay: 4000}, 300, "snap")
                     .transition({scale:1.1}, 200, "snap")
                     .transition({scale:1}, 400, "snap")
                     .transition({scale:1.1}, 200, "snap")
                     .transition({scale:1}, 400, "snap");
                     $(".intro2-1")
                     .css({left:0,bottom:"90px",opacity:0})
                     .transition({opacity:1, left:"100px",delay:4000},1500,"snap");

                     $(".intro3-0")
                     .css({width:0,height:0,left:"50%",top:"50%",marginTop:"-40px",marginLeft:"-100px",backgroundSize:"0px 0px"})
                     .transition({width:"200px",height:"150",rotate:"360deg",backgroundSize:"200px 150px",delay:3000},1000,"ease");
                     */
                    break;
                case 2:

                    $(".pic2").transition({
                        y: "250px",
                        x: "150px"
                    }, 100000, "linear");

                    $(".intro2,.intro2-7,.intro3-0").addClass("in").transition({
                        y: "-150px"
                    }, 300000, "linear");


                    var year = document.querySelector('.intro2-1');
                    var month = document.querySelector('.intro2-3');
                    var day =  document.querySelector('.intro2-5');

                    var oYear = new Odometer({
                        el: year,
                        value: "2015",
                        // Any option (other than auto and selector) can be passed in here
                        format: 'd',
                        theme: 'default'
                    });
                    var oMonth = new Odometer({
                        el: month,
                        value: "07",
                        // Any option (other than auto and selector) can be passed in here
                        format: 'd',
                        theme: 'default'
                    });
                    var oDay = new Odometer({
                        el: day,
                        value: "04",
                        // Any option (other than auto and selector) can be passed in here
                        format: 'd',
                        theme: 'default'
                    });

                    setTimeout(function(){
                        oYear.update(2005);
                        oMonth.update(9)
                        oDay.update(11);
                    },0);

                    $(".intro3-0")
                        .on("inAnimationBegin.tlt",function(){
                            $(this).css({opacity:1});
                        })
                        .textillate({
                            in: {
                                effect: 'wobble',
                                delay: 100
                            },
                            initialDelay: 2000
                        });

                    /*
                     $(".intro4-0")
                     .addClass("animated rubberBand")
                     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                     $(this).removeClass("animated rubberBand");
                     });
                     $(".intro4-1")
                     .addClass("animated flipInX")
                     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                     $(this).removeClass("animated flipInX hide");
                     });

                     var year = document.querySelector('.intro5-0');
                     var month = document.querySelector('.intro5-1');
                     var day =  document.querySelector('.intro5-2');

                     var oYear = new Odometer({
                     el: year,
                     value: 2015,
                     // Any option (other than auto and selector) can be passed in here
                     format: 'd',
                     theme: 'plaza'
                     });
                     var oMonth = new Odometer({
                     el: month,
                     value: 7,
                     // Any option (other than auto and selector) can be passed in here
                     format: 'd',
                     theme: 'plaza'
                     });
                     var oDay = new Odometer({
                     el: day,
                     value: 4,
                     // Any option (other than auto and selector) can be passed in here
                     format: 'd',
                     theme: 'plaza'
                     });

                     setTimeout(function(){

                     oYear.update(2005);
                     oMonth.update(9)
                     oDay.update(11);
                     })



                     $(".intro4-0")
                     .css({color:"#000",display:"block",opacity:0,backgroundColor:"#fff",top:"100px",left:"20px",width:"150px",height:"40px",lineHeight:"40px"})
                     .transition({opacity:0.7},1000);
                     $(".intro4-1")
                     .css({color:"#000",display:"block",opacity:0,backgroundColor:"#fff",top:"160px",left:"40px",width:"150px",height:"40px",lineHeight:"40px"})
                     .transition({opacity:0.7},1000);
                     $(".intro4-0 span,.intro4-1 span")
                     .css({opacity:0,fontSize:"22px",position:"relative"})
                     .transition({delay:500,opacity:.7},1000);
                     $(".intro4-2 i").each(function(index,dom){

                     $(dom)
                     .transition({delay:1200+index*100,scale:1.5},500)
                     .transition({scale:1},500)
                     })*/

                    break;
                case 3:

                    $(".pic3").transition({
                        y: "-250px",
                        x: "150px"
                    }, 100000, "linear");

                    $(".intro5-0").transition({
                        opacity:1,
                        delay:1000
                    })

                    $(".intro4-0,.intro5-0").transition({
                        y: "150px"
                    }, 300000, "linear");


                    break;
                case 4:
                    $(".pic4").transition({
                        y: "350px"
                    }, 100000, "linear");


                    $(".intro6-0,.intro7-0,.intro7-1").transition({
                        y: "-150px"
                    }, 300000, "linear");

                    break;
            }


        }
    });
})