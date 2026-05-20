"use strict";var p=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var v=p(function(B,q){
var g=require('@stdlib/array-base-arraylike2object/dist');function h(a,r,s,o,n,i){var e,t;for(e=o,t=0;t<a.length;t++)r[e]=n.call(i,a[t],t,a),e+=s;return r}function j(a,r,s,o,n,i){var e,t,l,f,u,c;for(e=a.data,t=r.data,l=a.accessors[0],f=r.accessors[1],u=o,c=0;c<e.length;c++)f(t,u,n.call(i,l(e,c),c,e)),u+=s;return r}function P(a,r,s,o,n,i){var e,t;return e=g(a),t=g(r),e.accessorProtocol||t.accessorProtocol?(j(e,t,s,o,n,i),r):h(a,r,s,o,n,i)}q.exports=P
});var m=p(function(C,d){
var k=require('@stdlib/array-base-zeros/dist'),y=v();function z(a,r){return typeof a[r]=="function"}function M(a,r,s){return z(a,"map")?a.map(r,s):y(a,k(a.length),1,0,r,s)}d.exports=M
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=m(),R=v();O(b,"assign",R);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
