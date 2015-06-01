/**
 * Created by changqi on 15/5/27.
 */

window.scrollTo(0, 0);
$(document).ready(function () {
    window.scrollTo(0, 0);
    $('#fullpage').fullpage({
        scrollingSpeed: 700,
        touchSensitivity: 15,
        resize: false,
        onLeave: function (index, nextIndex, direction) {

            console.log(index, nextIndex, direction);

        },
        afterLoad: function (anchorLink, index) {
            console.log("afterRender", anchorLink, index);
            $(".intro1-0")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 200
                    },
                    initialDelay: 500,
                    autoStart: false
                });

            $(".intro1-1")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 200
                    },
                    initialDelay: 1500,
                    autoStart: false
                });

            $(".intro1-2")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 200
                    },
                    initialDelay: 2500,
                    autoStart: false
                });

            $(".intro1-3")
                .textillate({
                    in: {
                        effect: 'fadeInDown',
                        delay: 200
                    },
                    initialDelay: 5000,
                    autoStart: false
                });
            $(".intro1-4")
                .textillate({
                    in: {
                        effect: 'fadeInDown',
                        delay: 100
                    },
                    initialDelay: 5000,
                    autoStart: false
                });
            $(".intro3-0")
                .on("inAnimationBegin.tlt", function () {
                    $(this).css({opacity: 1});
                })
                .textillate({
                    in: {
                        effect: 'wobble',
                        delay: 200
                    },
                    initialDelay: 2000,
                    autoStart: false
                });
            $(".intro7-0")
                .textillate({
                    in: {
                        effect: 'fadeInLeft',
                        delay: 200
                    },
                    initialDelay: 500,
                    autoStart: false
                });
            $(".intro7-1")
                .textillate({
                    in: {
                        effect: 'fadeInLeft',
                        delay: 200
                    },
                    initialDelay: 1500,
                    autoStart: false
                });

            //$(".intro8-0")
            //    .textillate({
            //        in: {
            //            effect: 'fadeIn',
            //            delay: 200
            //        },
            //        initialDelay: 500,
            //        autoStart: false
            //    });
            $(".intro8-1")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 500,
                    autoStart: false
                });
            $(".intro9-0")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 2500,
                    autoStart: false
                });
            //$(".intro10-0")
            //    .textillate({
            //        in: {
            //            effect: 'fadeIn',
            //            delay: 200
            //        },
            //        initialDelay: 500,
            //        autoStart: false
            //    });
            $(".intro10-1")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 500,
                    autoStart: false
                });
            $(".intro11-0")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 2500,
                    autoStart: false
                });

            $(".intro12-0")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 300,
                    autoStart: false
                });
            $(".intro12-1")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 1500,
                    autoStart: false
                });
            $(".intro12-2")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 2500,
                    autoStart: false
                });


            $(".intro12-3")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 3500,
                    autoStart: false
                });


            $(".intro13-1")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 1500,
                    autoStart: false
                });



            $(".intro14-0")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 0,
                    autoStart: false
                });

            $(".intro14-1")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 1500,
                    autoStart: false
                });

            $(".intro14-2")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 3000,
                    autoStart: false
                });



            $(".intro14-4")
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        delay: 150
                    },
                    initialDelay: 4500,
                    autoStart: false
                });


            window.scrollTo(0, 0);
            switch (index) {
                case 1:
                    $(".pic1").transition({
                        y: "-250px"
                    }, 100000, "linear");

                    $(".intro1-0")
                        .textillate('start');

                    $(".intro1-1")
                        .textillate('start');

                    $(".intro1-2")
                        .textillate('start');

                    $(".intro1-3")
                        .textillate('start');
                    $(".intro1-4")
                        .textillate('start');

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
                    var day = document.querySelector('.intro2-5');

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

                    setTimeout(function () {
                        oYear.update(2005);
                        oMonth.update(9)
                        oDay.update(11);
                    }, 0);

                    $(".intro3-0")
                        .textillate('start');

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
                        y: "-150px",
                        x: "100px"
                    }, 100000, "linear");

                    $(".intro5-0").transition({
                        opacity: 1,
                        delay: 1000
                    })


                    /*TODO:
                     $(".intro4-0,.intro5-0").transition({
                     y: "150px"
                     }, 30000, "linear");
                     */

                    break;
                case 4:
                    $(".pic4").transition({
                        y: "-350px",
                    }, 100000, "linear");

                    $(".intro7-0")
                        .textillate('start');
                    $(".intro7-1")
                        .textillate('start');
                    break;
                case 5:

                    $(".pic5").addClass("frame-move1");

                    //$(".intro8-0")
                    //    .textillate('start');
                    $(".intro8-1")
                        .textillate('start');
                    $(".intro9-0")
                        .textillate('start');
                    break;
                case 6:

                    $(".pic6").addClass("frame-move2");

                    //$(".intro10-0")
                    //    .textillate('start');
                    $(".intro10-1")
                        .textillate('start');
                    $(".intro11-0")
                        .textillate('start');
                    break;
                case 7:
                    $(".pic7").transition({
                        opacity:1,delay:1500
                    },1000,"linear");
                    $(".pic8").transition({
                        opacity:1,delay:2500
                    },1000,"linear");
                    $(".pic9").transition({
                        opacity:1,delay:3500
                    },1000,"linear");


                    $(".intro12-0")
                        .textillate('start');
                    $(".intro12-1")
                        .textillate('start');
                    $(".intro12-2")
                        .textillate('start');


                    $(".intro12-3")
                        .textillate('start');
                    break;

                case 8:

                    $(".pic10").addClass("frame-move1");
                    $(".pic10-container").transition({
                        opacity:1,delay:3500
                    },2500,"linear");

                    //$(".intro8-0")
                    //    .textillate('start');
                    $(".intro13-1")
                        .textillate('start');
                    break;

                case 9:
                    $(".intro14 span.inner,.line1").textillate('start');
                    $(".pic12").transition({
                        opacity:1,delay:4000
                    },2500,"linear");

                    $(".line1").transition({
                        opacity:1,delay:4000
                    },1000,"linear");

                    break;

            }


        }
    });
})