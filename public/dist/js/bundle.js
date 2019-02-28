!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const r=["cat","dog","pizza","office","games","throne","zebra","watermelon","peach","clothes","purse","stairs","pool","wood","house","apartment","bathroom","light","frame","beautiful","forest","woods","axe","curtain","computer","language","wheel","television","glasses","concrete","hospital","surprise","couch","rocket","clouds","library","lake","garage","painting"];class s{constructor(t,e,i){this.type=t,this.size=e[0]*e[1],this.cards=[],this.cardWidth=i.width/e[0],this.cardHeight=i.height/e[1]}setCards(t){let e=this.randomizeVals(this.getValues(this.type,this.size)),i=0,r=0;for(let s=0;s<e.length;s++)this.cards.push({cardNum:s,value:e[s],width:this.cardWidth,height:this.cardHeight,matched:!1,x:i,y:r}),(i+=this.cardWidth)>=t.width&&(i=0,r+=this.cardHeight)}getValues(t,e){let i=[];if("number"===t)for(;i.length<e;){let t=String(Math.floor(99*Math.random()+1));i.includes(t)||i.push(t,t)}if("word"===t)for(;i.length<e;){let t=Math.floor(Math.random()*(e+1));i.includes(r[t])||i.push(r[t],r[t])}return i}getClickedCard(t){for(let e=0;e<this.cards.length;e++)if(t.x>=this.cards[e].x&&t.x<=this.cards[e].x+this.cardWidth&&t.y>=this.cards[e].y&&t.y<=this.cards[e].y+this.cardHeight)return this.cards[e]}randomizeVals(t){let e=[...t];for(let t=e.length-1;t>0;t--){let i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}}const a=document.querySelector("#play-btn"),d=new class{constructor(t,e,i,r){this.width=t,this.height=e,this.element=r,this.backgroundColor=i,this.ctx=this.element.getContext("2d")}draw(){this.element.width=this.width,this.element.height=this.height,this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height)}drawCards(t){t.forEach(t=>{this.ctx.fillStyle="#5C8495",this.ctx.fillRect(t.x,t.y,t.width,t.height),this.ctx.lineWidth=5,this.ctx.strokeStyle="#001017",this.ctx.strokeRect(t.x,t.y,t.width,t.height)})}getClickedCoordinates(t){let e=this.element.getBoundingClientRect(),i={};return i.x=t.clientX-e.left,i.y=t.clientY-e.top,i}drawValue(t){this.ctx.fillStyle="#dad5d5",this.ctx.fillRect(t.x,t.y,t.width,t.height),this.ctx.font="25px serif",this.ctx.fillStyle="#100f0f",this.ctx.fillText(t.value,t.x,t.y+20)}}(500,300,"#27566B",document.querySelector("#canvas"));let l=null;const c={options:{grid:[4,4],type:"word"},cardsDisplayed:0,cardsClicked:[],userInput:!0};a.addEventListener("click",()=>{(l=new s(c.options.type,c.options.grid,d)).setCards(d),d.draw(),d.drawCards(l.cards)}),d.element.addEventListener("click",t=>{let e=l.getClickedCard(d.getClickedCoordinates(t));!0!==e.matched&&!c.cardsClicked.includes(e)&&c.userInput&&(c.cardsDisplayed++,c.cardsDisplayed<=2&&(d.drawValue(e),c.cardsClicked.push(e)),2===c.cardsDisplayed&&(c.userInput=!1,c.cardsClicked[0].value!==c.cardsClicked[1].value?setTimeout(()=>{d.drawCards(c.cardsClicked),c.cardsClicked=[],c.userInput=!0},1e3):(c.cardsClicked[0].matched=!0,c.cardsClicked[1].matched=!0,c.cardsClicked=[],c.userInput=!0),c.cardsDisplayed=0))})}]);