(this.webpackJsonptryunfo=this.webpackJsonptryunfo||[]).push([[0],[,,,,,,,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(1),c=t.n(r),s=t(12),i=t.n(s),d=t(2),n=t(3),l=t(5),o=(t(17),t(0));function j(e){var a=e.value,t=Object(r.useState)(!0),c=Object(n.a)(t,2),s=c[0],i=c[1],j=a.cardData,u=a.setCardData,m=function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value;u((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},a.name,t))}))};return Object(r.useEffect)((function(){!function(){var e=j.cardName,a=j.cardImage,t=j.cardDescription,r=j.cardAttr1,c=j.cardAttr2,s=j.cardAttr3;""!==e&&""!==a&&""!==t&&Number(r)>=0&&Number(r)<=90&&Number(c)>=0&&Number(c)<=90&&Number(s)>=0&&Number(s)<=90&&Number(r)+Number(c)+Number(s)<=210?i(!1):i(!0)}()}),[j]),Object(o.jsxs)("div",{id:"card-creation",className:"card-form",children:[Object(o.jsx)("h1",{className:"card-form-title",children:"Crie sua carta"}),Object(o.jsxs)("form",{className:"card-form-body",children:[Object(o.jsx)("h2",{className:"card-form-input-title",children:"Nome:"}),Object(o.jsx)("input",{type:"text",className:"card-form-input",name:"cardName",value:j.cardName,onChange:m,"data-testid":"name-input"}),Object(o.jsx)("p",{className:"card-form-input-text",children:"Digite aqui o nome do seu Pok\xe9mon"}),Object(o.jsx)("h2",{className:"card-form-input-title",children:"Imagem:"}),Object(o.jsx)("input",{className:"card-form-input",type:"text",name:"cardImage",value:j.cardImage,onChange:m,"data-testid":"image-input"}),Object(o.jsx)("p",{className:"card-form-input-text",children:"Insira abaixo a url de alguma imagem do seu Pok\xe9mon"}),Object(o.jsx)("h2",{className:"card-form-input-title",children:"Descri\xe7\xe3o:"}),Object(o.jsx)("textarea",{className:"card-form-description-input",name:"cardDescription",value:j.cardDescription,onChange:m,"data-testid":"description-input"}),Object(o.jsx)("p",{className:"card-form-input-text",children:"Descreva um pouco mais o seu Pok\xe9mon e guarde informa\xe7\xf5es valiosas"}),Object(o.jsx)("h2",{className:"card-form-input-title",children:"Atributos:"}),Object(o.jsxs)("div",{className:"attr-inputs",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"attr-title",children:"Vitalidade"}),Object(o.jsx)("input",{className:"attr-input",type:"number",name:"cardAttr1",value:j.cardAttr1,onChange:m,"data-testid":"attr1-input"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"attr-title",children:"Velocidade"}),Object(o.jsx)("input",{className:"attr-input",type:"number",name:"cardAttr2",value:j.cardAttr2,onChange:m,"data-testid":"attr2-input"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"attr-title",children:"For\xe7a"}),Object(o.jsx)("input",{className:"attr-input",type:"number",name:"cardAttr3",value:j.cardAttr3,onChange:m,"data-testid":"attr3-input"})]})]}),Object(o.jsx)("p",{className:"card-form-input-text",children:"Agora voc\xea pode definir cada um dos tr\xeas atributos do seu Pok\xe9mon"}),j.hasTrunfo?Object(o.jsx)("h1",{className:"super-trunfo-title",children:"Voc\xea j\xe1 tem um Super Trunfo em seu baralho"}):Object(o.jsxs)("div",{className:"super-trunfo-container",children:[Object(o.jsx)("h2",{className:"super-trunfo-title",children:"Super trunfo?"}),Object(o.jsx)("input",{className:"super-trunfo-checkbox",type:"checkbox",name:"cardTrunfo",checked:j.cardTrunfo,onChange:m,"data-testid":"trunfo-input"})]}),Object(o.jsx)("p",{className:"card-form-input-text",children:"Decida se essa carta \xe9 o seu Super Trunfo, lembre-se de que s\xf3 pode haver um Super Trunfo no seu baralho!"}),Object(o.jsxs)("div",{className:"rarity-container",children:[Object(o.jsx)("h2",{className:"rarity-title",children:"Raridade:"}),Object(o.jsxs)("select",{className:"rarity-select",name:"cardRare",value:j.cardRare,onChange:m,"data-testid":"rare-input",children:[Object(o.jsx)("option",{value:"normal",children:"Normal"}),Object(o.jsx)("option",{value:"raro",children:"Raro"}),Object(o.jsx)("option",{value:"muito raro",children:"Muito Raro"})]})]}),Object(o.jsx)("p",{className:"card-form-input-text",children:"Defina o qu\xe3o rara \xe9 essa nova carta"})]}),Object(o.jsx)("a",{href:"#".concat(j.deckCards.length-1),children:Object(o.jsx)("button",{className:"save-card-btn",type:"button",disabled:s,"data-testid":"save-button",onClick:function(){var e=j.cardName,a=j.cardImage,t=j.cardDescription,r=j.cardAttr1,c=j.cardAttr2,s=j.cardAttr3,i=j.cardTrunfo,n={cardName:e,cardImage:a,cardDescription:t,cardAttr1:r,cardAttr2:c,cardAttr3:s,cardTrunfo:i,cardRare:j.cardRare},l=j.deckCards;return l.push(n),localStorage.setItem("deck",JSON.stringify(l)),u(i?Object(d.a)(Object(d.a)({},j),{},{cardName:"",cardImage:"",cardDescription:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardTrunfo:!1,cardRare:"normal",hasTrunfo:!0,deckCards:l,filteredDeck:l}):Object(d.a)(Object(d.a)({},j),{},{cardName:"",cardImage:"",cardDescription:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardTrunfo:!1,cardRare:"normal",deckCards:l,filteredDeck:l}))},children:"Salvar"})})]})}var u=t(6),m=t.n(u),b=t(8),p=(t(10),t(4)),h=t.n(p),f=function(e){return e.split(" ").map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")};t(7);function O(e){var a=e.value,t=Object(r.useState)(!1),c=Object(n.a)(t,2),s=c[0],i=c[1],d=a.cardName,l=a.cardImage,j=a.cardDescription,u=a.cardAttr1,p=a.cardAttr2,O=a.cardAttr3,x=a.cardTrunfo,v=a.cardRare;return Object(r.useEffect)((function(){h.a.init({duration:1e3});var e=function(){var e=Object(b.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(l),e.abrupt("return",i(!!a));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(o.jsxs)("div",{className:"card-preview-section",children:[Object(o.jsx)("h1",{className:"card-preview-title",children:"Pr\xe9-visualize sua carta"}),Object(o.jsxs)("div",{className:"card-preview","data-aos":"fade-up",children:[Object(o.jsxs)("div",{className:"card-preview-upper-container",children:[Object(o.jsxs)("div",{className:"card-preview-info-container",children:[Object(o.jsxs)("h3",{className:"card-preview-name","data-testid":"name-card",children:[d,x?Object(o.jsx)("p",{className:"card-preview-trunfo","data-testid":"trunfo-card",children:"\u2b50"}):null]}),s?Object(o.jsx)("img",{className:"card-preview-image","data-testid":"image-card",src:l,alt:d}):Object(o.jsx)("div",{className:"card-preview-image","data-testid":"image-card-default"})]}),Object(o.jsxs)("div",{className:"card-preview-attr-container",children:[Object(o.jsx)("h3",{className:"card-preview-attr-name",children:"VIT"}),Object(o.jsx)("h3",{className:"card-preview-attr-value","data-testid":"attr1-card",children:u}),Object(o.jsx)("h3",{className:"card-preview-attr-name",children:"VEL"}),Object(o.jsx)("h3",{className:"card-preview-attr-value","data-testid":"attr2-card",children:p}),Object(o.jsx)("h3",{className:"card-preview-attr-name",children:"FOR"}),Object(o.jsx)("h3",{className:"card-preview-attr-value","data-testid":"attr3-card",children:O})]})]}),Object(o.jsxs)("div",{className:"card-preview-lower-container",children:[Object(o.jsx)("h3",{className:"card-preview-rare","data-testid":"rare-card",children:f(v)}),Object(o.jsx)("p",{className:"card-preview-description","data-testid":"description-card",children:j})]})]})]})}function x(e){var a=e.value,t=Object(r.useState)(!1),c=Object(n.a)(t,2),s=c[0],i=c[1],d=a.cardName,l=a.cardImage,j=a.cardDescription,u=a.cardAttr1,p=a.cardAttr2,h=a.cardAttr3,O=a.cardTrunfo,x=a.cardRare;return Object(r.useEffect)((function(){var e=function(){var e=Object(b.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(l),e.abrupt("return",i(!!a));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(o.jsxs)("div",{className:"card-created",children:[Object(o.jsxs)("div",{className:"card-preview-upper-container",children:[Object(o.jsxs)("div",{className:"card-preview-info-container",children:[Object(o.jsxs)("h3",{className:"card-preview-name","data-testid":"name-card",children:[d,O?Object(o.jsx)("p",{className:"card-preview-trunfo","data-testid":"trunfo-card",children:"\u2b50"}):null]}),s?Object(o.jsx)("img",{className:"card-preview-image","data-testid":"image-card",src:l,alt:d}):Object(o.jsx)("div",{className:"card-preview-image","data-testid":"image-card-default"})]}),Object(o.jsxs)("div",{className:"card-preview-attr-container",children:[Object(o.jsx)("h3",{className:"card-preview-attr-name",children:"VIT"}),Object(o.jsx)("h3",{className:"card-preview-attr-value","data-testid":"attr1-card",children:u}),Object(o.jsx)("h3",{className:"card-preview-attr-name",children:"VEL"}),Object(o.jsx)("h3",{className:"card-preview-attr-value","data-testid":"attr2-card",children:p}),Object(o.jsx)("h3",{className:"card-preview-attr-name",children:"FOR"}),Object(o.jsx)("h3",{className:"card-preview-attr-value","data-testid":"attr3-card",children:h})]})]}),Object(o.jsxs)("div",{className:"card-preview-lower-container",children:[Object(o.jsx)("h3",{className:"card-preview-rare","data-testid":"rare-card",children:f(x)}),Object(o.jsx)("p",{className:"card-preview-description","data-testid":"description-card",children:j})]})]})}function v(e){var a=e.value,t=a.cardData,c=a.setCardData,s=function(e){var a=e.target.parentElement,r=t.deckCards.filter((function(e){return t.deckCards.indexOf(e)!==Number(a.id)&&e})),s=t.deckCards.find((function(e){return!0===e.cardTrunfo}));localStorage.setItem("deck",JSON.stringify(r)),s&&c(Object(d.a)(Object(d.a)({},t),{},{deckCards:r,filteredDeck:r})),c(Object(d.a)(Object(d.a)({},t),{},{hasTrunfo:!1,deckCards:r,filteredDeck:r}))};return Object(r.useEffect)((function(){h.a.init({duration:1e3})}),[]),Object(o.jsx)(o.Fragment,{children:t.filteredDeck.map((function(e,a){return Object(o.jsxs)("div",{className:"card-container",id:a,"data-aos":"fade-up",children:[Object(o.jsx)(x,{value:e}),Object(o.jsx)("button",{className:"delete-btn",type:"button",onClick:s,"data-testid":"delete-button",children:"Excluir"})]},a)}))})}t(20);var N=t.p+"static/media/eevee.09964170.png",k=t.p+"static/media/pokeball.043527a9.png";function g(){return Object(r.useEffect)((function(){h.a.init({duration:1e3})}),[]),Object(o.jsxs)("header",{className:"header-body",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:N,alt:"Eevee",className:"header-eevee","data-aos":"fade-left"}),Object(o.jsx)("img",{src:k,alt:"Pok\xe9bola",className:"header-pokeball-3"}),Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("h1",{className:"header-title","data-aos":"fade-right",children:"Pok\xe9trunfo"})}),Object(o.jsx)("p",{className:"header-text","data-aos":"fade-up",children:"Crie suas cartas, monte seu baralho e divirta-se!"}),Object(o.jsx)("img",{className:"header-pokeball-1",src:k,alt:"Pok\xe9bola"}),Object(o.jsx)("img",{className:"header-pokeball-2",src:k,alt:"Pok\xe9bola"})]}),Object(o.jsxs)("div",{className:"pokeball-line-header",children:[Object(o.jsx)("a",{className:"gh-link",href:"https://github.com/rafaelimaf",target:"_blank",rel:"noreferrer","data-aos-delay":"300","data-aos":"fade-up",children:"Github"}),Object(o.jsx)("a",{className:"in-link",href:"https://linkedin.com/in/rafaelimaf",target:"_blank",rel:"noreferrer","data-aos-delay":"500","data-aos":"fade-up",children:"Linkedin"}),Object(o.jsx)("a",{href:"#card-creation",children:Object(o.jsx)("button",{type:"button","aria-label":"button",className:"pokeball-btn",children:Object(o.jsx)("h3",{className:"pokeball-btn-text",children:"Go!"})})})]})]})}t(21);var w=t.p+"static/media/pikachu.57a1a94d.png";function C(e){var a=e.value,t=a.cardData,c=a.setCardData,s=Object(r.useState)({nameFilter:"",rareFilter:"todas",trunfoFilter:!1}),i=Object(n.a)(s,2),j=i[0],u=i[1],m=function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value;u((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},a.name,t))}))};return Object(r.useEffect)((function(){h.a.init({duration:1e3})}),[]),Object(o.jsxs)("div",{className:"deck-filters-body",children:[Object(o.jsx)("img",{className:"deck-filters-pokeball-1",src:k,alt:"pokeball"}),Object(o.jsx)("img",{className:"deck-filters-pokeball-2",src:k,alt:"pokeball"}),Object(o.jsxs)("div",{className:"deck-filters-description",children:[Object(o.jsx)("h1",{className:"deck-filters-title","data-aos":"fade-up",children:"Seu Baralho"}),Object(o.jsx)("p",{className:"deck-filters-text",children:"Confira abaixo todas as suas cartas criadas. Utilize os filtros \xe0 direita para encontr\xe1-las mais rapidamente!"})]}),Object(o.jsxs)("div",{className:"deck-filters-inputs",children:[Object(o.jsx)("h3",{className:"deck-filters-input-title",children:"Filtre por nome:"}),Object(o.jsx)("input",{className:"deck-filters-name",type:"text",name:"nameFilter",onChange:m,"data-testid":"name-filter"}),Object(o.jsx)("h3",{className:"deck-filters-input-title",children:"Filtre por raridade:"}),Object(o.jsxs)("select",{className:"deck-filters-rare",name:"rareFilter",onChange:m,"data-testid":"rare-filter",children:[Object(o.jsx)("option",{value:"todas",children:"Todas"}),Object(o.jsx)("option",{value:"normal",children:"Normal"}),Object(o.jsx)("option",{value:"raro",children:"Raro"}),Object(o.jsx)("option",{value:"muito raro",children:"Muito Raro"})]}),Object(o.jsxs)("div",{className:"deck-filters-trunfo-container",children:[Object(o.jsx)("h3",{className:"deck-filters-input-title",children:"Filtre por trunfo:"}),Object(o.jsx)("input",{className:"deck-filters-trunfo",type:"checkbox",name:"trunfoFilter",onChange:m,"data-testid":"trunfo-filter"})]}),Object(o.jsx)("button",{className:"filter-btn",type:"button",onClick:function(){var e=j.nameFilter,a=j.rareFilter,r=j.trunfoFilter,s=t.deckCards.filter((function(t){return t.cardName.toLowerCase().includes(e.toLowerCase())&&(t.cardRare===a||"todas"===a)&&(t.cardTrunfo===r||!r)}));return c(Object(d.a)(Object(d.a)({},t),{},{filteredDeck:s}))},"data-testid":"filter-button",children:"Filtrar"})]}),Object(o.jsx)("img",{className:"deck-filters-pikachu",src:w,alt:"pikachu","data-aos":"fade-right"})]})}t(11);function D(){var e=Object(r.useState)({cardName:"",cardImage:"",cardDescription:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardTrunfo:!1,cardRare:"normal",deckCards:[],filteredDeck:[],hasTrunfo:!1}),a=Object(n.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("deck");null!==e&&c(Object(d.a)(Object(d.a)({},t),{},{deckCards:JSON.parse(e),filteredDeck:JSON.parse(e)}))}),[]),Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(g,{}),Object(o.jsxs)("section",{className:"card-creation-section",children:[Object(o.jsx)(j,{value:{cardData:t,setCardData:c}}),Object(o.jsx)(O,{value:t})]}),Object(o.jsxs)("section",{className:"card-display-section",children:[Object(o.jsx)(C,{value:{cardData:t,setCardData:c}}),Object(o.jsx)(v,{value:{cardData:t,setCardData:c}})]})]})}i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.d8b1cdda.chunk.js.map