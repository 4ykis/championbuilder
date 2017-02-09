<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 08.02.17
 * Time: 16:59
 */

    $key = '?api_key=RGAPI-df7c9f1d-d4d1-4051-8313-d14a584cc8d2';
    $url = 'https://global.api.pvp.net/api/lol/static-data/ru/v1.2/champion/';
    $lang = '&locale=en_US';
    $id = $_POST['id'];
    $file = file_get_contents($url.$id.$key.$lang.'&champData=all');
    $json = json_decode($file,true);


    $newArr = [
        "id"        => $json[id],
        "key"       => $json[key],
        "name"      => $json[name],
        "title"     => $json[title],
        "lore"      => $json[lore],
        "skins"     => $json[skins],
        "allytips"  => $json[allytips],
        "enemytips" => $json[enemytips],
        "tags"      => $json[tags],
        "info"      => $json[info],
        "stats" => [
            "arm"=>$json[stats][armor],
            "ad"=>$json[stats][attackdamage],
            "aso"=>$json[stats][attackspeedoffset],
            "crit"=>$json[stats][crit],
            "hp"=>$json[stats][hp],
            "mp"=>$json[stats][mp],
            "mp5"=>$json[stats][mpregen],
            "hp5"=>$json[stats][hpregen],
            "range"=>$json[stats][attackrange],
            "ms"=>$json[stats][movespeed],
            "mr"=>$json[stats][spellblock],
            "lvl"=>[
                "arm"=>$json[stats][armorperlevel],
                "ad"=>$json[stats][attackdamageperlevel],
                "aso"=>$json[stats][attackspeedperlevel],
                "crit"=>$json[stats][critperlevel],
                "hp"=>$json[stats][hpperlevel],
                "mp"=>$json[stats][mpperlevel],
                "mp5"=>$json[stats][mpregenperlevel],
                "hp5"=>$json[stats][hpregenperlevel],
                "mr"=>$json[stats][spellblockperlevel]
            ]
        ],
        "pass" => [
            "name"  => $json[passive][name],
            "descr" => $json[passive][description],
            "img"   => $json[passive][image][full]
        ]

    ];
    foreach ($json[spells] as $item) {
        $newArr[spells][] = [
            "name" => $item[name],
            "descr" => $item[description],
            "tooltip" =>$item[tooltip],
            "cost" => $item[cost],
            "costType" => $item[costType],
            "cd" => $item[cooldown],
            "range" => $item[range]
        ];
    }
    $newArr[spells][0][key] = $json[key].'Q';
    $newArr[spells][1][key] = $json[key].'W';
    $newArr[spells][2][key] = $json[key].'E';
    $newArr[spells][3][key] = $json[key].'R';
//    var_dump($newArr);
    $newFile = json_encode($newArr,true);
    file_put_contents('../json/champions/'.$json[key].'/'.$json[key].'.json',$newFile);
    echo $newFile;
//    echo 'https://global.api.pvp.net/api/lol/static-data/ru/v1.2/champion/22?api_key=RGAPI-df7c9f1d-d4d1-4051-8313-d14a584cc8d2&locale=en_US&champData=all'
?>