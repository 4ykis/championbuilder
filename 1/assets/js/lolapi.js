/**
 * Created by user on 25.01.17.
 *
 * my url
 * https://ru.api.pvp.net/api/lol/ru/v1.4/summoner/by-name/4ykis?api_key=RGAPI-3c01d451-3180-40b2-ae6c-f7668ffe44bc
 */

// var $ = require('jquery');
// function add all stats in table from json by id;
function addParams(data) {
    var p = $('.json');
    p.addClass('show');
    var content = '<thead><tr><td colspan="2" align="center">'+data.name+'</td></td></tr></thead>'+
                '<tr><td>Armor</td><td>'+data.stats.armor+'</td></tr>'+
                '<tr><td>Armor per level</td><td>'+data.stats.armorperlevel+'</tr></td>'+
                '<tr><td>Attack damage</td><td>'+data.stats.attackdamage+'</tr></td>'+
                '<tr><td>Attack damage per lvl</td><td>'+data.stats.attackdamageperlevel+'</tr></td>'+
                '<tr><td>Range</td><td>'+data.stats.attackrange+'</tr></td>'+
                '<tr><td>Health:</td><td>'+data.stats.hp+'</tr></td>'+
                '<tr><td>Health per level</td><td>'+data.stats.hpperlevel+'</tr></td>';
            // console.log(this);
    p.html(content);
}
// AJAX take all Champions
function takeAllChamps(){
    var err  = $('.error');
    var lang = $('body').attr('lang');
    var ajax = $.ajax({
        url: 'assets/ajax/takeAllChamps.php',
        // url:'https://ru.api.pvp.net/api/lol/ru/v1.2/champion/22?api_key=RGAPI-df7c9f1d-d4d1-4051-8313-d14a584cc8d2',
        dataType:"json",
        type: "POST",
        data:{"id":"","lang":lang},
        error: function(data){
            err.show();
            err.html("Error:"+data.status+" "+ data.statusText);
            // console.log(data);
        },
        success: function () {
            console.log('success');
        }
    });
    ajax.done(function (data) {
        console.log(data);
        var json = JSON.stringify(data);
        localStorage.setItem('champions', json);
        console.log(json);
    });
}
// take champion stats by ID
function ChampAJAX(id) {
    var lang = $('body').attr('lang');
    var err  = $('.error');
    var ajax = $.ajax({
        url: 'assets/ajax/takeChampStats.php',
        // url:'https://ru.api.pvp.net/api/lol/ru/v1.2/champion/22?api_key=RGAPI-df7c9f1d-d4d1-4051-8313-d14a584cc8d2',
        dataType:"json",
        type: "POST",
        data:{"id":id,"lang":lang},
        error: function(data){
            err.show();
            err.html("Error:"+data.status+" "+ data.statusText);
            if( data.status == 200){
                err.html("Error: There no champion with id "+id);
                $('.json').removeClass('show');
            }
        },
        success: function () {}
    });
    ajax.done(function (data) {
        // console.log(data);
        addParams(data);
        // ChampListAdd(data);
    })
}
// ChampAJAX(22);
function takeChampID(ne1){
    var name = ne1;
    var id;
    $.each(champ,function () {
        if(this.key == name){
            id = this.id
        }
    });

    ChampAJAX(id);

}
ChampAJAX(22);
ChampListAdd();
// Take all champions id in to localStorage
function ChampListAdd(){
    if(localStorage.getItem('champions') == null ){
        takeAllChamps();
    }
    champ = JSON.parse(localStorage.getItem('champions')).data;
}


$('button').on('click',function(){
    var name = $('input').val();
    var err = $('.error');
    //ajax
    if(name.length > 0 ){
        var n1 = name.slice(0,1);
        var n2 = name.slice(1);
        var n = n1.toUpperCase()+n2.toLowerCase();
        var id = takeChampID(n);

    } else {
        $('input').css('border-color','#ff0000');
        err.html('Please type id');
        $('.json').removeClass('show');
        err.show();
    }
});

// end lolapi.js ..................