<?php

    $key = '?api_key=RGAPI-df7c9f1d-d4d1-4051-8313-d14a584cc8d2';
    $url = 'https://global.api.pvp.net/api/lol/static-data/ru/v1.2/champion/'.$_POST['id'];
    if( isset($_POST['lang']) ){
        $lang = '&locale='.$_POST['lang'];
    } else {
        $lang = '';
    }
    if( isset($_POST['param']) ){
        $param = '&champData='.$_POST['param'];
    } else {
        $param = '';
    }
    $file = file_get_contents($url.$key.$lang.$param);
    echo $file;
?>
