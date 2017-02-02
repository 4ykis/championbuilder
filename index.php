<!--
Champion builder v0.1
js, php, css/scss, gulp, jquery
made by 4yk (Yasinskiy Roman)
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="assets/css/compressed/style.min.css">

</head>
<body lang="en_US">
<section class="main-info">
    <div class="container">
        <div class="f-wrap no-wrap">
            <div class="icon">
                <img src="" alt="" class="js-icon-main">
            </div>
            <div class="spells">
                <div class="spell-items">
                    <div class="spl-item js-icon-p"><img src="" alt=""></div>
                    <div class="spl-item js-icon-q"><img src="" alt=""></div>
                    <div class="spl-item js-icon-w"><img src="" alt=""></div>
                    <div class="spl-item js-icon-e"><img src="" alt=""></div>
                    <div class="spl-item js-icon-r"><img src="" alt=""></div>
                </div>
                <div class="spell-descr">
                    <div class="spl-dscr js-spell-p">
                        <p class="title"></p>
                        <p class="tooltip"></p>
                    </div>
                    <div class="spl-dscr js-spell-q">
                        <p class="title"></p>
                        <p class="tooltip"></p>
                    </div>
                    <div class="spl-dscr js-spell-w">
                        <p class="title"></p>
                        <p class="tooltip"></p>
                    </div>
                    <div class="spl-dscr js-spell-e">
                        <p class="title"></p>
                        <p class="tooltip"></p>
                    </div>
                    <div class="spl-dscr js-spell-r">
                        <p class="title"></p>
                        <p class="tooltip"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</section>
<section class="main-block">
    <div class="container">
        <div class="f-wrap">
            <section class="stats">
                <div class="level-block">
                    <p>Your level:</p>
                    <input type="number" class="js-level" value="0">
                </div>
                <table class="js-stats main-stats" border="1px"></table>
            </section>
            <div class="additional-blocks">

            </div>
        </div>
    </div>
</section>
<!--    Popup Champion-->
<div class="champ-popup">
    <div class="cont"></div>
</div>

<!--<div class="content">-->
<!--    <input type="text" class="js-search-name">-->
<!--    <input class="js-level" type="number" max="18" min="1" value="1">-->
<!--    <button>CLICK</button>-->
<!--    <span class="js-list">List</span>-->
<!--    <div class="status"></div>-->
<!--    <table class="json" border="1px"></table>-->
<!--    <div class="error"></div>-->
<!--    <div class="data"></div>-->
<!--    <div class="error-popup">-->
<!---->
<!--    </div>-->
<!--    <div class="champ-popup">-->
<!--        <div class="cont"></div>-->
<!--    </div>-->
<!--</div>-->
<!--<script-->
<!--        src="https://code.jquery.com/jquery-3.1.1.min.js"-->
<!--        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="-->
<!--       crossorigin="anonymous"></script>-->
<script src="assets/js/build.js"></script>
<!--<script>-->
<!--    var script = document.createElement('SCRIPT');-->
<!--    script.src = "https://ru.api.pvp.net/api/lol/ru/v1.4/summoner/by-name/4ykis?api_key=RGAPI-3c01d451-3180-40b2-ae6c-f7668ffe44bc&callback=FuncResp";-->
<!--    document.getElementsByTagName("head")[0].appendChild(script);-->
<!--    function FuncResp(result) {-->
<!--        alert(result)-->
<!--    }-->
<!---->
<!--</script>-->
</body>
</html>

