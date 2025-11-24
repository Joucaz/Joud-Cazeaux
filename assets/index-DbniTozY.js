var ag=Object.defineProperty;var og=(a,e,t)=>e in a?ag(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Nu=(a,e,t)=>og(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="174",as={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lg=0,ku=1,cg=2,Qf=1,hg=2,wn=3,rn=0,hi=1,_i=2,en=0,os=1,dc=2,Bu=3,zu=4,ug=5,br=100,dg=101,fg=102,pg=103,mg=104,gg=200,_g=201,vg=202,xg=203,fc=204,pc=205,yg=206,bg=207,Sg=208,Mg=209,Tg=210,Eg=211,Ag=212,wg=213,Cg=214,mc=0,gc=1,_c=2,ps=3,vc=4,xc=5,yc=6,bc=7,ep=0,Rg=1,Pg=2,tn=0,wh=1,Ch=2,Do=3,Rh=4,tp=5,ip=6,np=7,Gu="attached",Dg="detached",rp=300,ms=301,gs=302,Sc=303,Mc=304,qo=306,_s=1e3,Zn=1001,Lo=1002,ui=1003,sp=1004,sa=1005,Ct=1006,vo=1007,Dn=1008,Fn=1009,ap=1010,op=1011,xa=1012,Ph=1013,Rr=1014,$i=1015,ki=1016,Dh=1017,Lh=1018,vs=1020,lp=35902,cp=1021,hp=1022,Bi=1023,up=1024,dp=1025,ls=1026,xs=1027,Ih=1028,Uh=1029,fp=1030,Fh=1031,Oh=1033,xo=33776,yo=33777,bo=33778,So=33779,Tc=35840,Ec=35841,Ac=35842,wc=35843,Cc=36196,Rc=37492,Pc=37496,Dc=37808,Lc=37809,Ic=37810,Uc=37811,Fc=37812,Oc=37813,Nc=37814,kc=37815,Bc=37816,zc=37817,Gc=37818,Vc=37819,Hc=37820,Wc=37821,Mo=36492,Xc=36494,jc=36495,pp=36283,Yc=36284,qc=36285,Kc=36286,sn=2200,Zc=2201,Lg=2202,ya=2300,ba=2301,ml=2302,ts=2400,is=2401,Io=2402,Nh=2500,Ig=2501,Ug=0,mp=1,Jc=2,Fg=3200,kh=3201,gp=0,Og=1,Kn="",ot="srgb",ii="srgb-linear",Uo="linear",ct="srgb",Nr=7680,Vu=519,Ng=512,kg=513,Bg=514,_p=515,zg=516,Gg=517,Vg=518,Hg=519,$c=35044,Hu="300 es",Ln=2e3,Fo=2001;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wu=1234567;const ua=Math.PI/180,ys=180/Math.PI;function nn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[a&255]+$t[a>>8&255]+$t[a>>16&255]+$t[a>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Je(a,e,t){return Math.max(e,Math.min(t,a))}function Bh(a,e){return(a%e+e)%e}function Wg(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function Xg(a,e,t){return a!==e?(t-a)/(e-a):0}function da(a,e,t){return(1-t)*a+t*e}function jg(a,e,t,i){return da(a,e,1-Math.exp(-t*i))}function Yg(a,e=1){return e-Math.abs(Bh(a,e*2)-e)}function qg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Kg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Zg(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Jg(a,e){return a+Math.random()*(e-a)}function $g(a){return a*(.5-Math.random())}function Qg(a){a!==void 0&&(Wu=a);let e=Wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e_(a){return a*ua}function t_(a){return a*ys}function i_(a){return(a&a-1)===0&&a!==0}function n_(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function r_(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function s_(a,e,t,i,n){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+i)/2),h=s((e+i)/2),u=r((e-i)/2),d=s((e-i)/2),f=r((i-e)/2),_=s((i-e)/2);switch(n){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*_,l*f,o*c);break;case"YXY":a.set(l*f,o*h,l*_,o*c);break;case"ZYZ":a.set(l*_,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Zi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ht(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const zh={DEG2RAD:ua,RAD2DEG:ys,generateUUID:nn,clamp:Je,euclideanModulo:Bh,mapLinear:Wg,inverseLerp:Xg,lerp:da,damp:jg,pingpong:Yg,smoothstep:qg,smootherstep:Kg,randInt:Zg,randFloat:Jg,randFloatSpread:$g,seededRandom:Qg,degToRad:e_,radToDeg:t_,isPowerOfTwo:i_,ceilPowerOfTwo:n_,floorPowerOfTwo:r_,setQuaternionFromProperEuler:s_,normalize:ht,denormalize:Zi};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,n,r,s,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c)}set(e,t,i,n,r,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],p=n[3],m=n[6],x=n[1],y=n[4],v=n[7],M=n[2],A=n[5],T=n[8];return r[0]=s*g+o*x+l*M,r[3]=s*p+o*y+l*A,r[6]=s*m+o*v+l*T,r[1]=c*g+h*x+u*M,r[4]=c*p+h*y+u*A,r[7]=c*m+h*v+u*T,r[2]=d*g+f*x+_*M,r[5]=d*p+f*y+_*A,r[8]=d*m+f*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*r*h+i*o*l+n*r*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*r,f=c*r-s*l,_=t*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(o*i-n*s)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*r-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new qe;function vp(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Sa(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function a_(){const a=Sa("canvas");return a.style.display="block",a}const Xu={};function vr(a){a in Xu||(Xu[a]=!0,console.warn(a))}function o_(a,e,t){return new Promise(function(i,n){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function l_(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function c_(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ju=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h_(){const a={enabled:!0,workingColorSpace:ii,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ct&&(n.r=Un(n.r),n.g=Un(n.g),n.b=Un(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ct&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Kn?Uo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[ii]:{primaries:e,whitePoint:i,transfer:Uo,toXYZ:ju,fromXYZ:Yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:ju,fromXYZ:Yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}}),a}const tt=h_();function Un(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function cs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let kr;class u_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kr===void 0&&(kr=Sa("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=kr}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Un(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d_=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=nn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?r.push(_l(n[s].image)):r.push(_l(n[s]))}else r=_l(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function _l(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?u_.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f_=0;class Lt extends sr{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Zn,n=Zn,r=Ct,s=Dn,o=Bi,l=Fn,c=Lt.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=nn(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=rp;Lt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,n=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,M=(m+1)/2,A=(h+d)/4,T=(u+g)/4,C=(_+p)/4;return y>v&&y>M?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=A/i,r=T/i):v>M?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=A/n,r=C/n):M<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(M),i=T/r,n=C/r),this.set(i,n,r,t),this}let x=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p_ extends sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Lt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gh(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends p_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xp extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m_ extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[s+0],f=r[s+1],_=r[s+2],g=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let p=1-o;const m=l*d+c*f+h*_+u*g,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const M=Math.sqrt(y),A=Math.atan2(M,m*x);p=Math.sin(p*A)/M,o=Math.sin(o*A)/M}const v=o*x;if(l=l*p+d*v,c=c*p+f*v,h=h*p+_*v,u=u*p+g*v,p===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,s){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[s],d=r[s+1],f=r[s+2],_=r[s+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),_=l(r/2);switch(s){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(s-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+s)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+s)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(s-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+n*c-r*l,this._y=n*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-n*o,this._w=s*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),h=2*(o*t-r*n),u=2*(r*i-s*t);return this.x=t+l*c+s*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new H,qu=new Pi;class on{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Yi):Yi.fromBufferAttribute(r,s),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Ga.subVectors(this.max,qs),Br.subVectors(e.a,qs),zr.subVectors(e.b,qs),Gr.subVectors(e.c,qs),Gn.subVectors(zr,Br),Vn.subVectors(Gr,zr),lr.subVectors(Br,Gr);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-lr.z,lr.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,lr.z,0,-lr.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-lr.y,lr.x,0];return!xl(t,Br,zr,Gr,Ga)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Br,zr,Gr,Ga))?!1:(Va.crossVectors(Gn,Vn),t=[Va.x,Va.y,Va.z],xl(t,Br,zr,Gr,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new H,new H,new H,new H,new H,new H,new H,new H],Yi=new H,za=new on,Br=new H,zr=new H,Gr=new H,Gn=new H,Vn=new H,lr=new H,qs=new H,Ga=new H,Va=new H,cr=new H;function xl(a,e,t,i,n){for(let r=0,s=a.length-3;r<=s;r+=3){cr.fromArray(a,r);const o=n.x*Math.abs(cr.x)+n.y*Math.abs(cr.y)+n.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),h=i.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const g_=new on,Ks=new H,yl=new H;class ln{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):g_.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ks,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(yl)),this.expandByPoint(Ks.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new H,bl=new H,Ha=new H,Hn=new H,Sl=new H,Wa=new H,Ml=new H;class Ds{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){bl.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(bl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ha),o=Hn.dot(this.direction),l=-Hn.dot(Ha),c=Hn.lengthSq(),h=Math.abs(1-s*s);let u,d,f,_;if(h>0)if(u=s*l-o,d=s*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=r,u=Math.max(0,-(s*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(s*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-s*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(s*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=s>0?-r:r,u=Math.max(0,-(s*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(bl).addScaledVector(Ha,d),f}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),n=Sn.dot(Sn)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,n,r){Sl.subVectors(t,e),Wa.subVectors(i,e),Ml.crossVectors(Sl,Wa);let s=this.direction.dot(Ml),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Hn.subVectors(this.origin,e);const l=o*this.direction.dot(Wa.crossVectors(Hn,Wa));if(l<0)return null;const c=o*this.direction.dot(Sl.cross(Hn));if(c<0||l+c>s)return null;const h=-o*Hn.dot(Ml);return h<0?null:this.at(h/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,i,n,r,s,o,l,c,h,u,d,f,_,g,p){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c,h,u,d,f,_,g,p)}set(e,t,i,n,r,s,o,l,c,h,u,d,f,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=r,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Vr.setFromMatrixColumn(e,0).length(),r=1/Vr.setFromMatrixColumn(e,1).length(),s=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=s*h,f=s*u,_=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*o,t[4]=_*o-f,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*o,t[4]=-s*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=s*h,t[9]=g-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,f=s*u,_=o*h,g=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=s*l,f=s*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=s*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(__,e,v_)}lookAt(e,t,i){const n=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Wn.crossVectors(i,Ei),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Wn.crossVectors(i,Ei)),Wn.normalize(),Xa.crossVectors(Ei,Wn),n[0]=Wn.x,n[4]=Xa.x,n[8]=Ei.x,n[1]=Wn.y,n[5]=Xa.y,n[9]=Ei.y,n[2]=Wn.z,n[6]=Xa.z,n[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],p=i[10],m=i[14],x=i[3],y=i[7],v=i[11],M=i[15],A=n[0],T=n[4],C=n[8],b=n[12],S=n[1],D=n[5],P=n[9],L=n[13],F=n[2],G=n[6],k=n[10],Z=n[14],W=n[3],J=n[7],q=n[11],U=n[15];return r[0]=s*A+o*S+l*F+c*W,r[4]=s*T+o*D+l*G+c*J,r[8]=s*C+o*P+l*k+c*q,r[12]=s*b+o*L+l*Z+c*U,r[1]=h*A+u*S+d*F+f*W,r[5]=h*T+u*D+d*G+f*J,r[9]=h*C+u*P+d*k+f*q,r[13]=h*b+u*L+d*Z+f*U,r[2]=_*A+g*S+p*F+m*W,r[6]=_*T+g*D+p*G+m*J,r[10]=_*C+g*P+p*k+m*q,r[14]=_*b+g*L+p*Z+m*U,r[3]=x*A+y*S+v*F+M*W,r[7]=x*T+y*D+v*G+M*J,r[11]=x*C+y*P+v*k+M*q,r[15]=x*b+y*L+v*Z+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*u-n*c*u-r*o*d+i*c*d+n*o*f-i*l*f)+g*(+t*l*f-t*c*d+r*s*d-n*s*f+n*c*h-r*l*h)+p*(+t*c*u-t*o*f-r*s*u+i*s*f+r*o*h-i*c*h)+m*(-n*o*h-t*l*u+t*o*d+n*s*u-i*s*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],x=u*p*c-g*d*c+g*l*f-o*p*f-u*l*m+o*d*m,y=_*d*c-h*p*c-_*l*f+s*p*f+h*l*m-s*d*m,v=h*g*c-_*u*c+_*o*f-s*g*f-h*o*m+s*u*m,M=_*u*l-h*g*l-_*o*d+s*g*d+h*o*p-s*u*p,A=t*x+i*y+n*v+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(g*d*r-u*p*r-g*n*f+i*p*f+u*n*m-i*d*m)*T,e[2]=(o*p*r-g*l*r+g*n*c-i*p*c-o*n*m+i*l*m)*T,e[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*f-i*l*f)*T,e[4]=y*T,e[5]=(h*p*r-_*d*r+_*n*f-t*p*f-h*n*m+t*d*m)*T,e[6]=(_*l*r-s*p*r-_*n*c+t*p*c+s*n*m-t*l*m)*T,e[7]=(s*d*r-h*l*r+h*n*c-t*d*c-s*n*f+t*l*f)*T,e[8]=v*T,e[9]=(_*u*r-h*g*r-_*i*f+t*g*f+h*i*m-t*u*m)*T,e[10]=(s*g*r-_*o*r+_*i*c-t*g*c-s*i*m+t*o*m)*T,e[11]=(h*o*r-s*u*r-h*i*c+t*u*c+s*i*f-t*o*f)*T,e[12]=M*T,e[13]=(h*g*n-_*u*n+_*i*d-t*g*d-h*i*p+t*u*p)*T,e[14]=(_*o*n-s*g*n-_*i*l+t*g*l+s*i*p-t*o*p)*T,e[15]=(s*u*n-h*o*n+h*i*l-t*u*l-s*i*d+t*o*d)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*s,0,c*l-n*o,h*l+n*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,h=s+s,u=o+o,d=r*c,f=r*h,_=r*u,g=s*h,p=s*u,m=o*u,x=l*c,y=l*h,v=l*u,M=i.x,A=i.y,T=i.z;return n[0]=(1-(g+m))*M,n[1]=(f+v)*M,n[2]=(_-y)*M,n[3]=0,n[4]=(f-v)*A,n[5]=(1-(d+m))*A,n[6]=(p+x)*A,n[7]=0,n[8]=(_+y)*T,n[9]=(p-x)*T,n[10]=(1-(d+g))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Vr.set(n[0],n[1],n[2]).length();const s=Vr.set(n[4],n[5],n[6]).length(),o=Vr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],qi.copy(this);const c=1/r,h=1/s,u=1/o;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=h,qi.elements[5]*=h,qi.elements[6]*=h,qi.elements[8]*=u,qi.elements[9]*=u,qi.elements[10]*=u,t.setFromRotationMatrix(qi),i.x=r,i.y=s,i.z=o,this}makePerspective(e,t,i,n,r,s,o=Ln){const l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let f,_;if(o===Ln)f=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===Fo)f=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=Ln){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(s-r),d=(t+e)*c,f=(i+n)*h;let _,g;if(o===Ln)_=(s+r)*u,g=-2*u;else if(o===Fo)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vr=new H,qi=new Ye,__=new H(0,0,0),v_=new H(1,1,1),Wn=new H,Xa=new H,Ei=new H,Ku=new Ye,Zu=new Pi;class _n{constructor(e=0,t=0,i=0,n=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x_=0;const Ju=new H,Hr=new Pi,Mn=new Ye,ja=new H,Zs=new H,y_=new H,b_=new Pi,$u=new H(1,0,0),Qu=new H(0,1,0),ed=new H(0,0,1),td={type:"added"},S_={type:"removed"},Wr={type:"childadded",child:null},Tl={type:"childremoved",child:null};class Mt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new H,t=new _n,i=new Pi,n=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ye},normalMatrix:{value:new qe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Zs,ja,this.up):Mn.lookAt(ja,Zs,this.up),this.quaternion.setFromRotationMatrix(Mn),n&&(Mn.extractRotation(n.matrixWorld),Hr.setFromRotationMatrix(Mn),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S_),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,b_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),f=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Mt.DEFAULT_UP=new H(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new H,Tn=new H,El=new H,En=new H,Xr=new H,jr=new H,id=new H,Al=new H,wl=new H,Cl=new H,Rl=new at,Pl=new at,Dl=new at;class Ji{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ki.subVectors(e,t),n.cross(Ki);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Ki.subVectors(n,t),Tn.subVectors(i,t),El.subVectors(e,t);const s=Ki.dot(Ki),o=Ki.dot(Tn),l=Ki.dot(El),c=Tn.dot(Tn),h=Tn.dot(El),u=s*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,_=(s*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,n,r,s,o,l){return this.getBarycoord(e,t,i,n,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(s,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,i,n,r,s){return Rl.setScalar(0),Pl.setScalar(0),Dl.setScalar(0),Rl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,i),Dl.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Rl,r.x),s.addScaledVector(Pl,r.y),s.addScaledVector(Dl,r.z),s}static isFrontFacing(e,t,i,n){return Ki.subVectors(i,t),Tn.subVectors(e,t),Ki.cross(Tn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),Ki.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Ji.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let s,o;Xr.subVectors(n,i),jr.subVectors(r,i),Al.subVectors(e,i);const l=Xr.dot(Al),c=jr.dot(Al);if(l<=0&&c<=0)return t.copy(i);wl.subVectors(e,n);const h=Xr.dot(wl),u=jr.dot(wl);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Xr,s);Cl.subVectors(e,r);const f=Xr.dot(Cl),_=jr.dot(Cl);if(_>=0&&f<=_)return t.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(jr,o);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return id.subVectors(r,n),o=(u-h)/(u-h+(f-_)),t.copy(n).addScaledVector(id,o);const m=1/(p+g+d);return s=g*m,o=d*m,t.copy(i).addScaledVector(Xr,s).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Ll(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=Bh(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Ll(s,r,e+1/3),this.g=Ll(s,r,e),this.b=Ll(s,r,e-1/3)}return tt.toWorkingColorSpace(this,n),this}setStyle(e,t=ot){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){const i=yp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return tt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Je(Qt.r*255,0,255))*65536+Math.round(Je(Qt.g*255,0,255))*256+Math.round(Je(Qt.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,n=Qt.g,r=Qt.b,s=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ot){tt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,n=Qt.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Ya);const i=da(Xn.h,Ya.h,t),n=da(Xn.s,Ya.s,t),r=da(Xn.l,Ya.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Be;Be.NAMES=yp;let M_=0;class mn extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=os,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==pc&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gt extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new H,qa=new Ue;let T_=0;class Vt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$c,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$c&&(e.usage=this.usage),e}}class bp extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sp extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ht extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let E_=0;const Fi=new Ye,Il=new Mt,Yr=new H,Ai=new on,Js=new on,zt=new H;class ni extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vp(e)?Sp:bp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,i){return Fi.makeTranslation(e,t,i),this.applyMatrix4(Fi),this}scale(e,t,i){return Fi.makeScale(e,t,i),this.applyMatrix4(Fi),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Ai.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Ai.min,Js.min),Ai.expandByPoint(zt),zt.addVectors(Ai.max,Js.max),Ai.expandByPoint(zt)):(Ai.expandByPoint(Js.min),Ai.expandByPoint(Js.max))}Ai.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)zt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(zt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(Yr.fromBufferAttribute(e,c),zt.add(Yr)),n=Math.max(n,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new H,l[C]=new H;const c=new H,h=new H,u=new H,d=new Ue,f=new Ue,_=new Ue,g=new H,p=new H;function m(C,b,S){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(D),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),o[C].add(g),o[b].add(g),o[S].add(g),l[C].add(p),l[b].add(p),l[S].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,b=x.length;C<b;++C){const S=x[C],D=S.start,P=S.count;for(let L=D,F=D+P;L<F;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new H,v=new H,M=new H,A=new H;function T(C){M.fromBufferAttribute(n,C),A.copy(M);const b=o[C];y.copy(b),y.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(A,b);const D=v.dot(l[C])<0?-1:1;s.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,b=x.length;C<b;++C){const S=x[C],D=S.start,P=S.count;for(let L=D,F=D+P;L<F;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new H,r=new H,s=new H,o=new H,l=new H,c=new H,h=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),h.subVectors(s,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new Vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new Ye,hr=new Ds,Ka=new ln,rd=new H,Za=new H,Ja=new H,$a=new H,Ul=new H,Qa=new H,sd=new H,eo=new H;class st extends Mt{constructor(e=new ni,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ul.fromBufferAttribute(u,e),s?Qa.addScaledVector(Ul,h):Qa.addScaledVector(Ul.sub(t),h))}t.add(Qa)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(Ka.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Ka,rd)===null||hr.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(nd.copy(r).invert(),hr.copy(e.ray).applyMatrix4(nd),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=s[p.materialIndex],x=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=x,M=y;v<M;v+=3){const A=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);n=to(this,m,e,i,c,h,u,A,T,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const x=o.getX(p),y=o.getX(p+1),v=o.getX(p+2);n=to(this,s,e,i,c,h,u,x,y,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=s[p.materialIndex],x=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=x,M=y;v<M;v+=3){const A=v,T=v+1,C=v+2;n=to(this,m,e,i,c,h,u,A,T,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const x=p,y=p+1,v=p+2;n=to(this,s,e,i,c,h,u,x,y,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function A_(a,e,t,i,n,r,s,o){let l;if(e.side===hi?l=i.intersectTriangle(s,r,n,!0,o):l=i.intersectTriangle(n,r,s,e.side===rn,o),l===null)return null;eo.copy(o),eo.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:a}}function to(a,e,t,i,n,r,s,o,l,c){a.getVertexPosition(o,Za),a.getVertexPosition(l,Ja),a.getVertexPosition(c,$a);const h=A_(a,e,t,i,Za,Ja,$a,sd);if(h){const u=new H;Ji.getBarycoord(sd,Za,Ja,$a,u),n&&(h.uv=Ji.getInterpolatedAttribute(n,o,l,c,u,new Ue)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,o,l,c,u,new Ue)),s&&(h.normal=Ji.getInterpolatedAttribute(s,o,l,c,u,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};Ji.getNormal(Za,Ja,$a,d.normal),h.face=d,h.barycoord=u}return h}class Ls extends ni{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};const o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,s,r,0),_("z","y","x",1,-1,i,t,-e,s,r,1),_("x","z","y",1,1,e,i,t,n,s,2),_("x","z","y",1,-1,e,i,-t,n,s,3),_("x","y","z",1,-1,e,t,i,n,r,4),_("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function _(g,p,m,x,y,v,M,A,T,C,b){const S=v/T,D=M/C,P=v/2,L=M/2,F=A/2,G=T+1,k=C+1;let Z=0,W=0;const J=new H;for(let q=0;q<k;q++){const U=q*D-L;for(let X=0;X<G;X++){const ee=X*S-P;J[g]=ee*x,J[p]=U*y,J[m]=F,c.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[m]=A>0?1:-1,h.push(J.x,J.y,J.z),u.push(X/T),u.push(1-q/C),Z+=1}}for(let q=0;q<C;q++)for(let U=0;U<T;U++){const X=d+U+G*q,ee=d+U+G*(q+1),O=d+(U+1)+G*(q+1),B=d+(U+1)+G*q;l.push(X,ee,B),l.push(ee,O,B),W+=6}o.addGroup(f,W,b),f+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const n=a[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function ai(a){const e={};for(let t=0;t<a.length;t++){const i=bs(a[t]);for(const n in i)e[n]=i[n]}return e}function w_(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Mp(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Is={clone:bs,merge:ai};var C_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let Tp=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const jn=new H,ad=new Ue,od=new Ue;class li extends Tp{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,ad,od),t.subVectors(od,ad)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,Kr=1;class P_ extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new li(qr,Kr,e,t);n.layers=this.layers,this.add(n);const r=new li(qr,Kr,e,t);r.layers=this.layers,this.add(r);const s=new li(qr,Kr,e,t);s.layers=this.layers,this.add(s);const o=new li(qr,Kr,e,t);o.layers=this.layers,this.add(o);const l=new li(qr,Kr,e,t);l.layers=this.layers,this.add(l);const c=new li(qr,Kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hh extends Lt{constructor(e,t,i,n,r,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,i,n,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D_ extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Hh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ls(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:en});r.uniforms.tEquirect.value=t;const s=new st(n,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Ct),new P_(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}class Qi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ld extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class I_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$c,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const si=new H;class Wh{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyMatrix4(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyNormalMatrix(e),this.setXYZ(t,si.x,si.y,si.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.transformDirection(e),this.setXYZ(t,si.x,si.y,si.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cd=new H,hd=new at,ud=new at,U_=new H,dd=new Ye,io=new H,Ol=new ln,fd=new Ye,Nl=new Ds;class Ep extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gu,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(n),e.ray.intersectsSphere(Ol)!==!1&&(fd.copy(n).invert(),Nl.copy(e.ray).applyMatrix4(fd),!(this.boundingBox!==null&&Nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;hd.fromBufferAttribute(n.attributes.skinIndex,e),ud.fromBufferAttribute(n.attributes.skinWeight,e),cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=ud.getComponent(r);if(s!==0){const o=hd.getComponent(r);dd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(U_.copy(cd).applyMatrix4(dd),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ap extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wp extends Lt{constructor(e=null,t=1,i=1,n,r,s,o,l,c=ui,h=ui,u,d){super(null,s,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pd=new Ye,F_=new Ye;class Xh{constructor(e=[],t=[]){this.uuid=nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:F_;pd.multiplyMatrices(o,t[r]),pd.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Xh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new wp(t,e,e,Bi,$i);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Ap),this.bones.push(s),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const s=t[n];e.bones.push(s.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class Oo extends Vt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zr=new Ye,md=new Ye,no=[],gd=new on,O_=new Ye,$s=new st,Qs=new ln;class Cp extends st{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,O_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zr),gd.copy(e.boundingBox).applyMatrix4(Zr),this.boundingBox.union(gd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zr),Qs.copy(e.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(i),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Zr),md.multiplyMatrices(i,Zr),$s.matrixWorld=md,$s.raycast(e,no);for(let s=0,o=no.length;s<o;s++){const l=no[s];l.instanceId=r,l.object=this,t.push(l)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new wp(new Float32Array(n*this.count),n,this.count,Ih,$i));const r=this.morphTexture.source.data.data;let s=0;for(let c=0;c<i.length;c++)s+=i[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kl=new H,N_=new H,k_=new qe;class qn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=kl.subVectors(i,t).cross(N_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(kl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||k_.getNormalMatrix(e),n=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new ln,ro=new H;class jh{constructor(e=new qn,t=new qn,i=new qn,n=new qn,r=new qn,s=new qn){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],_=n[9],g=n[10],p=n[11],m=n[12],x=n[13],y=n[14],v=n[15];if(i[0].setComponents(l-r,d-c,p-f,v-m).normalize(),i[1].setComponents(l+r,d+c,p+f,v+m).normalize(),i[2].setComponents(l+s,d+h,p+_,v+x).normalize(),i[3].setComponents(l-s,d-h,p-_,v-x).normalize(),i[4].setComponents(l-o,d-u,p-g,v-y).normalize(),t===Ln)i[5].setComponents(l+o,d+u,p+g,v+y).normalize();else if(t===Fo)i[5].setComponents(o,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(ro.x=n.normal.x>0?e.max.x:e.min.x,ro.y=n.normal.y>0?e.max.y:e.min.y,ro.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ko extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new H,ko=new H,_d=new Ye,ea=new Ds,so=new ln,Bl=new H,vd=new H;class Yh extends Mt{constructor(e=new ni,t=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)No.fromBufferAttribute(t,n-1),ko.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=No.distanceTo(ko);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(n),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;_d.copy(n).invert(),ea.copy(e.ray).applyMatrix4(_d);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,s.start),_=Math.min(h.count,s.start+s.count);for(let g=f,p=_-1;g<p;g+=c){const m=h.getX(g),x=h.getX(g+1),y=ao(this,e,ea,l,m,x,g);y&&t.push(y)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(f),m=ao(this,e,ea,l,g,p,_-1);m&&t.push(m)}}else{const f=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let g=f,p=_-1;g<p;g+=c){const m=ao(this,e,ea,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=ao(this,e,ea,l,_-1,f,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ao(a,e,t,i,n,r,s){const o=a.geometry.attributes.position;if(No.fromBufferAttribute(o,n),ko.fromBufferAttribute(o,r),t.distanceSqToSegment(No,ko,Bl,vd)>i)return;Bl.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Bl);if(!(c<e.near||c>e.far))return{distance:c,point:vd.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}const xd=new H,yd=new H;class qh extends Yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)xd.fromBufferAttribute(t,n),yd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+xd.distanceTo(yd);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B_ extends Yh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rp extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bd=new Ye,Qc=new Ds,oo=new ln,lo=new H;class z_ extends Mt{constructor(e=new ni,t=new Rp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(n),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;bd.copy(n).invert(),Qc.copy(e.ray).applyMatrix4(bd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let _=d,g=f;_<g;_++){const p=c.getX(_);lo.fromBufferAttribute(u,p),Sd(lo,p,l,n,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(u.count,s.start+s.count);for(let _=d,g=f;_<g;_++)lo.fromBufferAttribute(u,_),Sd(lo,_,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sd(a,e,t,i,n,r,s){const o=Qc.distanceSqToPoint(a);if(o<t){const l=new H;Qc.closestPointToPoint(a,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Md extends Lt{constructor(e,t,i,n,r,s,o,l,c){super(e,t,i,n,r,s,o,l,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:Ct,this.magFilter=r!==void 0?r:Ct,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Pp extends Lt{constructor(e,t,i,n,r,s,o,l,c,h=ls){if(h!==ls&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ls&&(i=Rr),i===void 0&&h===xs&&(i=vs),super(null,n,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ui,this.minFilter=l!==void 0?l:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dr extends ni{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const x=m*d-s;for(let y=0;y<c;y++){const v=y*u-r;_.push(v,-x,0),g.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const y=x+c*m,v=x+c*(m+1),M=x+1+c*(m+1),A=x+1+c*m;f.push(y,v,A),f.push(v,M,A)}this.setIndex(f),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(g,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kh extends ni{constructor(e=.5,t=1,i=32,n=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/n,f=new H,_=new Ue;for(let g=0;g<=n;g++){for(let p=0;p<=i;p++){const m=r+p/i*s;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<n;g++){const p=g*(i+1);for(let m=0;m<i;m++){const x=m+p,y=x,v=x+i+1,M=x+i+2,A=x+1;o.push(y,v,A),o.push(v,M,A)}}this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class G_ extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zo extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gp,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xn extends Zo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zh extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dp extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function co(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function V_(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function H_(a){function e(n,r){return a[n]-a[r]}const t=a.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Td(a,e,t){const i=a.length,n=new a.constructor(i);for(let r=0,s=0;s!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[s++]=a[o+l]}return n}function Lp(a,e,t,i){let n=1,r=a[0];for(;r!==void 0&&r[i]===void 0;)r=a[n++];if(r===void 0)return;let s=r[i];if(s!==void 0)if(Array.isArray(s))do s=r[i],s!==void 0&&(e.push(r.time),t.push(...s)),r=a[n++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[i],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[n++];while(r!==void 0);else do s=r[i],s!==void 0&&(e.push(r.time),t.push(s)),r=a[n++];while(r!==void 0)}class Da{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let s;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}s=t.length;break i}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}s=i,i=0;break i}break e}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class W_ extends Da{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ts,endingEnd:ts}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,o=n[r],l=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case is:r=e,o=2*t-i;break;case Io:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case is:s=e,l=2*i-t;break;case Io:s=1,l=i+n[1]-n[0];break;default:s=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(n-t),g=_*_,p=g*_,m=-d*p+2*d*g-d*_,x=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*_+1,y=(-1-f)*p+(1.5+f)*g+.5*_,v=f*p-f*g;for(let M=0;M!==o;++M)r[M]=m*s[h+M]+x*s[c+M]+y*s[l+M]+v*s[u+M];return r}}class Ip extends Da{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=s[c+d]*u+s[l+d]*h;return r}}class X_ extends Da{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new X_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ip(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new W_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(n!==void 0&&V_(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ml,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const u=o*i,d=s*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ba;class Us extends yn{constructor(e,t,i){super(e,t,i)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=ya;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Up extends yn{}Up.prototype.ValueTypeName="color";class Ss extends yn{}Ss.prototype.ValueTypeName="number";class j_ extends Da{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Pi.slerpFlat(r,0,s,c-o,s,c,l);return r}}class Ms extends yn{InterpolantFactoryMethodLinear(e){return new j_(this.times,this.values,this.getValueSize(),e)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends yn{constructor(e,t,i){super(e,t,i)}}Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=ya;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends yn{}Ts.prototype.ValueTypeName="vector";class eh{constructor(e="",t=-1,i=[],n=Nh){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(q_(i[s]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=i.length;r!==s;++r)t.push(yn.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=H_(l);l=Td(l,1,h),c=Td(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Ss(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const s=[];for(const o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,_,g){if(f.length!==0){const p=[],m=[];Lp(f,p,m,_),p.length!==0&&g.push(new u(d,p,m))}},n=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const p=[],m=[];for(let x=0;x!==d[_].morphTargets.length;++x){const y=d[_];p.push(y.time),m.push(y.morphTarget===g?1:0)}n.push(new Ss(".morphTargetInfluence["+g+"]",p,m))}l=f.length*s}else{const f=".bones["+t[u].name+"]";i(Ts,f+".position",d,"pos",n),i(Ms,f+".quaternion",d,"rot",n),i(Ts,f+".scale",d,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Y_(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return Up;case"quaternion":return Ms;case"bool":case"boolean":return Us;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function q_(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y_(a.type);if(a.times===void 0){const t=[],i=[];Lp(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Jn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Fp{constructor(e,t,i){const n=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const K_=new Fp;class ar{constructor(e){this.manager=e!==void 0?e:K_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class Z_ extends Error{constructor(e,t){super(e),this.response=t}}class Bo extends ar{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Jn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:i,onError:n});return}An[e]=[],An[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=An[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const p=new ReadableStream({start(m){x();function x(){u.read().then(({done:y,value:v})=>{if(y)m.close();else{g+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let A=0,T=h.length;A<T;A++){const C=h[A];C.onProgress&&C.onProgress(M)}m.enqueue(v),x()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Z_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Jn.add(e,c);const h=An[e];delete An[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=An[e];if(h===void 0)throw this.manager.itemError(e),c;delete An[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Op extends ar{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Jn.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=Sa("img");function l(){h(),Jn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class J_ extends ar{constructor(e){super(e)}load(e,t,i,n){const r=new Hh;r.colorSpace=ot;const s=new Op(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return r}}class Np extends ar{constructor(e){super(e)}load(e,t,i,n){const r=new Lt,s=new Op(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Jo extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zl=new Ye,Ed=new H,Ad=new H;class Jh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jh,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ed),Ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ad),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $_ extends Jh{constructor(){super(new li(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ys*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Q_ extends Jo{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new $_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wd=new Ye,ta=new H,Gl=new H;class e0 extends Jh{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ta.setFromMatrixPosition(e.matrixWorld),i.position.copy(ta),Gl.copy(i.position),Gl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Gl),i.updateMatrixWorld(),n.makeTranslation(-ta.x,-ta.y,-ta.z),wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}}class t0 extends Jo{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new e0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $o extends Tp{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class i0 extends Jh{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class th extends Jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new i0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cd extends Jo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class n0 extends ni{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class r0 extends ar{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Jn.get(e);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Jn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Jn.add(e,l),r.manager.itemStart(e)}}class s0 extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class kp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rd(){return performance.now()}class a0{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,s;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==n;++o)i[r+o]=i[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}s>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,s=n;r!==s;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let s=0;s!==r;++s)e[t+s]=e[i+s]}_slerp(e,t,i,n){Pi.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const s=this._workIndex*r;Pi.multiplyQuaternionsFlat(e,s,e,t,e,i),Pi.slerpFlat(e,t,e,t,e,s,n)}_lerp(e,t,i,n,r){const s=1-n;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*s+e[i+o]*n}}_lerpAdditive(e,t,i,n,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[i+s]*n}}}const $h="\\[\\]\\.:\\/",o0=new RegExp("["+$h+"]","g"),Qh="[^"+$h+"]",l0="[^"+$h.replace("\\.","")+"]",c0=/((?:WC+[\/:])*)/.source.replace("WC",Qh),h0=/(WCOD+)?/.source.replace("WCOD",l0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),f0=new RegExp("^"+c0+h0+u0+d0+"$"),p0=["material","materials","bones","map"];class m0{constructor(e,t,i){const n=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class lt{constructor(e,t,i){this.path=t,this.parsedPath=i||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,i):new lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(o0,"")}static parseTrackName(e){const t=f0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);p0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[n];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=m0;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class g0{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,s=r.length,o=new Array(s),l={endingStart:ts,endingEnd:ts};for(let c=0;c!==s;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Zc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,r=e._clip.duration,s=r/n,o=n/r;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ig:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulateAdditive(o);break;case Nh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const s=i===Lg;if(e===0)return r===-1?n:s&&(r&1)===1?t-n:n;if(i===sn){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(s&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=is,n.endingEnd=is):(e?n.endingStart=this.zeroSlopeAtStart?is:ts:n.endingStart=Io,t?n.endingEnd=this.zeroSlopeAtEnd?is:ts:n.endingEnd=Io)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let s=this._weightInterpolant;s===null&&(s=n._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const _0=new Float32Array(1);class an extends sr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,s=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=n[u],f=d.name;let _=h[f];if(_!==void 0)++_.referenceCount,s[u]=_;else{if(_=s[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;_=new a0(lt.create(i,f,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),s[u]=_}o[u].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let s=n[t];s===void 0&&(s={},n[t]=s),s[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,s=this._bindingsByRootAndName,o=s[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Ip(new Float32Array(2),new Float32Array(2),1,_0),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let s=typeof e=="string"?eh.findByName(n,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(s!==null?i=s.blendMode:i=Nh),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const h=new g0(this,s,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?eh.findByName(i,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const s=r.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const s in i){const o=i[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Pd=new Ye;let v0=class{constructor(e,t,i=0,n=1/0){this.ray=new Ds(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pd),this}intersectObject(e,t=!0,i=[]){return ih(e,this,i,t),i.sort(Dd),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)ih(e[n],this,i,t);return i.sort(Dd),i}};function Dd(a,e){return a.distance-e.distance}function ih(a,e,t,i){let n=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=a.children;for(let s=0,o=r.length;s<o;s++)ih(r[s],e,t,!0)}}class Ld{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Id extends qh{constructor(e=10,t=10,i=4473924,n=8947848){i=new Be(i),n=new Be(n);const r=t/2,s=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,_=-o;d<=t;d++,_+=s){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=d===r?i:n;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const h=new ni;h.setAttribute("position",new Ht(l,3)),h.setAttribute("color",new Ht(c,3));const u=new Ko({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ud extends qh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new ni;n.setAttribute("position",new Ht(t,3)),n.setAttribute("color",new Ht(i,3));const r=new Ko({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){const n=new Be,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class x0 extends sr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Fd(a,e,t,i){const n=y0(i);switch(t){case cp:return a*e;case up:return a*e;case dp:return a*e*2;case Ih:return a*e/n.components*n.byteLength;case Uh:return a*e/n.components*n.byteLength;case fp:return a*e*2/n.components*n.byteLength;case Fh:return a*e*2/n.components*n.byteLength;case hp:return a*e*3/n.components*n.byteLength;case Bi:return a*e*4/n.components*n.byteLength;case Oh:return a*e*4/n.components*n.byteLength;case xo:case yo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case bo:case So:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ec:case wc:return Math.max(a,16)*Math.max(e,8)/4;case Tc:case Ac:return Math.max(a,8)*Math.max(e,8)/2;case Cc:case Rc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Mo:case Xc:case jc:return Math.ceil(a/4)*Math.ceil(e/4)*16;case pp:case Yc:return Math.ceil(a/4)*Math.ceil(e/4)*8;case qc:case Kc:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y0(a){switch(a){case Fn:case ap:return{byteLength:1,components:1};case xa:case op:case ki:return{byteLength:2,components:1};case Dh:case Lh:return{byteLength:2,components:4};case Rr:case Ph:case $i:return{byteLength:4,components:1};case lp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bp(){let a=null,e=!1,t=null,i=null;function n(r,s){t(r,s),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function b0(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(a.bindBuffer(c,o),u.length===0)a.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const g=u[f];a.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:s}}var S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ev=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:S0,alphahash_pars_fragment:M0,alphamap_fragment:T0,alphamap_pars_fragment:E0,alphatest_fragment:A0,alphatest_pars_fragment:w0,aomap_fragment:C0,aomap_pars_fragment:R0,batching_pars_vertex:P0,batching_vertex:D0,begin_vertex:L0,beginnormal_vertex:I0,bsdfs:U0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:z0,color_fragment:G0,color_pars_fragment:V0,color_pars_vertex:H0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:q0,displacementmap_vertex:K0,emissivemap_fragment:Z0,emissivemap_pars_fragment:J0,colorspace_fragment:$0,colorspace_pars_fragment:Q0,envmap_fragment:ev,envmap_common_pars_fragment:tv,envmap_pars_fragment:iv,envmap_pars_vertex:nv,envmap_physical_pars_fragment:pv,envmap_vertex:rv,fog_vertex:sv,fog_pars_vertex:av,fog_fragment:ov,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:hv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:dv,lights_pars_begin:fv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:_v,lights_phong_pars_fragment:vv,lights_physical_fragment:xv,lights_physical_pars_fragment:yv,lights_fragment_begin:bv,lights_fragment_maps:Sv,lights_fragment_end:Mv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Ev,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:wv,map_fragment:Cv,map_pars_fragment:Rv,map_particle_fragment:Pv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Uv,morphcolor_vertex:Fv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Nv,morphtarget_vertex:kv,normal_fragment_begin:Bv,normal_fragment_maps:zv,normal_pars_fragment:Gv,normal_pars_vertex:Vv,normal_vertex:Hv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:Yv,iridescence_pars_fragment:qv,opaque_fragment:Kv,packing:Zv,premultiplied_alpha_fragment:Jv,project_vertex:$v,dithering_fragment:Qv,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:rx,shadowmap_vertex:sx,shadowmask_pars_fragment:ax,skinbase_vertex:ox,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:hx,specularmap_fragment:ux,specularmap_pars_fragment:dx,tonemapping_fragment:fx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:xx,worldpos_vertex:yx,background_vert:bx,background_frag:Sx,backgroundCube_vert:Mx,backgroundCube_frag:Tx,cube_vert:Ex,cube_frag:Ax,depth_vert:wx,depth_frag:Cx,distanceRGBA_vert:Rx,distanceRGBA_frag:Px,equirect_vert:Dx,equirect_frag:Lx,linedashed_vert:Ix,linedashed_frag:Ux,meshbasic_vert:Fx,meshbasic_frag:Ox,meshlambert_vert:Nx,meshlambert_frag:kx,meshmatcap_vert:Bx,meshmatcap_frag:zx,meshnormal_vert:Gx,meshnormal_frag:Vx,meshphong_vert:Hx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:jx,meshtoon_vert:Yx,meshtoon_frag:qx,points_vert:Kx,points_frag:Zx,shadow_vert:Jx,shadow_frag:$x,sprite_vert:Qx,sprite_frag:ey},Re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},dn={basic:{uniforms:ai([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:ai([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:ai([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:ai([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:ai([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:ai([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:ai([Re.points,Re.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:ai([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:ai([Re.common,Re.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:ai([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:ai([Re.sprite,Re.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:ai([Re.common,Re.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:ai([Re.lights,Re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};dn.physical={uniforms:ai([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ho={r:0,b:0,g:0},dr=new _n,ty=new Ye;function iy(a,e,t,i,n,r,s){const o=new Be(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function g(y){let v=!1;const M=_(y);M===null?m(o,l):M&&M.isColor&&(m(M,1),v=!0);const A=a.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(a.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function p(y,v){const M=_(v);M&&(M.isCubeTexture||M.mapping===qo)?(h===void 0&&(h=new st(new Ls(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:bs(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),dr.copy(v.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ty.makeRotationFromEuler(dr)),h.material.toneMapped=tt.getTransfer(M.colorSpace)!==ct,(u!==M||d!==M.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=a.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new st(new Dr(2,2),new qt({name:"BackgroundMaterial",uniforms:bs(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(ho,Mp(a)),i.buffers.color.setClear(ho.r,ho.g,ho.b,v,s)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:g,addToRenderList:p,dispose:x}}function ny(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,s=!1;function o(S,D,P,L,F){let G=!1;const k=u(L,P,D);r!==k&&(r=k,c(r.object)),G=f(S,L,P,F),G&&_(S,L,P,F),F!==null&&e.update(F,a.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,v(S,D,P,L),F!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return a.createVertexArray()}function c(S){return a.bindVertexArray(S)}function h(S){return a.deleteVertexArray(S)}function u(S,D,P){const L=P.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let G=F[D.id];G===void 0&&(G={},F[D.id]=G);let k=G[L];return k===void 0&&(k=d(l()),G[L]=k),k}function d(S){const D=[],P=[],L=[];for(let F=0;F<t;F++)D[F]=0,P[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:L,object:S,attributes:{},index:null}}function f(S,D,P,L){const F=r.attributes,G=D.attributes;let k=0;const Z=P.getAttributes();for(const W in Z)if(Z[W].location>=0){const q=F[W];let U=G[W];if(U===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(U=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(U=S.instanceColor)),q===void 0||q.attribute!==U||U&&q.data!==U.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function _(S,D,P,L){const F={},G=D.attributes;let k=0;const Z=P.getAttributes();for(const W in Z)if(Z[W].location>=0){let q=G[W];q===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const U={};U.attribute=q,q&&q.data&&(U.data=q.data),F[W]=U,k++}r.attributes=F,r.attributesNum=k,r.index=L}function g(){const S=r.newAttributes;for(let D=0,P=S.length;D<P;D++)S[D]=0}function p(S){m(S,0)}function m(S,D){const P=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;P[S]=1,L[S]===0&&(a.enableVertexAttribArray(S),L[S]=1),F[S]!==D&&(a.vertexAttribDivisor(S,D),F[S]=D)}function x(){const S=r.newAttributes,D=r.enabledAttributes;for(let P=0,L=D.length;P<L;P++)D[P]!==S[P]&&(a.disableVertexAttribArray(P),D[P]=0)}function y(S,D,P,L,F,G,k){k===!0?a.vertexAttribIPointer(S,D,P,F,G):a.vertexAttribPointer(S,D,P,L,F,G)}function v(S,D,P,L){g();const F=L.attributes,G=P.getAttributes(),k=D.defaultAttributeValues;for(const Z in G){const W=G[Z];if(W.location>=0){let J=F[Z];if(J===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const q=J.normalized,U=J.itemSize,X=e.get(J);if(X===void 0)continue;const ee=X.buffer,O=X.type,B=X.bytesPerElement,ie=O===a.INT||O===a.UNSIGNED_INT||J.gpuType===Ph;if(J.isInterleavedBufferAttribute){const j=J.data,re=j.stride,xe=J.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<W.locationSize;_e++)m(W.location+_e,j.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<W.locationSize;_e++)p(W.location+_e);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let _e=0;_e<W.locationSize;_e++)y(W.location+_e,U/W.locationSize,O,q,re*B,(xe+U/W.locationSize*_e)*B,ie)}else{if(J.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)m(W.location+j,J.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let j=0;j<W.locationSize;j++)p(W.location+j);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let j=0;j<W.locationSize;j++)y(W.location+j,U/W.locationSize,O,q,U*B,U/W.locationSize*j*B,ie)}}else if(k!==void 0){const q=k[Z];if(q!==void 0)switch(q.length){case 2:a.vertexAttrib2fv(W.location,q);break;case 3:a.vertexAttrib3fv(W.location,q);break;case 4:a.vertexAttrib4fv(W.location,q);break;default:a.vertexAttrib1fv(W.location,q)}}}}x()}function M(){C();for(const S in i){const D=i[S];for(const P in D){const L=D[P];for(const F in L)h(L[F].object),delete L[F];delete D[P]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const P in D){const L=D[P];for(const F in L)h(L[F].object),delete L[F];delete D[P]}delete i[S.id]}function T(S){for(const D in i){const P=i[D];if(P[S.id]===void 0)continue;const L=P[S.id];for(const F in L)h(L[F].object),delete L[F];delete P[S.id]}}function C(){b(),s=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:x}}function ry(a,e,t){let i;function n(c){i=c}function r(c,h){a.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,u){u!==0&&(a.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)s(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,i,1)}}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sy(a,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){return!(T!==Bi&&i.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Fn&&i.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$i&&!C)}function l(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),M=_>0,A=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:M,maxSamples:A}}function ay(a){const e=this;let t=null,i=0,n=!1,r=!1;const s=new qn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=a.get(u);if(!n||_===null||_.length===0||r&&!p)r?h(null):c();else{const x=r?0:i,y=x*4;let v=m.clippingState||null;l.value=v,v=h(_,d,y,f);for(let M=0;M!==y;++M)v[M]=t[M];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=f;y!==g;++y,v+=4)s.copy(u[y]).applyMatrix4(x,o),s.normal.toArray(p,v),p[v+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function oy(a){let e=new WeakMap;function t(s,o){return o===Sc?s.mapping=ms:o===Mc&&(s.mapping=gs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Sc||o===Mc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new D_(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ns=4,Od=[.125,.215,.35,.446,.526,.582],Sr=20,Vl=new $o,Nd=new Be;let Hl=null,Wl=0,Xl=0,jl=!1;const xr=(1+Math.sqrt(5))/2,Jr=1/xr,kd=[new H(-xr,Jr,0),new H(xr,Jr,0),new H(-Jr,0,xr),new H(Jr,0,xr),new H(0,xr,-Jr),new H(0,xr,Jr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],ly=new H;class Bd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,r={}){const{size:s=256,position:o=ly}=r;Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Wl,Xl),this._renderer.xr.enabled=jl,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:ki,format:Bi,colorSpace:ii,depthBuffer:!1},n=zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(r)),this._blurMaterial=hy(r,e,t)}return n}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,i,n,r){const l=new li(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Nd),u.toneMapping=tn,u.autoClear=!1;const _=new Gt({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1}),g=new st(new Ls,_);let p=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,p=!0):(_.color.copy(Nd),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const v=this._cubeSize;uo(n,y*v,x>2?v:0,v,v),u.setRenderTarget(n),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===ms||e.mapping===gs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());const r=n?this._cubemapMaterial:this._equirectMaterial,s=new st(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Vl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kd[(n-r-1)%kd.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",r),this._halfBlur(s,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new st(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Sr-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Sr;p>Sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Sr}`);const m=[];let x=0;for(let T=0;T<Sr;++T){const C=T/g,b=Math.exp(-C*C/2);m.push(b),T===0?x+=b:T<p&&(x+=2*b)}for(let T=0;T<m.length;T++)m[T]=m[T]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const v=this._sizeLods[n],M=3*v*(n>y-ns?n-y+ns:0),A=4*(this._cubeSize-v);uo(t,M,A,3*v,2*v),l.setRenderTarget(t),l.render(u,Vl)}}function cy(a){const e=[],t=[],i=[];let n=a;const r=a-ns+1+Od.length;for(let s=0;s<r;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-ns?l=Od[s-a+ns-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,p=2,m=1,x=new Float32Array(g*_*f),y=new Float32Array(p*_*f),v=new Float32Array(m*_*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,C=A>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(b,g*_*A),y.set(d,p*_*A);const S=[A,A,A,A,A,A];v.set(S,m*_*A)}const M=new ni;M.setAttribute("position",new Vt(x,g)),M.setAttribute("uv",new Vt(y,p)),M.setAttribute("faceIndex",new Vt(v,m)),e.push(M),n>ns&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zd(a,e,t){const i=new oi(a,e,t);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function hy(a,e,t){const i=new Float32Array(Sr),n=new H(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Gd(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Vd(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uy(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sc||l===Mc,h=l===ms||l===gs;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Bd(a)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new Bd(a)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function dy(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function fy(a,e,t,i){const n={},r=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",s),delete n[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],a.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let y=0,v=x.length;y<v;y+=3){const M=x[y+0],A=x[y+1],T=x[y+2];d.push(M,A,A,T,T,M)}}else if(_!==void 0){const x=_.array;g=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const M=y+0,A=y+1,T=y+2;d.push(M,A,A,T,T,M)}}else return;const p=new(vp(d)?Sp:bp)(d,1);p.version=g;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function py(a,e,t){let i;function n(d){i=d}let r,s;function o(d){r=d.type,s=d.bytesPerElement}function l(d,f){a.drawElements(i,f,r,d*s),t.update(f,i,1)}function c(d,f,_){_!==0&&(a.drawElementsInstanced(i,f,r,d*s,_),t.update(f,i,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,i,1)}function u(d,f,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/s,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,g,0,_);let m=0;for(let x=0;x<_;x++)m+=f[x]*g[x];t.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function my(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function gy(a,e,t){const i=new WeakMap,n=new at;function r(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let M=o.attributes.position.count*v,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*A*4*u),C=new xp(T,M,A,u);C.type=$i,C.needsUpdate=!0;const b=v*4;for(let D=0;D<u;D++){const P=m[D],L=x[D],F=y[D],G=M*A*4*D;for(let k=0;k<P.count;k++){const Z=k*b;_===!0&&(n.fromBufferAttribute(P,k),T[G+Z+0]=n.x,T[G+Z+1]=n.y,T[G+Z+2]=n.z,T[G+Z+3]=0),g===!0&&(n.fromBufferAttribute(L,k),T[G+Z+4]=n.x,T[G+Z+5]=n.y,T[G+Z+6]=n.z,T[G+Z+7]=0),p===!0&&(n.fromBufferAttribute(F,k),T[G+Z+8]=n.x,T[G+Z+9]=n.y,T[G+Z+10]=n.z,T[G+Z+11]=F.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new Ue(M,A)},i.set(o,d),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(a,"morphTargetBaseInfluence",g),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:r}}function _y(a,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const zp=new Lt,Hd=new Pp(1,1),Gp=new xp,Vp=new m_,Hp=new Hh,Wd=[],Xd=[],jd=new Float32Array(16),Yd=new Float32Array(9),qd=new Float32Array(4);function Os(a,e,t){const i=a[0];if(i<=0||i>0)return a;const n=e*t;let r=Wd[n];if(r===void 0&&(r=new Float32Array(n),Wd[n]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Ft(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Ot(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Qo(a,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function vy(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function xy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;a.uniform2fv(this.addr,e),Ot(t,e)}}function yy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;a.uniform3fv(this.addr,e),Ot(t,e)}}function by(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;a.uniform4fv(this.addr,e),Ot(t,e)}}function Sy(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;qd.set(i),a.uniformMatrix2fv(this.addr,!1,qd),Ot(t,i)}}function My(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Yd.set(i),a.uniformMatrix3fv(this.addr,!1,Yd),Ot(t,i)}}function Ty(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;jd.set(i),a.uniformMatrix4fv(this.addr,!1,jd),Ot(t,i)}}function Ey(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Ay(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;a.uniform2iv(this.addr,e),Ot(t,e)}}function wy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;a.uniform3iv(this.addr,e),Ot(t,e)}}function Cy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;a.uniform4iv(this.addr,e),Ot(t,e)}}function Ry(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Py(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;a.uniform2uiv(this.addr,e),Ot(t,e)}}function Dy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;a.uniform3uiv(this.addr,e),Ot(t,e)}}function Ly(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;a.uniform4uiv(this.addr,e),Ot(t,e)}}function Iy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let r;this.type===a.SAMPLER_2D_SHADOW?(Hd.compareFunction=_p,r=Hd):r=zp,t.setTexture2D(e||r,n)}function Uy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Vp,n)}function Fy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Hp,n)}function Oy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Gp,n)}function Ny(a){switch(a){case 5126:return vy;case 35664:return xy;case 35665:return yy;case 35666:return by;case 35674:return Sy;case 35675:return My;case 35676:return Ty;case 5124:case 35670:return Ey;case 35667:case 35671:return Ay;case 35668:case 35672:return wy;case 35669:case 35673:return Cy;case 5125:return Ry;case 36294:return Py;case 36295:return Dy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}function ky(a,e){a.uniform1fv(this.addr,e)}function By(a,e){const t=Os(e,this.size,2);a.uniform2fv(this.addr,t)}function zy(a,e){const t=Os(e,this.size,3);a.uniform3fv(this.addr,t)}function Gy(a,e){const t=Os(e,this.size,4);a.uniform4fv(this.addr,t)}function Vy(a,e){const t=Os(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Hy(a,e){const t=Os(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Wy(a,e){const t=Os(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Xy(a,e){a.uniform1iv(this.addr,e)}function jy(a,e){a.uniform2iv(this.addr,e)}function Yy(a,e){a.uniform3iv(this.addr,e)}function qy(a,e){a.uniform4iv(this.addr,e)}function Ky(a,e){a.uniform1uiv(this.addr,e)}function Zy(a,e){a.uniform2uiv(this.addr,e)}function Jy(a,e){a.uniform3uiv(this.addr,e)}function $y(a,e){a.uniform4uiv(this.addr,e)}function Qy(a,e,t){const i=this.cache,n=e.length,r=Qo(t,n);Ft(i,r)||(a.uniform1iv(this.addr,r),Ot(i,r));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||zp,r[s])}function eb(a,e,t){const i=this.cache,n=e.length,r=Qo(t,n);Ft(i,r)||(a.uniform1iv(this.addr,r),Ot(i,r));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Vp,r[s])}function tb(a,e,t){const i=this.cache,n=e.length,r=Qo(t,n);Ft(i,r)||(a.uniform1iv(this.addr,r),Ot(i,r));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Hp,r[s])}function ib(a,e,t){const i=this.cache,n=e.length,r=Qo(t,n);Ft(i,r)||(a.uniform1iv(this.addr,r),Ot(i,r));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Gp,r[s])}function nb(a){switch(a){case 5126:return ky;case 35664:return By;case 35665:return zy;case 35666:return Gy;case 35674:return Vy;case 35675:return Hy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return jy;case 35668:case 35672:return Yy;case 35669:case 35673:return qy;case 5125:return Ky;case 36294:return Zy;case 36295:return Jy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return ib}}class rb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ny(t.type)}}class sb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nb(t.type)}}class ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function Kd(a,e){a.seq.push(e),a.map[e.id]=e}function ob(a,e,t){const i=a.name,n=i.length;for(Yl.lastIndex=0;;){const r=Yl.exec(i),s=Yl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Kd(t,c===void 0?new rb(o,a,e):new sb(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new ab(o),Kd(t,u)),t=u}}}class To{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),s=e.getUniformLocation(t,r.name);ob(r,s,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function Zd(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const lb=37297;let cb=0;function hb(a,e){const t=a.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=n;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Jd=new qe;function ub(a){tt._getMatrix(Jd,tt.workingColorSpace,a);const e=`mat3( ${Jd.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(a)){case Uo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function $d(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+hb(a.getShaderSource(e),s)}else return n}function db(a,e){const t=ub(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fb(a,e){let t;switch(e){case wh:t="Linear";break;case Ch:t="Reinhard";break;case Do:t="Cineon";break;case Rh:t="ACESFilmic";break;case ip:t="AgX";break;case np:t="Neutral";break;case tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new H;function pb(){tt.getLuminanceCoefficients(fo);const a=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mb(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function gb(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _b(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=a.getActiveAttrib(e,n),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function aa(a){return a!==""}function Qd(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ef(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(a){return a.replace(vb,yb)}const xb=new Map;function yb(a,e){let t=Ze[e];if(t===void 0){const i=xb.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}const bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(a){return a.replace(bb,Sb)}function Sb(a,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function nf(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mb(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eb(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ep:e="ENVMAP_BLENDING_MULTIPLY";break;case Rg:e="ENVMAP_BLENDING_MIX";break;case Pg:e="ENVMAP_BLENDING_ADD";break}return e}function wb(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Cb(a,e,t,i){const n=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Mb(t),c=Tb(t),h=Eb(t),u=Ab(t),d=wb(t),f=mb(t),_=gb(r),g=n.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(aa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(aa).join(`
`),m.length>0&&(m+=`
`)):(p=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),m=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tn?"#define TONE_MAPPING":"",t.toneMapping!==tn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==tn?fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,db("linearToOutputTexel",t.outputColorSpace),pb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),s=nh(s),s=Qd(s,t),s=ef(s,t),o=nh(o),o=Qd(o,t),o=ef(o,t),s=tf(s),o=tf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+p+s,v=x+m+o,M=Zd(n,n.VERTEX_SHADER,y),A=Zd(n,n.FRAGMENT_SHADER,v);n.attachShader(g,M),n.attachShader(g,A),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function T(D){if(a.debug.checkShaderErrors){const P=n.getProgramInfoLog(g).trim(),L=n.getShaderInfoLog(M).trim(),F=n.getShaderInfoLog(A).trim();let G=!0,k=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(G=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,g,M,A);else{const Z=$d(n,M,"vertex"),W=$d(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+Z+`
`+W)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||F==="")&&(k=!1);k&&(D.diagnostics={runnable:G,programLog:P,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:m}})}n.deleteShader(M),n.deleteShader(A),C=new To(n,g),b=_b(n,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(g,lb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}let Rb=0;class Pb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Db(e),t.set(e,i)),i}}class Db{constructor(e){this.id=Rb++,this.code=e,this.usedTimes=0}}function Lb(a,e,t,i,n,r,s){const o=new Vh,l=new Pb,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,S,D,P,L){const F=P.fog,G=L.geometry,k=b.isMeshStandardMaterial?P.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),W=Z&&Z.mapping===qo?Z.image.height:null,J=_[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,U=q!==void 0?q.length:0;let X=0;G.morphAttributes.position!==void 0&&(X=1),G.morphAttributes.normal!==void 0&&(X=2),G.morphAttributes.color!==void 0&&(X=3);let ee,O,B,ie;if(J){const He=dn[J];ee=He.vertexShader,O=He.fragmentShader}else ee=b.vertexShader,O=b.fragmentShader,l.update(b),B=l.getVertexShaderID(b),ie=l.getFragmentShaderID(b);const j=a.getRenderTarget(),re=a.state.buffers.depth.getReversed(),xe=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,ve=!!b.map,ue=!!b.matcap,Pe=!!Z,I=!!b.aoMap,ke=!!b.lightMap,Ee=!!b.bumpMap,Ce=!!b.normalMap,ae=!!b.displacementMap,Ae=!!b.emissiveMap,fe=!!b.metalnessMap,w=!!b.roughnessMap,E=b.anisotropy>0,N=b.clearcoat>0,$=b.dispersion>0,Q=b.iridescence>0,se=b.sheen>0,de=b.transmission>0,le=E&&!!b.anisotropyMap,me=N&&!!b.clearcoatMap,Le=N&&!!b.clearcoatNormalMap,ce=N&&!!b.clearcoatRoughnessMap,be=Q&&!!b.iridescenceMap,Me=Q&&!!b.iridescenceThicknessMap,Te=se&&!!b.sheenColorMap,oe=se&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,Oe=!!b.specularColorMap,Ke=!!b.specularIntensityMap,z=de&&!!b.transmissionMap,he=de&&!!b.thicknessMap,te=!!b.gradientMap,pe=!!b.alphaMap,ye=b.alphaTest>0,ge=!!b.alphaHash,Ne=!!b.extensions;let je=tn;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=a.toneMapping);const ze={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:ee,fragmentShader:O,defines:b.defines,customVertexShaderID:B,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:xe,instancingColor:xe&&L.instanceColor!==null,instancingMorph:xe&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?a.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ii,alphaToCoverage:!!b.alphaToCoverage,map:ve,matcap:ue,envMap:Pe,envMapMode:Pe&&Z.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:ke,bumpMap:Ee,normalMap:Ce,displacementMap:d&&ae,emissiveMap:Ae,normalMapObjectSpace:Ce&&b.normalMapType===Og,normalMapTangentSpace:Ce&&b.normalMapType===gp,metalnessMap:fe,roughnessMap:w,anisotropy:E,anisotropyMap:le,clearcoat:N,clearcoatMap:me,clearcoatNormalMap:Le,clearcoatRoughnessMap:ce,dispersion:$,iridescence:Q,iridescenceMap:be,iridescenceThicknessMap:Me,sheen:se,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:Ke,transmission:de,transmissionMap:z,thicknessMap:he,gradientMap:te,opaque:b.transparent===!1&&b.blending===os&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:ye,alphaHash:ge,combine:b.combine,mapUv:ve&&g(b.map.channel),aoMapUv:I&&g(b.aoMap.channel),lightMapUv:ke&&g(b.lightMap.channel),bumpMapUv:Ee&&g(b.bumpMap.channel),normalMapUv:Ce&&g(b.normalMap.channel),displacementMapUv:ae&&g(b.displacementMap.channel),emissiveMapUv:Ae&&g(b.emissiveMap.channel),metalnessMapUv:fe&&g(b.metalnessMap.channel),roughnessMapUv:w&&g(b.roughnessMap.channel),anisotropyMapUv:le&&g(b.anisotropyMap.channel),clearcoatMapUv:me&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:oe&&g(b.sheenRoughnessMap.channel),specularMapUv:Ie&&g(b.specularMap.channel),specularColorMapUv:Oe&&g(b.specularColorMap.channel),specularIntensityMapUv:Ke&&g(b.specularIntensityMap.channel),transmissionMapUv:z&&g(b.transmissionMap.channel),thicknessMapUv:he&&g(b.thicknessMap.channel),alphaMapUv:pe&&g(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ce||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(ve||pe),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:re,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:X,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:je,decodeVideoTexture:ve&&b.map.isVideoTexture===!0&&tt.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:Ae&&b.emissiveMap.isVideoTexture===!0&&tt.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_i,flipSided:b.side===hi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&b.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(S,b),y(S,b),S.push(a.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=_[b.type];let D;if(S){const P=dn[S];D=Is.clone(P.uniforms)}else D=b.uniforms;return D}function M(b,S){let D;for(let P=0,L=h.length;P<L;P++){const F=h[P];if(F.cacheKey===S){D=F,++D.usedTimes;break}}return D===void 0&&(D=new Cb(a,S,b,r),h.push(D)),D}function A(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function Ib(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function i(s){a.delete(s)}function n(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Ub(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function rf(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function sf(){const a=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function s(u,d,f,_,g,p){let m=a[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},a[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),e++,m}function o(u,d,f,_,g,p){const m=s(u,d,f,_,g,p);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):t.push(m)}function l(u,d,f,_,g,p){const m=s(u,d,f,_,g,p);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Ub),i.length>1&&i.sort(d||rf),n.length>1&&n.sort(d||rf)}function h(){for(let u=e,d=a.length;u<d;u++){const f=a[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Fb(){let a=new WeakMap;function e(i,n){const r=a.get(i);let s;return r===void 0?(s=new sf,a.set(i,[s])):n>=r.length?(s=new sf,r.push(s)):s=r[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Ob(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Be};break;case"SpotLight":t={position:new H,direction:new H,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new H,halfWidth:new H,halfHeight:new H};break}return a[e.id]=t,t}}}function Nb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let kb=0;function Bb(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function zb(a){const e=new Ob,t=Nb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const n=new H,r=new Ye,s=new Ye;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,x=0,y=0,v=0,M=0,A=0,T=0;c.sort(Bb);for(let b=0,S=c.length;b<S;b++){const D=c[b],P=D.color,L=D.intensity,F=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=P.r*L,u+=P.g*L,d+=P.b*L;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],L);T++}else if(D.isDirectionalLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,W=t.get(D);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=D.shadow.matrix,x++}i.directional[f]=k,f++}else if(D.isSpotLight){const k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(P).multiplyScalar(L),k.distance=F,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[g]=k;const Z=D.shadow;if(D.map&&(i.spotLightMap[M]=D.map,M++,Z.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[g]=Z.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=G,v++}g++}else if(D.isRectAreaLight){const k=e.get(D);k.color.copy(P).multiplyScalar(L),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=k,p++}else if(D.isPointLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){const Z=D.shadow,W=t.get(D);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=D.shadow.matrix,y++}i.point[_]=k,_++}else if(D.isHemisphereLight){const k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(L),k.groundColor.copy(D.groundColor).multiplyScalar(L),i.hemi[m]=k,m++}}p>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==M||C.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=M,C.numLightProbes=T,i.version=kb++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),u++}else if(y.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),s.identity(),r.copy(y.matrixWorld),r.premultiply(p),s.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),_++}else if(y.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function af(a){const e=new zb(a),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function Gb(a){let e=new WeakMap;function t(n,r=0){const s=e.get(n);let o;return s===void 0?(o=new af(a),e.set(n,[o])):r>=s.length?(o=new af(a),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wb(a,e,t){let i=new jh;const n=new Ue,r=new Ue,s=new at,o=new Zh({depthPacking:kh}),l=new Dp,c={},h=t.maxTextureSize,u={[rn]:hi,[hi]:rn,[_i]:_i},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Vb,fragmentShader:Hb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ni;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new st(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qf;let m=this.type;this.render=function(A,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const b=a.getRenderTarget(),S=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),P=a.state;P.setBlending(en),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=m!==wn&&this.type===wn,F=m===wn&&this.type!==wn;for(let G=0,k=A.length;G<k;G++){const Z=A[G],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const J=W.getFrameExtents();if(n.multiply(J),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/J.x),n.x=r.x*J.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/J.y),n.y=r.y*J.y,W.mapSize.y=r.y)),W.map===null||L===!0||F===!0){const U=this.type!==wn?{minFilter:ui,magFilter:ui}:{};W.map!==null&&W.map.dispose(),W.map=new oi(n.x,n.y,U),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const q=W.getViewportCount();for(let U=0;U<q;U++){const X=W.getViewport(U);s.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),P.viewport(s),W.updateMatrices(Z,U),i=W.getFrustum(),v(T,C,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&x(W,C),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(b,S,D)};function x(A,T){const C=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(n.x,n.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(T,null,C,d,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(T,null,C,f,g,null)}function y(A,T,C,b){let S=null;const D=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?l:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=S.uuid,L=T.uuid;let F=c[P];F===void 0&&(F={},c[P]=F);let G=F[L];G===void 0&&(G=S.clone(),F[L]=G,T.addEventListener("dispose",M)),S=G}if(S.visible=T.visible,S.wireframe=T.wireframe,b===wn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=a.properties.get(S);P.light=C}return S}function v(A,T,C,b,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===wn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const L=e.update(A),F=A.material;if(Array.isArray(F)){const G=L.groups;for(let k=0,Z=G.length;k<Z;k++){const W=G[k],J=F[W.materialIndex];if(J&&J.visible){const q=y(A,J,b,S);A.onBeforeShadow(a,A,T,C,L,q,W),a.renderBufferDirect(C,null,L,q,A,W),A.onAfterShadow(a,A,T,C,L,q,W)}}}else if(F.visible){const G=y(A,F,b,S);A.onBeforeShadow(a,A,T,C,L,G,null),a.renderBufferDirect(C,null,L,G,A,null),A.onAfterShadow(a,A,T,C,L,G,null)}}const P=A.children;for(let L=0,F=P.length;L<F;L++)v(P[L],T,C,b,S)}function M(A){A.target.removeEventListener("dispose",M);for(const C in c){const b=c[C],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Xb={[mc]:gc,[_c]:yc,[vc]:bc,[ps]:xc,[gc]:mc,[yc]:_c,[bc]:vc,[xc]:ps};function jb(a,e){function t(){let z=!1;const he=new at;let te=null;const pe=new at(0,0,0,0);return{setMask:function(ye){te!==ye&&!z&&(a.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){z=ye},setClear:function(ye,ge,Ne,je,ze){ze===!0&&(ye*=je,ge*=je,Ne*=je),he.set(ye,ge,Ne,je),pe.equals(he)===!1&&(a.clearColor(ye,ge,Ne,je),pe.copy(he))},reset:function(){z=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let z=!1,he=!1,te=null,pe=null,ye=null;return{setReversed:function(ge){if(he!==ge){const Ne=e.get("EXT_clip_control");he?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const je=ye;ye=null,this.setClear(je)}he=ge},getReversed:function(){return he},setTest:function(ge){ge?j(a.DEPTH_TEST):re(a.DEPTH_TEST)},setMask:function(ge){te!==ge&&!z&&(a.depthMask(ge),te=ge)},setFunc:function(ge){if(he&&(ge=Xb[ge]),pe!==ge){switch(ge){case mc:a.depthFunc(a.NEVER);break;case gc:a.depthFunc(a.ALWAYS);break;case _c:a.depthFunc(a.LESS);break;case ps:a.depthFunc(a.LEQUAL);break;case vc:a.depthFunc(a.EQUAL);break;case xc:a.depthFunc(a.GEQUAL);break;case yc:a.depthFunc(a.GREATER);break;case bc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}pe=ge}},setLocked:function(ge){z=ge},setClear:function(ge){ye!==ge&&(he&&(ge=1-ge),a.clearDepth(ge),ye=ge)},reset:function(){z=!1,te=null,pe=null,ye=null,he=!1}}}function n(){let z=!1,he=null,te=null,pe=null,ye=null,ge=null,Ne=null,je=null,ze=null;return{setTest:function(He){z||(He?j(a.STENCIL_TEST):re(a.STENCIL_TEST))},setMask:function(He){he!==He&&!z&&(a.stencilMask(He),he=He)},setFunc:function(He,dt,gt){(te!==He||pe!==dt||ye!==gt)&&(a.stencilFunc(He,dt,gt),te=He,pe=dt,ye=gt)},setOp:function(He,dt,gt){(ge!==He||Ne!==dt||je!==gt)&&(a.stencilOp(He,dt,gt),ge=He,Ne=dt,je=gt)},setLocked:function(He){z=He},setClear:function(He){ze!==He&&(a.clearStencil(He),ze=He)},reset:function(){z=!1,he=null,te=null,pe=null,ye=null,ge=null,Ne=null,je=null,ze=null}}}const r=new t,s=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,p=null,m=null,x=null,y=null,v=null,M=null,A=null,T=new Be(0,0,0),C=0,b=!1,S=null,D=null,P=null,L=null,F=null;const G=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=Z>=2);let J=null,q={};const U=a.getParameter(a.SCISSOR_BOX),X=a.getParameter(a.VIEWPORT),ee=new at().fromArray(U),O=new at().fromArray(X);function B(z,he,te,pe){const ye=new Uint8Array(4),ge=a.createTexture();a.bindTexture(z,ge),a.texParameteri(z,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(z,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ne=0;Ne<te;Ne++)z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY?a.texImage3D(he,0,a.RGBA,1,1,pe,0,a.RGBA,a.UNSIGNED_BYTE,ye):a.texImage2D(he+Ne,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ye);return ge}const ie={};ie[a.TEXTURE_2D]=B(a.TEXTURE_2D,a.TEXTURE_2D,1),ie[a.TEXTURE_CUBE_MAP]=B(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[a.TEXTURE_2D_ARRAY]=B(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ie[a.TEXTURE_3D]=B(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),j(a.DEPTH_TEST),s.setFunc(ps),Ee(!1),Ce(ku),j(a.CULL_FACE),I(en);function j(z){h[z]!==!0&&(a.enable(z),h[z]=!0)}function re(z){h[z]!==!1&&(a.disable(z),h[z]=!1)}function xe(z,he){return u[z]!==he?(a.bindFramebuffer(z,he),u[z]=he,z===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=he),z===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=he),!0):!1}function _e(z,he){let te=f,pe=!1;if(z){te=d.get(he),te===void 0&&(te=[],d.set(he,te));const ye=z.textures;if(te.length!==ye.length||te[0]!==a.COLOR_ATTACHMENT0){for(let ge=0,Ne=ye.length;ge<Ne;ge++)te[ge]=a.COLOR_ATTACHMENT0+ge;te.length=ye.length,pe=!0}}else te[0]!==a.BACK&&(te[0]=a.BACK,pe=!0);pe&&a.drawBuffers(te)}function ve(z){return _!==z?(a.useProgram(z),_=z,!0):!1}const ue={[br]:a.FUNC_ADD,[dg]:a.FUNC_SUBTRACT,[fg]:a.FUNC_REVERSE_SUBTRACT};ue[pg]=a.MIN,ue[mg]=a.MAX;const Pe={[gg]:a.ZERO,[_g]:a.ONE,[vg]:a.SRC_COLOR,[fc]:a.SRC_ALPHA,[Tg]:a.SRC_ALPHA_SATURATE,[Sg]:a.DST_COLOR,[yg]:a.DST_ALPHA,[xg]:a.ONE_MINUS_SRC_COLOR,[pc]:a.ONE_MINUS_SRC_ALPHA,[Mg]:a.ONE_MINUS_DST_COLOR,[bg]:a.ONE_MINUS_DST_ALPHA,[Eg]:a.CONSTANT_COLOR,[Ag]:a.ONE_MINUS_CONSTANT_COLOR,[wg]:a.CONSTANT_ALPHA,[Cg]:a.ONE_MINUS_CONSTANT_ALPHA};function I(z,he,te,pe,ye,ge,Ne,je,ze,He){if(z===en){g===!0&&(re(a.BLEND),g=!1);return}if(g===!1&&(j(a.BLEND),g=!0),z!==ug){if(z!==p||He!==b){if((m!==br||v!==br)&&(a.blendEquation(a.FUNC_ADD),m=br,v=br),He)switch(z){case os:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case dc:a.blendFunc(a.ONE,a.ONE);break;case Bu:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case zu:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case os:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case dc:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Bu:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case zu:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,y=null,M=null,A=null,T.set(0,0,0),C=0,p=z,b=He}return}ye=ye||he,ge=ge||te,Ne=Ne||pe,(he!==m||ye!==v)&&(a.blendEquationSeparate(ue[he],ue[ye]),m=he,v=ye),(te!==x||pe!==y||ge!==M||Ne!==A)&&(a.blendFuncSeparate(Pe[te],Pe[pe],Pe[ge],Pe[Ne]),x=te,y=pe,M=ge,A=Ne),(je.equals(T)===!1||ze!==C)&&(a.blendColor(je.r,je.g,je.b,ze),T.copy(je),C=ze),p=z,b=!1}function ke(z,he){z.side===_i?re(a.CULL_FACE):j(a.CULL_FACE);let te=z.side===hi;he&&(te=!te),Ee(te),z.blending===os&&z.transparent===!1?I(en):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const pe=z.stencilWrite;o.setTest(pe),pe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ae(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?j(a.SAMPLE_ALPHA_TO_COVERAGE):re(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(z){S!==z&&(z?a.frontFace(a.CW):a.frontFace(a.CCW),S=z)}function Ce(z){z!==lg?(j(a.CULL_FACE),z!==D&&(z===ku?a.cullFace(a.BACK):z===cg?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):re(a.CULL_FACE),D=z}function ae(z){z!==P&&(k&&a.lineWidth(z),P=z)}function Ae(z,he,te){z?(j(a.POLYGON_OFFSET_FILL),(L!==he||F!==te)&&(a.polygonOffset(he,te),L=he,F=te)):re(a.POLYGON_OFFSET_FILL)}function fe(z){z?j(a.SCISSOR_TEST):re(a.SCISSOR_TEST)}function w(z){z===void 0&&(z=a.TEXTURE0+G-1),J!==z&&(a.activeTexture(z),J=z)}function E(z,he,te){te===void 0&&(J===null?te=a.TEXTURE0+G-1:te=J);let pe=q[te];pe===void 0&&(pe={type:void 0,texture:void 0},q[te]=pe),(pe.type!==z||pe.texture!==he)&&(J!==te&&(a.activeTexture(te),J=te),a.bindTexture(z,he||ie[z]),pe.type=z,pe.texture=he)}function N(){const z=q[J];z!==void 0&&z.type!==void 0&&(a.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $(){try{a.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{a.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{a.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{a.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{a.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{a.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{a.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{a.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{a.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{a.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(z){ee.equals(z)===!1&&(a.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function oe(z){O.equals(z)===!1&&(a.viewport(z.x,z.y,z.z,z.w),O.copy(z))}function Ie(z,he){let te=c.get(he);te===void 0&&(te=new WeakMap,c.set(he,te));let pe=te.get(z);pe===void 0&&(pe=a.getUniformBlockIndex(he,z.name),te.set(z,pe))}function Oe(z,he){const pe=c.get(he).get(z);l.get(he)!==pe&&(a.uniformBlockBinding(he,pe,z.__bindingPointIndex),l.set(he,pe))}function Ke(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},J=null,q={},u={},d=new WeakMap,f=[],_=null,g=!1,p=null,m=null,x=null,y=null,v=null,M=null,A=null,T=new Be(0,0,0),C=0,b=!1,S=null,D=null,P=null,L=null,F=null,ee.set(0,0,a.canvas.width,a.canvas.height),O.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:j,disable:re,bindFramebuffer:xe,drawBuffers:_e,useProgram:ve,setBlending:I,setMaterial:ke,setFlipSided:Ee,setCullFace:Ce,setLineWidth:ae,setPolygonOffset:Ae,setScissorTest:fe,activeTexture:w,bindTexture:E,unbindTexture:N,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:be,texImage3D:Me,updateUBOMapping:Ie,uniformBlockBinding:Oe,texStorage2D:Le,texStorage3D:ce,texSubImage2D:se,texSubImage3D:de,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Te,viewport:oe,reset:Ke}}function Yb(a,e,t,i,n,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,E){return f?new OffscreenCanvas(w,E):Sa("canvas")}function g(w,E,N){let $=1;const Q=fe(w);if((Q.width>N||Q.height>N)&&($=N/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const se=Math.floor($*Q.width),de=Math.floor($*Q.height);u===void 0&&(u=_(se,de));const le=E?_(se,de):u;return le.width=se,le.height=de,le.getContext("2d").drawImage(w,0,0,se,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+se+"x"+de+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function p(w){return w.generateMipmaps}function m(w){a.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?a.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function y(w,E,N,$,Q=!1){if(w!==null){if(a[w]!==void 0)return a[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se=E;if(E===a.RED&&(N===a.FLOAT&&(se=a.R32F),N===a.HALF_FLOAT&&(se=a.R16F),N===a.UNSIGNED_BYTE&&(se=a.R8)),E===a.RED_INTEGER&&(N===a.UNSIGNED_BYTE&&(se=a.R8UI),N===a.UNSIGNED_SHORT&&(se=a.R16UI),N===a.UNSIGNED_INT&&(se=a.R32UI),N===a.BYTE&&(se=a.R8I),N===a.SHORT&&(se=a.R16I),N===a.INT&&(se=a.R32I)),E===a.RG&&(N===a.FLOAT&&(se=a.RG32F),N===a.HALF_FLOAT&&(se=a.RG16F),N===a.UNSIGNED_BYTE&&(se=a.RG8)),E===a.RG_INTEGER&&(N===a.UNSIGNED_BYTE&&(se=a.RG8UI),N===a.UNSIGNED_SHORT&&(se=a.RG16UI),N===a.UNSIGNED_INT&&(se=a.RG32UI),N===a.BYTE&&(se=a.RG8I),N===a.SHORT&&(se=a.RG16I),N===a.INT&&(se=a.RG32I)),E===a.RGB_INTEGER&&(N===a.UNSIGNED_BYTE&&(se=a.RGB8UI),N===a.UNSIGNED_SHORT&&(se=a.RGB16UI),N===a.UNSIGNED_INT&&(se=a.RGB32UI),N===a.BYTE&&(se=a.RGB8I),N===a.SHORT&&(se=a.RGB16I),N===a.INT&&(se=a.RGB32I)),E===a.RGBA_INTEGER&&(N===a.UNSIGNED_BYTE&&(se=a.RGBA8UI),N===a.UNSIGNED_SHORT&&(se=a.RGBA16UI),N===a.UNSIGNED_INT&&(se=a.RGBA32UI),N===a.BYTE&&(se=a.RGBA8I),N===a.SHORT&&(se=a.RGBA16I),N===a.INT&&(se=a.RGBA32I)),E===a.RGB&&N===a.UNSIGNED_INT_5_9_9_9_REV&&(se=a.RGB9_E5),E===a.RGBA){const de=Q?Uo:tt.getTransfer($);N===a.FLOAT&&(se=a.RGBA32F),N===a.HALF_FLOAT&&(se=a.RGBA16F),N===a.UNSIGNED_BYTE&&(se=de===ct?a.SRGB8_ALPHA8:a.RGBA8),N===a.UNSIGNED_SHORT_4_4_4_4&&(se=a.RGBA4),N===a.UNSIGNED_SHORT_5_5_5_1&&(se=a.RGB5_A1)}return(se===a.R16F||se===a.R32F||se===a.RG16F||se===a.RG32F||se===a.RGBA16F||se===a.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(w,E){let N;return w?E===null||E===Rr||E===vs?N=a.DEPTH24_STENCIL8:E===$i?N=a.DEPTH32F_STENCIL8:E===xa&&(N=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Rr||E===vs?N=a.DEPTH_COMPONENT24:E===$i?N=a.DEPTH_COMPONENT32F:E===xa&&(N=a.DEPTH_COMPONENT16),N}function M(w,E){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==ui&&w.minFilter!==Ct?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function A(w){const E=w.target;E.removeEventListener("dispose",A),C(E),E.isVideoTexture&&h.delete(E)}function T(w){const E=w.target;E.removeEventListener("dispose",T),S(E)}function C(w){const E=i.get(w);if(E.__webglInit===void 0)return;const N=w.source,$=d.get(N);if($){const Q=$[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(w),Object.keys($).length===0&&d.delete(N)}i.remove(w)}function b(w){const E=i.get(w);a.deleteTexture(E.__webglTexture);const N=w.source,$=d.get(N);delete $[E.__cacheKey],s.memory.textures--}function S(w){const E=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let Q=0;Q<E.__webglFramebuffer[$].length;Q++)a.deleteFramebuffer(E.__webglFramebuffer[$][Q]);else a.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)a.deleteFramebuffer(E.__webglFramebuffer[$]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const N=w.textures;for(let $=0,Q=N.length;$<Q;$++){const se=i.get(N[$]);se.__webglTexture&&(a.deleteTexture(se.__webglTexture),s.memory.textures--),i.remove(N[$])}i.remove(w)}let D=0;function P(){D=0}function L(){const w=D;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),D+=1,w}function F(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function G(w,E){const N=i.get(w);if(w.isVideoTexture&&ae(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(N,w,E);return}}t.bindTexture(a.TEXTURE_2D,N.__webglTexture,a.TEXTURE0+E)}function k(w,E){const N=i.get(w);if(w.version>0&&N.__version!==w.version){O(N,w,E);return}t.bindTexture(a.TEXTURE_2D_ARRAY,N.__webglTexture,a.TEXTURE0+E)}function Z(w,E){const N=i.get(w);if(w.version>0&&N.__version!==w.version){O(N,w,E);return}t.bindTexture(a.TEXTURE_3D,N.__webglTexture,a.TEXTURE0+E)}function W(w,E){const N=i.get(w);if(w.version>0&&N.__version!==w.version){B(N,w,E);return}t.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+E)}const J={[_s]:a.REPEAT,[Zn]:a.CLAMP_TO_EDGE,[Lo]:a.MIRRORED_REPEAT},q={[ui]:a.NEAREST,[sp]:a.NEAREST_MIPMAP_NEAREST,[sa]:a.NEAREST_MIPMAP_LINEAR,[Ct]:a.LINEAR,[vo]:a.LINEAR_MIPMAP_NEAREST,[Dn]:a.LINEAR_MIPMAP_LINEAR},U={[Ng]:a.NEVER,[Hg]:a.ALWAYS,[kg]:a.LESS,[_p]:a.LEQUAL,[Bg]:a.EQUAL,[Vg]:a.GEQUAL,[zg]:a.GREATER,[Gg]:a.NOTEQUAL};function X(w,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ct||E.magFilter===vo||E.magFilter===sa||E.magFilter===Dn||E.minFilter===Ct||E.minFilter===vo||E.minFilter===sa||E.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(w,a.TEXTURE_WRAP_S,J[E.wrapS]),a.texParameteri(w,a.TEXTURE_WRAP_T,J[E.wrapT]),(w===a.TEXTURE_3D||w===a.TEXTURE_2D_ARRAY)&&a.texParameteri(w,a.TEXTURE_WRAP_R,J[E.wrapR]),a.texParameteri(w,a.TEXTURE_MAG_FILTER,q[E.magFilter]),a.texParameteri(w,a.TEXTURE_MIN_FILTER,q[E.minFilter]),E.compareFunction&&(a.texParameteri(w,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(w,a.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ui||E.minFilter!==sa&&E.minFilter!==Dn||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");a.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ee(w,E){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",A));const $=E.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const se=F(E);if(se!==w.__cacheKey){Q[se]===void 0&&(Q[se]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,N=!0),Q[se].usedTimes++;const de=Q[w.__cacheKey];de!==void 0&&(Q[w.__cacheKey].usedTimes--,de.usedTimes===0&&b(E)),w.__cacheKey=se,w.__webglTexture=Q[se].texture}return N}function O(w,E,N){let $=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=a.TEXTURE_3D);const Q=ee(w,E),se=E.source;t.bindTexture($,w.__webglTexture,a.TEXTURE0+N);const de=i.get(se);if(se.version!==de.__version||Q===!0){t.activeTexture(a.TEXTURE0+N);const le=tt.getPrimaries(tt.workingColorSpace),me=E.colorSpace===Kn?null:tt.getPrimaries(E.colorSpace),Le=E.colorSpace===Kn||le===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ce=g(E.image,!1,n.maxTextureSize);ce=Ae(E,ce);const be=r.convert(E.format,E.colorSpace),Me=r.convert(E.type);let Te=y(E.internalFormat,be,Me,E.colorSpace,E.isVideoTexture);X($,E);let oe;const Ie=E.mipmaps,Oe=E.isVideoTexture!==!0,Ke=de.__version===void 0||Q===!0,z=se.dataReady,he=M(E,ce);if(E.isDepthTexture)Te=v(E.format===xs,E.type),Ke&&(Oe?t.texStorage2D(a.TEXTURE_2D,1,Te,ce.width,ce.height):t.texImage2D(a.TEXTURE_2D,0,Te,ce.width,ce.height,0,be,Me,null));else if(E.isDataTexture)if(Ie.length>0){Oe&&Ke&&t.texStorage2D(a.TEXTURE_2D,he,Te,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)oe=Ie[te],Oe?z&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,oe.width,oe.height,be,Me,oe.data):t.texImage2D(a.TEXTURE_2D,te,Te,oe.width,oe.height,0,be,Me,oe.data);E.generateMipmaps=!1}else Oe?(Ke&&t.texStorage2D(a.TEXTURE_2D,he,Te,ce.width,ce.height),z&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ce.width,ce.height,be,Me,ce.data)):t.texImage2D(a.TEXTURE_2D,0,Te,ce.width,ce.height,0,be,Me,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&Ke&&t.texStorage3D(a.TEXTURE_2D_ARRAY,he,Te,Ie[0].width,Ie[0].height,ce.depth);for(let te=0,pe=Ie.length;te<pe;te++)if(oe=Ie[te],E.format!==Bi)if(be!==null)if(Oe){if(z)if(E.layerUpdates.size>0){const ye=Fd(oe.width,oe.height,E.format,E.type);for(const ge of E.layerUpdates){const Ne=oe.data.subarray(ge*ye/oe.data.BYTES_PER_ELEMENT,(ge+1)*ye/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,ge,oe.width,oe.height,1,be,Ne)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,be,oe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,te,Te,oe.width,oe.height,ce.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?z&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,be,Me,oe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,te,Te,oe.width,oe.height,ce.depth,0,be,Me,oe.data)}else{Oe&&Ke&&t.texStorage2D(a.TEXTURE_2D,he,Te,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)oe=Ie[te],E.format!==Bi?be!==null?Oe?z&&t.compressedTexSubImage2D(a.TEXTURE_2D,te,0,0,oe.width,oe.height,be,oe.data):t.compressedTexImage2D(a.TEXTURE_2D,te,Te,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?z&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,oe.width,oe.height,be,Me,oe.data):t.texImage2D(a.TEXTURE_2D,te,Te,oe.width,oe.height,0,be,Me,oe.data)}else if(E.isDataArrayTexture)if(Oe){if(Ke&&t.texStorage3D(a.TEXTURE_2D_ARRAY,he,Te,ce.width,ce.height,ce.depth),z)if(E.layerUpdates.size>0){const te=Fd(ce.width,ce.height,E.format,E.type);for(const pe of E.layerUpdates){const ye=ce.data.subarray(pe*te/ce.data.BYTES_PER_ELEMENT,(pe+1)*te/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,ce.width,ce.height,1,be,Me,ye)}E.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,be,Me,ce.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Te,ce.width,ce.height,ce.depth,0,be,Me,ce.data);else if(E.isData3DTexture)Oe?(Ke&&t.texStorage3D(a.TEXTURE_3D,he,Te,ce.width,ce.height,ce.depth),z&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,be,Me,ce.data)):t.texImage3D(a.TEXTURE_3D,0,Te,ce.width,ce.height,ce.depth,0,be,Me,ce.data);else if(E.isFramebufferTexture){if(Ke)if(Oe)t.texStorage2D(a.TEXTURE_2D,he,Te,ce.width,ce.height);else{let te=ce.width,pe=ce.height;for(let ye=0;ye<he;ye++)t.texImage2D(a.TEXTURE_2D,ye,Te,te,pe,0,be,Me,null),te>>=1,pe>>=1}}else if(Ie.length>0){if(Oe&&Ke){const te=fe(Ie[0]);t.texStorage2D(a.TEXTURE_2D,he,Te,te.width,te.height)}for(let te=0,pe=Ie.length;te<pe;te++)oe=Ie[te],Oe?z&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,be,Me,oe):t.texImage2D(a.TEXTURE_2D,te,Te,be,Me,oe);E.generateMipmaps=!1}else if(Oe){if(Ke){const te=fe(ce);t.texStorage2D(a.TEXTURE_2D,he,Te,te.width,te.height)}z&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,be,Me,ce)}else t.texImage2D(a.TEXTURE_2D,0,Te,be,Me,ce);p(E)&&m($),de.__version=se.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function B(w,E,N){if(E.image.length!==6)return;const $=ee(w,E),Q=E.source;t.bindTexture(a.TEXTURE_CUBE_MAP,w.__webglTexture,a.TEXTURE0+N);const se=i.get(Q);if(Q.version!==se.__version||$===!0){t.activeTexture(a.TEXTURE0+N);const de=tt.getPrimaries(tt.workingColorSpace),le=E.colorSpace===Kn?null:tt.getPrimaries(E.colorSpace),me=E.colorSpace===Kn||de===le?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,ce=E.image[0]&&E.image[0].isDataTexture,be=[];for(let pe=0;pe<6;pe++)!Le&&!ce?be[pe]=g(E.image[pe],!0,n.maxCubemapSize):be[pe]=ce?E.image[pe].image:E.image[pe],be[pe]=Ae(E,be[pe]);const Me=be[0],Te=r.convert(E.format,E.colorSpace),oe=r.convert(E.type),Ie=y(E.internalFormat,Te,oe,E.colorSpace),Oe=E.isVideoTexture!==!0,Ke=se.__version===void 0||$===!0,z=Q.dataReady;let he=M(E,Me);X(a.TEXTURE_CUBE_MAP,E);let te;if(Le){Oe&&Ke&&t.texStorage2D(a.TEXTURE_CUBE_MAP,he,Ie,Me.width,Me.height);for(let pe=0;pe<6;pe++){te=be[pe].mipmaps;for(let ye=0;ye<te.length;ye++){const ge=te[ye];E.format!==Bi?Te!==null?Oe?z&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,0,0,ge.width,ge.height,Te,ge.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,0,0,ge.width,ge.height,Te,oe,ge.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,Ie,ge.width,ge.height,0,Te,oe,ge.data)}}}else{if(te=E.mipmaps,Oe&&Ke){te.length>0&&he++;const pe=fe(be[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,he,Ie,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ce){Oe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,be[pe].width,be[pe].height,Te,oe,be[pe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ie,be[pe].width,be[pe].height,0,Te,oe,be[pe].data);for(let ye=0;ye<te.length;ye++){const Ne=te[ye].image[pe].image;Oe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,0,0,Ne.width,Ne.height,Te,oe,Ne.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,Ie,Ne.width,Ne.height,0,Te,oe,Ne.data)}}else{Oe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te,oe,be[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ie,Te,oe,be[pe]);for(let ye=0;ye<te.length;ye++){const ge=te[ye];Oe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,0,0,Te,oe,ge.image[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,Ie,Te,oe,ge.image[pe])}}}p(E)&&m(a.TEXTURE_CUBE_MAP),se.__version=Q.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function ie(w,E,N,$,Q,se){const de=r.convert(N.format,N.colorSpace),le=r.convert(N.type),me=y(N.internalFormat,de,le,N.colorSpace),Le=i.get(E),ce=i.get(N);if(ce.__renderTarget=E,!Le.__hasExternalTextures){const be=Math.max(1,E.width>>se),Me=Math.max(1,E.height>>se);Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,me,be,Me,E.depth,0,de,le,null):t.texImage2D(Q,se,me,be,Me,0,de,le,null)}t.bindFramebuffer(a.FRAMEBUFFER,w),Ce(E)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,Q,ce.__webglTexture,0,Ee(E)):(Q===a.TEXTURE_2D||Q>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,Q,ce.__webglTexture,se),t.bindFramebuffer(a.FRAMEBUFFER,null)}function j(w,E,N){if(a.bindRenderbuffer(a.RENDERBUFFER,w),E.depthBuffer){const $=E.depthTexture,Q=$&&$.isDepthTexture?$.type:null,se=v(E.stencilBuffer,Q),de=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=Ee(E);Ce(E)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,le,se,E.width,E.height):N?a.renderbufferStorageMultisample(a.RENDERBUFFER,le,se,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,se,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,w)}else{const $=E.textures;for(let Q=0;Q<$.length;Q++){const se=$[Q],de=r.convert(se.format,se.colorSpace),le=r.convert(se.type),me=y(se.internalFormat,de,le,se.colorSpace),Le=Ee(E);N&&Ce(E)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Le,me,E.width,E.height):Ce(E)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Le,me,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,me,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function re(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const Q=$.__webglTexture,se=Ee(E);if(E.depthTexture.format===ls)Ce(E)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Q,0,se):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Q,0);else if(E.depthTexture.format===xs)Ce(E)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Q,0,se):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function xe(w){const E=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=$}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");re(E.__webglFramebuffer,w)}else if(N){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=a.createRenderbuffer(),j(E.__webglDepthbuffer[$],w,!1);else{const Q=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer[$];a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,se)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),j(E.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Q),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,Q)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function _e(w,E,N){const $=i.get(w);E!==void 0&&ie($.__webglFramebuffer,w,w.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),N!==void 0&&xe(w)}function ve(w){const E=w.texture,N=i.get(w),$=i.get(E);w.addEventListener("dispose",T);const Q=w.textures,se=w.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=E.version,s.memory.textures++),se){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let me=0;me<E.mipmaps.length;me++)N.__webglFramebuffer[le][me]=a.createFramebuffer()}else N.__webglFramebuffer[le]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)N.__webglFramebuffer[le]=a.createFramebuffer()}else N.__webglFramebuffer=a.createFramebuffer();if(de)for(let le=0,me=Q.length;le<me;le++){const Le=i.get(Q[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=a.createTexture(),s.memory.textures++)}if(w.samples>0&&Ce(w)===!1){N.__webglMultisampledFramebuffer=a.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const me=Q[le];N.__webglColorRenderbuffer[le]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const Le=r.convert(me.format,me.colorSpace),ce=r.convert(me.type),be=y(me.internalFormat,Le,ce,me.colorSpace,w.isXRRenderTarget===!0),Me=Ee(w);a.renderbufferStorageMultisample(a.RENDERBUFFER,Me,be,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,N.__webglColorRenderbuffer[le])}a.bindRenderbuffer(a.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=a.createRenderbuffer(),j(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(se){t.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),X(a.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ie(N.__webglFramebuffer[le][me],w,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else ie(N.__webglFramebuffer[le],w,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(E)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let le=0,me=Q.length;le<me;le++){const Le=Q[le],ce=i.get(Le);t.bindTexture(a.TEXTURE_2D,ce.__webglTexture),X(a.TEXTURE_2D,Le),ie(N.__webglFramebuffer,w,Le,a.COLOR_ATTACHMENT0+le,a.TEXTURE_2D,0),p(Le)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let le=a.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),X(le,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ie(N.__webglFramebuffer[me],w,E,a.COLOR_ATTACHMENT0,le,me);else ie(N.__webglFramebuffer,w,E,a.COLOR_ATTACHMENT0,le,0);p(E)&&m(le),t.unbindTexture()}w.depthBuffer&&xe(w)}function ue(w){const E=w.textures;for(let N=0,$=E.length;N<$;N++){const Q=E[N];if(p(Q)){const se=x(w),de=i.get(Q).__webglTexture;t.bindTexture(se,de),m(se),t.unbindTexture()}}}const Pe=[],I=[];function ke(w){if(w.samples>0){if(Ce(w)===!1){const E=w.textures,N=w.width,$=w.height;let Q=a.COLOR_BUFFER_BIT;const se=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=i.get(w),le=E.length>1;if(le)for(let me=0;me<E.length;me++)t.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<E.length;me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=a.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=a.STENCIL_BUFFER_BIT)),le){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Le=i.get(E[me]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Le,0)}a.blitFramebuffer(0,0,N,$,0,0,N,$,Q,a.NEAREST),l===!0&&(Pe.length=0,I.length=0,Pe.push(a.COLOR_ATTACHMENT0+me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Pe.push(se),I.push(se),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,I)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<E.length;me++){t.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Le=i.get(E[me]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.TEXTURE_2D,Le,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const E=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Ee(w){return Math.min(n.maxSamples,w.samples)}function Ce(w){const E=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ae(w){const E=s.render.frame;h.get(w)!==E&&(h.set(w,E),w.update())}function Ae(w,E){const N=w.colorSpace,$=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==ii&&N!==Kn&&(tt.getTransfer(N)===ct?($!==Bi||Q!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),E}function fe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=_e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ce}function qb(a,e){function t(i,n=Kn){let r;const s=tt.getTransfer(n);if(i===Fn)return a.UNSIGNED_BYTE;if(i===Dh)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Lh)return a.UNSIGNED_SHORT_5_5_5_1;if(i===lp)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===ap)return a.BYTE;if(i===op)return a.SHORT;if(i===xa)return a.UNSIGNED_SHORT;if(i===Ph)return a.INT;if(i===Rr)return a.UNSIGNED_INT;if(i===$i)return a.FLOAT;if(i===ki)return a.HALF_FLOAT;if(i===cp)return a.ALPHA;if(i===hp)return a.RGB;if(i===Bi)return a.RGBA;if(i===up)return a.LUMINANCE;if(i===dp)return a.LUMINANCE_ALPHA;if(i===ls)return a.DEPTH_COMPONENT;if(i===xs)return a.DEPTH_STENCIL;if(i===Ih)return a.RED;if(i===Uh)return a.RED_INTEGER;if(i===fp)return a.RG;if(i===Fh)return a.RG_INTEGER;if(i===Oh)return a.RGBA_INTEGER;if(i===xo||i===yo||i===bo||i===So)if(s===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tc||i===Ec||i===Ac||i===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Rc||i===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cc||i===Rc)return s===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dc||i===Lc||i===Ic||i===Uc||i===Fc||i===Oc||i===Nc||i===kc||i===Bc||i===zc||i===Gc||i===Vc||i===Hc||i===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mo||i===Xc||i===jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Mo)return s===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pp||i===Yc||i===qc||i===Kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const Kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Lt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qt({vertexShader:Kb,fragmentShader:Zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Dr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $b extends sr{constructor(e,t){super();const i=this;let n=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=new Jb,p=t.getContextAttributes();let m=null,x=null;const y=[],v=[],M=new Ue;let A=null;const T=new li;T.viewport=new at;const C=new li;C.viewport=new at;const b=[T,C],S=new s0;let D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let B=y[O];return B===void 0&&(B=new Fl,y[O]=B),B.getTargetRaySpace()},this.getControllerGrip=function(O){let B=y[O];return B===void 0&&(B=new Fl,y[O]=B),B.getGripSpace()},this.getHand=function(O){let B=y[O];return B===void 0&&(B=new Fl,y[O]=B),B.getHandSpace()};function L(O){const B=v.indexOf(O.inputSource);if(B===-1)return;const ie=y[B];ie!==void 0&&(ie.update(O.inputSource,O.frame,c||s),ie.dispatchEvent({type:O.type,data:O.inputSource}))}function F(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",G);for(let O=0;O<y.length;O++){const B=v[O];B!==null&&(v[O]=null,y[O].disconnect(B))}D=null,P=null,g.reset(),e.setRenderTarget(m),f=null,d=null,u=null,n=null,x=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(O){if(n=O,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",F),n.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,j=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?xs:ls,j=p.stencil?vs:Rr);const xe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(xe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new oi(d.textureWidth,d.textureHeight,{format:Bi,type:Fn,depthTexture:new Pp(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,ie),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new oi(f.framebufferWidth,f.framebufferHeight,{format:Bi,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(O){for(let B=0;B<O.removed.length;B++){const ie=O.removed[B],j=v.indexOf(ie);j>=0&&(v[j]=null,y[j].disconnect(ie))}for(let B=0;B<O.added.length;B++){const ie=O.added[B];let j=v.indexOf(ie);if(j===-1){for(let xe=0;xe<y.length;xe++)if(xe>=v.length){v.push(ie),j=xe;break}else if(v[xe]===null){v[xe]=ie,j=xe;break}if(j===-1)break}const re=y[j];re&&re.connect(ie)}}const k=new H,Z=new H;function W(O,B,ie){k.setFromMatrixPosition(B.matrixWorld),Z.setFromMatrixPosition(ie.matrixWorld);const j=k.distanceTo(Z),re=B.projectionMatrix.elements,xe=ie.projectionMatrix.elements,_e=re[14]/(re[10]-1),ve=re[14]/(re[10]+1),ue=(re[9]+1)/re[5],Pe=(re[9]-1)/re[5],I=(re[8]-1)/re[0],ke=(xe[8]+1)/xe[0],Ee=_e*I,Ce=_e*ke,ae=j/(-I+ke),Ae=ae*-I;if(B.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ae),O.translateZ(ae),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),re[10]===-1)O.projectionMatrix.copy(B.projectionMatrix),O.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const fe=_e+ae,w=ve+ae,E=Ee-Ae,N=Ce+(j-Ae),$=ue*ve/w*fe,Q=Pe*ve/w*fe;O.projectionMatrix.makePerspective(E,N,$,Q,fe,w),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function J(O,B){B===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(B.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(n===null)return;let B=O.near,ie=O.far;g.texture!==null&&(g.depthNear>0&&(B=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),S.near=C.near=T.near=B,S.far=C.far=T.far=ie,(D!==S.near||P!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,P=S.far),T.layers.mask=O.layers.mask|2,C.layers.mask=O.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;const j=O.parent,re=S.cameras;J(S,j);for(let xe=0;xe<re.length;xe++)J(re[xe],j);re.length===2?W(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),q(O,S,j)};function q(O,B,ie){ie===null?O.matrix.copy(B.matrixWorld):(O.matrix.copy(ie.matrixWorld),O.matrix.invert(),O.matrix.multiply(B.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(B.projectionMatrix),O.projectionMatrixInverse.copy(B.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ys*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let U=null;function X(O,B){if(h=B.getViewerPose(c||s),_=B,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let j=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,j=!0);for(let _e=0;_e<ie.length;_e++){const ve=ie[_e];let ue=null;if(f!==null)ue=f.getViewport(ve);else{const I=u.getViewSubImage(d,ve);ue=I.viewport,_e===0&&(e.setRenderTargetTextures(x,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(x))}let Pe=b[_e];Pe===void 0&&(Pe=new li,Pe.layers.enable(_e),Pe.viewport=new at,b[_e]=Pe),Pe.matrix.fromArray(ve.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ve.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(ue.x,ue.y,ue.width,ue.height),_e===0&&(S.matrix.copy(Pe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),j===!0&&S.cameras.push(Pe)}const re=n.enabledFeatures;if(re&&re.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){const _e=u.getDepthInformation(ie[0]);_e&&_e.isValid&&_e.texture&&g.init(e,_e,n.renderState)}}for(let ie=0;ie<y.length;ie++){const j=v[ie],re=y[ie];j!==null&&re!==void 0&&re.update(j,B,c||s)}U&&U(O,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),_=null}const ee=new Bp;ee.setAnimationLoop(X),this.setAnimationLoop=function(O){U=O},this.dispose=function(){}}}const fr=new _n,Qb=new Ye;function eS(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Mp(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,fr.copy(v),fr.x*=-1,fr.y*=-1,fr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),p.envMapRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(fr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function tS(a,e,t,i){let n={},r={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;i.uniformBlockBinding(x,v)}function c(x,y){let v=n[x.id];v===void 0&&(_(x),v=h(x),n[x.id]=v,x.addEventListener("dispose",p));const M=y.program;i.updateUBOMapping(x,M);const A=e.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const y=u();x.__bindingPointIndex=y;const v=a.createBuffer(),M=x.__size,A=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,v),a.bufferData(a.UNIFORM_BUFFER,M,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=n[x.id],v=x.uniforms,M=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let A=0,T=v.length;A<T;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,S=C.length;b<S;b++){const D=C[b];if(f(D,A,b,M)===!0){const P=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let G=0;G<L.length;G++){const k=L[G],Z=g(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,a.bufferSubData(a.UNIFORM_BUFFER,P+F,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,F),F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,P,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(x,y,v,M){const A=x.value,T=y+"_"+v;if(M[T]===void 0)return typeof A=="number"||typeof A=="boolean"?M[T]=A:M[T]=A.clone(),!0;{const C=M[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return M[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(x){const y=x.uniforms;let v=0;const M=16;for(let T=0,C=y.length;T<C;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,D=b.length;S<D;S++){const P=b[S],L=Array.isArray(P.value)?P.value:[P.value];for(let F=0,G=L.length;F<G;F++){const k=L[F],Z=g(k),W=v%M,J=W%Z.boundary,q=W+J;v+=J,q!==0&&M-q<Z.storage&&(v+=M-q),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=Z.storage}}}const A=v%M;return A>0&&(v+=M-A),x.__size=v,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const v=s.indexOf(y.__bindingPointIndex);s.splice(v,1),a.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function m(){for(const x in n)a.deleteBuffer(n[x]);s=[],n={},r={}}return{bind:l,update:c,dispose:m}}class iS{constructor(e={}){const{canvas:t=a_(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ot,this.toneMapping=tn,this.toneMappingExposure=1;const v=this;let M=!1,A=0,T=0,C=null,b=-1,S=null;const D=new at,P=new at;let L=null;const F=new Be(0);let G=0,k=t.width,Z=t.height,W=1,J=null,q=null;const U=new at(0,0,k,Z),X=new at(0,0,k,Z);let ee=!1;const O=new jh;let B=!1,ie=!1;this.transmissionResolutionScale=1;const j=new Ye,re=new Ye,xe=new H,_e=new at,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Pe(){return C===null?W:1}let I=i;function ke(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){const Y="webgl2";if(I=ke(Y,R),I===null)throw ke(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ee,Ce,ae,Ae,fe,w,E,N,$,Q,se,de,le,me,Le,ce,be,Me,Te,oe,Ie,Oe,Ke,z;function he(){Ee=new dy(I),Ee.init(),Oe=new qb(I,Ee),Ce=new sy(I,Ee,e,Oe),ae=new jb(I,Ee),Ce.reverseDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),Ae=new my(I),fe=new Ib,w=new Yb(I,Ee,ae,fe,Ce,Oe,Ae),E=new oy(v),N=new uy(v),$=new b0(I),Ke=new ny(I,$),Q=new fy(I,$,Ae,Ke),se=new _y(I,Q,$,Ae),Te=new gy(I,Ce,w),ce=new ay(fe),de=new Lb(v,E,N,Ee,Ce,Ke,ce),le=new eS(v,fe),me=new Fb,Le=new Gb(Ee),Me=new iy(v,E,N,ae,se,f,l),be=new Wb(v,se,Ce),z=new tS(I,Ae,Ce,ae),oe=new ry(I,Ee,Ae),Ie=new py(I,Ee,Ae),Ae.programs=de.programs,v.capabilities=Ce,v.extensions=Ee,v.properties=fe,v.renderLists=me,v.shadowMap=be,v.state=ae,v.info=Ae}he();const te=new $b(v,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(k,Z,!1))},this.getSize=function(R){return R.set(k,Z)},this.setSize=function(R,Y,ne=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,Z=Y,t.width=Math.floor(R*W),t.height=Math.floor(Y*W),ne===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(k*W,Z*W).floor()},this.setDrawingBufferSize=function(R,Y,ne){k=R,Z=Y,W=ne,t.width=Math.floor(R*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,Y,ne,V){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,Y,ne,V),ae.viewport(D.copy(U).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(X)},this.setScissor=function(R,Y,ne,V){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,Y,ne,V),ae.scissor(P.copy(X).multiplyScalar(W).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){ae.setScissorTest(ee=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ne=!0){let V=0;if(R){let K=!1;if(C!==null){const Se=C.texture.format;K=Se===Oh||Se===Fh||Se===Uh}if(K){const Se=C.texture.type,we=Se===Fn||Se===Rr||Se===xa||Se===vs||Se===Dh||Se===Lh,De=Me.getClearColor(),Fe=Me.getClearAlpha(),We=De.r,Xe=De.g,Ge=De.b;we?(_[0]=We,_[1]=Xe,_[2]=Ge,_[3]=Fe,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=We,g[1]=Xe,g[2]=Ge,g[3]=Fe,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}Y&&(V|=I.DEPTH_BUFFER_BIT),ne&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),me.dispose(),Le.dispose(),fe.dispose(),E.dispose(),N.dispose(),se.dispose(),Ke.dispose(),z.dispose(),de.dispose(),te.dispose(),te.removeEventListener("sessionstart",Tt),te.removeEventListener("sessionend",di),Zt.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Ae.autoReset,Y=be.enabled,ne=be.autoUpdate,V=be.needsUpdate,K=be.type;he(),Ae.autoReset=R,be.enabled=Y,be.autoUpdate=ne,be.needsUpdate=V,be.type=K}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ne(R){const Y=R.target;Y.removeEventListener("dispose",Ne),je(Y)}function je(R){ze(R),fe.remove(R)}function ze(R){const Y=fe.get(R).programs;Y!==void 0&&(Y.forEach(function(ne){de.releaseProgram(ne)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ne,V,K,Se){Y===null&&(Y=ve);const we=K.isMesh&&K.matrixWorld.determinant()<0,De=rl(R,Y,ne,V,K);ae.setMaterial(V,we);let Fe=ne.index,We=1;if(V.wireframe===!0){if(Fe=Q.getWireframeAttribute(ne),Fe===void 0)return;We=2}const Xe=ne.drawRange,Ge=ne.attributes.position;let et=Xe.start*We,it=(Xe.start+Xe.count)*We;Se!==null&&(et=Math.max(et,Se.start*We),it=Math.min(it,(Se.start+Se.count)*We)),Fe!==null?(et=Math.max(et,0),it=Math.min(it,Fe.count)):Ge!=null&&(et=Math.max(et,0),it=Math.min(it,Ge.count));const yt=it-et;if(yt<0||yt===1/0)return;Ke.setup(K,V,De,ne,Fe);let _t,nt=oe;if(Fe!==null&&(_t=$.get(Fe),nt=Ie,nt.setIndex(_t)),K.isMesh)V.wireframe===!0?(ae.setLineWidth(V.wireframeLinewidth*Pe()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(K.isLine){let Ve=V.linewidth;Ve===void 0&&(Ve=1),ae.setLineWidth(Ve*Pe()),K.isLineSegments?nt.setMode(I.LINES):K.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else K.isPoints?nt.setMode(I.POINTS):K.isSprite&&nt.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))nt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ve=K._multiDrawStarts,At=K._multiDrawCounts,$e=K._multiDrawCount,ri=Fe?$.get(Fe).bytesPerElement:1,hn=fe.get(V).currentProgram.getUniforms();for(let Xt=0;Xt<$e;Xt++)hn.setValue(I,"_gl_DrawID",Xt),nt.render(Ve[Xt]/ri,At[Xt])}else if(K.isInstancedMesh)nt.renderInstances(et,yt,K.count);else if(ne.isInstancedBufferGeometry){const Ve=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,At=Math.min(ne.instanceCount,Ve);nt.renderInstances(et,yt,At)}else nt.render(et,yt)};function He(R,Y,ne){R.transparent===!0&&R.side===_i&&R.forceSinglePass===!1?(R.side=hi,R.needsUpdate=!0,Ui(R,Y,ne),R.side=rn,R.needsUpdate=!0,Ui(R,Y,ne),R.side=_i):Ui(R,Y,ne)}this.compile=function(R,Y,ne=null){ne===null&&(ne=R),m=Le.get(ne),m.init(Y),y.push(m),ne.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),R!==ne&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const V=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Se=K.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const De=Se[we];He(De,ne,K),V.add(De)}else He(Se,ne,K),V.add(Se)}),m=y.pop(),V},this.compileAsync=function(R,Y,ne=null){const V=this.compile(R,Y,ne);return new Promise(K=>{function Se(){if(V.forEach(function(we){fe.get(we).currentProgram.isReady()&&V.delete(we)}),V.size===0){K(R);return}setTimeout(Se,10)}Ee.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let dt=null;function gt(R){dt&&dt(R)}function Tt(){Zt.stop()}function di(){Zt.start()}const Zt=new Bp;Zt.setAnimationLoop(gt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(R){dt=R,te.setAnimationLoop(R),R===null?Zt.stop():Zt.start()},te.addEventListener("sessionstart",Tt),te.addEventListener("sessionend",di),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(Y),Y=te.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Y,C),m=Le.get(R,y.length),m.init(Y),y.push(m),re.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O.setFromProjectionMatrix(re),ie=this.localClippingEnabled,B=ce.init(this.clippingPlanes,ie),p=me.get(R,x.length),p.init(),x.push(p),te.enabled===!0&&te.isPresenting===!0){const Se=v.xr.getDepthSensingMesh();Se!==null&&Mi(Se,Y,-1/0,v.sortObjects)}Mi(R,Y,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(J,q),ue=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ue&&Me.addToRenderList(p,R),this.info.render.frame++,B===!0&&ce.beginShadows();const ne=m.state.shadowsArray;be.render(ne,R,Y),B===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,K=p.transmissive;if(m.setupLights(),Y.isArrayCamera){const Se=Y.cameras;if(K.length>0)for(let we=0,De=Se.length;we<De;we++){const Fe=Se[we];cn(V,K,R,Fe)}ue&&Me.render(R);for(let we=0,De=Se.length;we<De;we++){const Fe=Se[we];Hi(p,R,Fe,Fe.viewport)}}else K.length>0&&cn(V,K,R,Y),ue&&Me.render(R),Hi(p,R,Y);C!==null&&T===0&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,Y),Ke.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],B===!0&&ce.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Mi(R,Y,ne,V){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||O.intersectsSprite(R)){V&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(re);const we=se.update(R),De=R.material;De.visible&&p.push(R,we,De,ne,_e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||O.intersectsObject(R))){const we=se.update(R),De=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),_e.copy(we.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(re)),Array.isArray(De)){const Fe=we.groups;for(let We=0,Xe=Fe.length;We<Xe;We++){const Ge=Fe[We],et=De[Ge.materialIndex];et&&et.visible&&p.push(R,we,et,ne,_e.z,Ge)}}else De.visible&&p.push(R,we,De,ne,_e.z,null)}}const Se=R.children;for(let we=0,De=Se.length;we<De;we++)Mi(Se[we],Y,ne,V)}function Hi(R,Y,ne,V){const K=R.opaque,Se=R.transmissive,we=R.transparent;m.setupLightsView(ne),B===!0&&ce.setGlobalState(v.clippingPlanes,ne),V&&ae.viewport(D.copy(V)),K.length>0&&fi(K,Y,ne),Se.length>0&&fi(Se,Y,ne),we.length>0&&fi(we,Y,ne),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function cn(R,Y,ne,V){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new oi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?ki:Fn,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const Se=m.state.transmissionRenderTarget[V.id],we=V.viewport||D;Se.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const De=v.getRenderTarget();v.setRenderTarget(Se),v.getClearColor(F),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),ue&&Me.render(ne);const Fe=v.toneMapping;v.toneMapping=tn;const We=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),B===!0&&ce.setGlobalState(v.clippingPlanes,V),fi(R,ne,V),w.updateMultisampleRenderTarget(Se),w.updateRenderTargetMipmap(Se),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ge=0,et=Y.length;Ge<et;Ge++){const it=Y[Ge],yt=it.object,_t=it.geometry,nt=it.material,Ve=it.group;if(nt.side===_i&&yt.layers.test(V.layers)){const At=nt.side;nt.side=hi,nt.needsUpdate=!0,Nt(yt,ne,V,_t,nt,Ve),nt.side=At,nt.needsUpdate=!0,Xe=!0}}Xe===!0&&(w.updateMultisampleRenderTarget(Se),w.updateRenderTargetMipmap(Se))}v.setRenderTarget(De),v.setClearColor(F,G),We!==void 0&&(V.viewport=We),v.toneMapping=Fe}function fi(R,Y,ne){const V=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Se=R.length;K<Se;K++){const we=R[K],De=we.object,Fe=we.geometry,We=V===null?we.material:V,Xe=we.group;De.layers.test(ne.layers)&&Nt(De,Y,ne,Fe,We,Xe)}}function Nt(R,Y,ne,V,K,Se){R.onBeforeRender(v,Y,ne,V,K,Se),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(v,Y,ne,V,R,Se),K.transparent===!0&&K.side===_i&&K.forceSinglePass===!1?(K.side=hi,K.needsUpdate=!0,v.renderBufferDirect(ne,Y,V,K,R,Se),K.side=rn,K.needsUpdate=!0,v.renderBufferDirect(ne,Y,V,K,R,Se),K.side=_i):v.renderBufferDirect(ne,Y,V,K,R,Se),R.onAfterRender(v,Y,ne,V,K,Se)}function Ui(R,Y,ne){Y.isScene!==!0&&(Y=ve);const V=fe.get(R),K=m.state.lights,Se=m.state.shadowsArray,we=K.state.version,De=de.getParameters(R,K.state,Se,Y,ne),Fe=de.getProgramCacheKey(De);let We=V.programs;V.environment=R.isMeshStandardMaterial?Y.environment:null,V.fog=Y.fog,V.envMap=(R.isMeshStandardMaterial?N:E).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",Ne),We=new Map,V.programs=We);let Xe=We.get(Fe);if(Xe!==void 0){if(V.currentProgram===Xe&&V.lightsStateVersion===we)return Ir(R,De),Xe}else De.uniforms=de.getUniforms(R),R.onBeforeCompile(De,v),Xe=de.acquireProgram(De,Fe),We.set(Fe,Xe),V.uniforms=De.uniforms;const Ge=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=ce.uniform),Ir(R,De),V.needsLights=Ur(R),V.lightsStateVersion=we,V.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.directionalShadowMap.value=K.state.directionalShadowMap,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotShadowMap.value=K.state.spotShadowMap,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMap.value=K.state.pointShadowMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix),V.currentProgram=Xe,V.uniformsList=null,Xe}function Bs(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=To.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ir(R,Y){const ne=fe.get(R);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function rl(R,Y,ne,V,K){Y.isScene!==!0&&(Y=ve),w.resetTextureUnits();const Se=Y.fog,we=V.isMeshStandardMaterial?Y.environment:null,De=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ii,Fe=(V.isMeshStandardMaterial?N:E).get(V.envMap||we),We=V.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Xe=!!ne.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ge=!!ne.morphAttributes.position,et=!!ne.morphAttributes.normal,it=!!ne.morphAttributes.color;let yt=tn;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=v.toneMapping);const _t=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,nt=_t!==void 0?_t.length:0,Ve=fe.get(V),At=m.state.lights;if(B===!0&&(ie===!0||R!==S)){const Bt=R===S&&V.id===b;ce.setState(V,R,Bt)}let $e=!1;V.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==At.state.version||Ve.outputColorSpace!==De||K.isBatchedMesh&&Ve.batching===!1||!K.isBatchedMesh&&Ve.batching===!0||K.isBatchedMesh&&Ve.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ve.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ve.instancing===!1||!K.isInstancedMesh&&Ve.instancing===!0||K.isSkinnedMesh&&Ve.skinning===!1||!K.isSkinnedMesh&&Ve.skinning===!0||K.isInstancedMesh&&Ve.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ve.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ve.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ve.instancingMorph===!1&&K.morphTexture!==null||Ve.envMap!==Fe||V.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ce.numPlanes||Ve.numIntersection!==ce.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==Xe||Ve.morphTargets!==Ge||Ve.morphNormals!==et||Ve.morphColors!==it||Ve.toneMapping!==yt||Ve.morphTargetsCount!==nt)&&($e=!0):($e=!0,Ve.__version=V.version);let ri=Ve.currentProgram;$e===!0&&(ri=Ui(V,Y,K));let hn=!1,Xt=!1,Jt=!1;const vt=ri.getUniforms(),jt=Ve.uniforms;if(ae.useProgram(ri.program)&&(hn=!0,Xt=!0,Jt=!0),V.id!==b&&(b=V.id,Xt=!0),hn||S!==R){ae.buffers.depth.getReversed()?(j.copy(R.projectionMatrix),l_(j),c_(j),vt.setValue(I,"projectionMatrix",j)):vt.setValue(I,"projectionMatrix",R.projectionMatrix),vt.setValue(I,"viewMatrix",R.matrixWorldInverse);const It=vt.map.cameraPosition;It!==void 0&&It.setValue(I,xe.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Xt=!0,Jt=!0)}if(K.isSkinnedMesh){vt.setOptional(I,K,"bindMatrix"),vt.setOptional(I,K,"bindMatrixInverse");const Bt=K.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),vt.setValue(I,"boneTexture",Bt.boneTexture,w))}K.isBatchedMesh&&(vt.setOptional(I,K,"batchingTexture"),vt.setValue(I,"batchingTexture",K._matricesTexture,w),vt.setOptional(I,K,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",K._indirectTexture,w),vt.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",K._colorsTexture,w));const kt=ne.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&Te.update(K,ne,ri),(Xt||Ve.receiveShadow!==K.receiveShadow)&&(Ve.receiveShadow=K.receiveShadow,vt.setValue(I,"receiveShadow",K.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(jt.envMap.value=Fe,jt.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&Y.environment!==null&&(jt.envMapIntensity.value=Y.environmentIntensity),Xt&&(vt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Ua(jt,Jt),Se&&V.fog===!0&&le.refreshFogUniforms(jt,Se),le.refreshMaterialUniforms(jt,V,W,Z,m.state.transmissionRenderTarget[R.id]),To.upload(I,Bs(Ve),jt,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(To.upload(I,Bs(Ve),jt,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(I,"center",K.center),vt.setValue(I,"modelViewMatrix",K.modelViewMatrix),vt.setValue(I,"normalMatrix",K.normalMatrix),vt.setValue(I,"modelMatrix",K.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Bt=V.uniformsGroups;for(let It=0,kn=Bt.length;It<kn;It++){const Wi=Bt[It];z.update(Wi,ri),z.bind(Wi,ri)}}return ri}function Ua(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Ur(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,Y,ne){fe.get(R.texture).__webglTexture=Y,fe.get(R.depthTexture).__webglTexture=ne;const V=fe.get(R);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=ne===void 0,V.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const ne=fe.get(R);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0};const zs=I.createFramebuffer();this.setRenderTarget=function(R,Y=0,ne=0){C=R,A=Y,T=ne;let V=!0,K=null,Se=!1,we=!1;if(R){const Fe=fe.get(R);if(Fe.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Fe.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Fe.__hasExternalTextures)w.rebindTextures(R,fe.get(R.texture).__webglTexture,fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(Fe.__boundDepthTexture!==Ge){if(Ge!==null&&fe.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Xe=fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?K=Xe[Y][ne]:K=Xe[Y],Se=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?K=fe.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?K=Xe[ne]:K=Xe,D.copy(R.viewport),P.copy(R.scissor),L=R.scissorTest}else D.copy(U).multiplyScalar(W).floor(),P.copy(X).multiplyScalar(W).floor(),L=ee;if(ne!==0&&(K=zs),ae.bindFramebuffer(I.FRAMEBUFFER,K)&&V&&ae.drawBuffers(R,K),ae.viewport(D),ae.scissor(P),ae.setScissorTest(L),Se){const Fe=fe.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ne)}else if(we){const Fe=fe.get(R.texture),We=Y;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,ne,We)}else if(R!==null&&ne!==0){const Fe=fe.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,ne)}b=-1},this.readRenderTargetPixels=function(R,Y,ne,V,K,Se,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){ae.bindFramebuffer(I.FRAMEBUFFER,De);try{const Fe=R.texture,We=Fe.format,Xe=Fe.type;if(!Ce.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-V&&ne>=0&&ne<=R.height-K&&I.readPixels(Y,ne,V,K,Oe.convert(We),Oe.convert(Xe),Se)}finally{const Fe=C!==null?fe.get(C).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ne,V,K,Se,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){const Fe=R.texture,We=Fe.format,Xe=Fe.type;if(!Ce.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-V&&ne>=0&&ne<=R.height-K){ae.bindFramebuffer(I.FRAMEBUFFER,De);const Ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.bufferData(I.PIXEL_PACK_BUFFER,Se.byteLength,I.STREAM_READ),I.readPixels(Y,ne,V,K,Oe.convert(We),Oe.convert(Xe),0);const et=C!==null?fe.get(C).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,et);const it=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await o_(I,it,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Se),I.deleteBuffer(Ge),I.deleteSync(it),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,ne=0){R.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const V=Math.pow(2,-ne),K=Math.floor(R.image.width*V),Se=Math.floor(R.image.height*V),we=Y!==null?Y.x:0,De=Y!==null?Y.y:0;w.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,ne,0,0,we,De,K,Se),ae.unbindTexture()};const sl=I.createFramebuffer(),Fa=I.createFramebuffer();this.copyTextureToTexture=function(R,Y,ne=null,V=null,K=0,Se=null){R.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1],Y=arguments[2],Se=arguments[3]||0,ne=null),Se===null&&(K!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=K,K=0):Se=0);let we,De,Fe,We,Xe,Ge,et,it,yt;const _t=R.isCompressedTexture?R.mipmaps[Se]:R.image;if(ne!==null)we=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,Fe=ne.isBox3?ne.max.z-ne.min.z:1,We=ne.min.x,Xe=ne.min.y,Ge=ne.isBox3?ne.min.z:0;else{const kt=Math.pow(2,-K);we=Math.floor(_t.width*kt),De=Math.floor(_t.height*kt),R.isDataArrayTexture?Fe=_t.depth:R.isData3DTexture?Fe=Math.floor(_t.depth*kt):Fe=1,We=0,Xe=0,Ge=0}V!==null?(et=V.x,it=V.y,yt=V.z):(et=0,it=0,yt=0);const nt=Oe.convert(Y.format),Ve=Oe.convert(Y.type);let At;Y.isData3DTexture?(w.setTexture3D(Y,0),At=I.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(w.setTexture2DArray(Y,0),At=I.TEXTURE_2D_ARRAY):(w.setTexture2D(Y,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const $e=I.getParameter(I.UNPACK_ROW_LENGTH),ri=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hn=I.getParameter(I.UNPACK_SKIP_PIXELS),Xt=I.getParameter(I.UNPACK_SKIP_ROWS),Jt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const vt=R.isDataArrayTexture||R.isData3DTexture,jt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const kt=fe.get(R),Bt=fe.get(Y),It=fe.get(kt.__renderTarget),kn=fe.get(Bt.__renderTarget);ae.bindFramebuffer(I.READ_FRAMEBUFFER,It.__webglFramebuffer),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Wi=0;Wi<Fe;Wi++)vt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.get(R).__webglTexture,K,Ge+Wi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.get(Y).__webglTexture,Se,yt+Wi)),I.blitFramebuffer(We,Xe,we,De,et,it,we,De,I.DEPTH_BUFFER_BIT,I.NEAREST);ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||fe.has(R)){const kt=fe.get(R),Bt=fe.get(Y);ae.bindFramebuffer(I.READ_FRAMEBUFFER,sl),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fa);for(let It=0;It<Fe;It++)vt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,K,Ge+It):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kt.__webglTexture,K),jt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,Se,yt+It):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,Se),K!==0?I.blitFramebuffer(We,Xe,we,De,et,it,we,De,I.COLOR_BUFFER_BIT,I.NEAREST):jt?I.copyTexSubImage3D(At,Se,et,it,yt+It,We,Xe,we,De):I.copyTexSubImage2D(At,Se,et,it,We,Xe,we,De);ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else jt?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(At,Se,et,it,yt,we,De,Fe,nt,Ve,_t.data):Y.isCompressedArrayTexture?I.compressedTexSubImage3D(At,Se,et,it,yt,we,De,Fe,nt,_t.data):I.texSubImage3D(At,Se,et,it,yt,we,De,Fe,nt,Ve,_t):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Se,et,it,we,De,nt,Ve,_t.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Se,et,it,_t.width,_t.height,nt,_t.data):I.texSubImage2D(I.TEXTURE_2D,Se,et,it,we,De,nt,Ve,_t);I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ri),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jt),Se===0&&Y.generateMipmaps&&I.generateMipmap(At),ae.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ne=null,V=null,K=0){return R.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,V=arguments[1]||null,R=arguments[2],Y=arguments[3],K=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,ne,V,K)},this.initRenderTarget=function(R){fe.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),ae.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,ae.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class gn{constructor(e,t,i,n,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),gn.nextNameID=gn.nextNameID||0,this.$name.id=`lil-gui-name-${++gn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class nS extends gn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function rh(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const rS={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:rh,toHexString:rh},Ma={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},sS={isPrimitive:!1,match:a=>Array.isArray(a),fromHexString(a,e,t=1){const i=Ma.fromHexString(a);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([a,e,t],i=1){i=255/i;const n=a*i<<16^e*i<<8^t*i<<0;return Ma.toHexString(n)}},aS={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const i=Ma.fromHexString(a);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:a,g:e,b:t},i=1){i=255/i;const n=a*i<<16^e*i<<8^t*i<<0;return Ma.toHexString(n)}},oS=[rS,Ma,sS,aS];function lS(a){return oS.find(e=>e.match(a))}class cS extends gn{constructor(e,t,i,n){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=lS(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=rh(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ql extends gn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class hS extends gn{constructor(e,t,i,n,r,s){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},i=x=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+x),this.$input.value=this.getValue())},n=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),i(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),i(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),i(this._step*this._normalizeMouseWheel(x)))};let s=!1,o,l,c,h,u;const d=5,f=x=>{o=x.clientX,l=c=x.clientY,s=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=x=>{if(s){const y=x.clientX-o,v=x.clientY-l;Math.abs(v)>d?(x.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&g()}if(!s){const y=x.clientY-c;u-=y*this._step*this._arrowKeyMultiplier(x),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=x.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},p=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,x,y,v,M)=>(m-x)/(y-x)*(M-v)+v,t=m=>{const x=this.$slider.getBoundingClientRect();let y=e(m,x.left,x.right,this._min,this._max);this._snapClampSetValue(y)},i=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=m=>{t(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let s=!1,o,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),s=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(o=m.touches[0].clientX,l=m.touches[0].clientY,s=!0):c(m),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=m=>{if(s){const x=m.touches[0].clientX-o,y=m.touches[0].clientY-l;Math.abs(x)>Math.abs(y)?c(m):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),_=400;let g;const p=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const y=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class uS extends gn{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class dS extends gn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var fS=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function pS(a){const e=document.createElement("style");e.innerHTML=a;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let of=!1;class tu{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:r="Controls",closeFolders:s=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!of&&o&&(pS(fS),of=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=s}add(e,t,i,n,r){if(Object(i)===i)return new uS(this,e,t,i);const s=e[t];switch(typeof s){case"number":return new hS(this,e,t,i,n,r);case"boolean":return new nS(this,e,t);case"string":return new dS(this,e,t);case"function":return new ql(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,i=1){return new cS(this,e,t,i)}addFolder(e){const t=new tu({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof ql||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ql)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class mS{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new tu)}}class La{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(n=>{const r=this.resolveName(n);this.callbacks[r.namespace]instanceof Object||(this.callbacks[r.namespace]={}),this.callbacks[r.namespace][r.value]instanceof Array||(this.callbacks[r.namespace][r.value]=[]),this.callbacks[r.namespace][r.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(i=>{const n=this.resolveName(i);if(n.namespace!=="base"&&n.value==="")delete this.callbacks[n.namespace];else if(n.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][n.value]instanceof Array&&(delete this.callbacks[r][n.value],Object.keys(this.callbacks[r]).length===0&&delete this.callbacks[r]);else this.callbacks[n.namespace]instanceof Object&&this.callbacks[n.namespace][n.value]instanceof Array&&(delete this.callbacks[n.namespace][n.value],Object.keys(this.callbacks[n.namespace]).length===0&&delete this.callbacks[n.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let i=null;const n=t instanceof Array?t:[];let r=this.resolveNames(e);if(r=this.resolveName(r[0]),r.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][r.value]instanceof Array&&this.callbacks[s][r.value].forEach(function(o){o.apply(this,n)});else if(this.callbacks[r.namespace]instanceof Object){if(r.value==="")return console.warn("wrong name"),this;this.callbacks[r.namespace][r.value].forEach(function(s){s.apply(this,n)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},i=e.split(".");return t.original=e,t.value=i[0],t.namespace="base",i.length>1&&i[1]!==""&&(t.namespace=i[1]),t}}class gS extends La{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.valueVertical=1024,this.isMobile=this.width<=this.valueVertical&&this.width<this.height,window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.isMobile=this.width<=this.valueVertical&&this.width<this.height,this.trigger("resize")})}}class _S extends La{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}const lf={type:"change"},iu={type:"start"},Wp={type:"end"},po=new Ds,cf=new qn,vS=Math.cos(70*zh.DEG2RAD),Ut=new H,gi=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kl=1e-6;class xS extends x0{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Pi,this._lastTargetPosition=new H,this._quat=new Pi().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ld,this._sphericalDelta=new Ld,this._scale=1,this._panOffset=new H,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new H,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bS.bind(this),this._onPointerDown=yS.bind(this),this._onPointerUp=SS.bind(this),this._onContextMenu=RS.bind(this),this._onMouseWheel=ES.bind(this),this._onKeyDown=AS.bind(this),this._onTouchStart=wS.bind(this),this._onTouchMove=CS.bind(this),this._onMouseDown=MS.bind(this),this._onMouseMove=TS.bind(this),this._interceptControlDown=PS.bind(this),this._interceptControlUp=DS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lf),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=gi:i>Math.PI&&(i-=gi),n<-Math.PI?n+=gi:n>Math.PI&&(n-=gi),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Ut.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<vS?this.object.lookAt(this.target):(cf.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(cf,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Kl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kl||this._lastTargetPosition.distanceToSquared(this.target)>Kl?(this.dispatchEvent(lf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gi/60*this.autoRotateSpeed*e:gi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Ut.copy(n).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,s=i.width,o=i.height;this._mouse.x=n/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/t.clientHeight),this._rotateUp(gi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/t.clientHeight),this._rotateUp(gi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yS(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function bS(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function SS(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wp),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function MS(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=ut.DOLLY;break;case as.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=ut.ROTATE}break;case as.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(iu)}function TS(a){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function ES(a){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(a.preventDefault(),this.dispatchEvent(iu),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Wp))}function AS(a){this.enabled!==!1&&this._handleKeyDown(a)}function wS(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=ut.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=ut.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(iu)}function CS(a){switch(this._trackPointer(a),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=ut.NONE}}function RS(a){this.enabled!==!1&&a.preventDefault()}function PS(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DS(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class LS{constructor(){this.experience=new mt,this.sizes=this.experience.sizes,this.sceneProfile=this.experience.sceneProfile,this.scenePortfolio=this.experience.scenePortfolio,this.canvas=this.experience.canvas,this.aspectRatioCamera=this.sizes.isMobile?this.sizes.width/(this.sizes.height/2):this.sizes.width/2/this.sizes.height,this.clock=new kp,this.previousTime=0;const e=1350/2,t=695;this.baseFOV=60,this.baseAspect=e/t,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Camera")),this.setInstance()}setInstance(){this.instance=new li(this.baseFOV,this.aspectRatioCamera,.1,100),this.instance.position.set(0,.2,3),console.log(this.aspectRatioCamera),console.log(this.sizes.width),console.log(this.sizes.height),this.instance.lookAt(new H(0,0,0)),this.experience.addToBothScene(this.instance),this.debug.active&&(this.debugFolder.add(this.instance,"fov").name("FOV").min(40).max(100).step(1).onChange(e=>{this.instance.fov=e,this.instance.updateProjectionMatrix()}),this.debugFolder.add(this.instance.position,"x").name("Position X").min(-10).max(10).step(.01),this.debugFolder.add(this.instance.position,"y").name("Position Y").min(-10).max(10).step(.01),this.debugFolder.add(this.instance.position,"z").name("Position Z").min(-10).max(10).step(.1))}setControls(){this.controls=new xS(this.instance,this.canvas),this.controls.enableDamping=!0}resize(){this.aspectRatioCamera=this.sizes.isMobile?this.sizes.width/(this.sizes.height/2):this.sizes.width/2/this.sizes.height,this.instance.aspect=this.aspectRatioCamera;const t=(this.sizes.isMobile?this.sizes.width/(this.sizes.height/2):this.sizes.width/2/this.sizes.height)/this.baseAspect;this.instance.fov=Math.max(60,Math.min(72,this.baseFOV/t)),console.log(this.instance.fov),this.instance.updateProjectionMatrix()}update(){}}const Xp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const IS=new $o(-1,1,1,-1,0,1);class US extends ni{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const FS=new US;class nu{constructor(e){this._mesh=new st(FS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class sh extends Ns{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Is.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new nu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hf extends Ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class OS extends Ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uf{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ue);this._width=i.width,this._height=i.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ki}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sh(Xp),this.copyPass.material.blending=en,this.clock=new kp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const s=this.passes[n];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}hf!==void 0&&(s instanceof hf?i=!0:s instanceof OS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class df extends Ns{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=n}}class In extends Ns{constructor(e,t,i,n){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=n!==void 0?n:[],this.visibleEdgeColor=new Be(1,1,1),this.hiddenEdgeColor=new Be(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),s=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new oi(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Zh,this.depthMaterial.side=_i,this.depthMaterial.depthPacking=kh,this.depthMaterial.blending=en,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=_i,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new oi(this.resolution.x,this.resolution.y,{type:ki}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new oi(r,s,{type:ki}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new oi(r,s,{type:ki}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new oi(Math.round(r/2),Math.round(s/2),{type:ki}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new oi(r,s,{type:ki}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new oi(Math.round(r/2),Math.round(s/2),{type:ki}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const o=4,l=4;this.separableBlurMaterial1=this.getSeparableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(r,s),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(s/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=Xp;this.copyUniforms=Is.clone(c.uniforms),this.materialCopy=new qt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:en,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Be,this.oldClearAlpha=1,this.fsQuad=new nu(null),this.tempPulseColor1=new Be,this.tempPulseColor2=new Be,this.textureMatrix=new Ye;function h(u,d){const f=d.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),n=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,n),this.renderTargetBlurBuffer1.setSize(i,n),this.renderTargetEdgeBuffer1.setSize(i,n),this.separableBlurMaterial1.uniforms.texSize.value.set(i,n),i=Math.round(i/2),n=Math.round(n/2),this.renderTargetBlurBuffer2.setSize(i,n),this.renderTargetEdgeBuffer2.setSize(i,n),this.separableBlurMaterial2.uniforms.texSize.value.set(i,n)}updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function n(r){if(r.isMesh||r.isSprite){if(!i.has(r)){const s=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,s)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(n)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,n,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.renderScene.overrideMaterial=l,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=In.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=In.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=In.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=In.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new qt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Ue(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new qt({uniforms:{maskTexture:{value:null},texSize:{value:new Ue(.5,.5)},visibleEdgeColor:{value:new H(1,1,1)},hiddenEdgeColor:{value:new H(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeparableBlurMaterial(e){return new qt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new qt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:dc,depthTest:!1,depthWrite:!1,transparent:!0})}}In.BlurDirectionX=new Ue(1,0);In.BlurDirectionY=new Ue(0,1);const NS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ff extends Ns{constructor(){super();const e=NS;this.uniforms=Is.clone(e.uniforms),this.material=new G_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new nu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ip?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===np?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===tp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const pf={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ue(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};class kS{constructor(){this.experience=new mt,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.cursor=this.experience.cursor,this.sceneProfile=this.experience.sceneProfile,this.scenePortfolio=this.experience.scenePortfolio,this.camera=this.experience.camera,this.enablePostProcessing=!0,this.debug=this.experience.debug,this.timeoutId||(this.timeoutId=null),this.enableTimeout=!0,this.debug.active&&(this.rendererFolder=this.debug.ui.addFolder("Renderer"),this.postProcessingFolder=this.rendererFolder.addFolder("Post Processing"),this.outlineFolder=this.postProcessingFolder.addFolder("Outline")),this.setInstance(),this.setPostProcessing(),this.setDebug(),this.selectedObjects=[]}setPostProcessing(){this.enablePostProcessing&&(this.composerProfile=new uf(this.instance),this.composerProfile.setSize(this.sizes.width,this.sizes.height),this.composerProfile.setPixelRatio(this.sizes.pixelRatio),this.composerPortfolio=new uf(this.instance),this.composerProfile.setSize(this.sizes.width,this.sizes.height),this.composerProfile.setPixelRatio(this.sizes.pixelRatio),this.composerProfile.toneMapping=tn,this.composerPortfolio.toneMapping=Do,this.composerPortfolio.toneMappingExposure=58,this.renderPassProfile=new df(this.sceneProfile,this.camera.instance),this.renderPassPortfolio=new df(this.scenePortfolio,this.camera.instance),this.composerProfile.addPass(this.renderPassProfile),this.composerPortfolio.addPass(this.renderPassPortfolio),this.outlinePassProfile=new In(new Ue(this.sizes.width,this.sizes.height),this.sceneProfile,this.camera.instance),this.outlinePassPortfolio=new In(new Ue(this.sizes.width,this.sizes.height),this.scenePortfolio,this.camera.instance),[this.outlinePassProfile,this.outlinePassPortfolio].forEach(e=>{e.visibleEdgeColor.set("#ffffff"),e.hiddenEdgeColor.set("#000000"),e.edgeStrength=3,e.edgeGlow=.5,e.edgeThickness=2,e.pulsePeriod=0}),this.composerProfile.addPass(this.outlinePassProfile),this.composerPortfolio.addPass(this.outlinePassPortfolio),this.outputPassProfile=new ff,this.outputPassPortfolio=new ff,this.composerProfile.addPass(this.outputPassProfile),this.composerPortfolio.addPass(this.outputPassPortfolio),this.effectFXAAProfile=new sh(pf),this.effectFXAAPortfolio=new sh(pf),this.effectFXAAProfile.uniforms.resolution.value.set(1/this.sizes.width,1/this.sizes.height),this.effectFXAAPortfolio.uniforms.resolution.value.set(1/this.sizes.width,1/this.sizes.height),this.composerProfile.addPass(this.effectFXAAProfile),this.composerPortfolio.addPass(this.effectFXAAPortfolio))}setDebug(){if(this.debug.active){if(this.enablePostProcessing){const i={edgeStrength:this.outlinePassProfile.edgeStrength,edgeGlow:this.outlinePassProfile.edgeGlow,edgeThickness:this.outlinePassProfile.edgeThickness,pulsePeriod:this.outlinePassProfile.pulsePeriod,usePatternTexture:this.outlinePassProfile.usePatternTexture},n=r=>{r(this.outlinePassProfile),r(this.outlinePassPortfolio)};this.outlineFolder.add(i,"edgeStrength",.01,10).onChange(r=>{n(s=>s.edgeStrength=Number(r))}),this.outlineFolder.add(i,"edgeGlow",0,1).onChange(r=>{n(s=>s.edgeGlow=Number(r))}),this.outlineFolder.add(i,"edgeThickness",1,4).onChange(r=>{n(s=>s.edgeThickness=Number(r))}),this.outlineFolder.add(i,"pulsePeriod",0,5).onChange(r=>{n(s=>s.pulsePeriod=Number(r))}),this.outlineFolder.add(i,"usePatternTexture").onChange(r=>{n(s=>s.usePatternTexture=r)})}const e={NoToneMapping:tn,LinearToneMapping:wh,ReinhardToneMapping:Ch,CineonToneMapping:Do,ACESFilmicToneMapping:Rh};this.rendererFolder.add(this.instance,"toneMapping",e).name("Tone Mapping").onChange(i=>{this.instance.toneMapping=i,this.composerProfile&&(this.composerProfile.toneMapping=i),this.composerPortfolio&&(this.composerPortfolio.toneMapping=i)}),this.rendererFolder.add(this.instance,"toneMappingExposure",0,5,.01).name("Exposure");const t={LinearEncoding:void 0,sRGBEncoding:void 0};this.rendererFolder.add(this.instance,"outputEncoding",t).name("Output Encoding").onChange(()=>{this.instance.outputEncoding=parseInt(this.instance.outputEncoding)})}}addSelectedObject(e){this.selectedObjects.push(e)}removeSelectedObject(){this.selectedObjects.pop()}enableOutline(){this.cursor.isFirstSection?this.outlinePassProfile.selectedObjects=this.selectedObjects:this.outlinePassPortfolio.selectedObjects=this.selectedObjects}setInstance(){this.instance=new iS({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.instance.toneMapping=tn,this.instance.toneMappingExposure=1.75,this.instance.setClearColor("#211d20"),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.instance.autoUpdate=!1}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio);const e=this.sizes.isMobile?this.sizes.width:this.sizes.width/2,t=this.sizes.isMobile?this.sizes.height/2:this.sizes.height;this.composerProfile.setSize(e,t),this.composerProfile.setPixelRatio(this.sizes.pixelRatio),this.composerPortfolio.setSize(e,t),this.composerPortfolio.setPixelRatio(this.sizes.pixelRatio),this.outlinePassProfile&&this.outlinePassPortfolio&&(this.outlinePassProfile.setSize(e,t),this.outlinePassPortfolio.setSize(e,t)),this.effectFXAAProfile&&this.effectFXAAPortfolio&&(this.effectFXAAProfile.uniforms.resolution.value.set(1/e,1/t),this.effectFXAAPortfolio.uniforms.resolution.value.set(1/e,1/t))}update(){this.instance.setScissorTest(!0),this.sizes.isMobile?(this.instance.setViewport(0,this.sizes.height/2,this.sizes.width,this.sizes.height/2),this.instance.setScissor(0,this.sizes.height/2,this.sizes.width,this.sizes.height/2),this.instance.render(this.sceneProfile,this.camera.instance),this.instance.setViewport(0,0,this.sizes.width,this.sizes.height/2),this.instance.setScissor(0,0,this.sizes.width,this.sizes.height/2),this.instance.render(this.scenePortfolio,this.camera.instance)):(this.instance.setViewport(0,0,this.sizes.width/2,this.sizes.height),this.instance.setScissor(0,0,this.sizes.width/2,this.sizes.height),this.cursor.isFirstSection?this.composerProfile.render():this.instance.render(this.sceneProfile,this.camera.instance),this.instance.setViewport(this.sizes.width/2,0,this.sizes.width/2,this.sizes.height),this.instance.setScissor(this.sizes.width/2,0,this.sizes.width/2,this.sizes.height),this.cursor.isFirstSection?this.instance.render(this.scenePortfolio,this.camera.instance):(this.camera.instance.layers.set(0),this.composerPortfolio.render(),this.instance.clearDepth(),this.instance.autoClear=!1,this.camera.instance.layers.set(1),this.instance.render(this.scenePortfolio,this.camera.instance),this.camera.instance.layers.set(0),this.camera.instance.layers.enable(1))),this.enablePostProcessing&&this.enableOutline()}}function Cn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function jp(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Es={duration:.5,overwrite:!1,delay:0},ru,Kt,xt,zi=1e8,pt=1/zi,ah=Math.PI*2,BS=ah/4,zS=0,Yp=Math.sqrt,GS=Math.cos,VS=Math.sin,Wt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},On=function(e){return typeof e=="number"},su=function(e){return typeof e>"u"},vn=function(e){return typeof e=="object"},vi=function(e){return e!==!1},au=function(){return typeof window<"u"},mo=function(e){return Et(e)||Wt(e)},qp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ti=Array.isArray,oh=/(?:-?\.?\d|\.)+/gi,Kp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zp=/[+-]=-?[.\d]+/,Jp=/[^,'"\[\]\s]+/gi,HS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,un,lh,ou,Li={},zo={},$p,Qp=function(e){return(zo=As(e,Li))&&Si},lu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ta=function(e,t){return!t&&console.warn(e)},em=function(e,t){return e&&(Li[e]=t)&&zo&&(zo[e]=t)||Li},Ea=function(){return 0},WS={suppressEvents:!0,isStart:!0,kill:!1},Eo={suppressEvents:!0,kill:!1},XS={suppressEvents:!0},cu={},tr=[],ch={},tm,wi={},Jl={},mf=30,Ao=[],hu="",uu=function(e){var t=e[0],i,n;if(vn(t)||Et(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Ao.length;n--&&!Ao[n].targetTest(t););i=Ao[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Em(e[n],i)))||e.splice(n,1);return e},Tr=function(e){return e._gsap||uu(Gi(e))[0]._gsap},im=function(e,t,i){return(i=e[t])&&Et(i)?e[t]():su(i)&&e.getAttribute&&e.getAttribute(t)||i},xi=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},hs=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},jS=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Go=function(){var e=tr.length,t=tr.slice(0),i,n;for(ch={},tr.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},du=function(e){return!!(e._initted||e._startAt||e.add)},nm=function(e,t,i,n){tr.length&&!Kt&&Go(),e.render(t,i,!!(Kt&&t<0&&du(e))),tr.length&&!Kt&&Go()},rm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jp).length<2?t:Wt(e)?e.trim():e},sm=function(e){return e},Ii=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},YS=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},As=function(e,t){for(var i in t)e[i]=t[i];return e},gf=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=vn(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},Vo=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},pa=function(e){var t=e.parent||bt,i=e.keyframes?YS(ti(e.keyframes)):Ii;if(vi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},qS=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},am=function(e,t,i,n,r){var s=e[n],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=s,t.parent=t._dp=e,t},el=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,s=t._next;r?r._next=s:e[i]===t&&(e[i]=s),s?s._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},nr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Er=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},KS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hh=function(e,t,i,n){return e._startAt&&(Kt?e._startAt.revert(Eo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},ZS=function a(e){return!e||e._ts&&a(e.parent)},_f=function(e){return e._repeat?ws(e._tTime,e=e.duration()+e._rDelay)*e:0},ws=function(e,t){var i=Math.floor(e=Dt(e/t));return e&&i===e?i-1:i},Ho=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},tl=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},il=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Dt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),tl(e),i._dirty||Er(i,e)),e},om=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ho(e.rawTime(),t),(!t._dur||Ia(0,t.totalDuration(),i)-t._tTime>pt)&&t.render(i,!0)),Er(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-pt}},fn=function(e,t,i,n){return t.parent&&nr(t),t._start=Dt((On(i)?i:i||e!==bt?Oi(e,i,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),am(e,t,"_first","_last",e._sort?"_start":0),uh(t)||(e._recent=t),n||om(e,t),e._ts<0&&il(e,e._tTime),e},lm=function(e,t){return(Li.ScrollTrigger||lu("scrollTrigger",t))&&Li.ScrollTrigger.create(t,e)},cm=function(e,t,i,n,r){if(pu(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&tm!==Ci.frame)return tr.push(e),e._lazy=[r,n],1},JS=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},uh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},$S=function(e,t,i,n){var r=e.ratio,s=t<0||!t&&(!e._start&&JS(e)&&!(!e._initted&&uh(e))||(e._ts<0||e._dp._ts<0)&&!uh(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Ia(0,e._tDur,t),h=ws(l,o),e._yoyo&&h&1&&(s=1-s),h!==ws(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Kt||n||e._zTime===pt||!t&&e._zTime){if(!e._initted&&cm(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?pt:0),i||(i=t&&!u),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&hh(e,t,i,!0),e._onUpdate&&!i&&Ri(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&nr(e,1),!i&&!Kt&&(Ri(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},QS=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Cs=function(e,t,i,n){var r=e._repeat,s=Dt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Dt(s*(r+1)+e._rDelay*r):s,o>0&&!n&&il(e,e._tTime=e._tDur*o),e.parent&&tl(e),i||Er(e.parent,e),e},vf=function(e){return e instanceof ci?Er(e):Cs(e,e._dur)},eM={_start:0,endTime:Ea,totalDuration:Ea},Oi=function a(e,t,i){var n=e.labels,r=e._recent||eM,s=e.duration()>=zi?r.endTime(!1):e._dur,o,l,c;return Wt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(ti(i)?i[0]:i).totalDuration()),o>1?a(e,t.substr(0,o-1),i)+l:s+l)):t==null?s:+t},ma=function(e,t,i){var n=On(t[1]),r=(n?2:1)+(e<2?0:1),s=t[r],o,l;if(n&&(s.duration=t[1]),s.parent=i,e){for(o=s,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=vi(l.vars.inherit)&&l.parent;s.immediateRender=vi(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Pt(t[0],s,t[r+1])},or=function(e,t){return e||e===0?t(e):t},Ia=function(e,t,i){return i<e?e:i>t?t:i},ei=function(e,t){return!Wt(e)||!(t=HS.exec(e))?"":t[1]},tM=function(e,t,i){return or(i,function(n){return Ia(e,t,n)})},dh=[].slice,hm=function(e,t){return e&&vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vn(e[0]))&&!e.nodeType&&e!==un},iM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Wt(n)&&!t||hm(n,1)?(r=i).push.apply(r,Gi(n)):i.push(n)})||i},Gi=function(e,t,i){return xt&&!t&&xt.selector?xt.selector(e):Wt(e)&&!i&&(lh||!Rs())?dh.call((t||ou).querySelectorAll(e),0):ti(e)?iM(e,i):hm(e)?dh.call(e,0):e?[e]:[]},fh=function(e){return e=Gi(e)[0]||Ta("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Gi(t,i.querySelectorAll?i:i===e?Ta("Invalid scope")||ou.createElement("div"):e)}},um=function(e){return e.sort(function(){return .5-Math.random()})},dm=function(e){if(Et(e))return e;var t=vn(e)?e:{each:e},i=Ar(t.ease),n=t.from||0,r=parseFloat(t.base)||0,s={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,h=n,u=n;return Wt(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||t).length,p=s[g],m,x,y,v,M,A,T,C,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,zi])[1],!b){for(T=-zi;T<(T=_[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(p=s[g]=[],m=l?Math.min(b,g)*h-.5:n%b,x=b===zi?0:l?g*u/b-.5:n/b|0,T=0,C=zi,A=0;A<g;A++)y=A%b-m,v=x-(A/b|0),p[A]=M=c?Math.abs(c==="y"?v:y):Yp(y*y+v*v),M>T&&(T=M),M<C&&(C=M);n==="random"&&um(p),p.max=T-C,p.min=C,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(n==="edges"?-1:1),p.b=g<0?r-g:r,p.u=ei(t.amount||t.each)||0,i=i&&g<0?Sm(i):i}return g=(p[d]-p.min)/p.max||0,Dt(p.b+(i?i(g):g)*p.v)+p.u}},ph=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Dt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(On(i)?0:ei(i))}},fm=function(e,t){var i=ti(e),n,r;return!i&&vn(e)&&(n=i=e.radius||zi,e.values?(e=Gi(e.values),(r=!On(e[0]))&&(n*=n)):e=ph(e.increment)),or(t,i?Et(e)?function(s){return r=e(s),Math.abs(r-s)<=n?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=zi,h=0,u=e.length,d,f;u--;)r?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!n||c<=n?e[h]:s,r||h===s||On(s)?h:h+ei(s)}:ph(e))},pm=function(e,t,i,n){return or(ti(e)?!t:i===!0?!!(i=0):!n,function(){return ti(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},nM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,s){return s(r)},n)}},rM=function(e,t){return function(i){return e(parseFloat(i))+(t||ei(i))}},sM=function(e,t,i){return gm(e,t,0,1,i)},mm=function(e,t,i){return or(i,function(n){return e[~~t(n)]})},aM=function a(e,t,i){var n=t-e;return ti(e)?mm(e,a(0,e.length),t):or(i,function(r){return(n+(r-e)%n)%n+e})},oM=function a(e,t,i){var n=t-e,r=n*2;return ti(e)?mm(e,a(0,e.length-1),t):or(i,function(s){return s=(r+(s-e)%r)%r||0,e+(s>n?r-s:s)})},Aa=function(e){for(var t=0,i="",n,r,s,o;~(n=e.indexOf("random(",t));)s=e.indexOf(")",n),o=e.charAt(n+7)==="[",r=e.substr(n+7,s-n-7).match(o?Jp:oh),i+=e.substr(t,n-t)+pm(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return i+e.substr(t,e.length-t)},gm=function(e,t,i,n,r){var s=t-e,o=n-i;return or(r,function(l){return i+((l-e)/s*o||0)})},lM=function a(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var s=Wt(e),o={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),s)e={p:e},t={p:t};else if(ti(e)&&!ti(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(a(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=t}else n||(e=As(ti(e)?[]:{},e));if(!h){for(l in t)fu.call(o,e,l,"get",t[l]);r=function(_){return _u(_,o)||(s?e.p:e)}}}return or(i,r)},xf=function(e,t,i){var n=e.labels,r=zi,s,o,l;for(s in n)o=n[s]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Ri=function(e,t,i){var n=e.vars,r=n[t],s=xt,o=e._ctx,l,c,h;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&tr.length&&Go(),o&&(xt=o),h=l?r.apply(c,l):r.call(c),xt=s,h},oa=function(e){return nr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Ri(e,"onInterrupt"),e},ss,_m=[],vm=function(e){if(e)if(e=!e.name&&e.default||e,au()||e.headless){var t=e.name,i=Et(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Ea,render:_u,add:fu,kill:TM,modifier:MM,rawVars:0},s={targetTest:0,get:0,getSetter:gu,aliases:{},register:0};if(Rs(),e!==n){if(wi[t])return;Ii(n,Ii(Vo(e,r),s)),As(n.prototype,As(r,Vo(e,s))),wi[n.prop=t]=n,e.targetTest&&(Ao.push(n),cu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}em(t,n),e.register&&e.register(Si,n,yi)}else _m.push(e)},ft=255,la={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},$l=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ft+.5|0},xm=function(e,t,i){var n=e?On(e)?[e>>16,e>>8&ft,e&ft]:0:la.black,r,s,o,l,c,h,u,d,f,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),la[e])n=la[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&ft,n&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(oh),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,s=h<=.5?h*(c+1):h+c-h*c,r=h*2-s,n.length>3&&(n[3]*=1),n[0]=$l(l+1/3,r,s),n[1]=$l(l,r,s),n[2]=$l(l-1/3,r,s);else if(~e.indexOf("="))return n=e.match(Kp),i&&n.length<4&&(n[3]=1),n}else n=e.match(oh)||la.transparent;n=n.map(Number)}return t&&!_&&(r=n[0]/ft,s=n[1]/ft,o=n[2]/ft,u=Math.max(r,s,o),d=Math.min(r,s,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(s-o)/f+(s<o?6:0):u===s?(o-r)/f+2:(r-s)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},ym=function(e){var t=[],i=[],n=-1;return e.split(ir).forEach(function(r){var s=r.match(rs)||[];t.push.apply(t,s),i.push(n+=s.length+1)}),t.c=i,t},yf=function(e,t,i){var n="",r=(e+n).match(ir),s=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=xm(d,t,1))&&s+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=ym(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(ir,"1").split(rs),u=c.length-1;o<u;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=e.split(ir),u=c.length-1;o<u;o++)n+=c[o]+r[o];return n+c[u]},ir=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in la)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),cM=/hsl[a]?\(/,bm=function(e){var t=e.join(" "),i;if(ir.lastIndex=0,ir.test(t))return i=cM.test(t),e[1]=yf(e[1],i),e[0]=yf(e[0],i,ym(e[1])),!0},wa,Ci=function(){var a=Date.now,e=500,t=33,i=a(),n=i,r=1e3/240,s=r,o=[],l,c,h,u,d,f,_=function g(p){var m=a()-n,x=p===!0,y,v,M,A;if((m>e||m<0)&&(i+=m-t),n+=m,M=n-i,y=M-s,(y>0||x)&&(A=++u.frame,d=M-u.time*1e3,u.time=M=M/1e3,s+=y+(y>=r?4:r-y),v=1),x||(l=c(g)),v)for(f=0;f<o.length;f++)o[f](M,d,A,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){$p&&(!lh&&au()&&(un=lh=window,ou=un.document||{},Li.gsap=Si,(un.gsapVersions||(un.gsapVersions=[])).push(Si.version),Qp(zo||un.GreenSockGlobals||!un.gsap&&un||{}),_m.forEach(vm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,s-u.time*1e3+1|0)},wa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),wa=0,c=Ea},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),s=u.time*1e3+r},add:function(p,m,x){var y=m?function(v,M,A,T){p(v,M,A,T),u.remove(y)}:p;return u.remove(p),o[x?"unshift":"push"](y),Rs(),y},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},u}(),Rs=function(){return!wa&&Ci.wake()},rt={},hM=/^[\d.\-M][\d.\-,\s]/,uM=/["']/g,dM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,s=i.length,o,l,c;r<s;r++)l=i[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(uM,"").trim():+c,n=l.substr(o+1).trim();return t},fM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},pM=function(e){var t=(e+"").split("("),i=rt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[dM(t[1])]:fM(e).split(",").map(rm)):rt._CE&&hM.test(e)?rt._CE("",e):i},Sm=function(e){return function(t){return 1-e(1-t)}},Mm=function a(e,t){for(var i=e._first,n;i;)i instanceof ci?a(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?a(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Ar=function(e,t){return e&&(Et(e)?e:rt[e]||pM(e))||t},Lr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},s;return xi(e,function(o){rt[o]=Li[o]=r,rt[s=o.toLowerCase()]=i;for(var l in r)rt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[o+"."+l]=r[l]}),r},Tm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ql=function a(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),s=r/ah*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*VS((h-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Tm(o);return r=ah/r,l.config=function(c,h){return a(e,c,h)},l},ec=function a(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Tm(i);return n.config=function(r){return a(e,r)},n};xi("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Lr(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;Lr("Elastic",Ql("in"),Ql("out"),Ql());(function(a,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?a*o*o:o<i?a*Math.pow(o-1.5/e,2)+.75:o<n?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Lr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Lr("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Lr("Circ",function(a){return-(Yp(1-a*a)-1)});Lr("Sine",function(a){return a===1?1:-GS(a*BS)+1});Lr("Back",ec("in"),ec("out"),ec());rt.SteppedEase=rt.steps=Li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,s=1-pt;return function(o){return((n*Ia(0,s,o)|0)+r)*i}}};Es.ease=rt["quad.out"];xi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return hu+=a+","+a+"Params,"});var Em=function(e,t){this.id=zS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:im,this.set=t?t.getSetter:gu},Ca=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cs(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),wa||Ci.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Cs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Rs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(il(this,i),!r._dp||r.parent||om(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===pt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),nm(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_f(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_f(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ws(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Ho(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-pt?0:this._rts,this.totalTime(Ia(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),tl(this),KS(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&fn(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(vi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ho(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=XS);var n=Kt;return Kt=i,du(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Kt=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,vf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,vf(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Oi(this,i),vi(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,vi(n)),this._dur||(this._zTime=-pt),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-pt)},e.eventCallback=function(i,n,r){var s=this.vars;return arguments.length>1?(n?(s[i]=n,r&&(s[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete s[i],this):s[i]},e.then=function(i){var n=this;return new Promise(function(r){var s=Et(i)?i:sm,o=function(){var c=n.then;n.then=null,Et(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=c),r(s),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){oa(this)},a}();Ii(Ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var ci=function(a){jp(e,a);function e(i,n){var r;return i===void 0&&(i={}),r=a.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=vi(i.sortChildren),bt&&fn(i.parent||bt,Cn(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&lm(Cn(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,s){return ma(0,arguments,this),this},t.from=function(n,r,s){return ma(1,arguments,this),this},t.fromTo=function(n,r,s,o){return ma(2,arguments,this),this},t.set=function(n,r,s){return r.duration=0,r.parent=this,pa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Pt(n,r,Oi(this,s),1),this},t.call=function(n,r,s){return fn(this,Pt.delayedCall(0,n,r),s)},t.staggerTo=function(n,r,s,o,l,c,h){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=h,s.parent=this,new Pt(n,s,Oi(this,l)),this},t.staggerFrom=function(n,r,s,o,l,c,h){return s.runBackwards=1,pa(s).immediateRender=vi(s.immediateRender),this.staggerTo(n,r,s,o,l,c,h)},t.staggerFromTo=function(n,r,s,o,l,c,h,u){return o.startAt=s,pa(o).immediateRender=vi(o.immediateRender),this.staggerTo(n,r,o,l,c,h,u)},t.render=function(n,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Dt(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,p,m,x,y,v,M,A,T;if(this!==bt&&h>l&&n>=0&&(h=l),h!==this._tTime||s||u){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),d=h,v=this._start,y=this._ts,m=!y,u&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,s);if(d=Dt(h%p),h===l?(g=this._repeat,d=c):(M=Dt(h/p),g=~~M,g&&g===M&&(d=c,g--),d>c&&(d=c)),M=ws(this._tTime,p),!o&&this._tTime&&M!==g&&this._tTime-M*p-this._dur<=0&&(M=g),A&&g&1&&(d=c-d,T=1),g!==M&&!this._lock){var C=A&&M&1,b=C===(A&&g&1);if(g<M&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(T?0:Dt(g*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ri(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Mm(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=QS(this,Dt(o),Dt(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&!r&&!M&&(Ri(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(n,r,s);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,s),d!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=-pt);break}}f=_}else{f=this._last;for(var S=n<0?n:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(n,r,s);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,r,s||Kt&&du(f)),d!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=S?-pt:pt);break}}f=_}}if(x&&!r&&(this.pause(),x.render(d>=o?0:-pt)._zTime=d>=o?1:-1,this._ts))return this._start=v,tl(this),this.render(n,r,s);this._onUpdate&&!r&&Ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&nr(this,1),!r&&!(n<0&&!o)&&(h||o||!l)&&(Ri(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var s=this;if(On(r)||(r=Oi(this,r,n)),!(n instanceof Ca)){if(ti(n))return n.forEach(function(o){return s.add(o,r)}),this;if(Wt(n))return this.addLabel(n,r);if(Et(n))n=Pt.delayedCall(0,n);else return this}return this!==n?fn(this,n,r):this},t.getChildren=function(n,r,s,o){n===void 0&&(n=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-zi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pt?r&&l.push(c):(s&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===n)return r[s]},t.remove=function(n){return Wt(n)?this.removeLabel(n):Et(n)?this.killTweensOf(n):(n.parent===this&&el(this,n),n===this._recent&&(this._recent=this._last),Er(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Ci.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Oi(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,s){var o=Pt.delayedCall(0,r||Ea,s);return o.data="isPause",this._hasPause=1,fn(this,o,Oi(this,n))},t.removePause=function(n){var r=this._first;for(n=Oi(this,n);r;)r._start===n&&r.data==="isPause"&&nr(r),r=r._next},t.killTweensOf=function(n,r,s){for(var o=this.getTweensOf(n,s),l=o.length;l--;)$n!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var s=[],o=Gi(n),l=this._first,c=On(r),h;l;)l instanceof Pt?jS(l._targets,o)&&(c?(!$n||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(h=l.getTweensOf(o,r)).length&&s.push.apply(s,h),l=l._next;return s},t.tweenTo=function(n,r){r=r||{};var s=this,o=Oi(s,n),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Pt.to(s,Ii({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||pt,onStart:function(){if(s.pause(),!f){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==p&&Cs(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(n,r,s){return this.tweenTo(r,Ii({startAt:{time:Oi(this,n)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),xf(this,Oi(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),xf(this,Oi(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(n,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=n);return Er(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return a.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Er(this)},t.totalDuration=function(n){var r=0,s=this,o=s._last,l=zi,c,h,u;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-n:n));if(s._dirty){for(u=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,fn(s,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!s._dp||u&&u.smoothChildTiming)&&(s._start+=h/s._ts,s._time-=h,s._tTime-=h),s.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Cs(s,s===bt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(n){if(bt._ts&&(nm(bt,Ho(n,bt)),tm=Ci.frame),Ci.frame>=mf){mf+=Di.autoSleep||120;var r=bt._first;if((!r||!r._ts)&&Di.autoSleep&&Ci._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ci.sleep()}}},e}(Ca);Ii(ci.prototype,{_lock:0,_hasPause:0,_forcing:0});var mM=function(e,t,i,n,r,s,o){var l=new yi(this._pt,e,t,0,1,Dm,null,r),c=0,h=0,u,d,f,_,g,p,m,x;for(l.b=i,l.e=n,i+="",n+="",(m=~n.indexOf("random("))&&(n=Aa(n)),s&&(x=[i,n],s(x,e,t),i=x[0],n=x[1]),d=i.match(Zl)||[];u=Zl.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?hs(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=Zl.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Zp.test(n)||m)&&(l.e=0),this._pt=l,l},fu=function(e,t,i,n,r,s,o,l,c,h){Et(n)&&(n=n(r||0,e,s));var u=e[t],d=i!=="get"?i:Et(u)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Et(u)?c?yM:Rm:mu,_;if(Wt(n)&&(~n.indexOf("random(")&&(n=Aa(n)),n.charAt(1)==="="&&(_=hs(d,n)+(ei(d)||0),(_||_===0)&&(n=_))),!h||d!==n||mh)return!isNaN(d*n)&&n!==""?(_=new yi(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?SM:Pm,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!u&&!(t in e)&&lu(t,n),mM.call(this,e,t,d,n,f,l||Di.stringFilter,c))},gM=function(e,t,i,n,r){if(Et(e)&&(e=ga(e,r,t,i,n)),!vn(e)||e.style&&e.nodeType||ti(e)||qp(e))return Wt(e)?ga(e,r,t,i,n):e;var s={},o;for(o in e)s[o]=ga(e[o],r,t,i,n);return s},Am=function(e,t,i,n,r,s){var o,l,c,h;if(wi[e]&&(o=new wi[e]).init(r,o.rawVars?t[e]:gM(t[e],n,r,s,i),i,n,s)!==!1&&(i._pt=l=new yi(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==ss))for(c=i._ptLookup[i._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},$n,mh,pu=function a(e,t,i){var n=e.vars,r=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!ru,v=e.timeline,M,A,T,C,b,S,D,P,L,F,G,k,Z;if(v&&(!d||!r)&&(r="none"),e._ease=Ar(r,Es.ease),e._yEase=u?Sm(Ar(u===!0?r:u,Es.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!n.runBackwards,!v||d&&!n.stagger){if(P=p[0]?Tr(p[0]).harness:0,k=P&&n[P.prop],M=Vo(n,cu),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?Eo:WS),g._lazy=0),s){if(nr(e._startAt=Pt.set(p,Ii({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&vi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ri(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!o&&!f)&&e._startAt.revert(Eo),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),T=Ii({overwrite:!1,data:"isFromStart",lazy:o&&!g&&vi(l),immediateRender:o,stagger:0,parent:m},M),k&&(T[P.prop]=k),nr(e._startAt=Pt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(Eo):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&vi(l)||l&&!_,A=0;A<p.length;A++){if(b=p[A],D=b._gsap||uu(p)[A]._gsap,e._ptLookup[A]=F={},ch[D.id]&&tr.length&&Go(),G=x===p?A:x.indexOf(b),P&&(L=new P).init(b,k||M,e,G,x)!==!1&&(e._pt=C=new yi(e._pt,b,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(W){F[W]=C}),L.priority&&(S=1)),!P||k)for(T in M)wi[T]&&(L=Am(T,M,e,G,b,x))?L.priority&&(S=1):F[T]=C=fu.call(e,b,T,"get",M[T],G,x,0,n.stringFilter);e._op&&e._op[A]&&e.kill(b,e._op[A]),y&&e._pt&&($n=e,bt.killTweensOf(b,F,e.globalTime(t)),Z=!e.parent,$n=0),e._pt&&l&&(ch[D.id]=1)}S&&Lm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,d&&t<=0&&v.render(zi,!0,!0)},_M=function(e,t,i,n,r,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return mh=1,e.vars[t]="+=0",pu(e,o),mh=0,l?Ta(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!r?n:h.s+(n||0)+s*h.c,h.c=i-h.s,u.e&&(u.e=wt(i)+ei(u.e)),u.b&&(u.b=h.s+ei(u.b))},vM=function(e,t){var i=e[0]?Tr(e[0]).harness:0,n=i&&i.aliases,r,s,o,l;if(!n)return t;r=As({},t);for(s in n)if(s in r)for(l=n[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},xM=function(e,t,i,n){var r=t.ease||n||"power1.inOut",s,o;if(ti(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},ga=function(e,t,i,n,r){return Et(e)?e.call(t,i,n,r):Wt(e)&&~e.indexOf("random(")?Aa(e):e},wm=hu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cm={};xi(wm+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Cm[a]=1});var Pt=function(a){jp(e,a);function e(i,n,r,s){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=a.call(this,s?n:pa(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=n.parent||bt,y=(ti(i)||qp(i)?On(i[0]):"length"in n)?[i]:Gi(i),v,M,A,T,C,b,S,D;if(o._targets=y.length?uu(y):Ta("GSAP target "+i+" not found. https://gsap.com",!Di.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||mo(c)||mo(h)){if(n=o.vars,v=o.timeline=new ci({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=Cn(o),v._start=0,d||mo(c)||mo(h)){if(T=y.length,S=d&&dm(d),vn(d))for(C in d)~wm.indexOf(C)&&(D||(D={}),D[C]=d[C]);for(M=0;M<T;M++)A=Vo(n,Cm),A.stagger=0,m&&(A.yoyoEase=m),D&&As(A,D),b=y[M],A.duration=+ga(c,Cn(o),M,b,y),A.delay=(+ga(h,Cn(o),M,b,y)||0)-o._delay,!d&&T===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),v.to(b,A,S?S(M,b,y):0),v._ease=rt.none;v.duration()?c=h=0:o.timeline=0}else if(_){pa(Ii(v.vars.defaults,{ease:"none"})),v._ease=Ar(_.ease||n.ease||"none");var P=0,L,F,G;if(ti(_))_.forEach(function(k){return v.to(y,k,">")}),v.duration();else{A={};for(C in _)C==="ease"||C==="easeEach"||xM(C,_[C],A,_.easeEach);for(C in A)for(L=A[C].sort(function(k,Z){return k.t-Z.t}),P=0,M=0;M<L.length;M++)F=L[M],G={ease:F.e,duration:(F.t-(M?L[M-1].t:0))/100*c},G[C]=F.v,v.to(y,G,P),P+=G.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return f===!0&&!ru&&($n=Cn(o),bt.killTweensOf(y),$n=0),fn(x,Cn(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!_&&o._start===Dt(x._time)&&vi(u)&&ZS(Cn(o))&&x.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-h)||0)),p&&lm(Cn(o),p),o}var t=e.prototype;return t.render=function(n,r,s){var o=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-pt&&!h?l:n<pt?0:n,d,f,_,g,p,m,x,y,v;if(!c)$S(this,n,r,s);else if(u!==this._tTime||!n||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,r,s);if(d=Dt(u%g),u===l?(_=this._repeat,d=c):(p=Dt(u/g),_=~~p,_&&_===p?(d=c,_--):d>c&&(d=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,d=c-d),p=ws(this._tTime,g),d===o&&!s&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(y&&this._yEase&&Mm(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=s=1,this.render(Dt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(cm(this,h?n:d,s,r,u))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(n,r,s)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!o&&u&&!r&&!p&&(Ri(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;y&&y.render(n<0?n:y._dur*y._ease(d/this._dur),r,s)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&hh(this,n,r,s),Ri(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Ri(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&hh(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&nr(this,1),!r&&!(h&&!o)&&(u||o||m)&&(Ri(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,s,o,l){wa||Ci.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||pu(this,c),h=this._ease(c/this._dur),_M(this,n,r,s,o,h,c,l)?this.resetTo(n,r,s,o,1):(il(this,0),this.parent||am(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?oa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Kt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,$n&&$n.vars.overwrite!==!0)._first||oa(this),this.parent&&s!==this.timeline.totalDuration()&&Cs(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=n?Gi(n):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,p,m;if((!r||r==="all")&&qS(o,l))return r==="all"&&(this._pt=0),oa(this);for(u=this._op=this._op||[],r!=="all"&&(Wt(r)&&(g={},xi(r,function(x){return g[x]=1}),r=g),r=vM(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],r==="all"?(u[m]=r,_=d,f={}):(f=u[m]=u[m]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&el(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&oa(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return ma(1,arguments)},e.delayedCall=function(n,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(n,r,s){return ma(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,s){return bt.killTweensOf(n,r,s)},e}(Ca);Ii(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xi("staggerTo,staggerFrom,staggerFromTo",function(a){Pt[a]=function(){var e=new ci,t=dh.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var mu=function(e,t,i){return e[t]=i},Rm=function(e,t,i){return e[t](i)},yM=function(e,t,i,n){return e[t](n.fp,i)},bM=function(e,t,i){return e.setAttribute(t,i)},gu=function(e,t){return Et(e[t])?Rm:su(e[t])&&e.setAttribute?bM:mu},Pm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},SM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Dm=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},_u=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},MM=function(e,t,i,n){for(var r=this._pt,s;r;)s=r._next,r.p===n&&r.modifier(e,t,i),r=s},TM=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?el(this,t,"_pt"):t.dep||(i=1),t=n;return!i},EM=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Lm=function(e){for(var t=e._pt,i,n,r,s;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:s)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:s=t,t=i}e._pt=r},yi=function(){function a(t,i,n,r,s,o,l,c,h){this.t=i,this.s=r,this.c=s,this.p=n,this.r=o||Pm,this.d=l||this,this.set=c||mu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=EM,this.m=i,this.mt=r,this.tween=n},a}();xi(hu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return cu[a]=1});Li.TweenMax=Li.TweenLite=Pt;Li.TimelineLite=Li.TimelineMax=ci;bt=new ci({sortChildren:!1,defaults:Es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Di.stringFilter=bm;var wr=[],wo={},AM=[],bf=0,wM=0,tc=function(e){return(wo[e]||AM).map(function(t){return t()})},gh=function(){var e=Date.now(),t=[];e-bf>2&&(tc("matchMediaInit"),wr.forEach(function(i){var n=i.queries,r=i.conditions,s,o,l,c;for(o in n)s=un.matchMedia(n[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(i.revert(),l&&t.push(i))}),tc("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),bf=e,tc("matchMedia"))},Im=function(){function a(t,i){this.selector=i&&fh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=wM++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,n,r){Et(i)&&(r=n,n=i,i=Et);var s=this,o=function(){var c=xt,h=s.selector,u;return c&&c!==s&&c.data.push(s),r&&(s.selector=fh(r)),xt=s,u=n.apply(s,arguments),Et(u)&&s._r.push(u),xt=c,s.selector=h,s.isReverted=!1,u};return s.last=o,i===Et?o(s,function(l){return s.add(null,l)}):i?s[i]=o:o},e.ignore=function(i){var n=xt;xt=null,i(this),xt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof a?i.push.apply(i,n.getTweens()):n instanceof Pt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof ci?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pt)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var s=wr.length;s--;)wr[s].id===this.id&&wr.splice(s,1)},e.revert=function(i){this.kill(i||{})},a}(),CM=function(){function a(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=a.prototype;return e.add=function(i,n,r){vn(i)||(i={matches:i});var s=new Im(0,r||this.scope),o=s.conditions={},l,c,h;xt&&!s.selector&&(s.selector=xt.selector),this.contexts.push(s),n=s.add("onMatch",n),s.queries=i;for(c in i)c==="all"?h=1:(l=un.matchMedia(i[c]),l&&(wr.indexOf(s)<0&&wr.push(s),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(gh):l.addEventListener("change",gh)));return h&&n(s,function(u){return s.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},a}(),Wo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return vm(n)})},timeline:function(e){return new ci(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Wt(e)&&(e=Gi(e)[0]);var r=Tr(e||{}).get,s=i?sm:rm;return i==="native"&&(i=""),e&&(t?s((wi[t]&&wi[t].get||r)(e,t,i,n)):function(o,l,c){return s((wi[o]&&wi[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Gi(e),e.length>1){var n=e.map(function(h){return Si.quickSetter(h,t,i)}),r=n.length;return function(h){for(var u=r;u--;)n[u](h)}}e=e[0]||{};var s=wi[t],o=Tr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(h){var u=new s;ss._pt=0,u.init(e,i?h+i:h,ss,0,[e]),u.render(1,u),ss._pt&&_u(1,ss)}:o.set(e,l);return s?c:function(h){return c(e,l,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,r=Si.to(e,Ii((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),s=function(l,c,h){return r.resetTo(t,l,c,h)};return s.tween=r,s},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ar(e.ease,Es.ease)),gf(Es,e||{})},config:function(e){return gf(Di,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,s=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!wi[o]&&!Li[o]&&Ta(t+" effect requires "+o+" plugin.")}),Jl[t]=function(o,l,c){return i(Gi(o),Ii(l||{},r),c)},s&&(ci.prototype[t]=function(o,l,c){return this.add(Jl[t](o,vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Ar(t)},parseEase:function(e,t){return arguments.length?Ar(e,t):rt},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ci(e),n,r;for(i.smoothChildTiming=vi(e.smoothChildTiming),bt.remove(i),i._dp=0,i._time=i._tTime=bt._time,n=bt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Pt&&n.vars.onComplete===n._targets[0]))&&fn(i,n,n._start-n._delay),n=r;return fn(bt,i,0),i},context:function(e,t){return e?new Im(e,t):xt},matchMedia:function(e){return new CM(e)},matchMediaRefresh:function(){return wr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||gh()},addEventListener:function(e,t){var i=wo[e]||(wo[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=wo[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:aM,wrapYoyo:oM,distribute:dm,random:pm,snap:fm,normalize:sM,getUnit:ei,clamp:tM,splitColor:xm,toArray:Gi,selector:fh,mapRange:gm,pipe:nM,unitize:rM,interpolate:lM,shuffle:um},install:Qp,effects:Jl,ticker:Ci,updateRoot:ci.updateRoot,plugins:wi,globalTimeline:bt,core:{PropTween:yi,globals:em,Tween:Pt,Timeline:ci,Animation:Ca,getCache:Tr,_removeLinkedListItem:el,reverting:function(){return Kt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return ru=e}}};xi("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Wo[a]=Pt[a]});Ci.add(ci.updateRoot);ss=Wo.to({},{duration:0});var RM=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},PM=function(e,t){var i=e._targets,n,r,s;for(n in t)for(r=i.length;r--;)s=e._ptLookup[r][n],s&&(s=s.d)&&(s._pt&&(s=RM(s,n)),s&&s.modifier&&s.modifier(t[n],e,i[r],n))},ic=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,s){s._onInit=function(o){var l,c;if(Wt(r)&&(l={},xi(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}PM(o,r)}}}},Si=Wo.registerPlugin({name:"attr",init:function(e,t,i,n,r){var s,o,l;this.tween=i;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],n,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)Kt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ic("roundProps",ph),ic("modifiers"),ic("snap",fm))||Wo;Pt.version=ci.version=Si.version="3.13.0";$p=1;au()&&Rs();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sf,Qn,us,vu,Mr,Mf,xu,DM=function(){return typeof window<"u"},Nn={},yr=180/Math.PI,ds=Math.PI/180,$r=Math.atan2,Tf=1e8,yu=/([A-Z])/g,LM=/(left|right|width|margin|padding|x)/i,IM=/[\s,\(]\S/,pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_h=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},FM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},OM=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Um=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Fm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},NM=function(e,t,i){return e.style[t]=i},kM=function(e,t,i){return e.style.setProperty(t,i)},BM=function(e,t,i){return e._gsap[t]=i},zM=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},GM=function(e,t,i,n,r){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(r,s)},VM=function(e,t,i,n,r){var s=e._gsap;s[t]=i,s.renderTransform(r,s)},St="transform",bi=St+"Origin",HM=function a(e,t){var i=this,n=this.target,r=n.style,s=n._gsap;if(e in Nn&&r){if(this.tfm=this.tfm||{},e!=="transform")e=pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Pn(n,o)}):this.tfm[e]=s.x?s[e]:Pn(n,e),e===bi&&(this.tfm.zOrigin=s.zOrigin);else return pn.transform.split(",").forEach(function(o){return a.call(i,o,t)});if(this.props.indexOf(St)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(bi,t,"")),e=St}(r||t)&&this.props.push(e,t,r[e])},Om=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},WM=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(yu,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)n[s]=this.tfm[s];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=xu(),(!r||!r.isStart)&&!i[St]&&(Om(i),n.zOrigin&&i[bi]&&(i[bi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Nm=function(e,t){var i={target:e,props:[],revert:WM,save:HM};return e._gsap||Si.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},km,vh=function(e,t){var i=Qn.createElementNS?Qn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qn.createElement(e);return i&&i.style?i:Qn.createElement(e)},Vi=function a(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(yu,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&a(e,Ps(t)||t,1)||""},Ef="O,Moz,ms,Ms,Webkit".split(","),Ps=function(e,t,i){var n=t||Mr,r=n.style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Ef[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Ef[s]:"")+e},xh=function(){DM()&&window.document&&(Sf=window,Qn=Sf.document,us=Qn.documentElement,Mr=vh("div")||{style:{}},vh("div"),St=Ps(St),bi=St+"Origin",Mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",km=!!Ps("perspective"),xu=Si.core.reverting,vu=1)},Af=function(e){var t=e.ownerSVGElement,i=vh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),us.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),us.removeChild(i),r},wf=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Bm=function(e){var t,i;try{t=e.getBBox()}catch{t=Af(e),i=1}return t&&(t.width||t.height)||i||(t=Af(e)),t&&!t.width&&!t.x&&!t.y?{x:+wf(e,["x","cx","x1"])||0,y:+wf(e,["y","cy","y1"])||0,width:0,height:0}:t},zm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Bm(e))},Pr=function(e,t){if(t){var i=e.style,n;t in Nn&&t!==bi&&(t=St),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(yu,"-$1").toLowerCase())):i.removeAttribute(t)}},er=function(e,t,i,n,r,s){var o=new yi(e._pt,t,i,0,1,s?Fm:Um);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},Cf={deg:1,rad:1,turn:1},XM={grid:1,flex:1},rr=function a(e,t,i,n){var r=parseFloat(i)||0,s=(i+"").trim().substr((r+"").length)||"px",o=Mr.style,l=LM.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,p,m;if(n===s||!r||Cf[n]||Cf[s])return r;if(s!=="px"&&!d&&(r=a(e,t,i,"px")),m=e.getCTM&&zm(e),(f||s==="%")&&(Nn[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[h],wt(f?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(d?s:n),g=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Qn||!g.appendChild)&&(g=Qn.body),p=g._gsap,p&&f&&p.width&&l&&p.time===Ci.time&&!p.uncache)return wt(r/p.width*u);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+n,_=e[h],x?e.style[t]=x:Pr(e,t)}else(f||s==="%")&&!XM[Vi(g,"display")]&&(o.position=Vi(e,"position")),g===e&&(o.position="static"),g.appendChild(Mr),_=Mr[h],g.removeChild(Mr),o.position="absolute";return l&&f&&(p=Tr(g),p.time=Ci.time,p.width=g[h]),wt(d?_*r/u:_&&r?u/_*r:0)},Pn=function(e,t,i,n){var r;return vu||xh(),t in pn&&t!=="transform"&&(t=pn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Nn[t]&&t!=="transform"?(r=Pa(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:jo(Vi(e,bi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Xo[t]&&Xo[t](e,t,i)||Vi(e,t)||im(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?rr(e,t,r,i)+i:r},jM=function(e,t,i,n){if(!i||i==="none"){var r=Ps(t,e,1),s=r&&Vi(e,r,1);s&&s!==i?(t=r,i=s):t==="borderColor"&&(i=Vi(e,"borderTopColor"))}var o=new yi(this._pt,e.style,t,0,1,Dm),l=0,c=0,h,u,d,f,_,g,p,m,x,y,v,M;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Vi(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=e.style[t],e.style[t]=n,n=Vi(e,t)||n,g?e.style[t]=g:Pr(e,t)),h=[i,n],bm(h),i=h[0],n=h[1],d=i.match(rs)||[],M=n.match(rs)||[],M.length){for(;u=rs.exec(n);)p=u[0],x=n.substring(l,u.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),p.charAt(1)==="="&&(p=hs(f,p)+v),m=parseFloat(p),y=p.substr((m+"").length),l=rs.lastIndex-y.length,y||(y=y||Di.units[t]||v,l===n.length&&(n+=y,o.e+=y)),v!==y&&(f=rr(e,t,g,y)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Fm:Um;return Zp.test(n)&&(o.e=0),this._pt=o,o},Rf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},YM=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Rf[i]||i,t[1]=Rf[n]||n,t.join(" ")},qM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,s=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Nn[o]&&(l=1,o=o==="transformOrigin"?bi:St),Pr(i,o);l&&(Pr(i,St),s&&(s.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Pa(i,1),s.uncache=1,Om(n)))}},Xo={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var s=e._pt=new yi(e._pt,t,i,0,0,qM);return s.u=n,s.pr=-10,s.tween=r,e._props.push(i),1}}},Ra=[1,0,0,1,0,0],Gm={},Vm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Pf=function(e){var t=Vi(e,St);return Vm(t)?Ra:t.substr(7).match(Kp).map(wt)},bu=function(e,t){var i=e._gsap||Tr(e),n=e.style,r=Pf(e),s,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ra:r):(r===Ra&&!e.offsetParent&&e!==us&&!i.svg&&(l=n.display,n.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,us.appendChild(e)),r=Pf(e),l?n.display=l:Pr(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):us.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},yh=function(e,t,i,n,r,s){var o=e._gsap,l=r||bu(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,M=parseFloat(y[1])||0,A,T,C,b;i?l!==Ra&&(T=f*p-_*g)&&(C=v*(p/T)+M*(-g/T)+(g*x-p*m)/T,b=v*(-_/T)+M*(f/T)-(f*x-_*m)/T,v=C,M=b):(A=Bm(e),v=A.x+(~y[0].indexOf("%")?v/100*A.width:v),M=A.y+(~(y[1]||y[0]).indexOf("%")?M/100*A.height:M)),n||n!==!1&&o.smooth?(m=v-c,x=M-h,o.xOffset=u+(m*f+x*g)-m,o.yOffset=d+(m*_+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[bi]="0px 0px",s&&(er(s,o,"xOrigin",c,v),er(s,o,"yOrigin",h,M),er(s,o,"xOffset",u,o.xOffset),er(s,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},Pa=function(e,t){var i=e._gsap||new Em(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=Vi(e,bi)||"0",h,u,d,f,_,g,p,m,x,y,v,M,A,T,C,b,S,D,P,L,F,G,k,Z,W,J,q,U,X,ee,O,B;return h=u=d=g=p=m=x=y=v=0,f=_=1,i.svg=!!(e.getCTM&&zm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[St]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[St]!=="none"?l[St]:"")),n.scale=n.rotate=n.translate="none"),T=bu(e,i.svg),i.svg&&(i.uncache?(W=e.getBBox(),c=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),yh(e,Z||c,!!Z||i.originIsAbsolute,i.smooth!==!1,T)),M=i.xOrigin||0,A=i.yOrigin||0,T!==Ra&&(D=T[0],P=T[1],L=T[2],F=T[3],h=G=T[4],u=k=T[5],T.length===6?(f=Math.sqrt(D*D+P*P),_=Math.sqrt(F*F+L*L),g=D||P?$r(P,D)*yr:0,x=L||F?$r(L,F)*yr+g:0,x&&(_*=Math.abs(Math.cos(x*ds))),i.svg&&(h-=M-(M*D+A*L),u-=A-(M*P+A*F))):(B=T[6],ee=T[7],q=T[8],U=T[9],X=T[10],O=T[11],h=T[12],u=T[13],d=T[14],C=$r(B,X),p=C*yr,C&&(b=Math.cos(-C),S=Math.sin(-C),Z=G*b+q*S,W=k*b+U*S,J=B*b+X*S,q=G*-S+q*b,U=k*-S+U*b,X=B*-S+X*b,O=ee*-S+O*b,G=Z,k=W,B=J),C=$r(-L,X),m=C*yr,C&&(b=Math.cos(-C),S=Math.sin(-C),Z=D*b-q*S,W=P*b-U*S,J=L*b-X*S,O=F*S+O*b,D=Z,P=W,L=J),C=$r(P,D),g=C*yr,C&&(b=Math.cos(C),S=Math.sin(C),Z=D*b+P*S,W=G*b+k*S,P=P*b-D*S,k=k*b-G*S,D=Z,G=W),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=wt(Math.sqrt(D*D+P*P+L*L)),_=wt(Math.sqrt(k*k+B*B)),C=$r(G,k),x=Math.abs(C)>2e-4?C*yr:0,v=O?1/(O<0?-O:O):0),i.svg&&(Z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Vm(Vi(e,St)),Z&&e.setAttribute("transform",Z))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(f*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=d+s,i.scaleX=wt(f),i.scaleY=wt(_),i.rotation=wt(g)+o,i.rotationX=wt(p)+o,i.rotationY=wt(m)+o,i.skewX=x+o,i.skewY=y+o,i.transformPerspective=v+s,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[bi]=jo(c)),i.xOffset=i.yOffset=0,i.force3D=Di.force3D,i.renderTransform=i.svg?ZM:km?Hm:KM,i.uncache=0,i},jo=function(e){return(e=e.split(" "))[0]+" "+e[1]},nc=function(e,t,i){var n=ei(t);return wt(parseFloat(t)+parseFloat(rr(e,"x",i+"px",n)))+n},KM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Hm(e,t)},pr="0deg",ia="0px",mr=") ",Hm=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,p=i.transformPerspective,m=i.force3D,x=i.target,y=i.zOrigin,v="",M=m==="auto"&&e&&e!==1||m===!0;if(y&&(u!==pr||h!==pr)){var A=parseFloat(h)*ds,T=Math.sin(A),C=Math.cos(A),b;A=parseFloat(u)*ds,b=Math.cos(A),s=nc(x,s,T*b*-y),o=nc(x,o,-Math.sin(A)*-y),l=nc(x,l,C*b*-y+y)}p!==ia&&(v+="perspective("+p+mr),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(M||s!==ia||o!==ia||l!==ia)&&(v+=l!==ia||M?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+mr),c!==pr&&(v+="rotate("+c+mr),h!==pr&&(v+="rotateY("+h+mr),u!==pr&&(v+="rotateX("+u+mr),(d!==pr||f!==pr)&&(v+="skew("+d+", "+f+mr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+mr),x.style[St]=v||"translate(0, 0)"},ZM=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,p=i.xOffset,m=i.yOffset,x=i.forceCSS,y=parseFloat(s),v=parseFloat(o),M,A,T,C,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ds,c*=ds,M=Math.cos(l)*u,A=Math.sin(l)*u,T=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=ds,b=Math.tan(c-h),b=Math.sqrt(1+b*b),T*=b,C*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,A*=b)),M=wt(M),A=wt(A),T=wt(T),C=wt(C)):(M=u,C=d,A=T=0),(y&&!~(s+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=rr(f,"x",s,"px"),v=rr(f,"y",o,"px")),(_||g||p||m)&&(y=wt(y+_-(_*M+g*T)+p),v=wt(v+g-(_*A+g*C)+m)),(n||r)&&(b=f.getBBox(),y=wt(y+n/100*b.width),v=wt(v+r/100*b.height)),b="matrix("+M+","+A+","+T+","+C+","+y+","+v+")",f.setAttribute("transform",b),x&&(f.style[St]=b)},JM=function(e,t,i,n,r){var s=360,o=Wt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?yr:1),c=l-n,h=n+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),u==="cw"&&c<0?c=(c+s*Tf)%s-~~(c/s)*s:u==="ccw"&&c>0&&(c=(c-s*Tf)%s-~~(c/s)*s)),e._pt=d=new yi(e._pt,t,i,n,c,UM),d.e=h,d.u="deg",e._props.push(i),d},Df=function(e,t){for(var i in t)e[i]=t[i];return e},$M=function(e,t,i){var n=Df({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),s[St]=t,o=Pa(i,1),Pr(i,St),i.setAttribute("transform",c)):(c=getComputedStyle(i)[St],s[St]=t,o=Pa(i,1),s[St]=c);for(l in Nn)c=n[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=ei(c),_=ei(h),u=f!==_?rr(i,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new yi(e._pt,o,l,u,d-u,_h),e._pt.u=_||0,e._props.push(l));Df(o,n)};xi("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",n="Bottom",r="Left",s=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?a+o:"border"+o+a});Xo[e>1?"border"+a:a]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=s.map(function(_){return Pn(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},s.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var Wm={name:"css",register:xh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var s=this._props,o=e.style,l=i.vars.startAt,c,h,u,d,f,_,g,p,m,x,y,v,M,A,T,C;vu||xh(),this.styles=this.styles||Nm(e),C=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(h=t[g],!(wi[g]&&Am(g,t,i,n,e,r)))){if(f=typeof h,_=Xo[g],f==="function"&&(h=h.call(i,n,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Aa(h)),_)_(this,e,g,h,i)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",ir.lastIndex=0,ir.test(c)||(p=ei(c),m=ei(h)),m?p!==m&&(c=rr(e,g,c,m)+m):p&&(h+=p),this.add(o,"setProperty",c,h,n,r,0,0,g),s.push(g),C.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,r):l[g],Wt(c)&&~c.indexOf("random(")&&(c=Aa(c)),ei(c+"")||c==="auto"||(c+=Di.units[g]||ei(Pn(e,g))||""),(c+"").charAt(1)==="="&&(c=Pn(e,g))):c=Pn(e,g),d=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in pn&&(g==="autoAlpha"&&(d===1&&Pn(e,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),er(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=pn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Nn,y){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=Vi(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),v||(M=e._gsap,M.renderTransform&&!t.parseTransform||Pa(e,t.parseTransform),A=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new yi(this._pt,o,St,0,1,M.renderTransform,M,0,-1),v.dep=1),g==="scale")this._pt=new yi(this._pt,M,"scaleY",M.scaleY,(x?hs(M.scaleY,x+u):u)-M.scaleY||0,_h),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(bi,0,o[bi]),h=YM(h),M.svg?yh(e,h,0,A,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&er(this,M,"zOrigin",M.zOrigin,m),er(this,o,g,jo(c),jo(h)));continue}else if(g==="svgOrigin"){yh(e,h,1,A,0,this);continue}else if(g in Gm){JM(this,M,g,d,x?hs(d,x+h):h);continue}else if(g==="smoothOrigin"){er(this,M,"smooth",M.smooth,h);continue}else if(g==="force3D"){M[g]=h;continue}else if(g==="transform"){$M(this,h,e);continue}}else g in o||(g=Ps(g)||g);if(y||(u||u===0)&&(d||d===0)&&!IM.test(h)&&g in o)p=(c+"").substr((d+"").length),u||(u=0),m=ei(h)||(g in Di.units?Di.units[g]:p),p!==m&&(d=rr(e,g,c,m)),this._pt=new yi(this._pt,y?M:o,g,d,(x?hs(d,x+u):u)-d,!y&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?OM:_h),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=FM);else if(g in o)jM.call(this,e,g,c,x?x+h:h);else if(g in e)this.add(e,g,c||e[g],x?x+h:h,n,r);else if(g!=="parseTransform"){lu(g,h);continue}y||(g in o?C.push(g,0,o[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),s.push(g)}}T&&Lm(this)},render:function(e,t){if(t.tween._time||!xu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Pn,aliases:pn,getSetter:function(e,t,i){var n=pn[t];return n&&n.indexOf(",")<0&&(t=n),t in Nn&&t!==bi&&(e._gsap.x||Pn(e,"x"))?i&&Mf===i?t==="scale"?zM:BM:(Mf=i||{})&&(t==="scale"?GM:VM):e.style&&!su(e.style[t])?NM:~t.indexOf("-")?kM:gu(e,t)},core:{_removeProperty:Pr,_getMatrix:bu}};Si.utils.checkPrefix=Ps;Si.core.getStyleSaver=Nm;(function(a,e,t,i){var n=xi(a+","+e+","+t,function(r){Nn[r]=1});xi(e,function(r){Di.units[r]="deg",Gm[r]=1}),pn[n[13]]=a+","+e,xi(i,function(r){var s=r.split(":");pn[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Di.units[a]="px"});Si.registerPlugin(Wm);var ca=Si.registerPlugin(Wm)||Si;ca.core.Tween;class QM{constructor(){this.experience=new mt,this.sceneProfile=this.experience.sceneProfile,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.debug=this.experience.debug,this.currentSection=null,this.debugObject={},this.intensityAmbientLight=.1,this.intensityAmbientLightOff=.08,this.intensityDirectionnalLight=3.5,this.intensityDirectionnalLightOff=0,this.intensityLightOff=.04,this.intensityLightOn=1,this.colorProfile=this.experience.world.unlimitedTexture.bakedMaterialProfile.color,this.colorPortfolio=this.experience.world.unlimitedTexture.bakedMaterialPortfolio.color,this.colorJordan=this.experience.world.unlimitedTexture.bakedMaterialJordan.color,this.colorTextRL=this.experience.world.troikaText.textRLMaterial.color,this.isMobileEnabled=!1,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("environment"))}update(){this.experience.sizes.isMobile?this.isMobileEnabled||(this.setLightMobile(),this.isMobileEnabled=!0):this.updateLights()}mouseOut(){if(!this.experience.sizes.isMobile){if(this.currentSection){const e=this.intensityLightOn,t=this.intensityLightOff,i={value:e};ca.to(i,{value:t,duration:1,ease:"power2.out",onUpdate:()=>{this.colorProfile.setScalar(i.value)}})}else{const e=this.intensityLightOn,t=this.intensityLightOff,i={value:e};ca.to(i,{value:t,duration:1,ease:"power2.out",onUpdate:()=>{this.colorPortfolio.setScalar(i.value),this.colorJordan.setScalar(i.value),this.colorTextRL.setScalar(i.value)}})}this.currentSection=null}}updateLights(){if(this.experience.cursor.isMouseOutside)return;const e=this.experience.cursor.isFirstSection;if(e!==this.currentSection){this.currentSection=e;const t=e?this.intensityLightOn:this.intensityLightOff,i=e?this.intensityLightOff:this.intensityLightOn;console.log("Target profile:",t),console.log("Target portfolio:",i);const n=this.intensityLightOn-t+this.intensityLightOff,r=this.intensityLightOn-i+this.intensityLightOff;console.log("Starting profile value:",n),console.log("Starting portfolio value:",r),console.log(this.colorProfile);const s={profile:n,portfolio:r};ca.to(s,{profile:t,portfolio:i,duration:1,ease:"power2.out",onUpdate:()=>{this.colorProfile.setScalar(s.profile),this.colorPortfolio.setScalar(s.portfolio),this.colorJordan.setScalar(s.portfolio),this.colorTextRL.setScalar(s.portfolio)}})}}setLightProfile(){if(this.ambientLightProfile=new Cd(16777215,this.intensityAmbientLightOff),this.directionalLightProfile=new th(16777215,this.intensityDirectionnalLightOff),this.directionalLightProfile.position.set(5,5,5),this.debug.active){const e={enabledDirectionnalProfile:this.directionalLightProfile.visible,enabledAmbientProfile:this.ambientLightProfile.visible};this.debugFolder.add(e,"enabledDirectionnalProfile").name("Enable Directional Light Profile").onChange(t=>{this.directionalLightProfile.visible=t}),this.debugFolder.add(e,"enabledAmbientProfile").name("Enable Ambient Light Profile").onChange(t=>{this.ambientLightProfile.visible=t}),this.debugFolder.add(this.ambientLightProfile,"intensity").name("ambient profile intensity").min(0).max(4).setValue(this.intensityAmbientLight).step(.1),this.debugFolder.add(this.directionalLightProfile,"intensity").name("directional profile intensity").min(0).max(5).setValue(this.intensityDirectionnalLight).step(.1)}}setLightPortfolio(){if(this.ambientLightPortfolio=new Cd(16777215,this.intensityAmbientLightOff),this.directionalLightPortfolio=new th(16777215,this.intensityDirectionnalLightOff),this.directionalLightPortfolio.position.set(1,3,1),this.debug.active){const e={enabledDirectionnalPortfolio:this.directionalLightPortfolio.visible,enabledAmbientPortfolio:this.ambientLightPortfolio.visible};this.debugFolder.add(e,"enabledDirectionnalPortfolio").name("Enable Directional Light Portfolio").onChange(t=>{this.directionalLightPortfolio.visible=t}),this.debugFolder.add(e,"enabledAmbientPortfolio").name("Enable Ambient Light Portfolio").onChange(t=>{this.ambientLightPortfolio.visible=t}),this.debugFolder.add(this.ambientLightPortfolio,"intensity").name("ambientLightPortfolio").min(0).max(10).setValue(this.intensityAmbientLightOff).step(.1),this.debugFolder.add(this.directionalLightPortfolio,"intensity").name("directionalLightPortfolio").min(0).max(10).setValue(this.intensityDirectionnalLightOff).step(.1)}}setLightMobile(){const e=this.intensityLightOff,t=this.intensityLightOn,i={value:e};ca.to(i,{value:t,duration:1,ease:"power2.out",onUpdate:()=>{this.colorProfile.setScalar(i.value),this.colorPortfolio.setScalar(i.value),this.colorJordan.setScalar(i.value),this.colorTextRL.setScalar(i.value)}})}setEnvironmentMap(){this.environmentMap={},this.environmentMap.intensity=.4,this.environmentMap.texture=this.resources.items.environmentMapTexture,this.environmentMap.texture.colorSpace=ot,this.scene.environment=this.environmentMap.texture,this.environmentMap.updateMaterials=()=>{this.scene.traverse(e=>{e instanceof st&&e.material instanceof Zo&&(e.material.envMap=this.environmentMap.texture,e.material.envMapIntensity=this.environmentMap.intensity,e.material.needsUpdate=!0)})},this.environmentMap.updateMaterials(),this.debug.active&&this.debugFolder.add(this.environmentMap,"intensity").name("envMapIntensity").min(0).max(4).step(.001).onChange(this.environmentMap.updateMaterials)}}class eT{constructor(){this.experience=new mt,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("BaseProfile")),this.ressource=this.resources.items.baseProfile,this.setModel()}setModel(){this.model=this.ressource.scene,this.experience.world.groupProfile.add(this.model),this.model.traverse(e=>{e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialProfile)})}}class tT{constructor(){this.experience=new mt,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.isPlaying=!1,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Reyna")),this.resource=this.resources.items.reyna,this.setModel(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupPortfolio.add(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialPortfolio)}),this.experience.objectsIntersectRight.addObject(this.model)}setAnimation(){this.animation={},this.animation.mixer=new an(this.model),this.animation.actions={},this.animation.actions.reynaAction=this.animation.mixer.clipAction(this.resource.animations[0])}playAnimation(){if(this.isPlaying)return;const e=this.animation.actions.reynaAction;e.reset(),e.setLoop(sn,1),e.clampWhenFinished=!0,this.isPlaying=!0,e.play()}update(){this.animation.mixer.update(this.time.delta*.001),this.isPlaying&&this.animation.actions.reynaAction.time>=this.resource.animations[0].duration&&(this.isPlaying=!1)}}class iT{constructor(){this.experience=new mt,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("BasePortfolio")),this.ressource=this.resources.items.basePortfolio,this.setModel()}setModel(){this.model=this.ressource.scene,this.experience.world.groupPortfolio.add(this.model),this.model.traverse(e=>{e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialPortfolio)})}}class nT{constructor(){this.experience=new mt,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.troikaText=this.experience.world.troikaText,this.loopFalse=!0,this.lastAnimationChange=-this.animationChangeCooldown,this.animationChangeCooldown=2e3,this.fennecCounter=0,this.octaneCounter=0,this.minSpeed=1,this.maxSpeed=3,this.baseSpeed=108,this.fennecSpeed=this.baseSpeed,this.octaneSpeed=this.baseSpeed,this.activeHalo=null,this.lastSpeedFennec=this.baseSpeed,this.lastSpeedOctane=this.baseSpeed,this.speedTransition={active:!1,startTime:0,duration:this.animationChangeCooldown,startSpeed:0,endSpeed:0,action:null,updateCallback:null},this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("RLTrack")),this.resource=this.resources.items.rlTrack,this.setModel(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupPortfolio.add(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialPortfolio)}),this.experience.objectsIntersectRight.addObject(this.model)}setAnimation(){this.animation={},this.emptyFennec=this.model.children[0].children.find(e=>e.name==="EmptyFennec008"),this.emptyOctane=this.model.children[0].children.find(e=>e.name==="EmptyOctane008"),this.animation.mixerFennec=new an(this.emptyFennec),this.animation.mixerOctane=new an(this.emptyOctane),this.animation.actions={},this.animation.actions.fennecAction=this.animation.mixerFennec.clipAction(this.resource.animations[0]),this.animation.actions.octaneAction=this.animation.mixerOctane.clipAction(this.resource.animations[1]),this.animation.actions.fennecAction.setLoop(Zc,1/0),this.animation.actions.octaneAction.setLoop(Zc,1/0),this.animation.actions.fennecAction.clampWhenFinished=!0,this.animation.actions.octaneAction.clampWhenFinished=!0,this.animation.actions.fennecAction.timeScale=this.minSpeed,this.animation.actions.octaneAction.timeScale=this.minSpeed,this.animation.actions.fennecAction.play(),this.animation.actions.octaneAction.play(),this.animation.mixerFennec.addEventListener("loop",e=>{e.action===this.animation.actions.fennecAction&&(this.fennecCounter++,this.troikaText.updateText("lapFennec",`${this.fennecCounter}`),console.log(`Fennec loop finished: ${this.fennecCounter}`))}),this.animation.mixerOctane.addEventListener("loop",e=>{e.action===this.animation.actions.octaneAction&&(this.octaneCounter++,this.troikaText.updateText("lapOctane",`${this.octaneCounter}`),console.log(`Octane loop finished: ${this.octaneCounter}`))})}playAnimation(){if(this.time.elapsed-this.lastAnimationChange<this.animationChangeCooldown)return;this.lastAnimationChange=this.time.elapsed;const e=this.animation.actions.fennecAction,t=this.animation.actions.octaneAction,i=[e,t],n=i[Math.floor(Math.random()*i.length)],r=Math.random()*(this.maxSpeed-this.minSpeed)+this.minSpeed;console.log("Nouvelle vitesse target:",r);const s=r*this.baseSpeed,o=n===e?this.lastSpeedFennec:this.lastSpeedOctane;n===e?this.lastSpeedFennec=s:this.lastSpeedOctane=s;const l=s>o,c=n===e?this.emptyFennec.children[0]:this.emptyOctane.children[0];this.createHalo(c,l),this.speedTransition={active:!0,startTime:this.time.elapsed,duration:this.animationChangeCooldown,startSpeed:o/this.baseSpeed,endSpeed:r,action:n,updateCallback:h=>{n===e?(this.fennecSpeed=h.toFixed(0),this.troikaText.updateText("speedFennec",`${this.fennecSpeed}`)):(this.octaneSpeed=h.toFixed(0),this.troikaText.updateText("speedOctane",`${h.toFixed(0)}`))}}}createHalo(e,t){this.activeHalo&&(this.activeHalo.parent.remove(this.activeHalo),this.activeHalo.material.dispose(),this.activeHalo.geometry.dispose(),this.activeHalo=null);const i=t?3077415:16714250,n=new Kh(.8,.95,32),r=new Gt({color:i,side:_i,transparent:!0,opacity:1}),s=new st(n,r);s.rotation.x=-Math.PI/2,e.add(s),s.userData={elapsed:0,duration:this.animationChangeCooldown,pulseSpeed:.01},this.activeHalo=s}update(){var e,t;if(this.animation.mixerFennec.update(this.time.delta*.001),this.animation.mixerOctane.update(this.time.delta*.001),this.activeHalo){const i=this.activeHalo;i.userData.elapsed+=this.time.delta;const n=i.userData.elapsed*i.userData.pulseSpeed,r=1+.08*Math.sin(n);i.scale.set(r,r,r);const s=.3,o=1;i.material.opacity=s+(o-s)*(.5+.5*Math.sin(n)),i.userData.elapsed>=i.userData.duration&&(console.log("destroy"),i.parent.remove(i),i.material.dispose(),i.geometry.dispose(),this.activeHalo=null)}if(this.speedTransition.active){const i=(this.time.elapsed-this.speedTransition.startTime)/this.speedTransition.duration,n=Math.min(Math.max(i,0),1),r=this.speedTransition.startSpeed+(this.speedTransition.endSpeed-this.speedTransition.startSpeed)*n;this.speedTransition.action.timeScale=r;const s=r*this.baseSpeed;(t=(e=this.speedTransition).updateCallback)==null||t.call(e,s),n>=1&&(this.speedTransition.active=!1,this.speedTransition.action.timeScale=this.speedTransition.endSpeed)}}}class rT{constructor(){this.experience=new mt,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.isPlaying=!1,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Chamber")),this.resource=this.resources.items.chamber,this.setModel(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupPortfolio.add(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialPortfolio)}),this.experience.objectsIntersectRight.addObject(this.model)}setAnimation(){this.animation={},this.animation.mixer=new an(this.model),this.animation.actions={},this.animation.actions.chamberAction=this.animation.mixer.clipAction(this.resource.animations[0]),this.animation.actions.chamberSniperAction=this.animation.mixer.clipAction(this.resource.animations[1])}playAnimation(){if(this.isPlaying)return;const e=this.animation.actions.chamberAction,t=this.animation.actions.chamberSniperAction;[e,t].forEach(i=>{i.reset(),i.setLoop(sn,1),i.clampWhenFinished=!0,i.play()}),this.isPlaying=!0}update(){this.animation.mixer.update(this.time.delta*.001),this.isPlaying&&this.animation.actions.chamberAction.time>=this.resource.animations[0].duration&&this.animation.actions.chamberSniperAction.time>=this.resource.animations[1].duration&&(this.isPlaying=!1)}}class sT{constructor(){this.experience=new mt,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.isPlaying=!1,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Breach")),this.resource=this.resources.items.breach,this.setModel(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupPortfolio.add(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialPortfolio)}),this.experience.objectsIntersectRight.addObject(this.model)}setAnimation(){this.animation={},this.animation.mixer=new an(this.model),this.animation.actions={},this.animation.actions.breachAction=this.animation.mixer.clipAction(this.resource.animations[0])}playAnimation(){if(this.isPlaying)return;const e=this.animation.actions.breachAction;e.reset(),e.setLoop(sn,1),e.clampWhenFinished=!0,this.isPlaying=!0,e.play()}update(){this.animation.mixer.update(this.time.delta*.001),this.isPlaying&&this.animation.actions.breachAction.time>=this.resource.animations[0].duration&&(this.isPlaying=!1)}}class aT{constructor(){this.experience=new mt,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.isPlaying=!1,this.playDirection=-1,this.playCount=0,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("JordanBox")),this.resource=this.resources.items.jordanBox,this.setModel(),this.setMaterial(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupPortfolio.add(this.model),console.log(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialPortfolio)}),this.experience.objectsIntersectRight.addObject(this.model)}setTextures(){this.textures={},this.textures.normal=this.resources.items.jordanNormalTexture,this.textures.normal.flipY=!1,this.debug.active}setMaterial(){this.rightShoes=this.model.children[0].children[1].children.find(e=>e.name==="RightShoes008"),this.leftShoes=this.model.children[0].children[1].children.find(e=>e.name==="LeftShoes008"),this.rightShoes.material=this.experience.world.unlimitedTexture.bakedMaterialJordan,this.leftShoes.material=this.experience.world.unlimitedTexture.bakedMaterialJordan}setAnimation(){this.animation={},this.animation.mixer=new an(this.model),console.log(this.resource.animations),this.animation.actions={},this.animation.actions.boxAction=this.animation.mixer.clipAction(this.resource.animations[0]),this.animation.actions.jordanAction=this.animation.mixer.clipAction(this.resource.animations[1])}changeTexture(e){const i=[this.experience.world.unlimitedTexture.textures.colorJordanGreyBlue,this.experience.world.unlimitedTexture.textures.colorJordanRed,this.experience.world.unlimitedTexture.textures.colorJordanPurple].filter(r=>r!==e);return i[Math.floor(Math.random()*i.length)]}playAnimation(){if(this.isPlaying)return;const e=this.animation.actions.jordanAction,t=this.animation.actions.boxAction;this.playDirection*=-1;const n=Math.max(this.resource.animations[0].duration,this.resource.animations[1].duration)*1e3,r=s=>{s.timeScale=this.playDirection,s.reset(),s.setLoop(sn,1),s.clampWhenFinished=!0,this.playDirection===-1?s.time=s.getClip().duration:s.time=0,s.play()};r(e),r(t),this.isPlaying=!0,setTimeout(()=>{if(this.isPlaying=!1,this.playCount++,this.playCount===1||this.playCount%2===1){const s=this.rightShoes.material.map,o=this.changeTexture(s);this.rightShoes.material.map=o,this.leftShoes.material.map=o,this.rightShoes.material.needsUpdate=!0,this.leftShoes.material.needsUpdate=!0}},n)}update(){this.animation.mixer.update(this.time.delta*.001),this.isPlaying&&this.animation.actions.jordanAction.time>=this.resource.animations[0].duration&&(this.isPlaying=!1)}}class oT{constructor(){this.experience=new mt,this.resources=this.experience.resources,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("UnlimitedTextures")),this.textures={},this.setTextureBaseProfile(),this.setTextureBasePortfolio(),this.setTextureJordan(),this.setTextureVideo(),this.setMaterials()}setTextureBaseProfile(){this.textures.colorProfile=this.resources.items.baseProfileTexture,this.textures.colorProfile.colorSpace=ot,this.textures.colorProfile.flipY=!1}setTextureBasePortfolio(){this.textures.colorPortfolio=this.resources.items.basePortfolioTexture,this.textures.colorPortfolio.colorSpace=ot,this.textures.colorPortfolio.flipY=!1}setTextureJordan(){this.textures.colorJordanGreyBlue=this.resources.items.jordanGreyBlueTexture,this.textures.colorJordanGreyBlue.colorSpace=ot,this.textures.colorJordanGreyBlue.flipY=!1,this.textures.colorJordanRed=this.resources.items.jordanRedTexture,this.textures.colorJordanRed.colorSpace=ot,this.textures.colorJordanRed.flipY=!1,this.textures.colorJordanPurple=this.resources.items.jordanPurpleTexture,this.textures.colorJordanPurple.colorSpace=ot,this.textures.colorJordanPurple.flipY=!1}setTextureVideo(){this.videoTV=document.getElementById("videoTV"),this.videoTV.play(),console.log("Video ready:",this.videoTV),this.videoTVTexture=new Md(this.videoTV),this.videoTVTexture.colorSpace=ot,this.videoTVTexture.repeat.y=-1,this.videoTVTexture.offset.y=1,this.videoTVTexture.minFilter=Ct,this.videoTVTexture.magFilter=Ct,this.videoTVTexture.generateMipmaps=!1,this.videoTVTexture.needsUpdate=!0,this.logoBouncing=document.getElementById("JCLogoBouncing"),this.logoBouncing.play(),console.log("Video ready:",this.logoBouncing),this.logoBouncingTexture=new Md(this.logoBouncing),this.logoBouncingTexture.colorSpace=ot,this.logoBouncingTexture.repeat.y=-1,this.logoBouncingTexture.offset.y=1,this.logoBouncingTexture.minFilter=Ct,this.logoBouncingTexture.magFilter=Ct,this.logoBouncingTexture.generateMipmaps=!1,this.logoBouncingTexture.needsUpdate=!0,this.textures.colorBlender=this.resources.items.blenderTexture,this.textures.colorBlender.colorSpace=ot,this.textures.colorBlender.flipY=!1,this.textures.colorVSCode=this.resources.items.vscodeTexture,this.textures.colorVSCode.colorSpace=ot,this.textures.colorVSCode.flipY=!1}setMaterials(){this.bakedMaterialPortfolio=new Gt({map:this.textures.colorPortfolio}),this.bakedMaterialPortfolio.color.setScalar(.03),this.bakedMaterialProfile=new Gt({map:this.textures.colorProfile}),this.bakedMaterialProfile.color.setScalar(.03),this.bakedMaterialJordan=new Gt({map:this.textures.colorJordanGreyBlue}),this.bakedMaterialJordan.color.setScalar(.03),this.videoTVMaterial=new Gt({map:this.videoTVTexture,side:rn,toneMapped:!1}),this.logoBouncingMaterial=new Gt({map:this.logoBouncingTexture,side:rn,toneMapped:!1}),this.blenderMaterial=new Gt({map:this.textures.colorBlender}),this.vscodeMaterial=new Gt({map:this.textures.colorVSCode})}}class lT{constructor(){this.experience=new mt,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.debug=this.experience.debug,this.unlimitedTexture=this.experience.world.unlimitedTexture,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("TVScreen")),this.ressource=this.resources.items.tvScreen,this.setModel()}setModel(){this.model=this.ressource.scene,this.experience.world.groupPortfolio.add(this.model),this.model.traverse(e=>{e instanceof st&&e.material&&(e.material=this.unlimitedTexture.videoTVMaterial)})}update(){}}class cT{constructor(){this.experience=new mt,this.sceneProfile=this.experience.sceneProfile,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.isPlaying=!1,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Ball")),this.resource=this.resources.items.ball,this.setModel(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupProfile.add(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialProfile)}),this.experience.objectsIntersectLeft.addObject(this.model)}setAnimation(){this.animation={},this.animation.mixer=new an(this.model),this.animation.actions={},this.animation.actions.ballAction=this.animation.mixer.clipAction(this.resource.animations[0])}playAnimation(){if(this.isPlaying)return;const e=this.animation.actions.ballAction;e.reset(),e.setLoop(sn,1),e.clampWhenFinished=!0,this.isPlaying=!0,e.play()}update(){this.animation.mixer.update(this.time.delta*.001),this.isPlaying&&this.animation.actions.ballAction.time>=this.resource.animations[0].duration&&(this.isPlaying=!1)}}class hT{constructor(){this.experience=new mt,this.sceneProfile=this.experience.sceneProfile,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.isPlaying=!1,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Chair")),this.resource=this.resources.items.chair,this.setModel(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupProfile.add(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialProfile)}),this.experience.objectsIntersectLeft.addObject(this.model)}setAnimation(){this.animation={},this.animation.mixer=new an(this.model),this.animation.actions={},this.animation.actions.chairAction=this.animation.mixer.clipAction(this.resource.animations[0])}playAnimation(){if(this.isPlaying)return;const e=this.animation.actions.chairAction;e.reset(),e.setLoop(sn,1),e.clampWhenFinished=!0,this.isPlaying=!0,e.play()}update(){this.animation.mixer.update(this.time.delta*.001),this.isPlaying&&this.animation.actions.chairAction.time>=this.resource.animations[0].duration&&(this.isPlaying=!1)}}class uT{constructor(){this.experience=new mt,this.sceneProfile=this.experience.sceneProfile,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.isPlaying=!1,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Hat")),this.resource=this.resources.items.hat,this.setModel(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupProfile.add(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialProfile)}),this.experience.objectsIntersectLeft.addObject(this.model)}setAnimation(){this.animation={},this.animation.mixer=new an(this.model),this.animation.actions={},this.animation.actions.hatAction=this.animation.mixer.clipAction(this.resource.animations[0])}playAnimation(){if(this.isPlaying)return;const e=this.animation.actions.hatAction;e.reset(),e.setLoop(sn,1),e.clampWhenFinished=!0,this.isPlaying=!0,e.play()}update(){this.animation.mixer.update(this.time.delta*.001),this.isPlaying&&this.animation.actions.hatAction.time>=this.resource.animations[0].duration&&(this.isPlaying=!1)}}class dT{constructor(){this.experience=new mt,this.sceneProfile=this.experience.sceneProfile,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.isPlaying=!1,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Mouse")),this.resource=this.resources.items.mouse,this.setModel(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupProfile.add(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(e.material=this.experience.world.unlimitedTexture.bakedMaterialProfile)}),this.experience.objectsIntersectLeft.addObject(this.model)}setAnimation(){this.animation={},this.animation.mixer=new an(this.model),this.animation.actions={},this.animation.actions.mouseAction=this.animation.mixer.clipAction(this.resource.animations[0]),this.isReversed=!1}playAnimation(){if(this.isPlaying)return;this.isPlaying=!0;const e=this.animation.actions.mouseAction,t=this.resource.animations[0].duration;e.setLoop(sn,1),e.clampWhenFinished=!0,e.stop(),e.reset(),this.isReversed?(e.timeScale=-1,e.time=t):(e.timeScale=1,e.time=0),this.isReversed=!this.isReversed,e.play(),setTimeout(()=>{this.isPlaying=!1},this.resource.animations[0].duration*1e3)}update(){this.animation.mixer.update(this.time.delta*.001)}}class fT{constructor(){this.experience=new mt,this.sceneProfile=this.experience.sceneProfile,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.unlimitedTexture=this.experience.world.unlimitedTexture,this.isPlaying=!1,this.isOpen=!1,this.loopFalse=!0,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("PC")),this.resource=this.resources.items.pc,this.setModel(),this.setMaterial(),this.setAnimation()}setModel(){this.model=this.resource.scene,this.experience.world.groupProfile.add(this.model),this.model.traverse(e=>{e.userData.parentInstance=this,e instanceof st&&e.material&&(console.log(e),e.material=this.unlimitedTexture.bakedMaterialProfile)}),this.experience.objectsIntersectLeft.addObject(this.model)}setMaterial(){this.screenPC=this.model.children[0].children[1],this.screenPC.material=this.unlimitedTexture.vscodeMaterial,this.screenPC.visible=!1,this.screenMonitor=this.model.children[0].children[2],this.screenMonitor.material=this.unlimitedTexture.logoBouncingMaterial}setAnimation(){this.animation={},this.animation.mixer=new an(this.model),this.animation.actions={},this.animation.actions.pcActionScreen=this.animation.mixer.clipAction(this.resource.animations[0]),this.animation.actions.pcActionDisplay=this.animation.mixer.clipAction(this.resource.animations[1]),this.isPlaying=!1,this.isReversed=!1}playAnimation(){if(this.isPlaying)return;this.isPlaying=!0,this.isOpen||(this.screenPC.material=this.unlimitedTexture.vscodeMaterial,this.screenPC.visible=!0),setTimeout(()=>{this.isOpen=!this.isOpen,this.isOpen?(this.screenPC.material=this.unlimitedTexture.vscodeMaterial,this.screenMonitor.material=this.unlimitedTexture.blenderMaterial,this.unlimitedTexture.logoBouncing.pause(),this.screenPC.visible=!0):(this.unlimitedTexture.logoBouncing.play(),this.screenMonitor.material=this.unlimitedTexture.logoBouncingMaterial,this.screenPC.visible=!1)},1*1e3);const e=this.animation.actions.pcActionScreen,t=this.animation.actions.pcActionDisplay;e.reset(),t.reset(),e.setLoop(sn,1),t.setLoop(sn,1),e.clampWhenFinished=!0,t.clampWhenFinished=!0;const i=this.isReversed?-1:1;e.timeScale=i,t.timeScale=i,this.isReversed&&(e.time=this.resource.animations[0].duration,t.time=this.resource.animations[1].duration),e.play(),t.play(),this.isReversed=!this.isReversed;const n=Math.max(this.resource.animations[0].duration,this.resource.animations[1].duration);setTimeout(()=>{this.isPlaying=!1},n*1e3)}update(){this.animation.mixer.update(this.time.delta*.001)}}function pT(){var a=Object.create(null);function e(n,r){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var h=n.getTransferables;if(h===void 0&&(h=null),!a[s])try{l=l.map(function(d){return d&&d.isWorkerModule&&(e(d,function(f){if(f instanceof Error)throw f}),d=a[d.id].value),d}),c=i("<"+o+">.init",c),h&&(h=i("<"+o+">.getTransferables",h));var u=null;typeof c=="function"?u=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:u,getTransferables:h},r(u)}catch(d){d&&d.noLog||console.error(d),r(d)}}function t(n,r){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(h,function(u){return r(u instanceof Error?u:new Error(""+u))}):h(c)}catch(u){r(u)}function h(u){try{var d=a[o].getTransferables&&a[o].getTransferables(u);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),r(u,d)}catch(f){console.error(f),r(f)}}}function i(n,r){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var r=n.data,s=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function mT(a){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,i=a.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var Xm=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Xm=function(){return a},a},gT=0,_T=0,rc=!1,_a=Object.create(null),va=Object.create(null),bh=Object.create(null);function ks(a){if((!a||typeof a.init!="function")&&!rc)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,i=a.getTransferables,n=a.workerId,r=mT(a);n==null&&(n="#default");var s="workerModule"+ ++gT,o=a.name||s,l=null;e=e&&e.map(function(h){return typeof h=="function"&&!h.workerModuleData&&(rc=!0,h=ks({workerId:n,name:"<"+o+"> function dependency: "+h.name,init:`function(){return (
`+Co(h)+`
)}`}),rc=!1),h&&h.workerModuleData&&(h=h.workerModuleData),h});function c(){for(var h=[],u=arguments.length;u--;)h[u]=arguments[u];if(!Xm())return r.apply(void 0,h);if(!l){l=Lf(n,"registerModule",c.workerModuleData);var d=function(){l=null,va[n].delete(d)};(va[n]||(va[n]=new Set)).add(d)}return l.then(function(f){var _=f.isCallable;if(_)return Lf(n,"callModule",{id:s,args:h});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:Co(t),getTransferables:i&&Co(i)},c.onMainThread=r,c}function vT(a){va[a]&&va[a].forEach(function(e){e()}),_a[a]&&(_a[a].terminate(),delete _a[a])}function Co(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function xT(a){var e=_a[a];if(!e){var t=Co(pT);e=_a[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,s=bh[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete bh[r],s(n)}}return e}function Lf(a,e,t){return new Promise(function(i,n){var r=++_T;bh[r]=function(s){s.success?i(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},xT(a).postMessage({messageId:r,action:e,data:t})})}function jm(){var a=function(e){function t(J,q,U,X,ee,O,B,ie){var j=1-B;ie.x=j*j*J+2*j*B*U+B*B*ee,ie.y=j*j*q+2*j*B*X+B*B*O}function i(J,q,U,X,ee,O,B,ie,j,re){var xe=1-j;re.x=xe*xe*xe*J+3*xe*xe*j*U+3*xe*j*j*ee+j*j*j*B,re.y=xe*xe*xe*q+3*xe*xe*j*X+3*xe*j*j*O+j*j*j*ie}function n(J,q){for(var U=/([MLQCZ])([^MLQCZ]*)/g,X,ee,O,B,ie;X=U.exec(J);){var j=X[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(re){return parseFloat(re)});switch(X[1]){case"M":B=ee=j[0],ie=O=j[1];break;case"L":(j[0]!==B||j[1]!==ie)&&q("L",B,ie,B=j[0],ie=j[1]);break;case"Q":{q("Q",B,ie,B=j[2],ie=j[3],j[0],j[1]);break}case"C":{q("C",B,ie,B=j[4],ie=j[5],j[0],j[1],j[2],j[3]);break}case"Z":(B!==ee||ie!==O)&&q("L",B,ie,ee,O);break}}}function r(J,q,U){U===void 0&&(U=16);var X={x:0,y:0};n(J,function(ee,O,B,ie,j,re,xe,_e,ve){switch(ee){case"L":q(O,B,ie,j);break;case"Q":{for(var ue=O,Pe=B,I=1;I<U;I++)t(O,B,re,xe,ie,j,I/(U-1),X),q(ue,Pe,X.x,X.y),ue=X.x,Pe=X.y;break}case"C":{for(var ke=O,Ee=B,Ce=1;Ce<U;Ce++)i(O,B,re,xe,_e,ve,ie,j,Ce/(U-1),X),q(ke,Ee,X.x,X.y),ke=X.x,Ee=X.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(J,q){var U=J.getContext?J.getContext("webgl",c):J,X=l.get(U);if(!X){let ke=function(w){var E=O[w];if(!E&&(E=O[w]=U.getExtension(w),!E))throw new Error(w+" not supported");return E},Ee=function(w,E){var N=U.createShader(E);return U.shaderSource(N,w),U.compileShader(N),N},Ce=function(w,E,N,$){if(!B[w]){var Q={},se={},de=U.createProgram();U.attachShader(de,Ee(E,U.VERTEX_SHADER)),U.attachShader(de,Ee(N,U.FRAGMENT_SHADER)),U.linkProgram(de),B[w]={program:de,transaction:function(me){U.useProgram(de),me({setUniform:function(ce,be){for(var Me=[],Te=arguments.length-2;Te-- >0;)Me[Te]=arguments[Te+2];var oe=se[be]||(se[be]=U.getUniformLocation(de,be));U["uniform"+ce].apply(U,[oe].concat(Me))},setAttribute:function(ce,be,Me,Te,oe){var Ie=Q[ce];Ie||(Ie=Q[ce]={buf:U.createBuffer(),loc:U.getAttribLocation(de,ce),data:null}),U.bindBuffer(U.ARRAY_BUFFER,Ie.buf),U.vertexAttribPointer(Ie.loc,be,U.FLOAT,!1,0,0),U.enableVertexAttribArray(Ie.loc),ee?U.vertexAttribDivisor(Ie.loc,Te):ke("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ie.loc,Te),oe!==Ie.data&&(U.bufferData(U.ARRAY_BUFFER,oe,Me),Ie.data=oe)}})}}}B[w].transaction($)},ae=function(w,E){j++;try{U.activeTexture(U.TEXTURE0+j);var N=ie[w];N||(N=ie[w]=U.createTexture(),U.bindTexture(U.TEXTURE_2D,N),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MIN_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MAG_FILTER,U.NEAREST)),U.bindTexture(U.TEXTURE_2D,N),E(N,j)}finally{j--}},Ae=function(w,E,N){var $=U.createFramebuffer();re.push($),U.bindFramebuffer(U.FRAMEBUFFER,$),U.activeTexture(U.TEXTURE0+E),U.bindTexture(U.TEXTURE_2D,w),U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,w,0);try{N($)}finally{U.deleteFramebuffer($),U.bindFramebuffer(U.FRAMEBUFFER,re[--re.length-1]||null)}},fe=function(){O={},B={},ie={},j=-1,re.length=0};var xe=ke,_e=Ee,ve=Ce,ue=ae,Pe=Ae,I=fe,ee=typeof WebGL2RenderingContext<"u"&&U instanceof WebGL2RenderingContext,O={},B={},ie={},j=-1,re=[];U.canvas.addEventListener("webglcontextlost",function(w){fe(),w.preventDefault()},!1),l.set(U,X={gl:U,isWebGL2:ee,getExtension:ke,withProgram:Ce,withTexture:ae,withTextureFramebuffer:Ae,handleContextLoss:fe})}q(X)}function u(J,q,U,X,ee,O,B,ie){B===void 0&&(B=15),ie===void 0&&(ie=null),h(J,function(j){var re=j.gl,xe=j.withProgram,_e=j.withTexture;_e("copy",function(ve,ue){re.texImage2D(re.TEXTURE_2D,0,re.RGBA,ee,O,0,re.RGBA,re.UNSIGNED_BYTE,q),xe("copy",s,o,function(Pe){var I=Pe.setUniform,ke=Pe.setAttribute;ke("aUV",2,re.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),I("1i","image",ue),re.bindFramebuffer(re.FRAMEBUFFER,ie||null),re.disable(re.BLEND),re.colorMask(B&8,B&4,B&2,B&1),re.viewport(U,X,ee,O),re.scissor(U,X,ee,O),re.drawArrays(re.TRIANGLES,0,3)})})})}function d(J,q,U){var X=J.width,ee=J.height;h(J,function(O){var B=O.gl,ie=new Uint8Array(X*ee*4);B.readPixels(0,0,X,ee,B.RGBA,B.UNSIGNED_BYTE,ie),J.width=q,J.height=U,u(B,ie,0,0,X,ee)})}var f=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:d});function _(J,q,U,X,ee,O){O===void 0&&(O=1);var B=new Uint8Array(J*q),ie=X[2]-X[0],j=X[3]-X[1],re=[];r(U,function(ke,Ee,Ce,ae){re.push({x1:ke,y1:Ee,x2:Ce,y2:ae,minX:Math.min(ke,Ce),minY:Math.min(Ee,ae),maxX:Math.max(ke,Ce),maxY:Math.max(Ee,ae)})}),re.sort(function(ke,Ee){return ke.maxX-Ee.maxX});for(var xe=0;xe<J;xe++)for(var _e=0;_e<q;_e++){var ve=Pe(X[0]+ie*(xe+.5)/J,X[1]+j*(_e+.5)/q),ue=Math.pow(1-Math.abs(ve)/ee,O)/2;ve<0&&(ue=1-ue),ue=Math.max(0,Math.min(255,Math.round(ue*255))),B[_e*J+xe]=ue}return B;function Pe(ke,Ee){for(var Ce=1/0,ae=1/0,Ae=re.length;Ae--;){var fe=re[Ae];if(fe.maxX+ae<=ke)break;if(ke+ae>fe.minX&&Ee-ae<fe.maxY&&Ee+ae>fe.minY){var w=m(ke,Ee,fe.x1,fe.y1,fe.x2,fe.y2);w<Ce&&(Ce=w,ae=Math.sqrt(Ce))}}return I(ke,Ee)&&(ae=-ae),ae}function I(ke,Ee){for(var Ce=0,ae=re.length;ae--;){var Ae=re[ae];if(Ae.maxX<=ke)break;var fe=Ae.y1>Ee!=Ae.y2>Ee&&ke<(Ae.x2-Ae.x1)*(Ee-Ae.y1)/(Ae.y2-Ae.y1)+Ae.x1;fe&&(Ce+=Ae.y1<Ae.y2?1:-1)}return Ce!==0}}function g(J,q,U,X,ee,O,B,ie,j,re){O===void 0&&(O=1),ie===void 0&&(ie=0),j===void 0&&(j=0),re===void 0&&(re=0),p(J,q,U,X,ee,O,B,null,ie,j,re)}function p(J,q,U,X,ee,O,B,ie,j,re,xe){O===void 0&&(O=1),j===void 0&&(j=0),re===void 0&&(re=0),xe===void 0&&(xe=0);for(var _e=_(J,q,U,X,ee,O),ve=new Uint8Array(_e.length*4),ue=0;ue<_e.length;ue++)ve[ue*4+xe]=_e[ue];u(B,ve,j,re,J,q,1<<3-xe,ie)}function m(J,q,U,X,ee,O){var B=ee-U,ie=O-X,j=B*B+ie*ie,re=j?Math.max(0,Math.min(1,((J-U)*B+(q-X)*ie)/j)):0,xe=J-(U+re*B),_e=q-(X+re*ie);return xe*xe+_e*_e}var x=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:g,generateIntoFramebuffer:p}),y="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",M="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",A=new Float32Array([0,0,2,0,0,2]),T=null,C=!1,b={},S=new WeakMap;function D(J){if(!C&&!G(J))throw new Error("WebGL generation not supported")}function P(J,q,U,X,ee,O,B){if(O===void 0&&(O=1),B===void 0&&(B=null),!B&&(B=T,!B)){var ie=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ie)throw new Error("OffscreenCanvas or DOM canvas not supported");B=T=ie.getContext("webgl",{depth:!1})}D(B);var j=new Uint8Array(J*q*4);h(B,function(ve){var ue=ve.gl,Pe=ve.withTexture,I=ve.withTextureFramebuffer;Pe("readable",function(ke,Ee){ue.texImage2D(ue.TEXTURE_2D,0,ue.RGBA,J,q,0,ue.RGBA,ue.UNSIGNED_BYTE,null),I(ke,Ee,function(Ce){F(J,q,U,X,ee,O,ue,Ce,0,0,0),ue.readPixels(0,0,J,q,ue.RGBA,ue.UNSIGNED_BYTE,j)})})});for(var re=new Uint8Array(J*q),xe=0,_e=0;xe<j.length;xe+=4)re[_e++]=j[xe];return re}function L(J,q,U,X,ee,O,B,ie,j,re){O===void 0&&(O=1),ie===void 0&&(ie=0),j===void 0&&(j=0),re===void 0&&(re=0),F(J,q,U,X,ee,O,B,null,ie,j,re)}function F(J,q,U,X,ee,O,B,ie,j,re,xe){O===void 0&&(O=1),j===void 0&&(j=0),re===void 0&&(re=0),xe===void 0&&(xe=0),D(B);var _e=[];r(U,function(ve,ue,Pe,I){_e.push(ve,ue,Pe,I)}),_e=new Float32Array(_e),h(B,function(ve){var ue=ve.gl,Pe=ve.isWebGL2,I=ve.getExtension,ke=ve.withProgram,Ee=ve.withTexture,Ce=ve.withTextureFramebuffer,ae=ve.handleContextLoss;if(Ee("rawDistances",function(Ae,fe){(J!==Ae._lastWidth||q!==Ae._lastHeight)&&ue.texImage2D(ue.TEXTURE_2D,0,ue.RGBA,Ae._lastWidth=J,Ae._lastHeight=q,0,ue.RGBA,ue.UNSIGNED_BYTE,null),ke("main",y,v,function(w){var E=w.setAttribute,N=w.setUniform,$=!Pe&&I("ANGLE_instanced_arrays"),Q=!Pe&&I("EXT_blend_minmax");E("aUV",2,ue.STATIC_DRAW,0,A),E("aLineSegment",4,ue.DYNAMIC_DRAW,1,_e),N.apply(void 0,["4f","uGlyphBounds"].concat(X)),N("1f","uMaxDistance",ee),N("1f","uExponent",O),Ce(Ae,fe,function(se){ue.enable(ue.BLEND),ue.colorMask(!0,!0,!0,!0),ue.viewport(0,0,J,q),ue.scissor(0,0,J,q),ue.blendFunc(ue.ONE,ue.ONE),ue.blendEquationSeparate(ue.FUNC_ADD,Pe?ue.MAX:Q.MAX_EXT),ue.clear(ue.COLOR_BUFFER_BIT),Pe?ue.drawArraysInstanced(ue.TRIANGLES,0,3,_e.length/4):$.drawArraysInstancedANGLE(ue.TRIANGLES,0,3,_e.length/4)})}),ke("post",s,M,function(w){w.setAttribute("aUV",2,ue.STATIC_DRAW,0,A),w.setUniform("1i","tex",fe),ue.bindFramebuffer(ue.FRAMEBUFFER,ie),ue.disable(ue.BLEND),ue.colorMask(xe===0,xe===1,xe===2,xe===3),ue.viewport(j,re,J,q),ue.scissor(j,re,J,q),ue.drawArrays(ue.TRIANGLES,0,3)})}),ue.isContextLost())throw ae(),new Error("webgl context lost")})}function G(J){var q=!J||J===T?b:J.canvas||J,U=S.get(q);if(U===void 0){C=!0;var X=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],O=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,J);U=O&&ee.length===O.length&&O.every(function(B,ie){return B===ee[ie]}),U||(X="bad trial run results",console.info(ee,O))}catch(B){U=!1,X=B.message}X&&console.warn("WebGL SDF generation not supported:",X),C=!1,S.set(q,U)}return U}var k=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:L,generateIntoFramebuffer:F,isSupported:G});function Z(J,q,U,X,ee,O){ee===void 0&&(ee=Math.max(X[2]-X[0],X[3]-X[1])/2),O===void 0&&(O=1);try{return P.apply(k,arguments)}catch(B){return console.info("WebGL SDF generation failed, falling back to JS",B),_.apply(x,arguments)}}function W(J,q,U,X,ee,O,B,ie,j,re){ee===void 0&&(ee=Math.max(X[2]-X[0],X[3]-X[1])/2),O===void 0&&(O=1),ie===void 0&&(ie=0),j===void 0&&(j=0),re===void 0&&(re=0);try{return L.apply(k,arguments)}catch(xe){return console.info("WebGL SDF generation failed, falling back to JS",xe),g.apply(x,arguments)}}return e.forEachPathCommand=n,e.generate=Z,e.generateIntoCanvas=W,e.javascript=x,e.pathToLineSegments=r,e.webgl=k,e.webglUtils=f,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function yT(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ae,Ae){i[ae]=1<<Ae+1,n[i[ae]]=ae}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,s=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,h=null;function u(){if(!h){h=new Map;var ae=function(fe){if(t.hasOwnProperty(fe)){var w=0;t[fe].split(",").forEach(function(E){var N=E.split("+"),$=N[0],Q=N[1];$=parseInt($,36),Q=Q?parseInt(Q,36):0,h.set(w+=$,i[fe]);for(var se=0;se<Q;se++)h.set(++w,i[fe])})}};for(var Ae in t)ae(Ae)}}function d(ae){return u(),h.get(ae.codePointAt(0))||i.L}function f(ae){return n[d(ae)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(ae,Ae){var fe=36,w=0,E=new Map,N=Ae&&new Map,$;return ae.split(",").forEach(function Q(se){if(se.indexOf("+")!==-1)for(var de=+se;de--;)Q($);else{$=se;var le=se.split(">"),me=le[0],Le=le[1];me=String.fromCodePoint(w+=parseInt(me,fe)),Le=String.fromCodePoint(w+=parseInt(Le,fe)),E.set(me,Le),Ae&&N.set(Le,me)}}),{map:E,reverseMap:N}}var p,m,x;function y(){if(!p){var ae=g(_.pairs,!0),Ae=ae.map,fe=ae.reverseMap;p=Ae,m=fe,x=g(_.canonical,!1).map}}function v(ae){return y(),p.get(ae)||null}function M(ae){return y(),m.get(ae)||null}function A(ae){return y(),x.get(ae)||null}var T=i.L,C=i.R,b=i.EN,S=i.ES,D=i.ET,P=i.AN,L=i.CS,F=i.B,G=i.S,k=i.ON,Z=i.BN,W=i.NSM,J=i.AL,q=i.LRO,U=i.RLO,X=i.LRE,ee=i.RLE,O=i.PDF,B=i.LRI,ie=i.RLI,j=i.FSI,re=i.PDI;function xe(ae,Ae){for(var fe=125,w=new Uint32Array(ae.length),E=0;E<ae.length;E++)w[E]=d(ae[E]);var N=new Map;function $(pi,ji){var mi=w[pi];w[pi]=ji,N.set(mi,N.get(mi)-1),mi&o&&N.set(o,N.get(o)-1),N.set(ji,(N.get(ji)||0)+1),ji&o&&N.set(o,(N.get(o)||0)+1)}for(var Q=new Uint8Array(ae.length),se=new Map,de=[],le=null,me=0;me<ae.length;me++)le||de.push(le={start:me,end:ae.length-1,level:Ae==="rtl"?1:Ae==="ltr"?0:Fu(me,!1)}),w[me]&F&&(le.end=me,le=null);for(var Le=ee|X|U|q|r|re|O|F,ce=function(pi){return pi+(pi&1?1:2)},be=function(pi){return pi+(pi&1?2:1)},Me=0;Me<de.length;Me++){le=de[Me];var Te=[{_level:le.level,_override:0,_isolate:0}],oe=void 0,Ie=0,Oe=0,Ke=0;N.clear();for(var z=le.start;z<=le.end;z++){var he=w[z];if(oe=Te[Te.length-1],N.set(he,(N.get(he)||0)+1),he&o&&N.set(o,(N.get(o)||0)+1),he&Le)if(he&(ee|X)){Q[z]=oe._level;var te=(he===ee?be:ce)(oe._level);te<=fe&&!Ie&&!Oe?Te.push({_level:te,_override:0,_isolate:0}):Ie||Oe++}else if(he&(U|q)){Q[z]=oe._level;var pe=(he===U?be:ce)(oe._level);pe<=fe&&!Ie&&!Oe?Te.push({_level:pe,_override:he&U?C:T,_isolate:0}):Ie||Oe++}else if(he&r){he&j&&(he=Fu(z+1,!0)===1?ie:B),Q[z]=oe._level,oe._override&&$(z,oe._override);var ye=(he===ie?be:ce)(oe._level);ye<=fe&&Ie===0&&Oe===0?(Ke++,Te.push({_level:ye,_override:0,_isolate:1,_isolInitIndex:z})):Ie++}else if(he&re){if(Ie>0)Ie--;else if(Ke>0){for(Oe=0;!Te[Te.length-1]._isolate;)Te.pop();var ge=Te[Te.length-1]._isolInitIndex;ge!=null&&(se.set(ge,z),se.set(z,ge)),Te.pop(),Ke--}oe=Te[Te.length-1],Q[z]=oe._level,oe._override&&$(z,oe._override)}else he&O?(Ie===0&&(Oe>0?Oe--:!oe._isolate&&Te.length>1&&(Te.pop(),oe=Te[Te.length-1])),Q[z]=oe._level):he&F&&(Q[z]=le.level);else Q[z]=oe._level,oe._override&&he!==Z&&$(z,oe._override)}for(var Ne=[],je=null,ze=le.start;ze<=le.end;ze++){var He=w[ze];if(!(He&l)){var dt=Q[ze],gt=He&r,Tt=He===re;je&&dt===je._level?(je._end=ze,je._endsWithIsolInit=gt):Ne.push(je={_start:ze,_end:ze,_level:dt,_startsWithPDI:Tt,_endsWithIsolInit:gt})}}for(var di=[],Zt=0;Zt<Ne.length;Zt++){var Mi=Ne[Zt];if(!Mi._startsWithPDI||Mi._startsWithPDI&&!se.has(Mi._start)){for(var Hi=[je=Mi],cn=void 0;je&&je._endsWithIsolInit&&(cn=se.get(je._end))!=null;)for(var fi=Zt+1;fi<Ne.length;fi++)if(Ne[fi]._start===cn){Hi.push(je=Ne[fi]);break}for(var Nt=[],Ui=0;Ui<Hi.length;Ui++)for(var Bs=Hi[Ui],Ir=Bs._start;Ir<=Bs._end;Ir++)Nt.push(Ir);for(var rl=Q[Nt[0]],Ua=le.level,Ur=Nt[0]-1;Ur>=0;Ur--)if(!(w[Ur]&l)){Ua=Q[Ur];break}var zs=Nt[Nt.length-1],sl=Q[zs],Fa=le.level;if(!(w[zs]&r)){for(var R=zs+1;R<=le.end;R++)if(!(w[R]&l)){Fa=Q[R];break}}di.push({_seqIndices:Nt,_sosType:Math.max(Ua,rl)%2?C:T,_eosType:Math.max(Fa,sl)%2?C:T})}}for(var Y=0;Y<di.length;Y++){var ne=di[Y],V=ne._seqIndices,K=ne._sosType,Se=ne._eosType,we=Q[V[0]]&1?C:T;if(N.get(W))for(var De=0;De<V.length;De++){var Fe=V[De];if(w[Fe]&W){for(var We=K,Xe=De-1;Xe>=0;Xe--)if(!(w[V[Xe]]&l)){We=w[V[Xe]];break}$(Fe,We&(r|re)?k:We)}}if(N.get(b))for(var Ge=0;Ge<V.length;Ge++){var et=V[Ge];if(w[et]&b)for(var it=Ge-1;it>=-1;it--){var yt=it===-1?K:w[V[it]];if(yt&s){yt===J&&$(et,P);break}}}if(N.get(J))for(var _t=0;_t<V.length;_t++){var nt=V[_t];w[nt]&J&&$(nt,C)}if(N.get(S)||N.get(L))for(var Ve=1;Ve<V.length-1;Ve++){var At=V[Ve];if(w[At]&(S|L)){for(var $e=0,ri=0,hn=Ve-1;hn>=0&&($e=w[V[hn]],!!($e&l));hn--);for(var Xt=Ve+1;Xt<V.length&&(ri=w[V[Xt]],!!(ri&l));Xt++);$e===ri&&(w[At]===S?$e===b:$e&(b|P))&&$(At,$e)}}if(N.get(b))for(var Jt=0;Jt<V.length;Jt++){var vt=V[Jt];if(w[vt]&b){for(var jt=Jt-1;jt>=0&&w[V[jt]]&(D|l);jt--)$(V[jt],b);for(Jt++;Jt<V.length&&w[V[Jt]]&(D|l|b);Jt++)w[V[Jt]]!==b&&$(V[Jt],b)}}if(N.get(D)||N.get(S)||N.get(L))for(var kt=0;kt<V.length;kt++){var Bt=V[kt];if(w[Bt]&(D|S|L)){$(Bt,k);for(var It=kt-1;It>=0&&w[V[It]]&l;It--)$(V[It],k);for(var kn=kt+1;kn<V.length&&w[V[kn]]&l;kn++)$(V[kn],k)}}if(N.get(b))for(var Wi=0,Mu=K;Wi<V.length;Wi++){var Tu=V[Wi],al=w[Tu];al&b?Mu===T&&$(Tu,T):al&s&&(Mu=al)}if(N.get(o)){var Gs=C|b|P,Eu=Gs|T,Oa=[];{for(var Fr=[],Or=0;Or<V.length;Or++)if(w[V[Or]]&o){var Vs=ae[V[Or]],Au=void 0;if(v(Vs)!==null)if(Fr.length<63)Fr.push({char:Vs,seqIndex:Or});else break;else if((Au=M(Vs))!==null)for(var Hs=Fr.length-1;Hs>=0;Hs--){var ol=Fr[Hs].char;if(ol===Au||ol===M(A(Vs))||v(A(ol))===Vs){Oa.push([Fr[Hs].seqIndex,Or]),Fr.length=Hs;break}}}Oa.sort(function(pi,ji){return pi[0]-ji[0]})}for(var ll=0;ll<Oa.length;ll++){for(var wu=Oa[ll],Na=wu[0],cl=wu[1],Cu=!1,Xi=0,hl=Na+1;hl<cl;hl++){var Ru=V[hl];if(w[Ru]&Eu){Cu=!0;var Pu=w[Ru]&Gs?C:T;if(Pu===we){Xi=Pu;break}}}if(Cu&&!Xi){Xi=K;for(var ul=Na-1;ul>=0;ul--){var Du=V[ul];if(w[Du]&Eu){var Lu=w[Du]&Gs?C:T;Lu!==we?Xi=Lu:Xi=we;break}}}if(Xi){if(w[V[Na]]=w[V[cl]]=Xi,Xi!==we){for(var Ws=Na+1;Ws<V.length;Ws++)if(!(w[V[Ws]]&l)){d(ae[V[Ws]])&W&&(w[V[Ws]]=Xi);break}}if(Xi!==we){for(var Xs=cl+1;Xs<V.length;Xs++)if(!(w[V[Xs]]&l)){d(ae[V[Xs]])&W&&(w[V[Xs]]=Xi);break}}}}for(var Bn=0;Bn<V.length;Bn++)if(w[V[Bn]]&o){for(var Iu=Bn,dl=Bn,fl=K,js=Bn-1;js>=0;js--)if(w[V[js]]&l)Iu=js;else{fl=w[V[js]]&Gs?C:T;break}for(var Uu=Se,Ys=Bn+1;Ys<V.length;Ys++)if(w[V[Ys]]&(o|l))dl=Ys;else{Uu=w[V[Ys]]&Gs?C:T;break}for(var pl=Iu;pl<=dl;pl++)w[V[pl]]=fl===Uu?fl:we;Bn=dl}}}for(var Ti=le.start;Ti<=le.end;Ti++){var rg=Q[Ti],ka=w[Ti];if(rg&1?ka&(T|b|P)&&Q[Ti]++:ka&C?Q[Ti]++:ka&(P|b)&&(Q[Ti]+=2),ka&l&&(Q[Ti]=Ti===0?le.level:Q[Ti-1]),Ti===le.end||d(ae[Ti])&(G|F))for(var Ba=Ti;Ba>=0&&d(ae[Ba])&c;Ba--)Q[Ba]=le.level}}return{levels:Q,paragraphs:de};function Fu(pi,ji){for(var mi=pi;mi<ae.length;mi++){var zn=w[mi];if(zn&(C|J))return 1;if(zn&(F|T)||ji&&zn===re)return 0;if(zn&r){var Ou=sg(mi);mi=Ou===-1?ae.length:Ou}}return 0}function sg(pi){for(var ji=1,mi=pi+1;mi<ae.length;mi++){var zn=w[mi];if(zn&F)break;if(zn&re){if(--ji===0)return mi}else zn&r&&ji++}return-1}}var _e="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function ue(){if(!ve){var ae=g(_e,!0),Ae=ae.map,fe=ae.reverseMap;fe.forEach(function(w,E){Ae.set(E,w)}),ve=Ae}}function Pe(ae){return ue(),ve.get(ae)||null}function I(ae,Ae,fe,w){var E=ae.length;fe=Math.max(0,fe==null?0:+fe),w=Math.min(E-1,w==null?E-1:+w);for(var N=new Map,$=fe;$<=w;$++)if(Ae[$]&1){var Q=Pe(ae[$]);Q!==null&&N.set($,Q)}return N}function ke(ae,Ae,fe,w){var E=ae.length;fe=Math.max(0,fe==null?0:+fe),w=Math.min(E-1,w==null?E-1:+w);var N=[];return Ae.paragraphs.forEach(function($){var Q=Math.max(fe,$.start),se=Math.min(w,$.end);if(Q<se){for(var de=Ae.levels.slice(Q,se+1),le=se;le>=Q&&d(ae[le])&c;le--)de[le]=$.level;for(var me=$.level,Le=1/0,ce=0;ce<de.length;ce++){var be=de[ce];be>me&&(me=be),be<Le&&(Le=be|1)}for(var Me=me;Me>=Le;Me--)for(var Te=0;Te<de.length;Te++)if(de[Te]>=Me){for(var oe=Te;Te+1<de.length&&de[Te+1]>=Me;)Te++;Te>oe&&N.push([oe+Q,Te+Q])}}}),N}function Ee(ae,Ae,fe,w){var E=Ce(ae,Ae,fe,w),N=[].concat(ae);return E.forEach(function($,Q){N[Q]=(Ae.levels[$]&1?Pe(ae[$]):null)||ae[$]}),N.join("")}function Ce(ae,Ae,fe,w){for(var E=ke(ae,Ae,fe,w),N=[],$=0;$<ae.length;$++)N[$]=$;return E.forEach(function(Q){for(var se=Q[0],de=Q[1],le=N.slice(se,de+1),me=le.length;me--;)N[de-me]=le[me]}),N}return e.closingToOpeningBracket=M,e.getBidiCharType=d,e.getBidiCharTypeName=f,e.getCanonicalBracket=A,e.getEmbeddingLevels=xe,e.getMirroredCharacter=Pe,e.getMirroredCharactersMap=I,e.getReorderSegments=ke,e.getReorderedIndices=Ce,e.getReorderedString=Ee,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const Ym=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Sh(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Ze[n];return r?Sh(r):i}return a.replace(e,t)}const Yt=[];for(let a=0;a<256;a++)Yt[a]=(a<16?"0":"")+a.toString(16);function bT(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[a&255]+Yt[a>>8&255]+Yt[a>>16&255]+Yt[a>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toUpperCase()}const gr=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(a[n]=i[n])}return a},ST=Date.now(),If=new WeakMap,Uf=new Map;let MT=1e10;function Mh(a,e){const t=wT(e);let i=If.get(a);if(i||If.set(a,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,h){a.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let d=Uf[u];if(!d){const f=TT(this,c,e,t);d=Uf[u]=f}c.vertexShader=d.vertexShader,c.fragmentShader=d.fragmentShader,gr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-ST}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:a}),Object.defineProperty(h,"id",{value:MT++}),h.uuid=bT(),h.uniforms=gr({},c.uniforms,e.uniforms),h.defines=gr({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=gr({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const h=this.baseMaterial;return c===h||h.isDerivedMaterial&&h.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(gr(this.extensions,c.extensions),gr(this.defines,c.defines),gr(this.uniforms,Is.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Mh(a.isDerivedMaterial?a.getDepthMaterial():new Zh({depthPacking:kh}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Mh(a.isDerivedMaterial?a.getDistanceMaterial():new Dp,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),a.dispose.call(this)}}};return i[t]=s,new s}function TT(a,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:d,customRewriter:f,timeUniform:_}=i;if(r=r||"",s=s||"",o=o||"",c=c||"",h=h||"",u=u||"",(l||f)&&(e=Sh(e)),(d||f)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Sh(t)),f){let g=f({vertexShader:e,fragmentShader:t});e=g.vertexShader,t=g.fragmentShader}if(d){let g=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(g.push(p),"")),u=`${d}
${g.join(`
`)}
${u}`}if(_){const g=`
uniform float ${_};
`;r=g+r,c=g+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(g,p,m,x)=>/\battribute\s+vec[23]\s+$/.test(x.substr(0,m))?p:`troika_${p}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Ff(e,n,r,s,o),t=Ff(t,n,c,h,u),{vertexShader:e,fragmentShader:t}}function Ff(a,e,t,i,n){return(i||n||t)&&(a=a.replace(Ym,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),a}function ET(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let AT=0;const Of=new Map;function wT(a){const e=JSON.stringify(a,ET);let t=Of.get(e);return t==null&&Of.set(e,t=++AT),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function CT(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var r=e._bin,s=new Uint8Array(n);if(r.readASCII(s,0,4)=="ttcf"){var o=4;r.readUshort(s,o),o+=2,r.readUshort(s,o),o+=2;var l=r.readUint(s,o);o+=4;for(var c=[],h=0;h<l;h++){var u=r.readUint(s,o);o+=4,c.push(e._readFont(s,u))}return c}return[e._readFont(s,0)]},_readFont:function(n,r){var s=e._bin,o=r;s.readFixed(n,r),r+=4;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:n,_offset:o},u={},d=0;d<l;d++){var f=s.readASCII(n,r,4);r+=4,s.readUint(n,r),r+=4;var _=s.readUint(n,r);r+=4;var g=s.readUint(n,r);r+=4,u[f]={offset:_,length:g}}for(d=0;d<c.length;d++){var p=c[d];u[p]&&(h[p.trim()]=e[p.trim()].parse(n,u[p].offset,u[p].length,h))}return h},_tabOffset:function(n,r,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,h=0;h<l;h++){var u=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var d=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,u==r)return d}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,s){for(var o="",l=0;l<s;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,s){var o=e._bin._tdec;return o&&r==0&&s==n.length?o.decode(n):e._bin.readASCII(n,r,s)},readBytes:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,s,o,l){var c=e._bin,h={},u=r;c.readFixed(n,r),r+=4;var d=c.readUshort(n,r);r+=2;var f=c.readUshort(n,r);r+=2;var _=c.readUshort(n,r);return r+=2,h.scriptList=e._lctf.readScriptList(n,u+d),h.featureList=e._lctf.readFeatureList(n,u+f),h.lookupList=e._lctf.readLookupList(n,u+_,l),h},e._lctf.readLookupList=function(n,r,s){var o=e._bin,l=r,c=[],h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var d=o.readUshort(n,r);r+=2;var f=e._lctf.readLookupTable(n,l+d,s);c.push(f)}return c},e._lctf.readLookupTable=function(n,r,s){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var h=o.readUshort(n,r);r+=2;for(var u=c.ltype,d=0;d<h;d++){var f=o.readUshort(n,r);r+=2;var _=s(n,u,l+f,c);c.tabs.push(_)}return c},e._lctf.numOfOnes=function(n){for(var r=0,s=0;s<32;s++)(n>>>s&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var s=e._bin,o=[],l=s.readUshort(n,r);if(r+=2,l==1){var c=s.readUshort(n,r);r+=2;var h=s.readUshort(n,r);r+=2;for(var u=0;u<h;u++)o.push(c+u),o.push(c+u),o.push(s.readUshort(n,r)),r+=2}if(l==2){var d=s.readUshort(n,r);for(r+=2,u=0;u<d;u++)o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(n,r){var s=e._bin,o={};o.fmt=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=s.readUshorts(n,r,l)),o.fmt==2&&(o.tab=s.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var s=n.tab;if(n.fmt==1)return s.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(s,r);if(o!=-1)return s[o+2]+(r-s[o])}return-1},e._lctf.readFeatureList=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=s.readASCII(n,r,4);r+=4;var d=s.readUshort(n,r);r+=2;var f=e._lctf.readFeatureTable(n,o+d);f.tag=u.trim(),l.push(f)}return l},e._lctf.readFeatureTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var h=s.readUshort(n,r);r+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(s.readUshort(n,r+2*u));return l},e._lctf.readScriptList=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=s.readASCII(n,r,4);r+=4;var d=s.readUshort(n,r);r+=2,l[u.trim()]=e._lctf.readScriptTable(n,o+d)}return l},e._lctf.readScriptTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var h=s.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var d=s.readASCII(n,r,4);r+=4;var f=s.readUshort(n,r);r+=2,l[d.trim()]=e._lctf.readLangSysTable(n,o+f)}return l},e._lctf.readLangSysTable=function(n,r){var s=e._bin,o={};s.readUshort(n,r),r+=2,o.reqFeature=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.features=s.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,s){var o=e._bin;(n=new Uint8Array(n.buffer,r,s))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],h=0;h<l.length-1;h++)c.push(o.readASCII(n,r+l[h],l[h+1]-l[h]));r+=l[l.length-1];var u=[];r=e.CFF.readIndex(n,r,u);var d=[];for(h=0;h<u.length-1;h++)d.push(e.CFF.readDict(n,r+u[h],r+u[h+1]));r+=u[u.length-1];var f=d[0],_=[];r=e.CFF.readIndex(n,r,_);var g=[];for(h=0;h<_.length-1;h++)g.push(o.readASCII(n,r+_[h],_[h+1]-_[h]));if(r+=_[_.length-1],e.CFF.readSubrs(n,r,f),f.CharStrings){r=f.CharStrings,_=[],r=e.CFF.readIndex(n,r,_);var p=[];for(h=0;h<_.length-1;h++)p.push(o.readBytes(n,r+_[h],_[h+1]-_[h]));f.CharStrings=p}if(f.ROS){r=f.FDArray;var m=[];for(r=e.CFF.readIndex(n,r,m),f.FDArray=[],h=0;h<m.length-1;h++){var x=e.CFF.readDict(n,r+m[h],r+m[h+1]);e.CFF._readFDict(n,x,g),f.FDArray.push(x)}r+=m[m.length-1],r=f.FDSelect,f.FDSelect=[];var y=n[r];if(r++,y!=3)throw y;var v=o.readUshort(n,r);for(r+=2,h=0;h<v+1;h++)f.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(n,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(n,f.charset,f.CharStrings.length)),e.CFF._readFDict(n,f,g),f},e.CFF._readFDict=function(n,r,s){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(n,r,s){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var u=0;u<l.length-1;u++)s.Subrs.push(o.readBytes(n,r+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,s){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var h=0;h<c;h++)o.push(n[r+h]);return o},e.CFF.readCharset=function(n,r,s){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var h=0;h<s;h++){var u=o.readUshort(n,r);r+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){u=o.readUshort(n,r),r+=2;var d=0;for(c==1?(d=n[r],r++):(d=o.readUshort(n,r),r+=2),h=0;h<=d;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(n,r,s){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var h=0;h<l;h++)s.push(n[r+h]);else if(c==2)for(h=0;h<l;h++)s.push(o.readUshort(n,r+2*h));else if(c==3)for(h=0;h<l;h++)s.push(16777215&o.readUint(n,r+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,s){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,u=null,d=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(d=o.readShort(n,r+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(d=l-139,h=1),247<=l&&l<=250&&(d=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(d=256*-(l-251)-c-108,h=2),l==255&&(d=o.readInt(n,r+1)/65535,h=5),s.val=d??"o"+u,s.size=h},e.CFF.readCharString=function(n,r,s){for(var o=r+s,l=e._bin,c=[];r<o;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var d=1,f=null,_=null;h<=20&&(f=h,d=1),h==12&&(f=100*h+u,d=2),h!=19&&h!=20||(f=h,d=2),21<=h&&h<=27&&(f=h,d=1),h==28&&(_=l.readShort(n,r+1),d=3),29<=h&&h<=31&&(f=h,d=1),32<=h&&h<=246&&(_=h-139,d=1),247<=h&&h<=250&&(_=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(_=256*-(h-251)-u-108,d=2),h==255&&(_=l.readInt(n,r+1)/65535,d=5),c.push(_??"o"+f),r+=d}return c},e.CFF.readDict=function(n,r,s){for(var o=e._bin,l={},c=[];r<s;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var d=1,f=null,_=null;if(h==28&&(_=o.readShort(n,r+1),d=3),h==29&&(_=o.readInt(n,r+1),d=5),32<=h&&h<=246&&(_=h-139,d=1),247<=h&&h<=250&&(_=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(_=256*-(h-251)-u-108,d=2),h==255)throw _=o.readInt(n,r+1)/65535,d=5,"unknown number";if(h==30){var g=[];for(d=1;;){var p=n[r+d];d++;var m=p>>4,x=15&p;if(m!=15&&g.push(m),x!=15&&g.push(x),x==15)break}for(var y="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],M=0;M<g.length;M++)y+=v[g[M]];_=parseFloat(y)}h<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],d=1,h==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],d=2)),f!=null?(l[f]=c.length==1?c[0]:c,c=[]):c.push(_),r+=d}return l},e.cmap={},e.cmap.parse=function(n,r,s){n=new Uint8Array(n.buffer,r,s),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var d=o.readUshort(n,r);r+=2;var f=o.readUshort(n,r);r+=2;var _=o.readUint(n,r);r+=4;var g="p"+d+"e"+f,p=h.indexOf(_);if(p==-1){var m;p=l.tables.length,h.push(_);var x=o.readUshort(n,_);x==0?m=e.cmap.parse0(n,_):x==4?m=e.cmap.parse4(n,_):x==6?m=e.cmap.parse6(n,_):x==12?m=e.cmap.parse12(n,_):console.debug("unknown format: "+x,d,f,_),l.tables.push(m)}if(l[g]!=null)throw"multiple tables for one platform+encoding";l[g]=p}return l},e.cmap.parse0=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var s=e._bin,o=r,l={};l.format=s.readUshort(n,r),r+=2;var c=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2;var h=s.readUshort(n,r);r+=2;var u=h/2;l.searchRange=s.readUshort(n,r),r+=2,l.entrySelector=s.readUshort(n,r),r+=2,l.rangeShift=s.readUshort(n,r),r+=2,l.endCount=s.readUshorts(n,r,u),r+=2*u,r+=2,l.startCount=s.readUshorts(n,r,u),r+=2*u,l.idDelta=[];for(var d=0;d<u;d++)l.idDelta.push(s.readShort(n,r)),r+=2;for(l.idRangeOffset=s.readUshorts(n,r,u),r+=2*u,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(s.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,o.firstCode=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,r+=2,s.readUint(n,r),r+=4,s.readUint(n,r),r+=4;var l=s.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var h=r+12*c,u=s.readUint(n,h+0),d=s.readUint(n,h+4),f=s.readUint(n,h+8);o.groups.push([u,d,f])}return o},e.glyf={},e.glyf.parse=function(n,r,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(s.readUshort(o,l)),l+=2;var u=s.readUshort(o,l);if(l+=2,o.length-l<u)return null;c.instructions=s.readBytes(o,l,u),l+=u;var d=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<d;h++){var f=o[l];if(l++,c.flags.push(f),(8&f)!=0){var _=o[l];l++;for(var g=0;g<_;g++)c.flags.push(f),h++}}for(c.xs=[],h=0;h<d;h++){var p=(2&c.flags[h])!=0,m=(16&c.flags[h])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],h=0;h<d;h++)p=(4&c.flags[h])!=0,m=(32&c.flags[h])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var x=0,y=0;for(h=0;h<d;h++)x+=c.xs[h],y+=c.ys[h],c.xs[h]=x,c.ys[h]=y}else{var v;c.parts=[];do{v=s.readUshort(o,l),l+=2;var M={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(M),M.glyphIndex=s.readUshort(o,l),l+=2,1&v){var A=s.readShort(o,l);l+=2;var T=s.readShort(o,l);l+=2}else A=s.readInt8(o,l),l++,T=s.readInt8(o,l),l++;2&v?(M.m.tx=A,M.m.ty=T):(M.p1=A,M.p2=T),8&v?(M.m.a=M.m.d=s.readF2dot14(o,l),l+=2):64&v?(M.m.a=s.readF2dot14(o,l),l+=2,M.m.d=s.readF2dot14(o,l),l+=2):128&v&&(M.m.a=s.readF2dot14(o,l),l+=2,M.m.b=s.readF2dot14(o,l),l+=2,M.m.c=s.readF2dot14(o,l),l+=2,M.m.d=s.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var C=s.readUshort(o,l);for(l+=2,c.instr=[],h=0;h<C;h++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,s,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,s,o){var l=e._bin,c=s,h={};if(h.fmt=l.readUshort(n,s),s+=2,r==1||r==2||r==3||r==7||r==8&&h.fmt<=2){var u=l.readUshort(n,s);s+=2,h.coverage=e._lctf.readCoverage(n,u+c)}if(r==1&&h.fmt==1){var d=l.readUshort(n,s);s+=2,d!=0&&(h.pos=e.GPOS.readValueRecord(n,s,d))}else if(r==2&&h.fmt>=1&&h.fmt<=2){d=l.readUshort(n,s),s+=2;var f=l.readUshort(n,s);s+=2;var _=e._lctf.numOfOnes(d),g=e._lctf.numOfOnes(f);if(h.fmt==1){h.pairsets=[];var p=l.readUshort(n,s);s+=2;for(var m=0;m<p;m++){var x=c+l.readUshort(n,s);s+=2;var y=l.readUshort(n,x);x+=2;for(var v=[],M=0;M<y;M++){var A=l.readUshort(n,x);x+=2,d!=0&&(P=e.GPOS.readValueRecord(n,x,d),x+=2*_),f!=0&&(L=e.GPOS.readValueRecord(n,x,f),x+=2*g),v.push({gid2:A,val1:P,val2:L})}h.pairsets.push(v)}}if(h.fmt==2){var T=l.readUshort(n,s);s+=2;var C=l.readUshort(n,s);s+=2;var b=l.readUshort(n,s);s+=2;var S=l.readUshort(n,s);for(s+=2,h.classDef1=e._lctf.readClassDef(n,c+T),h.classDef2=e._lctf.readClassDef(n,c+C),h.matrix=[],m=0;m<b;m++){var D=[];for(M=0;M<S;M++){var P=null,L=null;d!=0&&(P=e.GPOS.readValueRecord(n,s,d),s+=2*_),f!=0&&(L=e.GPOS.readValueRecord(n,s,f),s+=2*g),D.push({val1:P,val2:L})}h.matrix.push(D)}}}else if(r==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),h.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),h.markClassCount=l.readUshort(n,s+4),h.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),h.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,h.markClassCount);else if(r==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),h.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),h.markClassCount=l.readUshort(n,s+4),h.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),h.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,h.markClassCount);else{if(r==9&&h.fmt==1){var F=l.readUshort(n,s);s+=2;var G=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+G)}console.debug("unsupported GPOS table LookupType",r,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(n,r,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,r):0),r+=1&s?2:0,l.push(2&s?o.readShort(n,r):0),r+=2&s?2:0,l.push(4&s?o.readShort(n,r):0),r+=4&s?2:0,l.push(8&s?o.readShort(n,r):0),r+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,r,s){var o=e._bin,l=[],c=r,h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++){for(var d=[],f=0;f<s;f++)d.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(d)}return l},e.GPOS.readMarkArray=function(n,r){var s=e._bin,o=[],l=r,c=s.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=e.GPOS.readAnchorRecord(n,s.readUshort(n,r+2)+l);u.markClass=s.readUshort(n,r),o.push(u),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var s=e._bin,o={};return o.fmt=s.readUshort(n,r),o.x=s.readShort(n,r+2),o.y=s.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,s,o){var l=e._bin,c=s,h={};if(h.fmt=l.readUshort(n,s),s+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&h.fmt<=2||r==6&&h.fmt<=2){var u=l.readUshort(n,s);s+=2,h.coverage=e._lctf.readCoverage(n,c+u)}if(r==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(n,s),s+=2;else if(h.fmt==2){var d=l.readUshort(n,s);s+=2,h.newg=l.readUshorts(n,s,d),s+=2*h.newg.length}}else if(r==2&&h.fmt==1){d=l.readUshort(n,s),s+=2,h.seqs=[];for(var f=0;f<d;f++){var _=l.readUshort(n,s)+c;s+=2;var g=l.readUshort(n,_);h.seqs.push(l.readUshorts(n,_+2,g))}}else if(r==4)for(h.vals=[],d=l.readUshort(n,s),s+=2,f=0;f<d;f++){var p=l.readUshort(n,s);s+=2,h.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(r==5&&h.fmt==2){if(h.fmt==2){var m=l.readUshort(n,s);s+=2,h.cDef=e._lctf.readClassDef(n,c+m),h.scset=[];var x=l.readUshort(n,s);for(s+=2,f=0;f<x;f++){var y=l.readUshort(n,s);s+=2,h.scset.push(y==0?null:e.GSUB.readSubClassSet(n,c+y))}}}else if(r==6&&h.fmt==3){if(h.fmt==3){for(f=0;f<3;f++){d=l.readUshort(n,s),s+=2;for(var v=[],M=0;M<d;M++)v.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*M)));s+=2*d,f==0&&(h.backCvg=v),f==1&&(h.inptCvg=v),f==2&&(h.ahedCvg=v)}d=l.readUshort(n,s),s+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(n,s,d)}}else{if(r==7&&h.fmt==1){var A=l.readUshort(n,s);s+=2;var T=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=A;else if(o.ltype!=A)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",r,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(n,r){var s=e._bin.readUshort,o=r,l=[],c=s(n,r);r+=2;for(var h=0;h<c;h++){var u=s(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+u))}return l},e.GSUB.readSubClassRule=function(n,r){var s=e._bin.readUshort,o={},l=s(n,r),c=s(n,r+=2);r+=2,o.input=[];for(var h=0;h<l-1;h++)o.input.push(s(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=s.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+u))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=s.readUshort(n,r);r+=2,c==1&&h--,o[l[c]]=s.readUshorts(n,r,h),r+=2*o[l[c]].length}return h=s.readUshort(n,r),r+=2,o.subst=s.readUshorts(n,r,2*h),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=s.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+u))}return l},e.GSUB.readLigature=function(n,r){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,d=0;d<o.maxp.numGlyphs;d++)d<o.hhea.numberOfHMetrics&&(h=l.readUshort(n,r),r+=2,u=l.readShort(n,r),r+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(n,r,s,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,s,o);var h=l.readUshort(n,r);r+=2;for(var u={glyph1:[],rval:[]},d=0;d<h;d++){r+=2,s=l.readUshort(n,r),r+=2;var f=l.readUshort(n,r);r+=2;var _=f>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;r=e.kern.readFormat0(n,r,u)}return u},e.kern.parseV1=function(n,r,s,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(n,r),r+=4;var d=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var f=d>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;r=e.kern.readFormat0(n,r,h)}return h},e.kern.readFormat0=function(n,r,s){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var h=0;h<c;h++){var u=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var f=o.readShort(n,r);r+=2,u!=l&&(s.glyph1.push(u),s.rval.push({glyph2:[],vals:[]}));var _=s.rval[s.rval.length-1];_.glyph2.push(d),_.vals.push(f),l=u}return r},e.loca={},e.loca.parse=function(n,r,s,o){var l=e._bin,c=[],h=o.head.indexToLocFormat,u=o.maxp.numGlyphs+1;if(h==0)for(var d=0;d<u;d++)c.push(l.readUshort(n,r+(d<<1))<<1);if(h==1)for(d=0;d<u;d++)c.push(l.readUint(n,r+(d<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,s){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,s){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,f=0;f<c;f++){var _=o.readUshort(n,r);r+=2;var g=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var x=o.readUshort(n,r);r+=2;var y=o.readUshort(n,r);r+=2;var v,M=u[m],A=d+12*c+y;if(_==0)v=o.readUnicode(n,A,x/2);else if(_==3&&g==0)v=o.readUnicode(n,A,x/2);else if(g==0)v=o.readASCII(n,A,x);else if(g==1)v=o.readUnicode(n,A,x/2);else if(g==3)v=o.readUnicode(n,A,x/2);else{if(_!=1)throw"unknown encoding "+g+", platformID: "+_;v=o.readASCII(n,A,x),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var T="p"+_+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][M!==void 0?M:m]=v,l[T]._lang=p}for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==1033)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==0)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==3084)return l[C];for(var C in l)if(l[C].postScriptName!=null)return l[C];for(var C in l){h=C;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(n,r,s){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,r),r+=2,s.usWeightClass=o.readUshort(n,r),r+=2,s.usWidthClass=o.readUshort(n,r),r+=2,s.fsType=o.readUshort(n,r),r+=2,s.ySubscriptXSize=o.readShort(n,r),r+=2,s.ySubscriptYSize=o.readShort(n,r),r+=2,s.ySubscriptXOffset=o.readShort(n,r),r+=2,s.ySubscriptYOffset=o.readShort(n,r),r+=2,s.ySuperscriptXSize=o.readShort(n,r),r+=2,s.ySuperscriptYSize=o.readShort(n,r),r+=2,s.ySuperscriptXOffset=o.readShort(n,r),r+=2,s.ySuperscriptYOffset=o.readShort(n,r),r+=2,s.yStrikeoutSize=o.readShort(n,r),r+=2,s.yStrikeoutPosition=o.readShort(n,r),r+=2,s.sFamilyClass=o.readShort(n,r),r+=2,s.panose=o.readBytes(n,r,10),r+=10,s.ulUnicodeRange1=o.readUint(n,r),r+=4,s.ulUnicodeRange2=o.readUint(n,r),r+=4,s.ulUnicodeRange3=o.readUint(n,r),r+=4,s.ulUnicodeRange4=o.readUint(n,r),r+=4,s.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,s.fsSelection=o.readUshort(n,r),r+=2,s.usFirstCharIndex=o.readUshort(n,r),r+=2,s.usLastCharIndex=o.readUshort(n,r),r+=2,s.sTypoAscender=o.readShort(n,r),r+=2,s.sTypoDescender=o.readShort(n,r),r+=2,s.sTypoLineGap=o.readShort(n,r),r+=2,s.usWinAscent=o.readUshort(n,r),r+=2,s.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,s){var o=e._bin;return r=e["OS/2"].version0(n,r,s),s.ulCodePageRange1=o.readUint(n,r),r+=4,s.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,s){var o=e._bin;return r=e["OS/2"].version1(n,r,s),s.sxHeight=o.readShort(n,r),r+=2,s.sCapHeight=o.readShort(n,r),r+=2,s.usDefault=o.readUshort(n,r),r+=2,s.usBreak=o.readUshort(n,r),r+=2,s.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,s){var o=e._bin;return r=e["OS/2"].version2(n,r,s),s.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,s.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,s){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(r<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=r&&r<=u[1])return u[2]+(r-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,h=n.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=r;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,h,s)}else n.glyf&&e.U._drawGlyf(r,n,s);return s},e.U._drawGlyf=function(n,r,s){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,r,s))},e.U._simpleGlyph=function(n,r){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var h=c==o?l:c-1,u=c==l?o:c+1,d=1&n.flags[c],f=1&n.flags[h],_=1&n.flags[u],g=n.xs[c],p=n.ys[c];if(c==o)if(d){if(!f){e.U.P.moveTo(r,g,p);continue}e.U.P.moveTo(r,n.xs[h],n.ys[h])}else f?e.U.P.moveTo(r,n.xs[h],n.ys[h]):e.U.P.moveTo(r,(n.xs[h]+g)/2,(n.ys[h]+p)/2);d?f&&e.U.P.lineTo(r,g,p):_?e.U.P.qcurveTo(r,g,p,n.xs[u],n.ys[u]):e.U.P.qcurveTo(r,g,p,(g+n.xs[u])/2,(p+n.ys[u])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var d=l.crds[u],f=l.crds[u+1];s.crds.push(d*h.a+f*h.b+h.tx),s.crds.push(d*h.c+f*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)s.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(n,r){var s=e._lctf.getInterval(r,n);return s==-1?0:r[s+2]},e.U._applySubs=function(n,r,s,o){for(var l=n.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var h,u=s.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,n[r]))!=-1){if(s.ltype==1)n[r],u.fmt==1?n[r]=n[r]+u.delta:n[r]=u.newg[h];else if(s.ltype==4)for(var d=u.vals[h],f=0;f<d.length;f++){var _=d[f],g=_.chain.length;if(!(g>l)){for(var p=!0,m=0,x=0;x<g;x++){for(;n[r+m+(1+x)]==-1;)m++;_.chain[x]!=n[r+m+(1+x)]&&(p=!1)}if(p){for(n[r]=_.nglyph,x=0;x<g+m;x++)n[r+x+1]=-1;break}}}else if(s.ltype==5&&u.fmt==2)for(var y=e._lctf.getInterval(u.cDef,n[r]),v=u.cDef[y+2],M=u.scset[v],A=0;A<M.length;A++){var T=M[A],C=T.input;if(!(C.length>l)){for(p=!0,x=0;x<C.length;x++){var b=e._lctf.getInterval(u.cDef,n[r+1+x]);if(y==-1&&u.cDef[b+2]!=C[x]){p=!1;break}}if(p){var S=T.substLookupRecords;for(f=0;f<S.length;f+=2)S[f],S[f+1]}}}else if(s.ltype==6&&u.fmt==3){if(!e.U._glsCovered(n,u.backCvg,r-u.backCvg.length)||!e.U._glsCovered(n,u.inptCvg,r)||!e.U._glsCovered(n,u.ahedCvg,r+u.inptCvg.length))continue;var D=u.lookupRec;for(A=0;A<D.length;A+=2){y=D[A];var P=o[D[A+1]];e.U._applySubs(n,r+y,P,o)}}}}},e.U._glsCovered=function(n,r,s){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var h=r[c];if(h!=-1){for(var u=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,d=e.U.glyphToPath(n,h),f=0;f<d.crds.length;f+=2)o.crds.push(d.crds[f]+l),o.crds.push(d.crds[f+1]);for(s&&o.cmds.push(s),f=0;f<d.cmds.length;f++)o.cmds.push(d.cmds[f]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[h],c<r.length-1&&(l+=e.U.getPairAdjustment(n,h,u))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,s){n.cmds.push("M"),n.crds.push(r,s)},e.U.P.lineTo=function(n,r,s){n.cmds.push("L"),n.crds.push(r,s)},e.U.P.curveTo=function(n,r,s,o,l,c,h){n.cmds.push("C"),n.crds.push(r,s,o,l,c,h)},e.U.P.qcurveTo=function(n,r,s,o,l){n.cmds.push("Q"),n.crds.push(r,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,s,o,l){for(var c=r.stack,h=r.nStems,u=r.haveWidth,d=r.width,f=r.open,_=0,g=r.x,p=r.y,m=0,x=0,y=0,v=0,M=0,A=0,T=0,C=0,b=0,S=0,D={val:0,size:0};_<n.length;){e.CFF.getCharString(n,_,D);var P=D.val;if(_+=D.size,P=="o1"||P=="o18")c.length%2!=0&&!u&&(d=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!u&&(d=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(P=="o4")c.length>1&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),f&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,g,p),f=!0;else if(P=="o5")for(;c.length>0;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);else if(P=="o6"||P=="o7")for(var L=c.length,F=P=="o6",G=0;G<L;G++){var k=c.shift();F?g+=k:p+=k,F=!F,e.U.P.lineTo(l,g,p)}else if(P=="o8"||P=="o24"){L=c.length;for(var Z=0;Z+6<=L;)m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),g=y+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,x,y,v,g,p),Z+=6;P=="o24"&&(g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(x=p,y=(m=g+c.shift())+c.shift(),S=v=x+c.shift(),A=v,C=p,g=(T=(M=(b=y+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,x,y,v,b,S),e.U.P.curveTo(l,M,A,T,C,g,p)),P=="o1235"&&(m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),b=y+c.shift(),S=v+c.shift(),M=b+c.shift(),A=S+c.shift(),T=M+c.shift(),C=A+c.shift(),g=T+c.shift(),p=C+c.shift(),c.shift(),e.U.P.curveTo(l,m,x,y,v,b,S),e.U.P.curveTo(l,M,A,T,C,g,p)),P=="o1236"&&(m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),S=v=x+c.shift(),A=v,T=(M=(b=y+c.shift())+c.shift())+c.shift(),C=A+c.shift(),g=T+c.shift(),e.U.P.curveTo(l,m,x,y,v,b,S),e.U.P.curveTo(l,M,A,T,C,g,p)),P=="o1237"&&(m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),b=y+c.shift(),S=v+c.shift(),M=b+c.shift(),A=S+c.shift(),T=M+c.shift(),C=A+c.shift(),Math.abs(T-g)>Math.abs(C-p)?g=T+c.shift():p=C+c.shift(),e.U.P.curveTo(l,m,x,y,v,b,S),e.U.P.curveTo(l,M,A,T,C,g,p));else if(P=="o14"){if(c.length>0&&!u&&(d=c.shift()+s.nominalWidthX,u=!0),c.length==4){var W=c.shift(),J=c.shift(),q=c.shift(),U=c.shift(),X=e.CFF.glyphBySE(s,q),ee=e.CFF.glyphBySE(s,U);e.U._drawCFF(s.CharStrings[X],r,s,o,l),r.x=W,r.y=J,e.U._drawCFF(s.CharStrings[ee],r,s,o,l)}f&&(e.U.P.closePath(l),f=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!u&&(d=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,_+=h+7>>3;else if(P=="o21")c.length>2&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),p+=c.pop(),g+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),f=!0;else if(P=="o22")c.length>1&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),g+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),f=!0;else if(P=="o25"){for(;c.length>6;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),g=y+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,x,y,v,g,p)}else if(P=="o26")for(c.length%2&&(g+=c.shift());c.length>0;)m=g,x=p+c.shift(),g=y=m+c.shift(),p=(v=x+c.shift())+c.shift(),e.U.P.curveTo(l,m,x,y,v,g,p);else if(P=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)x=p,y=(m=g+c.shift())+c.shift(),v=x+c.shift(),g=y+c.shift(),p=v,e.U.P.curveTo(l,m,x,y,v,g,p);else if(P=="o10"||P=="o29"){var O=P=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var B=c.pop(),ie=O.Subrs[B+O.Bias];r.x=g,r.y=p,r.nStems=h,r.haveWidth=u,r.width=d,r.open=f,e.U._drawCFF(ie,r,s,o,l),g=r.x,p=r.y,h=r.nStems,u=r.haveWidth,d=r.width,f=r.open}}else if(P=="o30"||P=="o31"){var j=c.length,re=(Z=0,P=="o31");for(Z+=j-(L=-3&j);Z<L;)re?(x=p,y=(m=g+c.shift())+c.shift(),p=(v=x+c.shift())+c.shift(),L-Z==5?(g=y+c.shift(),Z++):g=y,re=!1):(m=g,x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),g=y+c.shift(),L-Z==5?(p=v+c.shift(),Z++):p=v,re=!0),e.U.P.curveTo(l,m,x,y,v,g,p),Z+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,n),P;c.push(P)}}}r.x=g,r.y=p,r.nStems=h,r.haveWidth=u,r.width=d,r.open=f};var t=e,i={Typr:t};return a.Typr=t,a.default=i,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function RT(){return function(a){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(P,L){for(var F=new t(31),G=0;G<31;++G)F[G]=L+=1<<P[G-1];var k=new i(F[30]);for(G=1;G<30;++G)for(var Z=F[G];Z<F[G+1];++Z)k[Z]=Z-F[G]<<5|G;return[F,k]},l=o(n,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=o(r,0)[0],d=new t(32768),f=0;f<32768;++f){var _=(43690&f)>>>1|(21845&f)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,d[f]=((65280&_)>>>8|(255&_)<<8)>>>1}var g=function(P,L,F){for(var G=P.length,k=0,Z=new t(L);k<G;++k)++Z[P[k]-1];var W,J=new t(L);for(k=0;k<L;++k)J[k]=J[k-1]+Z[k-1]<<1;{W=new t(1<<L);var q=15-L;for(k=0;k<G;++k)if(P[k])for(var U=k<<4|P[k],X=L-P[k],ee=J[P[k]-1]++<<X,O=ee|(1<<X)-1;ee<=O;++ee)W[d[ee]>>>q]=U}return W},p=new e(288);for(f=0;f<144;++f)p[f]=8;for(f=144;f<256;++f)p[f]=9;for(f=256;f<280;++f)p[f]=7;for(f=280;f<288;++f)p[f]=8;var m=new e(32);for(f=0;f<32;++f)m[f]=5;var x=g(p,9),y=g(m,5),v=function(P){for(var L=P[0],F=1;F<P.length;++F)P[F]>L&&(L=P[F]);return L},M=function(P,L,F){var G=L/8|0;return(P[G]|P[G+1]<<8)>>(7&L)&F},A=function(P,L){var F=L/8|0;return(P[F]|P[F+1]<<8|P[F+2]<<16)>>(7&L)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(P,L,F){var G=new Error(L||T[P]);if(G.code=P,Error.captureStackTrace&&Error.captureStackTrace(G,C),!F)throw G;return G},b=function(P,L,F){var G=P.length;if(!G||F&&!F.l&&G<5)return L||new e(0);var k=!L||F,Z=!F||F.i;F||(F={}),L||(L=new e(3*G));var W,J=function(oe){var Ie=L.length;if(oe>Ie){var Oe=new e(Math.max(2*Ie,oe));Oe.set(L),L=Oe}},q=F.f||0,U=F.p||0,X=F.b||0,ee=F.l,O=F.d,B=F.m,ie=F.n,j=8*G;do{if(!ee){F.f=q=M(P,U,1);var re=M(P,U+1,3);if(U+=3,!re){var xe=P[(fe=((W=U)/8|0)+(7&W&&1)+4)-4]|P[fe-3]<<8,_e=fe+xe;if(_e>G){Z&&C(0);break}k&&J(X+xe),L.set(P.subarray(fe,_e),X),F.b=X+=xe,F.p=U=8*_e;continue}if(re==1)ee=x,O=y,B=9,ie=5;else if(re==2){var ve=M(P,U,31)+257,ue=M(P,U+10,15)+4,Pe=ve+M(P,U+5,31)+1;U+=14;for(var I=new e(Pe),ke=new e(19),Ee=0;Ee<ue;++Ee)ke[s[Ee]]=M(P,U+3*Ee,7);U+=3*ue;var Ce=v(ke),ae=(1<<Ce)-1,Ae=g(ke,Ce);for(Ee=0;Ee<Pe;){var fe,w=Ae[M(P,U,ae)];if(U+=15&w,(fe=w>>>4)<16)I[Ee++]=fe;else{var E=0,N=0;for(fe==16?(N=3+M(P,U,3),U+=2,E=I[Ee-1]):fe==17?(N=3+M(P,U,7),U+=3):fe==18&&(N=11+M(P,U,127),U+=7);N--;)I[Ee++]=E}}var $=I.subarray(0,ve),Q=I.subarray(ve);B=v($),ie=v(Q),ee=g($,B),O=g(Q,ie)}else C(1);if(U>j){Z&&C(0);break}}k&&J(X+131072);for(var se=(1<<B)-1,de=(1<<ie)-1,le=U;;le=U){var me=(E=ee[A(P,U)&se])>>>4;if((U+=15&E)>j){Z&&C(0);break}if(E||C(2),me<256)L[X++]=me;else{if(me==256){le=U,ee=null;break}var Le=me-254;if(me>264){var ce=n[Ee=me-257];Le=M(P,U,(1<<ce)-1)+c[Ee],U+=ce}var be=O[A(P,U)&de],Me=be>>>4;if(be||C(3),U+=15&be,Q=u[Me],Me>3&&(ce=r[Me],Q+=A(P,U)&(1<<ce)-1,U+=ce),U>j){Z&&C(0);break}k&&J(X+131072);for(var Te=X+Le;X<Te;X+=4)L[X]=L[X-Q],L[X+1]=L[X+1-Q],L[X+2]=L[X+2-Q],L[X+3]=L[X+3-Q];X=Te}}F.l=ee,F.p=le,F.b=X,ee&&(q=1,F.m=B,F.d=O,F.n=ie)}while(!q);return X==L.length?L:function(oe,Ie,Oe){(Oe==null||Oe>oe.length)&&(Oe=oe.length);var Ke=new(oe instanceof t?t:oe instanceof i?i:e)(Oe-Ie);return Ke.set(oe.subarray(Ie,Oe)),Ke}(L,0,X)},S=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(S,{stream:!0})}catch{}return a.convert_streams=function(P){var L=new DataView(P),F=0;function G(){var ve=L.getUint16(F);return F+=2,ve}function k(){var ve=L.getUint32(F);return F+=4,ve}function Z(ve){xe.setUint16(_e,ve),_e+=2}function W(ve){xe.setUint32(_e,ve),_e+=4}for(var J={signature:k(),flavor:k(),length:k(),numTables:G(),reserved:G(),totalSfntSize:k(),majorVersion:G(),minorVersion:G(),metaOffset:k(),metaLength:k(),metaOrigLength:k(),privOffset:k(),privLength:k()},q=0;Math.pow(2,q)<=J.numTables;)q++;q--;for(var U=16*Math.pow(2,q),X=16*J.numTables-U,ee=12,O=[],B=0;B<J.numTables;B++)O.push({tag:k(),offset:k(),compLength:k(),origLength:k(),origChecksum:k()}),ee+=16;var ie,j=new Uint8Array(12+16*O.length+O.reduce(function(ve,ue){return ve+ue.origLength+4},0)),re=j.buffer,xe=new DataView(re),_e=0;return W(J.flavor),Z(J.numTables),Z(U),Z(q),Z(X),O.forEach(function(ve){W(ve.tag),W(ve.origChecksum),W(ee),W(ve.origLength),ve.outOffset=ee,(ee+=ve.origLength)%4!=0&&(ee+=4-ee%4)}),O.forEach(function(ve){var ue,Pe=P.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var I=new Uint8Array(ve.origLength);ue=new Uint8Array(Pe,2),b(ue,I)}else I=new Uint8Array(Pe);j.set(I,ve.outOffset);var ke=0;(ee=ve.outOffset+ve.origLength)%4!=0&&(ke=4-ee%4),j.set(new Uint8Array(ke).buffer,ve.outOffset+ve.origLength),ie=ee+ke}),re.slice(0,ie)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function PT(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,s=4,o=8,l=16,c=32;let h;function u(T){if(!h){const C={R:r,L:n,D:s,C:l,U:c,T:o};h=new Map;for(let b in i){let S=0;i[b].split(",").forEach(D=>{let[P,L]=D.split("+");P=parseInt(P,36),L=L?parseInt(L,36):0,h.set(S+=P,C[b]);for(let F=L;F--;)h.set(++S,C[b])})}}return h.get(T)||c}const d=1,f=2,_=3,g=4,p=[null,"isol","init","fina","medi"];function m(T){const C=new Uint8Array(T.length);let b=c,S=d,D=-1;for(let P=0;P<T.length;P++){const L=T.codePointAt(P);let F=u(L)|0,G=d;F&o||(b&(n|s|l)?F&(r|s|l)?(G=_,(S===d||S===_)&&C[D]++):F&(n|c)&&(S===f||S===g)&&C[D]--:b&(r|c)&&(S===f||S===g)&&C[D]--,S=C[P]=G,b=F,D=P,L>65535&&P++)}return C}function x(T,C){const b=[];for(let D=0;D<C.length;D++){const P=C.codePointAt(D);P>65535&&D++,b.push(a.U.codeToGlyph(T,P))}const S=T.GSUB;if(S){const{lookupList:D,featureList:P}=S;let L;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];P.forEach(k=>{if(F.test(k.tag))for(let Z=0;Z<k.tab.length;Z++){if(G[k.tab[Z]])continue;G[k.tab[Z]]=!0;const W=D[k.tab[Z]],J=/^(isol|init|fina|medi)$/.test(k.tag);J&&!L&&(L=m(C));for(let q=0;q<b.length;q++)(!L||!J||p[L[q]]===k.tag)&&a.U._applySubs(b,q,W,D)}})}return b}function y(T,C){const b=new Int16Array(C.length*3);let S=0;for(;S<C.length;S++){const F=C[S];if(F===-1)continue;b[S*3+2]=T.hmtx.aWidth[F];const G=T.GPOS;if(G){const k=G.lookupList;for(let Z=0;Z<k.length;Z++){const W=k[Z];for(let J=0;J<W.tabs.length;J++){const q=W.tabs[J];if(W.ltype===1){if(a._lctf.coverageIndex(q.coverage,F)!==-1&&q.pos){L(q.pos,S);break}}else if(W.ltype===2){let U=null,X=D();if(X!==-1){const ee=a._lctf.coverageIndex(q.coverage,C[X]);if(ee!==-1){if(q.fmt===1){const O=q.pairsets[ee];for(let B=0;B<O.length;B++)O[B].gid2===F&&(U=O[B])}else if(q.fmt===2){const O=a.U._getGlyphClass(C[X],q.classDef1),B=a.U._getGlyphClass(F,q.classDef2);U=q.matrix[O][B]}if(U){U.val1&&L(U.val1,X),U.val2&&L(U.val2,S);break}}}}else if(W.ltype===4){const U=a._lctf.coverageIndex(q.markCoverage,F);if(U!==-1){const X=D(P),ee=X===-1?-1:a._lctf.coverageIndex(q.baseCoverage,C[X]);if(ee!==-1){const O=q.markArray[U],B=q.baseArray[ee][O.markClass];b[S*3]=B.x-O.x+b[X*3]-b[X*3+2],b[S*3+1]=B.y-O.y+b[X*3+1];break}}}else if(W.ltype===6){const U=a._lctf.coverageIndex(q.mark1Coverage,F);if(U!==-1){const X=D();if(X!==-1){const ee=C[X];if(v(T,ee)===3){const O=a._lctf.coverageIndex(q.mark2Coverage,ee);if(O!==-1){const B=q.mark1Array[U],ie=q.mark2Array[O][B.markClass];b[S*3]=ie.x-B.x+b[X*3]-b[X*3+2],b[S*3+1]=ie.y-B.y+b[X*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const k=D();if(k!==-1){const Z=T.kern.glyph1.indexOf(C[k]);if(Z!==-1){const W=T.kern.rval[Z].glyph2.indexOf(F);W!==-1&&(b[k*3+2]+=T.kern.rval[Z].vals[W])}}}}return b;function D(F){for(let G=S-1;G>=0;G--)if(C[G]!==-1&&(!F||F(C[G])))return G;return-1}function P(F){return v(T,F)===1}function L(F,G){for(let k=0;k<3;k++)b[G*3+k]+=F[k]||0}}function v(T,C){const b=T.GDEF&&T.GDEF.glyphClassDef;return b?a.U._getGlyphClass(C,b):0}function M(...T){for(let C=0;C<T.length;C++)if(typeof T[C]=="number")return T[C]}function A(T){const C=Object.create(null),b=T["OS/2"],S=T.hhea,D=T.head.unitsPerEm,P=M(b&&b.sTypoAscender,S&&S.ascender,D),L={unitsPerEm:D,ascender:P,descender:M(b&&b.sTypoDescender,S&&S.descender,0),capHeight:M(b&&b.sCapHeight,P),xHeight:M(b&&b.sxHeight,P),lineGap:M(b&&b.sTypoLineGap,S&&S.lineGap),supportsCodePoint(F){return a.U.codeToGlyph(T,F)>0},forEachGlyph(F,G,k,Z){let W=0;const J=1/L.unitsPerEm*G,q=x(T,F);let U=0;const X=y(T,q);return q.forEach((ee,O)=>{if(ee!==-1){let B=C[ee];if(!B){const{cmds:ie,crds:j}=a.U.glyphToPath(T,ee);let re="",xe=0;for(let I=0,ke=ie.length;I<ke;I++){const Ee=t[ie[I]];re+=ie[I];for(let Ce=1;Ce<=Ee;Ce++)re+=(Ce>1?",":"")+j[xe++]}let _e,ve,ue,Pe;if(j.length){_e=ve=1/0,ue=Pe=-1/0;for(let I=0,ke=j.length;I<ke;I+=2){let Ee=j[I],Ce=j[I+1];Ee<_e&&(_e=Ee),Ce<ve&&(ve=Ce),Ee>ue&&(ue=Ee),Ce>Pe&&(Pe=Ce)}}else _e=ue=ve=Pe=0;B=C[ee]={index:ee,advanceWidth:T.hmtx.aWidth[ee],xMin:_e,yMin:ve,xMax:ue,yMax:Pe,path:re}}Z.call(null,B,W+X[O*3]*J,X[O*3+1]*J,U),W+=X[O*3+2]*J,k&&(W+=k*G)}U+=F.codePointAt(U)>65535?2:1}),W}};return L}return function(C){const b=new Uint8Array(C,0,4),S=a._bin.readASCII(b,0,4);if(S==="wOFF")C=e(C);else if(S==="wOF2")throw new Error("woff2 fonts not supported");return A(a.parse(C)[0])}}const DT=ks({name:"Typr Font Parser",dependencies:[CT,RT,PT],init(a,e,t){const i=a(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function LT(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(y){var v=y>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&y))},e.prototype.has=function(y){var v=this.buckets.get(y>>5);return v!==void 0&&(v&1<<(31&y))!=0},e.prototype.serialize=function(){var y=[];return this.buckets.forEach(function(v,M){y.push((+M).toString(36)+":"+v.toString(36))}),y.join(",")},e.prototype.deserialize=function(y){var v=this;this.buckets.clear(),y.split(",").forEach(function(M){var A=M.split(":");v.buckets.set(parseInt(A[0],36),parseInt(A[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(y){var v=function(A){return A&n}(y).toString(16),M=function(A){return(A&n)+t-1}(y).toString(16);return"codepoint-index/plane"+(y>>16)+"/"+v+"-"+M+".json"}function s(y,v){var M=y&i,A=v.codePointAt(M/6|0);return((A=(A||48)-48)&1<<M%6)!=0}function o(y,v){var M;(M=y,M.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(A){return A.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(A){var T=A[0],C=A[1];C===void 0&&(C=T),v(T,C)})}function l(y,v){o(y,function(M,A){for(var T=M;T<=A;T++)v(T)})}var c={},h={},u=new WeakMap,d="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function f(y){var v=u.get(y);return v||(v=new e,l(y.ranges,function(M){return v.add(M)}),u.set(y,v)),v}var _,g=new Map;function p(y,v,M){return y[v]?v:y[M]?M:function(A){for(var T in A)return T}(y)}function m(y,v){var M=v;if(!y.includes(M)){M=1/0;for(var A=0;A<y.length;A++)Math.abs(y[A]-v)<Math.abs(M-v)&&(M=y[A])}return M}function x(y){return _||(_=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(v){_.add(v)})),_.has(y)}return a.CodePointSet=e,a.clearCache=function(){c={},h={}},a.getFontsForString=function(y,v){v===void 0&&(v={});var M,A=v.lang;A===void 0&&(A=new RegExp("\\p{Script=Hangul}","u").test(M=y)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(M)?"ja":"en");var T=v.category;T===void 0&&(T="sans-serif");var C=v.style;C===void 0&&(C="normal");var b=v.weight;b===void 0&&(b=400);var S=(v.dataUrl||d).replace(/\/$/g,""),D=new Map,P=new Uint8Array(y.length),L={},F={},G=new Array(y.length),k=new Map,Z=!1;function W(U){var X=g.get(U);return X||(X=fetch(S+"/"+U).then(function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then(function(O){if(!Array.isArray(O)||O[0]!==1)throw new Error("Incorrect schema version; need 1, got "+O[0]);return O[1]})}).catch(function(ee){if(S!==d)return Z||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+S+'", trying default CDN. '+ee.message),Z=!0),S=d,g.delete(U),W(U);throw ee}),g.set(U,X)),X}for(var J=function(U){var X=y.codePointAt(U),ee=r(X);G[U]=ee,c[ee]||k.has(ee)||k.set(ee,W(ee).then(function(O){c[ee]=O})),X>65535&&(U++,q=U)},q=0;q<y.length;q++)J(q);return Promise.all(k.values()).then(function(){k.clear();for(var U=function(ee){var O=y.codePointAt(ee),B=null,ie=c[G[ee]],j=void 0;for(var re in ie){var xe=F[re];if(xe===void 0&&(xe=F[re]=new RegExp(re).test(A||"en")),xe){for(var _e in j=re,ie[re])if(s(O,ie[re][_e])){B=_e;break}break}}if(!B){e:for(var ve in ie)if(ve!==j){for(var ue in ie[ve])if(s(O,ie[ve][ue])){B=ue;break e}}}B||(console.debug("No font coverage for U+"+O.toString(16)),B="latin"),G[ee]=B,h[B]||k.has(B)||k.set(B,W("font-meta/"+B+".json").then(function(Pe){h[B]=Pe})),O>65535&&(ee++,X=ee)},X=0;X<y.length;X++)U(X);return Promise.all(k.values())}).then(function(){for(var U,X=null,ee=0;ee<y.length;ee++){var O=y.codePointAt(ee);if(X&&(x(O)||f(X).has(O)))P[ee]=P[ee-1];else{X=h[G[ee]];var B=L[X.id];if(!B){var ie=X.typeforms,j=p(ie,T,"sans-serif"),re=p(ie[j],C,"normal"),xe=m((U=ie[j])===null||U===void 0?void 0:U[re],b);B=L[X.id]=S+"/font-files/"+X.id+"/"+j+"."+re+"."+xe+".woff"}var _e=D.get(B);_e==null&&(_e=D.size,D.set(B,_e)),P[ee]=_e}O>65535&&(ee++,P[ee]=P[ee-1])}return{fontUrls:Array.from(D.keys()),chars:P}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function IT(a,e){const t=Object.create(null),i=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const h=a(c.response);h.src=s,o(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(s,o){let l=t[s];l?o(l):i[s]?i[s].push(o):(i[s]=[o],n(s,c=>{c.src=s,t[s]=c,i[s].forEach(h=>h(c)),delete i[s]}))}return function(s,o,{lang:l,fonts:c=[],style:h="normal",weight:u="normal",unicodeFontsURL:d}={}){const f=new Uint8Array(s.length),_=[];s.length||x();const g=new Map,p=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let T=0;(function C(b=0){for(let S=b,D=s.length;S<D;S++){const P=s.codePointAt(S);if(T===1&&_[f[S-1]].supportsCodePoint(P)||S>0&&/\s/.test(s[S]))f[S]=f[S-1],T===2&&(p[p.length-1][1]=S);else for(let L=f[S],F=c.length;L<=F;L++)if(L===F){const G=T===2?p[p.length-1]:p[p.length]=[S,S];G[1]=S,T=2}else{f[S]=L;const{src:G,unicodeRange:k}=c[L];if(!k||y(P,k)){const Z=t[G];if(!Z){r(G,()=>{C(S)});return}if(Z.supportsCodePoint(P)){let W=g.get(Z);typeof W!="number"&&(W=_.length,_.push(Z),g.set(Z,W)),f[S]=W,T=1;break}}}P>65535&&S+1<D&&(f[S+1]=f[S],S++,T===2&&(p[p.length-1][1]=S))}m()})()}else p.push([0,s.length-1]),m();function m(){if(p.length){const v=p.map(M=>s.substring(M[0],M[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:h,weight:u,dataUrl:d}).then(({fontUrls:M,chars:A})=>{const T=_.length;let C=0;p.forEach(S=>{for(let D=0,P=S[1]-S[0];D<=P;D++)f[S[0]+D]=A[C++]+T;C++});let b=0;M.forEach((S,D)=>{r(S,P=>{_[D+T]=P,++b===M.length&&x()})})})}else x()}function x(){o({chars:f,fonts:_})}function y(v,M){for(let A=0;A<M.length;A++){const[T,C=T]=M[A];if(T<=v&&v<=C)return!0}return!1}}}const UT=ks({name:"FontResolver",dependencies:[IT,DT,LT],init(a,e,t){return a(e,t())}});function FT(a,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:_,lang:g,fonts:p,style:m,weight:x,preResolvedFonts:y,unicodeFontsURL:v},M){const A=({chars:T,fonts:C})=>{let b,S;const D=[];for(let P=0;P<T.length;P++)T[P]!==S?(S=T[P],D.push(b={start:P,end:P,fontObj:C[T[P]]})):b.end=P;M(D)};y?A(y):a(_,A,{lang:g,fonts:p,style:m,weight:x,unicodeFontsURL:v})}function o({text:_="",font:g,lang:p,sdfGlyphSize:m=64,fontSize:x=400,fontWeight:y=1,fontStyle:v="normal",letterSpacing:M=0,lineHeight:A="normal",maxWidth:T=1/0,direction:C,textAlign:b="left",textIndent:S=0,whiteSpace:D="normal",overflowWrap:P="normal",anchorX:L=0,anchorY:F=0,metricsOnly:G=!1,unicodeFontsURL:k,preResolvedFonts:Z=null,includeCaretPositions:W=!1,chunkedBoundsSize:J=8192,colorRanges:q=null},U){const X=u(),ee={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),x=+x,M=+M,T=+T,A=A||"normal",S=+S,s({text:_,lang:p,style:v,weight:y,fonts:typeof g=="string"?[{src:g}]:g,unicodeFontsURL:k,preResolvedFonts:Z},O=>{ee.fontLoad=u()-X;const B=isFinite(T);let ie=null,j=null,re=null,xe=null,_e=null,ve=null,ue=null,Pe=null,I=0,ke=0,Ee=D!=="nowrap";const Ce=new Map,ae=u();let Ae=S,fe=0,w=new d;const E=[w];O.forEach(de=>{const{fontObj:le}=de,{ascender:me,descender:Le,unitsPerEm:ce,lineGap:be,capHeight:Me,xHeight:Te}=le;let oe=Ce.get(le);if(!oe){const he=x/ce,te=A==="normal"?(me-Le+be)*he:A*x,pe=(te-(me-Le)*he)/2,ye=Math.min(te,(me-Le)*he),ge=(me+Le)/2*he+ye/2;oe={index:Ce.size,src:le.src,fontObj:le,fontSizeMult:he,unitsPerEm:ce,ascender:me*he,descender:Le*he,capHeight:Me*he,xHeight:Te*he,lineHeight:te,baseline:-pe-me*he,caretTop:ge,caretBottom:ge-ye},Ce.set(le,oe)}const{fontSizeMult:Ie}=oe,Oe=_.slice(de.start,de.end+1);let Ke,z;le.forEachGlyph(Oe,x,M,(he,te,pe,ye)=>{te+=fe,ye+=de.start,Ke=te,z=he;const ge=_.charAt(ye),Ne=he.advanceWidth*Ie,je=w.count;let ze;if("isEmpty"in he||(he.isWhitespace=!!ge&&new RegExp(n).test(ge),he.canBreakAfter=!!ge&&r.test(ge),he.isEmpty=he.xMin===he.xMax||he.yMin===he.yMax||i.test(ge)),!he.isWhitespace&&!he.isEmpty&&ke++,Ee&&B&&!he.isWhitespace&&te+Ne+Ae>T&&je){if(w.glyphAt(je-1).glyphObj.canBreakAfter)ze=new d,Ae=-te;else for(let dt=je;dt--;)if(dt===0&&P==="break-word"){ze=new d,Ae=-te;break}else if(w.glyphAt(dt).glyphObj.canBreakAfter){ze=w.splitAt(dt+1);const gt=ze.glyphAt(0).x;Ae-=gt;for(let Tt=ze.count;Tt--;)ze.glyphAt(Tt).x-=gt;break}ze&&(w.isSoftWrapped=!0,w=ze,E.push(w),I=T)}let He=w.glyphAt(w.count);He.glyphObj=he,He.x=te+Ae,He.y=pe,He.width=Ne,He.charIndex=ye,He.fontData=oe,ge===`
`&&(w=new d,E.push(w),Ae=-(te+Ne+M*x)+S)}),fe=Ke+z.advanceWidth*Ie+M*x});let N=0;E.forEach(de=>{let le=!0;for(let me=de.count;me--;){const Le=de.glyphAt(me);le&&!Le.glyphObj.isWhitespace&&(de.width=Le.x+Le.width,de.width>I&&(I=de.width),le=!1);let{lineHeight:ce,capHeight:be,xHeight:Me,baseline:Te}=Le.fontData;ce>de.lineHeight&&(de.lineHeight=ce);const oe=Te-de.baseline;oe<0&&(de.baseline+=oe,de.cap+=oe,de.ex+=oe),de.cap=Math.max(de.cap,de.baseline+be),de.ex=Math.max(de.ex,de.baseline+Me)}de.baseline-=N,de.cap-=N,de.ex-=N,N+=de.lineHeight});let $=0,Q=0;if(L&&(typeof L=="number"?$=-L:typeof L=="string"&&($=-I*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),F&&(typeof F=="number"?Q=-F:typeof F=="string"&&(Q=F==="top"?0:F==="top-baseline"?-E[0].baseline:F==="top-cap"?-E[0].cap:F==="top-ex"?-E[0].ex:F==="middle"?N/2:F==="bottom"?N:F==="bottom-baseline"?-E[E.length-1].baseline:c(F)*N)),!G){const de=e.getEmbeddingLevels(_,C);ie=new Uint16Array(ke),j=new Uint8Array(ke),re=new Float32Array(ke*2),xe={},ue=[1/0,1/0,-1/0,-1/0],Pe=[],W&&(ve=new Float32Array(_.length*4)),q&&(_e=new Uint8Array(ke*3));let le=0,me=-1,Le=-1,ce,be;if(E.forEach((Me,Te)=>{let{count:oe,width:Ie}=Me;if(oe>0){let Oe=0;for(let ye=oe;ye--&&Me.glyphAt(ye).glyphObj.isWhitespace;)Oe++;let Ke=0,z=0;if(b==="center")Ke=(I-Ie)/2;else if(b==="right")Ke=I-Ie;else if(b==="justify"&&Me.isSoftWrapped){let ye=0;for(let ge=oe-Oe;ge--;)Me.glyphAt(ge).glyphObj.isWhitespace&&ye++;z=(I-Ie)/ye}if(z||Ke){let ye=0;for(let ge=0;ge<oe;ge++){let Ne=Me.glyphAt(ge);const je=Ne.glyphObj;Ne.x+=Ke+ye,z!==0&&je.isWhitespace&&ge<oe-Oe&&(ye+=z,Ne.width+=z)}}const he=e.getReorderSegments(_,de,Me.glyphAt(0).charIndex,Me.glyphAt(Me.count-1).charIndex);for(let ye=0;ye<he.length;ye++){const[ge,Ne]=he[ye];let je=1/0,ze=-1/0;for(let He=0;He<oe;He++)if(Me.glyphAt(He).charIndex>=ge){let dt=He,gt=He;for(;gt<oe;gt++){let Tt=Me.glyphAt(gt);if(Tt.charIndex>Ne)break;gt<oe-Oe&&(je=Math.min(je,Tt.x),ze=Math.max(ze,Tt.x+Tt.width))}for(let Tt=dt;Tt<gt;Tt++){const di=Me.glyphAt(Tt);di.x=ze-(di.x+di.width-je)}break}}let te;const pe=ye=>te=ye;for(let ye=0;ye<oe;ye++){const ge=Me.glyphAt(ye);te=ge.glyphObj;const Ne=te.index,je=de.levels[ge.charIndex]&1;if(je){const ze=e.getMirroredCharacter(_[ge.charIndex]);ze&&ge.fontData.fontObj.forEachGlyph(ze,0,0,pe)}if(W){const{charIndex:ze,fontData:He}=ge,dt=ge.x+$,gt=ge.x+ge.width+$;ve[ze*4]=je?gt:dt,ve[ze*4+1]=je?dt:gt,ve[ze*4+2]=Me.baseline+He.caretBottom+Q,ve[ze*4+3]=Me.baseline+He.caretTop+Q;const Tt=ze-me;Tt>1&&h(ve,me,Tt),me=ze}if(q){const{charIndex:ze}=ge;for(;ze>Le;)Le++,q.hasOwnProperty(Le)&&(be=q[Le])}if(!te.isWhitespace&&!te.isEmpty){const ze=le++,{fontSizeMult:He,src:dt,index:gt}=ge.fontData,Tt=xe[dt]||(xe[dt]={});Tt[Ne]||(Tt[Ne]={path:te.path,pathBounds:[te.xMin,te.yMin,te.xMax,te.yMax]});const di=ge.x+$,Zt=ge.y+Me.baseline+Q;re[ze*2]=di,re[ze*2+1]=Zt;const Mi=di+te.xMin*He,Hi=Zt+te.yMin*He,cn=di+te.xMax*He,fi=Zt+te.yMax*He;Mi<ue[0]&&(ue[0]=Mi),Hi<ue[1]&&(ue[1]=Hi),cn>ue[2]&&(ue[2]=cn),fi>ue[3]&&(ue[3]=fi),ze%J===0&&(ce={start:ze,end:ze,rect:[1/0,1/0,-1/0,-1/0]},Pe.push(ce)),ce.end++;const Nt=ce.rect;if(Mi<Nt[0]&&(Nt[0]=Mi),Hi<Nt[1]&&(Nt[1]=Hi),cn>Nt[2]&&(Nt[2]=cn),fi>Nt[3]&&(Nt[3]=fi),ie[ze]=Ne,j[ze]=gt,q){const Ui=ze*3;_e[Ui]=be>>16&255,_e[Ui+1]=be>>8&255,_e[Ui+2]=be&255}}}}}),ve){const Me=_.length-me;Me>1&&h(ve,me,Me)}}const se=[];Ce.forEach(({index:de,src:le,unitsPerEm:me,ascender:Le,descender:ce,lineHeight:be,capHeight:Me,xHeight:Te})=>{se[de]={src:le,unitsPerEm:me,ascender:Le,descender:ce,lineHeight:be,capHeight:Me,xHeight:Te}}),ee.typesetting=u()-ae,U({glyphIds:ie,glyphFontIndices:j,glyphPositions:re,glyphData:xe,fontData:se,caretPositions:ve,glyphColors:_e,chunkedBounds:Pe,fontSize:x,topBaseline:Q+E[0].baseline,blockBounds:[$,Q-N,$+I,Q],visibleBounds:ue,timings:ee})})}function l(_,g){o({..._,metricsOnly:!0},p=>{const[m,x,y,v]=p.blockBounds;g({width:y-m,height:v-x})})}function c(_){let g=_.match(/^([\d.]+)%$/),p=g?parseFloat(g[1]):NaN;return isNaN(p)?0:p/100}function h(_,g,p){const m=_[g*4],x=_[g*4+1],y=_[g*4+2],v=_[g*4+3],M=(x-m)/p;for(let A=0;A<p;A++){const T=(g+A)*4;_[T]=m+M*A,_[T+1]=m+M*(A+1),_[T+2]=y,_[T+3]=v}}function u(){return(self.performance||Date).now()}function d(){this.data=[]}const f=["glyphObj","x","y","width","charIndex","fontData"];return d.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(_){let g=d.flyweight;return g.data=this.data,g.index=_,g},splitAt(_){let g=new d;return g.data=this.data.splice(_*f.length),g}},d.flyweight=f.reduce((_,g,p,m)=>(Object.defineProperty(_,g,{get(){return this.data[this.index*f.length+p]},set(x){this.data[this.index*f.length+p]=x}}),_),{data:null,index:0}),{typeset:o,measure:l}}const Cr=()=>(self.performance||Date).now(),nl=jm();let Nf;function OT(a,e,t,i,n,r,s,o,l,c,h=!0){return h?kT(a,e,t,i,n,r,s,o,l,c).then(null,u=>(Nf||(console.warn("WebGL SDF generation failed, falling back to JS",u),Nf=!0),Bf(a,e,t,i,n,r,s,o,l,c))):Bf(a,e,t,i,n,r,s,o,l,c)}const Ro=[],NT=5;let Th=0;function qm(){const a=Cr();for(;Ro.length&&Cr()-a<NT;)Ro.shift()();Th=Ro.length?setTimeout(qm,0):0}const kT=(...a)=>new Promise((e,t)=>{Ro.push(()=>{const i=Cr();try{nl.webgl.generateIntoCanvas(...a),e({timing:Cr()-i})}catch(n){t(n)}}),Th||(Th=setTimeout(qm,0))}),BT=4,zT=2e3,kf={};let GT=0;function Bf(a,e,t,i,n,r,s,o,l,c){const h="TroikaTextSDFGenerator_JS_"+GT++%BT;let u=kf[h];return u||(u=kf[h]={workerModule:ks({name:h,workerId:h,dependencies:[jm,Cr],init(d,f){const _=d().javascript.generate;return function(...g){const p=f();return{textureData:_(...g),timing:f()-p}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(a,e,t,i,n,r).then(({textureData:d,timing:f})=>{const _=Cr(),g=new Uint8Array(d.length*4);for(let p=0;p<d.length;p++)g[p*4+c]=d[p];return nl.webglUtils.renderImageData(s,g,o,l,a,e,1<<3-c),f+=Cr()-_,--u.requests===0&&(u.idleTimer=setTimeout(()=>{vT(h)},zT)),{timing:f}})}function VT(a){a._warm||(nl.webgl.isSupported(a),a._warm=!0)}const HT=nl.webglUtils.resizeWebGLCanvasWithoutClearing,ha={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},WT=new Be;function Qr(){return(self.performance||Date).now()}const zf=Object.create(null);function XT(a,e){a=YT({},a);const t=Qr(),i=[];if(a.font&&i.push({label:"user",src:qT(a.font)}),a.font=i,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||ha.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||ha.unicodeFontsURL,a.colorRanges!=null){let d={};for(let f in a.colorRanges)if(a.colorRanges.hasOwnProperty(f)){let _=a.colorRanges[f];typeof _!="number"&&(_=WT.set(_).getHex()),d[f]=_}a.colorRanges=d}Object.freeze(a);const{textureWidth:n,sdfExponent:r}=ha,{sdfGlyphSize:s}=a,o=n/s*4;let l=zf[s];if(!l){const d=document.createElement("canvas");d.width=n,d.height=s*256/o,l=zf[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:d,sdfTexture:new Lt(d,void 0,void 0,void 0,Ct,Ct),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,jT(l)}const{sdfTexture:c,sdfCanvas:h}=l;Jm(a).then(d=>{const{glyphIds:f,glyphFontIndices:_,fontData:g,glyphPositions:p,fontSize:m,timings:x}=d,y=[],v=new Float32Array(f.length*4);let M=0,A=0;const T=Qr(),C=g.map(L=>{let F=l.glyphsByFont.get(L.src);return F||l.glyphsByFont.set(L.src,F=new Map),F});f.forEach((L,F)=>{const G=_[F],{src:k,unitsPerEm:Z}=g[G];let W=C[G].get(L);if(!W){const{path:ee,pathBounds:O}=d.glyphData[k][L],B=Math.max(O[2]-O[0],O[3]-O[1])/s*(ha.sdfMargin*s+.5),ie=l.glyphCount++,j=[O[0]-B,O[1]-B,O[2]+B,O[3]+B];C[G].set(L,W={path:ee,atlasIndex:ie,sdfViewBox:j}),y.push(W)}const{sdfViewBox:J}=W,q=p[A++],U=p[A++],X=m/Z;v[M++]=q+J[0]*X,v[M++]=U+J[1]*X,v[M++]=q+J[2]*X,v[M++]=U+J[3]*X,f[F]=W.atlasIndex}),x.quads=(x.quads||0)+(Qr()-T);const b=Qr();x.sdf={};const S=h.height,D=Math.ceil(l.glyphCount/o),P=Math.pow(2,Math.ceil(Math.log2(D*s)));P>S&&(console.info(`Increasing SDF texture size ${S}->${P}`),HT(h,n,P),c.dispose()),Promise.all(y.map(L=>Km(L,l,a.gpuAccelerateSDF).then(({timing:F})=>{x.sdf[L.atlasIndex]=F}))).then(()=>{y.length&&!l.contextLost&&(Zm(l),c.needsUpdate=!0),x.sdfTotal=Qr()-b,x.total=Qr()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:s,sdfExponent:r,glyphBounds:v,glyphAtlasIndices:f,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{l.contextLost||VT(h)})}function Km({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=ha,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(o/i)*i,d=Math.floor(h/(o/i))*i,f=e%4;return OT(i,i,a,t,c,l,n,u,d,f,s)}function jT(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const i=[];a.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(Km(r,a,!0))})}),Promise.all(i).then(()=>{Zm(a),a.sdfTexture.needsUpdate=!0})})}function YT(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let go;function qT(a){return go||(go=typeof document>"u"?{}:document.createElement("a")),go.href=a,go.href}function Zm(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:i,height:n}=e,r=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==i*n*4)&&(s=new Uint8Array(i*n*4),t.image={width:i,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,s)}}const KT=ks({name:"Typesetter",dependencies:[FT,UT,yT],init(a,e,t){return a(e,t())}}),Jm=ks({name:"Typesetter",dependencies:[KT],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});Jm.onMainThread;const Gf={};function ZT(a){let e=Gf[a];return e||(e=Gf[a]=new Dr(1,1,a,a).translate(.5,.5,0)),e}const JT="aTroikaGlyphBounds",Vf="aTroikaGlyphIndex",$T="aTroikaGlyphColor";class QT extends n0{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ln,this.boundingBox=new on}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=ZT(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(JT,e,4),this.updateAttributeData(Vf,t,1),this.updateAttributeData($T,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:s,max:o,sin:l,cos:c}=Math,h=n/2,u=n*2,d=Math.abs(t),f=e[0]/d,_=e[2]/d,g=r((f+h)/u)!==r((_+h)/u)?-d:s(l(f)*d,l(_)*d),p=r((f-h)/u)!==r((_-h)/u)?d:o(l(f)*d,l(_)*d),m=r((f+n)/u)!==r((_+n)/u)?d*2:o(d-c(f)*d,d-c(_)*d);i.min.set(g,e[1],t<0?-m:0),i.max.set(p,e[3],t<0?0:m)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Vf).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Oo(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const e1=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,t1=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,i1=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,n1=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function r1(a){const e=Mh(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ue},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new at(0,0,0,0)},uTroikaClipRect:{value:new at(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ue},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Be},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new qe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:e1,vertexTransform:t1,fragmentDefs:i1,fragmentColorTransform:n1,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Ym,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Su=new Gt({color:16777215,side:_i,transparent:!0}),Hf=8421504,Wf=new Ye,_o=new H,sc=new H,na=[],s1=new H,ac="+x+y";function Xf(a){return Array.isArray(a)?a[0]:a}let $m=()=>{const a=new st(new Dr(1,1),Su);return $m=()=>a,a},Qm=()=>{const a=new st(new Dr(1,1,32,1),Su);return Qm=()=>a,a};const a1={type:"syncstart"},o1={type:"synccomplete"},eg=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],l1=eg.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class tg extends st{constructor(){const e=new QT;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Hf,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ac,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(a1),XT({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(o1),e&&e()})))}onBeforeRender(e,t,i,n,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return r1(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Su.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Xf(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Xf(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,h=0,u=0,d,f,_,g=0,p=0;if(t){let{outlineWidth:x,outlineOffsetX:y,outlineOffsetY:v,outlineBlur:M,outlineOpacity:A}=this;c=this._parsePercent(x)||0,h=Math.max(0,this._parsePercent(M)||0),d=A,g=this._parsePercent(y)||0,p=this._parsePercent(v)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(_=this.strokeColor,i.uTroikaStrokeColor.value.set(_??Hf),f=this.strokeOpacity,f==null&&(f=1)),d=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(g,p),i.uTroikaBlurRadius.value=h,i.uTroikaStrokeWidth.value=u,i.uTroikaStrokeOpacity.value=f,i.uTroikaFillOpacity.value=d??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)i.uTroikaClipRect.value.fromArray(m);else{const x=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-x,l[1]-x,l[2]+x,l[3]+x)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Be;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let s=this.orientation||ac;if(s!==e._orientation){let o=i.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==ac&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,d]=l;_o.set(0,0,0)[h]=c==="-"?1:-1,sc.set(0,0,0)[d]=u==="-"?-1:1,Wf.lookAt(s1,_o.cross(sc),sc),o.setFromMatrix4(Wf)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ue){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Ue){return _o.copy(e),this.localPositionToTextCoords(this.worldToLocal(_o),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,s=n?Qm():$m(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let h=0;h<c.count;h++){let u=r[0]+c.getX(h)*(r[2]-r[0]);const d=r[1]+c.getY(h)*(r[3]-r[1]);let f=0;n&&(f=n-Math.cos(u/n)*n,u=Math.sin(u/n)*n),l.setXYZ(h,u,d,f)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,na.length=0,s.raycast(e,na);for(let h=0;h<na.length;h++)na[h].object=this,t.push(na[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,l1.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}eg.forEach(a=>{const e="_private_"+a;Object.defineProperty(tg.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new on;new Be;class c1{constructor({parentGroup:e}){this.experience=new mt,this.scenePortfolio=this.experience.scenePortfolio,this.world=this.experience.world,this.debug=this.experience.debug,this.parentGroup=e,this.groupText=new Qi,this.texts=[],this.textRLMaterial=new Gt({color:16777215,transparent:!0}),this.textRLMaterial.color.setScalar(.04),this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("TroikaText"),this.debugFolder.close()),this.setTexts()}setTexts(){if([{key:"lapLabel",text:"LAP",position:[0,.36,.19],rotationY:0,color:16777215,fontSize:.06,fontWeight:900,letterSpacing:0,lineHeight:1},{key:"lapOctane",text:"0",position:[-.22,.38,.19],rotationY:0,color:16777215,fontSize:.1,fontWeight:900,letterSpacing:0,lineHeight:1},{key:"lapFennec",text:"0",position:[.22,.38,.19],rotationY:0,color:16777215,fontSize:.1,fontWeight:900,letterSpacing:0,lineHeight:1},{key:"speedLabel",text:"SPEED",position:[0,.16,.19],rotationY:0,color:16777215,fontSize:.06,fontWeight:900,letterSpacing:0,lineHeight:1},{key:"speedOctane",text:"108",position:[-.22,.18,.19],rotationY:0,color:16777215,fontSize:.1,fontWeight:900,letterSpacing:0,lineHeight:1},{key:"speedFennec",text:"108",position:[.22,.18,.19],rotationY:0,color:16777215,fontSize:.1,fontWeight:900,letterSpacing:0,lineHeight:1},{key:"nameFennec",text:"Fennec",position:[.22,.26,.19],rotationY:0,color:16777215,fontSize:.06,fontWeight:500,letterSpacing:0,lineHeight:1},{key:"nameOctane",text:"Octane",position:[-.22,.26,.19],rotationY:0,color:16777215,fontSize:.06,fontWeight:500,letterSpacing:0,lineHeight:1}].forEach((t,i)=>{const n=new tg;if(n.text=t.text,n.fontSize=t.fontSize,n.fontWeight=t.fontWeight,n.letterSpacing=t.letterSpacing,n.lineHeight=t.lineHeight,n.textAlign="center",n.anchorX="center",n.anchorY="center",n.position.set(...t.position),n.rotation.set(0,t.rotationY,0),n.fillOpacity=.7,n.clipRect=[-.1,-.1,.1,.1],n.outlineWidth=0,n.outlineBlur=0,n.material=this.textRLMaterial,this.experience.sizes.isMobile||n.layers.set(1),this.groupText.add(n),n.sync(),this.texts[t.key]=n,this.debug.active){const r=this.debugFolder.addFolder(`Text ${i+1}: ${t.text}`);r.add(n.position,"x",-.8,.5,.01).name("Position X"),r.add(n.position,"y",0,1,.01).name("Position Y"),r.addColor({color:t.color},"color").name("Color").onChange(s=>{n.color=s,this.sharedMaterial.color.set(s),n.sync()}),r.add(n,"fontSize",0,.2,.01).name("Font Size").onChange(()=>n.sync()),r.add(n,"fontWeight",100,900,100).name("Font Weight").onChange(()=>n.sync()),r.add(n,"letterSpacing",-.1,.1,.001).name("Letter Spacing").onChange(()=>n.sync()),r.add(n,"lineHeight",.5,2,.01).name("Line Height").onChange(()=>n.sync())}}),this.parentGroup.add(this.groupText),this.groupText.position.set(.035,-.91,-.059),this.groupText.rotation.y=-.09,this.debug.active){const t=this.debugFolder.addFolder("Parent Group");t.add(this.groupText.position,"x",-20,20,.001).name("Position X"),t.add(this.groupText.position,"y",-20,20,.01).name("Position Y"),t.add(this.groupText.position,"z",-20,20,.001).name("Position Z"),t.add(this.groupText.rotation,"y",-20,20,.001).name("Rotation Y")}}updateText(e,t){this.texts[e]&&(this.texts[e].text=t,this.texts[e].sync())}}class h1{constructor(){this.experience=new mt,this.debug=this.experience.debug,this.music=new Audio("./sounds/MusicJCValo.mp3"),this.music.volume=.2,this.music.loop=!0,this.music.play(),this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Outlines"))}}class u1{constructor(){if(this.experience=new mt,this.sceneProfile=this.experience.sceneProfile,this.scenePortfolio=this.experience.scenePortfolio,this.resources=this.experience.resources,this.groupProfile=new Qi,this.groupPortfolio=new Qi,this.sceneProfile.add(this.groupProfile),this.scenePortfolio.add(this.groupPortfolio),this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("World")),this.resources.on("ready",()=>{this.troikaText=new c1({parentGroup:this.groupPortfolio}),this.unlimitedTexture=new oT,this.baseProfile=new eT,this.ball=new cT,this.chair=new hT,this.hat=new uT,this.mouse=new dT,this.pc=new fT,this.arrayAnimationProfile=[this.ball,this.chair,this.hat,this.mouse,this.pc],this.basePortfolio=new iT,this.reyna=new tT,this.chamber=new rT,this.breach=new sT,this.rlTrack=new nT,this.jordanBox=new aT,this.tvScreen=new lT,this.arrayAnimationPortfolio=[this.reyna,this.chamber,this.breach,this.rlTrack,this.jordanBox],this.environment=new QM}),this.debug.active){const e={scale:1};this.debugFolder.add(e,"scale").name("Scene Scale").min(.1).max(10).step(.01).onChange(t=>{this.groupProfile.scale.set(t,t,t),this.groupPortfolio.scale.set(t,t,t)})}this.currentAnimationProfile=null,this.currentAnimationPortfolio=null}update(){this.reyna&&this.reyna.update(),this.chamber&&this.chamber.update(),this.breach&&this.breach.update(),this.rlTrack&&this.rlTrack.update(),this.jordan&&this.jordan.update(),this.jordanBox&&this.jordanBox.update(),this.tvScreen&&this.tvScreen.update(),this.ball&&this.ball.update(),this.chair&&this.chair.update(),this.hat&&this.hat.update(),this.mouse&&this.mouse.update(),this.pc&&this.pc.update(),this.monitor&&this.monitor.update(),this.environment&&this.environment.update(),this.experience.sizes.isMobile&&((this.currentAnimationProfile==null||!this.currentAnimationProfile.isPlaying)&&this.playRandomProfileAnimation(),(this.currentAnimationPortfolio==null||!this.currentAnimationPortfolio.isPlaying)&&this.playRandomPortfolioAnimation())}playRandomProfileAnimation(){if(this.arrayAnimationProfile==null)return;const e=Math.floor(Math.random()*this.arrayAnimationProfile.length);this.currentAnimationProfile=this.arrayAnimationProfile[e],this.currentAnimationProfile.playAnimation()}playRandomPortfolioAnimation(){if(this.arrayAnimationPortfolio==null)return;const e=Math.floor(Math.random()*this.arrayAnimationPortfolio.length);this.currentAnimationPortfolio=this.arrayAnimationPortfolio[e],this.currentAnimationPortfolio.playAnimation()}mouseOut(){this.environment&&this.environment.mouseOut()}}function jf(a,e){if(e===Ug)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Jc||e===mp){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,n=[];if(e===Jc)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function d1(a,e=Math.PI/3){const t=Math.cos(e),i=(1+1e-10)*100,n=[new H,new H,new H],r=new H,s=new H,o=new H,l=new H;function c(g){const p=~~(g.x*i),m=~~(g.y*i),x=~~(g.z*i);return`${p},${m},${x}`}const h=a.index?a.toNonIndexed():a,u=h.attributes.position,d={};for(let g=0,p=u.count/3;g<p;g++){const m=3*g,x=n[0].fromBufferAttribute(u,m+0),y=n[1].fromBufferAttribute(u,m+1),v=n[2].fromBufferAttribute(u,m+2);r.subVectors(v,y),s.subVectors(x,y);const M=new H().crossVectors(r,s).normalize();for(let A=0;A<3;A++){const T=n[A],C=c(T);C in d||(d[C]=[]),d[C].push(M)}}const f=new Float32Array(u.count*3),_=new Vt(f,3,!1);for(let g=0,p=u.count/3;g<p;g++){const m=3*g,x=n[0].fromBufferAttribute(u,m+0),y=n[1].fromBufferAttribute(u,m+1),v=n[2].fromBufferAttribute(u,m+2);r.subVectors(v,y),s.subVectors(x,y),o.crossVectors(r,s).normalize();for(let M=0;M<3;M++){const A=n[M],T=c(A),C=d[T];l.set(0,0,0);for(let b=0,S=C.length;b<S;b++){const D=C[b];o.dot(D)>t&&l.add(D)}l.normalize(),_.setXYZ(m+M,l.x,l.y,l.z)}}return h.setAttribute("normal",_),h}class f1 extends ar{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new v1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new L1(t)})}load(e,t,i,n){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const c=fa.extractUrlBase(e);s=fa.resolveURL(c,this.path)}else s=fa.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Bo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ig){try{s[Qe.KHR_BINARY_GLTF]=new I1(e)}catch(u){n&&n(u);return}r=JSON.parse(s[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new j1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,s[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:s[u]=new g1;break;case Qe.KHR_DRACO_MESH_COMPRESSION:s[u]=new U1(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:s[u]=new F1;break;case Qe.KHR_MESH_QUANTIZATION:s[u]=new O1;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function p1(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class m1{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ii);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new th(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new t0(h),c.distance=u;break;case"spot":c=new Q_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Rn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class g1{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,i){const n=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],ii),e.opacity=s[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,ot))}return Promise.all(n)}}class _1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class v1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(o,o)}return Promise.all(r)}}class x1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class y1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class b1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=n.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],ii)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,ot)),s.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class S1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class M1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(o[0],o[1],o[2],ii),Promise.all(r)}}class T1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class E1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(o[0],o[1],o[2],ii),s.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,ot)),Promise.all(r)}}class A1{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}}class w1{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class C1{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class R1{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class P1{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class D1{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class L1{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==Ni.TRIANGLES&&c.mode!==Ni.TRIANGLE_STRIP&&c.mode!==Ni.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=i.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const _ of u){const g=new Ye,p=new H,m=new Pi,x=new H(1,1,1),y=new Cp(_.geometry,_.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,g.compose(p,m,x));for(const v in l)if(v==="_COLOR_0"){const M=l[v];y.instanceColor=new Oo(M.array,M.itemSize,M.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);Mt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const ig="glTF",ra=12,Yf={JSON:1313821514,BIN:5130562};class I1{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ra),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ig)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-ra,r=new DataView(e,ra);let s=0;for(;s<n;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===Yf.JSON){const c=new Uint8Array(e,ra+s,o);this.content=i.decode(c)}else if(l===Yf.BIN){const c=ra+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class U1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const h in s){const u=Eh[h]||h.toLowerCase();o[u]=s[h]}for(const h in e.attributes){const u=Eh[h]||h.toLowerCase();if(s[h]!==void 0){const d=i.accessors[e.attributes[h]],f=fs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(const _ in f.attributes){const g=f.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}u(f)},o,c,ii,d)})})}}class F1{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class O1{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class ng extends Da{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,_=e*c,g=_-c,p=-2*f+3*d,m=f-d,x=1-p,y=m-d+u;for(let v=0;v!==o;v++){const M=s[g+v+o],A=s[g+v+l]*h,T=s[_+v+o],C=s[_+v]*h;r[v]=x*M+y*A+p*T+m*C}return r}}const N1=new Pi;class k1 extends ng{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return N1.fromArray(r).normalize().toArray(r),r}}const Ni={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qf={9728:ui,9729:Ct,9984:sp,9985:vo,9986:sa,9987:Dn},Kf={33071:Zn,33648:Lo,10497:_s},oc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Eh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},B1={CUBICSPLINE:void 0,LINEAR:ba,STEP:ya},lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function z1(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Zo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:rn})),a.DefaultMaterial}function _r(a,e,t){for(const i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Rn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function G1(a,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;s.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(a.morphAttributes.position=h),n&&(a.morphAttributes.normal=u),r&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function V1(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function H1(a){let e;const t=a.extensions&&a.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cc(t.attributes):e=a.indices+":"+cc(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,n=a.targets.length;i<n;i++)e+=":"+cc(a.targets[i]);return e}function cc(a){let e="";const t=Object.keys(a).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+a[t[i]]+";";return e}function Ah(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function W1(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const X1=new Ye;class j1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new p1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,s=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&s<98?this.textureLoader=new Np(this.options.manager):this.textureLoader=new r0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return _r(r,o,n),Rn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,h]of s.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,s){i.load(fa.resolveURL(t.uri,n.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=oc[n.type],o=fs[n.componentType],l=n.normalized===!0,c=new o(n.count*s);return Promise.resolve(new Vt(c,s,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=oc[n.type],c=fs[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,_=n.normalized===!0;let g,p;if(f&&f!==u){const m=Math.floor(d/f),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let y=t.cache.get(x);y||(g=new c(o,m*f,n.count*f/h),y=new I_(g,f/h),t.cache.add(x,y)),p=new Wh(y,l,d%f/h,_)}else o===null?g=new c(n.count*l):g=new c(o,d,n.count*l),p=new Vt(g,l,_);if(n.sparse!==void 0){const m=oc.SCALAR,x=fs[n.sparse.indices.componentType],y=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,M=new x(s[1],y,n.sparse.count*m),A=new c(s[2],v,n.sparse.count*l);o!==null&&(p=new Vt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,C=M.length;T<C;T++){const b=M[T];if(p.setX(b,A[T*l]),l>=2&&p.setY(b,A[T*l+1]),l>=3&&p.setZ(b,A[T*l+2]),l>=4&&p.setW(b,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=i.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const n=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[s.sampler]||{};return h.magFilter=qf[d.magFilter]||Ct,h.minFilter=qf[d.minFilter]||Dn,h.wrapS=Kf[d.wrapS]||_s,h.wrapT=Kf[d.wrapT]||_s,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ui&&h.minFilter!==Ct,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=n.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=i.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Lt(g);p.needsUpdate=!0,d(p)}),t.load(fa.resolveURL(u,r.path),_,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Rn(u,s),u.userData.mimeType=s.mimeType||W1(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Rp,mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ko,mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||s){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Zo}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const u=n[Qe.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],ii),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ot)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=_i);const h=r.alphaMode||lc.OPAQUE;if(h===lc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===lc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Gt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&s!==Gt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Gt){const u=r.emissiveFactor;o.emissive=new Be().setRGB(u[0],u[1],u[2],ii)}return r.emissiveTexture!==void 0&&s!==Gt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ot)),Promise.all(c).then(function(){const u=new s(o);return r.name&&(u.name=r.name),Rn(u,r),t.associations.set(u,{materials:e}),r.extensions&&_r(n,u,r),u})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Zf(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=H1(c),u=n[h];if(u)s.push(u.promise);else{let d;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Zf(new ni,c,t),n[h]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?z1(this.cache):this.getDependency("material",s[l].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,_=h.length;f<_;f++){const g=h[f],p=s[f];let m;const x=c[f];if(p.mode===Ni.TRIANGLES||p.mode===Ni.TRIANGLE_STRIP||p.mode===Ni.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Ep(g,x):new st(g,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Ni.TRIANGLE_STRIP?m.geometry=jf(m.geometry,mp):p.mode===Ni.TRIANGLE_FAN&&(m.geometry=jf(m.geometry,Jc));else if(p.mode===Ni.LINES)m=new qh(g,x);else if(p.mode===Ni.LINE_STRIP)m=new Yh(g,x);else if(p.mode===Ni.LINE_LOOP)m=new B_(g,x);else if(p.mode===Ni.POINTS)m=new z_(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&V1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Rn(m,r),p.extensions&&_r(n,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,_=u.length;f<_;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&_r(n,u[0],r),u[0];const d=new Qi;r.extensions&&_r(n,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=u.length;f<_;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new li(zh.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new $o(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Rn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),s=n,o=[],l=[];for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u){o.push(u);const d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xh(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],_=n.samplers[f.sampler],g=f.target,p=g.node,m=n.parameters!==void 0?n.parameters[_.input]:_.input,x=n.parameters!==void 0?n.parameters[_.output]:_.output;g.node!==void 0&&(s.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(_),h.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],_=u[2],g=u[3],p=u[4],m=[];for(let x=0,y=d.length;x<y;x++){const v=d[x],M=f[x],A=_[x],T=g[x],C=p[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=i._createAnimationTracks(v,M,A,T,C);if(b)for(let S=0;S<b.length;S++)m.push(b[S])}return new eh(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const s=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),s})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)s.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,X1)});for(let f=0,_=u.length;f<_;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ap:c.length>1?h=new Qi:c.length===1?h=c[0]:h=new Mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=s),Rn(h,r),r.extensions&&_r(i,h,r),r.matrix!==void 0){const u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new Qi;i.name&&(r.name=n.createUniqueName(i.name)),Rn(r,i),i.extensions&&_r(t,r,i);const s=i.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(n.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof mn||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const s=[],o=e.name?e.name:e.uuid,l=[];Yn[r.path]===Yn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Yn[r.path]){case Yn.weights:c=Ss;break;case Yn.rotation:c=Ms;break;case Yn.position:case Yn.scale:c=Ts;break;default:switch(i.itemSize){case 1:c=Ss;break;case 2:case 3:default:c=Ts;break}break}const h=n.interpolation!==void 0?B1[n.interpolation]:ba,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+Yn[r.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),s.push(_)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ah(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof Ms?k1:ng;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Y1(a,e,t){const i=e.attributes,n=new on;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),o.normalized){const h=Ah(fs[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new H,l=new H;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=Ah(fs[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;const s=new ln;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=s}function Zf(a,e,t){const i=e.attributes,n=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in i){const o=Eh[s]||s.toLowerCase();o in a.attributes||n.push(r(i[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});n.push(s)}return tt.workingColorSpace!==ii&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Rn(a,e),Y1(a,e,t),Promise.all(n).then(function(){return e.targets!==void 0?G1(a,e.targets,t):a})}const hc=new WeakMap;class q1 extends ar{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const r=new Bo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{this.parse(s,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,ot,i).catch(i)}decodeDracoFile(e,t,i,n,r=ii,s=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(s)}decodeGeometry(e,t){const i=JSON.stringify(t);if(hc.has(e)){const l=hc.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const r=this.workerNextTaskID++,s=e.byteLength,o=this._getWorker(r,s).then(l=>(n=l,new Promise((c,h)=>{n._callbacks[r]={resolve:c,reject:h},n.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{n&&r&&this._releaseTask(n,r)}),hc.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new ni;e.index&&t.setIndex(new Vt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],r=n.name,s=n.array,o=n.itemSize,l=new Vt(s,o);r==="color"&&(this._assignVertexColorSpace(l,n.vertexColorSpace),l.normalized=!(s instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==ot)return;const i=new Be;for(let n=0,r=e.count;n<r;n++)i.fromBufferAttribute(e,n),tt.toWorkingColorSpace(i,ot),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new Bo(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,r)=>{i.load(e,n,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const r=K1.toString(),s=["/* draco decoder */",n,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){const s=r.data;switch(s.type){case"decode":n._callbacks[s.id].resolve(s);break;case"error":n._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,r){return n._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function K1(){let a,e;onmessage=function(s){const o=s.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(h){a.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),_=f.attributes.map(g=>g.array.buffer);f.index&&_.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},_)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(s,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const _=o.GetEncodedGeometryType(l);if(_===s.TRIANGULAR_MESH)d=new s.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(_===s.POINT_CLOUD)d=new s.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const g={index:null,attributes:[]};for(const p in h){const m=self[u[p]];let x,y;if(c.useUniqueIDs)y=h[p],x=o.GetAttributeByUniqueId(d,y);else{if(y=o.GetAttributeId(d,s[h[p]]),y===-1)continue;x=o.GetAttribute(d,y)}const v=n(s,o,d,p,m,x);p==="color"&&(v.vertexColorSpace=c.vertexColorSpace),g.attributes.push(v)}return _===s.TRIANGULAR_MESH&&(g.index=i(s,o,d)),s.destroy(d),g}function i(s,o,l){const h=l.num_faces()*3,u=h*4,d=s._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(s.HEAPF32.buffer,d,h).slice();return s._free(d),{array:f,itemSize:1}}function n(s,o,l,c,h,u){const d=u.num_components(),_=l.num_points()*d,g=_*h.BYTES_PER_ELEMENT,p=r(s,h),m=s._malloc(g);o.GetAttributeDataArrayForAllPoints(l,u,p,g,m);const x=new h(s.HEAPF32.buffer,m,_).slice();return s._free(m),{name:c,array:x,itemSize:d}}function r(s,o){switch(o){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}class Z1 extends La{constructor(e){super(),this.experience=new mt,this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoadingManager(),this.setLoaders(),this.startLoading(),this.startToggle2D3D()}startToggle2D3D(){const e=document.querySelector(".switch input");document.querySelector("canvas.webgl");const t=document.querySelector(".low-version");e.addEventListener("change",()=>{e.checked?(this.experience.destroy(),t.style.display="block",console.log("Mode 2D activé")):(location.reload(),console.log("Mode 3D activé"))})}setLoadingManager(){const e=document.getElementById("loader"),t=document.querySelector(".loader-disappear"),i=document.querySelector(".loader-bar-fill"),n=document.getElementById("loader-percent"),r=document.querySelector(".glass-card"),s=document.querySelector(".button-sound"),o=document.querySelector(".button-enter"),l=r.querySelector(".info-btn"),c=r.querySelector(".card-full");r.addEventListener("mouseenter",()=>{c.classList.add("show"),l.classList.add("hide")}),r.addEventListener("mouseleave",()=>{c.classList.remove("show"),l.classList.remove("hide")}),o.addEventListener("click",()=>{this.music=new h1,this.experience.music=this.music,e.style.opacity="0",r.style.opacity="1",setTimeout(()=>{e.remove()},2e3)}),this.loadingManager=new Fp(()=>{setTimeout(()=>{t.style.opacity="0",s.style.opacity="0.8"},500)},(h,u,d)=>{const f=u/d;i.style.transform=`scaleX(${f})`,n.textContent=`${(f*100).toFixed(2)} %`}),l.addEventListener("click",()=>{c.style.display="block",l.style.display="none"})}setLoaders(){this.loaders={},this.loaders.gltfLoader=new f1(this.loadingManager),this.dracoLoader=new q1,this.dracoLoader.setDecoderPath("./draco/"),this.loaders.gltfLoader.setDRACOLoader(this.dracoLoader),this.loaders.textureLoader=new Np(this.loadingManager),this.loaders.cubeTextureLoader=new J_(this.loadingManager)}startLoading(){for(const e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"&&this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}const J1=[{name:"baseProfile",type:"gltfModel",path:"models/Profile/Base/BaseProfile.glb"},{name:"basePortfolio",type:"gltfModel",path:"models/Portfolio/Base/BasePortfolio.glb"},{name:"baseProfile",type:"gltfModel",path:"models/Profile/Base/BaseProfile.glb"},{name:"reyna",type:"gltfModel",path:"models/Portfolio/Valorant/Reyna/Reyna.glb"},{name:"chamber",type:"gltfModel",path:"models/Portfolio/Valorant/Chamber/Chamber.glb"},{name:"breach",type:"gltfModel",path:"models/Portfolio/Valorant/Breach/Breach.glb"},{name:"rlTrack",type:"gltfModel",path:"models/Portfolio/RL/RLTrack.glb"},{name:"rlFennec",type:"gltfModel",path:"models/Portfolio/RL/RLFennec.glb"},{name:"rlOctane",type:"gltfModel",path:"models/Portfolio/RL/RLOctane.glb"},{name:"jordan",type:"gltfModel",path:"models/Portfolio/Jordan1/Jordan1.glb"},{name:"jordanBox",type:"gltfModel",path:"models/Portfolio/Jordan1/Jordan1Box.glb"},{name:"tvScreen",type:"gltfModel",path:"models/Portfolio/TV/TVScreen.glb"},{name:"jordanGreyBlueTexture",type:"texture",path:"textures/Jordan/J1GreyBlue512.jpg"},{name:"jordanRedTexture",type:"texture",path:"textures/Jordan/J1Red512.jpg"},{name:"jordanPurpleTexture",type:"texture",path:"textures/Jordan/J1Purple512.jpg"},{name:"jordanNormalTexture",type:"texture",path:"textures/Jordan/J1Normal512.png"},{name:"basePortfolioTexture",type:"texture",path:"textures/Base/BasePortfolioTexture.jpg"},{name:"baseProfileTexture",type:"texture",path:"textures/Base/BaseProfileTexture.jpg"},{name:"blenderTexture",type:"texture",path:"textures/Screen/ScreenBlender_480.webp"},{name:"vscodeTexture",type:"texture",path:"textures/Screen/ScreenVSCode_480.webp"},{name:"ball",type:"gltfModel",path:"models/Profile/Ball/Ball.glb"},{name:"chair",type:"gltfModel",path:"models/Profile/Chair/Chair.glb"},{name:"hat",type:"gltfModel",path:"models/Profile/Hat/Hat.glb"},{name:"mouse",type:"gltfModel",path:"models/Profile/Mouse/Mouse.glb"},{name:"pc",type:"gltfModel",path:"models/Profile/PC/PC.glb"}];class $1 extends La{constructor(){super(),this.x=0,this.y=0,this.experience=new mt,this.sizes=this.experience.sizes,this.isMouseOutside=!1,this.currentSection=null,this.isFirstSection=null,window.addEventListener("mousemove",e=>{this.x=e.clientX/this.sizes.width*2-1,this.y=-(e.clientY/this.sizes.height)*2+1,this.isMouseOutside&&(this.isMouseOutside=!1),this.isFirstSection=this.sizes.isMobile?this.y>0:this.x<0,this.trigger("mousemove")}),document.addEventListener("mouseout",e=>{!e.relatedTarget&&!e.toElement&&(this.isMouseOutside=!0,this.currentSection=null,this.isFirstSection=null,this.trigger("mouseout"))})}update(){}}class Q1{constructor(){this.instance=new v0,this.experience=new mt,this.cursor=this.experience.cursor,this.x=0,this.y=0,this.objectsIntersectLeft=this.experience.objectsIntersectLeft,this.objectsIntersectRight=this.experience.objectsIntersectRight,this.frameCount=0,this.currentIntersectLeft=null,this.currentIntersectRight=null}getCursorForRaycast(e){this.y=this.cursor.y,e==="left"?this.x=(this.cursor.x+1)*2-1:e==="right"&&(this.x=(this.cursor.x-.5)*2)}sendRaycast(){if(this.cursor.isFirstSection)if(this.getCursorForRaycast("left"),this.instance.setFromCamera(new Ue(this.x,this.y),this.experience.camera.instance),this.objectsIntersectLeft.resultIntersectObjects=this.instance.intersectObjects(this.objectsIntersectLeft.objects),this.objectsIntersectLeft.resultIntersectObjects.length>0){let t=this.objectsIntersectLeft.resultIntersectObjects[0].object;for(;t&&!t.userData.parentInstance;)t=t.parent;t&&t.userData.parentInstance&&(this.newAnimatedObjectLeft=t.userData.parentInstance,this.currentIntersectLeft==null&&this.experience.renderer.enablePostProcessing&&this.experience.renderer.addSelectedObject(this.newAnimatedObjectLeft.model),this.newAnimatedObjectLeft.loopFalse?(console.log("loopFalse"),this.currentIntersectLeft==null&&(this.newAnimatedObjectLeft.isPlaying||this.newAnimatedObjectLeft.playAnimation())):(console.log("loopTrue"),this.newAnimatedObjectLeft.isPlaying||this.newAnimatedObjectLeft.playAnimation()),this.currentIntersectLeft=this.newAnimatedObjectLeft)}else this.currentIntersectLeft&&this.experience.renderer.removeSelectedObject(),this.currentIntersectLeft=null;else if(this.getCursorForRaycast("right"),this.instance.setFromCamera(new Ue(this.x,this.y),this.experience.camera.instance),this.objectsIntersectRight.resultIntersectObjects=this.instance.intersectObjects(this.objectsIntersectRight.objects),this.objectsIntersectRight.resultIntersectObjects.length>0){let t=this.objectsIntersectRight.resultIntersectObjects[0].object;for(;t&&!t.userData.parentInstance;)t=t.parent;t&&t.userData.parentInstance&&(this.newAnimatedObjectRight=t.userData.parentInstance,this.currentIntersectRight==null&&this.experience.renderer.enablePostProcessing&&this.experience.renderer.addSelectedObject(this.newAnimatedObjectRight.model),this.newAnimatedObjectRight.loopFalse?this.currentIntersectRight==null&&(this.newAnimatedObjectRight.isPlaying||this.newAnimatedObjectRight.playAnimation()):this.newAnimatedObjectRight.isPlaying||this.newAnimatedObjectRight.playAnimation(),this.currentIntersectRight=this.newAnimatedObjectRight)}else this.currentIntersectRight&&this.experience.renderer.removeSelectedObject(),this.currentIntersectRight=null}update(){this.frameCount++,this.frameCount%4===0&&this.sendRaycast()}}class Jf{constructor(){this.experience=new mt,this.objects=[],this.resultIntersectObjects=[]}addObject(e){this.objects.push(e)}}var Po={exports:{}},eE=Po.exports,$f;function tE(){return $f||($f=1,function(a,e){(function(t,i){a.exports=i()})(eE,function(){var t=function(){function i(f){return s.appendChild(f.dom),f}function n(f){for(var _=0;_<s.children.length;_++)s.children[_].style.display=_===f?"block":"none";r=f}var r=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(f){f.preventDefault(),n(++r%s.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,h=i(new t.Panel("FPS","#0ff","#002")),u=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=i(new t.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:s,addPanel:i,showPanel:n,begin:function(){o=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(u.update(f-o,200),f>l+1e3&&(h.update(1e3*c/(f-l),100),l=f,c=0,d)){var _=performance.memory;d.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return f},update:function(){o=this.end()},domElement:s,setMode:n}};return t.Panel=function(i,n,r){var s=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,u=48*c,d=3*c,f=2*c,_=3*c,g=15*c,p=74*c,m=30*c,x=document.createElement("canvas");x.width=h,x.height=u,x.style.cssText="width:80px;height:48px";var y=x.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=r,y.fillRect(0,0,h,u),y.fillStyle=n,y.fillText(i,d,f),y.fillRect(_,g,p,m),y.fillStyle=r,y.globalAlpha=.9,y.fillRect(_,g,p,m),{dom:x,update:function(v,M){s=Math.min(s,v),o=Math.max(o,v),y.fillStyle=r,y.globalAlpha=1,y.fillRect(0,0,h,g),y.fillStyle=n,y.fillText(l(v)+" "+i+" ("+l(s)+"-"+l(o)+")",d,f),y.drawImage(x,_+c,g,p-c,m,_,g,p-c,m),y.fillRect(_+p-c,g,c,m),y.fillStyle=r,y.globalAlpha=.9,y.fillRect(_+p-c,g,c,l((1-v/M)*m))}}},t})}(Po)),Po.exports}tE();class iE extends La{constructor(){super(),this.experience=new mt;const e=document.querySelector(".glass-card"),t=e.querySelector(".info-btn"),i=e.querySelector(".card-full");this.isMuted=!1;const n=document.querySelector(".btn-volume-up"),r=document.querySelector(".btn-volume-off"),s=document.querySelector(".btn-volume-up-mobile"),o=document.querySelector(".btn-volume-off-mobile"),l=document.querySelector(".btn-close");this.isInfosOpen=!1;const c={ArrowRight:()=>window.location.href="/portfolio",ArrowLeft:()=>window.location.href="/profile/en",KeyR:()=>this.experience.world.reyna.playAnimation(),KeyB:()=>this.experience.world.breach.playAnimation(),KeyC:()=>this.experience.world.chamber.playAnimation(),KeyL:()=>this.experience.world.rlTrack.playAnimation(),KeyJ:()=>this.experience.world.jordan.playAnimation(),KeyV:()=>this.experience.world.ball.playAnimation(),KeyM:()=>this.experience.world.mouse.playAnimation(),KeyP:()=>this.experience.world.pc.playAnimation(),KeyS:()=>this.experience.world.chair.playAnimation(),KeyH:()=>this.experience.world.hat.playAnimation(),KeyI:()=>{this.isInfosOpen?(i.classList.remove("show"),t.classList.remove("hide"),this.isInfosOpen=!this.isInfosOpen):(i.classList.add("show"),t.classList.add("hide"),this.isInfosOpen=!this.isInfosOpen)},KeyX:()=>{i.classList.remove("show"),t.classList.remove("hide"),this.isInfosOpen=!1}};document.addEventListener("keydown",h=>{c[h.code]&&c[h.code]()}),l.addEventListener("click",()=>{i.classList.remove("show"),t.classList.remove("hide"),this.isInfosOpen=!1}),this.experience.sizes.isMobile?(s.addEventListener("click",()=>{this.experience.music.music.pause(),s.style.display="none",o.style.display="block"}),o.addEventListener("click",()=>{this.experience.music.music.currentTime=0,this.experience.music.music.play(),s.style.display="block",o.style.display="none"})):(n.addEventListener("click",()=>{this.experience.music.music.pause(),n.style.display="none",r.style.display="block"}),r.addEventListener("click",()=>{this.experience.music.music.currentTime=0,this.experience.music.music.play(),n.style.display="block",r.style.display="none"})),document.querySelector("canvas.webgl").addEventListener("click",()=>{this.experience.cursor.isFirstSection?window.location.href="/profile/en":window.location.href="/portfolio"})}}function nE(a,e,t,i){const n=Object.entries(a);class r extends qt{constructor(o){super({uniforms:n.reduce((l,[c,h])=>{const u=Is.clone({[c]:{value:h}});return{...l,...u}},{}),vertexShader:e,fragmentShader:t});for(const[l]of n)Object.defineProperty(this,l,{get:()=>this.uniforms[l].value,set:c=>this.uniforms[l].value=c});Object.assign(this,o)}}return Nu(r,"key",zh.generateUUID()),r}const rE=nE({screenspace:!1,color:new Be("black"),opacity:1,thickness:.05,size:new Ue},`
   #include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   uniform float thickness;
   uniform float screenspace;
   uniform vec2 size;
   void main() {
     #if defined (USE_SKINNING)
	   #include <beginnormal_vertex>
       #include <morphnormal_vertex>
       #include <skinbase_vertex>
       #include <skinnormal_vertex>
       #include <defaultnormal_vertex>
     #endif
     #include <begin_vertex>
	   #include <morphtarget_vertex>
	   #include <skinning_vertex>
     #include <project_vertex>
     vec4 tNormal = vec4(normal, 0.0);
     vec4 tPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       tNormal = instanceMatrix * tNormal;
       tPosition = instanceMatrix * tPosition;
     #endif
     if (screenspace == 0.0) {
       vec3 newPosition = tPosition.xyz + tNormal.xyz * thickness;
       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
     } else {
       vec4 clipPosition = projectionMatrix * modelViewMatrix * tPosition;
       vec4 clipNormal = projectionMatrix * modelViewMatrix * tNormal;
       vec2 offset = normalize(clipNormal.xy) * thickness / size * clipPosition.w * 2.0;
       clipPosition.xy += offset;
       gl_Position = clipPosition;
     }
   }`,`
   uniform vec3 color;
   uniform float opacity;
   void main(){
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <${parseInt(Yo.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
   }`);function sE({color:a=new Be("black"),opacity:e=1,transparent:t=!1,screenspace:i=!1,toneMapped:n=!0,polygonOffset:r=!1,polygonOffsetFactor:s=0,renderOrder:o=0,thickness:l=.05,angle:c=Math.PI,gl:h}={}){const u=new Qi;let d={color:a,opacity:e,transparent:t,screenspace:i,toneMapped:n,polygonOffset:r,polygonOffsetFactor:s,renderOrder:o,thickness:l,angle:c};function f(g){const p=u.parent;if(u.clear(),p&&p.geometry){let m;const x=new rE({side:hi});p.skeleton?(m=new Ep,m.material=x,m.bind(p.skeleton,p.bindMatrix),u.add(m)):p.isInstancedMesh?(m=new Cp(p.geometry,x,p.count),m.instanceMatrix=p.instanceMatrix,u.add(m)):(m=new st,m.material=x,u.add(m)),m.geometry=g?d1(p.geometry,g):p.geometry}}function _(g){d={...d,...g};const p=u.children[0];if(p){const{transparent:m,thickness:x,color:y,opacity:v,screenspace:M,toneMapped:A,polygonOffset:T,polygonOffsetFactor:C,renderOrder:b}=d,S=new Ue;!h&&d.screenspace&&console.warn('Outlines: "screenspace" requires a WebGLRenderer instance to calculate the outline size'),h&&h.getSize(S),Object.assign(p.material,{transparent:m,thickness:x,color:y,opacity:v,size:S,screenspace:M,toneMapped:A,polygonOffset:T,polygonOffsetFactor:C}),b!==void 0&&(p.renderOrder=b)}}return{group:u,updateProps(g){var p;const m=(p=g.angle)!==null&&p!==void 0?p:d.angle;m!==d.angle&&f(m),_(g)},generate(){f(d.angle),_(d)}}}class aE{constructor(){this.experience=new mt,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("Outlines"))}setTestCube(){const e=new Ls(1,1,1),t=new Gt({color:"pourple"});this.cube=new st(e,t),this.cube.position.set(0,1,0),this.experience.world.groupProfile.add(this.cube),console.log(this.cube),this.addOutline(this.cube)}addOutline(e){const t=sE({color:new Be("white"),thickness:.005,opacity:1,transparent:!1,angle:0,screenspace:!1});e.add(t.group),t.generate()}}let uc=null;class mt{constructor(e){if(uc)return uc;uc=this,window.experience=this,this.canvas=e,this.debug=new mS,this.sizes=new gS,this.time=new _S,this.cursor=new $1,this.input=new iE,this.sceneProfile=new ld,this.scenePortfolio=new ld,this.allScene=[this.sceneProfile,this.scenePortfolio],this.resources=new Z1(J1),this.camera=new LS,this.objectsIntersectRight=new Jf,this.objectsIntersectLeft=new Jf,this.world=new u1,this.outlinesObject=new aE,this.raycast=new Q1,this.renderer=new kS,new Ud(5),new Id(20,20),new Ud(5),new Id(20,20),this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()}),this.cursor.on("mousemove",()=>{this.mouseMove()}),this.cursor.on("mouseout",()=>{this.mouseOut()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.cursor.update(),this.camera.update(),this.world.update(),this.renderer.update(),this.raycast.update()}mouseMove(){}mouseOut(){this.world.mouseOut()}addToBothScene(e){this.scenePortfolio.add(e),this.sceneProfile.add(e)}destroy(){this.sizes.off("resize"),this.time.off("tick");for(const e in this.allScene){const t=this.allScene[e];t.traverse(i=>{var n,r;i.isMesh&&(i.geometry&&i.geometry.dispose(),(Array.isArray(i.material)?i.material:[i.material]).forEach(o=>{if(o){for(const l in o){const c=o[l];c&&c.isTexture&&c.dispose()}o.dispose&&o.dispose()}})),i.isSkinnedMesh&&i.skeleton&&((r=(n=i.skeleton).dispose)==null||r.call(n))}),t.clear()}this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}new mt(document.querySelector("canvas.webgl"));
//# sourceMappingURL=index-DbniTozY.js.map
