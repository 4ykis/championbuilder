function Module() {
    return {
        //LVL INPUT CHANGE CHECKER
        lvlChange: function () {
            $('.js-level').on('change',function() {
                var value = $(this).val();
                if( value > 18 ){ $(this).val('18'); }
                if( value < 1)  { $(this).val('1');  }
                js.calcAll();
            });
        },
        //TAKE LVL NOW
        lvl: function () {
            return  $('.js-level').val();
        },
        //CREATE ITEMS IN BLOCK
        createItemBlock: function (){
            $.each($items ,function () {
                var block = '<img src="'+this.icon+'" alt="'+this.name+'"  title="'+this.name+'" data-id="'+this.id+'">';
                $('.js-items-all').append(block);
            });
            setTimeout(function(){
                $('.js-items-all img').eq(0).click();
            },10);

        },
        //CALC SPELL
        calcSpell:function(){
            return {
                icons: function () {
                    var s = $champ.skills;
                    var img = $('.js-spell-icon img')
                    $('.js-icon img').attr('src',$champ.icon);
                    img.eq(0).attr('src',s.p.icon);
                    img.eq(1).attr('src',s.q.icon);
                    img.eq(2).attr('src',s.w.icon);
                    img.eq(3).attr('src',s.e.icon);
                    img.eq(4).attr('src',s.r.icon);
                },
                //need rework on all champ
                passive: function () {
                    var s = $champ.skills;
                    var lvl = js.lvl();
                    //PASSIVE NEED WORK
                    for(var i=0;i<s.p.lvl.length;i++){
                        if( lvl >= s.p.lvl[i] ){
                            var ls = i;
                        }
                    }
                    var ap = $('.js-param-ap').text();
                    var f_pass = s.p.base[ls]+' ('+Math.round(s.p.ap_ratio*ap)+')';
                    $('.js-pass-descr').html('Whenever Ahri hits an enemy with one of her abilities,' +
                        ' she gains a charge of Essence Theft 2 Essence Theft, and can gain up to' +
                        ' 3 charges per ability cast. ' +
                        'Upon reaching 9 charges, her next ability heals her for <span>'+
                        f_pass+'</span> for each enemy hit.');
                    $('.js-pass-name').text(s.p.name);

                },
                q:function () {
                    var s = $champ.skills;
                    var base = '',ratio;
                    var ap = $('.js-param-ap').text();
                    for (var i=0;i<s.q.base.length;i++){
                        base += s.q.base[i]+'/';
                        if(i == s.q.base.length-1){
                            base = String(base).slice(0,-1);
                        }
                    }
                    ratio = Math.round(ap*s.q.ap_ratio);
                    $('.js-q-descr').html(' Ahri sends an orb of arcane energy in the target ' +
                        'direction, dealing magic damage to all enemies it passes through, ' +
                        'then pulls it back, dealing true damage to all enemies it passes through ' +
                        'on the way to her current location.' +
                        'Damage per pass: <span>'+base+' (+'+ratio+')</span>');
                    $('.js-q-name').text(s.q.name);
                    $('.js-q-mana').text('Mana cost: '+s.q.mana_cost[0]+'/'+s.q.mana_cost[1]+'/'+s.q.mana_cost[2]+'/'+s.q.mana_cost[3]+'/'+s.q.mana_cost[4])
                    $('.js-q-cd').text('Cooldown: '+s.q.cd[0]+'/'+s.q.cd[1]+'/'+s.q.cd[2]+'/'+s.q.cd[3]+'/'+s.q.cd[4]);
                },
                w:function () {
                    var s = $champ.skills;
                    var base = '',ratio;
                    var ap = $('.js-param-ap').text();
                    for (var i=0;i<s.w.base.length;i++){
                        base += s.w.base[i]+'/';
                        if(i == s.w.base.length-1){
                            base = String(base).slice(0,-1);
                        }
                    }
                    ratio = Math.round(ap*s.w.ap_ratio);
                    $('.js-w-descr').html(' Ahri summons three spectral flames which orbit her' +
                        ' for up to 5 seconds. After a brief delay, each flame pursues the ' +
                        'closest visible enemy, prioritizing champions, then the target of Ahri\'s' +
                        'last basic attack, dealing magic damage'+
                        'Damage per orb: <span>'+base+' (+'+ratio+')</span>');
                    $('.js-w-name').text(s.w.name);
                    $('.js-w-mana').text('Mana cost: '+s.w.mana_cost[0]+'/'+s.w.mana_cost[1]+'/'+s.w.mana_cost[2]+'/'+s.w.mana_cost[3]+'/'+s.w.mana_cost[4])
                    $('.js-w-cd').text('Cooldown: '+s.w.cd[0]+'/'+s.w.cd[1]+'/'+s.w.cd[2]+'/'+s.w.cd[3]+'/'+s.w.cd[4]);
                },
                e:function () {
                    var s = $champ.skills;
                    var base = '',ratio;
                    var ap = $('.js-param-ap').text();
                    for (var i=0;i<s.e.base.length;i++){
                        base += s.e.base[i]+'/';
                        if(i == s.e.base.length-1){
                            base = String(base).slice(0,-1);
                        }
                    }
                    ratio = Math.round(ap*s.e.ap_ratio);
                    $('.js-e-descr').html('Ahri blows a kiss in a line, dealing magic damage to the' +
                        ' first enemy hit and  Charm icon charming them.'+
                        'Damage: <span>'+base+' (+'+ratio+')</span>');
                    $('.js-e-name').text(s.e.name);
                    $('.js-e-mana').text('Mana cost: '+s.e.mana_cost[0]+'/'+s.e.mana_cost[1]+'/'+s.e.mana_cost[2]+'/'+s.e.mana_cost[3]+'/'+s.e.mana_cost[4]);
                    $('.js-e-cd').text('Cooldown: '+s.e.cd[0]+'/'+s.e.cd[1]+'/'+s.e.cd[2]+'/'+s.e.cd[3]+'/'+s.e.cd[4]);
                },
                r:function () {
                    var s = $champ.skills;
                    var base = '',ratio;
                    var ap = $('.js-param-ap').text();
                    for (var i=0;i<s.r.base.length;i++){
                        base += s.r.base[i]+'/';
                        if(i == s.r.base.length-1){
                            base = String(base).slice(0,-1);
                        }
                    }
                    ratio = Math.round(ap*s.r.ap_ratio);
                    $('.js-r-descr').html('Ahri dashes in the direction of the cursor and fires up to' +
                        ' three energy bolts that each pursue one of her nearest visible enemies, dealing ' +
                        'magic damage. Each enemy can only be hit by one bolt at a time.'+
                        'Spirit Rush can be cast twice more within 10 seconds of activation ' +
                        'at no additional cost before going on cooldown.'+
                        'Damage: <span>'+base+' (+'+ratio+')</span>');
                    $('.js-r-name').text(s.r.name);
                    $('.js-r-mana').text('Mana cost: '+s.r.mana_cost[0]+'/'+s.r.mana_cost[1]+'/'+s.r.mana_cost[2]);
                    $('.js-r-cd').text('Cooldown: '+s.r.cd[0]+'/'+s.r.cd[1]+'/'+s.r.cd[2]);
                },
                init:function () {
                    cspl.passive();
                    cspl.q();
                    cspl.w();
                    cspl.e();
                    cspl.r();
                }
            };
            //end passive

            //q spell
        },
        //take item id by name of passive
        takeItemIdByPass: function(elem){
            var z;
            $.each($pass.id,function(){
                if(this.pass == elem ){
                    z = this.id;
                }
            });
            return z;
        },
        //display all params
        paramsDisplay: function (ap,hp,lfs,mp,ad,mr,ms,hp5,mp5,arm,as,crit,cd) {
            $('.js-param-ap').text(ap);
            $('.js-param-hp').text(hp);
            $('.js-param-lfs').text(lfs);
            $('.js-param-mp').text(mp);
            $('.js-param-ad').text(ad);
            $('.js-param-mr').text(mr);
            $('.js-param-ms').text(ms);
            $('.js-param-hp5').text(hp5);
            $('.js-param-mp5').text(mp5);
            $('.js-param-arm').text(arm);

            if(as > 2.5){
                var oas =  as - 2.5;
                $('.js-param-as').text('2.5 !overcap in '+oas+' !');
            } else {
                $('.js-param-as').text(as);
            }
            if(crit > 100){
                var ocrit = crit - 100;
                $('.js-param-crit').text('100% overcap in '+ocrit+'%');
            } else {
                $('.js-param-crit').text(crit + '%');
            }

            if(cd > 40){
                var ocd = cd - 40;
                $('.js-param-cd').text('40% overcap in '+ocd+'%');
            } else {
                $('.js-param-cd').text(cd + '%');
            }
            console.log(cd);
        },
        //ITEM DESCRIPTION
        thisItemTab: function (img) {
            var id = img.attr('data-id');
            var buildfromimg='',
                buildtoimg='',
                newBlock='',
                numb,numb1;
            /* Block with description !!!! NED REWORK !!!!!*/
            newBlock = '<h5>' + $items[id].name + '</h5>'
            + '<p class="filter-price">Price: <span>' + $items[id].price + '</span> g.</p><ul class="filter-params">'
            + '<li>Ability power: <span>' + $items[id].ap + '</span></li>'
            + '<li>Health: <span>' + $items[id].hp + '</span></li>'
            + '<li>Mana: <span>' + $items[id].mp + '</span></li>'
            + '<li>Attack Damage: <span>' + $items[id].ad + '</span></li>'
            + '<li>Attack Speed: <span>' + $items[id].as + '</span></li>'
            + '<li>Armor: <span>' + $items[id].arm + '</span></li>'
            + '<li>Lifesteel: <span>' + $items[id].lfs + '</span></li>'
            + '<li>Cooldown: <span>' + $items[id].cd + '</span></li>'
            + '<li>Armor: <span>' + $items[id].arm + '</span></li>'
            + '<li>Magick Resist: <span>' + $items[id].mr + '</span></li>'
            + '<li>Critical Chance: <span>' + $items[id].crit + '</span></li></ul>';

            /* add passives */
            if($items[id].pass.length > 0){
                for(var j=0; j<$items[id].pass.length;j++){
                    newBlock += '<div class="filter-passive">' + $items[id].pass[j] + '</div>';
                }
            }
            /* add items building from */
            if($items[id].build.length > 0){
                for (var i=0;i<$items[id].build.length;++i){
                    numb = $items[id].build[i];
                    buildfromimg += '<img src="'+$items[numb].icon+'" alt="'+$items[numb].name+'"  title="'+$items[numb].name+'" data-id="'+$items[numb].id+'">'
                }
            }
            /* add items building to */
            if($items[id].buildTo.length > 0){
                for (var k=0;k<$items[id].buildTo.length;++k){
                    numb1 = $items[id].buildTo[k];
                    buildtoimg += '<img src="'+$items[numb1].icon+'" alt="'+$items[numb1].name+'"  title="'+$items[numb1].name+'" data-id="'+$items[numb1].id+'">'
                }
            }
            /* adding all */
            $('.js-add-item').attr('data-id',id);
            $('.js-build-from').html(buildfromimg);
            $('.js-build-to').html(buildtoimg);
            $('.js-item-descr').html(newBlock);

            $.each($('.filter-params span'),function () {
                if($(this).text() == 0){
                    $(this).parent().remove();
                }
            });
        },
        // ADD ITEM FUNCTION
        addItemOnMe: function (iditem) {
            var id =  iditem.attr('data-id');
            var free = $('.item-on-me:not(".active")');
            var flag = true;
            if(id !== undefined){
                if(free.length > 0){
                    free.eq(0).addClass('active');
                    free.eq(0).find('img').attr('src',$items[id].icon);
                    free.eq(0).attr('data-item-id',$items[id].id);
                }
            }
            //add passives
            if( $items[id].pass.length > 0 ){
                var passBlock = '';
                if($('.one-my-pass').length>0) {
                    for (var i = 0; i < $('.one-my-pass').length; i++) {
                        if ($('.one-my-pass').eq(i).attr('data-id') == $items[id].id) {
                            flag = false
                        }
                    }
                }
                if(flag){
                    for(var j=0; j<$items[id].pass.length;j++){
                        passBlock += '<div class="one-my-pass" data-id="'+$items[id].id+'">'+$items[id].pass[j]+'</div>'
                    }
                }
                $('.my-item-pass').append(passBlock);
            }
        },
        //DELETE ITEM FUNCTION
        deleteItemOnMe: function (thisitem) {
            var id = thisitem.attr('data-item-id');
            var blck =  $('.js-items-on-me .item-on-me');
            var flag = true;
            thisitem.removeClass('active');
            thisitem.attr('data-item-id','');
            thisitem.find('img').attr('src',$defitem);

            for (var i = 0; i <blck.length; i++) {
                if(blck.eq(i).attr('data-item-id').length > 0){
                    if (blck.eq(i).attr('data-item-id') == $items[id].id) {
                        flag = false;
                    }
                }
            }
            if(flag){
                $('.one-my-pass[data-id="'+$items[id].id+'"]').remove();
            }

        },
        //CALCULATE BASE PARAMS AND LVL
        calcBasicParams: function () {
            $apb=$hpb=$mpb=$hp5b=$mp5b=$adb=$asb=$armb=$mrb=$msb=$lfsb=$critb=$cdb=0; //all params global
            var lvl = js.lvl() - 1;

            bs = $champ.base;
            $apb = 0;
            $hpb = Math.round( bs.hp+(lvl*bs.lvlhp) );
            $mpb = Math.round( bs.mp+(lvl*bs.lvlmp) );
            $mrb  = Math.round( bs.mr+(lvl*bs.lvlmr) );
            $armb  = Math.round( bs.arm+(lvl*bs.lvlarm) );
            $asb  = lvl*bs.lvlas;

            $hp5b = bs.hp5+(lvl*bs.lvlhp5);
            $mp5b = bs.mp5+(lvl*bs.lvlmp5);

        },
        //CALCULATE PARAMS FROM ITEM
        calcItemParams:function () {
            var thisitem = $('.js-items-on-me .item-on-me');
            var arrItem = [];
            //take all id in array
            for(var i=0 ; i<thisitem.length ; ++i){
                if(thisitem.eq(i).hasClass('active')){
                    var thisid = thisitem.eq(i).attr('data-item-id');
                    if(thisid.length>0){
                        arrItem.push(thisid);
                    }
                }
            }
            $api=$hpi=$mpi=$hp5i=$mp5i=$adi=$asi=$armi=$cdi=$mri=$msi=$lfsi=$criti=0;
            var gold = 0;
            //calc params
            for(var j=0; j<arrItem.length;j++){
                var id = arrItem[j];
                $api   += $items[id].ap;
                $hpi   += $items[id].hp;
                $hp5i  += $items[id].hp5;
                $mpi   += $items[id].mp;
                $mp5i  += $items[id].mp5;
                $adi   += $items[id].ad;
                $asi   += $items[id].as;
                $cdi   += $items[id].cd;
                $armi  += $items[id].arm;
                $mri   += $items[id].mr;
                $msi   += $items[id].ms;
                $criti += $items[id].crit;
                $lfsi  += $items[id].lfs;
                gold   += $items[id].price;
            }
          $('.js-price').text(gold);
        },
        //CALCULATE ALL PARAMS
        calcAll:function () {
            js.calcItemParams();
            // js.calcRunesParams() //funct котра рахуватиме прибавку рун
            js.calcBasicParams(); //funct котра рахуватиме прибавку базових статів (від лвла)


            var thisitem = $('.js-items-on-me .item-on-me');
            var arrItem = [];
            var arrPass = [];
            var  hp  = $hpi+$hpb+$hpr,
                 ap  = $api+$apb+$apr,
                 lfs = $lfsi+$lfsb+$lfsr,
                 mp  = $mpi+$mpb+$mpr,
                 ad  = $adi+$adb+$adr,
                 mr  = $mri+$mrb+$mrr,
                 ms  = $msi+$msb+$msr,
                 hp5 = Math.round(($hp5i+$hp5b+$hp5r)*10)/10,
                 mp5 = $mp5i+$mp5b+$mp5r,
                 arm = $armi+$armb+$armr,
                 as  = Math.round(($baseAS+ ($baseAS*($asi+$asb+$asr)))*1000)/1000,
                crit = $criti+$critb+$critr,
                  cd = $cdi+$cdb+$cdr;

            var passItems = $('.my-item-pass .one-my-pass');
            var passID;

            //take all id in array
            for(var i=0 ; i<thisitem.length ; ++i){
                if(thisitem.eq(i).hasClass('active')){
                    var thisid = thisitem.eq(i).attr('data-item-id');
                    if(thisid.length>0){
                        arrItem.push(thisid);
                    }
                }
            }
            for(var j=0; j<arrItem.length;j++){
                var id = arrItem[j];
                if($items[id].uniq){
                    $.each($pass.id,function(){
                        if( this.id == id ){
                            var flag = true;
                            for (var arri=0;arri < arrPass.length;arri++){
                                if(arrPass[arri] === this.pass){
                                    flag = false;
                                }
                            }
                            if(flag){
                                arrPass.push(this.pass);
                            }
                        }
                    });
                }
            }

            for(j=0;j<arrPass.length;j++){
                //rabadon
                if(arrPass[j] == 'rabadon'){
                    var rabadon = ap*0.35;
                    ap = Math.round(rabadon + ap);
                    passID = js.takeItemIdByPass(arrPass[j]);
                    for (var k=0;k<passItems.length;k++){
                        if(passItems.eq(k).data('id') === passID ){
                            passItems.eq(k).find('span').text('(Add you '+Math.round(rabadon)+' ap)');
                        }
                    }
                }
            }
            js.paramsDisplay (ap,hp,lfs,mp,ad,mr,ms,hp5,mp5,arm,as,crit,cd);
            cspl.init();
        }
    }
}


var js    = new Module();
var cspl  = new js.calcSpell();
// .responseJSON
js.lvlChange();


var c = $.getJSON("../assets/json/champions/" + name + ".json");
var i = $.getJSON("../assets/json/items/items.json");
var r = $.getJSON("../assets/json/runes/runes.json");


/* kostul' goda blyat' */
c.success(function (){i.success(function () {r.success(function () {

    /*VARIABLES GLOBAL*/
    $champ   = c.responseJSON; //champ
    $items   = i.responseJSON.item; //all items
    $pass    = i.responseJSON.pass; //all unique passives
    $runes   = r.responseJSON; //runes
    $api=$hpi=$mpi=$hp5i=$mp5i=$adi=$asi=$armi=$mri=$msi=$lfsi=$criti=$cdi=0; //all params global
    $apb=$hpb=$mpb=$hp5b=$mp5b=$adb=$asb=$armb=$mrb=$msb=$lfsb=$critb=$cdb=0; //all params global
    $apr=$hpr=$mpr=$hp5r=$mp5r=$adr=$asr=$armr=$mrr=$msr=$lfsr=$critr=$cdr=0; //all params global
    $defitem = 'assets/img/items/dorans-ring.gif'; //заглушка
    $baseAS = $champ.base.as;
    /* all function */
    js.createItemBlock();

    //tab work on JSON
    $('.js-items-img img').on('click',function () {
        js.thisItemTab($(this));
    });


    //* ADDING ITEMS
    //on double click
    $('.js-items-img img').dblclick(function(){
        js.addItemOnMe($(this));
        js.calcAll();
    });
    // on button
    $('.js-add-item').on('click',function () {
        js.addItemOnMe($(this));
        js.calcAll();
    });


    //* DELETING ITEMS
    $('.item-on-me').on('click',function () {
        js.deleteItemOnMe($(this));
        js.calcAll();
    });
    js.calcAll();
    cspl.icons();
    /* end all */

});});});

$(document).ready(function(){
    js.lvlChange();
});



/* mb ill need this*/

// $.each(items.ap ,function () {
    // if(this.build.length > 0){
    //     // console.log('length:',this.build.length);
    //     for (var i=0;i<this.build.length;++i){
    //         var numb = this.build[i];
    //         // console.log('this:',numb,items.ap[numb-1]);
    //         buildFrom += items.ap[numb].name;
    //         if(i !== this.build.length-1){
    //             buildFrom +=' ,';
    //         }
    //     }
    // }
    // if(this.buildTo.length > 0){
    //     // console.log('length:',this.build.length);
    //     for (var k=0;k<this.buildTo.length;++k){
    //         var numb = this.buildTo[k];
    //         // console.log('this:',numb);
    //         buildTo += items.ap[numb].name;
    //         if(k !== this.build.length-1){
    //             buildTo +=' ,';
    //         }
    //     }
    // }
// });
