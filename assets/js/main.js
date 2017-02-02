/**
 * Created by user on 16.01.17.
 */
function Custom(){
    return {
        tabs:function(tab,tabCont){
            tab.click(function() {
                tab.removeClass("active").eq($(this).index()).addClass("active");
                tabCont.hide().eq($(this).index()).fadeIn();
            }).eq(0).addClass("active");
        },
        init:function(){
            custom.tabs($('.tab'),$('.tab-c'));
        }

    }
}

var custom = new Custom();

$(document).ready(function(){
    custom.init();
});