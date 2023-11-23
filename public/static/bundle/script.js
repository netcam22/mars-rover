(()=>{"use strict";var t=["rectangle","kite","circle"],e={E:0,N:90,W:180,S:270},n={L:90,R:-90,M:0};function o(t){var n=Object.keys(e).find((function(n){return e[n]===t}));return void 0!==n?n:""}function r(t){return t*Math.PI/180}function i(t){if(e.hasOwnProperty(t))return e[t]}function a(t){return t>=360?t%360:t<0?360+t%360:t}function c(t,c,u){return function(t,c,u){var d=t,l=c;return u.split("").map((function(t,c){var u=function(t,c,u){var d,l,s,f,m=(d=c,o(a(e[t]+n[d]))),v=i(m),g=(l=t,s=Math.round(Math.cos(r(e[l]))),f=Math.round(Math.sin(r(e[l]))),[-0===s?Math.abs(s):s,-0===f?Math.abs(f):f]),p=u,h=g[0],E=g[1],b=u[0],I=u[1],L=function(t){if(n.hasOwnProperty(t))return n[t]}(c),A=L&&0!==L?-1*L:0,B=[h+b,E+I];if(0===L)if(y(B))p=B;else{var P=i(t);m=o(a(P=P?P+180:180)),g=[0,0]}else g=[0,0];return{vector:g,rotate:A,direction:m,angle:v,coordinates:p}}(l,t,d);return l=void 0!==u.direction?u.direction:l,d=u.coordinates,{vector:u.vector,rotate:u.rotate,direction:l,angle:i(l),coordinates:d}}))}(t,c,u)}var u,d,l=(u={id:"",name:"",position:[],direction:""},{setId:function(t){return u.id=t},getId:function(){return u.id},setName:function(t){return u.name=t},getName:function(){return u.name},setPosition:function(t){return u.position=t},getPosition:function(){return u.position},setDirection:function(t){return u.direction=t},getDirection:function(){return u.direction}}),s=(d={id:0,name:"",style:"rectangle",size:[0,0],layout:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],occupied:void 0},{setId:function(t){return d.id=t},getId:function(){return d.id},setSize:function(t){return d.size=t},getSize:function(){return d.size},setStyle:function(t){return d.style=t},getStyle:function(){return d.style},setLayout:function(t){return d.layout=t},getLayout:function(){return d.layout},setOccupied:function(t,e){return function(t,e){var n=t[0],o=t[1];if(y([n,o])){var r=function(t,e,n){if(n||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}([],s.getLayout(),!0),i=r.length,a=[],c=a[0],u=a[1];if(e.length){var d=e[0],f=e[1];u=i-f-1,c=d}var m=i-o-1,v=n,g=r.map((function(t,n){return t.map((function(t,o){return n===m&&o===v?l.getId():e.length&&n===u&&o===c?0:t}))}));s.setLayout(g)}}(t,e)},isOccupied:function(t){return y(t)}});function f(e,n,o){var r;s.setId(n),s.setStyle(o),s.setSize((r=e,[parseInt(r[0]),parseInt(r[1])]));var i=function(e,n){var o,r,i=n[0],a=n[1];if(function(e){return t.includes(e)}(e)){if("rectangle"===e)return m([i,a]);if("kite"===e)return function(t){for(var e=2*t-1,n=new Array(e),o=0,r=0;r<e;r++)o=r<t?r+1:e-r,n[r]=new Array(o).fill(0);return n}(i);if("circle"===e)return r=m([2*(o=i)+1,2*o+1]).map((function(t,e){return t.map((function(t,n){return Math.pow(n-o,2)+Math.pow(e-o,2)<=Math.pow(o,2)?t:1}))})),r}return m([i,a])}(o,v(e));return s.setLayout(i)}function m(t){var e=t[0],n=t[1],o=new Array(e).fill(0);return new Array(n).fill(o)}function v(t){return[parseInt(t[0]),parseInt(t[1])]}function y(t){var e=t[0],n=t[1];if(e<0||n<0)return!1;var o=s.getLayout(),r=o.length;return n<r&&e<o[n].length&&(0===o[r-n-1][e]||o[r-n-1][e]===l.getId())}var g,p,h,E,b,I,L=(g={robotArray:[],plateauArray:[]},{addPlateau:function(t){return g.plateauArray.push(t)},getPlateauArray:function(){return g.plateauArray},addRobot:function(t){return g.robotArray.push(t)},updateCurrentRobot:function(t){return g.robotArray[g.robotArray.length-1]=t},getRobotArray:function(){return g.robotArray},emptyRobotArray:function(){return g.robotArray=[]}});function A(){var t,e,n=function(t,e){var n=function(t){return{position:v(t),direction:t[2]}}(e),o=n.position,r=n.direction,i=function(t,e,n,o){var r="".concat(e[0]).concat(t);if(l.setId(r),l.setName(e),l.setPosition(n),l.setDirection(o))return r}(L.getRobotArray().length,t,o,r),a={id:l.getId(),name:t,position:o,direction:r,move:void 0,destination:void 0,layout:s.getLayout(),journey:void 0};return L.addRobot(a),i}("Fred","00N");n&&(function(t){var e=document.getElementById("robot-waiting-area");if(e){var n=document.createElement("div");n.className="grid-robot",n.id=t;var o=document.querySelector(".grid-item");(null==o?void 0:o.offsetWidth)&&(n.style.width="".concat(null==o?void 0:o.offsetWidth,"px"),n.style.padding="".concat(null==o?void 0:o.offsetWidth,"px 0 0 0")),e.append(n)}}(n),t=n,e=document.getElementById(t),document.getElementById("robot-button").disabled=!0,e&&(e.onmousedown=function(t){var n=t.clientX-e.getBoundingClientRect().left,o=t.clientY-e.getBoundingClientRect().top;function r(t,r){e&&(e.style.left=t-n+"px",e.style.top=r-o+"px")}function i(t){r(t.pageX,t.pageY),P()}document.body.append(e),r(t.pageX,t.pageY),document.addEventListener("mousemove",i),document.addEventListener("mouseup",(function(t){if(e){e.hidden=!0;var n=document.elementFromPoint(t.clientX,t.clientY);if(e.hidden=!1,n){var o=n.classList.contains("grid-layer")?n:null;o&&(e.parentNode===document.body&&document.body.removeChild(e),e.style.left="0%",e.style.top="-20%",o.append(e),e.parentNode===o&&(document.removeEventListener("mousemove",i),t.preventDefault()))}}})),e.onmouseup=function(){document.removeEventListener("mousemove",i),e.onmouseup=null},e.ondragstart=function(){return!1}}))}function B(t){var e=l.getId(),n=function(t){var e=document.getElementById(t);if(e&&e.parentElement){var n=e.parentElement.id;if(n)return v(n.replace("_",""))}}(e);if(n&&l.setPosition(n)){var o=function(t,e){var n=function(t,e,n){if(y(t)){var o=c(t,e,n),r=o[o.length-1].coordinates,i=r[0],a=r[1],u=o[o.length-1].direction,d="".concat(i).concat(a).concat(u);return s.setOccupied([i,a],l.getPosition()),l.setPosition([i,a]),l.setDirection(u),{journey:o,destination:d}}return{journey:void 0,destination:void 0}}(l.getPosition(),l.getDirection(),t);if(n&&e===l.getId()){var o=n.journey,r=n.destination,i={id:e,name:l.getName(),position:l.getPosition(),direction:l.getDirection(),move:t,destination:r,layout:s.getLayout(),journey:o};return L.updateCurrentRobot(i),i}}(t,e);o&&o&&o.journey&&o.journey.forEach((function(t){console.log(t),function(t,e,n,o){var r=document.getElementById(o),i=e[0],a=e[1],c=t[0],u=t[1];if(r){r.classList.add("move"),r.classList.remove("N"),r.classList.remove("S"),r.classList.remove("E"),r.classList.remove("W");var d=l.getDirection();r.classList.add(d),r.classList.add("move-bounce"),function(t,e){var n,o=t[0],r=t[1],i=document.getElementById("".concat(o,"_").concat(r));i&&(null===(n=e.parentNode)||void 0===n||n.removeChild(e),i.appendChild(e))}([i+c,a+u],r)}}(n,t.vector,t.rotate,e)}))}}function P(){document.getElementById("robot-button").disabled=!1}null===(p=document.getElementById("plateau-button"))||void 0===p||p.addEventListener("click",(function(){var t,e,n=document.getElementById("plateau-shape"),o=document.getElementById("plateau-size");if(n&&o){var r=function(t,e){if(t&&e)return function(t,e){L.emptyRobotArray();var n=L.getPlateauArray().length,o=f(t,n,e);return L.addPlateau({gridSize:t,plateau:o,style:e,id:n}),o}("".concat(t).concat(t),e)}(o.value,n.value);r&&(t=n.value,(e=document.getElementById("my-planet"))&&(e.classList.remove("circle","rectangle","kite"),e.classList.add(t)),function(t){var e=document.getElementById("plateau-container");e&&(e.innerHTML="",t.forEach((function(t,n,o){var r=document.createElement("div");r.className="grid-container",r.id="row_".concat(n,"}"),e.append(r);var i=t.map((function(t,e){return"auto"}));r.style.gridTemplateColumns=i.join(" ");var a=o.length;t.forEach((function(t,e){if(1!==t){var o=document.createElement("div");o.className="grid-item",o.classList.add("grid-circle-faded"),o.id="matrix_".concat(e,"_").concat(a-n-1),o.style.width="".concat(100/a,"%"),o.style.padding="".concat(100/a,"% 0 0 0"),r.append(o);var i=document.createElement("div");i.className="grid-layer",i.id="".concat(e,"_").concat(a-n-1),i.style.height="".concat(100,"%"),i.style.padding="".concat(100/a,"% 0 0 0"),o.append(i)}}))})))}(r))}})),null===(h=document.getElementById("robot-button"))||void 0===h||h.addEventListener("click",(function(){P(),A()})),null===(E=document.getElementById("L"))||void 0===E||E.addEventListener("click",(function(){B("L")})),null===(b=document.getElementById("R"))||void 0===b||b.addEventListener("click",(function(){B("R")})),null===(I=document.getElementById("M"))||void 0===I||I.addEventListener("click",(function(){B("M")}))})();