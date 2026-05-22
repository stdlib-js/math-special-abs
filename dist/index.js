"use strict";var n=function(x,s){return function(){return s||x((s={exports:{}}).exports,s),s.exports}};var d=n(function(G,p){
var t=require('@stdlib/math-base-special-abs/dist'),U=require('@stdlib/math-base-special-absf/dist'),r=require('@stdlib/math-base-special-labs/dist'),u=require('@stdlib/math-base-special-cabs/dist'),h=require('@stdlib/math-base-special-cabsf/dist'),v=require('@stdlib/number-uint32-base-identity/dist'),a=require('@stdlib/number-uint16-base-identity/dist'),e=require('@stdlib/number-uint8-base-identity/dist'),E=[t,t,U,t,t,t,u,u,h,u,u,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,v,v,v,a,a,a,a,a,a,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e];p.exports=E
});var y=n(function(H,P){P.exports=[12,12,12,17,11,11,11,12,11,17,17,17,15,12,15,17,14,11,14,12,14,17,6,6,6,7,6,12,6,17,4,4,4,6,4,5,4,7,4,11,4,12,4,17,1,1,1,4,1,6,1,2,1,3,1,5,1,7,1,11,1,12,1,17,7,7,7,12,7,17,5,6,5,5,5,7,5,11,5,12,5,17,2,4,2,6,2,2,2,3,2,5,2,7,2,11,2,12,2,17,3,4,3,6,3,2,3,3,3,5,3,7,3,11,3,12,3,17]});var f=n(function(I,_){
var g=require('@stdlib/ndarray-dtypes/dist'),R={nargs:2,nin:1,nout:1,idtypes:g("numeric_and_generic"),odtypes:g("real_and_generic"),policies:{output:"real_and_generic",casting:"none"}};_.exports=R
});var j=n(function(J,l){
var k=require('@stdlib/ndarray-dispatch/dist'),b=require('@stdlib/ndarray-base-meta-data-props/dist'),w=require('@stdlib/math-tools-unary/dist'),z=require('@stdlib/ndarray-base-unary/dist'),A=d(),q=y(),i=f(),c=w(k(z,q,A,i.nargs,i.nin,i.nout),[i.idtypes],i.odtypes,i.policies);b(i,q,c);b(i,q,c.assign);l.exports=c
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=j(),o,m=C(B(__dirname,"./native.js"));m instanceof Error?o=D:o=m;module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
