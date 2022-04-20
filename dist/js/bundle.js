(()=>{var e={746:()=>{window.addEventListener("scroll",(()=>{const e=document.documentElement.scrollTop,t=document.querySelector(".js-header");e>55?t.classList.add("class","header--colored"):t.classList.remove("class","header--colored")}))}},t={};function c(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,c),a.exports}(()=>{"use strict";function e(e){const t=document.querySelector("head"),c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.href=`./dist/css/${e}`,t.appendChild(c)}async function t(e,t=null){let c=`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${e}?Authorization=CWB-A91E69B8-CE2E-4DDA-A1F5-A22448AA9D4C&format=JSON`;t&&(c+=`&locationName=${t}`);const n=await fetch(c);return await n.json()}c(746);const n={PoP12h:!0,T:!0,RH:!1,MinCI:!1,WS:!1,MaxAT:!1,Wx:!0,MaxCI:!1,MinT:!0,UVI:!1,WeatherDescription:!1,MinAT:!1,MaxT:!0,WD:!1,Td:!1};const l={Wx:!0,PoP:!0,MinT:!0,CI:!1,MaxT:!0};function a(e){let t="";return e<=1?t='<svg viewbox="-50 -50 100 100">\n        <circle class="sun" cx="0" cy="0" r="22"></circle>\n    </svg>':e<=3?t='<svg viewbox="-50 -50 100 100">\n        <circle class="sun" cx="0" cy="0" r="22"></circle>\n        <circle class="cloud" cx="-30" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-15" cy="30" r="20"></circle>\n        <circle class="cloud" cx="0" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-25" cy="10" r="15"></circle>\n        <circle class="cloud" cx="-7" cy="15" r="15"></circle>\n    </svg>':e<=7?t='<svg viewbox="-63 -40 100 100">\n        <circle class="cloud" cx="-30" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-15" cy="30" r="20"></circle>\n        <circle class="cloud" cx="0" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-25" cy="10" r="15"></circle>\n        <circle class="cloud" cx="-7" cy="15" r="15"></circle>\n    </svg>':e<=22&&(t='<svg viewbox="-63 -40 100 100">\n        <line\n            class="rain"\n            x1="-25"\n            y1="15"\n            x2="-25"\n            y2="35"\n        ></line>\n        <line\n            class="rain"\n            x1="-14"\n            y1="5"\n            x2="-14"\n            y2="25"\n        ></line>\n        <line class="rain" x1="-5" y1="20" x2="-5" y2="45"></line>\n        <circle class="cloud" cx="-30" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-15" cy="30" r="20"></circle>\n        <circle class="cloud" cx="0" cy="30" r="20"></circle>\n        <circle class="cloud" cx="-25" cy="10" r="15"></circle>\n        <circle class="cloud" cx="-7" cy="15" r="15"></circle>\n    </svg>'),(new DOMParser).parseFromString(t,"text/html").querySelector("svg")}let r=null,s=null,o=0;const i=document.querySelector(".weather__render"),d=document.querySelector(".weather__render-observer"),m=new IntersectionObserver((([e])=>{e&&e.isIntersecting&&(function(){const e=3*o,t=Math.min(r.length,3*(o+1));e>t&&m.unobserve(d);for(let c=e;c<t;c++){const e=r[c],t=document.createElement("label");t.classList.add("weather__itme");const n=document.createElement("input");n.classList.add("switch_weather"),n.type="checkbox";const l=document.createElement("div");l.classList.add("weather__weekWeather"),h(e.locationName,l);const s=document.createElement("div");s.textContent=e.locationName,s.classList.add("weather__info-county");const o=document.createElement("div");o.textContent=`${e.MaxT[0]}°C`,o.classList.add("weather__info-temperature");const d=document.createElement("div");d.textContent=e.Wx[0],d.classList.add("weather__info-meteorological");const m=document.createElement("div");m.appendChild(o),m.appendChild(d);const u=document.createElement("div");u.classList.add("weather__info"),u.appendChild(s),u.appendChild(m);const p=document.createElement("div");p.classList.add("weather__chart");for(let t=0;t<e.time.length;t++){const c=document.createElement("div");c.classList.add("weather__dayweather");const n=document.createElement("div");n.classList.add("weather__chart-time");const l=new Date(e.time[t]);n.textContent=`${l.getHours()} ${l.getHours()>=12?"PM":"AM"}`;const r=document.createElement("div");r.classList.add("weather__dayweather-icon"),r.appendChild(a(e.Wx2[t]));const s=document.createElement("div");s.classList.add("weather__chart-temperature");const o=document.createElement("div"),i=document.createElement("div");o.textContent=`${e.MaxT[t]}°`,i.textContent=`${e.MinT[t]}°`,s.appendChild(o),s.appendChild(i),c.appendChild(n),c.appendChild(r),c.appendChild(s),p.appendChild(c)}t.appendChild(n),t.appendChild(l),t.appendChild(u),t.appendChild(p),i.appendChild(t)}}(),o++)})),u={0:"SUN",1:"MON",2:"TUE",3:"WED",4:"THU",5:"FRI",6:"SAT"};function h(e,t){const c=s.findIndex((t=>t.locationName==e)),n=s[c];for(let e=0;e<n.time.length;e++){const c=document.createElement("div");c.classList.add("weather__weekWeather-item");const l=new Date(n.time[e]).getDay(),r=document.createElement("h3");r.textContent=u[l],c.appendChild(r),c.append(a(n.Wx2[e])),t.appendChild(c)}}window.addEventListener("DOMContentLoaded",(()=>{!async function(){r=await async function(e=null){return function(e){const t=[],c=e.records.location;let n=[];for(let e=0,a=c.length;e<a;e++){let a={};const r=c[e],s=r.weatherElement;for(let t=0,c=s.length;t<c;t++){const c=s[t];if(!l[`${c.elementName}`])continue;let r=c.time,o=(r.length,null),i=[],d=[];for(let l=0;(o=r[l])&&(0==e&&0==t&&n.push(o.startTime),"Wx"==c.elementName&&d.push(o.parameter.parameterValue),i.push(o.parameter.parameterName.trim()),!(i.length>=3));l++);a[`${c.elementName}`]=i,d.length>0&&(a[`${c.elementName}2`]=d)}a.time=n,a.locationName=r.locationName,t.push(a)}return t}(await t("F-C0032-001",e))}(),s=await async function(e=null){return function(e){const t=[],c=e.records.locations[0].location;let l=[];for(let e=0,a=c.length;e<a;e++){let a={};const r=c[e],s=r.weatherElement;for(let t=0,c=s.length;t<c;t++){const c=s[t];if(!n[`${c.elementName}`])continue;let r=c.time,o=(r.length,null),i=[],d=[],m=null;for(let n=0;o=r[n];n++){const n=new Date(o.startTime);if((!m||m.getDate()!=n.getDate())&&(0==e&&0==t&&l.push(o.startTime),"Wx"==c.elementName&&d.push(o.elementValue[1].value.trim()),i.push(o.elementValue[0].value.trim()),m=n,i.length>=7))break}a[`${c.elementName}`]=i,d.length>0&&(a[`${c.elementName}2`]=d)}a.time=l,a.locationName=r.locationName,t.push(a)}return t}(await t("F-D0047-091",e))}(),m.observe(d)}()})),e("base.css"),e("layout.css"),e("component.css")})()})();