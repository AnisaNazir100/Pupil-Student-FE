import{cm as _e,cn as Ge,b3 as be,T as z,eA as We,r as P,cr as Re,br as Fe,j as e,bs as Se,cx as qe,cy as Ye,d as T,c as ae,b1 as E,G as B,bG as W,I as oe,Y as J,a0 as se,Q as X,a4 as te,ar as ne,a5 as Xe,a6 as Ue,a3 as U,P as G,B as H,bp as R,bH as F,q as je,b2 as ze,eB as He,en as Ve,y as $e,bJ as Ke,aa as Qe,ab as Je,ac as V,aX as Ze,a8 as Te,c3 as et,l as we,bW as ke,eC as Be,n as tt,cM as nt,be as ot,au as it,bf as rt,M as L}from"./index-Dhb-fOBp.js";import{C as at,a as st,b as lt}from"./ComponentSkeleton-CdPpPS-v.js";import{a as ct}from"./avatar-1-B3Wuv9V1.js";import{a as dt}from"./avatar-2-BAbqTplY.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";function ut(n){return Ge("MuiDialogContentText",n)}_e("MuiDialogContentText",["root"]);const gt=["children","className"],ht=n=>{const{classes:o}=n,a=Ye({root:["root"]},ut,o);return Se({},o,a)},pt=be(z,{shouldForwardProp:n=>We(n)||n==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,o)=>o.root})({}),$=P.forwardRef(function(o,s){const a=Re({props:o,name:"MuiDialogContentText"}),{className:v}=a,l=Fe(a,gt),g=ht(l);return e.jsx(pt,Se({component:"p",variant:"body1",color:"text.secondary",ref:s,ownerState:l,className:qe(g.root,v)},a,{classes:g}))}),Pe=["username@gmail.com","user02@gmail.com"];function Oe({onClose:n,selectedValue:o,open:s}){const a=ae(),v=()=>{n(o)},l=g=>{n(g)};return e.jsxs(E,{onClose:v,open:s,children:[e.jsxs(B,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",sx:{borderBottom:`1px solid ${a.palette.divider}`},children:[e.jsx(B,{item:!0,children:e.jsx(W,{children:"Set backup account"})}),e.jsx(B,{item:!0,sx:{mr:1.5},children:e.jsx(oe,{color:"secondary",onClick:v,children:e.jsx(J,{style:{transform:"rotate(45deg)"}})})})]}),e.jsxs(se,{sx:{p:2.5},children:[Pe.map((g,C)=>e.jsxs(X,{onClick:()=>l(g),selected:o===g,sx:{p:1.25},children:[e.jsx(te,{children:e.jsx(ne,{src:Xe(`avatar-${C+1}.png`,Ue.USERS)})}),e.jsx(U,{primary:g})]},g)),e.jsxs(X,{autoFocus:!0,onClick:()=>l("addAccount"),sx:{p:1.25},children:[e.jsx(te,{children:e.jsx(ne,{sx:{bgcolor:"primary.lighter",color:"primary.main",width:32,height:32},children:e.jsx(J,{style:{fontSize:"0.625rem"}})})}),e.jsx(U,{primary:"Add Account"})]})]})]})}function mt(){const[n,o]=P.useState(!1),[s,a]=P.useState(Pe[1]),v=()=>{o(!0)},l=g=>{o(!1),a(g)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:v,children:"Open simple dialog"}),e.jsx(Oe,{selectedValue:s,open:n,onClose:l})]})}Oe.propTypes={onClose:G.func,selectedValue:G.string,open:G.bool};function ft(){const[n,o]=P.useState(!1),s=()=>{o(!0)},a=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:s,children:"Open alert dialog"}),e.jsx(E,{open:n,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:e.jsxs(H,{sx:{p:1,py:1.5},children:[e.jsx(W,{id:"alert-dialog-title",children:"Use Google's location service?"}),e.jsx(R,{children:e.jsx($,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(F,{children:[e.jsx(T,{color:"error",onClick:a,children:"Disagree"}),e.jsx(T,{variant:"contained",onClick:a,children:"Agree"})]})]})})]})}function xt(){const[n,o]=P.useState(!1),s=()=>{o(!0)},a=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:s,children:"Open form dialog"}),e.jsx(E,{open:n,onClose:a,children:e.jsxs(H,{sx:{p:1,py:1.5},children:[e.jsx(W,{children:"Subscribe"}),e.jsxs(R,{children:[e.jsx($,{sx:{mb:2},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(je,{id:"name",placeholder:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})]}),e.jsxs(F,{children:[e.jsx(T,{color:"error",onClick:a,children:"Cancel"}),e.jsx(T,{variant:"contained",onClick:a,children:"Subscribe"})]})]})})]})}function Ct(){const[n,o]=P.useState(!1),s=()=>{o(!0)},a=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:s,children:"Slide in dialog"}),e.jsx(E,{open:n,TransitionComponent:ze,keepMounted:!0,onClose:a,"aria-describedby":"alert-dialog-slide-description",children:e.jsxs(H,{sx:{p:1,py:1.5},children:[e.jsx(W,{children:"Use Google'ss location service?"}),e.jsx(R,{children:e.jsx($,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(F,{children:[e.jsx(T,{color:"error",onClick:a,children:"Disagree"}),e.jsx(T,{variant:"contained",onClick:a,children:"Agree"})]})]})})]})}const Dt=be(E)(({theme:n})=>({"& .MuiDialogContent-root":{padding:n.spacing(3)},"& .MuiDialogActions-root":{padding:n.spacing(1.25),paddingRight:n.spacing(2)}})),Me=({children:n,onClose:o,...s})=>e.jsxs(W,{sx:{m:0,p:2},...s,children:[n,o?e.jsx(oe,{"aria-label":"close",onClick:o,color:"secondary",sx:{position:"absolute",right:10,top:10},children:e.jsx(J,{style:{transform:"rotate(45deg)"}})}):null]});function vt(){const[n,o]=P.useState(!1),s=()=>{o(!0)},a=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:s,children:"Open dialog"}),e.jsxs(Dt,{onClose:a,"aria-labelledby":"customized-dialog-title",open:n,children:[e.jsx(Me,{id:"customized-dialog-title",onClose:a,children:"Modal Title"}),e.jsxs(R,{dividers:!0,sx:{p:3},children:[e.jsx(z,{variant:"h6",gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx(z,{variant:"h6",gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),e.jsx(F,{children:e.jsx(T,{variant:"contained",onClick:a,children:"Save changes"})})]})]})}Me.propTypes={children:G.node,onClose:G.func,other:G.any};const yt=P.forwardRef((n,o)=>e.jsx(Ke,{direction:"up",ref:o,...n}));function bt(){const[n,o]=P.useState(!1),s=()=>{o(!0)},a=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:s,children:"Open full-screen dialog"}),e.jsxs(E,{fullScreen:!0,open:n,onClose:a,TransitionComponent:yt,children:[e.jsx(He,{sx:{position:"relative",boxShadow:"none"},children:e.jsxs(Ve,{children:[e.jsx(oe,{edge:"start",color:"inherit",onClick:a,"aria-label":"close",children:e.jsx(J,{style:{transform:"rotate(45deg)"}})}),e.jsx(z,{sx:{ml:2,flex:1},variant:"h6",children:"Set Backup Account"}),e.jsx(T,{color:"primary",variant:"contained",onClick:a,children:"save"})]})}),e.jsxs(se,{sx:{p:3},children:[e.jsxs(X,{children:[e.jsx(te,{children:e.jsx(ne,{src:ct})}),e.jsx(U,{primary:"Phone ringtone",secondary:"Default"})]}),e.jsx($e,{}),e.jsxs(X,{children:[e.jsx(te,{children:e.jsx(ne,{src:dt})}),e.jsx(U,{primary:"Default notification ringtone",secondary:"Tethys"})]})]})]})]})}function St(){const[n,o]=P.useState(!0),[s,a]=P.useState("sm"),[v,l]=P.useState(!1),g=()=>{l(!0)},C=()=>{l(!1)},S=y=>{a(y.target.value)},M=y=>{o(y.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:g,children:"Open max-width dialog"}),e.jsx(E,{fullWidth:n,maxWidth:s,open:v,onClose:C,children:e.jsxs(H,{sx:{p:1,py:1.5},children:[e.jsx(W,{children:"Optional sizes"}),e.jsxs(R,{children:[e.jsx($,{children:"You can set my maximum width and whether to adapt or not."}),e.jsxs(B,{container:!0,spacing:1.5,alignItems:"center",sx:{mt:1},children:[e.jsx(B,{item:!0,children:e.jsx(z,{variant:"h6",children:"Max Width :"})}),e.jsx(B,{item:!0,children:e.jsx(Qe,{sx:{minWidth:120},children:e.jsxs(Je,{autoFocus:!0,value:s,onChange:S,inputProps:{name:"max-width",id:"max-width"},children:[e.jsx(V,{value:!1,children:"false"}),e.jsx(V,{value:"xs",children:"xs"}),e.jsx(V,{value:"sm",children:"sm"}),e.jsx(V,{value:"md",children:"md"}),e.jsx(V,{value:"lg",children:"lg"}),e.jsx(V,{value:"xl",children:"xl"})]})})})]}),e.jsxs(B,{container:!0,spacing:1.5,alignItems:"center",sx:{mt:.25},children:[e.jsx(B,{item:!0,children:e.jsx(z,{variant:"h6",children:"Full Width:"})}),e.jsx(B,{item:!0,children:e.jsx(Ze,{checked:n,onChange:M})})]})]}),e.jsx(F,{children:e.jsx(T,{variant:"outlined",color:"error",onClick:C,children:"Close"})})]})})]})}function jt(){const n=ae(),o=Te(n.breakpoints.down("md")),[s,a]=P.useState(!1),v=()=>{a(!0)},l=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:v,children:"Open responsive dialog"}),e.jsx(E,{fullScreen:o,open:s,onClose:l,"aria-labelledby":"responsive-dialog-title",children:e.jsxs(H,{sx:{p:1,py:1.5},children:[e.jsx(W,{id:"responsive-dialog-title",children:"Use Google's location service?"}),e.jsx(R,{children:e.jsx($,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),e.jsxs(F,{children:[e.jsx(T,{color:"error",onClick:l,children:"Disagree"}),e.jsx(T,{variant:"contained",onClick:l,children:"Agree"})]})]})})]})}var K={exports:{}},re={};function Ie(n){var o,s,a="";if(typeof n=="string"||typeof n=="number")a+=n;else if(typeof n=="object")if(Array.isArray(n))for(o=0;o<n.length;o++)n[o]&&(s=Ie(n[o]))&&(a&&(a+=" "),a+=s);else for(o in n)n[o]&&(a&&(a+=" "),a+=o);return a}function he(){for(var n,o,s=0,a="";s<arguments.length;)(n=arguments[s++])&&(o=Ie(n))&&(a&&(a+=" "),a+=o);return a}const Tt=Object.freeze(Object.defineProperty({__proto__:null,clsx:he,default:he},Symbol.toStringTag,{value:"Module"})),wt=et(Tt);var O={},q={},pe;function ie(){if(pe)return q;pe=1,Object.defineProperty(q,"__esModule",{value:!0}),q.dontSetMe=v,q.findInArray=n,q.int=a,q.isFunction=o,q.isNum=s;function n(l,g){for(let C=0,S=l.length;C<S;C++)if(g.apply(g,[l[C],C,l]))return l[C]}function o(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Function]"}function s(l){return typeof l=="number"&&!isNaN(l)}function a(l){return parseInt(l,10)}function v(l,g,C){if(l[g])return new Error("Invalid prop ".concat(g," passed to ").concat(C," - do not set this, set it on the child."))}return q}var Y={},me;function kt(){if(me)return Y;me=1,Object.defineProperty(Y,"__esModule",{value:!0}),Y.browserPrefixToKey=s,Y.browserPrefixToStyle=a,Y.default=void 0,Y.getPrefix=o;const n=["Moz","Webkit","O","ms"];function o(){var l;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const C=(l=window.document)===null||l===void 0||(l=l.documentElement)===null||l===void 0?void 0:l.style;if(!C||g in C)return"";for(let S=0;S<n.length;S++)if(s(g,n[S])in C)return n[S];return""}function s(l,g){return g?"".concat(g).concat(v(l)):l}function a(l,g){return g?"-".concat(g.toLowerCase(),"-").concat(l):l}function v(l){let g="",C=!0;for(let S=0;S<l.length;S++)C?(g+=l[S].toUpperCase(),C=!1):l[S]==="-"?C=!0:g+=l[S];return g}return Y.default=o(),Y}var fe;function le(){if(fe)return O;fe=1,Object.defineProperty(O,"__esModule",{value:!0}),O.addClassName=u,O.addEvent=C,O.addUserSelectStyles=c,O.createCSSTransform=D,O.createSVGTransform=k,O.getTouch=d,O.getTouchIdentifier=r,O.getTranslation=m,O.innerHeight=f,O.innerWidth=b,O.matchesSelector=l,O.matchesSelectorAndParentsTo=g,O.offsetXYFromParent=x,O.outerHeight=M,O.outerWidth=y,O.removeClassName=j,O.removeEvent=S,O.removeUserSelectStyles=p;var n=ie(),o=a(kt());function s(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,h=new WeakMap;return(s=function(w){return w?h:i})(t)}function a(t,i){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var h=s(i);if(h&&h.has(t))return h.get(t);var w={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in t)if(A!=="default"&&Object.prototype.hasOwnProperty.call(t,A)){var N=I?Object.getOwnPropertyDescriptor(t,A):null;N&&(N.get||N.set)?Object.defineProperty(w,A,N):w[A]=t[A]}return w.default=t,h&&h.set(t,w),w}let v="";function l(t,i){return v||(v=(0,n.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(h){return(0,n.isFunction)(t[h])})),(0,n.isFunction)(t[v])?t[v](i):!1}function g(t,i,h){let w=t;do{if(l(w,i))return!0;if(w===h)return!1;w=w.parentNode}while(w);return!1}function C(t,i,h,w){if(!t)return;const I={capture:!0,...w};t.addEventListener?t.addEventListener(i,h,I):t.attachEvent?t.attachEvent("on"+i,h):t["on"+i]=h}function S(t,i,h,w){if(!t)return;const I={capture:!0,...w};t.removeEventListener?t.removeEventListener(i,h,I):t.detachEvent?t.detachEvent("on"+i,h):t["on"+i]=null}function M(t){let i=t.clientHeight;const h=t.ownerDocument.defaultView.getComputedStyle(t);return i+=(0,n.int)(h.borderTopWidth),i+=(0,n.int)(h.borderBottomWidth),i}function y(t){let i=t.clientWidth;const h=t.ownerDocument.defaultView.getComputedStyle(t);return i+=(0,n.int)(h.borderLeftWidth),i+=(0,n.int)(h.borderRightWidth),i}function f(t){let i=t.clientHeight;const h=t.ownerDocument.defaultView.getComputedStyle(t);return i-=(0,n.int)(h.paddingTop),i-=(0,n.int)(h.paddingBottom),i}function b(t){let i=t.clientWidth;const h=t.ownerDocument.defaultView.getComputedStyle(t);return i-=(0,n.int)(h.paddingLeft),i-=(0,n.int)(h.paddingRight),i}function x(t,i,h){const I=i===i.ownerDocument.body?{left:0,top:0}:i.getBoundingClientRect(),A=(t.clientX+i.scrollLeft-I.left)/h,N=(t.clientY+i.scrollTop-I.top)/h;return{x:A,y:N}}function D(t,i){const h=m(t,i,"px");return{[(0,o.browserPrefixToKey)("transform",o.default)]:h}}function k(t,i){return m(t,i,"")}function m(t,i,h){let{x:w,y:I}=t,A="translate(".concat(w).concat(h,",").concat(I).concat(h,")");if(i){const N="".concat(typeof i.x=="string"?i.x:i.x+h),Z="".concat(typeof i.y=="string"?i.y:i.y+h);A="translate(".concat(N,", ").concat(Z,")")+A}return A}function d(t,i){return t.targetTouches&&(0,n.findInArray)(t.targetTouches,h=>i===h.identifier)||t.changedTouches&&(0,n.findInArray)(t.changedTouches,h=>i===h.identifier)}function r(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function c(t){if(!t)return;let i=t.getElementById("react-draggable-style-el");i||(i=t.createElement("style"),i.type="text/css",i.id="react-draggable-style-el",i.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,i.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(i)),t.body&&u(t.body,"react-draggable-transparent-selection")}function p(t){if(t)try{if(t.body&&j(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const i=(t.defaultView||window).getSelection();i&&i.type!=="Caret"&&i.removeAllRanges()}}catch{}}function u(t,i){t.classList?t.classList.add(i):t.className.match(new RegExp("(?:^|\\s)".concat(i,"(?!\\S)")))||(t.className+=" ".concat(i))}function j(t,i){t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(i,"(?!\\S)"),"g"),"")}return O}var _={},xe;function Ae(){if(xe)return _;xe=1,Object.defineProperty(_,"__esModule",{value:!0}),_.canDragX=v,_.canDragY=l,_.createCoreData=C,_.createDraggableData=S,_.getBoundPosition=s,_.getControlPosition=g,_.snapToGrid=a;var n=ie(),o=le();function s(f,b,x){if(!f.props.bounds)return[b,x];let{bounds:D}=f.props;D=typeof D=="string"?D:M(D);const k=y(f);if(typeof D=="string"){const{ownerDocument:m}=k,d=m.defaultView;let r;if(D==="parent"?r=k.parentNode:r=m.querySelector(D),!(r instanceof d.HTMLElement))throw new Error('Bounds selector "'+D+'" could not find an element.');const c=r,p=d.getComputedStyle(k),u=d.getComputedStyle(c);D={left:-k.offsetLeft+(0,n.int)(u.paddingLeft)+(0,n.int)(p.marginLeft),top:-k.offsetTop+(0,n.int)(u.paddingTop)+(0,n.int)(p.marginTop),right:(0,o.innerWidth)(c)-(0,o.outerWidth)(k)-k.offsetLeft+(0,n.int)(u.paddingRight)-(0,n.int)(p.marginRight),bottom:(0,o.innerHeight)(c)-(0,o.outerHeight)(k)-k.offsetTop+(0,n.int)(u.paddingBottom)-(0,n.int)(p.marginBottom)}}return(0,n.isNum)(D.right)&&(b=Math.min(b,D.right)),(0,n.isNum)(D.bottom)&&(x=Math.min(x,D.bottom)),(0,n.isNum)(D.left)&&(b=Math.max(b,D.left)),(0,n.isNum)(D.top)&&(x=Math.max(x,D.top)),[b,x]}function a(f,b,x){const D=Math.round(b/f[0])*f[0],k=Math.round(x/f[1])*f[1];return[D,k]}function v(f){return f.props.axis==="both"||f.props.axis==="x"}function l(f){return f.props.axis==="both"||f.props.axis==="y"}function g(f,b,x){const D=typeof b=="number"?(0,o.getTouch)(f,b):null;if(typeof b=="number"&&!D)return null;const k=y(x),m=x.props.offsetParent||k.offsetParent||k.ownerDocument.body;return(0,o.offsetXYFromParent)(D||f,m,x.props.scale)}function C(f,b,x){const D=!(0,n.isNum)(f.lastX),k=y(f);return D?{node:k,deltaX:0,deltaY:0,lastX:b,lastY:x,x:b,y:x}:{node:k,deltaX:b-f.lastX,deltaY:x-f.lastY,lastX:f.lastX,lastY:f.lastY,x:b,y:x}}function S(f,b){const x=f.props.scale;return{node:b.node,x:f.state.x+b.deltaX/x,y:f.state.y+b.deltaY/x,deltaX:b.deltaX/x,deltaY:b.deltaY/x,lastX:f.state.x,lastY:f.state.y}}function M(f){return{left:f.left,top:f.top,right:f.right,bottom:f.bottom}}function y(f){const b=f.findDOMNode();if(!b)throw new Error("<DraggableCore>: Unmounted during event!");return b}return _}var Q={},ee={},Ce;function Le(){if(Ce)return ee;Ce=1,Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=n;function n(){}return ee}var De;function Bt(){if(De)return Q;De=1,Object.defineProperty(Q,"__esModule",{value:!0}),Q.default=void 0;var n=M(we()),o=C(Be()),s=C(ke()),a=le(),v=Ae(),l=ie(),g=C(Le());function C(m){return m&&m.__esModule?m:{default:m}}function S(m){if(typeof WeakMap!="function")return null;var d=new WeakMap,r=new WeakMap;return(S=function(c){return c?r:d})(m)}function M(m,d){if(m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var r=S(d);if(r&&r.has(m))return r.get(m);var c={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in m)if(u!=="default"&&Object.prototype.hasOwnProperty.call(m,u)){var j=p?Object.getOwnPropertyDescriptor(m,u):null;j&&(j.get||j.set)?Object.defineProperty(c,u,j):c[u]=m[u]}return c.default=m,r&&r.set(m,c),c}function y(m,d,r){return d=f(d),d in m?Object.defineProperty(m,d,{value:r,enumerable:!0,configurable:!0,writable:!0}):m[d]=r,m}function f(m){var d=b(m,"string");return typeof d=="symbol"?d:String(d)}function b(m,d){if(typeof m!="object"||m===null)return m;var r=m[Symbol.toPrimitive];if(r!==void 0){var c=r.call(m,d||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(m)}const x={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let D=x.mouse,k=class extends n.Component{constructor(){super(...arguments),y(this,"dragging",!1),y(this,"lastX",NaN),y(this,"lastY",NaN),y(this,"touchIdentifier",null),y(this,"mounted",!1),y(this,"handleDragStart",d=>{if(this.props.onMouseDown(d),!this.props.allowAnyClick&&typeof d.button=="number"&&d.button!==0)return!1;const r=this.findDOMNode();if(!r||!r.ownerDocument||!r.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:c}=r;if(this.props.disabled||!(d.target instanceof c.defaultView.Node)||this.props.handle&&!(0,a.matchesSelectorAndParentsTo)(d.target,this.props.handle,r)||this.props.cancel&&(0,a.matchesSelectorAndParentsTo)(d.target,this.props.cancel,r))return;d.type==="touchstart"&&d.preventDefault();const p=(0,a.getTouchIdentifier)(d);this.touchIdentifier=p;const u=(0,v.getControlPosition)(d,p,this);if(u==null)return;const{x:j,y:t}=u,i=(0,v.createCoreData)(this,j,t);(0,g.default)("DraggableCore: handleDragStart: %j",i),(0,g.default)("calling",this.props.onStart),!(this.props.onStart(d,i)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,a.addUserSelectStyles)(c),this.dragging=!0,this.lastX=j,this.lastY=t,(0,a.addEvent)(c,D.move,this.handleDrag),(0,a.addEvent)(c,D.stop,this.handleDragStop))}),y(this,"handleDrag",d=>{const r=(0,v.getControlPosition)(d,this.touchIdentifier,this);if(r==null)return;let{x:c,y:p}=r;if(Array.isArray(this.props.grid)){let t=c-this.lastX,i=p-this.lastY;if([t,i]=(0,v.snapToGrid)(this.props.grid,t,i),!t&&!i)return;c=this.lastX+t,p=this.lastY+i}const u=(0,v.createCoreData)(this,c,p);if((0,g.default)("DraggableCore: handleDrag: %j",u),this.props.onDrag(d,u)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const i=document.createEvent("MouseEvents");i.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(i)}return}this.lastX=c,this.lastY=p}),y(this,"handleDragStop",d=>{if(!this.dragging)return;const r=(0,v.getControlPosition)(d,this.touchIdentifier,this);if(r==null)return;let{x:c,y:p}=r;if(Array.isArray(this.props.grid)){let i=c-this.lastX||0,h=p-this.lastY||0;[i,h]=(0,v.snapToGrid)(this.props.grid,i,h),c=this.lastX+i,p=this.lastY+h}const u=(0,v.createCoreData)(this,c,p);if(this.props.onStop(d,u)===!1||this.mounted===!1)return!1;const t=this.findDOMNode();t&&this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(t.ownerDocument),(0,g.default)("DraggableCore: handleDragStop: %j",u),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,t&&((0,g.default)("DraggableCore: Removing handlers"),(0,a.removeEvent)(t.ownerDocument,D.move,this.handleDrag),(0,a.removeEvent)(t.ownerDocument,D.stop,this.handleDragStop))}),y(this,"onMouseDown",d=>(D=x.mouse,this.handleDragStart(d))),y(this,"onMouseUp",d=>(D=x.mouse,this.handleDragStop(d))),y(this,"onTouchStart",d=>(D=x.touch,this.handleDragStart(d))),y(this,"onTouchEnd",d=>(D=x.touch,this.handleDragStop(d)))}componentDidMount(){this.mounted=!0;const d=this.findDOMNode();d&&(0,a.addEvent)(d,x.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const d=this.findDOMNode();if(d){const{ownerDocument:r}=d;(0,a.removeEvent)(r,x.mouse.move,this.handleDrag),(0,a.removeEvent)(r,x.touch.move,this.handleDrag),(0,a.removeEvent)(r,x.mouse.stop,this.handleDragStop),(0,a.removeEvent)(r,x.touch.stop,this.handleDragStop),(0,a.removeEvent)(d,x.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(r)}}findDOMNode(){var d,r;return(d=this.props)!==null&&d!==void 0&&d.nodeRef?(r=this.props)===null||r===void 0||(r=r.nodeRef)===null||r===void 0?void 0:r.current:s.default.findDOMNode(this)}render(){return n.cloneElement(n.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};return Q.default=k,y(k,"displayName","DraggableCore"),y(k,"propTypes",{allowAnyClick:o.default.bool,children:o.default.node.isRequired,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(m,d){if(m[d]&&m[d].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),y(k,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),Q}var ve;function Pt(){return ve||(ve=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"DraggableCore",{enumerable:!0,get:function(){return S.default}}),n.default=void 0;var o=b(we()),s=y(Be()),a=y(ke()),v=y(wt),l=le(),g=Ae(),C=ie(),S=y(Bt()),M=y(Le());function y(r){return r&&r.__esModule?r:{default:r}}function f(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,p=new WeakMap;return(f=function(u){return u?p:c})(r)}function b(r,c){if(r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var p=f(c);if(p&&p.has(r))return p.get(r);var u={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in r)if(t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)){var i=j?Object.getOwnPropertyDescriptor(r,t):null;i&&(i.get||i.set)?Object.defineProperty(u,t,i):u[t]=r[t]}return u.default=r,p&&p.set(r,u),u}function x(){return x=Object.assign?Object.assign.bind():function(r){for(var c=1;c<arguments.length;c++){var p=arguments[c];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(r[u]=p[u])}return r},x.apply(this,arguments)}function D(r,c,p){return c=k(c),c in r?Object.defineProperty(r,c,{value:p,enumerable:!0,configurable:!0,writable:!0}):r[c]=p,r}function k(r){var c=m(r,"string");return typeof c=="symbol"?c:String(c)}function m(r,c){if(typeof r!="object"||r===null)return r;var p=r[Symbol.toPrimitive];if(p!==void 0){var u=p.call(r,c||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(r)}class d extends o.Component{static getDerivedStateFromProps(c,p){let{position:u}=c,{prevPropsPosition:j}=p;return u&&(!j||u.x!==j.x||u.y!==j.y)?((0,M.default)("Draggable: getDerivedStateFromProps %j",{position:u,prevPropsPosition:j}),{x:u.x,y:u.y,prevPropsPosition:{...u}}):null}constructor(c){super(c),D(this,"onDragStart",(p,u)=>{if((0,M.default)("Draggable: onDragStart: %j",u),this.props.onStart(p,(0,g.createDraggableData)(this,u))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),D(this,"onDrag",(p,u)=>{if(!this.state.dragging)return!1;(0,M.default)("Draggable: onDrag: %j",u);const j=(0,g.createDraggableData)(this,u),t={x:j.x,y:j.y,slackX:0,slackY:0};if(this.props.bounds){const{x:h,y:w}=t;t.x+=this.state.slackX,t.y+=this.state.slackY;const[I,A]=(0,g.getBoundPosition)(this,t.x,t.y);t.x=I,t.y=A,t.slackX=this.state.slackX+(h-t.x),t.slackY=this.state.slackY+(w-t.y),j.x=t.x,j.y=t.y,j.deltaX=t.x-this.state.x,j.deltaY=t.y-this.state.y}if(this.props.onDrag(p,j)===!1)return!1;this.setState(t)}),D(this,"onDragStop",(p,u)=>{if(!this.state.dragging||this.props.onStop(p,(0,g.createDraggableData)(this,u))===!1)return!1;(0,M.default)("Draggable: onDragStop: %j",u);const t={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:h,y:w}=this.props.position;t.x=h,t.y=w}this.setState(t)}),this.state={dragging:!1,dragged:!1,x:c.position?c.position.x:c.defaultPosition.x,y:c.position?c.position.y:c.defaultPosition.y,prevPropsPosition:{...c.position},slackX:0,slackY:0,isElementSVG:!1},c.position&&!(c.onDrag||c.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var c,p;return(c=(p=this.props)===null||p===void 0||(p=p.nodeRef)===null||p===void 0?void 0:p.current)!==null&&c!==void 0?c:a.default.findDOMNode(this)}render(){const{axis:c,bounds:p,children:u,defaultPosition:j,defaultClassName:t,defaultClassNameDragging:i,defaultClassNameDragged:h,position:w,positionOffset:I,scale:A,...N}=this.props;let Z={},ce=null;const de=!!!w||this.state.dragging,ue=w||j,ge={x:(0,g.canDragX)(this)&&de?this.state.x:ue.x,y:(0,g.canDragY)(this)&&de?this.state.y:ue.y};this.state.isElementSVG?ce=(0,l.createSVGTransform)(ge,I):Z=(0,l.createCSSTransform)(ge,I);const Ne=(0,v.default)(u.props.className||"",t,{[i]:this.state.dragging,[h]:this.state.dragged});return o.createElement(S.default,x({},N,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(u),{className:Ne,style:{...u.props.style,...Z},transform:ce}))}}n.default=d,D(d,"displayName","Draggable"),D(d,"propTypes",{...S.default.propTypes,axis:s.default.oneOf(["both","x","y","none"]),bounds:s.default.oneOfType([s.default.shape({left:s.default.number,right:s.default.number,top:s.default.number,bottom:s.default.number}),s.default.string,s.default.oneOf([!1])]),defaultClassName:s.default.string,defaultClassNameDragging:s.default.string,defaultClassNameDragged:s.default.string,defaultPosition:s.default.shape({x:s.default.number,y:s.default.number}),positionOffset:s.default.shape({x:s.default.oneOfType([s.default.number,s.default.string]),y:s.default.oneOfType([s.default.number,s.default.string])}),position:s.default.shape({x:s.default.number,y:s.default.number}),className:C.dontSetMe,style:C.dontSetMe,transform:C.dontSetMe}),D(d,"defaultProps",{...S.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})}(re)),re}var ye;function Ot(){if(ye)return K.exports;ye=1;const{default:n,DraggableCore:o}=Pt();return K.exports=n,K.exports.default=n,K.exports.DraggableCore=o,K.exports}var Mt=Ot();const It=tt(Mt),At=P.forwardRef((n,o)=>e.jsx(It,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:e.jsx(nt,{ref:o,...n})}));function Lt(){const[n,o]=P.useState(!1),s=()=>{o(!0)},a=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:s,children:"Open draggable dialog"}),e.jsx(E,{open:n,onClose:a,PaperComponent:At,"aria-labelledby":"draggable-dialog-title",children:e.jsxs(H,{sx:{p:1,py:1.5},children:[e.jsx(W,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Subscribe"}),e.jsxs(R,{children:[e.jsx($,{sx:{mb:2},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(je,{id:"name",placeholder:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})]}),e.jsxs(F,{children:[e.jsx(T,{color:"error",onClick:a,children:"Cancel"}),e.jsx(T,{variant:"contained",onClick:a,children:"Subscribe"})]})]})})]})}function Et(){const[n,o]=P.useState(!1),[s,a]=P.useState("paper"),v=C=>()=>{o(!0),a(C)},l=()=>{o(!1)},g=P.useRef(null);return P.useEffect(()=>{if(n){const{current:C}=g;C!==null&&C.focus()}},[n]),e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"contained",onClick:v("paper"),sx:{mr:1,ml:1,mb:1,mt:1},children:"scroll=paper"}),e.jsx(T,{variant:"outlined",onClick:v("body"),sx:{mr:1,ml:1,mb:1,mt:1},children:"scroll=body"}),e.jsxs(E,{open:n,onClose:l,scroll:s,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[e.jsxs(B,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",children:[e.jsx(B,{item:!0,children:e.jsx(W,{children:"Subscribe"})}),e.jsx(B,{item:!0,sx:{mr:1.5},children:e.jsx(oe,{color:"secondary",onClick:l,children:e.jsx(J,{style:{transform:"rotate(45deg)"}})})})]}),e.jsx(R,{dividers:!0,children:e.jsx(B,{container:!0,spacing:1.25,children:[...new Array(25)].map((C,S)=>e.jsx(B,{item:!0,children:e.jsx(z,{variant:"h6",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})},`${S}-${s}`))})}),e.jsxs(F,{children:[e.jsx(T,{color:"error",onClick:l,children:"Cancel"}),e.jsx(T,{variant:"contained",onClick:l,sx:{mr:1},children:"Subscribe"})]})]})]})}const Nt=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis"];function Ee({onClose:n,value:o,open:s,...a}){const v=ae(),l=Te(v.breakpoints.down("md")),[g,C]=P.useState(o),S=P.useRef(null);P.useEffect(()=>{s||C(o)},[o,s]);const M=()=>{S.current!=null&&S.current.focus()},y=()=>{n()},f=()=>{n(g)},b=x=>{C(x.target.value)};return e.jsxs(E,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:l?"sm":"lg",TransitionProps:{onEntering:M},open:s,...a,children:[e.jsx(W,{children:"Phone Ringtone"}),e.jsx(R,{dividers:!0,children:e.jsx(ot,{row:!l,ref:S,"aria-label":"ringtone",name:"ringtone",value:g,onChange:b,children:Nt.map(x=>e.jsx(it,{value:x,control:e.jsx(rt,{}),label:x},x))})}),e.jsxs(F,{children:[e.jsx(T,{color:"error",onClick:y,children:"Cancel"}),e.jsx(T,{variant:"contained",onClick:f,sx:{mr:.5},children:"Done"})]})]})}function _t(){const[n,o]=P.useState(!1),[s,a]=P.useState("Hangouts Call"),v=()=>{o(!0)},l=g=>{o(!1),g&&a(g)};return e.jsx(H,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.jsxs(se,{role:"group",children:[e.jsx(X,{divider:!0,disabled:!0,children:e.jsx(U,{primary:"Interruptions"})}),e.jsx(X,{divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"phone ringtone",onClick:v,children:e.jsx(U,{primary:"Phone Ringtone",secondary:s})}),e.jsx(X,{divider:!0,disabled:!0,children:e.jsx(U,{primary:"Default Notification Ringtone",secondary:"Tethys"})}),e.jsx(Ee,{id:"ringtone-menu",keepMounted:!0,open:n,onClose:l,value:s})]})})}Ee.propTypes={onClose:G.func,value:G.string,open:G.bool,other:G.any};function zt(){return e.jsxs(at,{children:[e.jsx(st,{title:"Dialog",caption:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",directory:"src/pages/components-overview/dialogs",link:"https://mui.com/material-ui/react-dialog/"}),e.jsx(lt,{sx:{"& .MuiCardContent-root":{textAlign:"center"}},children:e.jsxs(B,{container:!0,spacing:3,children:[e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Basic",codeString:`// SimpleDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open simple dialog
</Button>
<Dialog onClose={handleClose} open={open}>
  <Grid
    container
    spacing={2}
    justifyContent="space-between"
    alignItems="center"
    sx={{ borderBottom: '1px solid {theme.palette.divider}' }}
  >
    <Grid item>
      <DialogTitle>Set backup account</DialogTitle>
    </Grid>
    <Grid item sx={{ mr: 1.5 }}>
      <IconButton color="secondary" onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
    </Grid>
  </Grid>

  <List sx={{ p: 2.5 }}>
  {emails.map((email, index) => (
    <ListItemButton onClick={() => handleListItemClick(email)} key={email} selected={selectedValue === email} sx={{ p: 1.25 }}>
      <ListItemAvatar>
        <Avatar src={'/src/assets/images/users/avatar-{index + 1}.png'} />
      </ListItemAvatar>
      <ListItemText primary={email} />
    </ListItemButton>
  ))}
  <ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')} sx={{ p: 1.25 }}>
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: 'primary.lighter', color: 'primary.main', width: 32, height: 32 }}>
        <Add style={{ fontSize: '0.625rem' }} />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Add Account" />
  </ListItemButton>
</List>
</Dialog>`,children:e.jsx(mt,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Alert",codeString:`// AlertDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open alert dialog
</Button>
<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
<Box sx={{ p: 1, py: 1.5 }}>
  <DialogTitle id="alert-dialog-title">Use Google&apos;s location service?</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button color="error" onClick={handleClose}>
      Disagree
    </Button>
    <Button variant="contained" onClick={handleClose} autoFocus>
      Agree
    </Button>
  </DialogActions>
</Box>
</Dialog>`,children:e.jsx(ft,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Form",codeString:`// FormDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open form dialog
</Button>
<Dialog open={open} onClose={handleClose}>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
      </DialogContentText>
      <TextField id="name" placeholder="Email Address" type="email" fullWidth variant="outlined" />
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Subscribe
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:e.jsx(xt,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Transitions",codeString:` // TransitionsDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Slide in dialog
</Button>
<Dialog
  open={open}
  TransitionComponent={Transition}
  keepMounted
  onClose={handleClose}
  aria-describedby="alert-dialog-slide-description"
>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Use Google&apos;ss location service?</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Disagree
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Agree
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:e.jsx(Ct,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Customized",codeString:`// CustomizedDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open dialog
</Button>
<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
    Modal Title
  </BootstrapDialogTitle>
  <DialogContent dividers sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
      porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
      sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
      odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </Typography>
  </DialogContent>
  <DialogActions>
    <Button variant="contained" autoFocus onClick={handleClose}>
      Save changes
    </Button>
  </DialogActions>
</BootstrapDialog>`,children:e.jsx(vt,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Full Screen",codeString:`// FullScreenDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open full-screen dialog
</Button>
<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
  <AppBar sx={{ position: 'relative' }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
        <CloseOutlined />
      </IconButton>
      <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
        Set Backup Account
      </Typography>
      <Button autoFocus color="inherit" onClick={handleClose}>
        save
      </Button>
    </Toolbar>
  </AppBar>
  <List sx={{ p: 3 }}>
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={avatarImage('./avatar-1.png')} />
      </ListItemAvatar>
      <ListItemText primary="Phone ringtone" secondary="Default" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={avatarImage('./avatar-2.png')} />
      </ListItemAvatar>
      <ListItemText primary="Default notification ringtone" secondary="Tethys" />
    </ListItem>
  </List>
</Dialog>`,children:e.jsx(bt,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Sizes",codeString:`// SizesDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open max-width dialog
</Button>
<Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Optional sizes</DialogTitle>
    <DialogContent>
      <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
      <Grid container spacing={1.5} alignItems="center" sx={{ mt: 1 }}>
        <Grid item>
          <Typography variant="h6">Max Width :</Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              autoFocus
              value={maxWidth}
              onChange={handleMaxWidthChange}
              inputProps={{
                name: 'max-width',
                id: 'max-width'
              }}
            >
              <MenuItem value={false as any}>false</MenuItem>
              <MenuItem value="xs">xs</MenuItem>
              <MenuItem value="sm">sm</MenuItem>
              <MenuItem value="md">md</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
              <MenuItem value="xl">xl</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={1.5} alignItems="center" sx={{ mt: 0.25 }}>
        <Grid item>
          <Typography variant="h6">Full Width:</Typography>
        </Grid>
        <Grid item>
          <Switch checked={fullWidth} onChange={handleFullWidthChange} />
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button variant="outlined" color="error" onClick={handleClose}>
        Close
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:e.jsx(St,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Responsive",codeString:`// ResponsiveDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open responsive dialog
</Button>
<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle id="responsive-dialog-title">Use Google&apos;s location service?</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Disagree
      </Button>
      <Button variant="contained" onClick={handleClose} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:e.jsx(jt,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Draggable",codeString:`// DraggableDialog
<Button variant="contained" onClick={handleClickOpen}>
  Open draggable dialog
</Button>
<Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title">
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
      Subscribe
    </DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
      </DialogContentText>
      <TextField id="name" placeholder="Email Address" type="email" fullWidth variant="outlined" />
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Subscribe
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:e.jsx(Lt,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Scrolling",codeString:`// ScrollDialog.tsx
<Button variant="contained" onClick={handleClickOpen('paper')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
  scroll=paper
</Button>
<Button variant="outlined" onClick={handleClickOpen('body')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
  scroll=body
</Button>
<Dialog
  open={open}
  onClose={handleClose}
  scroll={scroll}
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description"
>
  <Grid container spacing={2} justifyContent="space-between" alignItems="center">
    <Grid item>
      <DialogTitle>Subscribe</DialogTitle>
    </Grid>
    <Grid item sx={{ mr: 1.5 }}>
      <IconButton color="secondary" onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
    </Grid>
  </Grid>
  <DialogContent dividers>
    <Grid container spacing={1.25}>
      {[...new Array(25)].map((i, index) => (
        <Grid item key={'{index}-{scroll}'}>
          <Typography variant="h6">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </Typography>
        </Grid>
      ))}
    </Grid>
  </DialogContent>
  <DialogActions>
    <Button color="error" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
      Subscribe
    </Button>
  </DialogActions>
</Dialog>`,children:e.jsx(Et,{})})}),e.jsx(B,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(L,{title:"Confirmation",codeString:`// ConfirmationDialog.tsx
<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <List role="group">
    <ListItem button divider disabled>
      <ListItemText primary="Interruptions" />
    </ListItem>
    <ListItem
      button
      divider
      aria-haspopup="true"
      aria-controls="ringtone-menu"
      aria-label="phone ringtone"
      onClick={handleClickListItem}
    >
      <ListItemText primary="Phone Ringtone" secondary={value} />
    </ListItem>
    <ListItem button divider disabled>
      <ListItemText primary="Default Notification Ringtone" secondary="Tethys" />
    </ListItem>
    <ConfirmationDialogRaw id="ringtone-menu" keepMounted open={open} onClose={handleClose} value={value} />
  </List>
</Box>
<Dialog
  sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
  maxWidth={matchDownMD ? 'sm' : 'lg'}
  TransitionProps={{ onEntering: handleEntering }}
  open={open}
  {...other}
>
  <DialogTitle>Phone Ringtone</DialogTitle>
  <DialogContent dividers>
    <RadioGroup row={!matchDownMD} ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
      {options.map((option) => (
        <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>
  </DialogContent>
  <DialogActions>
    <Button color="error" autoFocus onClick={handleCancel}>
      Cancel
    </Button>
    <Button variant="contained" onClick={handleOk} sx={{ mr: 0.5 }}>
      Done
    </Button>
  </DialogActions>
</Dialog>`,children:e.jsx(_t,{})})})]})})]})}export{zt as default};
