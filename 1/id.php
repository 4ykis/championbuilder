<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .show{
            display: table;
        }
        table{
            border:1px solid #000;
            border-spacing: 0px;
            text-align: left;
            display: none;
        }
        thead{
            text-align: center;
        }
        td{
            padding: 5px 10px;
        }
        .error{
            margin-top: 30px;
            border:2px solid #8b0000;
            color: #f08080;
            padding:10px;
            max-width:250px;
            display: none;
        }
        .data{
            display: table !important;
        }

    </style>
</head>
<body lang="en_US">
<div class="cont">
    <input type="text">
    <button>CLICK</button>
    <div class="status"></div>
    <table class="json" border="1px"></table>
    <div class="error"></div>
    <div class="data"></div>
</div>
<script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
<script src="assets/js/lolapi.js"></script>
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

