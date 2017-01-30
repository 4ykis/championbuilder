<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 30.01.17
 * Time: 18:37
 */
    $key = '?api_key=RGAPI-df7c9f1d-d4d1-4051-8313-d14a584cc8d2';
    $url = 'https://global.api.pvp.net/api/lol/static-data/ru/v1.2/champion/';
    $lang = '&locale='.$_POST['lang'];
    $file = file_get_contents($url.$id.$key.$lang);
    echo $file;
?>