(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){e.exports=r(20)},16:function(e,t,r){},18:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(7),i=r.n(a),s=(r(16),r(2)),c=r(3),p=r(6),h=r(4),l=r(5),u=r(9),d=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"getHexForFloats",value:function(e,t,r){var n="#",o=Math.round(255*e),a=Math.round(255*t),i=Math.round(255*r);return n+=o.toString(16).padStart(2,0),n+=a.toString(16).padStart(2,0),n+=i.toString(16).padStart(2,0)}},{key:"render",value:function(){var e=this.getHexForFloats(this.props.red,this.props.green,this.props.blue);return o.a.createElement("g",null,o.a.createElement("rect",{x:this.props.x,y:this.props.y,width:this.props.width,height:this.props.height,strokeWidth:1,fill:e,stroke:"black"}),o.a.createElement("line",{x1:this.props.x+this.props.indicatorXOffset,y1:this.props.y,x2:this.props.x+this.props.indicatorXOffset,y2:this.props.y+this.props.height,stroke:"black"}))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"lerp",value:function(e,t,r){var n=r*(t-e)+e;return n}},{key:"render",value:function(){var e=this,t=this.props.blocks.map(function(t,r){var n=t.progress%1;return o.a.createElement(d,{key:r,x:10,y:10+20*t.pos,width:100,height:20,indicatorYOffset:10,indicatorHeight:10,indicatorXOffset:100*n,red:e.lerp(t.fromRed,t.toRed,n),green:e.lerp(t.fromGreen,t.toGreen,n),blue:e.lerp(t.fromBlue,t.toBlue,n)})});return o.a.createElement("g",null,t)}}]),t}(n.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"getHexForFloats",value:function(e,t,r){var n="#",o=Math.round(255*e),a=Math.round(255*t),i=Math.round(255*r);return n+=o.toString(16).padStart(2,0),n+=a.toString(16).padStart(2,0),n+=i.toString(16).padStart(2,0)}},{key:"render",value:function(){var e=this.getHexForFloats(this.props.red,this.props.green,this.props.blue),t=this.props.x,r=this.props.y+this.props.height,n=t+this.props.width,a=r,i=t+this.props.width/2,s=this.props.y,c="".concat(t,",").concat(r," ").concat(n,",").concat(a," ").concat(i,",").concat(s),p="rotate(".concat(this.props.rotation,", ").concat(i,", ").concat(r,")");return o.a.createElement("g",{transform:p},o.a.createElement("polygon",{points:c,fill:e,stroke:"black"}))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"lerp",value:function(e,t,r){var n=r*(t-e)+e;return n}},{key:"render",value:function(){var e=this,t=this.props.blocks.map(function(t,r){var n=t.progress%1;return o.a.createElement(m,{key:r,x:50,y:100,width:10,height:50,rotation:360*n,red:e.lerp(t.fromRed,t.toRed,n),green:e.lerp(t.fromGreen,t.toGreen,n),blue:e.lerp(t.fromBlue,t.toBlue,n)})});return o.a.createElement("g",null,t)}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"getHexForFloats",value:function(e,t,r){var n="#",o=Math.round(255*e),a=Math.round(255*t),i=Math.round(255*r);return n+=o.toString(16).padStart(2,0),n+=a.toString(16).padStart(2,0),n+=i.toString(16).padStart(2,0)}},{key:"render",value:function(){var e=this.getHexForFloats(this.props.red,this.props.green,this.props.blue),t=this.props.x,r=this.props.y+this.props.height,n=t+this.props.width/2,a=this.props.y,i="rotate(".concat(this.props.rotation,", ").concat(n,", ").concat(r,")");return o.a.createElement("g",{transform:i},o.a.createElement("circle",{cx:n,cy:a,r:this.props.width,fill:e,stroke:"black"}))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"lerp",value:function(e,t,r){var n=r*(t-e)+e;return n}},{key:"render",value:function(){var e=this,t=this.props.blocks.map(function(t,r){var n=t.progress%1;return o.a.createElement(g,{key:r,x:50,y:250,width:20,height:15,rotation:360*n,red:e.lerp(t.fromRed,t.toRed,n),green:e.lerp(t.fromGreen,t.toGreen,n),blue:e.lerp(t.fromBlue,t.toBlue,n)})});return o.a.createElement("g",null,t)}}]),t}(n.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"colorForIndex",value:function(e){var t=[{red:.8,green:0,blue:0},{red:.3,green:.3,blue:.8},{red:0,green:.6,blue:0},{red:.7,green:0,blue:.7}];return t[e%t.length]}},{key:"onRest",value:function(){this.setState({reset:!(this.state&&this.state.reset)})}},{key:"render",value:function(){var e=this,t=this.state&&this.state.reset;return o.a.createElement(u.a,{immediate:t,to:{progress:t?0:1},from:{progress:0},config:{duration:3e3,reset:!0},onRest:this.onRest.bind(this)},function(t){var r={blocks:e.props.hz.map(function(r,n){var o=e.colorForIndex(n);return{fromRed:1,toRed:o.red,fromGreen:1,toGreen:o.green,fromBlue:1,toBlue:o.blue,pos:n,progress:t.progress*r}})};return o.a.createElement("g",null,o.a.createElement(f,r),o.a.createElement(b,r),o.a.createElement(y,r))})}}]),t}(n.Component),O=(r(18),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"Harmony Blocks"),o.a.createElement("div",{className:"svg-container",style:{border:"black",margin:"10px"}},o.a.createElement("svg",{x:10,y:10,height:1e3,width:200},o.a.createElement(v,{hz:[5,4,8]})),o.a.createElement("svg",{x:10,y:10,height:1e3,width:200},o.a.createElement(v,{hz:[4,3,6]})),o.a.createElement("svg",{x:10,y:10,height:1e3,width:200},o.a.createElement(v,{hz:[2,4,1]}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.ea357b0f.chunk.js.map