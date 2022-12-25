$(window).on('resize', function(){
    initFullSlider();        
});

var mySwiperMobile, mySwiperBig;

function initFullSlider() {
    var e = document.querySelectorAll(".full-slide-item__image"), 
        a = document.querySelectorAll(".full-slider")[0].dataset.dispimgpath, 
        t = [],
        tMobile = [];
        
    for (var i = 0; i < e.length; i++) {
        var l = e[i];
        t.push(l.getAttribute("src"))
        tMobile.push(l.getAttribute("data-mobile"))
    }
    
    var screenWidth = $(window).width();
    if(screenWidth > 992) { 
        if(typeof mySwiperBig == 'undefined'){
            mySwiperBig = new CanvasFullSlider({
                container: "full-slider-items__image",
                sprites: t,
                displacementImage: a,
                autoPlay: !1,
                wacky: !0
            })
        }
    }
}! function(e) {
    "use strict";
    window.CanvasFullSlider = function(a) {
        var t = this;
        (a = a || {}).container = a.hasOwnProperty("container") ? a.container : "", a.pixiSprites = a.hasOwnProperty("sprites") ? a.sprites : [], a.autoPlay = !a.hasOwnProperty("autoPlay") || a.autoPlay, a.displaceScale = a.hasOwnProperty("displaceScale") ? a.displaceScale : [200, 70], a.displacementImage = a.hasOwnProperty("displacementImage") ? a.displacementImage : "", a.wacky = !!a.hasOwnProperty("wacky") && a.wacky, a.displaceScaleTo = !1 === a.autoPlay ? [0, 0] : [20, 20];
        var i = new PIXI.autoDetectRenderer(1920, 1084, {
                transparent: !0
            }),
            l = new PIXI.Container,
            n = new PIXI.Container,
            s = new PIXI.Sprite.fromImage(a.displacementImage),
            r = new PIXI.filters.DisplacementFilter(s);
        this.currentIndex = 0, this.initPixi = function() {
            document.getElementsByClassName(a.container)[0].appendChild(i.view), l.addChild(n), i.view.style.maxWidth = "100%", i.view.style.top = "50%", i.view.style.left = "50%", i.view.style.webkitTransform = "translate( -50%, -50% )", i.view.style.transform = "translate( -50%, -50% )", s.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, l.filters = [r], !1 === a.autoPlay && (r.scale.x = 0, r.scale.y = 0), !0 === a.wacky && (s.anchor.set(.5), s.x = i.width / 2, s.y = i.height / 2), s.scale.x = 2, s.scale.y = 2, l.addChild(s)
        }, this.loadPixiSprites = function(e) {
            for (var t = a.sprites, i = 0; i < t.length; i++) {
                var l = new PIXI.Texture.fromImage(e[i]),
                    s = new PIXI.Sprite(l);
                0 !== i && TweenMax.set(s, {
                    alpha: 0
                }), n.addChild(s)
            }
        };
        var o = new PIXI.ticker.Ticker;
        o.autoStart = !0, o.add(function(e) {
            i.render(l)
        });
        var c = n.children;
        this.moveSlider = function(e) {
            !0;
            var i = new TimelineMax({
                onComplete: function() {
                    t.currentIndex = e, !1, !0 === a.wacky && s.scale.set(1)
                },
                onUpdate: function() {
                    !0 === a.wacky && (s.rotation += .02 * i.progress(), s.scale.set(3 * i.progress()))
                }
            });
            i.clear(), i.isActive() || i.to(r.scale, 1, {
                x: a.displaceScale[0],
                y: a.displaceScale[1],
                ease: Power1.easeOut
            }).to(c[t.currentIndex], .5, {
                alpha: 0,
                ease: Power2.easeOut
            }, .2).to(c[e], .5, {
                alpha: 1,
                ease: Power2.easeOut
            }, .3).to(r.scale, 1, {
                x: a.displaceScaleTo[0],
                y: a.displaceScaleTo[1],
                ease: Power2.easeOut
            }, .3)
        }, this.init = function() {
            t.initPixi(), t.loadPixiSprites(a.pixiSprites)
        }, this.init(), t.moveSlider(0);
        this.swiper = new Swiper(".full-slider .swiper-container", {
            effect: "fade",
            speed: 1500,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            keyboard: !0,
            mousewheel: !0,
            preventInteractionOnTransition: !0,
            pagination: {
                el: ".swiper-pagination",
                clickable: !0,
                renderBullet: function(e, a) {
                    return '<span class="' + a + '">0' + (e + 1) + "</span>"
                }
            },
            on: {
                init: function() {
                    setTimeout(function() {
                        e(".full-slider .swiper-slide.swiper-slide-active").addClass("animate-active")
                    }, 500)
                },
                slideChange: function() {
                    t.moveSlider(this.realIndex), e(".full-slider .swiper-slide").removeClass("animate-active"), e(".full-slider .swiper-slide").eq(this.realIndex).addClass("animate-active")
                }
            }
        });
        e(".full-slider .swiper-buttons > div").addClass("enabled"), e(".full-slider .swiper-pagination-bullet").addClass("enabled")
    }
    
    $(window).on("load", function() {
        $("body").imagesLoaded({}, function() {
            var i = $(".preloader");
            i.addClass("loaded"), i.find(".centrize").fadeOut(),
                function() {
                    var i = window.innerWidth / 2,
                        s = window.innerHeight / 2,
                        a = {
                            el: $(".cursor"),
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2,
                            w: 30,
                            h: 30,
                            update: function() {
                                var e = this.x - this.w / 2,
                                    i = this.y - this.h / 2;
                                this.el.css({
                                    transform: "translate3d(" + e + "px," + i + "px, 0)"
                                })
                            }
                        };

                    function t(e, i, s) {
                        return (1 - s) * e + s * i
                    } 
                }(), $(".scroll-animate").scrolla({
                    once: !0,
                    mobile: !0
                });
                initFullSlider();
        })
    })
}(jQuery);