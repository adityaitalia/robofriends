(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,a,n){e.exports=n(29)},26:function(e,a,n){},27:function(e,a,n){},29:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(2),i=n.n(o),s=n(5),c=n(1),l=n(14),u=n(15),m=(n(26),n(3)),h=n(4),d=n(7),b=n(6),E=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),width:"200",height:"200"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},g=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(E,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))},p=[{id:1,name:"Aditya Italia",username:"Italia",email:"italiaaditya@gmail.com"},{id:2,name:"Harsh Vora",username:"Antonette",email:"hagdu@gmail.com"},{id:3,name:"Saharsh Barve",username:"Samantha",email:"b3@gmail.com"},{id:4,name:"Siddharth Shah",username:"Karianne",email:"overthinker@gmail.com"},{id:5,name:"Vedant RC",username:"Kamren",email:"vrc@gmail.com"},{id:6,name:"Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolf",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clement DuBuque",username:"Moriah.Stanton",email:"padberg@karina.biz"}],f=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a}))},v=(n(27),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"500px"}},e.children)}),S=function(e){Object(d.a)(n,e);var a=Object(b.a)(n);function n(e){var t;return Object(m.a)(this,n),(t=a.call(this,e)).state={hasError:!1},t}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops"):this.props.children}}]),n}(t.Component),O=function(e){Object(d.a)(n,e);var a=Object(b.a)(n);function n(){return Object(m.a)(this,n),a.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,a=e.searchField,n=e.onSearchChange,t=(e.requestRobots,e.isPending,p.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(f,{searchChange:n}),r.a.createElement(v,null,r.a.createElement(S,null,r.a.createElement(g,{robots:t}))))}}]),n}(t.Component),y=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(a){return e({type:"CHANGE_SEARCH_FIELD",payload:a.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("./robots").then((function(e){return e.json()})).then((function(a){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:a})})).catch((function(a){return e({type:"REQUEST_ROBOTS_FAILED",payload:a})}))}))}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R={searchField:""},C={isPending:!1,robots:[],error:""},w=(n(28),Object(l.createLogger)()),_=Object(c.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:a.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:a.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:a.payload,isPending:!1});default:return e}}}),j=Object(c.d)(_,Object(c.a)(u.a,w));i.a.render(r.a.createElement(s.a,{store:j},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.077f681f.chunk.js.map