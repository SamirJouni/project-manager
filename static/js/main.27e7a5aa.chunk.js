(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(5),i=n.n(a),l=(n(18),n(9)),c=n(6),s=n(7),u=n(10),d=n(8),f=n(11),m=function(e){var t=e.project,n=t.id,o=t.title,a=t.category;return r.a.createElement("li",null,r.a.createElement("strong",null,o)," - ",a," ",r.a.createElement("span",{onClick:function(){return e.onDelete(n)}},"X"))},p=function(e){var t;return e.projects&&(t=e.projects.map(function(t,n){return r.a.createElement(m,{key:n,project:t,onDelete:e.onDelete})})),r.a.createElement("div",null,r.a.createElement("h2",null,"PROJECTS"),t)},g=function(e){var t,n=e.defaultProps,o=e.onSubmitHandler,a=n.categories.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}),i=n.categories[0];return r.a.createElement("div",null,r.a.createElement("h2",null,"ADD PROJECT"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.value?(o(t.value,i.value),t.value="",i.value=n.categories[0]):alert("Title Is Required !")}},r.a.createElement("div",{style:{marginBottom:".8rem",marginTop:"1.3rem"}},r.a.createElement("label",null,"Title"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",ref:function(e){return t=e}})),r.a.createElement("div",null,r.a.createElement("label",null,"Category"),r.a.createElement("br",null),r.a.createElement("select",{ref:function(e){return i=e}},a)),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"submit"})),r.a.createElement("br",null))},v=function(e){return r.a.createElement("li",null,r.a.createElement("strong",null,e.todo.title))},h=function(e){var t;return e.todos&&(t=e.todos.map(function(e,t){return r.a.createElement(v,{key:t,todo:e})})),r.a.createElement("div",null,r.a.createElement("h2",null,"TODOS"),t)},E=n(1),b=n.n(E),w=(n(21),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getProjects=function(){e.setState({projects:[{id:b.a.v4(),title:"business website",category:"web design"},{id:b.a.v4(),title:"social app",category:"mobile development"},{id:b.a.v4(),title:"shopping cart",category:"web development"}]})},e.getDefaultProperties=function(){e.setState({defaultProps:{categories:["Web Design","Web Development","Mobile Development"]}})},e.getTodos=function(){fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()}).then(function(t){return e.setState({todos:t})}).catch(console.log)},e.handleSubmit=function(t,n){var o=Object(l.a)(e.state.projects);o.push({id:b.a.v4(),title:t,category:n}),e.setState({projects:o})},e.handleDelete=function(t){var n=e.state.projects.filter(function(e){return e.id!==t});e.setState({projects:n})},e.state={projects:[],defaultProps:{categories:[]},todos:[]},e}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getProjects(),this.getDefaultProperties(),this.getTodos()}},{key:"componentDidMount",value:function(){this.getProjects(),this.getDefaultProperties(),this.getTodos()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{defaultProps:this.state.defaultProps,onSubmitHandler:this.handleSubmit}),r.a.createElement(p,{projects:this.state.projects,onDelete:this.handleDelete}),r.a.createElement("hr",null),r.a.createElement(h,{todos:this.state.todos}))}}]),t}(o.Component)),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");j?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(e)})}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.27e7a5aa.chunk.js.map