!function(t){var e={};function r(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);const i=["cat","dog","pizza","office","games","throne","zebra","watermelon","peach","clothes","purse","stairs","pool","wood","house","apartment","bathroom","light","frame","beautiful","forest","woods","axe","curtain","computer","language","wheel","television","glasses","concrete","hospital","surprise","couch","rocket","clouds","library","lake","garage","painting"];class s{constructor(t,e,r){this.type=t,this.size=e[0]*e[1],this.cards=[],this.cardWidth=r.width/e[0],this.cardHeight=r.height/e[1]}setCards(t){let e=this.getValues(this.type,this.size),r=0,i=0;for(let s=0;s<e.length;s++)this.cards.push({cardNum:s,value:e[s],width:this.cardWidth,height:this.cardHeight,x:r,y:i}),(r+=this.cardWidth)>=t.width&&(r=0,i+=this.cardHeight)}getValues(t,e){let r=[];if("number"===t)for(;r.length<e;){let t=Math.floor(99*Math.random()+1);r.includes(t)||r.push(t,t)}if("word"===t)for(;r.length<e;){let t=Math.floor(Math.random()*(e+1));r.includes(i[t])||r.push(i[t],i[t])}return r}getClickedCard(t){for(let e=0;e<this.cards.length;e++)if(t.x>=this.cards[e].x&&t.x<=this.cards[e].x+this.cardWidth&&t.y>=this.cards[e].y&&t.y<=this.cards[e].y+this.cardHeight)return this.cards[e]}}const n=document.querySelector("#play-btn"),h=new class{constructor(t,e,r,i){this.width=t,this.height=e,this.element=i,this.backgroundColor=r,this.ctx=this.element.getContext("2d")}draw(){this.element.width=this.width,this.element.height=this.height,this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height)}drawCards(t){t.forEach(t=>{this.ctx.fillStyle="#5C8495",this.ctx.fillRect(t.x,t.y,t.width,t.height),this.ctx.lineWidth=5,this.ctx.strokeStyle="#001017",this.ctx.strokeRect(t.x,t.y,t.width,t.height)})}getClickedCoordinates(t){let e=this.element.getBoundingClientRect(),r={};return r.x=t.clientX-e.left,r.y=t.clientY-e.top,r}}(500,300,"#27566B",document.querySelector("#canvas"));let o=null;const c={grid:[4,4],type:"number"};n.addEventListener("click",()=>{(o=new s(c.type,c.grid,h)).setCards(h),h.draw(),h.drawCards(o.cards)}),h.element.addEventListener("click",t=>{})}]);