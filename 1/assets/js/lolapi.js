/**
 * Created by user on 25.01.17.
 *
 * my url
 * https://ru.api.pvp.net/api/lol/ru/v1.4/summoner/by-name/4ykis?api_key=RGAPI-3c01d451-3180-40b2-ae6c-f7668ffe44bc
 */

var $ = require('jquery');
// function onSuccess(data) {};
function addParams(data) {
    var p = $('.json');
    console.log('funct');
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
function ChampAJAX() {
    var err = $('.error');
    var ajax = $.ajax({
        url: 'ajax.php',
        // context: document.body,
        dataType:"json",
        type: 'POST',
        data:{"id":id,"lang":lang,"param":param},
        // response:'json',
        // crossDomain: true,
        error: function(data){
            err.show();
            err.html("Error:"+data.status+" "+ data.statusText);
            if( data.status == 200){
                err.html("Error: There no champion with id "+id);
                $('.json').removeClass('show');
            }
        },
        success: function(data){
            addParams(data);
            console.log(data);
            err.hide();
        }
        // success: onSuccess
    });
}


$('button').on('click',function(){
    var id = $('input').val();
    // var p = $('.json');
    var lang = $('body').attr('lang');
    var param = 'all';
    var err = $('.error');
    //ajax
    if(id.length > 0 ){
        ChampAJAX();
    } else {
        $('input').css('border-color','#ff0000');
        err.html('Please type id');
        $('.json').removeClass('show');
        err.show();
    }
});
$.ajax({
   url:'https://global.api.pvp.net/api/lol/static-data/ru/v1.2/champion?locale=en_US&champData=all&api_key=RGAPI-df7c9f1d-d4d1-4051-8313-d14a584cc8d2',
    dataType:"json",
    type:"GET",
    error: function(data){
        err.show();
        err.html("Error:"+data.status+" "+ data.statusText);
    },
    success: function (data) {
        console.log(data);
        $.each(data.keys,function (key,value) {
            // console.log(this);
            var inner = '<tr><td>'+value+'</td><td>'+key+'</td></tr>';

            $('.data').append(inner);
        })
    }

});
// end lolapi.js ..................