(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{111:function(e,t,a){e.exports=a(200)},122:function(e,t,a){e.exports=a.p+"static/media/Logo.3863fd9b.png"},197:function(e,t,a){e.exports=a.p+"static/media/contact-500.9dce6df3.jpg"},198:function(e,t,a){e.exports=a.p+"static/media/my_picture.1da0cf41.jpg"},199:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),s=a(15),o=a(14),m=a(4),i=(a(116),a(23)),u=a.n(i);var d=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),r=t[0],l=t[1],o=Object(n.useState)(!1),i=Object(m.a)(o,2),d=i[0],f=i[1],E=function(){return c.a.createElement("nav",{className:"header__nav-wrap"},c.a.createElement("ul",{className:"header__nav"},c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/",activeClassName:"current",onClick:function(){return f(!1)}},"Home")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/"},"Blogs"),c.a.createElement("ul",{className:"sub-menu"},c.a.createElement("li",null,c.a.createElement(s.c,{activeClassName:"current",exact:!0,to:"/categories/cricket",onClick:function(){return f(!1)}},"Cricket")),c.a.createElement("li",null,c.a.createElement(s.c,{activeClassName:"current",exact:!0,to:"/categories/trending",onClick:function(){return f(!1)}},"What's Trending?")),c.a.createElement("li",null,c.a.createElement(s.c,{activeClassName:"current",exact:!0,to:"/categories/literary",onClick:function(){return f(!1)}},"Literary work")))),c.a.createElement("li",null,c.a.createElement(s.c,{activeClassName:"current",to:"/about",onClick:function(){return f(!1)}},"About")),c.a.createElement("li",null,c.a.createElement(s.c,{activeClassName:"current",to:"/contact",onClick:function(){return f(!1)}},"Contact"))),c.a.createElement("ul",{className:"header__social"},c.a.createElement("li",{className:"ss-facebook"},c.a.createElement("a",{href:"https://www.facebook.com/rishabh.beniwal"},c.a.createElement("span",{className:"screen-reader-text"},"Facebook"))),c.a.createElement("li",{className:"ss-instagram"},c.a.createElement("a",{href:"https://www.instagram.com/rishabhbeniwal27/"},c.a.createElement("span",{className:"screen-reader-text"},"Instagram"))),c.a.createElement("li",{className:"ss-youtube"},c.a.createElement("a",{href:"#0"},c.a.createElement("span",{className:"screen-reader-text"},"Youtube"))),c.a.createElement("li",{className:"ss-linkedin"},c.a.createElement("a",{href:"https://www.linkedin.com/in/rishabh-beniwal-0b714a197/"},c.a.createElement("span",{className:"screen-reader-text"},"Linkedin"))),c.a.createElement("li",{className:"ss-email"},c.a.createElement("a",{href:"mailto:rishabhbeniwal27@gmail.com"},c.a.createElement("span",{className:"screen-reader-text"},"Email")))))},h=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],o=t[1],i=function(){l(!r),f(!1)};return c.a.createElement("div",{className:"search-is-visible"},c.a.createElement("div",{className:"header__search"},c.a.createElement(u.a,null,c.a.createElement("form",{role:"search",className:"header__search-form"},c.a.createElement("label",null,c.a.createElement("span",{className:"hide-content"},"Search for:"),c.a.createElement("input",{type:"search",className:"header__search-field",placeholder:"Type Keywords",title:"Search for:",onChange:function(e){o(e.target.value)},value:a,onKeyPress:function(e){return function(e){13===e.charCode&&e.preventDefault()}(e)}})),c.a.createElement(s.b,{exact:!0,to:"/search/".concat(a),onClick:function(){return i()},className:"btn"},"Search")),c.a.createElement("a",{href:"#",title:"Close Search",className:"header__search-close",onClick:function(){return i()}},"Close"))))};return r?c.a.createElement(h,null):c.a.createElement("div",null,c.a.createElement("header",{className:"s-header"},c.a.createElement("div",{className:"header__top"},c.a.createElement("div",{className:"header__logo"},c.a.createElement(s.b,{className:"site-logo",to:"/"},c.a.createElement("img",{src:a(122),alt:""}))),c.a.createElement(s.b,{to:"#",className:"header__search-trigger",onClick:function(){return l(!r)}}),c.a.createElement(s.b,{to:"#",className:d?"header__menu-toggle is-clicked":"header__menu-toggle",onClick:function(){return f(!d)}},c.a.createElement("span",null,"Menu")))," ",d?c.a.createElement("div",{className:"nav-wrap-is-visible"},c.a.createElement(E,null)):c.a.createElement(E,null)))},f=a(24),E=a.n(f),h=a(34),p=a(35),b=a.n(p),g=a(39),v=a.n(g),N=(a(44),a(201)),y=a(40),w=a(17),_=a.n(w),j=function(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(Date.parse(e)).toUpperCase()},O=a(202),k=function(){var e=Object(n.useState)(window.innerWidth),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){return c(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:a}},C=function(){var e=15,t=Object(n.useState)(0),a=Object(m.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(1),i=Object(m.a)(o,2),u=i[0],d=i[1],f=Object(n.useState)([]),p=Object(m.a)(f,2),g=p[0],w=p[1],C=Object(n.useState)([]),x=Object(m.a)(C,2),S=x[0],T=x[1],L=Object(n.useState)(!1),Y=Object(m.a)(L,2),F=Y[0],I=Y[1],P=Object(n.useState)(!1),B=Object(m.a)(P,2),W=B[0],M=B[1],D=k().width;e=D<500?10:D<800?15:20;Object(n.useEffect)((function(){setTimeout((function(){I(!0)}),500)}),[]),Object(n.useEffect)((function(){(function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,e.next=4,b.a.get("".concat(".","/api/blog/"));case 4:t=e.sent,w(t.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:M(!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){T(g.slice(r,r+e))}),[r,g]),Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);return c.a.createElement("div",{className:"s-content"},W?c.a.createElement("div",{className:"loading"},c.a.createElement(O.a,null)):c.a.createElement("div",null,c.a.createElement(v.a,{breakpointCols:D<700?1:g.length<10||D<1200?2:D<1600?3:4,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},function(){if(S.length>0)return S.map((function(e){return c.a.createElement(s.b,{to:"/blog/".concat(e.slug),className:"stretched-link",key:e.id},c.a.createElement(_.a,{bottom:!0,opposite:!0,cascade:!0,when:!0===F,key:e.title},c.a.createElement(N.a,{hoverable:!0,style:{width:"100%",marginBottom:"40px"},cover:c.a.createElement("img",{alt:"example",src:e.thumbnail}),bordered:!0},c.a.createElement("div",{className:"entry__text"},c.a.createElement("div",{className:"entry__header"},c.a.createElement("h2",{className:"entry__title"},e.title),c.a.createElement("div",{className:"entry__meta"},c.a.createElement("span",{className:"entry__meta-cat"},e.category," |"),c.a.createElement("span",{className:"entry__meta-date"},j(e.date_created)))),c.a.createElement("div",{className:"entry__excerpt"},c.a.createElement("p",null,e.summary))))))}))}()),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column large-full"},c.a.createElement("nav",{className:"pgn"},c.a.createElement(y.a,{onClick:window.scrollTo(0,0),totalRecords:g.length,pageLimit:e,pageNeighbours:3,setOffset:l,currentPage:u,setCurrentPage:d,pageLinkClass:"pgn__num",pageNextClass:"pgn__next",pagePrevClass:"pgn__prev"}))))))},x=(a(94),a(203)),S=a(103),T=a.n(S),L=function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),i=o[0],d=o[1],f=Object(n.useState)(""),p=Object(m.a)(f,2),g=p[0],v=p[1],N=Object(n.useState)(""),y=Object(m.a)(N,2),w=y[0],k=y[1],C=Object(n.useState)(!1),S=Object(m.a)(C,2),L=S[0],Y=S[1],F=function(e){e.preventDefault();var t,a={name:(t=i,t?t.charAt(0).toUpperCase()+t.slice(1):""),email:g,message:w,blog_title:r.title,blog_slug:r.slug};d(""),v(""),k(""),console.log("hello"),console.log(a),x.a.success("Successfully Submitted",[3])};Object(n.useEffect)((function(){var t=e.match.params.id;(function(){var e=Object(h.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.prev=1,e.next=4,b.a.get("".concat(".","/../../api/blog/").concat(t));case 4:a=e.sent,l(a.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:Y(!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);var I;return c.a.createElement("div",{className:"s-content content"},L?c.a.createElement("div",{className:"loading"},c.a.createElement(O.a,null)):c.a.createElement("main",{className:"row content__page"},c.a.createElement("article",{className:"column large-full entry format-standard"},c.a.createElement("div",{className:"media-wrap entry__media"},c.a.createElement("div",{className:"entry__post-thumb"},c.a.createElement(T.a,{top:!0,cascade:!0},c.a.createElement("img",{src:r.thumbnail,alt:""})))),c.a.createElement("div",{className:"content__page-header entry__header"},c.a.createElement("h1",{className:"display-1 entry__title"},c.a.createElement(u.a,{top:!0,delay:500},r.title)),c.a.createElement("ul",{className:"entry__header-meta"},c.a.createElement(u.a,{bottom:!0,delay:800},c.a.createElement("li",{className:"entry__meta-cat"},(I=r.category)?I.toUpperCase():""),c.a.createElement("li",{className:"date"},r.id>0?j(r.date_created):null))))," ",c.a.createElement(u.a,{left:!0,delay:1e3},c.a.createElement("div",{className:"entry__content",dangerouslySetInnerHTML:{__html:r.content}}))),c.a.createElement(_.a,{bottom:!0,cascade:!0,key:r.title},c.a.createElement("section",{className:"column large-full entry format-standard"},c.a.createElement("h3",{className:"h2"},"Got to say something about this blog?"),c.a.createElement("form",{name:"contactForm",id:"contactForm",onSubmit:function(e){return F(e)}},c.a.createElement("fieldset",null,c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{className:"full-width",placeholder:"Your Name",type:"text",onChange:function(e){return d(e.target.value)},value:i})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{className:"full-width",placeholder:"Your Email",type:"text",onChange:function(e){return v(e.target.value)},value:g})),c.a.createElement("div",{className:"message form-field"},c.a.createElement("textarea",{className:"full-width",placeholder:"Your Message",onChange:function(e){return k(e.target.value)},value:w})),c.a.createElement("input",{className:"btn btn--primary btn-wide btn--large full-width",defaultValue:"Send Message",type:"submit"})))))))},Y=function(e){var t=15,a=Object(n.useState)([]),r=Object(m.a)(a,2),l=r[0],o=r[1],i=Object(n.useState)([]),u=Object(m.a)(i,2),d=u[0],f=u[1],p=Object(n.useState)(0),g=Object(m.a)(p,2),w=g[0],C=g[1],x=Object(n.useState)(1),S=Object(m.a)(x,2),T=S[0],L=S[1],Y=Object(n.useState)(!1),F=Object(m.a)(Y,2),I=F[0],P=F[1],B=k().width;t=B<500?10:B<800?15:20;Object(n.useEffect)((function(){var t=e.match.params.id,a={headers:{"Content-Type":"application/json"}};(function(){var e=Object(h.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.prev=1,e.next=4,b.a.post("".concat(".","/../../api/blog/category"),{category:t},a);case 4:n=e.sent,o(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:P(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]),Object(n.useEffect)((function(){f(l.slice(w,w+t))}),[w,l]);return Object(n.useEffect)((function(){f(l.slice(w,w+t))}),[w,l]),c.a.createElement("div",{className:"s-content"},I?c.a.createElement("div",{className:"loading"},c.a.createElement(O.a,null)):c.a.createElement("div",null,c.a.createElement(v.a,{breakpointCols:B<700?1:l.length<10||B<1200?2:B<1600?3:4,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},d.map((function(e){return c.a.createElement(n.Fragment,null,c.a.createElement(s.b,{to:"/blog/".concat(e.slug),className:"stretched-link"},c.a.createElement(_.a,{bottom:!0,opposite:!0,cascade:!0,delay:40,key:e.title},c.a.createElement(N.a,{hoverable:!0,style:{width:"100%",marginBottom:"40px"},cover:c.a.createElement("img",{alt:"example",src:e.thumbnail}),bordered:!0},c.a.createElement("div",{className:"entry__text"},c.a.createElement("div",{className:"entry__header"},c.a.createElement("h2",{className:"entry__title"},e.title),c.a.createElement("div",{className:"entry__meta"},c.a.createElement("span",{className:"entry__meta-cat"},e.category," |"),c.a.createElement("span",{className:"entry__meta-date"},j(e.date_created)))),c.a.createElement("div",{className:"entry__excerpt"},c.a.createElement("p",null,e.summary)))))))}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column large-full"},c.a.createElement("nav",{className:"pgn"},c.a.createElement(y.a,{onClick:window.scrollTo(0,0),totalRecords:l.length,pageLimit:t,pageNeighbours:3,setOffset:C,currentPage:T,setCurrentPage:L,pageLinkClass:"pgn__num",pageNextClass:"pgn__next",pagePrevClass:"pgn__prev"}))))))},F=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1];return window.addEventListener("scroll",(function(){!a&&window.pageYOffset>400?r(!0):a&&window.pageYOffset<=400&&r(!1)})),c.a.createElement("div",{className:a?"go-top link-is-visible":"go-top"},c.a.createElement("button",{className:"smoothscroll",title:"Back to Top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}))},I=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){setTimeout((function(){r(!0)}),2e3)}),[]),1==a?c.a.createElement("footer",{className:"s-footer"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column large-full footer__content"},c.a.createElement("div",{className:"footer__copyright"},c.a.createElement("span",null,"\xa9 Copyright Typerite 2019"),c.a.createElement("span",null,"Design and Template by ",c.a.createElement("a",{href:"https://www.styleshout.com/"},"StyleShout"))))),c.a.createElement(F,null)):null},P=function(e){var t=15,a=e.match.params.id,r=Object(n.useState)([]),l=Object(m.a)(r,2),o=l[0],i=l[1],u=Object(n.useState)([]),d=Object(m.a)(u,2),f=d[0],p=d[1],g=Object(n.useState)(0),w=Object(m.a)(g,2),C=w[0],S=w[1],T=Object(n.useState)(1),L=Object(m.a)(T,2),Y=L[0],F=L[1],I=k().width,P=Object(n.useState)(!1),B=Object(m.a)(P,2),W=B[0],M=B[1];t=I<500?10:I<800?15:20;Object(n.useEffect)((function(){(function(){var e=Object(h.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,e.next=4,b.a.get("".concat(".","/../../api/blog/"));case 4:t=e.sent,n=t.data.filter((function(e){if(e.title.toLowerCase().includes(a.toLowerCase())||e.summary.toLowerCase().includes(a.toLowerCase())||e.content.toLowerCase().includes(a.toLowerCase()))return e})),i(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:M(!1),console.log(o),0===n.length?x.a.error('Sorry, no blog found which matches "'.concat(a,'"'),[3]):x.a.success("Found ".concat(n.length," ").concat(1===n.length?"result":"results",' matching with "').concat(a,'"'),[3]);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.useEffect)((function(){p(o.slice(C,C+t))}),[C,o]);return c.a.createElement("div",{className:"s-content"},W?c.a.createElement("div",{className:"loading"},c.a.createElement(O.a,null)):c.a.createElement("div",null,c.a.createElement(v.a,{breakpointCols:I<700?1:o.length<10||I<1200?2:I<1600?3:4,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},f.map((function(e){return c.a.createElement(n.Fragment,null,c.a.createElement(s.b,{to:"/blog/".concat(e.slug),className:"stretched-link"},c.a.createElement(_.a,{bottom:!0,opposite:!0,cascade:!0,delay:40,key:e.title},c.a.createElement(N.a,{hoverable:!0,style:{width:"100%",marginBottom:"40px"},cover:c.a.createElement("img",{src:e.thumbnail,alt:""}),bordered:!0},c.a.createElement("div",{className:"entry__text"},c.a.createElement("div",{className:"entry__header"},c.a.createElement("h2",{className:"entry__title"},e.title),c.a.createElement("div",{className:"entry__meta"},c.a.createElement("span",{className:"entry__meta-cat"},e.category," |"),c.a.createElement("span",{className:"entry__meta-date"},j(e.date_created)))),c.a.createElement("div",{className:"entry__excerpt"},c.a.createElement("p",null,e.summary)))))))}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column large-full"},c.a.createElement("nav",{className:"pgn"},c.a.createElement(y.a,{onClick:window.scrollTo(0,0),totalRecords:o.length,pageLimit:t,pageNeighbours:3,setOffset:S,currentPage:Y,setCurrentPage:F,pageLinkClass:"pgn__num",pageNextClass:"pgn__next",pagePrevClass:"pgn__prev"}))))))};var B=Object(o.f)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),W=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),r=t[0],l=t[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),i=o[0],d=o[1],f=Object(n.useState)(""),E=Object(m.a)(f,2),h=E[0],p=E[1];Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var b=function(e){e.preventDefault();var t,a={name:(t=r,t?t.charAt(0).toUpperCase()+t.slice(1):""),email:i,message:h};l(""),d(""),p(""),console.log("hello"),console.log(a),x.a.success("Successfully submitted",[1.5])};return c.a.createElement("div",{className:"s-content content"},c.a.createElement("main",{className:"row content__page"},c.a.createElement("section",{className:"column large-full entry format-standard"},c.a.createElement("div",{className:"media-wrap"},c.a.createElement("div",null,c.a.createElement(u.a,{top:!0,duration:700},c.a.createElement("img",{src:a(197)})))),c.a.createElement(u.a,{bottom:!0,duration:700,delay:500},c.a.createElement("div",{className:"content__page-header"},c.a.createElement("h1",{className:"display-1"},"Get In Touch."))),c.a.createElement(_.a,{bottom:!0,delay:800}," ",c.a.createElement("p",{className:"contact-p"},"For collaboration or work related communication, contact me at ",c.a.createElement("a",{href:"mailto:rishabhbeniwal27@gmail.com"},"rishabhbeniwal27@gmail.com"))),c.a.createElement(_.a,{bottom:!0},c.a.createElement("div",null,c.a.createElement("h3",{className:"h2"},"Say Hello"),c.a.createElement("form",{name:"contactForm",id:"contactForm",onSubmit:function(e){return b(e)}},c.a.createElement("fieldset",null,c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{className:"full-width",placeholder:"Your Name",type:"text",onChange:function(e){return l(e.target.value)},value:r})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{className:"full-width",placeholder:"Your Email",type:"text",onChange:function(e){return d(e.target.value)},value:i})),c.a.createElement("div",{className:"message form-field"},c.a.createElement("textarea",{className:"full-width",placeholder:"Your Message",onChange:function(e){return p(e.target.value)},value:h})),c.a.createElement("input",{className:"btn btn--primary btn-wide btn--large full-width",defaultValue:"Send Message",type:"submit"}))))))))},M=function(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),c.a.createElement("div",{className:"s-content content"},c.a.createElement("main",{className:"row content__page"},c.a.createElement("section",{className:"column large-full entry format-standard"},c.a.createElement("div",{className:"media-wrap"},c.a.createElement("div",{className:"profile-pic"},c.a.createElement(u.a,{top:!0,duration:700},c.a.createElement("img",{src:a(198)})))),c.a.createElement(u.a,{bottom:!0,duration:700,delay:1e3},c.a.createElement("div",{className:"content__page-header"},c.a.createElement("h1",{className:"display-1 about-h1"},"Hello, This is Rishabh Beniwal"))),c.a.createElement(_.a,{bottom:!0,delay:1300},c.a.createElement("p",{className:"about-p"},"Welcome to my blog. This blog will cover everything that is even remotely related to cricket. Best cricket matches, knocks, spells, movies on cricket, books of cricket, cricket games, series, etc you name it, you will find all of it here. It\u2019s a blog like never before, I\u2019m here to serve you, \u2018the audience\u2019 of this beloved game. You will find interesting stats, background stories, never-heard-before facts, and much more. You will also find articles on trending topics and some of my literary work. But the focus will forever be cricket since it\u2019s my first love."))," ",c.a.createElement(_.a,{bottom:!0},c.a.createElement("p",{className:"about-p"},"I know what it takes to be a cricket fan. People will never understand our sacrifices. The love for the game can wake us up early morning at 5 am or can make us stay up till 3-4 a.m. Missing classes and tuitions to watch the game is what we love to do the most. Whether it\u2019s about gasping as the ball passes the edge of the bat or appealing at the top of our voice for an lbw, we\u2019re pro at it."),c.a.createElement("p",{className:"about-p"},"We as fans remember everything, whether it\u2019s the number of balls Yuvraj Singh took to hit 50 when he smashed 6 sixes or the commentary of India\u2019s 2011 World Cup win moment. Whether it\u2019s the largest margin of victory for India in overseas tests or the number of sixes Virender Sehwag hit in his test career, we remember it all. The numbers, the commentary, the dates all etched in our memories forever. So I welcome all you fans to my abode of cricket. We\u2019re here to tell people that holding your pee just to not miss a moment of the game is an art that everyone can\u2019t master.")),c.a.createElement("hr",null))))};a(199);var D=function(){return c.a.createElement(s.a,null,c.a.createElement(n.Fragment,null,c.a.createElement(d,null),c.a.createElement(B,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:C}),c.a.createElement(o.a,{exact:!0,path:"/categories/:id",component:Y}),c.a.createElement(o.a,{exact:!0,path:"/blog/:id",component:L}),c.a.createElement(o.a,{exact:!0,path:"/search/:id",component:function(e){return c.a.createElement(P,Object.assign({},e,{key:window.location.pathname}))}}),c.a.createElement(o.a,{exact:!0,path:"/contact",component:W}),c.a.createElement(o.a,{exact:!0,path:"/about",component:M})),c.a.createElement(I,null)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.c6e454ea.chunk.js.map