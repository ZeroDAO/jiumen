import{g as u}from"./@antv-806868f3.js";import{f as s}from"./multiformats-412ad19c.js";function l(e){return globalThis.Buffer!=null?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function i(e=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?l(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function d(e,t){t||(t=e.reduce((n,g)=>n+g.length,0));const r=i(t);let o=0;for(const n of e)r.set(n,o),o+=n.length;return l(r)}const h=Object.freeze(Object.defineProperty({__proto__:null,concat:d},Symbol.toStringTag,{value:"Module"}));function a(e,t,r,o){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:o}}}const c=a("utf8","u",e=>{const t=new TextDecoder("utf8");return"u"+t.decode(e)},e=>new TextEncoder().encode(e.substring(1))),f=a("ascii","a",e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e=>{e=e.substring(1);const t=i(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}),b={utf8:c,"utf-8":c,hex:s.base16,latin1:f,ascii:f,binary:f,...s};function m(e,t="utf8"){const r=b[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?l(globalThis.Buffer.from(e,"utf-8")):r.decoder.decode(`${r.prefix}${e}`)}const p=Object.freeze(Object.defineProperty({__proto__:null,fromString:m},Symbol.toStringTag,{value:"Module"}));function T(e,t="utf8"){const r=b[t];if(!r)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):r.encoder.encode(e).substring(1)}const S=Object.freeze(Object.defineProperty({__proto__:null,toString:T},Symbol.toStringTag,{value:"Module"})),B=u(S),y=u(p),w=u(h);export{y as a,w as b,d as c,m as f,B as r,T as t};
