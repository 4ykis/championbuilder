!function(t){"function"==typeof define&&define.amd?define(["jquery","inputmask"],t):"object"==typeof exports?module.exports=t(require("jquery"),require("./inputmask")):t(jQuery,window.Inputmask)}(function(t,i){return void 0===t.fn.inputmask&&(t.fn.inputmask=function(s,e){var n,a;if(e=e||{},"string"==typeof s)switch(s){case"mask":return n=new i(e),this.each(function(){n.mask(this)});case"unmaskedvalue":return a=this.jquery&&this.length>0?this[0]:this,a.inputmask?a.inputmask.unmaskedvalue():t(a).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return a=this.jquery&&this.length>0?this[0]:this,a.inputmask?a.inputmask.getemptymask():"";case"hasMaskedValue":return a=this.jquery&&this.length>0?this[0]:this,a.inputmask?a.inputmask.hasMaskedValue():!1;case"isComplete":return a=this.jquery&&this.length>0?this[0]:this,a.inputmask?a.inputmask.isComplete():!0;case"getmetadata":return a=this.jquery&&this.length>0?this[0]:this,a.inputmask?a.inputmask.getmetadata():void 0;case"setvalue":a=this.jquery&&this.length>0?this[0]:this,t(a).val(e),void 0!==a.inputmask&&t(a).triggerHandler("setvalue.inputmask");break;case"option":if("string"!=typeof e)return this.each(function(){return void 0!==this.inputmask?this.inputmask.option(e):void 0});if(a=this.jquery&&this.length>0?this[0]:this,void 0!==a.inputmask)return a.inputmask.option(e);break;default:return e.alias=s,n=new i(e),this.each(function(){n.mask(this)})}else{if("object"==typeof s)return n=new i(s),void 0===s.mask&&void 0===s.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(s):void n.mask(this)}):this.each(function(){n.mask(this)});if(void 0===s)return this.each(function(){n=new i(e),n.mask(this)})}}),t.fn.inputmask});