!function(){"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(r){var a=function(r,a){if("object"!=t(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var i=n.call(r,a||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(r)}(r,"string");return"symbol"==t(a)?a:a+""}function a(t,a,n){return(a=r(a))in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}var n={d:(t,r)=>{for(var a in r)n.o(r,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r)},i={};n.d(i,{S:()=>l});var o={top:"paddingBottom",bottom:"paddingTop",left:"paddingRight",right:"paddingLeft"};function e(t){var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#x60;"};return t.replace(/&(amp|lt|gt|quot|#39|x60);|[\&<>"'`]/g,(function(t){return"&"===t[0]?t:r[t]}))}function v(t){return encodeURI(t)}function c(t,r){return t[r]||r}function s(){return s=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)({}).hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},s.apply(null,arguments)}var d=document,l=function(){function t(t){var r=this,a=void 0===t?{}:t,n=a.placement,i=void 0===n?"right":n,o=a.autoFlip,e=void 0===o||o,v=a.offset,c=void 0===v?10:v,s=a.delayToShow,d=void 0===s?500:s,l=a.delayToHide,u=void 0===l?300:l,h=a.additionalClass,f=void 0===h?"":h,g=a.myHash,_=void 0===g?"":g,p=a.onQueryHovercardRef,m=void 0===p?function(t){return t}:p,b=a.onFetchProfileStart,w=void 0===b?function(){}:b,y=a.onFetchProfileSuccess,k=void 0===y?function(){}:y,j=a.onFetchProfileFailure,O=void 0===j?function(){}:j,S=a.onHovercardShown,x=void 0===S?function(){}:S,M=a.onHovercardHidden,I=void 0===M?function(){}:M,A=a.i18n,H=void 0===A?{}:A;this.t={},this.i=[],this.v=new Map,this.l=new Map,this.u=new Map,this.attach=function(t,a){var n=void 0===a?{}:a,i=n.dataAttributeName,o=void 0===i?"gravatar-hash":i,e=n.ignoreSelector;t&&(r.detach(),r._(t,o,e).forEach((function(t){t.ref.addEventListener("mouseenter",(function(a){return r.p(a,t)})),t.ref.addEventListener("mouseleave",(function(a){return r.m(a,t)}))})))},this.detach=function(){r.i.length&&(r.i.forEach((function(t){var a=t.ref;a.removeEventListener("mouseenter",(function(){return r.p})),a.removeEventListener("mouseleave",(function(){return r.m}))})),r.i=[])},this.k=i,this.j=e,this.O=c,this.M=d,this.I=u,this.A=f,this.H=_,this.C=m,this.T=w,this.U=k,this.B=O,this.L=x,this.R=I,this.t=H}var r=t.prototype;return r._=function(t,r,a){var n=this,i=[],o=r.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})),e=a?Array.from(d.querySelectorAll(a)):[],v="gravatar.com/avatar/";return o&&t.dataset[o]||"IMG"===t.tagName&&t.src.includes(v)?i=[t]:(i=Array.from(t.querySelectorAll('img[src*="'+v+'"]')),r&&(i=[].concat(i.filter((function(t){return!t.hasAttribute("data-"+r)})),Array.from(t.querySelectorAll("[data-"+r+"]"))))),this.i=i.map((function(t,r){if(e.includes(t))return null;var a,i,v=t.dataset[o];if(v?(a=v.split("?")[0],i=v):"IMG"===t.tagName&&(a=t.src.split("/").pop().split("?")[0],i=t.src),!a)return null;var c=new URLSearchParams(i),s=c.get("d")||c.get("default"),d=c.get("f")||c.get("forcedefault"),l=c.get("r")||c.get("rating");return{id:"gravatar-hovercard-"+a+"-"+r,hash:a,params:(i=[s&&"d="+s,d&&"f="+d,l&&"r="+l].filter(Boolean).join("&"))?"?"+i:"",ref:n.C(t)||t}})).filter(Boolean),this.i},r.F=function(r){var a=this,n=r.id,i=r.hash,e=r.params,v=r.ref,l=setTimeout((function(){if(!d.getElementById(n)){var r;if(a.u.has(i)){var l=a.u.get(i);r=t.createHovercard(s({},l,{avatarUrl:l.avatarUrl+e}),{additionalClass:a.A,myHash:a.H,i18n:a.t})}else r=t.createHovercardSkeleton({additionalClass:a.A}),a.T(i),fetch("https://api.gravatar.com/v3/profiles/"+i+"?source=hovercard").then((function(t){if(200!==t.status)throw t.status;return t.json()})).then((function(n){var o;a.u.set(i,{hash:n.hash,avatarUrl:n.avatar_url,profileUrl:n.profile_url,displayName:n.display_name,location:n.location,description:n.description,jobTitle:n.job_title,company:n.company,verifiedAccounts:null==(o=n.verified_accounts)?void 0:o.map((function(t){return{type:t.service_type,label:t.service_label,icon:t.service_icon,url:t.url}}))});var v=a.u.get(i),c=t.createHovercard(s({},v,{avatarUrl:v.avatarUrl+e}),{additionalClass:a.A,myHash:a.H,i18n:a.t}).firstElementChild;r.classList.remove("gravatar-hovercard--skeleton"),r.replaceChildren(c),a.U(i,a.u.get(i))})).catch((function(n){var o=c(a.t,"Sorry, we are unable to load this Gravatar profile.");429===n&&(o=c(a.t,"Too Many Requests.")),500===n&&(o=c(a.t,"Internal Server Error."));var v=t.createHovercardError("https://0.gravatar.com/avatar/"+i+e,o,{additionalClass:a.A}).firstElementChild;r.classList.add("gravatar-hovercard--error"),r.classList.remove("gravatar-hovercard--skeleton"),r.replaceChildren(v),a.B(i,{code:n,message:o})}));r.id=n,r.addEventListener("mouseenter",(function(){return clearInterval(a.l.get(n))})),r.addEventListener("mouseleave",(function(){return a.G(n)})),d.body.appendChild(r);var u=function(t,r,a){var n=void 0===a?{}:a,i=n.placement,e=void 0===i?"right":i,v=n.offset,c=void 0===v?0:v,s=n.autoFlip,d=void 0===s||s,l=t.getBoundingClientRect(),u=r.getBoundingClientRect(),h=l.top+scrollY,f=l.bottom+scrollY,g=l.right+scrollX,_=l.left+scrollX,p=0,m=0,b=e.split("-"),w=b[0],y=b[1];if(c=Math.max(0,c),d){var k=l.top,j=innerHeight-l.bottom,O=l.left,S=innerWidth-l.right,x=u.height+c,M=u.width+c;"top"===w&&k<x&&j>k&&(w="bottom"),"bottom"===w&&j<x&&k>j&&(w="top"),"left"===w&&O<M&&S>O&&(w="right"),"right"===w&&S<M&&O>S&&(w="left")}return"top"===w||"bottom"===w?(p=_+l.width/2-u.width/2,m="top"===w?h-u.height-c:f,"start"===y&&(p=_),"end"===y&&(p=g-u.width)):(p="right"===w?g:_-u.width-c,m=h+l.height/2-u.height/2,"start"===y&&(m=h),"end"===y&&(m=f-u.height)),{x:p,y:m,padding:o[w],paddingValue:c}}(v,r,{placement:a.k,offset:a.O,autoFlip:a.j}),h=u.x,f=u.y,g=u.padding,_=u.paddingValue;r.style.position="absolute",r.style.left=h+"px",r.style.top=f+"px",r.style[g]=_+"px",a.L(i,r)}}),this.M);this.v.set(n,l)},r.G=function(t){var r=this,a=setTimeout((function(){var a=d.getElementById(t);a&&(a.remove(),r.R(t,a))}),this.I);this.l.set(t,a)},r.p=function(t,r){"ontouchstart"in d||(t.stopImmediatePropagation(),clearInterval(this.l.get(r.id)),this.F(r))},r.m=function(t,r){var a=r.id;"ontouchstart"in d||(t.stopImmediatePropagation(),clearInterval(this.v.get(a)),this.G(a))},t}();l.createHovercard=function(t,r){var a=void 0===r?{}:r,n=a.additionalClass,i=a.myHash,o=a.i18n,s=void 0===o?{}:o,l=t.hash,u=t.avatarUrl,h=t.profileUrl,f=t.displayName,g=t.location,_=t.description,p=t.jobTitle,m=t.company,b=t.verifiedAccounts,w=void 0===b?[]:b,y=d.createElement("div");y.className="gravatar-hovercard"+(n?" "+n:"");var k=v(h+"?utm_source=hovercard"),j=e(f),O=!_&&i===l,S=w.slice(0,3).reduce((function(t,r){var a=r.label,n=r.icon,i=r.url,o=r.type;return t.push('\n\t\t\t\t\t<a class="gravatar-hovercard__social-link" href="'+v(i)+'" target="_blank" data-service-name="'+o+'">\n\t\t\t\t\t\t<img class="gravatar-hovercard__social-icon" src="'+v(n)+'" width="32" height="32" alt="'+e(a)+'" />\n\t\t\t\t\t</a>\n\t\t\t\t'),t}),[]).join(""),x=[p,m].filter(Boolean).join(", ");return y.innerHTML='\n\t\t\t<div class="gravatar-hovercard__inner">\n\t\t\t\t<div class="gravatar-hovercard__header">\n\t\t\t\t\t<a class="gravatar-hovercard__avatar-link" href="'+k+'" target="_blank">\n\t\t\t\t\t\t<img class="gravatar-hovercard__avatar" src="'+v(u)+'" width="72" height="72" alt="'+j+'" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="gravatar-hovercard__personal-info-link" href="'+k+'" target="_blank">\n\t\t\t\t\t\t<h4 class="gravatar-hovercard__name">'+j+"</h4>\n\t\t\t\t\t\t"+(x?'<p class="gravatar-hovercard__job">'+e(x)+"</p>":"")+"\n\t\t\t\t\t\t"+(g?'<p class="gravatar-hovercard__location">'+e(g)+"</p>":"")+'\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class="gravatar-hovercard__body">\n\t\t\t\t\t'+(_?'<p class="gravatar-hovercard__description">'+e(_)+"</p>":"")+'\n\t\t\t\t</div>\n\t\t\t\t<div class="gravatar-hovercard__footer">\n\t\t\t\t\t<div class="gravatar-hovercard__social-links">\n\t\t\t\t\t\t<a class="gravatar-hovercard__social-link" href="'+k+'" target="_blank" data-service-name="gravatar">\n\t\t\t\t\t\t\t<img class="gravatar-hovercard__social-icon" src="https://secure.gravatar.com/icons/gravatar.svg" width="32" height="32" alt="Gravatar" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t'+S+'\n\t\t\t\t\t</div>\n\t\t\t\t\t<a\n\t\t\t\t\t\tclass="gravatar-hovercard__profile-link'+(O?" gravatar-hovercard__profile-link--edit":"")+'"\n\t\t\t\t\t\thref="'+(O?"https://gravatar.com/profiles/edit?utm_source=hovercard":k)+'"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span class="gravatar-hovercard__profile-link-text">\n\t\t\t\t\t\t\t'+c(s,O?"Edit your profile":"View profile")+'\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t<path d="M12.6667 8.33338L9.16666 12.1667M12.6667 8.33338L2.66666 8.33338M12.6667 8.33338L9.16666 4.83338" stroke-width="1.5"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t',y},l.createHovercardSkeleton=function(t){var r=(void 0===t?{}:t).additionalClass,a=d.createElement("div");return a.className="gravatar-hovercard gravatar-hovercard--skeleton"+(r?" "+r:""),a.innerHTML='\n\t\t\t<div class="gravatar-hovercard__inner">\n\t\t\t\t<div class="gravatar-hovercard__header">\n\t\t\t\t\t<div class="gravatar-hovercard__avatar-link"></div>\n\t\t\t\t\t<div class="gravatar-hovercard__personal-info-link"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="gravatar-hovercard__footer">\n\t\t\t\t\t<div class="gravatar-hovercard__social-link"></div>\n\t\t\t\t\t<div class="gravatar-hovercard__profile-link""></div>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t',a},l.createHovercardError=function(t,r,a){var n=void 0===a?{}:a,i=n.avatarAlt,o=void 0===i?"Avatar":i,e=n.additionalClass,v=d.createElement("div");return v.className="gravatar-hovercard gravatar-hovercard--error"+(e?" "+e:""),v.innerHTML='\n\t\t\t<div class="gravatar-hovercard__inner">\n\t\t\t\t<img class="gravatar-hovercard__avatar" src="'+t+'" width="72" height="72" alt="'+o+'" />\n\t\t\t\t<i class="gravatar-hovercard__error-message">'+r+"</i>\n\t\t\t</div>\n    \t",v};var u,h=i.S,f=JSON.parse('{"El":{"h":"^0.9.0"}}');function g(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,n)}return a}function _(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){a(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var p="".concat(null===(u=f.El.h)||void 0===u?void 0:u.replace(/^[\^~]/,""),"-1");function m(t){new Image(1,1).src="https://pixel.wp.com/g.gif?v=wpcom2&x_grav-hover=".concat(t,"&rand=").concat(Math.random(),"-").concat((new Date).getTime())}window.Gravatar={version:f.El.h,my_hash:"",profile_cb:function(){},createHovercard:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h.createHovercard(t,_({additionalClass:"wp-hovercard"},r))},init:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",a=arguments.length>1?arguments[1]:void 0,n=document;if(new h(_(_({},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),{},{myHash:this.my_hash,additionalClass:"wp-hovercard",onQueryHovercardRef:function(t){var r;return t.classList.add("wp-hovercard-attachment"),t.classList.add("grav-hashed"),"A"!==(null===(r=t.parentElement)||void 0===r?void 0:r.tagName)&&t.classList.add("grav-hijack"),t.onmouseover=function(){return m("hover")},t},onHovercardShown:function(r,a){t.profile_cb(r,a.id);var n=a.querySelector(".gravatar-hovercard__profile-link");n&&(n.onclick=function(){return m("click_view_profile")});var i=a.querySelector(".gravatar-hovercard__profile-link--edit");i&&(i.onclick=function(){return m("click_edit_profile")});var o=a.querySelector(".gravatar-hovercard__avatar-link");o&&(o.onclick=function(){return m("to_profile")});var e=a.querySelector(".gravatar-hovercard__name-location-link");e&&(e.onclick=function(){return m("to_profile")}),a.querySelectorAll(".gravatar-hovercard__social-link").forEach((function(t){t.onclick=function(){return m("click_".concat(t.dataset.serviceName))}})),m("show")},onFetchProfileSuccess:function(){return m("fetch")},onFetchProfileFailure:function(t,r){var a=r.code;return m("profile_".concat(a))}})).attach(n.querySelector(r),{dataAttributeName:"",ignoreSelector:a?"".concat(a,' img[src*="gravatar.com/"]'):""}),!n.querySelector('link[href*="hovercards.min.css"]')){var i,o=n.querySelector('script[src*="/js/hovercards/hovercards"]'),e=o?null===(i=o.getAttribute("src"))||void 0===i?void 0:i.split("?")[1]:"ver=".concat(p);n.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" id="gravatar-card-css" href="https://0.gravatar.com/js/hovercards/hovercards.min.css?'.concat(e,'" />'))}}}}();