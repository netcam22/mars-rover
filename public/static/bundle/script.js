(()=>{"use strict";var t=["rectangle","kite","circle"],n={E:0,N:90,W:180,S:270},e={L:90,R:-90,M:0};function o(t){var e=Object.keys(n).find((function(e){return n[e]===t}));return void 0!==e?e:""}function r(t){return t*Math.PI/180}function i(t){if(n.hasOwnProperty(t))return n[t]}function u(t){return t>=360?t%360:t<0?360+t%360:t}function c(t,c,a){return function(t,c,a){var d=t,l=c;return a.split("").map((function(t,c){var a=function(t,c,a){var d,l,f,s,v=(d=c,o(u(n[t]+e[d]))),m=i(v),p=(l=t,f=Math.round(Math.cos(r(n[l]))),s=Math.round(Math.sin(r(n[l]))),[-0===f?Math.abs(f):f,-0===s?Math.abs(s):s]),g=a,h=p[0],E=p[1],b=a[0],I=a[1],L=function(t){if(e.hasOwnProperty(t))return e[t]}(c),A=L&&0!==L?-1*L:0,B=[h+b,E+I];if(0===L)if(y(B))g=B;else{var P=i(t);v=o(u(P=P?P+180:180)),p=[0,0]}else p=[0,0];return{vector:p,rotate:A,direction:v,angle:m,coordinates:g}}(l,t,d);return l=void 0!==a.direction?a.direction:l,d=a.coordinates,{vector:a.vector,rotate:a.rotate,direction:l,angle:i(l),coordinates:d}}))}(t,c,a)}var a,d,l=(a={id:"",name:"",position:[],direction:""},{setId:function(t){return a.id=t},getId:function(){return a.id},setName:function(t){return a.name=t},getName:function(){return a.name},setPosition:function(t){return a.position=t},getPosition:function(){return a.position},setDirection:function(t){return a.direction=t},getDirection:function(){return a.direction}}),f=(d={id:0,name:"",style:"rectangle",size:[0,0],layout:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],occupied:void 0},{setId:function(t){return d.id=t},getId:function(){return d.id},setSize:function(t){return d.size=t},getSize:function(){return d.size},setStyle:function(t){return d.style=t},getStyle:function(){return d.style},setLayout:function(t){return d.layout=t},getLayout:function(){return d.layout},setOccupied:function(t,n){return function(t,n){var e=t[0],o=t[1];if(y([e,o])){var r=function(t,n,e){if(e||2===arguments.length)for(var o,r=0,i=n.length;r<i;r++)!o&&r in n||(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return t.concat(o||Array.prototype.slice.call(n))}([],f.getLayout(),!0),i=r.length,u=[],c=u[0],a=u[1];if(n.length){var d=n[0],s=n[1];a=i-s-1,c=d}var v=i-o-1,m=e,p=r.map((function(t,e){return t.map((function(t,o){return e===v&&o===m?l.getId():n.length&&e===a&&o===c?0:t}))}));f.setLayout(p)}}(t,n)},isOccupied:function(t){return y(t)}});function s(n,e,o){var r;f.setId(e),f.setStyle(o),f.setSize((r=n,[parseInt(r[0]),parseInt(r[1])]));var i=function(n,e){var o,r,i,u=e[0],c=e[1];if(function(n){return t.includes(n)}(n)){if("rectangle"===n)return v([u,c]);if("kite"===n)return function(t){for(var n=2*t-1,e=new Array(n),o=0,r=0;r<n;r++)o=r<t?r+1:n-r,e[r]=new Array(o).fill(0);return e}(u);if("circle"===n)return o=u,i=v([2*(r=Math.floor(o/2))+1,2*r+1]).map((function(t,n){return t.map((function(t,e){return Math.pow(e-r,2)+Math.pow(n-r,2)<=Math.pow(r,2)?t:1}))})),i}return v([u,c])}(o,m(n));return f.setLayout(i)}function v(t){var n=t[0],e=t[1],o=new Array(n).fill(0);return new Array(e).fill(o)}function m(t){return[parseInt(t[0]),parseInt(t[1])]}function y(t){var n=t[0],e=t[1];if(n<0||e<0)return!1;var o=f.getLayout(),r=o.length;return e<r&&n<o[e].length&&(0===o[r-e-1][n]||o[r-e-1][n]===l.getId())}var p,g,h,E,b,I,L,A=(p={robotArray:[],plateauArray:[]},{addPlateau:function(t){return p.plateauArray.push(t)},getPlateauArray:function(){return p.plateauArray},addRobot:function(t){return p.robotArray.push(t)},updateCurrentRobot:function(t){return p.robotArray[p.robotArray.length-1]=t},getRobotArray:function(){return p.robotArray},emptyRobotArray:function(){return p.robotArray=[]}});function B(){var t;null===(t=P())||void 0===t||t.forEach((function(t){return t.style.display="none"}))}function P(){return document.querySelectorAll(".move-button")}function w(){var t;null===(t=M())||void 0===t||t.removeAttribute("disabled")}function M(){return document.getElementById("robot-button")}function N(){var t,n,e=function(t,n){var e=function(t){return{position:m(t),direction:t[2]}}(n),o=e.position,r=e.direction,i=function(t,n,e,o){var r="".concat(n[0]).concat(t);if(l.setId(r),l.setName(n),l.setPosition(e),l.setDirection(o))return r}(A.getRobotArray().length,t,o,r),u={id:l.getId(),name:t,position:o,direction:r,move:void 0,destination:void 0,layout:f.getLayout(),journey:void 0};return A.addRobot(u),i}("Fred","00N");e&&(function(t){var n=document.getElementById("robot-waiting-area");if(n){var e=document.createElement("div");e.className="grid-robot",e.id=t,k(e),n.append(e)}}(e),t=e,(n=document.getElementById(t))&&(n.onmousedown=function(t){!function(t,n){var e=t.clientX-n.getBoundingClientRect().left,o=t.clientY-n.getBoundingClientRect().top;function r(t){!function(t,n,e,o,r){t&&(t.style.left=n-o+"px",t.style.top=e-r+"px")}(n,t.pageX,t.pageY,e,o)}document.body.append(n),document.addEventListener("mousemove",r),document.addEventListener("mouseup",(function t(e){n&&function(t,n){return n.hidden=!0,function(t,n){if(t.hidden=!1,n){var e=function(t,n){var e=t.classList.contains("grid-layer")?t:null;if(e)return n.parentNode===document.body&&document.body.removeChild(n),n.style.left="0%",n.style.top="-20%",e.append(n),e}(n,t);if(e&&t.parentNode===e)return!0}return!1}(n,document.elementFromPoint(t.clientX,t.clientY))}(e,n)&&(document.removeEventListener("mouseup",t),document.removeEventListener("mousemove",r),n.onmousedown=null,e.preventDefault(),function(){var t;null===(t=P())||void 0===t||t.forEach((function(t){return t.style.display="block"}))}())})),n.ondragstart=function(){return!1}}(t,n)}))}function R(t){var n=l.getId(),e=S(n);if(e&&l.setPosition(e)){var o=function(t,n){var e=function(t,n,e){if(y(t)){var o=c(t,n,e),r=o[o.length-1].coordinates,i=r[0],u=r[1],a=o[o.length-1].direction,d="".concat(i).concat(u).concat(a);return f.setOccupied([i,u],l.getPosition()),l.setPosition([i,u]),l.setDirection(a),{journey:o,destination:d}}return{journey:void 0,destination:void 0}}(l.getPosition(),l.getDirection(),t);if(e&&n===l.getId()){var o=e.journey,r=e.destination,i={id:n,name:l.getName(),position:l.getPosition(),direction:l.getDirection(),move:t,destination:r,layout:f.getLayout(),journey:o};return A.updateCurrentRobot(i),i}}(t,n);o&&o.journey&&o.journey.forEach((function(t){!function(t,n,e){var o=document.getElementById(e),r=n[0],i=n[1],u=t[0],c=t[1];if(o){o.classList.remove("N","S","E","W");var a=l.getDirection();o.classList.add(a,"move","move-bounce"),function(t,n){var e,o=t[0],r=t[1],i=document.getElementById("".concat(o,"_").concat(r));i&&(null===(e=n.parentNode)||void 0===e||e.removeChild(n),i.appendChild(n))}([r+u,i+c],o)}}(e,t.vector,n)}))}}function S(t){var n=document.getElementById(t);if(n&&n.parentElement){var e=n.parentElement.id;if(e)return m(e.replace("_",""))}}function k(t){var n=document.querySelector(".grid-item");(null==n?void 0:n.offsetWidth)&&(t.style.width="".concat(null==n?void 0:n.offsetWidth,"px"),t.style.padding="".concat(null==n?void 0:n.offsetWidth,"px 0 0 0"))}function j(){return document.querySelectorAll(".grid-robot")}addEventListener("resize",(function(t){!function(){var t;null===(t=j())||void 0===t||t.forEach((function(t){k(t)}))}()})),null===(g=document.getElementById("plateau-button"))||void 0===g||g.addEventListener("click",(function(){var t,n,e=document.getElementById("plateau-shape"),o=document.getElementById("plateau-size");if(e&&o){var r=function(t,n){if(t&&n)return function(t,n){A.emptyRobotArray();var e=A.getPlateauArray().length,o=s(t,e,n);return A.addPlateau({gridSize:t,plateau:o,style:n,id:e}),o}("".concat(t).concat(t),n)}(o.value,e.value);r&&(function(){var t;null===(t=j())||void 0===t||t.forEach((function(t){return t.remove()}))}(),B(),w(),t=e.value,(n=document.getElementById("my-planet"))&&(n.classList.remove("circle","rectangle","kite"),n.classList.add(t)),function(t){var n=document.getElementById("plateau-container");n&&(n.innerHTML="",t.forEach((function(t,e,o){var r=document.createElement("div");r.className="grid-container",r.id="row_".concat(e),n.append(r);var i=t.map((function(t,n){return"auto"}));r.style.gridTemplateColumns=i.join(" ");var u=o.length;t.forEach((function(t,n){if(1!==t){var o=document.createElement("div");o.className="grid-item",o.id="matrix_".concat(n,"_").concat(u-e-1),o.style.width="".concat(100/u,"%"),o.style.padding="".concat(100/u,"% 0 0 0"),r.append(o);var i=document.createElement("div");i.className="grid-layer",i.id="".concat(n,"_").concat(u-e-1),i.style.height="".concat(100,"%"),i.style.padding="".concat(100/u,"% 0 0 0"),o.append(i)}}))})))}(r))}})),null===(h=document.getElementById("robot-button"))||void 0===h||h.addEventListener("click",(function(){M().disabled=!0,N()})),null===(E=document.getElementById("L"))||void 0===E||E.addEventListener("click",(function(){R("L")})),null===(b=document.getElementById("R"))||void 0===b||b.addEventListener("click",(function(){R("R")})),null===(I=document.getElementById("M"))||void 0===I||I.addEventListener("click",(function(){R("M")})),null===(L=document.getElementById("T"))||void 0===L||L.addEventListener("click",(function(){!function(){B(),w(),function(){var t;null===(t=j())||void 0===t||t.forEach((function(t){return t.classList.remove("move-bounce")}))}();var t=S(l.getId());if(t){var n=t[0],e=t[1];f.setOccupied([n,e],t)}}()}))})();