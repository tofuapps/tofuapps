function h(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(z)}function W(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function J(t){return Object.keys(t).length===0}function K(t,...n){if(t==null)return h;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(K(n,e))}function at(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],u=Math.max(n.dirty.length,c.length);for(let o=0;o<u;o+=1)l[o]=n.dirty[o]|c[o];return l}return n.dirty|c}return n.dirty}function dt(t,n,e,i,c,l){if(c){const u=B(n,e,i,l);t.p(u,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let k=!1;function Q(){k=!0}function R(){k=!1}function U(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:U(1,c,b=>n[e[b]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],u=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);o>=r;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);l.reverse(),u.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<u.length;r++){for(;s<l.length&&u[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(u[r],a)}}function X(t,n){if(k){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){k&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Y(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Z(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function gt(){return A(" ")}function bt(){return A("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t){return function(n){return n.preventDefault(),t.call(this,n)}}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){et(t);const l=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function P(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const l=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];e[o.name]||l.push(o.name)}l.forEach(u=>c.removeAttribute(u))},()=>i(n))}function Et(t,n,e){return P(t,n,e,Z)}function kt(t,n,e){return P(t,n,e,tt)}function it(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Nt(t){return it(t," ")}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function vt(t,n,e){t.classList[e?"add":"remove"](n)}let y;function p(t){y=t}function N(){if(!y)throw new Error("Function called outside component initialization");return y}function At(t){N().$$.on_mount.push(t)}function Ct(t){N().$$.after_update.push(t)}function qt(t,n){N().$$.context.set(t,n)}function Mt(t){return N().$$.context.get(t)}const m=[],L=[],w=[],T=[],D=Promise.resolve();let j=!1;function F(){j||(j=!0,D.then(H))}function Lt(){return F(),D}function v(t){w.push(t)}const S=new Set;let $=0;function H(){const t=y;do{for(;$<m.length;){const n=m[$];$++,p(n),rt(n.$$)}for(p(null),m.length=0,$=0;L.length;)L.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];S.has(e)||(S.add(e),e())}w.length=0}while(m.length);for(;T.length;)T.pop()();j=!1,S.clear(),p(t)}function rt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const E=new Set;let _;function Tt(){_={r:0,c:[],p:_}}function zt(){_.r||g(_.c),_=_.p}function ct(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Ot(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const u=t[l],o=n[l];if(o){for(const r in u)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[l]=o}else for(const r in u)c[r]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function Dt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:u,after_update:o}=t.$$;c&&c.m(n,e),i||v(()=>{const r=l.map(z).filter(W);u?u.push(...r):g(r),t.$$.on_mount=[]}),o.forEach(v)}function ot(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(m.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,c,l,u,o=[-1]){const r=y;p(t);const s=t.$$={fragment:null,ctx:null,props:l,update:h,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};u&&u(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,b,...C)=>{const q=C.length?C[0]:b;return s.ctx&&c(s.ctx[f],s.ctx[f]=q)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](q),a&&st(t,f)),b}):[],s.update(),a=!0,g(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){Q();const f=nt(n.target);s.fragment&&s.fragment.l(f),f.forEach(Y)}else s.fragment&&s.fragment.c();n.intro&&ct(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),R(),H()}p(r)}class It{$destroy(){ot(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function Wt(t,n=h){let e;const i=new Set;function c(o){if(G(t,o)&&(t=o,e)){const r=!d.length;for(const s of i)s[1](),d.push(s,t);if(r){for(let s=0;s<d.length;s+=2)d[s][0](d[s+1]);d.length=0}}}function l(o){c(o(t))}function u(o,r=h){const s=[o,r];return i.add(s),i.size===1&&(e=n(c)||h),o(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:u}}export{Pt as A,ot as B,I as C,Wt as D,Lt as E,Mt as F,tt as G,kt as H,vt as I,X as J,xt as K,h as L,g as M,ft as N,at as O,dt as P,ht as Q,_t as R,It as S,lt as T,$t as U,L as V,yt as W,mt as X,nt as a,wt as b,Et as c,Y as d,Z as e,jt as f,pt as g,it as h,Ht as i,St as j,gt as k,bt as l,Nt as m,Tt as n,Bt as o,zt as p,ct as q,qt as r,G as s,A as t,Ct as u,At as v,Dt as w,Ft as x,ut as y,Ot as z};
