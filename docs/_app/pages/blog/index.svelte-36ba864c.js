import{S as J,i as z,s as F,e as g,t as w,k,c as b,a as y,h as B,d as v,m as I,b as p,g as L,J as u,j as M,T as A,L as H,W as K}from"../../chunks/vendor-09001308.js";function R(r,e,l){const a=r.slice();return a[1]=e[l],a}function T(r){let e,l=G(r[1].meta.summary,200)+"",a,o,c,i,t;return{c(){e=g("div"),a=w(l),o=k(),c=g("a"),i=g("b"),t=w("Read More"),this.h()},l(n){e=b(n,"DIV",{class:!0});var s=y(e);a=B(s,l),o=I(s),c=b(s,"A",{});var m=y(c);i=b(m,"B",{});var E=y(i);t=B(E,"Read More"),E.forEach(v),m.forEach(v),s.forEach(v),this.h()},h(){p(e,"class","summary svelte-160giyv")},m(n,s){L(n,e,s),u(e,a),u(e,o),u(e,c),u(c,i),u(i,t)},p(n,s){s&1&&l!==(l=G(n[1].meta.summary,200)+"")&&M(a,l)},d(n){n&&v(e)}}}function W(r){let e,l;return{c(){e=g("img"),this.h()},l(a){e=b(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){A(e.src,l=r[1].meta.image)||p(e,"src",l),p(e,"alt",""),p(e,"class","svelte-160giyv")},m(a,o){L(a,e,o)},p(a,o){o&1&&!A(e.src,l=a[1].meta.image)&&p(e,"src",l)},d(a){a&&v(e)}}}function C(r){let e,l,a,o=r[1].meta.title+"",c,i,t,n,s,m=new Date(r[1].meta.date).toLocaleDateString()+"",E,V,P,S,f=r[1].meta.summary&&T(r),h=r[1].meta.image&&W(r);return{c(){e=g("a"),l=g("div"),a=g("h2"),c=w(o),i=k(),f&&f.c(),t=k(),n=g("div"),s=w("Published "),E=w(m),V=k(),h&&h.c(),P=k(),this.h()},l(_){e=b(_,"A",{class:!0,href:!0});var d=y(e);l=b(d,"DIV",{class:!0});var D=y(l);a=b(D,"H2",{class:!0});var q=y(a);c=B(q,o),q.forEach(v),i=I(D),f&&f.l(D),t=I(D),n=b(D,"DIV",{class:!0});var j=y(n);s=B(j,"Published "),E=B(j,m),j.forEach(v),D.forEach(v),V=I(d),h&&h.l(d),P=I(d),d.forEach(v),this.h()},h(){p(a,"class","svelte-160giyv"),p(n,"class","metadata svelte-160giyv"),p(l,"class","text svelte-160giyv"),p(e,"class","post svelte-160giyv"),p(e,"href",S=r[1].path)},m(_,d){L(_,e,d),u(e,l),u(l,a),u(a,c),u(l,i),f&&f.m(l,null),u(l,t),u(l,n),u(n,s),u(n,E),u(e,V),h&&h.m(e,null),u(e,P)},p(_,d){d&1&&o!==(o=_[1].meta.title+"")&&M(c,o),_[1].meta.summary?f?f.p(_,d):(f=T(_),f.c(),f.m(l,t)):f&&(f.d(1),f=null),d&1&&m!==(m=new Date(_[1].meta.date).toLocaleDateString()+"")&&M(E,m),_[1].meta.image?h?h.p(_,d):(h=W(_),h.c(),h.m(e,P)):h&&(h.d(1),h=null),d&1&&S!==(S=_[1].path)&&p(e,"href",S)},d(_){_&&v(e),f&&f.d(),h&&h.d()}}}function N(r){let e,l,a,o,c=r[0],i=[];for(let t=0;t<c.length;t+=1)i[t]=C(R(r,c,t));return{c(){e=g("h1"),l=w("Blog"),a=k(),o=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=b(t,"H1",{});var n=y(e);l=B(n,"Blog"),n.forEach(v),a=I(t),o=b(t,"DIV",{class:!0});var s=y(o);for(let m=0;m<i.length;m+=1)i[m].l(s);s.forEach(v),this.h()},h(){p(o,"class","postList svelte-160giyv")},m(t,n){L(t,e,n),u(e,l),L(t,a,n),L(t,o,n);for(let s=0;s<i.length;s+=1)i[s].m(o,null)},p(t,[n]){if(n&1){c=t[0];let s;for(s=0;s<c.length;s+=1){const m=R(t,c,s);i[s]?i[s].p(m,n):(i[s]=C(m),i[s].c(),i[s].m(o,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=c.length}},i:H,o:H,d(t){t&&v(e),t&&v(a),t&&v(o),K(i,t)}}}const U=async({fetch:r})=>({props:{posts:await(await r("/api/posts.json")).json()}});function G(r,e){return r.length>e?r.substring(0,e)+"...":r}function O(r,e,l){let{posts:a}=e;return r.$$set=o=>{"posts"in o&&l(0,a=o.posts)},[a]}class X extends J{constructor(e){super();z(this,e,O,N,F,{posts:0})}}export{X as default,U as load};
