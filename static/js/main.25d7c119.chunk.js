(this["webpackJsonpgithub-profile-preview"]=this["webpackJsonpgithub-profile-preview"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),r=c(14),i=c.n(r),a=c(3),l=function(e){var t=e.data;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"text-center",children:"Repositories"}),Object(n.jsx)("div",{className:"repos",children:t.map((function(e){return Object(n.jsxs)("a",{className:"repo",href:e.html_url,target:"_blank",rel:"noreferrer",children:[Object(n.jsxs)("div",{className:"repo-header",children:[Object(n.jsx)("div",{className:"repo-name",children:Object(n.jsx)("h3",{children:e.name})}),Object(n.jsx)("div",{className:"repo-desc",children:Object(n.jsx)("p",{children:e.description})})]}),Object(n.jsxs)("div",{className:"repo-details",children:[Object(n.jsx)("div",{children:e.language}),Object(n.jsxs)("div",{className:"icon-div",children:[Object(n.jsx)("img",{src:"/github-preview/star.svg",className:"icon",alt:"star icon"}),Object(n.jsx)("span",{children:e.stargazers_count})]}),Object(n.jsxs)("div",{className:"icon-div",children:[Object(n.jsx)("img",{src:"/github-preview/fork.svg",className:"icon",alt:"fork icon"}),Object(n.jsx)("span",{children:e.forks_count})]})]})]})}))})]})},j=function(e){var t=e.data,c=e.repo;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"userInfo",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:t.avatar_url,className:"avatar-img"})}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:t.name}),Object(n.jsxs)("a",{href:t.html_url,className:"green-text underline",children:["@",t.login]}),Object(n.jsx)("p",{children:t.bio})]}),Object(n.jsxs)("div",{className:"userFollower",children:[Object(n.jsxs)("p",{children:["followers: ",t.followers]}),Object(n.jsxs)("p",{children:["following: ",t.following]})]})]})]}),Object(n.jsx)(l,{data:c})]})},o=c(5),d=c.n(o),h=function(e){return d.a.get(e).then((function(e){return e.data}))},u=function(e){return d.a.get(e).then((function(e){return e.data}))},b=function(){var e="https://api.github.com/users",t=Object(s.useState)(null),c=Object(a.a)(t,2),r=c[0],i=c[1],l=Object(s.useState)(null),o=Object(a.a)(l,2),d=o[0],b=o[1],O=Object(s.useState)(""),x=Object(a.a)(O,2),f=x[0],p=x[1],m=Object(s.useState)(""),v=Object(a.a)(m,2),g=v[0],w=v[1];return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:"Github Profile Preview"}),Object(n.jsxs)("form",{onSubmit:function(t){i(null),b(null),w(""),t.preventDefault(),function(){var t="".concat(e,"/").concat(f);h(t).then((function(e){console.log(e),i(e)})).catch((function(e){w("user not found enter another username ")}))}(),function(){var t="".concat(e,"/").concat(f,"/repos");u(t).then((function(e){b(e)})).catch((function(e){w("error happened")}))}()},children:[Object(n.jsx)("input",{value:f,onChange:function(e){return p(e.target.value)}}),Object(n.jsx)("button",{type:"submit",children:"search"})]}),Object(n.jsx)("h1",{children:g}),null!==r&&null!==d&&Object(n.jsx)(j,{data:r,repo:d}),Object(n.jsxs)("div",{className:"credit",children:["Icons made by ",Object(n.jsx)("a",{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect",children:"Pixel perfect"})," from ",Object(n.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})};c(38);i.a.render(Object(n.jsx)(b,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.25d7c119.chunk.js.map