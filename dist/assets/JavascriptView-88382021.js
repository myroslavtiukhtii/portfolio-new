import{r as c,_ as u,o as r,c as l,a as s,F as p,b as _,w as v,v as d,t as f}from"./index-343e9484.js";const g="/portfolio-new/assets/player-4c1fbf97.png",m="/portfolio-new/assets/weather-aecf77bb.png",h=[g,m],y={name:"PhotoGallery",setup(){const a=c([{url:h[0],title:"Vanilla JS player",link:"https://myroslavtiukhtii.github.io/music-player-js/dist/"},{url:h[1],title:"Weather API",link:"https://myroslavtiukhtii.github.io/weather-api-app/dist/"}]),t=c(0);function n(){t.value>0&&t.value--}function e(){t.value<a.value.length-1&&t.value++}return{photos:a,currentPhotoIndex:t,prevPhoto:n,nextPhoto:e}}},b={class:"projects__js"},k={class:"gallery"},P={class:"gallery__buttons"},w=["src","alt"],x=["href"];function j(a,t,n,e,B,D){return r(),l("div",b,[s("div",k,[s("div",P,[s("button",{class:"prev-button",onClick:t[0]||(t[0]=(...o)=>e.prevPhoto&&e.prevPhoto(...o))},"Previous"),s("button",{class:"next-button",onClick:t[1]||(t[1]=(...o)=>e.nextPhoto&&e.nextPhoto(...o))},"Next")]),(r(!0),l(p,null,_(e.photos,(o,i)=>v((r(),l("div",{key:i,class:"photo"},[s("img",{class:"gallery__image",src:o.url,alt:o.title,width:"450",height:"270"},null,8,w),s("a",{target:"_blank",href:o.link,class:"gallery__caption"},"Demo - "+f(o.title),9,x)])),[[d,i==e.currentPhotoIndex]])),128))])])}const S=u(y,[["render",j]]);export{S as default};