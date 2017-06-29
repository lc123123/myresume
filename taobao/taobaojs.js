/*主题市场tab*/

$('.service-bd>li').on('mouseover', function () {
    var index = $(this).index();
    $(this).addClass('active');
    $('.service-float-item').eq(index).addClass('active')
})

$('.service-float-item').on('mouseover', function () {
    var index = $(this).index();
    $(this).addClass('active');
    $('.service-float-item').eq(index).addClass('active')
})

$('.service-bd>li').on('mouseout', function () {
    var index = $(this).index();
    $(this).removeClass('active');
    $('.service-float-item').eq(index).removeClass('active')
})

$('.service-float-item').on('mouseout', function () {
    var index = $(this).index();
    $(this).removeClass('active');
    $('.service-float-item').eq(index).removeClass('active')
})

$('a').on('click', function (e) {
    e.preventDefault()
})

/*轮播-面向对象*/

function Carousel($ct, $autoTime) {
    this.$ct = $ct;
    this.$autoTime = $autoTime;
    this.init();
    this.bind();
    this.autoPlay($autoTime);
}

Carousel.prototype.init = function () {
    var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
        $preBtn = this.$preBtn = this.$ct.find('.btn-pre'),
        $nextBtn = this.$nextBtn = this.$ct.find('.btn-next'),
        $bullet = this.$bullet = this.$ct.find('.bullet');

    var $firstImg = this.$firstImg = $imgCt.find('li').first(),
        $lastImg = this.$lastImg = $imgCt.find('li').last();

    this.curPageIndex = 0;
    this.imgLength = $imgCt.children().length;
    this.isAnimate = false;

    $imgCt.prepend($lastImg.clone())
    $imgCt.append($firstImg.clone())

    $imgCt.width($firstImg.width() * $imgCt.children().length)
    $imgCt.css({
        'left': '-520px'
    })

}

Carousel.prototype.bind = function () {
    var _this = this;
    this.$preBtn.on('click', function (e) {
        e.preventDefault();
        _this.playPre(1);
    })

    this.$nextBtn.on('click', function (e) {
        e.preventDefault();
        _this.playNext(1);
    })

}

Carousel.prototype.playPre = function (n) {
    var _this = this;
    if (this.isAnimate) return;
    this.isAnimate = true;
    this.$imgCt.animate({
        left: '+=520px'
    }, function () {
        _this.curPageIndex--;
        if (_this.curPageIndex < 0) {
            _this.$imgCt.css('left', -(_this.imgLength * _this.$firstImg.width()))
            _this.curPageIndex = _this.imgLength - 1
        }
        _this.setBullet()
        _this.isAnimate = false;
    })
}
Carousel.prototype.playNext = function (n) {
    var _this = this;
    if (this.isAnimate) return;
    this.isAnimate = true;
    this.$imgCt.animate({
        left: '-=520px'
    }, function () {
        _this.curPageIndex++;
        if (_this.curPageIndex === _this.imgLength) {
            _this.$imgCt.css({
                'left': '-520px'
            })
            _this.curPageIndex = 0
        }
        _this.setBullet();
        _this.isAnimate = false;
    })
}
Carousel.prototype.setBullet = function () {
    this.$bullet.children()
        .removeClass('active')
        .eq(this.curPageIndex)
        .addClass('active')
}
Carousel.prototype.autoPlay = function ($autoTime) {
    var _this = this;
    this.timer = setInterval(function () {
        _this.playNext()
    }, _this.$autoTime)
}


new Carousel($('.carousel').eq(0), 2000);
new Carousel($('.carousel').eq(1), 2500);



/*公告tab*/

$('.notice-hd>li').on('mouseover', function () {
    var index = $(this).index();

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    $(this).parents('.tab-notice').find('.notice-bd>ul').removeClass('active')
    $(this).parents('.tab-notice').find('.notice-bd>ul').eq(index).addClass('active')
})



/*sprit的tab*/

$('.conve-list>.conve-float').on('mouseover', function () {
    var index = $(this).index();

    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');

    /* $(this).parents('.conve').find('.conve-bd-box').removeClass('selected')*/
    $(this).parents('.conve').find('.conve-bd-box').addClass('selected')
    $('.conve-bd-item').siblings().removeClass('selected');
    $('.conve-bd-item').eq(index).addClass('selected')
})


/*充值tab-in */

$('.module-hd>a').on('mouseover', function () {
    var index = $(this).index();

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    $('.tab-in').removeClass('active')
    $('.tab-in').eq(index).addClass('active')
})


/*conve-bd-box-close*/

$('.conve-bd-box-close').on('click', function () {
    $('.conve-list>li').removeClass('selected')
    $('.conve-bd-box').removeClass('selected')
})

/*qr-hover*/
$('.nav img').on('mouseover', function () {
    var index = $(this).index();
    $(this).parents('.nav').find('.app-qr').removeClass('hover')
    $(this).parents('.nav').find('.app-qr').eq(index).addClass('hover')
})

$('.nav img').on('mouseout', function () {
    var index = $(this).index();
    $(this).parents('.nav').find('.app-qr').removeClass('hover')

})