(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.d({},{p:()=>o});class t{constructor(e,t,a){this.name=e,this.date=t,this.projectGroup=a}}const a=e.p+"f37826179bd366ae27f7.png",n=e.p+"d8d4b48ba50f67a6761c.png",c=new Image;c.src=a,c.classList.add("delete-task");const s=new Image;function d(){const e=document.querySelector(".tasks");e.innerHTML="",console.log(o),o.forEach((t=>{const c=new Image;c.src=a,c.classList.add("delete-task");const s=new Image;s.src=n,s.classList.add("task-done");const d=document.createElement("div");d.classList.add("item");const o=document.createElement("h3");o.classList.add("item-title"),o.textContent=t.name;const l=document.createElement("p");l.classList.add("date"),l.textContent="Due Date: "+t.date,d.appendChild(s),d.appendChild(o),d.appendChild(l),d.appendChild(c),e.appendChild(d)}))}let o;s.src=n,s.classList.add("task-done"),null===localStorage.getItem("tasks")?o=[]:(o=JSON.parse(localStorage.getItem("tasks")),console.log(o)),d(),document.querySelector(".delete-task"),document.querySelector(".all-tasks");const l=document.getElementById("add-task"),r=(document.querySelector(".add-project"),document.querySelector(".hamburger")),i=document.querySelector(".sidebar");document.querySelector(".project-page-label");let u=window.matchMedia("(min-width: 700px)"),p=!1;l.addEventListener("click",(function(){(function(e){const a=document.querySelector(".add"),n=document.querySelector(".add2"),c=(document.querySelector(".add-task"),document.createElement("div"));c.classList.add("name-task");const s=document.createElement("div");s.classList.add("task-date");const o=document.createElement("button");o.type="submit",o.classList.add("add-it"),o.textContent="Add it";const l=document.createElement("button");l.type="submit",l.classList.add("cancel-it"),l.textContent="Cancel";const r=document.createElement("label");r.classList.add("name-label"),r.textContent="Task Name";const i=document.createElement("input");i.classList.add("input-name");const u=document.createElement("input");u.type="date",u.classList.add("due-date");const p=document.createElement("label");p.textContent="Due Date",c.appendChild(r),c.appendChild(i),s.appendChild(p),s.appendChild(u),a.appendChild(c),a.appendChild(s),n.appendChild(o),n.appendChild(l);const m=document.querySelector(".project-page-label");o.addEventListener("click",(function(){"All To Do's"!==m.textContent?"string"==typeof m.textContent&&(e.push(new t(i.value,u.value,m.textContent)),i.value="",u.value="",d()):(e.push(new t(i.value,u.value,"")),i.value="",u.value="",d()),function(e){localStorage.setItem("tasks",JSON.stringify(e))}(e)}))})(o),l.disabled=!0})),r.addEventListener("click",(function(){p?(i.classList.remove("sidebar-active"),i.classList.add("sidebar"),p=!1):(i.classList.remove("sidebar"),i.classList.add("sidebar-active"),p=!0)})),addEventListener("resize",(function(){u.matches&&(i.classList.add("sidebar"),p=!1)}))})();