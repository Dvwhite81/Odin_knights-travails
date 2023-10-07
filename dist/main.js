(()=>{"use strict";const e=(e,t)=>{const o=document.createElement(e);for(const e in t)o[e]=t[e];return o},t=(e,t)=>e[0]<0||e[0]>7||e[1]<0||e[1]>7?null:{coords:e,path:t},o=async t=>{let n,d,a=!1;const i=document.getElementById("message-h1"),l=document.getElementById("gameboard");for(;!a;)n=t.target,l.removeEventListener("click",o),a=!a;(t=>{console.log("placeKnight");const o=e("img",{id:"knight",src:"src/images/knight.png"});t.append(o),t.classList.add("current-knight")})(n),i.textContent="Click a target square",l.addEventListener("click",(t=>{d=t.target,c(),(t=>{console.log("placeTarget");const o=e("img",{className:"target",src:"src/images/target.png"});t.append(o),t.classList.add("current-target")})(d),console.log("test");const o=s(n,d);console.log("PATH:",o),i.textContent=`${o.length} moves!`,r(o,d)}))},s=(e,o)=>{const s=e.getAttribute("coords"),r=Number(s[0]),c=Number(s[2]),n=o.getAttribute("coords");return((e,[o,s])=>{let r=[t(e,[e])],c=r.shift();for(;c.coords[0]!==o||c.coords[1]!==s;)[[c.coords[0]+2,c.coords[1]-1],[c.coords[0]+2,c.coords[1]+1],[c.coords[0]-2,c.coords[1]-1],[c.coords[0]-2,c.coords[1]+1],[c.coords[0]+1,c.coords[1]-2],[c.coords[0]+1,c.coords[1]+2],[c.coords[0]-1,c.coords[1]-2],[c.coords[0]-1,c.coords[1]+2]].forEach((e=>{let o=t(e,c.path.concat([e]));o&&r.push(o)})),c=r.shift();return c.path.shift(),c.path})([r,c],[Number(n[0]),Number(n[2])])},r=(t,o)=>{t.pop();const s=document.getElementById("message-h4");t.forEach((t=>{var o;console.log("path move:",t),(t=>{const o=e("img",{className:"move",src:"src/images/move.png"});t.append(o),t.classList.add("move")})((o=t,console.log("getSquare coords:",o),console.log("getSquare typeof:",typeof o),document.querySelector(`[coords="${o}"]`))),s.textContent+=`[${t}], `}));const r=o.getAttribute("coords");s.textContent+=`[${r}]`},c=()=>{Array.from(document.querySelectorAll(".square")).forEach((e=>{e.classList.contains("current-knight")||(e.innerHTML="")}))};(()=>{const t=document.querySelector("body"),o=e("div",{id:"message-div"}),s=e("h1",{id:"message-h1",textContent:"Click a starting square"}),r=e("h4",{id:"message-h4",textContent:""});o.append(s,r),t.append(o)})(),(()=>{const t=document.querySelector("body"),s=e("div",{id:"container"}),r=e("div",{id:"gameboard"});for(let t=0;t<8;t++)for(let o=0;o<8;o++){const s=e("div",{className:"square",id:`${t},${o}`});s.setAttribute("coords",`${t},${o}`),s.setAttribute("x",t),s.setAttribute("y",o),s.style.backgroundColor=(t+o)%2==0?"white":"black",r.append(s)}r.addEventListener("click",o),s.append(r),t.append(s)})()})();