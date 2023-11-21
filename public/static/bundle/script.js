(()=>{"use strict";var t=["rectangle","kite","circle"],e={E:0,N:90,W:180,S:270},n={L:90,R:-90,M:0};function r(t){var n=Object.keys(e).find((function(n){return e[n]===t}));return void 0!==n?n:""}function o(t){return t*Math.PI/180}function i(t){if(e.hasOwnProperty(t))return e[t]}function a(t){return t>=360?t%360:t<0?360+t%360:t}function c(t,c,u){return function(t,c,u){var d=t,l=c;return u.split("").map((function(t,c){var u=function(t,c,u){var d,l,s,f,m=(d=c,r(a(e[t]+n[d]))),y=i(m),v=(l=t,s=Math.round(Math.cos(o(e[l]))),f=Math.round(Math.sin(o(e[l]))),[-0===s?Math.abs(s):s,-0===f?Math.abs(f):f]),p=u,h=v[0],E=v[1],I=u[0],b=u[1],A=function(t){if(n.hasOwnProperty(t))return n[t]}(c),L=A&&0!==A?-1*A:0,w=[h+I,E+b];if(0===A)if(g(w))p=w;else{var B=i(t);m=r(a(B=B?B+180:180)),v=[0,0]}else v=[0,0];return{vector:v,rotate:L,direction:m,angle:y,coordinates:p}}(l,t,d);return l=void 0!==u.direction?u.direction:l,d=u.coordinates,{vector:u.vector,rotate:u.rotate,direction:l,angle:i(l),coordinates:d}}))}(t,c,u)}var u,d,l=(u={id:"",name:"",position:[],direction:""},{setId:function(t){return u.id=t},getId:function(){return u.id},setName:function(t){return u.name=t},getName:function(){return u.name},setPosition:function(t){return u.position=t},getPosition:function(){return u.position},setDirection:function(t){return u.direction=t},getDirection:function(){return u.direction}}),s=(d={id:0,name:"",style:"rectangle",size:[0,0],layout:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],occupied:void 0},{setId:function(t){return d.id=t},getId:function(){return d.id},setSize:function(t){return d.size=t},getSize:function(){return d.size},setStyle:function(t){return d.style=t},getStyle:function(){return d.style},setLayout:function(t){return d.layout=t},getLayout:function(){return d.layout},setOccupied:function(t,e){return function(t,e){var n=t[0],r=t[1];if(g([n,r])){var o=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}([],s.getLayout(),!0),i=o.length,a=[],c=a[0],u=a[1];if(e.length){var d=e[0],f=e[1];u=i-f-1,c=d}var m=i-r-1,y=n,v=o.map((function(t,n){return t.map((function(t,r){return n===m&&r===y?l.getId():e.length&&n===u&&r===c?0:t}))}));s.setLayout(v)}}(t,e)},isOccupied:function(t){return g(t)}});function f(e,n,r){var o;s.setId(n),s.setStyle(r),s.setSize((o=e,[parseInt(o[0]),parseInt(o[1])]));var i=function(e,n){var r,o,i=n[0],a=n[1];if(function(e){return t.includes(e)}(e)){if("rectangle"===e)return m([i,a]);if("kite"===e)return function(t){for(var e=2*t-1,n=new Array(e),r=0,o=0;o<e;o++)r=o<t?o+1:e-o,n[o]=new Array(r).fill(0);return n}(i);if("circle"===e)return o=m([2*(r=i)+1,2*r+1]).map((function(t,e){return t.map((function(t,n){return Math.pow(n-r,2)+Math.pow(e-r,2)<=Math.pow(r,2)?t:1}))})),o}return m([i,a])}(r,y(e));return s.setLayout(i)}function m(t){var e=t[0],n=t[1],r=new Array(e).fill(0);return new Array(n).fill(r)}function y(t){return[parseInt(t[0]),parseInt(t[1])]}function g(t){var e=t[0],n=t[1];if(e<0||n<0)return!1;var r=s.getLayout(),o=r.length;return n<o&&e<r[n].length&&(0===r[o-n-1][e]||r[o-n-1][e]===l.getId())}var v,p,h,E,I,b=(v={robotArray:[],plateauArray:[]},{addPlateau:function(t){return v.plateauArray.push(t)},getPlateauArray:function(){return v.plateauArray},addRobot:function(t){return v.robotArray.push(t)},updateCurrentRobot:function(t){return v.robotArray[v.robotArray.length-1]=t},getRobotArray:function(){return v.robotArray},emptyRobotArray:function(){return v.robotArray=[]}});function A(t,e){var n=function(t){return{position:y(t),direction:t[2]}}(e),r=n.position,o=n.direction,i=function(t,e,n,r){var o="".concat(e[0]).concat(t);if(l.setId(o),l.setName(e),l.setPosition(n),l.setDirection(r))return o}(b.getRobotArray().length,t,r,o),a={id:l.getId(),name:t,position:r,direction:o,move:void 0,destination:void 0,layout:s.getLayout(),journey:void 0};return b.addRobot(a),i}function L(t,e){var n=function(t,e){var n=function(t,e,n){if(g(t)){var r=c(t,e,n),o=r[r.length-1].coordinates,i=o[0],a=o[1],u=r[r.length-1].direction,d="".concat(i).concat(a).concat(u);return s.setOccupied([i,a],l.getPosition()),l.setPosition([i,a]),l.setDirection(u),{journey:r,destination:d}}return{journey:void 0,destination:void 0}}(l.getPosition(),l.getDirection(),t);if(n&&e===l.getId()){var r=n.journey,o=n.destination,i={id:e,name:l.getName(),position:l.getPosition(),direction:l.getDirection(),move:t,destination:o,layout:s.getLayout(),journey:r};return b.updateCurrentRobot(i),i}}(t,l.getId());if(n&&n&&n.journey){var r=0;n.journey.forEach((function(t){console.log(t),function(t,e,n,r){var o=document.getElementById("my-robot"),i=t[0],a=t[1],c=0!==a?"translateY(".concat(-100*a,"%)"):0!==i?"translateX(".concat(100*i,"%)"):"rotate(".concat(n,"deg)");if(o){var u=new KeyframeEffect(o,[{transform:c}],{duration:2e3,delay:r,easing:"ease-in-out",fill:"forwards"});new Animation(u,document.timeline).play(),function(t,e){var n,r=t[0],o=t[1],i=document.getElementById("".concat(r,"_").concat(o));i&&(null===(n=e.parentNode)||void 0===n||n.removeChild(e),i.appendChild(e))}(e,o)}}(t.vector,t.coordinates,t.rotate,r),r+=2e3}))}}var w={gridSize:"66",gridStyle:"rectangle",inputs:[["Fred","12N","M"]],moves:"single"};null===(p=document.getElementById("L"))||void 0===p||p.addEventListener("click",(function(){document.getElementById("my-robot"),L("L")})),null===(h=document.getElementById("R"))||void 0===h||h.addEventListener("click",(function(){document.getElementById("my-robot"),L("R")})),null===(E=document.getElementById("M"))||void 0===E||E.addEventListener("click",(function(){document.getElementById("my-robot"),L("M")})),null===(I=document.getElementById("robot-button"))||void 0===I||I.addEventListener("click",(function(){var t,e,n=document.getElementById("plateau-shape"),r=document.getElementById("plateau-size"),o=document.getElementById("plateau-data");if(o&&(o.innerHTML="".concat(n.value," ").concat(r.value)),n&&r){var i=function(t,e){if(t&&e)return function(t,e){b.emptyRobotArray();var n=b.getPlateauArray().length,r=f(t,n,e);return b.addPlateau({gridSize:t,plateau:r,style:e,id:n}),r}("".concat(t).concat(t),e)}(r.value,n.value);i&&(t=n.value,(e=document.getElementById("my-planet"))&&(e.classList.remove("circle","rectangle","kite"),e.classList.add(t)),function(t){var e=document.getElementById("plateau-container");e&&(e.innerHTML="",t.forEach((function(t,n,r){var o=document.createElement("div");o.className="grid-container",o.id="row_".concat(n,"}"),e.prepend(o);var i=t.map((function(t){return"auto"}));o.style.gridTemplateColumns=i.join(" "),t.forEach((function(t,e){if(1!==t){var i=document.createElement("div");i.className="grid-item",i.classList.add("grid-circle-faded"),i.id="matrix_".concat(e,"_").concat(n),i.style.width="".concat(100/r.length,"%"),i.style.padding="".concat(100/r.length,"% 0 0 0"),o.appendChild(i);var a=document.createElement("div");a.className="grid-layer",a.id="".concat(e,"_").concat(n),a.style.height="".concat(100,"%"),a.style.padding="".concat(100/r.length,"% 0 0 0"),i.appendChild(a)}}))})))}(i),w.inputs.forEach((function(t){var e,n,r=t[0],o=t[1],i=(t[2],A(r,o));i&&(function(t){var e=document.getElementById("robot-waiting-area");if(e){var n=document.createElement("div");n.className="grid-robot",n.id=t,e.append(n)}}(i),e=i,(n=document.getElementById(e))&&(n.onmousedown=function(t){var e=t.clientX-n.getBoundingClientRect().left,r=t.clientY-n.getBoundingClientRect().top;n.style.position="absolute";var o=document.querySelector(".grid-item");function i(t,o){n&&(n.style.left=t-e+"px",n.style.top=o-r+"px")}(null==o?void 0:o.offsetWidth)&&(n.style.width="".concat(null==o?void 0:o.offsetWidth,"px")),document.body.append(n),i(t.pageX,t.pageY);var a=null;function c(t){if(i(t.pageX,t.pageY),n){n.hidden=!0;var e=document.elementFromPoint(t.clientX,t.clientY);if(n.hidden=!1,!e)return;var r=e.closest(".droppable");a!=r&&(a&&function(t){t.style.background="yellow"}(a),(a=r)&&function(t){t.style.background="pink",t.style.width="20%"}(a))}}document.addEventListener("mousemove",c),n.onmouseup=function(){document.removeEventListener("mousemove",c),n.onmouseup=null}},n.ondragstart=function(){return!1}))})))}}))})();