(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(t,e,n){t.exports=n(405)},192:function(t,e,n){},194:function(t,e,n){},232:function(t,e){},405:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),c=(n(192),n(27)),s=n(28),u=n(30),l=n(29),h=n(31),p=(n(194),n(181)),d=n.n(p),f=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).filterBegrippen=function(t){return n.props.data.filter(function(e){return e.label.toLowerCase().includes(t.toLowerCase())})},n.loadOptions=function(t,e){setTimeout(function(){e(n.filterBegrippen(t))},1e3)},n.state={inputValue:""},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{placeholder:"Zoek...",isLoading:this.props.isLoading,cacheOptions:!0,isClearable:!0,loadOptions:this.loadOptions,defaultOptions:!0,onInputChange:this.props.handleInputChange,onChange:this.props.handleSelect}))}}]),e}(a.Component),m=n(73),g=n(6),b=n(74),w=n.n(b),j=n(183),v=n.n(j),O=n(75),y=n(25),S=n(184),C=(n(185),n(121)),L=n.n(C),E=window.dwsHostname,D=window.dwsEndpoint,k=window.dwsConfig,x=window.dwsSearchEndpoint,A=window.dwsSearchResult,I=function(t,e){return Object(O.a)(new Set(Object(O.a)(new Set(t)).concat(Object(O.a)(new Set(e)))))},B=function(t,e,n){return t.map(function(t){return{label:t[e],value:t[n]}})},V=function(t){return t.sort(function(t,e){return t.label>e.label?1:e.label>t.label?-1:0})},W=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).fetchOptions=function(t){fetch("".concat(n.state.searchEndpoint,"?term=").concat(t),{method:"get",headers:{Accept:"application/json"}}).then(function(t){return t.json()}).then(function(t){return B(t,n.state.optionLabel,n.state.optionValue)}).then(function(t){return V(t)}).then(function(t){return n.setState(function(e){return{options:I(t,e.options),isLoading:!1}}),t}).catch(function(t){return console.error(t)})},n.handleInputChange=function(t){return t.length>2&&(n.setState({isLoading:!0}),n.fetchOptions(t)),t},n.handleSelect=function(t){n.setState(function(e){return{options:I(t,e.options)}}),n.props.onChange(t)},n.state=Object(m.a)({},t.formData,{options:[],title:t.schema.title?t.schema.title:"",placeholder:t.uiSchema["ui:options"]&&t.uiSchema["ui:options"].placeholder?t.uiSchema["ui:options"].placeholder:"Voeg toe...",optionLabel:t.uiSchema["ui:options"]&&t.uiSchema["ui:options"].optionLabel?t.uiSchema["ui:options"].optionLabel:"label",optionValue:t.uiSchema["ui:options"]&&t.uiSchema["ui:options"].optionValue?t.uiSchema["ui:options"].optionValue:"value",searchEndpoint:t.uiSchema["ui:options"]&&t.uiSchema["ui:options"].searchEndpoint?t.uiSchema["ui:options"].searchEndpoint:"http://".concat(E).concat(x),isLoading:!0}),n.fetchOptions=Object(y.debounce)(n.fetchOptions,250),n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1,options:this.props.schema.default?this.props.schema.default:[],defaultValue:this.props.formData})}},{key:"render",value:function(){return r.a.createElement(M,{title:this.state.title,placeholder:this.state.placeholder,options:this.state.options,defaultValue:this.props.formData,isLoading:this.state.isLoading,handleSelect:this.handleSelect,handleInputChange:this.handleInputChange})}}]),e}(a.Component),M=function(t){return r.a.createElement("fieldset",null,r.a.createElement("label",null,t.title),r.a.createElement(S.a,{name:t.name,placeholder:t.placeholder,isLoading:t.isLoading,closeMenuOnSelect:!1,components:L()(),defaultValue:t.defaultValue,isMulti:!0,options:t.options,onInputChange:t.handleInputChange,onChange:t.handleSelect,isClearable:!1,isDisabled:t.isDisabled}))},N=function(t){var e={title:"Wijzig",type:"object",required:[],properties:t.formTypes},n={searchField:W},a=t.formUISchema;return t.compacted&&r.a.createElement(v.a,Object.assign({},t,{className:"form form-wide",formData:t.formData,schema:e,uiSchema:a,fields:n,onChange:t.handleFormDataChange,onSubmit:t.handleSubmit}))},F=function(t){return t.map(function(t){var e=t["http://www.w3.org/ns/shacl#name"][0]["@value"],n=Object(g.a)({},e,{"@id":t["http://www.w3.org/ns/shacl#path"][0]["@id"]});if(t["http://www.w3.org/ns/shacl#datatype"]){var a=t["http://www.w3.org/ns/shacl#datatype"][0]["@id"];if(a.toLowerCase().endsWith("date")||a.toLowerCase().endsWith("datetime")){var r={"@type":t["http://www.w3.org/ns/shacl#datatype"][0]["@id"]};Object.assign(n[e],r)}}else{var o=t["http://www.w3.org/ns/shacl#maxCount"];if(o)"1"!==o[0]["@value"]&&(Object.assign(n[e],{"@type":"@id"}),Object.assign(n[e],{"@container":"@set"}));else void 0===t["http://www.w3.org/ns/shacl#maxLength"]&&(Object.assign(n[e],{"@type":"@id"}),Object.assign(n[e],{"@container":"@set"}))}return"altLabel"===e&&n[e]["@type"]&&delete n[e]["@type"],n}).reduce(function(t,e){return Object.assign(e,t)},{})},T=function(t,e,n){return t.map(function(t){var a=t["http://www.w3.org/ns/shacl#name"][0]["@value"],r=e[a],o=n[a];return Object(y.isEmpty)(o)?H(a,r,o):"string"===typeof o?H(a,r,o):Array.isArray(o)?"string"===typeof o[0]?q(a,r,o):"object"===typeof o[0]?o[0]["@language"]?U(a,r,o,"@languague","@value"):o[0].label?U(a,r,o,"label","value"):H(a,r,o):H(a,r,o):o["@type"]?_(a,r,o,"@type","@value"):H(a,r,o)}).reduce(function(t,e){return Object.assign(e,t)},{})},J=function(t,e){var n;return n={},Object(g.a)(n,t,{type:"string"}),Object(g.a)(n,e,{type:"string"}),n},U=function(t,e,n,a,r){return Object(g.a)({},t,{type:"array",items:{type:"object",properties:J(a,r)},title:e,default:n})},H=function(t,e,n){return Object(g.a)({},t,{type:"string",title:e,default:n})},_=function(t,e,n,a,r){return Object(g.a)({},t,{type:"object",properties:J(a,r),title:e,default:n})},q=function(t,e,n){return Object(g.a)({},t,{type:"array",items:{type:"string"},title:e,default:n})},P=function(t,e,n){return t.map(function(t){var n=t["http://www.w3.org/ns/shacl#name"][0]["@value"],a=e[n],r=Number.parseInt(t["http://www.w3.org/ns/shacl#order"][0]["@value"]),o=Object(g.a)({},n,{}),i=t["http://www.w3.org/ns/shacl#maxLength"];i&&(Number.parseInt(i[0]["@value"])>59&&Object.assign(o[n],$()));if(t["http://www.w3.org/ns/shacl#datatype"]){var c=t["http://www.w3.org/ns/shacl#datatype"][0]["@id"];c.toLowerCase().endsWith("date")?Object.assign(o[n],R()):c.toLowerCase().endsWith("datetime")&&Object.assign(o[n],Z())}if(t["http://www.w3.org/ns/shacl#class"]&&t["http://dotwebstack.org/def/elmo#endpoint"]){var s=t["http://dotwebstack.org/def/elmo#endpoint"][0]["@value"];Object.assign(o[n],G(a,s))}var u=t["http://www.w3.org/ns/shacl#maxCount"];return u?"1"===u[0]["@value"]?Object.assign(o[n],z(!1)):Object.assign(o[n],z(!0)):t["http://www.w3.org/ns/shacl#class"]&&t["http://dotwebstack.org/def/elmo#endpoint"]||Object.assign(o[n],z(!0)),Object.assign(o[n],{ordering:r}),o}).reduce(function(t,e){return Object.assign(e,t)},{})},z=function(t){return{"ui:options":{addable:t,removable:!0,orderable:!1}}},R=function(){return{"ui:widget":"date"}},Z=function(){return{"ui:widget":"date-time"}},$=function(){return{"ui:widget":"textarea"}},G=function(t,e){return{"ui:field":"searchField","ui:options":{placeholder:"Voeg een ".concat(t," toe..."),addable:!1,removable:!0,orderable:!1,optionLabel:"label",optionValue:"uri",searchEndpoint:"http://".concat(E).concat(e)}}},K=function(t){var e=t.data;return r.a.createElement("pre",{className:"text-left",dangerouslySetInnerHTML:{__html:JSON.stringify(e,null,2)}})},Q=function(t){return 0===t.indexOf("Begrip: ")?t.substr("Begrip: ".length,t.length):t},X=function(t){return!t||(Array.isArray(t)||"string"===typeof t?!(t.length>0):"object"===typeof t&&!(Object.keys(t).length>0))},Y=function(t){return t.map(function(t){var e=t["http://www.w3.org/2000/01/rdf-schema#label"];return t["http://www.w3.org/2000/01/rdf-schema#label"][0]["@value"]&&(e=t["http://www.w3.org/2000/01/rdf-schema#label"][0]["@value"]),Object(g.a)({},t["http://www.w3.org/ns/shacl#name"][0]["@value"],e)}).reduce(function(t,e){return Object.assign(e,t)},{})},tt=function(t){return t.map(function(t){return Object(g.a)({},t["http://www.w3.org/ns/shacl#name"][0]["@value"],void 0)}).reduce(function(t,e){return Object.assign(e,t)},{})},et=function(t,e){return Object.keys(t).filter(function(t){return!1===t.startsWith("@")}).filter(function(e){return Array.isArray(t[e])}).filter(function(e){return t[e].length>0}).filter(function(e){return"string"===typeof t[e][0]}).map(function(n){return t[n]=t[n].flatMap(function(t){return function(t,e){return t.filter(function(t){return t["@id"]===e}).map(function(t){return{label:t.label,value:e}})}(e,t)})})},nt=function(t){return Object.keys(t).filter(function(t){return!1===t.startsWith("@")}).filter(function(e){return Array.isArray(t[e])}).filter(function(e){return t[e].length>0}).filter(function(e){return"object"===typeof t[e][0]}).map(function(e){return t[e]=t[e].map(function(t){return t.value})})},at=function(t){return Object.keys(t).filter(function(t){return!1===t.startsWith("@")||!1===t.startsWith("http://")}).reduce(function(e,n){return Object(m.a)({},e,Object(g.a)({},n,t[n]))},{})},rt=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).getContext=function(t){return fetch(t,{method:"get",headers:{Accept:"application/ld+json"}}).then(function(t){return t.json()}).then(function(t){var e=F(t);return n.setState({context:e}),console.log("Created context",e),t}).then(function(t){var e=Y(t);return n.setState({labels:e}),console.log("labels",e),t}).then(function(t){var e=tt(t);return n.setState({formData:e}),t}).then(function(t){n.setState({shacl:t})}).catch(console.error)},n.compactBegrip=function(t,e){return new Promise(function(a){w.a.compact(e,n.state.context,function(e,n){e&&console.error(e);var r=Array.isArray(n["@graph"])?n["@graph"].filter(function(e){return e["@id"]===t})[0]:n,o={label:t,uri:t};r.label&&(o={label:Q(r.label),uri:t}),a(o)})})},n.changeFormData=function(t){n.setState({formData:t})},n.submitFormData=function(t){n.setState({formData:t.formData});var e=n.state.compacted;Object.keys(t.formData).map(function(n){return e[n]=t.formData[n]}),nt(e);var a={"@context":n.state.context,"@graph":[].concat(e)};n.expandJson(a).then(function(t){return n.saveBegrip(t)})},n.saveBegrip=function(t){return fetch("http://".concat(E).concat(D),{method:"put",body:JSON.stringify(t),headers:{"Content-Type":"application/ld+json"}}).then(function(t){return console.log("Saved",t)}).then(function(){return n.setState({ld:t})}).catch(console.error)},n.getBegripLabel=function(t){return fetch("".concat(ot(t),"?format=json"),{method:"get",headers:{Accept:"application/ld+json"}}).then(function(t){return t.json()}).then(function(e){return n.compactBegrip(t,e)}).catch(console.error)},n.compact=function(t){return w.a.compact(t,n.state.context,function(e,a){e&&console.error(e);var r=Array.isArray(a["@graph"])?a["@graph"].filter(function(t){return t["@id"]===n.props.selected.value})[0]:a,o=Array.isArray(a["@graph"])?a["@graph"].filter(function(t){return t["@id"]!==n.props.selected.value}):[];et(r,o),Object.keys(r).filter(function(t){return X(r[t])}).map(function(t){return r[t]=void 0});var i=T(n.state.shacl,n.state.labels,at(r)),c=P(n.state.shacl,n.state.labels,at(r)),s={"ui:order":Object.keys(c).map(function(t){return{name:t,ordering:c[t].ordering}}).sort(function(t,e){return t.ordering>e.ordering?1:e.ordering>t.ordering?-1:0}).map(function(t){return t.name})};Object.assign(c,s),console.log(c),n.setState({ld:t,compacted:r,savedValues:o,formTypes:i,formUISchema:c,formData:at(r)})})},n.expandJson=function(t){return new Promise(function(e){return w.a.expand(t,function(t,n){return e(n)})})},n.fetchMetadata=function(){return fetch("".concat(ot(n.props.selected.value),"?format=json"),{method:"get",headers:{Accept:"application/ld+json"}}).then(function(t){return t.json()}).then(function(t){return n.compact(t)}).then(function(){return n.setState({isLoading:!1})}).catch(console.error)},n.state={ld:{},compacted:{},context:{},labels:{},savedValues:[],formData:{},formTypes:{},formUISchema:{},shacl:{},isLoading:!0},n.fetchMetadata=Object(y.debounce)(n.fetchMetadata,250),n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.getContext("http://".concat(E).concat(k))}},{key:"componentDidMount",value:function(){this.fetchMetadata()}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"row"},!this.state.isLoading&&this.state.compacted?r.a.createElement("div",{className:"col-md-12 order-md-1 text-left"},r.a.createElement(N,Object.assign({},this.props,{compacted:this.state.compacted,ld:this.state.ld,labels:this.state.labels,formData:this.state.formData,formTypes:this.state.formTypes,formUISchema:this.state.formUISchema,handleSubmit:this.submitFormData,handleFormDataChange:function(e){return t.changeFormData(e.formData)}})),r.a.createElement("hr",null),r.a.createElement("h4",null,"Compacted JSON-LD"),r.a.createElement(K,{data:this.state.compacted}),r.a.createElement("hr",null),r.a.createElement("h4",null,"Context from SHACL"),r.a.createElement(K,{data:this.state.context})):r.a.createElement("div",null,"Loading"))}}]),e}(a.Component),ot=function(t){return t&&t.length>0?t.replace("standaard.aquo.nl",E).replace("/id/","/doc/"):t},it=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).fetchBegrippen=function(t){fetch("http://".concat(E).concat(x,"?term=").concat(t),{method:"get",headers:{Accept:"application/json"}}).then(function(t){return t.json()}).then(function(t){return t.map(function(t){return{value:t.uri,label:t.label}})}).then(function(t){return t.sort(function(t,e){return t.label>e.label?1:e.label>t.label?-1:0})}).then(function(t){return n.setState({data:t,isLoading:!1})}).catch(function(t){return console.error(t)})},n.handleInputChange=function(t){var e=t.replace(/\W/g,"");return e.length>2&&n.fetchBegrippen(e),n.setState({inputValue:e}),e},n.handleSelect=function(t){n.setState({selected:t})},n.state={isLoading:!0,data:[],selected:""},n.fetchBegrippen=Object(y.debounce)(n.fetchBegrippen,250),n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){A&&A.length>0&&this.setState({selected:{label:A,value:A}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-5 text-center"},r.a.createElement("div",{className:"mb-3"},this.state.selected&&r.a.createElement("pre",null,r.a.createElement("a",{href:ot(this.state.selected.value),target:"_blank",rel:"noopener noreferrer"},ot(this.state.selected.value))),r.a.createElement(f,{data:this.state.data,isLoading:this.state.isLoading,handleSelect:this.handleSelect,handleInputChange:this.handleInputChange})),this.state.selected&&r.a.createElement(rt,{selected:this.state.selected})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(403);i.a.render(r.a.createElement(it,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[187,2,1]]]);
//# sourceMappingURL=main.b8cfebb4.chunk.js.map