function w(){}function U(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function L(){return Object.create(null)}function g(t){t.forEach(q)}function B(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function xt(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function bt(t,e){return t!=t?e==e:t!==e}function V(t){return Object.keys(t).length===0}function X(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,n){t.$$.on_destroy.push(X(e,n))}function wt(t,e,n,i){if(t){const r=D(t,e,n,i);return t[0](r)}}function D(t,e,n,i){return t[1]&&i?U(n.ctx.slice(),t[1](i(e))):n.ctx}function Et(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Tt(t,e,n,i,r,u){if(r){const s=D(e,n,i,u);t.p(s,r)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function At(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}let T=!1;function Y(){T=!0}function Z(){T=!1}function tt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:tt(1,r,x=>e[n[x]].claim_order,o))-1;i[c]=n[a]+1;const f=a+1;n[f]=c,r=Math.max(f,r)}const u=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(s[c],a)}}function nt(t,e){if(T){for(et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function it(t,e,n){t.insertBefore(e,n||null)}function rt(t,e,n){T&&!n?nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function Mt(){return j(" ")}function St(){return j("")}function kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function M(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const st=["width","height"];function ct(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&st.indexOf(i)===-1?t[i]=e[i]:M(t,i,e[i])}function Lt(t,e){for(const n in e)M(t,n,e[n])}function lt(t,e){Object.keys(e).forEach(n=>{ot(t,n,e[n])})}function ot(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:M(t,e,n)}function Ot(t){return/-/.test(t)?lt:ct}function ut(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,i,r=!1){F(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function R(t,e,n,i){return I(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ht(t,e,n){return R(t,e,n,G)}function Pt(t,e,n){return R(t,e,n,z)}function ft(t,e){return I(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function Ct(t){return ft(t," ")}function O(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function qt(t,e){const n=O(t,"HTML_TAG_START",0),i=O(t,"HTML_TAG_END",n);if(n===i)return new H(void 0,e);F(t);const r=t.splice(n,i-n+1);E(r[0]),E(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(u,e)}function Bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}class at{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=z(n.nodeName):this.e=G(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)it(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class H extends at{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)rt(this.t,this.n[n],e)}}function Gt(t,e){return new t(e)}let y;function p(t){y=t}function W(){if(!y)throw new Error("Function called outside component initialization");return y}function zt(t){W().$$.on_mount.push(t)}function Ft(t){W().$$.after_update.push(t)}const d=[],P=[];let m=[];const C=[],J=Promise.resolve();let v=!1;function K(){v||(v=!0,J.then(Q))}function It(){return K(),J}function A(t){m.push(t)}const N=new Set;let h=0;function Q(){if(h!==0)return;const t=y;do{try{for(;h<d.length;){const e=d[h];h++,p(e),_t(e.$$)}}catch(e){throw d.length=0,h=0,e}for(p(null),d.length=0,h=0;P.length;)P.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(d.length);for(;C.length;)C.pop()();v=!1,N.clear(),p(t)}function _t(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function ht(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let _;function Rt(){_={r:0,c:[],p:_}}function Wt(){_.r||g(_.c),_=_.p}function dt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Kt(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=e[u];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[u]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Qt(t){return typeof t=="object"&&t!==null?t:{}}function Ut(t){t&&t.c()}function Vt(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||A(()=>{const s=t.$$.on_mount.map(q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),u.forEach(A)}function pt(t,e){const n=t.$$;n.fragment!==null&&(ht(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(d.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,i,r,u,s,l=[-1]){const c=y;p(t);const o=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:L(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(f,x,...S)=>{const k=S.length?S[0]:x;return o.ctx&&r(o.ctx[f],o.ctx[f]=k)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](k),a&&yt(t,f)),x}):[],o.update(),a=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){Y();const f=ut(e.target);o.fragment&&o.fragment.l(f),f.forEach(E)}else o.fragment&&o.fragment.c();e.intro&&dt(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),Z(),Q()}p(c)}class Yt{$destroy(){pt(this,1),this.$destroy=w}$on(e,n){if(!B(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!V(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{mt as A,pt as B,xt as C,nt as D,kt as E,B as F,w as G,g as H,wt as I,Tt as J,Nt as K,Et as L,$t as M,z as N,Pt as O,bt as P,jt as Q,Kt as R,Yt as S,Qt as T,U,Lt as V,H as W,qt as X,Ot as Y,At as Z,vt as _,Mt as a,rt as b,Ct as c,Jt as d,St as e,Wt as f,dt as g,E as h,Xt as i,Ft as j,G as k,Ht as l,ut as m,M as n,zt as o,Dt as p,j as q,ft as r,gt as s,It as t,Bt as u,Rt as v,P as w,Gt as x,Ut as y,Vt as z};
