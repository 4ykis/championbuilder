/**
 * Created by user on 25.01.17.
 *
 * my url
 * https://ru.api.pvp.net/api/lol/ru/v1.4/summoner/by-name/4ykis?api_key=RGAPI-3c01d451-3180-40b2-ae6c-f7668ffe44bc
 */

// var $ = require('jquery');

    $s = {
        arm:0,
        ad:0,
        ap:0,
        aso:0,
        crit:0,
        hp:0,
        mp:0,
        mp5:0,
        hp5:0,
        range:0,
        ms:0,
        lfs:0,
        armp:0,
        mr:0,
        lvl:{
            arm:0,
            ad:0,
            aso:0,
            crit:0,
            hp:0,
            mp:0,
            mp5:0,
            hp5:0,
            mr:0
        }
    };
    $data = {
        key:'',
        img:'',
        id:'',
        info:{
            ad:0,
            def:0,
            dif:0,
            ap:0
        },
        lore:'',
        name:'',
        tags:[],
        title:''
    };
    $skills = {
      pass:{
          name:'',
          descr:''
      },
      q:{
            cd:[],
            cost:[],
            type:'',
            name:'',
            descr:'',
            max:0,
            dmg:[],
            r:{
                ap:0,
                ad:0
            }
        },
      w:{
            cd:[],
            cost:[],
            type:'',
            name:'',
            descr:'',
            max:0,
            dmg:[],
            r:{
                ap:0,
                ad:0
            }
        },
      e:{
            cd:[],
            cost:[],
            type:'',
            name:'',
            descr:'',
            max:0,
            dmg:[],
            r:{
                ap:0,
                ad:0
            }
        },
      r:{
            cd:[],
            cost:[],
            type:'',
            name:'',
            descr:'',
            max:0,
            dmg:[],
            r:{
                ap:0,
                ad:0
            }
        }
    };

var app = {
    calc: {
        all:  function () {
            app.calc.$s();
            app.calc.items();
            app.calc.runes();


        },
        basic:function (data) {
            var s = data.stats;
            $s.arm = s.armor;
            $s.ad = s.attackdamage;
            $s.aso = s.attackspeedoffset;
            $s.crit = s.crit;
            $s.hp = s.hp;
            $s.mp = s.mp;
            $s.hp5 = s.hpregen;
            $s.mp5 = s.mpregen;
            $s.mr = s.spellblock;
            $s.range = s.attackrange;
            $s.ms = s.movespeed;
            //per lvl
            $s.lvl.ad = s.attackdamageperlevel;
            $s.lvl.arm = s.armorperlevel;
            $s.lvl.aso = s.attackspeedperlevel;
            $s.lvl.hp = s.hpperlevel;
            $s.lvl.hp5 = s.hpregenperlevel;
            $s.lvl.crit = s.critperlevel;
            $s.lvl.mp = s.mpperlevel;
            $s.lvl.mp5 = s.mpregenperlevel;
            $s.lvl.mr = s.spellblockperlevel;
            // basic types
            $data.key = data.key;
            $data.img = data.image.full;
            $data.id  = data.id;
            $data.info.ad  = data.info.attack;
            $data.info.def = data.info.defence;
            $data.info.dif = data.info.difficulty;
            $data.info.ap  = data.info.magic;
            $data.lore = data.lore;
            $data.name = data.name;
            $data.title = data.title;
            $data.tags = data.tags;

            //spells


        },
        stats:function () {},
        items:function () {},
        runes:function () {}
    },
    level: function(){
        return $('.js-level').val()
    },
    levelChange:function () {
        $('.js-level').on('change',function() {
            var value = $(this).val();
            if( value > 18 ){ $(this).val('18'); }
            if( value < 1)  { $(this).val('1');  }
            app.addParams()
        });
    },
    // function add all stats in table from json by id;
    addParams: function () {
        var p = $('.json');
        p.addClass('show');
        console.log($s);
        var lvl = app.level();
        var content = '<thead><tr><td colspan="2" align="center">'+$data.name+'</td></td></tr>' +
            '<tr><td colspan="2" align="center"> id: '+$data.id+'</td></td></tr></thead>'+
            '<tr><td>Armor</td><td>'+$s.arm+' ('+$s.lvl.arm+'/lvl)</td></tr>'+
            '<tr><td>Magick Resist</td><td>'+$s.mr+' ('+$s.lvl.mr+'/lvl)</td></tr>'+
            '<tr><td>Mana</td><td>'+$s.mp+' ('+$s.lvl.mp+' /lvl)</td></tr>'+
            '<tr><td>Mana Regen</td><td>'+$s.mp5+' ('+$s.lvl.mp5+'/lvl)</td></tr>'+
            '<tr><td>Health:</td><td>'+$s.hp+' ('+$s.lvl.hp+'/lvl)</tr></td>'+
            '<tr><td>Health Regen</td><td>'+$s.hp5+' ('+$s.lvl.hp5+'/lvl)</td></tr>'+
            '<tr><td>Attack damage</td><td>'+$s.ad+' ('+$s.lvl.ad+'/lvl)</tr></td>'+
            '<tr><td>Range</td><td>'+$s.range+'</tr></td>'+
            '<tr><td>Crit Chanse</td><td>'+$s.crit+'</tr></td>';
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
            // console.log(data);
            var json = JSON.stringify(data);
            localStorage.setItem('champions', json);
            // console.log(json);
            champ = JSON.parse(localStorage.getItem('champions')).data;
            app.ChampionList();

        });
    },
// take champion stats by ID
    ChampAJAX: function (id) {
        var lang = $('body').attr('lang');
        var err  = $('.error');
        var ajax = $.ajax({
            url: 'assets/ajax/takeChampstats.php',
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
            app.calc.basic(data);
            console.log(data);
            app.addParams();
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
        } else {
            champ = JSON.parse(localStorage.getItem('champions')).data;
            app.ChampionList();
        }
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
        app.openChampListPopup();
        app.PickChampFromList();
        app.levelChange();
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