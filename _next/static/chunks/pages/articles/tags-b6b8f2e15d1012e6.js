(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{3015:function(t,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/tags",function(){return o(2401)}])},8787:function(t,n,o){"use strict";o.d(n,{L:function(){return h}});var r=o(5944),i=o(3321),e=o(7357),a=o(1664),c=o.n(a),l=function(t){return function(t){var n,o=t.r,r=t.g,i=t.b,e=360,a=Math.max(o,r,i),c=Math.min(o,r,i);return(n=a==c?0:o==a?(r-i)/(a-c)*60:r==a?(i-o)/(a-c)*60+120:(o-r)/(a-c)*60+240)<0&&(n+=e),{h:n,s:(a+c)/2<127.5?a+c<=0?0:(a-c)/(a+c)*100:(a-c)/(510-a-c)*100,l:(a+c)/255/2*100}}(function(t){return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}(t))},s=function(t){return function(t){var n=t.r,o=t.g,r=t.b,i=("00"+Math.round(n).toString(16)).slice(-2),e=("00"+Math.round(o).toString(16)).slice(-2),a=("00"+Math.round(r).toString(16)).slice(-2);return"".concat(i,e,a)}(function(t){var n,o,r,i,e,a=t.h,c=t.s,l=t.l;c/=100,(l/=100)<.5?(i=l+l*c,e=l-l*c):(i=l+(1-l)*c,e=l-(1-l)*c);var s=60,d=(a%=360)/s;return d<=1?(n=i,o=a/s*(i-e)+e,r=e):d<=2?(n=(120-a)/s*(i-e)+e,o=i,r=e):d<=3?(n=e,o=i,r=(a-120)/s*(i-e)+e):d<=4?(n=e,o=(240-a)/s*(i-e)+e,r=i):d<=5?(n=(a-240)/s*(i-e)+e,o=e,r=i):(n=i,o=e,r=(360-a)/s*(i-e)+e),{r:n*=255,g:o*=255,b:r*=255}}({h:t.h,s:t.s,l:t.l}))},d=function(t,n){var o={h:t.h,s:t.s,l:t.l};return void 0!=n.h&&(o.h=Math.max(Math.min(n.h,360),0)),void 0!=n.s&&(o.s=Math.max(Math.min(n.s,100),0)),void 0!=n.l&&(o.l=Math.max(Math.min(n.l,100),0)),o},u=o(6868),v=function(t){var n=t.tag,o=function(t,n){var o,r,i,e,a,c,u=l(t);return"light"===n?(o=s(d(u,{h:void 0,s:void 0,l:30})),r=s(d(u,{h:void 0,s:void 0,l:98})),i=s(d(u,{h:void 0,s:void 0,l:30})),e=s(d(u,{h:void 0,s:void 0,l:30})),a=s(d(u,{h:void 0,s:void 0,l:93})),c=s(d(u,{h:void 0,s:void 0,l:30}))):"dark"===n&&(o=s(d(u,{h:void 0,s:void 0,l:75})),r=s(d(u,{h:void 0,s:void 0,l:11})),i=s(d(u,{h:void 0,s:void 0,l:35})),e=s(d(u,{h:void 0,s:void 0,l:75})),a=s(d(u,{h:void 0,s:void 0,l:17})),c=s(d(u,{h:void 0,s:void 0,l:35}))),{fg:o,bg:r,ol:i,fgHover:e,bgHover:a,olHover:c}}(n.color,u.Z.palette.mode);return(0,r.tZ)(c(),{href:"/articles?tag=".concat(n.name),passHref:!0,children:(0,r.tZ)(i.Z,{variant:"outlined",size:"small",sx:{textTransform:"none",borderRadius:2,pt:0,pb:0,mt:0,mb:.7,color:"#".concat(o.fg),borderColor:"#".concat(o.ol),backgroundColor:"#".concat(o.bg),"&:hover":{color:"#".concat(o.fgHover),borderColor:"#".concat(o.olHover),backgroundColor:"#".concat(o.bgHover)}},children:n.name})})},h=function(t){var n=t.tags;return void 0===n?(0,r.tZ)("div",{}):(0,r.tZ)(e.Z,{children:n.map((function(t){return(0,r.tZ)(e.Z,{sx:{mr:.5,display:"inline"},children:(0,r.tZ)(v,{tag:t})},t.name)}))})}},2401:function(t,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return v},default:function(){return h}});var r=o(5944),i=o(6574),e=o(2918),a=o(9008),c=o.n(a),l=o(1163),s=o(7357),d=o(8787),u=function(t){t.config;var n=t.tags;return(0,r.BX)("div",{children:[(0,r.tZ)(s.Z,{sx:{m:6}}),(0,r.tZ)(s.Z,{sx:{m:1},children:(0,r.tZ)(d.L,{tags:n})})]})},v=!0,h=function(t){var n=t.tags,o=t.config;return(0,l.useRouter)().isFallback||n?(0,r.BX)("div",{children:[(0,r.BX)(c(),{children:[(0,r.tZ)("title",{children:"Tags | ".concat(o.blog_title)}),(0,r.tZ)("meta",{name:"description",content:"".concat(o.blog_title," tag list")}),(0,r.tZ)("link",{rel:"icon",href:"".concat(o.root_url,"/static/favicon.ico")})]}),(0,r.tZ)("main",{children:(0,r.tZ)(i.Z,{maxWidth:"md",children:(0,r.tZ)(u,{config:o,tags:n})})})]}):(0,r.tZ)(e.default,{statusCode:404})}},2918:function(t,n,o){t.exports=o(67)},1163:function(t,n,o){t.exports=o(880)}},function(t){t.O(0,[859,774,888,179],(function(){return n=3015,t(t.s=n);var n}));var n=t.O();_N_E=n}]);