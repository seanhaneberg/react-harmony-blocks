(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){e.exports=r(18)},16:function(e,t,r){},17:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(6),c=r.n(o),s=(r(16),r(1)),i=r(2),l=r(4),p=r(3),h=r(5),u=r(9),d=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"getHexForFloats",value:function(e,t,r){var n="#",a=Math.round(255*e),o=Math.round(255*t),c=Math.round(255*r);return n+=a.toString(16).padStart(2,0),n+=o.toString(16).padStart(2,0),n+=c.toString(16).padStart(2,0)}},{key:"lerp",value:function(e,t,r){var n=r*(t-e)+e;return n}}]),e}(),b=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=d.getHexForFloats(this.props.red,this.props.green,this.props.blue);return a.a.createElement("g",null,a.a.createElement("rect",{x:this.props.x,y:this.props.y,width:this.props.width,height:this.props.height,strokeWidth:1,fill:e,stroke:"black"}),a.a.createElement("line",{x1:this.props.x+this.props.indicatorXOffset,y1:this.props.y,x2:this.props.x+this.props.indicatorXOffset,y2:this.props.y+this.props.height,stroke:"black"}))}}]),t}(n.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.blocks.map(function(e,t){var r=e.progress%1;return a.a.createElement(b,{key:t,x:10,y:10+20*e.pos,width:100,height:20,indicatorYOffset:10,indicatorHeight:10,indicatorXOffset:100*r,red:d.lerp(e.fromRed,e.toRed,r),green:d.lerp(e.fromGreen,e.toGreen,r),blue:d.lerp(e.fromBlue,e.toBlue,r)})});return a.a.createElement("g",null,e)}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=d.getHexForFloats(this.props.red,this.props.green,this.props.blue),t=this.props.x?this.props.x:0,r=(this.props.y?this.props.y:0)+this.props.height,n=t+this.props.width,o=r,c=t+this.props.width/2,s=this.props.y?this.props.y:0,i="".concat(t,",").concat(r," ").concat(n,",").concat(o," ").concat(c,",").concat(s),l="rotate(".concat(this.props.rotation,", ").concat(c,", ").concat(r,")");return a.a.createElement("g",{transform:l},a.a.createElement("polygon",{points:i,fill:e,stroke:"black"}))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.blocks.map(function(e,t){var r=e.progress%1;return a.a.createElement(f,{key:t,x:50,y:0,width:10,height:30,rotation:360*r,red:d.lerp(e.fromRed,e.toRed,r),green:d.lerp(e.fromGreen,e.toGreen,r),blue:d.lerp(e.fromBlue,e.toBlue,r)})});return a.a.createElement("g",null,e)}}]),t}(n.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=d.getHexForFloats(this.props.red,this.props.green,this.props.blue),t=this.props.y+this.props.height,r=this.props.y,n=this.props.x+this.props.width/2,o=r+this.props.height/2,c="rotate(".concat(this.props.rotation,", ").concat(n,", ").concat(t,")");return a.a.createElement("g",{transform:c},a.a.createElement("circle",{cx:n,cy:o,r:this.props.width,fill:e,stroke:"black"}))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.blocks.map(function(e,t){var r=e.progress%1;return a.a.createElement(v,{key:t,x:50,y:10,width:10,height:15,rotation:360*r,red:d.lerp(e.fromRed,e.toRed,r),green:d.lerp(e.fromGreen,e.toGreen,r),blue:d.lerp(e.fromBlue,e.toBlue,r)})});return a.a.createElement("g",null,e)}}]),t}(n.Component),k=r(7),O=r.n(k),j=O.a.Flow,E=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).svgRef=a.a.createRef(),r}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.chord,t=this.svgRef.current,r=new j.Renderer(t,j.Renderer.Backends.SVG).getContext(),n=new j.Stave(0,0,100);n.addClef("treble").setContext(r).draw();var a=j.Formatter.FormatAndDraw(r,n,e);this.setState({bb:a})}},{key:"render",value:function(){var e=this.state?this.state.svg:null,t=this.state?this.state.bb:null,r=t?t.x:0,n=t?t.y:0,o=n,c=t?Math.max(200,t.h):0,s=this.props.title;return a.a.createElement("svg",{x:r,y:n,top:o,left:"0px",width:"100px",height:c,ref:this.svgRef},a.a.createElement("text",null,s),e)}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"colorForIndex",value:function(e){var t=[{red:.8,green:0,blue:0},{red:.3,green:.3,blue:.8},{red:0,green:.6,blue:0},{red:.7,green:0,blue:.7}];return t[e%t.length]}},{key:"onRest",value:function(){this.setState({reset:!(this.state&&this.state.reset)})}},{key:"getContainerForType",value:function(e,t){var r=null;switch(e){case"block":r=a.a.createElement(m,t);break;case"clock":r=a.a.createElement(g,t);break;case"circle":default:r=a.a.createElement(y,t)}return r}},{key:"render",value:function(){var e=this,t=this.state&&this.state.reset;return a.a.createElement(u.a,{immediate:t,to:{progress:t?0:1},from:{progress:0},config:{duration:3e3,reset:!0},onRest:this.onRest.bind(this)},function(t){var r=e.props.hz.map(function(r,n){var a=e.colorForIndex(n);return{fromRed:1,toRed:a.red,fromGreen:1,toGreen:a.green,fromBlue:1,toBlue:a.blue,pos:n,progress:t.progress*r}}),n=e.props.chord,o=e.props.title,c=e.props.chord?a.a.createElement(E,{title:o,chord:n}):null,s={blocks:r},i=e.getContainerForType(e.props.type,s);return a.a.createElement("div",{className:"blocks-container"},o,a.a.createElement("svg",null,c,i))})}}]),t}(n.Component),x=(r(17),O.a.Flow),R=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[new x.StaveNote({keys:["c/4","e/4"],duration:"h"})],t=[new x.StaveNote({keys:["c/4","f/4"],duration:"h"})],r=[new x.StaveNote({keys:["c/4","g/4"],duration:"h"})],n=[new x.StaveNote({keys:["c/4","c/5"],duration:"h"})];return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"Harmony Blocks"),a.a.createElement("div",{className:"svg-container",style:{border:"black",margin:"auto",display:"block"}},a.a.createElement("div",{className:"blocks-container"},"Major 3rd",a.a.createElement(w,{height:150,width:120,chord:e,type:"clock",hz:[5,4]})),a.a.createElement("div",{className:"blocks-container"},"Perfect 4th",a.a.createElement(w,{chord:t,type:"circle",hz:[3,4]})),a.a.createElement("div",{className:"blocks-container"},"Perfect 5th",a.a.createElement(w,{chord:r,type:"block",hz:[6,4]})),a.a.createElement("div",{className:"blocks-container"},"Octave",a.a.createElement(w,{chord:n,type:"circle",hz:[8,4]}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.a37cc980.chunk.js.map