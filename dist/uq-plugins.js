$.prototype.delegate=function(t,n,e){return this.each(function(o){o.addEventListener(n,function(n){for(var o=n.target;o!==document&&!$(o).is(t);)o=o.parentNode;o!==document&&e()})})},$.prototype.attr=function(t,n){return void 0===n?this[0].getAttribute(t):this.each(function(e){e.setAttribute(t,n)})},$.prototype.data=function(t,n){return this.attr("data-"+t,n)},$.fn.addClass=function(t){return this.each(function(n){n.classList.add(t)})},$.fn.removeClass=function(t){return this.each(function(n){n.classList.remove(t)})},$.fn.toggleClass=function(t){return this.each(function(n){n.classList.toggle(t)})},$.fn.hasClass=function(t){return this[0].classList.contains(t)},$.prototype.exists=function(){return this.length>0},$.prototype.find=function(t){return $(this[0].querySelector(t))},$.prototype.first=function(){return $(this[0])},$.prototype.html=function(t){return void 0===t?this[0].innerHTML:this.each(function(n){n.innerHTML=t})},$.prototype.is=function(t){var n=this[0];return[].some.call(n.parentNode.querySelectorAll(t),function(t){return t===n})},$.prototype.parent=function(){return $(this[0].parentNode)},$.prototype.raw=function(){return this[0]},$.prototype.ready=function(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)},$.prototype.remove=function(){return this[0].parentNode.removeChild(this[0])},$.prototype.siblings=function(){var t=this[0];return[].filter.call(t.parentNode.children,function(n){return n!==t})},$.fn.hide=function(){return this.each(function(t){t.style.display="none"})},$.fn.show=function(){return this.each(function(t){t.style.display=""})},$.prototype.text=function(t){return void 0===t?this[0].textContent:this.each(function(n){n.textContent=t})};