(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{12:function(e,s,c){},14:function(e,s,c){"use strict";c.r(s);var i=c(1),t=c.n(i),n=c(7),a=c.n(n),l=(c(12),c(2)),r=c(3),o=c(5),j=c(4),m=c(0),d=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)(t.a.Fragment,{children:Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(m.jsxs)("h3",{children:["I am a ",e.role,".",e.roleDescription]}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",children:Object(m.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),c}(i.Component),h=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:e.aboutme}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.address}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.website})]})]})})]})]})})}}]),c}(i.Component),b=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.UniversityName}),Object(m.jsxs)("p",{className:"info",children:[e.specialization,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(m.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.CompanyName}),Object(m.jsxs)("p",{className:"info",children:[e.specialization,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(m.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:e.skillsDescription}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(m.jsx)("em",{children:e.skillname})]})}))})})]})]})]})}}]),c}(i.Component),O=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Works."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsx)("div",{className:"item-wrap",children:Object(m.jsxs)("a",{href:"#modal-01",children:[Object(m.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"portfolio-item-meta",children:[Object(m.jsx)("h5",{children:e.name}),Object(m.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),c}(i.Component),p=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"testimonials",children:[Object(m.jsxs)("div",{className:"text-container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Client Testimonials"})})}),Object(m.jsxs)("div",{className:"ten columns flex-container",children:[Object(m.jsx)("div",{className:"flexslider",children:Object(m.jsx)("ul",{className:"slides",children:e.testimonials&&e.testimonials.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsxs)("blockquote",{children:[Object(m.jsx)("p",{children:e.description}),Object(m.jsx)("cite",{children:e.name})]})})}))})})," "]})," "]})," "]}),"  "]})}}]),c}(i.Component),u=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)("div",{className:"row section-head",children:Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(m.jsx)("div",{className:"widget",children:Object(m.jsxs)("h4",{children:["Linked in :",e.linkedinId]})})})})]})}}]),c}(i.Component),x=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})})}))}),Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsx)("li",{children:"\xa9 Copyright 2014 CeeVee"}),Object(m.jsxs)("li",{children:["Design by ",Object(m.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),c}(i.Component),v={imagebaseurl:"https://techonoeticsclub.github.io/",name:"John Doe",role:"Frontend Developer",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/",className:"fa fa-github"},{name:"skype",url:"http://skype.com",className:"fa fa-skype"}],aboutme:"I have finished my B.E. in Computer Science and have been working in industry for past few years.",address:"India",website:"https://www.codeclassifiers.com",education:[{UniversityName:"Mumbai University",specialization:"Some specialization",MonthOfPassing:"Jan",YearOfPassing:"2018",Achievements:"Some Achievements"},{UniversityName:"Some University",specialization:"Some specialization",MonthOfPassing:"Jan",YearOfPassing:"2018",Achievements:"Some Achievements"}],work:[{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"},{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},f=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(d,{resumeData:v}),Object(m.jsx)(h,{resumeData:v}),Object(m.jsx)(b,{resumeData:v}),Object(m.jsx)(O,{resumeData:v}),Object(m.jsx)(p,{resumeData:v}),Object(m.jsx)(u,{resumeData:v}),Object(m.jsx)(x,{resumeData:v})]})}}]),c}(i.Component),N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(s){var c=s.getCLS,i=s.getFID,t=s.getFCP,n=s.getLCP,a=s.getTTFB;c(e),i(e),t(e),n(e),a(e)}))};a.a.render(Object(m.jsx)(t.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),N()}},[[14,1,2]]]);
//# sourceMappingURL=main.bbed75d9.chunk.js.map