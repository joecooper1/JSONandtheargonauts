(this["webpackJsonpjson-argonauts"]=this["webpackJsonpjson-argonauts"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),l=a.n(r),i=(a(9),a(10),a(1));function c(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),c=Object(i.a)(l,2),s=c[0],u=c[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),g=p[0],m=p[1];return o.a.createElement("div",null,o.a.createElement("h4",null,"JSON Converter"),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"1000px",justifyContent:"space-evenly",backgroundColor:"pink",alignItems:"center"}},o.a.createElement("div",null,o.a.createElement("input",{type:"text",onChange:function(e){r(e.target.value)},value:a,style:{backgroundColor:"white",height:"100px",width:"300px",wordWrap:"break-word"}}),o.a.createElement("p",null,"Your email:",o.a.createElement("input",{type:"text",onChange:function(e){u(e.target.value)},value:s}))),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){var e=JSON.parse(a);console.log(a);var t=["AuxiliaryDetailsData","MainDetailsData","MeterDetailsData"];for(var n in e.docusignDetails)if("UsageRatesData"===n)e.docusignDetails[n]=[];else if("Credentials"===n)e.docusignDetails[n]={Username:"webcrm.admin@udgroup.co.uk",Password:"Utilities012"};else{if(!t.includes(n))continue;var o=e.docusignDetails[n];console.log(n);var r=[];for(var l in o){var i=l,c=o[l];RegExp("@","g").test(c)&&(c=s),r.push({Key:i,Value:c})}console.log(r),e.docusignDetails[n]=r}m(JSON.stringify(e))},style:{height:"50px"}},"Convert")),o.a.createElement("br",null),o.a.createElement("p",{style:{backgroundColor:"white",height:"400px",width:"300px",color:"black",fontSize:"8px",wordWrap:"break-word"}},g)))}var s=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(c,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.5f899925.chunk.js.map