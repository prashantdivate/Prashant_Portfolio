(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{12:function(e,s,i){},14:function(e,s,i){"use strict";i.r(s);var t=i(1),n=i.n(t),c=i(7),a=i.n(c),r=(i(12),i(2)),l=i(3),o=i(5),d=i(4),j=i(0),m=function(e){Object(o.a)(i,e);var s=Object(d.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)(n.a.Fragment,{children:Object(j.jsxs)("header",{id:"home",children:[Object(j.jsxs)("nav",{id:"nav-wrap",children:[Object(j.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(j.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(j.jsxs)("ul",{id:"nav",className:"nav",children:[Object(j.jsx)("li",{className:"current",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(j.jsx)("div",{className:"row banner",children:Object(j.jsxs)("div",{className:"banner-text",children:[Object(j.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e.name," "]}),Object(j.jsxs)("h3",{children:["I am ",e.role,". ",e.roleDescription,"."]}),Object(j.jsx)("hr",{}),Object(j.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,target:"_blank",children:Object(j.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(j.jsx)("p",{className:"scrolldown",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(j.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),i}(t.Component),h=function(e){Object(o.a)(i,e);var s=Object(d.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)("section",{id:"about",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"three columns",children:Object(j.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})}),Object(j.jsxs)("div",{className:"nine columns main-col",children:[Object(j.jsx)("h2",{children:"About Me"}),Object(j.jsx)("p",{children:e.aboutme}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"columns contact-details",children:[Object(j.jsx)("h2",{children:"Contact Details"}),Object(j.jsxs)("p",{className:"address",children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:e.address}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:e.website})]})]})})]})]})})}}]),i}(t.Component),b=function(e){Object(o.a)(i,e);var s=Object(d.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsxs)("section",{id:"resume",children:[Object(j.jsxs)("div",{className:"row education",children:[Object(j.jsx)("div",{className:"three columns header-col",children:Object(j.jsx)("h1",{children:Object(j.jsx)("span",{children:"Education"})})}),Object(j.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(j.jsx)("div",{className:"row item",children:Object(j.jsxs)("div",{className:"twelve columns",children:[Object(j.jsx)("h3",{children:e.UniversityName}),Object(j.jsxs)("p",{className:"info",children:[e.specialization,Object(j.jsx)("span",{children:"\u2022"})," ",Object(j.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(j.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(j.jsxs)("div",{className:"row work",children:[Object(j.jsx)("div",{className:"three columns header-col",children:Object(j.jsx)("h1",{children:Object(j.jsx)("span",{children:"Work"})})}),Object(j.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(j.jsx)("div",{className:"row item",children:Object(j.jsxs)("div",{className:"twelve columns",children:[Object(j.jsx)("h3",{children:e.CompanyName}),Object(j.jsxs)("p",{className:"info",children:[e.specialization,Object(j.jsx)("span",{children:"\u2022"})," ",Object(j.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(j.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(j.jsxs)("div",{className:"row skill",children:[Object(j.jsx)("div",{className:"three columns header-col",children:Object(j.jsx)("h1",{children:Object(j.jsx)("span",{children:"Skills"})})}),Object(j.jsxs)("div",{className:"nine columns main-col",children:[Object(j.jsx)("p",{children:e.skillsDescription.split("\n").map((function(e){return Object(j.jsx)("p",{children:e})}))}),Object(j.jsx)("div",{className:"bars",children:Object(j.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(j.jsx)("em",{children:e.skillname})]})}))})})]})]})]})}}]),i}(t.Component),u=function(e){Object(o.a)(i,e);var s=Object(d.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)("section",{id:"portfolio",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"twelve columns collapsed",children:[Object(j.jsx)("h1",{children:"Check Out Some of My Works."}),Object(j.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(j.jsx)("div",{className:"columns portfolio-item",children:Object(j.jsx)("div",{className:"item-wrap",children:Object(j.jsxs)("a",{href:"#modal-01",children:[Object(j.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"portfolio-item-meta",children:[Object(j.jsx)("h5",{children:e.name}),Object(j.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),i}(t.Component),p=function(e){Object(o.a)(i,e);var s=Object(d.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsxs)("section",{id:"testimonials",children:[Object(j.jsxs)("div",{className:"text-container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"two columns header-col",children:Object(j.jsx)("h1",{children:Object(j.jsx)("span",{children:"Client Testimonials"})})}),Object(j.jsxs)("div",{className:"ten columns flex-container",children:[Object(j.jsx)("div",{className:"flexslider",children:Object(j.jsx)("ul",{className:"slides",children:e.testimonials&&e.testimonials.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("blockquote",{children:[Object(j.jsx)("p",{children:e.description}),Object(j.jsx)("cite",{children:e.name})]})})}))})})," "]})," "]})," "]}),"  "]})}}]),i}(t.Component),O=function(e){Object(o.a)(i,e);var s=Object(d.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsxs)("section",{id:"contact",children:[Object(j.jsx)("div",{className:"row section-head",children:Object(j.jsx)("div",{className:"ten columns",children:Object(j.jsx)("p",{className:"lead",children:"Thanks for visiting !!"})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(j.jsx)("div",{className:"widget",children:Object(j.jsxs)("h4",{children:["Linked in :",e.linkedinId]})})})})]})}}]),i}(t.Component),x=function(e){Object(o.a)(i,e);var s=Object(d.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"twelve columns",children:[Object(j.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,children:Object(j.jsx)("i",{className:e.className})})})}))}),Object(j.jsxs)("ul",{className:"copyright",children:[Object(j.jsx)("li",{children:"\xa9 Copyright 2014 CeeVee"}),Object(j.jsxs)("li",{children:["Design by ",Object(j.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(j.jsx)("div",{id:"go-top",children:Object(j.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(j.jsx)("i",{className:"icon-up-open"})})})]})})}}]),i}(t.Component),f={imagebaseurl:"https://prashantdivate.github.io/",name:"Prashant Divate",role:"Embedded Software Engineer",linkedinId:"prashant-divate",skypeid:"Your skypeid",roleDescription:"Artist by nature and developer by passion, Budding techie, above average  drawing artist, technology enthusiast, passionate learner",socialLinks:[{name:"facebook",url:"https://www.facebook.com/diwateprashant/",className:"fa fa-facebook"},{name:"twitter",url:"http://twitter.com",className:"fa fa-twitter"},{name:"Email",url:"http://googleplus.com/tbakerx",className:"fa fa-envelope"},{name:"linkedin",url:"https://www.linkedin.com/in/prashant-divate",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/prashantdivate",className:"fa fa-github"},{name:"skype",url:"https://join.skype.com/invite/lbRcjwcRtXjT",className:"fa fa-skype"}],aboutme:"Open source lover and after all a wonderful human being. Currently working on making a Better Working World at India's biggest firm TATA GROUP.",address:"Pune, India",website:"+91 7028193787",education:[{UniversityName:"Centre for Development of Advanced Computing (CDAC)",specialization:"Post Graduation Diploma in Embedded System Design",MonthOfPassing:"August",YearOfPassing:"2019",Achievements:"Completed course with First class"},{UniversityName:"Government College of Engineering and Research Pune",specialization:"B.E. Degree in Eletronics and Telecommunication Engineering",MonthOfPassing:"July",YearOfPassing:"2018",Achievements:"Worked as General Secretary.Organizing activities and Engage with alumini for seminars.Lead a team of 15 students of Departmental technical events."}],work:[{CompanyName:"TATA Elxsi Pune",specialization:"Embedded Software Engineer",MonthOfLeaving:"September 2019 ",YearOfLeaving:"- Present",Achievements:"As software engineer my responsibilities includes developing and testing features for the required embedded platform. As a part of this product I was required to develop automation for production of device using shell scripting. Extensive experience with working on Embedded OS (Linux) development for iMX and Variscite Evaluation boards platform using Yocto project. Experience with system bring-up and development of Network hardening, secure boot, kernel configuration, File system hardening, RAUC update, Driver modifications, BASH scripting, creation of custom recipes, libraries. OS Release management and OS bug fixing"},{CompanyName:"Jayashree Electrodevices Pvt Ltd Pune",specialization:"R&D Engineer",MonthOfLeaving:"August 2016 ",YearOfLeaving:"- July 2019",Achievements:"Worked on belt watch sensors, switches and masters. Main job responsibility was to program, design and develop new products as per industrial requirement. Worked on servo motor drives like KEWO, Supreme, AXOR MackIndy and MackNano. Design, debug and test belt watch sensor testing kit."}],skillsDescription:"Evaluation Boards worked on : Variscite iMx6ull, STEMLAB redpitaya.\n Operating System: Windows, Linux.\n Version controlling system: Git and Azure DevOps.\n Build Pipeline: Azure Build pipeline for Linux self hosted Agent",skills:[{skillname:"yocto"},{skillname:"linux"},{skillname:"scripting"}],portfolio:[{name:"OpenGL demo",description:"Designed Robot dog demo. Visit Github repo for more demos.",imgurl:"images/portfolio/OpenGL_dog.JPG"},{name:"Embedded Linux Security demo",description:"Decribed some techniques used to secure custom Linux OS",imgurl:"images/portfolio/Linux_security_ppt.JPG"},{name:"Designed DLNA for GMRT",description:"Sponsored project by GMRT Pune. Designed Diff.Low Noise Amplifier.",imgurl:"images/portfolio/LNA.png"},{name:"Compiler design",description:"Designing Linux Compiler for custom new language. Hope complete soon...",imgurl:"images/portfolio/project.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},v=function(e){Object(o.a)(i,e);var s=Object(d.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{resumeData:f}),Object(j.jsx)(h,{resumeData:f}),Object(j.jsx)(b,{resumeData:f}),Object(j.jsx)(u,{resumeData:f}),Object(j.jsx)(p,{resumeData:f}),Object(j.jsx)(O,{resumeData:f}),Object(j.jsx)(x,{resumeData:f})]})}}]),i}(t.Component),g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,15)).then((function(s){var i=s.getCLS,t=s.getFID,n=s.getFCP,c=s.getLCP,a=s.getTTFB;i(e),t(e),n(e),c(e),a(e)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.09943f11.chunk.js.map