<?php
    $key = '?api_key=RGAPI-df7c9f1d-d4d1-4051-8313-d14a584cc8d2';
    $url = 'https://global.api.pvp.net/api/lol/static-data/ru/v1.2/champion/';
    $lang = '&locale='.$_POST['lang'];
    $id = $_POST['id'];
    $file = file_get_contents($url.$id.$key.$lang.'&champData=all');
    echo $file;
//    echo 'https://global.api.pvp.net/api/lol/static-data/ru/v1.2/champion/22?api_key=RGAPI-df7c9f1d-d4d1-4051-8313-d14a584cc8d2&locale=en_US&champData=all'
?>