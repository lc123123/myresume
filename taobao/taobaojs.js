
var $ct = $('.promo-ct'),
            $preBtn = $('.btn-pre'),
            $nextBtn = $('.btn-next'),
            $indicator = $('.indicator');

        var $lastImg = $ct.find('li').last(),
            $firstImg = $ct.find('li').first();

        var curPage = 0;
        var imgLength = $ct.children().length;
        var isAnimate = false;

        $ct.prepend($lastImg.clone());
        $ct.append($firstImg.clone());

        $ct.width($firstImg.width() * $ct.children().length)
        $ct.css('left', '-520px')

        $nextBtn.on('click', function () {
            playNext(1)
        })

        $preBtn.on('click', function () {
            playPre(1)
        })

        function playNext(n) {
            if (isAnimate) return;
            isAnimate = true
            $ct.animate({
                left: '-=' + n * $firstImg.width()
            }, function () {
                curPage += n
                if (curPage === imgLength) {
                    $ct.css('left', '-520px')
                    curPage = 0
                }
                isAnimate = false;
                setIndicator()
            })
        }

        function playPre(n) {
            if (isAnimate) return;
            isAnimate = true
            $ct.animate({
                left: '+=' + n * $firstImg.width()
            }, function () {
                curPage -= n
                if (curPage < 0) {
                    $ct.css('left', -(imgLength * $firstImg.width()))
                    curPage = imgLength - 1
                }
                isAnimate = false
                setIndicator()
            })
        }

        $indicator.on('click', 'li', function () {
            var index = $(this).index();
            console.log($(this).index())
            if (index > curPage) {
                playNext(index - curPage)
            } else {
                playPre(curPage - index)
            }
        })

        function setIndicator() {
            $indicator.children().removeClass('active').eq(curPage).addClass('active')
        }




        var $ct2 = $('.tmall-ct'),
            $preBtn2 = $('.tmall-bd .btn-pre'),
            $nextBtn2 = $('.tmall-bd .btn-next'),
            $indicator2 = $('.tmall-bd .indicator');

        var $lastImg2 = $ct2.find('li').last(),
            $firstImg2 = $ct2.find('li').first();

        var curPage2 = 0;
        var imgLength2 = $ct2.children().length;
        var isAnimate2 = false;

        $ct2.prepend($lastImg2.clone());
        $ct2.append($firstImg2.clone());

        $ct2.width($firstImg2.width() * $ct2.children().length)
        $ct2.css('left', '-520px')

        $nextBtn2.on('click', function () {
            playNext2(1)
        })

        $preBtn2.on('click', function () {
            playPre2(1)
        })

        function playNext2(n) {
            if (isAnimate2) return;
            isAnimate2 = true
            $ct2.animate({
                left: '-=' + n * $firstImg2.width()
            }, function () {
                curPage2 += n
                if (curPage2 === imgLength2) {
                    $ct2.css('left', '-520px')
                    curPage2 = 0
                }
                isAnimate2 = false;
                setIndicator2()
            })
        }

        function playPre2(n) {
            if (isAnimate2) return;
            isAnimate2 = true
            $ct2.animate({
                left: '+=' + n * $firstImg2.width()
            }, function () {
                curPage2 -= n
                if (curPage2 < 0) {
                    $ct2.css('left', -(imgLength2 * $firstImg2.width()))
                    curPage2 = imgLength2 - 1
                }
                isAnimate2 = false
                setIndicator()
            })
        }

        $indicator2.on('click', 'li', function () {
            var index2 = $(this).index();
            console.log($(this).index())
            if (index2 > curPage2) {
                playNext2(index2 - curPage2)
            } else {
                playPre2(curPage2 - index2)
            }
        })

        function setIndicator2() {
            $indicator2.children().removeClass('active').eq(curPage).addClass('active')
        }