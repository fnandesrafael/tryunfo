(this.webpackJsonptryunfo=this.webpackJsonptryunfo||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(10),s=a.n(n),i=a(9),d=a(11),o=a(2),l=a(3),u=a(5),m=a(4),j=a(6),b=a.n(j),f=(a(7),a(0)),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){b.a.init({duration:1500})}},{key:"render",value:function(){var e=this.props,t=e.cardName,a=e.cardDescription,r=e.cardAttr1,c=e.cardAttr2,n=e.cardAttr3,s=e.cardImage,i=e.cardRare,d=e.cardTrunfo,o=e.isSaveButtonDisabled,l=e.onInputChange,u=e.onSaveButtonClick,m=e.hasTrunfo;return Object(f.jsxs)("div",{className:"container-fluid d-flex flex-column w-75","data-aos":"fade-right",children:[Object(f.jsxs)("label",{htmlFor:"cardName",children:[Object(f.jsx)("h3",{className:"fs-5",children:"Nome:"}),Object(f.jsx)("input",{name:"cardName",type:"text","data-testid":"name-input",value:t,onChange:l,className:"form-control"})]}),Object(f.jsxs)("label",{htmlFor:"cardImage",className:"image-space",children:[Object(f.jsx)("h3",{className:"fs-5 mt-3",children:"Imagem:"}),Object(f.jsx)("input",{name:"cardImage",type:"text","data-testid":"image-input",value:s,onChange:l,className:"form-control"})]}),Object(f.jsxs)("div",{className:"container-fluid d-flex flex-row justify-content-between p-0 align-items-center",children:[Object(f.jsxs)("label",{htmlFor:"attr1",children:[Object(f.jsx)("h3",{className:"fs-5 mt-3",children:"Atributo 1:"}),Object(f.jsx)("input",{name:"cardAttr1",type:"number","data-testid":"attr1-input",value:r,onChange:l,min:"0",max:"90",className:"form-control"})]}),Object(f.jsxs)("label",{htmlFor:"attr2",children:[Object(f.jsx)("h3",{className:"fs-5 mt-3",children:"Atributo 2:"}),Object(f.jsx)("input",{name:"cardAttr2",type:"number","data-testid":"attr2-input",value:c,onChange:l,min:"0",max:"90",className:"form-control"})]}),Object(f.jsxs)("label",{htmlFor:"attr3",children:[Object(f.jsx)("h3",{className:"fs-5 mt-3",children:"Atributo 3:"}),Object(f.jsx)("input",{name:"cardAttr3",type:"number","data-testid":"attr3-input",value:n,onChange:l,min:"0",max:"90",className:"form-control"})]})]}),Object(f.jsxs)("div",{className:"container-fluid d-flex flex-row justify-content-between align-items-center p-0 mt-3",children:[m?Object(f.jsx)("p",{className:"fs-6 m-0 text-muted",children:"Voc\xea j\xe1 tem um Super Trunfo em seu baralho."}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{className:"fs-5 m-0",children:"Super Trunfo"}),Object(f.jsx)("label",{htmlFor:"cardTrunfo",className:"form-check-label",children:Object(f.jsx)("input",{name:"cardTrunfo",type:"checkbox","data-testid":"trunfo-input",checked:d,onChange:l,className:"form-check-input"})})]}),Object(f.jsx)("h3",{className:"fs-5 m-0 mx-3",children:"Raridade:"}),Object(f.jsx)("label",{htmlFor:"cardRare",children:Object(f.jsxs)("select",{name:"cardRare","data-testid":"rare-input",value:i,onChange:l,className:"form-select",children:[Object(f.jsx)("option",{value:"normal",children:"Normal"}),Object(f.jsx)("option",{value:"raro",children:"Raro"}),Object(f.jsx)("option",{value:"muito raro",children:"Muito Raro"})]})})]}),Object(f.jsx)("textarea",{name:"cardDescription",cols:"30",rows:"10","data-testid":"description-input",value:a,onChange:l,className:"form-control mt-3 h-50"}),Object(f.jsx)("button",{"data-testid":"save-button",type:"submit",disabled:o,onClick:u,className:"btn btn-primary w-25 align-self-center mt-3",children:"Salvar"})]})}}]),a}(r.Component),x=(a(17),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){b.a.init({duration:1e3})}},{key:"render",value:function(){var e=this.props,t=e.cardName,a=e.cardDescription,r=e.cardAttr1,c=e.cardAttr2,n=e.cardAttr3,s=e.cardImage,i=e.cardRare,d=e.cardTrunfo,o=e.token;return Object(f.jsxs)("div",{className:"container card-body mx-5",id:o,"data-aos":"fade-up",children:[Object(f.jsx)("h4",{"data-testid":"name-card",className:"fs-4 fw-bold text-center card-name",children:t}),!0===d?Object(f.jsx)("h3",{"data-testid":"trunfo-card",className:"fs-6 fw-bold text-center card-trunfo",children:"Super Trunfo \u2b50"}):Object(f.jsx)("h3",{className:"fs-6 fw-bold text-center card-trunfo",children:"Carta Comum"}),Object(f.jsx)("img",{src:s,alt:t,"data-testid":"image-card",className:"image-fluid card-image"}),Object(f.jsx)("h4",{"data-testid":"rare-card",className:"h5 text-center text-capitalize fw-bold card-rare",children:i}),Object(f.jsx)("p",{"data-testid":"description-card",className:"fs-6 text-break text-center p-2 card-description",children:a}),Object(f.jsxs)("div",{className:"container d-flex justify-content-around",children:[Object(f.jsx)("label",{htmlFor:"attr1",children:Object(f.jsx)("h5",{name:"attr1","data-testid":"attr1-card",className:"fs-4 fw-bold m-2 card-attr",children:r})}),Object(f.jsx)("label",{htmlFor:"attr2",children:Object(f.jsx)("h5",{name:"attr2","data-testid":"attr2-card",className:"fs-4 fw-bold m-2 card-attr",children:c})}),Object(f.jsx)("label",{htmlFor:"attr3",children:Object(f.jsx)("h5",{name:"attr3","data-testid":"attr3-card",className:"fs-4 fw-bold m-2 card-attr",children:n})})]})]})}}]),a}(r.Component)),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){b.a.init({duration:1500})}},{key:"render",value:function(){return Object(f.jsx)("header",{children:Object(f.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light container-fluid align-items-center fixed-top shadow","data-aos-mirror":"true",children:[Object(f.jsx)("a",{className:"navbar-brand p-2 mx-0",href:"/",children:Object(f.jsx)("h2",{className:"h2","data-aos":"fade-down","data-aos-duration":"1000",children:"Tryunfo"})}),Object(f.jsx)("p",{className:"text-muted my-1","data-aos":"fade-down",children:"by Rafael de Lima"}),Object(f.jsx)("ul",{className:"ms-auto navbar-nav",children:Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)("a",{href:"https://github.com/rafaelimaf",target:"_blank",rel:"noreferrer",className:"nav-link text-primary","data-aos":"fade-down",children:"Github"})})})]})})}}]),a}(r.Component),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){b.a.init({duration:1e3})}},{key:"render",value:function(){var e=this.props.onInputChange;return Object(f.jsxs)("div",{className:"container-fluid d-flex flex-column bg-dark text-light mb-5 shadow","data-aos":"fade-right",children:[Object(f.jsx)("h2",{className:"fs-2 text-center py-4 mb-0 border-bottom text-light bg-dark",children:"Seu Deck"}),Object(f.jsxs)("div",{className:"container-fluid","data-aos":"fade-up",children:[Object(f.jsx)("h3",{className:"fs-5 mt-3",children:"Filtrar por nome:"}),Object(f.jsx)("input",{name:"nameFilter",type:"text","data-testid":"name-filter",onChange:e,className:"form-control"})]}),Object(f.jsxs)("div",{className:"container-fluid","data-aos":"fade-up",children:[Object(f.jsx)("h3",{className:"fs-5 mt-3",children:"Filtrar por raridade:"}),Object(f.jsxs)("select",{name:"rareFilter","data-testid":"rare-filter",onChange:e,className:"form-select",children:[Object(f.jsx)("option",{value:"todas",children:"Todas"}),Object(f.jsx)("option",{value:"normal",children:"Normal"}),Object(f.jsx)("option",{value:"raro",children:"Raro"}),Object(f.jsx)("option",{value:"muito raro",children:"Muito Raro"})]})]}),Object(f.jsxs)("div",{className:"container-fluid d-flex flex-row align-items-center mt-3 mb-3","data-aos":"fade-up",children:[Object(f.jsx)("h5",{className:"fs-5 m-0 me-3",children:"Somente Super Trunfo"}),Object(f.jsx)("label",{htmlFor:"trunfoFilter",className:"form-check-label",children:Object(f.jsx)("input",{type:"checkbox","data-testid":"trunfo-filter",name:"trunfoFilter",onChange:e,className:"form-check-input"})})]})]})}}]),a}(r.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"container-fluid bg-light py-3",children:Object(f.jsx)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",children:Object(f.jsx)("div",{className:"col-md-4 d-flex align-items-center",children:Object(f.jsx)("span",{className:"text-muted",children:"\xa9 2022 Rafael de Lima"})})})})}}]),a}(r.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onInputChange=function(t){var a=t.target,r=a.name,c="checkbox"===a.type?a.checked:a.value;e.setState(Object(d.a)({},r,c),e.ableButton)},e.ableButton=function(){e.onClickFilter();var t=e.state,a=t.cardName,r=t.cardImage,c=t.cardDescription,n=t.cardRare,s=t.cardAttr1,i=t.cardAttr2,d=t.cardAttr3;""!==a&&""!==r&&""!==c&&""!==n&&Number(s)>=0&&Number(s)<=90&&Number(i)>=0&&Number(i)<=90&&Number(d)>=0&&Number(d)<=90&&Number(s)+Number(i)+Number(d)<=210?e.setState({isSaveButtonDisabled:!1}):e.setState({isSaveButtonDisabled:!0})},e.onSaveButtonClick=function(){var t=e.state,a=t.cardName,r=t.cardDescription,c=t.cardImage,n=t.cardRare,s=t.cardTrunfo,d=t.cardAttr1,o=t.cardAttr2,l=t.cardAttr3;e.setState((function(e){return{tryunfoDeck:[].concat(Object(i.a)(e.tryunfoDeck),[{cardName:a,cardDescription:r,cardImage:c,cardRare:n,cardTrunfo:s,cardAttr1:d,cardAttr2:o,cardAttr3:l,token:JSON.stringify(Math.random())}]),tryunfoDeckBackup:[].concat(Object(i.a)(e.tryunfoDeck),[{cardName:a,cardDescription:r,cardImage:c,cardRare:n,cardTrunfo:s,cardAttr1:d,cardAttr2:o,cardAttr3:l,token:JSON.stringify(Math.random())}]),cardName:"",cardDescription:"",cardImage:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardRare:"normal",cardTrunfo:!1,isSaveButtonDisabled:!0,hasTrunfo:!!s||e.hasTrunfo}}))},e.onClickDelete=function(t){var a=t.target,r=e.state.tryunfoDeck,c=a.parentElement.firstChild.getAttribute("id"),n=r.filter((function(e){return e.token!==c}));e.setState({tryunfoDeck:n,tryunfoDeckBackup:n},(function(){return n.some((function(e){return!0===e.cardTrunfo}))?e.setState({hasTrunfo:!0}):e.setState({hasTrunfo:!1})}))},e.onClickFilter=function(){var t=e.state,a=t.tryunfoDeckBackup,r=t.nameFilter,c=t.rareFilter,n=t.trunfoFilter,s=a.filter((function(e){return e.cardName.toLowerCase().includes(r.toLowerCase())&&(e.cardRare===c||"todas"===c)&&(e.cardTrunfo||!n)}));return e.setState({tryunfoDeck:s}),s},e.state={cardName:"",cardDescription:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardImage:"",cardRare:"normal",cardTrunfo:!1,token:"",isSaveButtonDisabled:!0,tryunfoDeck:[],tryunfoDeckBackup:[],hasTrunfo:!1,nameFilter:"",rareFilter:"todas",trunfoFilter:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){b.a.init({duration:1e3})}},{key:"render",value:function(){var e=this,t=this.state,a=t.cardName,r=t.cardDescription,c=t.cardAttr1,n=t.cardAttr2,s=t.cardAttr3,i=t.cardImage,d=t.cardRare,o=t.cardTrunfo,l=t.isSaveButtonDisabled,u=t.hasTrunfo,m=t.token,j=t.tryunfoDeck;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{}),Object(f.jsxs)("div",{className:"container-fluid d-flex flex-row py-5",children:[Object(f.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-around",children:[Object(f.jsx)("h2",{className:"fs-2 text-center mb-5","data-aos":"fade-down",children:"Adicionar Nova Carta"}),Object(f.jsx)(h,{cardName:a,cardDescription:r,cardAttr1:c,cardAttr2:n,cardAttr3:s,cardImage:i,cardRare:d,cardTrunfo:o,hasTrunfo:u,isSaveButtonDisabled:l,onInputChange:this.onInputChange,onSaveButtonClick:this.onSaveButtonClick})]}),Object(f.jsxs)("div",{className:"container-fluid d-flex flex-column align-items-center h-75",children:[Object(f.jsx)("h2",{className:"fs-2 text-center mb-5","data-aos":"fade-left",children:"Pr\xe9 Visualiza\xe7\xe3o da Carta"}),Object(f.jsx)(x,{cardName:a,cardDescription:r,cardAttr1:c,cardAttr2:n,cardAttr3:s,cardImage:i,cardRare:d,cardTrunfo:o})]})]}),Object(f.jsxs)("div",{className:"container-fluid p-0",children:[Object(f.jsx)(O,{onInputChange:this.onInputChange}),Object(f.jsx)("div",{className:"container-fluid d-flex flex-row flex-wrap justify-content-around align-items-center",children:j.map((function(t){return Object(f.jsxs)("div",{className:"content d-flex flex-column align-items-center",children:[Object(f.jsx)(x,{token:t.token,cardName:t.cardName,cardImage:t.cardImage,cardAttr1:t.cardAttr1,cardAttr2:t.cardAttr2,cardAttr3:t.cardAttr3,cardTrunfo:t.cardTrunfo,cardRare:t.cardRare,cardDescription:t.cardDescription},m),Object(f.jsx)("button",{type:"button","data-testid":"delete-button",className:"btn btn-primary my-5",onClick:e.onClickDelete,children:"Excluir"})]},t.token)}))})]}),Object(f.jsx)(N,{})]})}}]),a}(c.a.Component);a(18);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0883fb84.chunk.js.map