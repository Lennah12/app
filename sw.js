if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const c=e=>s(e,f),d={module:{uri:f},exports:o,require:c};i[f]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-d37740a6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},{url:"assets/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},{url:"assets/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"},{url:"dexie.min.js",revision:"0a4f76544a13575b6c42bd0a4bc8d48d"},{url:"index.html",revision:"24187addef88bbf67330530ff09d448d"},{url:"index.js",revision:"835975f4ece8544b46829bf28e9e20c9"},{url:"manifest.json",revision:"de7516a0ca6fd8a81b42bfc5a98bb923"},{url:"README.m",revision:"2b9fff6f934cccc9afe42786b4736964"},{url:"README.md",revision:"29062e6325dda0651ef70f90dfacc36f"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
