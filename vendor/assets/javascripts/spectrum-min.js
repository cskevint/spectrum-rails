!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports&&"object"==typeof module?module.exports=a:a(jQuery)}(function(a,b){"use strict";function c(b,c,d,e){for(var f=[],g=0;g<b.length;g++){var h=b[g];if(h){var i=tinycolor(h),j=i.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";j+=tinycolor.equals(c,h)?" sp-thumb-active":"";var k=i.toString(e.preferredFormat||"rgb"),l=q?"background-color:"+i.toRgbString():"filter:"+i.toFilter();f.push('<span title="'+k+'" data-color="'+i.toRgbString()+'" class="'+j+'"><span class="sp-thumb-inner" style="'+l+';" /></span>')}else{var m="sp-clear-display";f.push(a("<div />").append(a('<span data-color="" style="background-color:transparent;" class="'+m+'"></span>').attr("title",e.noColorSelectedText)).html())}}return"<div class='sp-cf "+d+"'>"+f.join("")+"</div>"}function d(){for(var a=0;a<o.length;a++)o[a]&&o[a].hide()}function e(b,c){var d=a.extend({},n,b);return d.callbacks={move:j(d.move,c),change:j(d.change,c),show:j(d.show,c),hide:j(d.hide,c),beforeShow:j(d.beforeShow,c)},d}function f(f,h){function j(){if(T.showPaletteOnly&&(T.showPalette=!0),Ka.text(T.showPaletteOnly?T.togglePaletteMoreText:T.togglePaletteLessText),T.palette){la=T.palette.slice(0),ma=a.isArray(la[0])?la:[la],na={};for(var b=0;b<ma.length;b++)for(var c=0;c<ma[b].length;c++){var d=tinycolor(ma[b][c]).toRgbString();na[d]=!0}}va.toggleClass("sp-flat",U),va.toggleClass("sp-input-disabled",!T.showInput),va.toggleClass("sp-alpha-enabled",T.showAlpha),va.toggleClass("sp-clear-enabled",Xa),va.toggleClass("sp-buttons-disabled",!T.showButtons),va.toggleClass("sp-palette-buttons-disabled",!T.togglePaletteOnly),va.toggleClass("sp-palette-disabled",!T.showPalette),va.toggleClass("sp-palette-only",T.showPaletteOnly),va.toggleClass("sp-initial-disabled",!T.showInitial),va.addClass(T.className).addClass(T.containerClassName),N()}function n(){function b(b){return b.data&&b.data.ignore?(G(a(b.target).closest(".sp-thumb-el").data("color")),J()):(G(a(b.target).closest(".sp-thumb-el").data("color")),J(),M(!0),T.hideAfterPaletteSelect&&E()),!1}if(p&&va.find("*:not(input)").attr("unselectable","on"),j(),Na&&ta.after(Oa).hide(),Xa||Ia.hide(),U)ta.after(va).hide();else{var c="parent"===T.appendTo?ta.parent():a(T.appendTo);1!==c.length&&(c=a("body")),c.append(va)}t(),Pa.bind("click.spectrum touchstart.spectrum",function(b){ua||B(),b.stopPropagation(),a(b.target).is("input")||b.preventDefault()}),(ta.is(":disabled")||T.disabled===!0)&&R(),va.click(i),Ea.change(A),Ea.bind("paste",function(){setTimeout(A,1)}),Ea.keydown(function(a){13==a.keyCode&&A()}),Ha.text(T.cancelText),Ha.bind("click.spectrum",function(a){a.stopPropagation(),a.preventDefault(),F(),E()}),Ia.attr("title",T.clearText),Ia.bind("click.spectrum",function(a){a.stopPropagation(),a.preventDefault(),Wa=!0,J(),U&&M(!0)}),Ja.text(T.chooseText),Ja.bind("click.spectrum",function(a){a.stopPropagation(),a.preventDefault(),p&&Ea.is(":focus")&&Ea.trigger("change"),I()&&(M(!0),E())}),Ka.text(T.showPaletteOnly?T.togglePaletteMoreText:T.togglePaletteLessText),Ka.bind("click.spectrum",function(a){a.stopPropagation(),a.preventDefault(),T.showPaletteOnly=!T.showPaletteOnly,T.showPaletteOnly||U||va.css("left","-="+(wa.outerWidth(!0)+5)),j()}),k(Ca,function(a,b,c){ka=a/ea,Wa=!1,c.shiftKey&&(ka=Math.round(10*ka)/10),J()},y,z),k(za,function(a,b){ha=parseFloat(b/ca),Wa=!1,T.showAlpha||(ka=1),J()},y,z),k(xa,function(a,b,c){if(c.shiftKey){if(!ra){var d=ia*_,e=aa-ja*aa,f=Math.abs(a-d)>Math.abs(b-e);ra=f?"x":"y"}}else ra=null;var g=!ra||"x"===ra,h=!ra||"y"===ra;g&&(ia=parseFloat(a/_)),h&&(ja=parseFloat((aa-b)/aa)),Wa=!1,T.showAlpha||(ka=1),J()},y,z),Ra?(G(Ra),K(),Ua=Ta||tinycolor(Ra).format,u(Ra)):K(),U&&C();var d=p?"mousedown.spectrum":"click.spectrum touchstart.spectrum";Fa.delegate(".sp-thumb-el",d,b),Ga.delegate(".sp-thumb-el:nth-child(1)",d,{ignore:!0},b)}function t(){if(W&&window.localStorage){try{var b=window.localStorage[W].split(",#");b.length>1&&(delete window.localStorage[W],a.each(b,function(a,b){u(b)}))}catch(c){}try{oa=window.localStorage[W].split(";")}catch(c){}}}function u(b){if(V){var c=tinycolor(b).toRgbString();if(!na[c]&&-1===a.inArray(c,oa))for(oa.push(c);oa.length>pa;)oa.shift();if(W&&window.localStorage)try{window.localStorage[W]=oa.join(";")}catch(d){}}}function v(){var a=[];if(T.showPalette)for(var b=0;b<oa.length;b++){var c=tinycolor(oa[b]).toRgbString();na[c]||a.push(oa[b])}return a.reverse().slice(0,T.maxSelectionSize)}function w(){var b=H(),d=a.map(ma,function(a,d){return c(a,b,"sp-palette-row sp-palette-row-"+d,T)});t(),oa&&d.push(c(v(),b,"sp-palette-row sp-palette-row-selection",T)),Fa.html(d.join(""))}function x(){if(T.showInitial){var a=Sa,b=H();Ga.html(c([a,b],b,"sp-palette-row-initial",T))}}function y(){(0>=aa||0>=_||0>=ca)&&N(),va.addClass(qa),ra=null,ta.trigger("dragstart.spectrum",[H()])}function z(){va.removeClass(qa),ta.trigger("dragstop.spectrum",[H()])}function A(){var a=Ea.val();if(null!==a&&""!==a||!Xa){var b=tinycolor(a);b.isValid()?(G(b),M(!0)):Ea.addClass("sp-validation-error")}else G(null),M(!0)}function B(){$?E():C()}function C(){var b=a.Event("beforeShow.spectrum");return $?void N():(ta.trigger(b,[H()]),void(Y.beforeShow(H())===!1||b.isDefaultPrevented()||(d(),$=!0,a(sa).bind("click.spectrum",D),a(window).bind("resize.spectrum",Z),Oa.addClass("sp-active"),va.removeClass("sp-hidden"),N(),K(),Sa=H(),x(),Y.show(Sa),ta.trigger("show.spectrum",[Sa]))))}function D(a){2!=a.button&&(Va?M(!0):F(),E())}function E(){$&&!U&&($=!1,a(sa).unbind("click.spectrum",D),a(window).unbind("resize.spectrum",Z),Oa.removeClass("sp-active"),va.addClass("sp-hidden"),Y.hide(H()),ta.trigger("hide.spectrum",[H()]))}function F(){G(Sa,!0)}function G(a,b){if(tinycolor.equals(a,H()))return void K();var c,d;!a&&Xa?Wa=!0:(Wa=!1,c=tinycolor(a),d=c.toHsv(),ha=d.h%360/360,ia=d.s,ja=d.v,ka=d.a),K(),c&&c.isValid()&&!b&&(Ua=Ta||c.getFormat())}function H(a){return a=a||{},Xa&&Wa?null:tinycolor.fromRatio({h:ha,s:ia,v:ja,a:Math.round(100*ka)/100},{format:a.format||Ua})}function I(){return!Ea.hasClass("sp-validation-error")}function J(){K(),Y.move(H()),ta.trigger("move.spectrum",[H()])}function K(){Ea.removeClass("sp-validation-error"),L();var a=tinycolor.fromRatio({h:ha,s:1,v:1});xa.css("background-color",a.toHexString());var b=Ua;1>ka&&(0!==ka||"name"!==b)&&("hex"===b||"hex3"===b||"hex6"===b||"name"===b)&&(b="rgb");var c=H({format:b}),d="";if(Qa.removeClass("sp-clear-display"),Qa.css("background-color","transparent"),!c&&Xa)Qa.addClass("sp-clear-display");else{var e=c.toHexString(),f=c.toRgbString();if(q||1===c.alpha?Qa.css("background-color",f):(Qa.css("background-color","transparent"),Qa.css("filter",c.toFilter())),T.showAlpha){var g=c.toRgb();g.a=0;var h=tinycolor(g).toRgbString(),i="linear-gradient(left, "+h+", "+e+")";p?Ba.css("filter",tinycolor(h).toFilter({gradientType:1},e)):(Ba.css("background","-webkit-"+i),Ba.css("background","-moz-"+i),Ba.css("background","-ms-"+i),Ba.css("background","linear-gradient(to right, "+h+", "+e+")"))}d=c.toString(b)}T.showInput&&Ea.val(d),T.showPalette&&w(),x()}function L(){var a=ia,b=ja;if(Xa&&Wa)Da.hide(),Aa.hide(),ya.hide();else{Da.show(),Aa.show(),ya.show();var c=a*_,d=aa-b*aa;c=Math.max(-ba,Math.min(_-ba,c-ba)),d=Math.max(-ba,Math.min(aa-ba,d-ba)),ya.css({top:d+"px",left:c+"px"});var e=ka*ea;Da.css({left:e-fa/2+"px"});var f=ha*ca;Aa.css({top:f-ga+"px"})}}function M(a){var b=H(),c="",d=!tinycolor.equals(b,Sa);b&&(c=b.toString(Ua),u(b)),La&&ta.val(c),a&&d&&(Y.change(b),ta.trigger("change",[b]))}function N(){_=xa.width(),aa=xa.height(),ba=ya.height(),da=za.width(),ca=za.height(),ga=Aa.height(),ea=Ca.width(),fa=Da.width(),U||(va.css("position","absolute"),va.offset(T.offset?T.offset:g(va,Pa))),L(),T.showPalette&&w(),ta.trigger("reflow.spectrum")}function O(){ta.show(),Pa.unbind("click.spectrum touchstart.spectrum"),va.remove(),Oa.remove(),o[Ya.id]=null}function P(c,d){return c===b?a.extend({},T):d===b?T[c]:(T[c]=d,void j())}function Q(){ua=!1,ta.attr("disabled",!1),Pa.removeClass("sp-disabled")}function R(){E(),ua=!0,ta.attr("disabled",!0),Pa.addClass("sp-disabled")}function S(a){T.offset=a,N()}var T=e(h,f),U=T.flat,V=T.showSelectionPalette,W=T.localStorageKey,X=T.theme,Y=T.callbacks,Z=l(N,10),$=!1,_=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=1,la=[],ma=[],na={},oa=T.selectionPalette.slice(0),pa=T.maxSelectionSize,qa="sp-dragging",ra=null,sa=f.ownerDocument,ta=(sa.body,a(f)),ua=!1,va=a(s,sa).addClass(X),wa=va.find(".sp-picker-container"),xa=va.find(".sp-color"),ya=va.find(".sp-dragger"),za=va.find(".sp-hue"),Aa=va.find(".sp-slider"),Ba=va.find(".sp-alpha-inner"),Ca=va.find(".sp-alpha"),Da=va.find(".sp-alpha-handle"),Ea=va.find(".sp-input"),Fa=va.find(".sp-palette"),Ga=va.find(".sp-initial"),Ha=va.find(".sp-cancel"),Ia=va.find(".sp-clear"),Ja=va.find(".sp-choose"),Ka=va.find(".sp-palette-toggle"),La=ta.is("input"),Ma=La&&"color"===ta.attr("type")&&m(),Na=La&&!U,Oa=Na?a(r).addClass(X).addClass(T.className).addClass(T.replacerClassName):a([]),Pa=Na?Oa:ta,Qa=Oa.find(".sp-preview-inner"),Ra=T.color||La&&ta.val(),Sa=!1,Ta=T.preferredFormat,Ua=Ta,Va=!T.showButtons||T.clickoutFiresChange,Wa=!Ra,Xa=T.allowEmpty&&!Ma;n();var Ya={show:C,hide:E,toggle:B,reflow:N,option:P,enable:Q,disable:R,offset:S,set:function(a){G(a),M()},get:H,destroy:O,container:va};return Ya.id=o.push(Ya)-1,Ya}function g(b,c){var d=0,e=b.outerWidth(),f=b.outerHeight(),g=c.outerHeight(),h=b[0].ownerDocument,i=h.documentElement,j=i.clientWidth+a(h).scrollLeft(),k=i.clientHeight+a(h).scrollTop(),l=c.offset();return l.top+=g,l.left-=Math.min(l.left,l.left+e>j&&j>e?Math.abs(l.left+e-j):0),l.top-=Math.min(l.top,l.top+f>k&&k>f?Math.abs(f+g-d):d),l}function h(){}function i(a){a.stopPropagation()}function j(a,b){var c=Array.prototype.slice,d=c.call(arguments,2);return function(){return a.apply(b,d.concat(c.call(arguments)))}}function k(b,c,d,e){function f(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.returnValue=!1}function g(a){if(k){if(p&&j.documentMode<9&&!a.button)return i();var d=a.originalEvent&&a.originalEvent.touches&&a.originalEvent.touches[0],e=d&&d.pageX||a.pageX,g=d&&d.pageY||a.pageY,h=Math.max(0,Math.min(e-l.left,n)),q=Math.max(0,Math.min(g-l.top,m));o&&f(a),c.apply(b,[h,q,a])}}function h(c){var e=c.which?3==c.which:2==c.button;e||k||d.apply(b,arguments)!==!1&&(k=!0,m=a(b).height(),n=a(b).width(),l=a(b).offset(),a(j).bind(q),a(j.body).addClass("sp-dragging"),o||g(c),f(c))}function i(){k&&(a(j).unbind(q),a(j.body).removeClass("sp-dragging"),e.apply(b,arguments)),k=!1}c=c||function(){},d=d||function(){},e=e||function(){};var j=document,k=!1,l={},m=0,n=0,o="ontouchstart"in window,q={};q.selectstart=f,q.dragstart=f,q["touchmove mousemove"]=g,q["touchend mouseup"]=i,a(b).bind("touchstart mousedown",h)}function l(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,a.apply(e,f)};c&&clearTimeout(d),(c||!d)&&(d=setTimeout(g,b))}}function m(){return a.fn.spectrum.inputTypeColorSupport()}var n={beforeShow:h,move:h,change:h,show:h,hide:h,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!1,showInitial:!1,showPalette:!1,showPaletteOnly:!1,hideAfterPaletteSelect:!1,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},o=[],p=!!/msie/i.exec(window.navigator.userAgent),q=function(){function a(a,b){return!!~(""+a).indexOf(b)}var b=document.createElement("div"),c=b.style;return c.cssText="background-color:rgba(0,0,0,.5)",a(c.backgroundColor,"rgba")||a(c.backgroundColor,"hsla")}(),r=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),s=function(){var a="";if(p)for(var b=1;6>=b;b++)a+="<div class='sp-"+b+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",a,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}(),t="spectrum.id";a.fn.spectrum=function(b,c){if("string"==typeof b){var d=this,e=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=o[a(this).data(t)];if(c){var f=c[b];if(!f)throw new Error("Spectrum: no such method: '"+b+"'");"get"==b?d=c.get():"container"==b?d=c.container:"option"==b?d=c.option.apply(c,e):"destroy"==b?(c.destroy(),a(this).removeData(t)):f.apply(c,e)}}),d}return this.spectrum("destroy").each(function(){var c=a.extend({},b,a(this).data()),d=f(this,c);a(this).data(t,d.id)})},a.fn.spectrum.load=!0,a.fn.spectrum.loadOpts={},a.fn.spectrum.draggable=k,a.fn.spectrum.defaults=n,a.fn.spectrum.inputTypeColorSupport=function u(){if("undefined"==typeof u._cachedResult){var b=a("<input type='color' value='!' />")[0];u._cachedResult="color"===b.type&&"!"!==b.value}return u._cachedResult},a.spectrum={},a.spectrum.localization={},a.spectrum.palettes={},a.fn.spectrum.processNativeColorInputs=function(){var b=a("input[type=color]");b.length&&!m()&&b.spectrum({preferredFormat:"hex6"})},function(){function a(a){var c={r:0,g:0,b:0},e=1,g=!1,h=!1;return"string"==typeof a&&(a=G(a)),"object"==typeof a&&(a.hasOwnProperty("r")&&a.hasOwnProperty("g")&&a.hasOwnProperty("b")?(c=b(a.r,a.g,a.b),g=!0,h="%"===String(a.r).substr(-1)?"prgb":"rgb"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("v")?(a.s=D(a.s),a.v=D(a.v),c=f(a.h,a.s,a.v),g=!0,h="hsv"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("l")&&(a.s=D(a.s),a.l=D(a.l),c=d(a.h,a.s,a.l),g=!0,h="hsl"),a.hasOwnProperty("a")&&(e=a.a)),e=w(e),{ok:g,format:a.format||h,r:M(255,N(c.r,0)),g:M(255,N(c.g,0)),b:M(255,N(c.b,0)),a:e}}function b(a,b,c){return{r:255*x(a,255),g:255*x(b,255),b:255*x(c,255)}}function c(a,b,c){a=x(a,255),b=x(b,255),c=x(c,255);var d,e,f=N(a,b,c),g=M(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function d(a,b,c){function d(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+(b-a)*(2/3-c)*6:a}var e,f,g;if(a=x(a,360),b=x(b,100),c=x(c,100),0===b)e=f=g=c;else{var h=.5>c?c*(1+b):c+b-c*b,i=2*c-h;e=d(i,h,a+1/3),f=d(i,h,a),g=d(i,h,a-1/3)}return{r:255*e,g:255*f,b:255*g}}function e(a,b,c){a=x(a,255),b=x(b,255),c=x(c,255);var d,e,f=N(a,b,c),g=M(a,b,c),h=f,i=f-g;if(e=0===f?0:i/f,f==g)d=0;else{switch(f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,v:h}}function f(a,b,c){a=6*x(a,360),b=x(b,100),c=x(c,100);var d=K.floor(a),e=a-d,f=c*(1-b),g=c*(1-e*b),h=c*(1-(1-e)*b),i=d%6,j=[c,g,f,f,h,c][i],k=[h,c,c,g,f,f][i],l=[f,f,h,c,c,g][i];return{r:255*j,g:255*k,b:255*l}}function g(a,b,c,d){var e=[C(L(a).toString(16)),C(L(b).toString(16)),C(L(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function h(a,b,c,d){var e=[C(E(d)),C(L(a).toString(16)),C(L(b).toString(16)),C(L(c).toString(16))];return e.join("")}function i(a,b){b=0===b?0:b||10;var c=P(a).toHsl();return c.s-=b/100,c.s=y(c.s),P(c)}function j(a,b){b=0===b?0:b||10;var c=P(a).toHsl();return c.s+=b/100,c.s=y(c.s),P(c)}function k(a){return P(a).desaturate(100)}function l(a,b){b=0===b?0:b||10;var c=P(a).toHsl();return c.l+=b/100,c.l=y(c.l),P(c)}function m(a,b){b=0===b?0:b||10;var c=P(a).toRgb();return c.r=N(0,M(255,c.r-L(255*-(b/100)))),c.g=N(0,M(255,c.g-L(255*-(b/100)))),c.b=N(0,M(255,c.b-L(255*-(b/100)))),P(c)}function n(a,b){b=0===b?0:b||10;var c=P(a).toHsl();return c.l-=b/100,c.l=y(c.l),P(c)}function o(a,b){var c=P(a).toHsl(),d=(L(c.h)+b)%360;return c.h=0>d?360+d:d,P(c)}function p(a){var b=P(a).toHsl();return b.h=(b.h+180)%360,P(b)}function q(a){var b=P(a).toHsl(),c=b.h;return[P(a),P({h:(c+120)%360,s:b.s,l:b.l}),P({h:(c+240)%360,s:b.s,l:b.l})]}function r(a){var b=P(a).toHsl(),c=b.h;return[P(a),P({h:(c+90)%360,s:b.s,l:b.l}),P({h:(c+180)%360,s:b.s,l:b.l}),P({h:(c+270)%360,s:b.s,l:b.l})]}function s(a){var b=P(a).toHsl(),c=b.h;return[P(a),P({h:(c+72)%360,s:b.s,l:b.l}),P({h:(c+216)%360,s:b.s,l:b.l})]}function t(a,b,c){b=b||6,c=c||30;var d=P(a).toHsl(),e=360/c,f=[P(a)];for(d.h=(d.h-(e*b>>1)+720)%360;--b;)d.h=(d.h+e)%360,f.push(P(d));return f}function u(a,b){b=b||6;for(var c=P(a).toHsv(),d=c.h,e=c.s,f=c.v,g=[],h=1/b;b--;)g.push(P({h:d,s:e,v:f})),f=(f+h)%1;return g}function v(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}function w(a){return a=parseFloat(a),(isNaN(a)||0>a||a>1)&&(a=1),a}function x(a,b){A(a)&&(a="100%");var c=B(a);return a=M(b,N(0,parseFloat(a))),c&&(a=parseInt(a*b,10)/100),K.abs(a-b)<1e-6?1:a%b/parseFloat(b)}function y(a){return M(1,N(0,a))}function z(a){return parseInt(a,16)}function A(a){return"string"==typeof a&&-1!=a.indexOf(".")&&1===parseFloat(a)}function B(a){return"string"==typeof a&&-1!=a.indexOf("%")}function C(a){return 1==a.length?"0"+a:""+a}function D(a){return 1>=a&&(a=100*a+"%"),a}function E(a){return Math.round(255*parseFloat(a)).toString(16)}function F(a){return z(a)/255}function G(a){a=a.replace(H,"").replace(I,"").toLowerCase();var b=!1;if(Q[a])a=Q[a],b=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};var c;return(c=S.rgb.exec(a))?{r:c[1],g:c[2],b:c[3]}:(c=S.rgba.exec(a))?{r:c[1],g:c[2],b:c[3],a:c[4]}:(c=S.hsl.exec(a))?{h:c[1],s:c[2],l:c[3]}:(c=S.hsla.exec(a))?{h:c[1],s:c[2],l:c[3],a:c[4]}:(c=S.hsv.exec(a))?{h:c[1],s:c[2],v:c[3]}:(c=S.hsva.exec(a))?{h:c[1],s:c[2],v:c[3],a:c[4]}:(c=S.hex8.exec(a))?{a:F(c[1]),r:z(c[2]),g:z(c[3]),b:z(c[4]),format:b?"name":"hex8"}:(c=S.hex6.exec(a))?{r:z(c[1]),g:z(c[2]),b:z(c[3]),format:b?"name":"hex"}:(c=S.hex3.exec(a))?{r:z(c[1]+""+c[1]),g:z(c[2]+""+c[2]),b:z(c[3]+""+c[3]),format:b?"name":"hex"}:!1}var H=/^[\s,#]+/,I=/\s+$/,J=0,K=Math,L=K.round,M=K.min,N=K.max,O=K.random,P=function(b,c){if(b=b?b:"",c=c||{},b instanceof P)return b;if(!(this instanceof P))return new P(b,c);var d=a(b);this._originalInput=b,this._r=d.r,this._g=d.g,this._b=d.b,this._a=d.a,this._roundA=L(100*this._a)/100,this._format=c.format||d.format,this._gradientType=c.gradientType,this._r<1&&(this._r=L(this._r)),this._g<1&&(this._g=L(this._g)),this._b<1&&(this._b=L(this._b)),this._ok=d.ok,this._tc_id=J++};P.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},setAlpha:function(a){return this._a=w(a),this._roundA=L(100*this._a)/100,this},toHsv:function(){var a=e(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=e(this._r,this._g,this._b),b=L(360*a.h),c=L(100*a.s),d=L(100*a.v);return 1==this._a?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var a=c(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=c(this._r,this._g,this._b),b=L(360*a.h),d=L(100*a.s),e=L(100*a.l);return 1==this._a?"hsl("+b+", "+d+"%, "+e+"%)":"hsla("+b+", "+d+"%, "+e+"%, "+this._roundA+")"},toHex:function(a){return g(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(){return h(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:L(this._r),g:L(this._g),b:L(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+L(this._r)+", "+L(this._g)+", "+L(this._b)+")":"rgba("+L(this._r)+", "+L(this._g)+", "+L(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:L(100*x(this._r,255))+"%",g:L(100*x(this._g,255))+"%",b:L(100*x(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+L(100*x(this._r,255))+"%, "+L(100*x(this._g,255))+"%, "+L(100*x(this._b,255))+"%)":"rgba("+L(100*x(this._r,255))+"%, "+L(100*x(this._g,255))+"%, "+L(100*x(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:R[g(this._r,this._g,this._b,!0)]||!1},toFilter:function(a){var b="#"+h(this._r,this._g,this._b,this._a),c=b,d=this._gradientType?"GradientType = 1, ":"";if(a){var e=P(a);c=e.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+d+"startColorstr="+b+",endColorstr="+c+")"},toString:function(a){var b=!!a;a=a||this._format;var c=!1,d=this._a<1&&this._a>=0,e=!b&&d&&("hex"===a||"hex6"===a||"hex3"===a||"name"===a);return e?"name"===a&&0===this._a?this.toName():this.toRgbString():("rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),("hex"===a||"hex6"===a)&&(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"hex8"===a&&(c=this.toHex8String()),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),c||this.toHexString())},_applyModification:function(a,b){var c=a.apply(null,[this].concat([].slice.call(b)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(l,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(n,arguments)},desaturate:function(){return this._applyModification(i,arguments)},saturate:function(){return this._applyModification(j,arguments)},greyscale:function(){return this._applyModification(k,arguments)},spin:function(){return this._applyModification(o,arguments)},_applyCombination:function(a,b){return a.apply(null,[this].concat([].slice.call(b)))},analogous:function(){return this._applyCombination(t,arguments)},complement:function(){return this._applyCombination(p,arguments)},monochromatic:function(){return this._applyCombination(u,arguments)},splitcomplement:function(){return this._applyCombination(s,arguments)},triad:function(){return this._applyCombination(q,arguments)},tetrad:function(){return this._applyCombination(r,arguments)}},P.fromRatio=function(a,b){if("object"==typeof a){var c={};for(var d in a)a.hasOwnProperty(d)&&("a"===d?c[d]=a[d]:c[d]=D(a[d]));a=c}return P(a,b)},P.equals=function(a,b){return a&&b?P(a).toRgbString()==P(b).toRgbString():!1},P.random=function(){return P.fromRatio({r:O(),g:O(),b:O()})},P.mix=function(a,b,c){c=0===c?0:c||50;var d,e=P(a).toRgb(),f=P(b).toRgb(),g=c/100,h=2*g-1,i=f.a-e.a;d=h*i==-1?h:(h+i)/(1+h*i),d=(d+1)/2;var j=1-d,k={r:f.r*d+e.r*j,g:f.g*d+e.g*j,b:f.b*d+e.b*j,a:f.a*g+e.a*(1-g)};return P(k)},P.readability=function(a,b){var c=P(a),d=P(b),e=c.toRgb(),f=d.toRgb(),g=c.getBrightness(),h=d.getBrightness(),i=Math.max(e.r,f.r)-Math.min(e.r,f.r)+Math.max(e.g,f.g)-Math.min(e.g,f.g)+Math.max(e.b,f.b)-Math.min(e.b,f.b);return{brightness:Math.abs(g-h),color:i}},P.isReadable=function(a,b){var c=P.readability(a,b);return c.brightness>125&&c.color>500},P.mostReadable=function(a,b){for(var c=null,d=0,e=!1,f=0;f<b.length;f++){var g=P.readability(a,b[f]),h=g.brightness>125&&g.color>500,i=3*(g.brightness/125)+g.color/500;(h&&!e||h&&e&&i>d||!h&&!e&&i>d)&&(e=h,d=i,c=P(b[f]))}return c};var Q=P.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},R=P.hexNames=v(Q),S=function(){var a="[-\\+]?\\d+%?",b="[-\\+]?\\d*\\.\\d+%?",c="(?:"+b+")|(?:"+a+")",d="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?",e="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?";return{rgb:new RegExp("rgb"+d),rgba:new RegExp("rgba"+e),hsl:new RegExp("hsl"+d),hsla:new RegExp("hsla"+e),hsv:new RegExp("hsv"+d),hsva:new RegExp("hsva"+e),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();window.tinycolor=P}(),a(function(){a.fn.spectrum.load&&a.fn.spectrum.processNativeColorInputs()})});