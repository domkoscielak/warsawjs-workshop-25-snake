(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,s){e.exports=s(20)},15:function(e,t,s){},17:function(e,t,s){e.exports=s.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(3),r=s.n(i),o=(s(15),s(9)),c=s(1),u=s(4),h=s(5),l=s(7),p=s(6),g=s(8);s(17),s(18);function m(e,t){var s=e.size/2+t.size/2;return Math.abs(e.x-t.x)<s&&Math.abs(e.y-t.y)<s}var f=function(e){function t(e){var s;return Object(u.a)(this,t),(s=Object(l.a)(this,Object(p.a)(t).call(this,e))).createFruit=function(){s.setState({fruits:s.state.fruits.concat([{age:0,size:s.props.fruitSize,x:Math.random()*s.props.width,y:Math.random()*s.props.height}])})},s.checkAge=function(e){return e<s.props.fruitMaxAge},s.tick=function(){if(s.state.running){var e=s.state.snakeDirection,t=s.state.snakeSegments[0];s.setState({snakeSegments:[{size:t.size,x:(s.props.width+t.x+t.size*e[0])%s.props.width,y:(s.props.height+t.y+t.size*e[1])%s.props.height}].concat(Object(c.a)(s.state.snakeSegments.slice(0,-1)))}),Math.random()<=.1&&s.createFruit();var a=s.state.fruits.filter(function(e){return e.age<s.props.fruitMaxAge});s.setState({fruits:a.map(function(e){return Object(o.a)({},e,{age:e.age+1})})}),s.state.fruits.map(function(e,t){if(s.hasCollision(e)){e.age=41;var a=s.state.snakeDirection,n=s.state.snakeSegments[0];s.setState({score:s.state.score+1,statusClass:"scored",snakeSegments:[{size:n.size,x:(s.props.width+n.x+n.size*a[0])%s.props.width,y:(s.props.height+n.y+n.size*a[1])%s.props.height}].concat(Object(c.a)(s.state.snakeSegments))}),setTimeout(function(){s.setState({statusClass:""})},150)}}),s.selfCollision()&&(s.setState({running:!1}),console.log("Game Over"))}},s.state={fruits:[],running:!0,snakeDirection:[0,-1],snakeGrowth:0,score:0,statusClass:"",snakeSegments:[{size:s.props.snakeElSize,x:100,y:100},{size:s.props.snakeElSize,x:100,y:110},{size:s.props.snakeElSize,x:100,y:120}]},s}return Object(g.a)(t,e),Object(h.a)(t,[{key:"hasCollision",value:function(e){return this.state.snakeSegments.some(function(t){return m(e,t)})}},{key:"selfCollision",value:function(){var e=this;return this.state.snakeSegments.slice(1).some(function(t){return m(e.state.snakeSegments[0],t)})}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.tick()},this.props.speed);document.addEventListener("keydown",function(t){switch(t.key){case"ArrowLeft":e.setState({snakeDirection:[-1,0]});break;case"ArrowRight":e.setState({snakeDirection:[1,0]});break;case"ArrowDown":e.setState({snakeDirection:[0,1]});break;case"ArrowUp":e.setState({snakeDirection:[0,-1]})}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement("header",{className:"game__header"},"Score: ",this.state.score,this.state.running?"pause":"play",n.a.createElement("img",{src:this.state.running?"./images/pause.svg":"./images.play.svg"}),n.a.createElement("i",{class:"fas fa-pause-circle"})),n.a.createElement("div",{className:"game-stage "+this.state.statusClass},n.a.createElement("svg",{width:this.props.width,height:this.props.height},n.a.createElement("rect",{width:this.props.width,height:this.props.height,className:"game-stage__body"}),this.state.snakeSegments.map(function(e,t){return n.a.createElement("circle",{key:t,cx:e.x,cy:e.y,r:e.size/2,className:"snake__head snake__head--el"+t})}),this.state.fruits.map(function(e,t){return n.a.createElement("circle",{key:t,cx:e.x,cy:e.y,r:e.size/2,className:"fruit fruit--el"+t})}))))}}]),t}(a.Component);f.defaultProps={width:400,height:300,snakeElSize:15,fruitSize:25,fruitMaxAge:30,speed:150};var k=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.2d881d8b.chunk.js.map