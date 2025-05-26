"use strict";var a=function(E,i){return function(){return i||E((i={exports:{}}).exports,i),i.exports}};var s=a(function(Q,P){P.exports={nargs:2,nin:1,nout:1}});var u=a(function(S,R){R.exports=[11,11,11,15,10,10,10,11,10,15,15,15,6,6,6,7,6,11,6,15,4,4,4,6,4,5,4,7,4,10,4,11,4,15,1,1,1,4,1,6,1,2,1,3,1,5,1,7,1,10,1,11,1,15,7,7,7,11,7,15,5,6,5,5,5,7,5,10,5,11,5,15,2,4,2,6,2,2,2,3,2,5,2,7,2,10,2,11,2,15,3,4,3,6,3,2,3,3,3,5,3,7,3,10,3,11,3,15]});var p=a(function(T,k){k.exports={output_dtype_policy:"same"}});var d=a(function(U,c){
var e=require('@stdlib/math-base-special-abs/dist'),v=require('@stdlib/math-base-special-absf/dist'),t=require('@stdlib/math-base-special-labs/dist'),r=require('@stdlib/number-float64-base-identity/dist'),w=[e,e,v,v,v,e,t,t,t,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r];c.exports=w
});var y=a(function(V,b){
var z=require('@stdlib/math-base-special-abs/dist'),A=require('@stdlib/math-strided-special-abs/dist'),B=require('@stdlib/ndarray-dispatch/dist'),C=require('@stdlib/ndarray-base-unary/dist'),D=u(),n=s(),F=d(),G={number:z,complex:null,array:A,ndarray:B(C,D,F,n.nargs,n.nin,n.nout)};b.exports=G
});var m=a(function(W,l){
var H=require('@stdlib/math-tools-unary/dist'),I=p(),J=y(),K=H(J,I);l.exports=K
});var _=a(function(X,j){
var x=require('@stdlib/ndarray-base-meta-data-props/dist'),f=s(),g=u(),q=m();x(f,g,q);x(f,g,q.assign);j.exports=q
});var L=require("path").join,M=require('@stdlib/utils-try-require/dist'),N=_(),o,h=M(L(__dirname,"./native.js"));h instanceof Error?o=N:o=h;module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
