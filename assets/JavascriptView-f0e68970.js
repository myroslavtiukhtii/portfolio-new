import{r as c,_ as u,o as r,c as l,a as s,F as p,b as _,n as d,t as f}from"./index-aff58078.js";const v="/portfolio-new/assets/player-4c1fbf97.png",g="/portfolio-new/assets/weather-aecf77bb.png",h=[v,g],m={name:"PhotoGallery",setup(){const a=c([{url:h[0],title:"Vanilla JS player",link:"https://myroslavtiukhtii.github.io/music-player-js/dist/"},{url:h[1],title:"Weather API",link:"https://myroslavtiukhtii.github.io/weather-api-app/dist/"}]),t=c(0);function n(){t.value>0&&t.value--}function e(){t.value<a.value.length-1&&t.value++}return{photos:a,currentPhotoIndex:t,prevPhoto:n,nextPhoto:e}}},y={class:"projects__js"},b={class:"gallery"},k={class:"gallery__buttons"},P=["src","alt"],x=["href"];function w(a,t,n,e,j,B){return r(),l("div",y,[s("div",b,[s("div",k,[s("button",{class:"prev-button",onClick:t[0]||(t[0]=(...o)=>e.prevPhoto&&e.prevPhoto(...o))},"Previous"),s("button",{class:"next-button",onClick:t[1]||(t[1]=(...o)=>e.nextPhoto&&e.nextPhoto(...o))},"Next")]),(r(!0),l(p,null,_(e.photos,(o,i)=>(r(),l("div",{key:i,class:d(["photo",{active:i===e.currentPhotoIndex}])},[s("img",{class:"gallery__image",src:o.url,alt:o.title,width:"450",height:"270"},null,8,P),s("a",{target:"_blank",href:o.link,class:"gallery__caption"},"Demo - "+f(o.title),9,x)],2))),128))])])}const I=u(m,[["render",w]]);export{I as default};
