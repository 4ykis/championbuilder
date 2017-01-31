/**
 * Created by user on 25.01.17.
 *
 * my url
 * https://ru.api.pvp.net/api/lol/ru/v1.4/summoner/by-name/4ykis?api_key=RGAPI-3c01d451-3180-40b2-ae6c-f7668ffe44bc
 */

// var $ = require('jquery');
// function add all stats in table from json by id;
var app = {
    addParams: function (data) {
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
    },
// AJAX take all Champions
    takeAllChamps: function (){
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
                if( data.status == 200){
                    err.html("Error: Ops some problems.. ");
                    $('.json').removeClass('show');
                }
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
    },
// take champion stats by ID
    ChampAJAX: function (id) {
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
            app.addParams(data);
            // ChampListAdd(data);
        })
    },
// ChampAJAX(22);
    takeChampID: function (ne1){
        var name = ne1;
        var id;
        $.each(champ,function () {
            var k = this.key.toLowerCase();
            if(k == name){
                id = this.id
            }
        });
        if( id !== undefined ){
            app.ChampAJAX(id);
            $('.error').hide();
        } else {
            $('.error').show();
            $('.error').html("Error: There no champion with name "+name);
        }

    },
// Take all champions id in to localStorage
    ChampListAdd: function (){
        if(localStorage.getItem('champions') == null ){
            app.takeAllChamps();
        }
        champ = JSON.parse(localStorage.getItem('champions')).data;
    },
//Take All CHampion List to pick
    ChampionList: function () {
      var block = $('.champ-popup .cont');
      $.each(champ,function(){
          block.append("<div class='champ-icon-block' data-champ-id='"+this.id+"'>" +
              "<span>"+this.name+"</span></div>");
      })
    },
//pick champ from list
    PickChampFromList: function () {
        $('.champ-icon-block').on('click',function () {
           var id = $(this).attr('data-champ-id');
           app.ChampAJAX(id);
           $(this).parent().parent().hide();
        });
    },
//Open Champions List
    openChampListPopup:function () {
      $('.js-list').on('click',function () {
          $('.champ-popup').show();
      })
    },
// INIT
    init: function () {
        //always first
        app.ChampListAdd();

        //
        app.ChampionList();
        app.openChampListPopup();
        app.PickChampFromList();
        $('button').on('click',function(){
            var name = $('input').val();
            var err = $('.error');
            //ajax
            if(name.length > 0 ){
                var reg = /[^a-zA-Z]+/g;
                name = name.replace(reg,"");
                var n = name.toLowerCase();
                var id = app.takeChampID(n);
            } else {
                $('input').css('border-color','#ff0000');
                err.html('Please type id');
                $('.json').removeClass('show');
                err.show();
            }
        });

    }
}

$(document).ready(function () {
    // app.ChampListAdd();
    app.init();
});
// end lolapi.app ..................