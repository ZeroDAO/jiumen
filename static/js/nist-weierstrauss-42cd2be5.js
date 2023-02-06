import{m as b}from"./bigint-mod-arith-b3f31a89.js";import{r as m,h as g}from"./multiformats-412ad19c.js";function E(t,n){for(let r=0;r<t.byteLength;r++){if(t[r]<n[r])return-1;if(t[r]>n[r])return 1}return t.byteLength>n.byteLength?1:t.byteLength<n.byteLength?-1:0}var I=E;function S(t,n){n||(n=t.reduce((o,u)=>o+u.length,0));const r=new Uint8Array(n);let e=0;for(const o of t)r.set(o,e),e+=o.length;return r}var B=S;function O(t,n){if(t===n)return!0;if(t.byteLength!==n.byteLength)return!1;for(let r=0;r<t.byteLength;r++)if(t[r]!==n[r])return!1;return!0}var T=O;const{bases:h}=m;function p(t,n,r,e){return{name:t,prefix:n,encoder:{name:t,prefix:n,encode:r},decoder:{decode:e}}}const w=p("utf8","u",t=>{const n=new TextDecoder("utf8");return"u"+n.decode(t)},t=>new TextEncoder().encode(t.substring(1))),l=p("ascii","a",t=>{let n="a";for(let r=0;r<t.length;r++)n+=String.fromCharCode(t[r]);return n},t=>{t=t.substring(1);const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}),$={utf8:w,"utf-8":w,hex:h.base16,latin1:l,ascii:l,binary:l,...h};var d=$;const A=d;function P(t,n="utf8"){const r=A[n];if(!r)throw new Error(`Unsupported encoding "${n}"`);return r.decoder.decode(`${r.prefix}${t}`)}var U=P;const v=d;function j(t,n="utf8"){const r=v[n];if(!r)throw new Error(`Unsupported encoding "${n}"`);return r.encoder.encode(t).substring(1)}var L=j;function C(t,n){if(t.length!==n.length)throw new Error("Inputs should have the same length");const r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]^n[e];return r}var _=C;const Y=I,q=B,D=T,F=U,X=L,H=_;var c={compare:Y,concat:q,equals:D,fromString:F,toString:X,xor:H};function M(t){if(!y(t))throw new TypeError("input must be a Uint8Array");return c.toString(t,"base16")}function N(t){if(!x(t))throw new TypeError("input must be string with characters 0-9,A-F,a-f");const n=k(t),r=g.encode(n.xOctet).slice(1),e=g.encode(n.yOctet).slice(1);return{xm:r,ym:e}}function k(t){if(!x(t))throw new TypeError("input must be string with characters 0-9,A-F,a-f");const n=t.slice(0,t.length/2),r=t.slice(t.length/2,t.length),e=c.fromString(n,"base16"),o=c.fromString(r,"base16");return{xOctet:e,yOctet:o}}function x(t){const n=/^[A-Fa-f0-9]+$/i;return!!(n.exec(t)!==null&&n.test(t)&&typeof t=="string")}function y(t){return t==null?!1:t.constructor===Uint8Array}function Q(t){if(t==null)throw new TypeError("input cannot be null or undefined.");if(typeof t!="object")throw new TypeError("Input must be an object with properties x and y");if(!Object.prototype.hasOwnProperty.call(t,"x")||!Object.prototype.hasOwnProperty.call(t,"y"))throw new Error("Input must have properties x and y");if(typeof t.x!="bigint"&&typeof t.y!="bigint")throw new Error("Input coordinates must be BigInt");const n=z(t),r=g.encode(n.xOctet).slice(1),e=g.encode(n.yOctet).slice(1);return{xm:r,ym:e}}function z(t){if(t==null)throw new TypeError("input cannot be null or undefined.");if(typeof t!="object")throw new TypeError("Input must be an object with properties x and y");if(!Object.prototype.hasOwnProperty.call(t,"x")||!Object.prototype.hasOwnProperty.call(t,"y"))throw new Error("Input must have properties x and y");if(typeof t.x!="bigint"&&typeof t.y!="bigint")throw new Error("Input coordinates must be BigInt");const n=t.x.toString(),r=t.y.toString(),e=c.fromString(n,"base10"),o=c.fromString(r,"base10");return{xOctet:e,yOctet:o}}function R(t){if(!y(t))throw new TypeError("input must be a Uint8Array");const n=BigInt(2),r=n**256n-n**224n+n**192n+n**96n-1n,e=41058363725152142129326129780047268409114441015993725554835256314039467401291n,o=(r+1n)/4n,u=BigInt(t[0]-2),a=t.subarray(1),i=BigInt(c.toString(a,"base10")),f=i**3n-i*3n+e;let s=b(f,o,r);return s%2n!==u&&(s=r-s),{x:i,y:s}}function V(t){if(!y(t))throw new TypeError("input must be a Uint8Array");const n=BigInt(2),r=n**384n-n**128n-n**96n+n**32n-1n,e=27580193559959705877849011840389048093056905856361568521428707301988689241309860865136260764883745107765439761230575n,o=(r+1n)/4n,u=BigInt(t[0]-2),a=t.subarray(1),i=BigInt(c.toString(a,"base10")),f=i**3n-i*3n+e;let s=b(f,o,r);return s%2n!==u&&(s=r-s),{x:i,y:s}}function W(t){if(!y(t))throw new TypeError("input must be a Uint8Array");const r=BigInt(2)**521n-1n,e=1093849038073734274511112390766805569936207598951683748994586394495953116150735016013708737573759623248592132296706313309438452531591012912142327488478985984n,o=(r+1n)/4n,u=BigInt(t[0]-2),a=t.subarray(1),i=BigInt(c.toString(a,"base10")),f=i**3n-i*3n+e;let s=b(f,o,r);return s%2n!==u&&(s=r-s),{x:i,y:s}}export{R as E,N as a,Q as b,V as c,W as d,M as p,y as t};
