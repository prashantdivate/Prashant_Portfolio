(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,s,t){},14:function(e,s,t){"use strict";t.r(s);var i=t(1),c=t.n(i),n=t(7),a=t.n(n),r=(t(12),t(2)),l=t(3),o=t(5),j=t(4),d=t(0),m=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsxs)("header",{id:"home",children:[Object(d.jsxs)("nav",{id:"nav-wrap",children:[Object(d.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(d.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(d.jsxs)("ul",{id:"nav",className:"nav",children:[Object(d.jsx)("li",{className:"current",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(d.jsx)("div",{className:"row banner",children:Object(d.jsxs)("div",{className:"banner-text",children:[Object(d.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(d.jsxs)("h3",{children:["I am a ",e.role,".",e.roleDescription]}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,target:"_blank",children:Object(d.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(d.jsx)("p",{className:"scrolldown",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(d.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),t}(i.Component),h=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("section",{id:"about",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"three columns",children:Object(d.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("p",{children:e.aboutme}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"columns contact-details",children:[Object(d.jsx)("h2",{children:"Contact Details"}),Object(d.jsxs)("p",{className:"address",children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.address}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.website})]})]})})]})]})})}}]),t}(i.Component),b=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"resume",children:[Object(d.jsxs)("div",{className:"row education",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Education"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.UniversityName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(d.jsxs)("div",{className:"row work",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Work"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.CompanyName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(d.jsxs)("div",{className:"row skill",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Skills"})})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("p",{children:e.skillsDescription}),Object(d.jsx)("div",{className:"bars",children:Object(d.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(d.jsx)("em",{children:e.skillname})]})}))})})]})]})]})}}]),t}(i.Component),u=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("section",{id:"portfolio",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"twelve columns collapsed",children:[Object(d.jsx)("h1",{children:"Check Out Some of My Works."}),Object(d.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(d.jsx)("div",{className:"columns portfolio-item",children:Object(d.jsx)("div",{className:"item-wrap",children:Object(d.jsxs)("a",{href:"#modal-01",children:[Object(d.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"portfolio-item-meta",children:[Object(d.jsx)("h5",{children:e.name}),Object(d.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),t}(i.Component),p=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"testimonials",children:[Object(d.jsxs)("div",{className:"text-container",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"two columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Client Testimonials"})})}),Object(d.jsxs)("div",{className:"ten columns flex-container",children:[Object(d.jsx)("div",{className:"flexslider",children:Object(d.jsx)("ul",{className:"slides",children:e.testimonials&&e.testimonials.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsxs)("blockquote",{children:[Object(d.jsx)("p",{children:e.description}),Object(d.jsx)("cite",{children:e.name})]})})}))})})," "]})," "]})," "]}),"  "]})}}]),t}(i.Component),O=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"contact",children:[Object(d.jsx)("div",{className:"row section-head",children:Object(d.jsx)("div",{className:"ten columns",children:Object(d.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(d.jsx)("div",{className:"widget",children:Object(d.jsxs)("h4",{children:["Linked in :",e.linkedinId]})})})})]})}}]),t}(i.Component),x=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})})}))}),Object(d.jsxs)("ul",{className:"copyright",children:[Object(d.jsx)("li",{children:"\xa9 Copyright 2014 CeeVee"}),Object(d.jsxs)("li",{children:["Design by ",Object(d.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(d.jsx)("div",{id:"go-top",children:Object(d.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(d.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(i.Component),v={imagebaseurl:"https://prashantdivate.github.io/",name:"Prashant Divate",role:"Embedded Software Engineer",linkedinId:"Prashant Divate",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"www.linkedin.com/in/prashant-divate",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/",className:"fa fa-github"},{name:"skype",url:"http://skype.com",className:"fa fa-skype"}],aboutme:"I have finished my B.E. in Computer Science and have been working in industry for past few years.",address:"India",website:"https://www.codeclassifiers.com",work:[{CompanyName:"TATA Elxsi,Pune",specialization:"Embedded Software Engineer",MonthOfLeaving:"September 2019 ",YearOfLeaving:"- Present",Achievements:"Implemented OS hardening, Secure boot, RAUC update, BSP optimization. Developed the Yocto based secured LINUX and booting script customization. Deployed Secure boot for production process. Developed automated OS flashing process through server."},{CompanyName:"Jayashree Electrodevices Pvt Ltd, Pune",specialization:"R&D Engineer",MonthOfLeaving:"August 2016 ",YearOfLeaving:"- July 2019",Achievements:"Worked on belt watch sensors, switches and masters. Main job responsibility was to program, design and develop new products as per industrial requirement. Worked on servo motor drives like KEWO, Supreme, AXOR MackIndy and MackNano. Design, debug and test belt watch sensor testing kit."}],education:[{UniversityName:"Sunbeam Institute of Information Technology, Pune",specialization:"Post Graduation Diploma in Embedded System Design",MonthOfPassing:"August",YearOfPassing:"2019",Achievements:"Some Achievements"},{UniversityName:"Government College of Engineering and Research, Pune",specialization:"B.E. Degree in Eletronics and Telecommunication Engineering",MonthOfPassing:"July",YearOfPassing:"2018",Achievements:"Worked as General Secretary. Organizing activities and Engage with alumini for seminars. Lead a team of 15 students of Departmental technical events."}],skillsDescription:"Evaluation Boards worked on : Variscite iMx6ull, STEMLAB redpitaya.  Operating System: Windows, Linux.  Version controlling system: Git and Azure DevOps.  Build Pipeline: Azure Build pipeline for Linux self hosted Agent",skills:[{skillname:"yocto project"},{skillname:"Embedded Linux"},{skillname:"Operating system"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},f=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{resumeData:v}),Object(d.jsx)(h,{resumeData:v}),Object(d.jsx)(b,{resumeData:v}),Object(d.jsx)(u,{resumeData:v}),Object(d.jsx)(p,{resumeData:v}),Object(d.jsx)(O,{resumeData:v}),Object(d.jsx)(x,{resumeData:v})]})}}]),t}(i.Component),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(s){var t=s.getCLS,i=s.getFID,c=s.getFCP,n=s.getLCP,a=s.getTTFB;t(e),i(e),c(e),n(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.bfe38170.chunk.js.map