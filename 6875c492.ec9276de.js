(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{100:function(e,a,t){"use strict";var r=t(2),n=t(0),l=t.n(n),m=Object.assign({React:l.a},l.a,{ButtonExample:function(e){return l.a.createElement("button",Object(r.a)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}});a.a=m},101:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(95),m=t(94),c=t(99),o=t(96),s=t(102),i=t(97),u=t(47),g=t.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,E,p=e.children,h=e.frontMatter,v=e.metadata,b=e.truncated,f=e.isBlogPostPage,N=void 0!==f&&f,w=v.date,_=v.permalink,k=v.tags,y=v.readingTime,T=h.author,M=h.title,j=h.image,O=h.keywords,P=h.author_url||h.authorURL,R=h.author_title||h.authorTitle,J=h.author_image_url||h.authorImageURL,x=Object(i.a)(j,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,O&&O.length&&n.a.createElement("meta",{name:"keywords",content:O.join(",")}),j&&n.a.createElement("meta",{property:"og:image",content:x}),j&&n.a.createElement("meta",{property:"twitter:image",content:x}),j&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M})),n.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=w.substring(0,10).split("-"),r=t[0],u=d[parseInt(t[1],10)-1],E=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},N?M:n.a.createElement(o.a,{to:_},M)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:w,className:g.a.blogPostDate},u," ",E,", ",r," ",y&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},J&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:J,alt:T})),n.a.createElement("div",{className:"avatar__intro"},T&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},T)),n.a.createElement("small",{className:"avatar__subtitle"},R)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},p)),(k.length>0||b)&&n.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),b&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:v.permalink,"aria-label":"Read more about "+M},n.a.createElement("strong",null,"Read More"))))))}},70:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(98),m=t(101),c=t(96);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,o=a.name,s=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+o+'"',description:'Blog | Tagged "'+o+'"'},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s," ",function(e,a){return e>1?a+"s":a}(s,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}}}]);