(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,n,a){e.exports=a(35)},34:function(e,n,a){},35:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(18),c=a.n(r),i=a(5),o=a(8),m=a(1),s=a(6);function d(){var e=Object(i.a)(["\n  .logo {\n    z-index: 1;\n    transition: all 0.3s ease-in-out;\n  }\n\n  .logo:hover {\n    transform: scale(1.1);\n  }\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  padding: 0 20px;\n  background-color: #303030;\n\n  & label {\n    color: #57b228;\n    font-size: 0.9rem;\n    cursor: pointer;\n  }\n\n  & p {\n    letter-spacing: 8.5px;\n    margin-bottom: -5px;\n  }\n\n  & a {\n    display: flex;\n    text-decoration: none;\n    color: #f4f4f4;\n    text-transform: uppercase;\n    border-bottom: 3px transparent solid;\n    padding-bottom: 0.2rem;\n    transition: border-color 0.5s;\n  }\n\n  & a.current {\n    border-color: #57b228;\n  }\n\n  & i {\n    margin: auto;\n    margin-right: 10px;\n    padding: 0;\n  }\n\n  & .menu-wrap {\n    position: fixed;\n    margin: 0 1rem;\n    top: 0;\n    right: 0;\n    z-index: 1;\n\n    & .toggler {\n      position: absolute;\n      top: 0;\n      right: 0;\n      z-index: 2;\n      cursor: pointer;\n      width: 70px;\n      height: 70px;\n      opacity: 0;\n    }\n\n    /* Show menu */\n    & .toggler:checked ~ .menu {\n      visibility: visible;\n      > div {\n        transform: scale(1);\n        transition-duration: 0.5s;\n        > div {\n          opacity: 1;\n          transition: opacity 0.4s ease;\n        }\n      }\n    }\n\n    & .hamburger {\n      position: absolute;\n      top: 0;\n      right: 0;\n      z-index: 1;\n      width: 40px;\n      height: 40px;\n      padding: 1rem;\n      background: #303030;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      > div {\n        position: relative;\n        width: 100%;\n        height: 2px;\n        background-color: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.4s ease;\n      }\n\n      /* Top and bottom lines */\n      & > div:before,\n      & > div:after {\n        content: '';\n        position: absolute;\n        z-index: 1;\n        top: -10px;\n        width: 100%;\n        height: 2px;\n        background: inherit;\n      }\n\n      /* Moves line down */\n      & > div:after {\n        top: 10px;\n      }\n    }\n\n    /* Toggler animate */\n    & .toggler:checked + .hamburger > div {\n      transform: rotate(135deg);\n    }\n    /* Turn lines into X */\n    & .toggler:checked + .hamburger > div:before,\n    & .toggler:checked + .hamburger > div:after {\n      top: 0;\n      transform: rotate(90deg);\n    }\n\n    & .toggler:hover + .hamburger > div {\n      transform: rotate(180deg);\n    }\n\n    /* Rotate on hover when checked */\n    & .toggler:checked:hover + .hamburger > div {\n      transform: rotate(315deg);\n    }\n\n    & .menu {\n      position: fixed;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n      visibility: hidden;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      > div {\n        background: rgba(0, 0, 0, 0.9);\n        border-radius: 50%;\n        width: 200vw;\n        height: 200vw;\n        display: flex;\n        flex: none;\n        align-items: center;\n        justify-content: center;\n        transform: scale(0);\n        transition: all 0.4s ease;\n\n        > div {\n          /* text-align: center; */\n          max-width: 90vw;\n          max-height: 100vh;\n          opacity: 0;\n          transition: opacity 0.4s ease;\n          & ul {\n            > li {\n              font-size: 2rem;\n              padding: 1rem;\n\n              a {\n                padding: 3rem;\n                transition: 0.4s ease;\n              }\n              & a:hover {\n                background-color: #303030;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return d=function(){return e},e}var u=s.a.nav(d()),p=function(){function e(){document.getElementById("toggler").checked=!1}return l.a.createElement("div",{className:"container"},l.a.createElement(u,null,l.a.createElement("div",{className:"logo"},l.a.createElement(o.b,{to:"/portfolio"},l.a.createElement("i",{className:"fas fa-user-astronaut fa-3x"}),l.a.createElement("h1",null,l.a.createElement("p",null,"Hank Kim"),l.a.createElement("label",null,"Full Stack Developer")))),l.a.createElement("div",{className:"menu-wrap"},l.a.createElement("input",{type:"checkbox",className:"toggler",id:"toggler"}),l.a.createElement("div",{className:"hamburger"},l.a.createElement("div",null)),l.a.createElement("div",{className:"menu"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{onClick:function(){return e()}},l.a.createElement(o.b,{to:"/portfolio"},"H o m e")),l.a.createElement("li",{onClick:function(){return e()}},l.a.createElement(o.b,{to:"/project"},"project")))))))))},g=a(22),h=a.n(g);function f(){var e=Object(i.a)(["\n  color: white;\n  text-align : center;\n  padding-top :10%;\n  font-size: 2rem;\n\n  span {\n    font-size: 3.5rem;\n  }\n\n  abbr {\n    color:#50bcdf;\n  }\n\n  .header {\n    font-size: 5rem;\n    @media only screen and (max-width: 900px) {\n      font-size: 3rem;\n    }\n\n    @media only screen and (max-width: 520px) {\n      font-size: 1.5rem;\n    }\n  }\n  .typewriter { \n    font-size : 5rem;\n    @media only screen and (max-width: 900px) {\n      font-size: 2.5rem;\n    }\n    @media only screen and (max-width: 520px) {\n      font-size: 0.5rem;\n    }\n  }\n\n  .btn-light {\n      margin: 3rem;\n      font-size: 1.5rem;\n      border-radius : 2px;\n      background:#57b228;\n      color: white;\n\n      &:hover {\n        letter-spacing : 2px;\n        transform:scale(1.2);\n        filter: brightness(120%);\n      }\n\n      @media only screen and (max-width: 700px) {\n        font-size: 1rem;\n      }\n    }\n  }\n"]);return f=function(){return e},e}var E=s.a.div(f()),b=function(){return l.a.createElement(E,null,l.a.createElement("h2",{className:"header"},"I Am ",l.a.createElement("abbr",null,"{")," HANK KIM ",l.a.createElement("abbr",null,"}")," The"),l.a.createElement("br",null),l.a.createElement("h2",{className:"typewriter"},l.a.createElement(h.a,{options:{strings:["Full Stack Developer","Programming Tutor","E-Commerce Savvy","POS System expert"],autoStart:!0,loop:!0}})),l.a.createElement(o.b,{to:"/project"},l.a.createElement("button",{className:"btn-light"},"View Projects")))};function v(){var e=Object(i.a)(["\n  .contact {\n    position: absolute;\n    top: 50%;\n    left: -7rem;\n    transform: translateY(-50%);\n    z-index: 0;\n\n    @media only screen and (min-width: 100em) {\n      left: -12.5rem;\n    }\n\n    &-list {\n      list-style: none;\n    }\n\n    &-link {\n      &:visited,\n      &:link {\n        display: block;\n        color: #fff;\n        font-size: 1.5rem;\n        padding: 1rem;\n        transition: all 450ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n        text-decoration: none;\n\n        @media only screen and (max-width: 31.25em) {\n          padding: 0.5rem;\n        }\n\n        @media only screen and (min-width: 100em) {\n          padding: 1rem;\n          font-size: 2.8rem;\n        }\n      }\n\n      &-linkedin {\n        background-color: #0077b5;\n      }\n      &-github {\n        background-color: #333;\n      }\n      &-email {\n        background-color: #74c23d;\n      }\n      &-resume {\n        background-color: #dc143c;\n      }\n\n      &:hover,\n      &:active,\n      &:focus {\n        transform: translateX(6.4rem);\n      }\n    }\n\n    &-label {\n      display: inline-block;\n      vertical-align: middle;\n      font-size: 1.1rem;\n      margin-right: 1.2rem;\n      width: 5.8rem;\n      letter-spacing: 1px;\n      text-align: right;\n      text-transform: uppercase;\n\n      @media only screen and (min-width: 100em) {\n        width: 10.8rem;\n      }\n    }\n  }\n"]);return v=function(){return e},e}var x=s.a.div(v()),k=function(){return l.a.createElement(x,null,l.a.createElement("div",{className:"contact"},l.a.createElement("ul",{className:"contact-list"},l.a.createElement("li",{className:"contact__item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/hank-kim/",target:"_blank",className:"contact-link contact-link-linkedin"},l.a.createElement("span",{className:"contact-label"},"Linkedin")," ",l.a.createElement("i",{className:"fab fa-linkedin"}))),l.a.createElement("li",{className:"contact__item"},l.a.createElement("a",{href:"https://github.com/hank-dohwankim",target:"_blank",className:"contact-link contact-link-github"},l.a.createElement("span",{className:"contact-label"},"Github")," ",l.a.createElement("i",{className:"fab fa-github-square"}))),l.a.createElement("li",{className:"contact__item"},l.a.createElement("a",{href:"https://docs.google.com/document/d/1S02ZEx1-gUVBkr2Q0HRWSwMN3h8gKx9IxyTxO1qh3L4",target:"_blank",className:"contact-link contact-link-resume"},l.a.createElement("span",{className:"contact-label"},"Resume"),l.a.createElement("i",{className:"fas fa-address-card"}))),l.a.createElement("li",{className:"contact__item"},l.a.createElement("a",{href:"mailto:hank.dohwankim@gmail.com",target:"_blank",className:"contact-link contact-link-email"},l.a.createElement("span",{className:"contact-label"},"Email")," ",l.a.createElement("i",{className:"fas fa-envelope"}))))))};function N(){var e=Object(i.a)(["\n  color: white;\n"]);return N=function(){return e},e}var w=s.a.div(N()),y=function(){return l.a.createElement(w,null,"About")};function S(){var e=Object(i.a)(["\n  a {\n    color: #fff;\n  }\n\n  p {\n    margin: 0.5rem;\n    font-size: 1.2rem;\n  }\n\n  .color-portfolio {\n    color: #57b228;\n  }\n\n  .color-youtube {\n    color: red;\n  }\n\n  .row {\n    margin: 2rem 5rem;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n\n    @media only screen and (max-width: 900px) {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    @media all and (max-width: 625px) {\n      grid-template-columns: repeat(1, 1fr);\n    }\n\n    grid-gap: 1rem;\n  }\n\n  /* .column {\n    float: left;\n    width: 25%;\n  }\n\n  /* Clear floats after the columns */\n  .row:after {\n    content: '';\n    display: table;\n    clear: both;\n  }\n\n  /* Style the counter cards */\n  .card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the \"card\" effect */\n    padding: 16px;\n    text-align: center;\n    background-color: #f1f1f1;\n    transition: all 0.2s ease-in-out;\n    border-radius: 2px;\n    height: 35rem;\n\n    .card-header {\n      margin-top: 0.5rem;\n      text-align: center;\n    }\n\n    .content {\n      margin-top: 1rem;\n      text-align: left;\n\n      .content-title {\n        color: #303030;\n      }\n    }\n\n    .label-group {\n      text-align: left;\n      margin-bottom: 0.5rem;\n      p {\n        display: inline-block;\n        color: #fff;\n        background-color: #808080;\n        padding: 5px;\n        border-radius: 15px;\n        margin-right: -2px;\n        margin-top: 0;\n\n        /* &:hover {\n          filter: brightness(120%);\n        } */\n      }\n    }\n\n    .btn-group {\n      position: absolute;\n      right: 1rem;\n      top: 90%;\n    }\n  }\n\n  .card:hover {\n    transform: translate(0, -3px);\n\n    & .btn-card {\n      visibility: visible;\n      cursor: pointer;\n\n      &:hover {\n        filter: brightness(110%);\n      }\n    }\n  }\n\n  .btn-card {\n    visibility: hidden;\n    margin: 0 5px;\n    display: inline-block;\n    border: 1px solid #57b228;\n    border-radius: 4px;\n    padding: 5px 10px;\n    text-transform: uppercase;\n    color: #fff;\n    background-color: #57b228;\n  }\n\n  /* Responsive columns - one column layout (vertical) on small screens */\n  @media screen and (max-width: 600px) {\n    .column {\n      width: 100%;\n      display: block;\n      margin-bottom: 20px;\n    }\n  }\n"]);return S=function(){return e},e}var z=s.a.div(S()),j=function(){return l.a.createElement(z,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h2",null,l.a.createElement("span",{className:"color-portfolio"},l.a.createElement("i",{className:"fas fa-user-astronaut"})," HANK's"),l.a.createElement("span",null," PORTFOLIO"))),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"content-title"},l.a.createElement("h3",null,"Skills")),l.a.createElement("div",{className:"label-group"},l.a.createElement("p",null,"React"),l.a.createElement("p",null,"Sass"),l.a.createElement("p",null,"HTML"),l.a.createElement("p",null,"Javascript"),l.a.createElement("p",null,"SPA"),l.a.createElement("p",null,"Responsive UI / UX")),l.a.createElement("hr",null),l.a.createElement("p",{className:"content-title"},l.a.createElement("h3",null,"About")),l.a.createElement("p",null,"I made a Single Page Application using React and react-router-dom."),l.a.createElement("p",null,"UI is managed within individual components using Scss and styled-component."),l.a.createElement("p",null,"I have tried to build a simple and clean homepage in terms of practical application design and user-friendly inteface.")),l.a.createElement("div",{className:"btn-group"},l.a.createElement("span",{className:"btn-card"},l.a.createElement("i",{class:"fas fa-globe"})," Demo"),l.a.createElement("span",{className:"btn-card"},l.a.createElement("i",{className:"fas fa-code"})," Code")))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h2",null,l.a.createElement("span",{className:"color-youtube"},l.a.createElement("i",{class:"fab fa-youtube"}),"YOU"),"FLIX")),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"content-title"},l.a.createElement("h3",null,"Skills")),l.a.createElement("div",{className:"label-group"},l.a.createElement("p",null,"React"),l.a.createElement("p",null,"CSS"),l.a.createElement("p",null,"HTML"),l.a.createElement("p",null,"AWS"),l.a.createElement("p",null,"EC2")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("p",{className:"content-title"},l.a.createElement("h3",null,"About")),l.a.createElement("p",null,"I planned a pilot project that utilizes 'React' and 'react-router-dom'."),l.a.createElement("p",null,"I developed a website in the form of Netflix using the Youtube API."),l.a.createElement("p",null,"AWS's EC2 service is used For hosting.")),l.a.createElement("div",{className:"btn-group"},l.a.createElement("span",{className:"btn-card"},l.a.createElement("a",{href:"http://youflix2.s3-website.ca-central-1.amazonaws.com/",target:"_blank"},l.a.createElement("i",{class:"fas fa-globe"})," Demo")),l.a.createElement("span",{className:"btn-card"},l.a.createElement("a",{href:"https://github.com/hank-dohwankim/YouFlix-React-AWS-EC2",target:"_blank"},l.a.createElement("i",{className:"fas fa-code"})," Code"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h2",null,"Sample")),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"content-title"},l.a.createElement("h3",null,"Skills")),l.a.createElement("div",{className:"label-group"},l.a.createElement("p",null,"React"),l.a.createElement("p",null,"CSS"),l.a.createElement("p",null,"HTML"),l.a.createElement("p",null,"AWS"),l.a.createElement("p",null,"EC2")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("p",{className:"content-title"},l.a.createElement("h3",null,"About")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis animi beatae commodi sit quia consectetur odio voluptate magnam laudantium. Adipisci, consectetur? Deserunt, sed? Maiores deleniti saepe magnam quo vero!")),l.a.createElement("div",{className:"btn-group"},l.a.createElement("span",{className:"btn-card"},l.a.createElement("a",{href:"http://youflix2.s3-website.ca-central-1.amazonaws.com/",target:"_blank"},l.a.createElement("i",{class:"fas fa-globe"})," Demo")),l.a.createElement("span",{className:"btn-card"},l.a.createElement("a",{href:"https://github.com/hank-dohwankim/YouFlix-React-AWS-EC2",target:"_blank"},l.a.createElement("i",{className:"fas fa-code"})," Code")))))))};a(34);function A(){var e=Object(i.a)(["height: 100vh;"]);return A=function(){return e},e}var _=s.a.div(A()),I=function(){return l.a.createElement(o.a,null,l.a.createElement(_,null,l.a.createElement(p,null),l.a.createElement(k,null),l.a.createElement(m.a,{exact:!0,path:"/portfolio",component:b}),l.a.createElement("section",{className:"container"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/about",component:y}),l.a.createElement(m.a,{exact:!0,path:"/project",component:j})))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null),","),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.fb35d14d.chunk.js.map