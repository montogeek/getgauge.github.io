/*!
 * Stellar.js v0.6.2
 * http://markdalgleish.com/projects/stellar.js
 *
 * Copyright 2014, Mark Dalgleish
 * This content is released under the MIT license
 * http://markdalgleish.mit-license.org
 */
!function(t,e,i,n){function o(e,i){this.element=e,this.options=t.extend({},r,i),this._defaults=r,this._name=s,this.init()}var s="stellar",r={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},a={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,e){t.scrollLeft(e)},getTop:function(t){return t.scrollTop()},setTop:function(t,e){t.scrollTop(e)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var e=getComputedStyle(t[0])[c];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var e=getComputedStyle(t[0])[c];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[5],10):0}}},l={position:{setLeft:function(t,e){t.css("left",e)},setTop:function(t,e){t.css("top",e)}},transform:{setPosition:function(t,e,i,n,o){t[0].style[c]="translate3d("+(e-i)+"px, "+(n-o)+"px, 0)"}}},f=function(){var e,i=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,n=t("script")[0].style,o="";for(e in n)if(i.test(e)){o=e.match(i)[0];break}return"WebkitOpacity"in n&&(o="Webkit"),"KhtmlOpacity"in n&&(o="Khtml"),function(t){return o+(o.length>0?t.charAt(0).toUpperCase()+t.slice(1):t)}}(),c=f("transform"),h=t("<div />",{style:"background:#fff"}).css("background-position-x")!==n,u=h?function(t,e,i){t.css({"background-position-x":e,"background-position-y":i})}:function(t,e,i){t.css("background-position",e+" "+i)},p=h?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},d=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};o.prototype={init:function(){this.options.name=s+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===i.body&&(this.element=e),this.$scrollElement=t(this.element),this.$element=this.element===e?t("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==n?t(this.options.viewportElement):this.$scrollElement[0]===e||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,e=a[t.options.scrollProperty];this._getScrollLeft=function(){return e.getLeft(t.$scrollElement)},this._getScrollTop=function(){return e.getTop(t.$scrollElement)}},_defineSetters:function(){var e=this,i=a[e.options.scrollProperty],n=l[e.options.positionProperty],o=i.setLeft,s=i.setTop;this._setScrollLeft="function"==typeof o?function(t){o(e.$scrollElement,t)}:t.noop,this._setScrollTop="function"==typeof s?function(t){s(e.$scrollElement,t)}:t.noop,this._setPosition=n.setPosition||function(t,i,o,s,r){e.options.horizontalScrolling&&n.setLeft(t,i,o),e.options.verticalScrolling&&n.setTop(t,s,r)}},_handleWindowLoadAndResize:function(){var i=this,n=t(e);i.options.responsive&&n.bind("load."+this.name,function(){i.refresh()}),n.bind("resize."+this.name,function(){i._detectViewport(),i.options.responsive&&i.refresh()})},refresh:function(i){var n=this,o=n._getScrollLeft(),s=n._getScrollTop();i&&i.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),i&&i.firstLoad&&/WebKit/.test(navigator.userAgent)&&t(e).load(function(){var t=n._getScrollLeft(),e=n._getScrollTop();n._setScrollLeft(t+1),n._setScrollTop(e+1),n._setScrollLeft(t),n._setScrollTop(e)}),this._setScrollLeft(o),this._setScrollTop(s)},_detectViewport:function(){var t=this.$viewportElement.offset(),e=null!==t&&t!==n;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=e?t.top:0,this.viewportOffsetLeft=e?t.left:0},_findParticles:function(){{var e=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==n)for(var i=this.particles.length-1;i>=0;i--)this.particles[i].$element.data("stellar-elementIsActive",n);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var i,o,s,r,a,l,f,c,h,u=t(this),p=0,d=0,g=0,m=0;if(u.data("stellar-elementIsActive")){if(u.data("stellar-elementIsActive")!==this)return}else u.data("stellar-elementIsActive",this);e.options.showElement(u),u.data("stellar-startingLeft")?(u.css("left",u.data("stellar-startingLeft")),u.css("top",u.data("stellar-startingTop"))):(u.data("stellar-startingLeft",u.css("left")),u.data("stellar-startingTop",u.css("top"))),s=u.position().left,r=u.position().top,a="auto"===u.css("margin-left")?0:parseInt(u.css("margin-left"),10),l="auto"===u.css("margin-top")?0:parseInt(u.css("margin-top"),10),c=u.offset().left-a,h=u.offset().top-l,u.parents().each(function(){var e=t(this);return e.data("stellar-offset-parent")===!0?(p=g,d=m,f=e,!1):(g+=e.position().left,void(m+=e.position().top))}),i=u.data("stellar-horizontal-offset")!==n?u.data("stellar-horizontal-offset"):f!==n&&f.data("stellar-horizontal-offset")!==n?f.data("stellar-horizontal-offset"):e.horizontalOffset,o=u.data("stellar-vertical-offset")!==n?u.data("stellar-vertical-offset"):f!==n&&f.data("stellar-vertical-offset")!==n?f.data("stellar-vertical-offset"):e.verticalOffset,e.particles.push({$element:u,$offsetParent:f,isFixed:"fixed"===u.css("position"),horizontalOffset:i,verticalOffset:o,startingPositionLeft:s,startingPositionTop:r,startingOffsetLeft:c,startingOffsetTop:h,parentOffsetLeft:p,parentOffsetTop:d,stellarRatio:u.data("stellar-ratio")!==n?u.data("stellar-ratio"):1,width:u.outerWidth(!0),height:u.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var e,i=this,o=this._getScrollLeft(),s=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(e=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(e=e.add(this.$element)),e.each(function(){var e,r,a,l,f,c,h,d=t(this),g=p(d),m=0,v=0,y=0,b=0;if(d.data("stellar-backgroundIsActive")){if(d.data("stellar-backgroundIsActive")!==this)return}else d.data("stellar-backgroundIsActive",this);d.data("stellar-backgroundStartingLeft")?u(d,d.data("stellar-backgroundStartingLeft"),d.data("stellar-backgroundStartingTop")):(d.data("stellar-backgroundStartingLeft",g[0]),d.data("stellar-backgroundStartingTop",g[1])),a="auto"===d.css("margin-left")?0:parseInt(d.css("margin-left"),10),l="auto"===d.css("margin-top")?0:parseInt(d.css("margin-top"),10),f=d.offset().left-a-o,c=d.offset().top-l-s,d.parents().each(function(){var e=t(this);return e.data("stellar-offset-parent")===!0?(m=y,v=b,h=e,!1):(y+=e.position().left,void(b+=e.position().top))}),e=d.data("stellar-horizontal-offset")!==n?d.data("stellar-horizontal-offset"):h!==n&&h.data("stellar-horizontal-offset")!==n?h.data("stellar-horizontal-offset"):i.horizontalOffset,r=d.data("stellar-vertical-offset")!==n?d.data("stellar-vertical-offset"):h!==n&&h.data("stellar-vertical-offset")!==n?h.data("stellar-vertical-offset"):i.verticalOffset,i.backgrounds.push({$element:d,$offsetParent:h,isFixed:"fixed"===d.css("background-attachment"),horizontalOffset:e,verticalOffset:r,startingValueLeft:g[0],startingValueTop:g[1],startingBackgroundPositionLeft:isNaN(parseInt(g[0],10))?0:parseInt(g[0],10),startingBackgroundPositionTop:isNaN(parseInt(g[1],10))?0:parseInt(g[1],10),startingPositionLeft:d.position().left,startingPositionTop:d.position().top,startingOffsetLeft:f,startingOffsetTop:c,parentOffsetLeft:m,parentOffsetTop:v,stellarRatio:d.data("stellar-background-ratio")===n?1:d.data("stellar-background-ratio")})}))},_reset:function(){var t,e,i,n,o;for(o=this.particles.length-1;o>=0;o--)t=this.particles[o],e=t.$element.data("stellar-startingLeft"),i=t.$element.data("stellar-startingTop"),this._setPosition(t.$element,e,e,i,i),this.options.showElement(t.$element),t.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(o=this.backgrounds.length-1;o>=0;o--)n=this.backgrounds[o],n.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),u(n.$element,n.startingValueLeft,n.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=t.noop,t(e).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var i=this,n=t(e);n.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),n.bind("resize.horizontal-"+this.name,function(){i.horizontalOffset=i.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),n.bind("resize.vertical-"+this.name,function(){i.verticalOffset=i.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t,e,i,n,o,s,r,a,l,f,c=this._getScrollLeft(),h=this._getScrollTop(),p=!0,d=!0;if(this.currentScrollLeft!==c||this.currentScrollTop!==h||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=c,this.currentScrollTop=h,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,f=this.particles.length-1;f>=0;f--)t=this.particles[f],e=t.isFixed?1:0,this.options.horizontalScrolling?(s=(c+t.horizontalOffset+this.viewportOffsetLeft+t.startingPositionLeft-t.startingOffsetLeft+t.parentOffsetLeft)*-(t.stellarRatio+e-1)+t.startingPositionLeft,a=s-t.startingPositionLeft+t.startingOffsetLeft):(s=t.startingPositionLeft,a=t.startingOffsetLeft),this.options.verticalScrolling?(r=(h+t.verticalOffset+this.viewportOffsetTop+t.startingPositionTop-t.startingOffsetTop+t.parentOffsetTop)*-(t.stellarRatio+e-1)+t.startingPositionTop,l=r-t.startingPositionTop+t.startingOffsetTop):(r=t.startingPositionTop,l=t.startingOffsetTop),this.options.hideDistantElements&&(d=!this.options.horizontalScrolling||a+t.width>(t.isFixed?0:c)&&a<(t.isFixed?0:c)+this.viewportWidth+this.viewportOffsetLeft,p=!this.options.verticalScrolling||l+t.height>(t.isFixed?0:h)&&l<(t.isFixed?0:h)+this.viewportHeight+this.viewportOffsetTop),d&&p?(t.isHidden&&(this.options.showElement(t.$element),t.isHidden=!1),this._setPosition(t.$element,s,t.startingPositionLeft,r,t.startingPositionTop)):t.isHidden||(this.options.hideElement(t.$element),t.isHidden=!0);for(f=this.backgrounds.length-1;f>=0;f--)i=this.backgrounds[f],e=i.isFixed?0:1,n=this.options.horizontalScrolling?(c+i.horizontalOffset-this.viewportOffsetLeft-i.startingOffsetLeft+i.parentOffsetLeft-i.startingBackgroundPositionLeft)*(e-i.stellarRatio)+"px":i.startingValueLeft,o=this.options.verticalScrolling?(h+i.verticalOffset-this.viewportOffsetTop-i.startingOffsetTop+i.parentOffsetTop-i.startingBackgroundPositionTop)*(e-i.stellarRatio)+"px":i.startingValueTop,u(i.$element,n,o)}},_handleScrollEvent:function(){var t=this,e=!1,i=function(){t._repositionElements(),e=!1},n=function(){e||(d(i),e=!0)};this.$scrollElement.bind("scroll."+this.name,n),n()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){d(t._animationLoop),t._repositionElements()},this._animationLoop()}},t.fn[s]=function(e){var i=arguments;return e===n||"object"==typeof e?this.each(function(){t.data(this,"plugin_"+s)||t.data(this,"plugin_"+s,new o(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var n=t.data(this,"plugin_"+s);n instanceof o&&"function"==typeof n[e]&&n[e].apply(n,Array.prototype.slice.call(i,1)),"destroy"===e&&t.data(this,"plugin_"+s,null)}):void 0},t[s]=function(){var i=t(e);return i.stellar.apply(i,Array.prototype.slice.call(arguments,0))},t[s].scrollProperty=a,t[s].positionProperty=l,e.Stellar=o}(jQuery,this,document),/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
function(){var t,e,i,n,o,s=function(t,e){return function(){return t.apply(e,arguments)}},r=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var i,n;for(i in e)n=e[i],null==t[i]&&(t[i]=n);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,i,n){var o;return null==e&&(e=!1),null==i&&(i=!1),null==n&&(n=null),null!=document.createEvent?(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,e,i,n)):null!=document.createEventObject?(o=document.createEventObject(),o.eventType=t):o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,i){return null!=t.addEventListener?t.addEventListener(e,i,!1):null!=t.attachEvent?t.attachEvent("on"+e,i):t[e]=i},t.prototype.removeEvent=function(t,e,i){return null!=t.removeEventListener?t.removeEventListener(e,i,!1):null!=t.detachEvent?t.detachEvent("on"+e,i):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),i=this.WeakMap||this.MozWeakMap||(i=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,i,n,o,s;for(s=this.keys,e=n=0,o=s.length;o>n;e=++n)if(i=s[e],i===t)return this.values[e]},t.prototype.set=function(t,e){var i,n,o,s,r;for(r=this.keys,i=o=0,s=r.length;s>o;i=++o)if(n=r[i],n===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),n=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var i;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(i=t.currentStyle)?i[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=s(this.scrollCallback,this),this.scrollHandler=s(this.scrollHandler,this),this.resetAnimation=s(this.resetAnimation,this),this.start=s(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new i,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,i,n,o;if(this.stopped=!1,this.boxes=function(){var t,i,n,o;for(n=this.element.querySelectorAll("."+this.config.boxClass),o=[],t=0,i=n.length;i>t;t++)e=n[t],o.push(e);return o}.call(this),this.all=function(){var t,i,n,o;for(n=this.boxes,o=[],t=0,i=n.length;i>t;t++)e=n[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,i=0,n=o.length;n>i;i++)e=o[i],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var i,n,o,s,r;for(r=[],i=0,n=e.length;n>i;i++)s=e[i],r.push(function(){var t,e,i,n;for(i=s.addedNodes||[],n=[],t=0,e=i.length;e>t;t++)o=i[t],n.push(this.doSync(o));return n}.call(t));return r}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,i,n,o,s;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,o=t.querySelectorAll("."+this.config.boxClass),s=[],i=0,n=o.length;n>i;i++)e=o[i],r.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),s.push(this.scrolled=!0)):s.push(void 0);return s}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var i,n,o;return n=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(s){return function(){return s.customStyle(t,e,n,i,o)}}(this))},o.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),o.prototype.resetStyle=function(){var t,e,i,n,o;for(n=this.boxes,o=[],e=0,i=n.length;i>e;e++)t=n[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()):void 0},o.prototype.customStyle=function(t,e,i,n,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),n&&this.vendorSet(t.style,{animationDelay:n}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var i,n,o,s;n=[];for(i in e)o=e[i],t[""+i]=o,n.push(function(){var e,n,r,a;for(r=this.vendors,a=[],e=0,n=r.length;n>e;e++)s=r[e],a.push(t[""+s+i.charAt(0).toUpperCase()+i.substr(1)]=o);return a}.call(this));return n},o.prototype.vendorCSS=function(t,e){var i,o,s,r,a,l;for(a=n(t),r=a.getPropertyCSSValue(e),s=this.vendors,i=0,o=s.length;o>i;i++)l=s[i],r=r||a.getPropertyCSSValue("-"+l+"-"+e);return r},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(i){e=n(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,i,n,o;for(n=this.boxes,o=[],e=0,i=n.length;i>e;e++)t=n[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,i,n,o,s;return i=t.getAttribute("data-wow-offset")||this.config.offset,s=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,o=s+Math.min(this.element.clientHeight,this.util().innerHeight())-i,n=this.offsetTop(t),e=n+t.clientHeight,o>=n&&e>=s},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}.call(this),$(document).ready(function(t){t(window).stellar({responsive:!0,horizontalScrolling:!1}),t("a.scroll-animate").click(function(){return t("html, body").animate({scrollTop:t('[name="'+t.attr(this,"href").substr(1)+'"]').offset().top},500),!1}),(new WOW).init();var e=t(".header-nav"),i=t(".navigation-menu-button");t(i).on("click",function(){e.slideToggle()}),t(".features-filter-selector-wrap").on("click",".features-selector",function(e){e.preventDefault(),t(this).closest(".features-filter-selector-wrap").toggleClass("active")}),t(".features-filter-selector-wrap").on("click",".features-filter-value",function(){var e=t(this).attr("data-value"),i=t(this).text();t(this).closest(".features").removeClass().addClass("features "+e),t(this).closest(".features-filter-selector-wrap").removeClass("active").find(".features-selected-value").text(i)})});