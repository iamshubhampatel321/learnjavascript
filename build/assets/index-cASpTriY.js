(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))b(R);new MutationObserver(R=>{for(const W of R)if(W.type==="childList")for(const ue of W.addedNodes)ue.tagName==="LINK"&&ue.rel==="modulepreload"&&b(ue)}).observe(document,{childList:!0,subtree:!0});function m(R){const W={};return R.integrity&&(W.integrity=R.integrity),R.referrerPolicy&&(W.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?W.credentials="include":R.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function b(R){if(R.ep)return;R.ep=!0;const W=m(R);fetch(R.href,W)}})();var Ti={exports:{}},wr={},Ni={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Rd(){if(Tu)return D;Tu=1;var k=Symbol.for("react.element"),_=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),ue=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),ve=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ne=Symbol.iterator;function X(c){return c===null||typeof c!="object"?null:(c=ne&&c[ne]||c["@@iterator"],typeof c=="function"?c:null)}var We={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,Z={};function Q(c,g,A){this.props=c,this.context=g,this.refs=Z,this.updater=A||We}Q.prototype.isReactComponent={},Q.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},Q.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function gt(){}gt.prototype=Q.prototype;function st(c,g,A){this.props=c,this.context=g,this.refs=Z,this.updater=A||We}var Xe=st.prototype=new gt;Xe.constructor=st,Ve(Xe,Q.prototype),Xe.isPureReactComponent=!0;var Se=Array.isArray,Ze=Object.prototype.hasOwnProperty,Ne={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Je(c,g,A){var z,U={},H=null,Y=null;if(g!=null)for(z in g.ref!==void 0&&(Y=g.ref),g.key!==void 0&&(H=""+g.key),g)Ze.call(g,z)&&!_e.hasOwnProperty(z)&&(U[z]=g[z]);var J=arguments.length-2;if(J===1)U.children=A;else if(1<J){for(var ee=Array(J),be=0;be<J;be++)ee[be]=arguments[be+2];U.children=ee}if(c&&c.defaultProps)for(z in J=c.defaultProps,J)U[z]===void 0&&(U[z]=J[z]);return{$$typeof:k,type:c,key:H,ref:Y,props:U,_owner:Ne.current}}function Pt(c,g){return{$$typeof:k,type:c.type,key:g,ref:c.ref,props:c.props,_owner:c._owner}}function yt(c){return typeof c=="object"&&c!==null&&c.$$typeof===k}function Yt(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(A){return g[A]})}var ut=/\/+/g;function ze(c,g){return typeof c=="object"&&c!==null&&c.key!=null?Yt(""+c.key):g.toString(36)}function et(c,g,A,z,U){var H=typeof c;(H==="undefined"||H==="boolean")&&(c=null);var Y=!1;if(c===null)Y=!0;else switch(H){case"string":case"number":Y=!0;break;case"object":switch(c.$$typeof){case k:case _:Y=!0}}if(Y)return Y=c,U=U(Y),c=z===""?"."+ze(Y,0):z,Se(U)?(A="",c!=null&&(A=c.replace(ut,"$&/")+"/"),et(U,g,A,"",function(be){return be})):U!=null&&(yt(U)&&(U=Pt(U,A+(!U.key||Y&&Y.key===U.key?"":(""+U.key).replace(ut,"$&/")+"/")+c)),g.push(U)),1;if(Y=0,z=z===""?".":z+":",Se(c))for(var J=0;J<c.length;J++){H=c[J];var ee=z+ze(H,J);Y+=et(H,g,A,ee,U)}else if(ee=X(c),typeof ee=="function")for(c=ee.call(c),J=0;!(H=c.next()).done;)H=H.value,ee=z+ze(H,J++),Y+=et(H,g,A,ee,U);else if(H==="object")throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return Y}function ct(c,g,A){if(c==null)return c;var z=[],U=0;return et(c,z,"","",function(H){return g.call(A,H,U++)}),z}function je(c){if(c._status===-1){var g=c._result;g=g(),g.then(function(A){(c._status===0||c._status===-1)&&(c._status=1,c._result=A)},function(A){(c._status===0||c._status===-1)&&(c._status=2,c._result=A)}),c._status===-1&&(c._status=0,c._result=g)}if(c._status===1)return c._result.default;throw c._result}var le={current:null},S={transition:null},I={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:S,ReactCurrentOwner:Ne};function C(){throw Error("act(...) is not supported in production builds of React.")}return D.Children={map:ct,forEach:function(c,g,A){ct(c,function(){g.apply(this,arguments)},A)},count:function(c){var g=0;return ct(c,function(){g++}),g},toArray:function(c){return ct(c,function(g){return g})||[]},only:function(c){if(!yt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},D.Component=Q,D.Fragment=m,D.Profiler=R,D.PureComponent=st,D.StrictMode=b,D.Suspense=V,D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,D.act=C,D.cloneElement=function(c,g,A){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var z=Ve({},c.props),U=c.key,H=c.ref,Y=c._owner;if(g!=null){if(g.ref!==void 0&&(H=g.ref,Y=Ne.current),g.key!==void 0&&(U=""+g.key),c.type&&c.type.defaultProps)var J=c.type.defaultProps;for(ee in g)Ze.call(g,ee)&&!_e.hasOwnProperty(ee)&&(z[ee]=g[ee]===void 0&&J!==void 0?J[ee]:g[ee])}var ee=arguments.length-2;if(ee===1)z.children=A;else if(1<ee){J=Array(ee);for(var be=0;be<ee;be++)J[be]=arguments[be+2];z.children=J}return{$$typeof:k,type:c.type,key:U,ref:H,props:z,_owner:Y}},D.createContext=function(c){return c={$$typeof:ue,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:W,_context:c},c.Consumer=c},D.createElement=Je,D.createFactory=function(c){var g=Je.bind(null,c);return g.type=c,g},D.createRef=function(){return{current:null}},D.forwardRef=function(c){return{$$typeof:ce,render:c}},D.isValidElement=yt,D.lazy=function(c){return{$$typeof:me,_payload:{_status:-1,_result:c},_init:je}},D.memo=function(c,g){return{$$typeof:ve,type:c,compare:g===void 0?null:g}},D.startTransition=function(c){var g=S.transition;S.transition={};try{c()}finally{S.transition=g}},D.unstable_act=C,D.useCallback=function(c,g){return le.current.useCallback(c,g)},D.useContext=function(c){return le.current.useContext(c)},D.useDebugValue=function(){},D.useDeferredValue=function(c){return le.current.useDeferredValue(c)},D.useEffect=function(c,g){return le.current.useEffect(c,g)},D.useId=function(){return le.current.useId()},D.useImperativeHandle=function(c,g,A){return le.current.useImperativeHandle(c,g,A)},D.useInsertionEffect=function(c,g){return le.current.useInsertionEffect(c,g)},D.useLayoutEffect=function(c,g){return le.current.useLayoutEffect(c,g)},D.useMemo=function(c,g){return le.current.useMemo(c,g)},D.useReducer=function(c,g,A){return le.current.useReducer(c,g,A)},D.useRef=function(c){return le.current.useRef(c)},D.useState=function(c){return le.current.useState(c)},D.useSyncExternalStore=function(c,g,A){return le.current.useSyncExternalStore(c,g,A)},D.useTransition=function(){return le.current.useTransition()},D.version="18.3.1",D}var Nu;function ji(){return Nu||(Nu=1,Ni.exports=Rd()),Ni.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Ad(){if(Lu)return wr;Lu=1;var k=ji(),_=Symbol.for("react.element"),m=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,R=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function ue(ce,V,ve){var me,ne={},X=null,We=null;ve!==void 0&&(X=""+ve),V.key!==void 0&&(X=""+V.key),V.ref!==void 0&&(We=V.ref);for(me in V)b.call(V,me)&&!W.hasOwnProperty(me)&&(ne[me]=V[me]);if(ce&&ce.defaultProps)for(me in V=ce.defaultProps,V)ne[me]===void 0&&(ne[me]=V[me]);return{$$typeof:_,type:ce,key:X,ref:We,props:ne,_owner:R.current}}return wr.Fragment=m,wr.jsx=ue,wr.jsxs=ue,wr}var Pu;function Dd(){return Pu||(Pu=1,Ti.exports=Ad()),Ti.exports}var P=Dd(),Mo={},Li={exports:{}},De={},Pi={exports:{}},_i={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function zd(){return _u||(_u=1,(function(k){function _(S,I){var C=S.length;S.push(I);e:for(;0<C;){var c=C-1>>>1,g=S[c];if(0<R(g,I))S[c]=I,S[C]=g,C=c;else break e}}function m(S){return S.length===0?null:S[0]}function b(S){if(S.length===0)return null;var I=S[0],C=S.pop();if(C!==I){S[0]=C;e:for(var c=0,g=S.length,A=g>>>1;c<A;){var z=2*(c+1)-1,U=S[z],H=z+1,Y=S[H];if(0>R(U,C))H<g&&0>R(Y,U)?(S[c]=Y,S[H]=C,c=H):(S[c]=U,S[z]=C,c=z);else if(H<g&&0>R(Y,C))S[c]=Y,S[H]=C,c=H;else break e}}return I}function R(S,I){var C=S.sortIndex-I.sortIndex;return C!==0?C:S.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var W=performance;k.unstable_now=function(){return W.now()}}else{var ue=Date,ce=ue.now();k.unstable_now=function(){return ue.now()-ce}}var V=[],ve=[],me=1,ne=null,X=3,We=!1,Ve=!1,Z=!1,Q=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Xe(S){for(var I=m(ve);I!==null;){if(I.callback===null)b(ve);else if(I.startTime<=S)b(ve),I.sortIndex=I.expirationTime,_(V,I);else break;I=m(ve)}}function Se(S){if(Z=!1,Xe(S),!Ve)if(m(V)!==null)Ve=!0,je(Ze);else{var I=m(ve);I!==null&&le(Se,I.startTime-S)}}function Ze(S,I){Ve=!1,Z&&(Z=!1,gt(Je),Je=-1),We=!0;var C=X;try{for(Xe(I),ne=m(V);ne!==null&&(!(ne.expirationTime>I)||S&&!Yt());){var c=ne.callback;if(typeof c=="function"){ne.callback=null,X=ne.priorityLevel;var g=c(ne.expirationTime<=I);I=k.unstable_now(),typeof g=="function"?ne.callback=g:ne===m(V)&&b(V),Xe(I)}else b(V);ne=m(V)}if(ne!==null)var A=!0;else{var z=m(ve);z!==null&&le(Se,z.startTime-I),A=!1}return A}finally{ne=null,X=C,We=!1}}var Ne=!1,_e=null,Je=-1,Pt=5,yt=-1;function Yt(){return!(k.unstable_now()-yt<Pt)}function ut(){if(_e!==null){var S=k.unstable_now();yt=S;var I=!0;try{I=_e(!0,S)}finally{I?ze():(Ne=!1,_e=null)}}else Ne=!1}var ze;if(typeof st=="function")ze=function(){st(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,ze=function(){ct.postMessage(null)}}else ze=function(){Q(ut,0)};function je(S){_e=S,Ne||(Ne=!0,ze())}function le(S,I){Je=Q(function(){S(k.unstable_now())},I)}k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(S){S.callback=null},k.unstable_continueExecution=function(){Ve||We||(Ve=!0,je(Ze))},k.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<S?Math.floor(1e3/S):5},k.unstable_getCurrentPriorityLevel=function(){return X},k.unstable_getFirstCallbackNode=function(){return m(V)},k.unstable_next=function(S){switch(X){case 1:case 2:case 3:var I=3;break;default:I=X}var C=X;X=I;try{return S()}finally{X=C}},k.unstable_pauseExecution=function(){},k.unstable_requestPaint=function(){},k.unstable_runWithPriority=function(S,I){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var C=X;X=S;try{return I()}finally{X=C}},k.unstable_scheduleCallback=function(S,I,C){var c=k.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?c+C:c):C=c,S){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=C+g,S={id:me++,callback:I,priorityLevel:S,startTime:C,expirationTime:g,sortIndex:-1},C>c?(S.sortIndex=C,_(ve,S),m(V)===null&&S===m(ve)&&(Z?(gt(Je),Je=-1):Z=!0,le(Se,C-c))):(S.sortIndex=g,_(V,S),Ve||We||(Ve=!0,je(Ze))),S},k.unstable_shouldYield=Yt,k.unstable_wrapCallback=function(S){var I=X;return function(){var C=X;X=I;try{return S.apply(this,arguments)}finally{X=C}}}})(_i)),_i}var ju;function bd(){return ju||(ju=1,Pi.exports=zd()),Pi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Fd(){if(Mu)return De;Mu=1;var k=ji(),_=bd();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,R={};function W(e,t){ue(e,t),ue(e+"Capture",t)}function ue(e,t){for(R[e]=t,e=0;e<t.length;e++)b.add(t[e])}var ce=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),V=Object.prototype.hasOwnProperty,ve=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,me={},ne={};function X(e){return V.call(ne,e)?!0:V.call(me,e)?!1:ve.test(e)?ne[e]=!0:(me[e]=!0,!1)}function We(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ve(e,t,n,r){if(t===null||typeof t>"u"||We(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Z(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new Z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new Z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new Z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new Z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new Z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new Z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new Z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new Z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new Z(e,5,!1,e.toLowerCase(),null,!1,!1)});var gt=/[\-:]([a-z])/g;function st(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gt,st);Q[t]=new Z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gt,st);Q[t]=new Z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gt,st);Q[t]=new Z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new Z(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new Z(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xe(e,t,n,r){var o=Q.hasOwnProperty(t)?Q[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ve(t,n,o,r)&&(n=null),r||o===null?X(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Se=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),S=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,c;function g(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var A=!1;function z(e,t){if(!e||A)return"";A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{A=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function U(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=z(e.type,!1),e;case 11:return e=z(e.type.render,!1),e;case 1:return e=z(e.type,!0),e;default:return""}}function H(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case Ne:return"Portal";case Pt:return"Profiler";case Je:return"StrictMode";case ze:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yt:return(e.displayName||"Context")+".Consumer";case yt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:H(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return H(e(t))}catch{}}return null}function Y(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===Je?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function J(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function be(e){var t=ee(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=be(e))}function Mi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ee(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Io(e,t){var n=t.checked;return C({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ii(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=J(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oi(e,t){t=t.checked,t!=null&&Xe(e,"checked",t,!1)}function Oo(e,t){Oi(e,t);var n=J(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ro(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ro(e,t.type,J(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ri(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ro(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+J(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return C({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ai(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(Rn(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:J(n)}}function Di(e,t){var n=J(t.value),r=J(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Do(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Fi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bu=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){bu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Ui(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Hi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ui(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Fu=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zo(e,t){if(t){if(Fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function bo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fo=null;function Uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,cn=null,dn=null;function Bi(e){if(e=or(e)){if(typeof Ho!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Jr(t),Ho(e.stateNode,e.type,t))}}function Wi(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Vi(){if(cn){var e=cn,t=dn;if(dn=cn=null,Bi(e),t)for(e=0;e<t.length;e++)Bi(t[e])}}function Ji(e,t){return e(t)}function $i(){}var Bo=!1;function Qi(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Ji(e,t,n)}finally{Bo=!1,(cn!==null||dn!==null)&&($i(),Vi())}}function zn(e,t){var n=e.stateNode;if(n===null)return null;var r=Jr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Wo=!1;if(ce)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Wo=!1}function Uu(e,t,n,r,o,l,i,a,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var Fn=!1,Er=null,Cr=!1,Vo=null,Hu={onError:function(e){Fn=!0,Er=e}};function Bu(e,t,n,r,o,l,i,a,s){Fn=!1,Er=null,Uu.apply(Hu,arguments)}function Wu(e,t,n,r,o,l,i,a,s){if(Bu.apply(this,arguments),Fn){if(Fn){var p=Er;Fn=!1,Er=null}else throw Error(m(198));Cr||(Cr=!0,Vo=p)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gi(e){if(Gt(e)!==e)throw Error(m(188))}function Vu(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Gi(o),e;if(l===r)return Gi(o),t;l=l.sibling}throw Error(m(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function Ki(e){return e=Vu(e),e!==null?qi(e):null}function qi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qi(e);if(t!==null)return t;e=e.sibling}return null}var Xi=_.unstable_scheduleCallback,Zi=_.unstable_cancelCallback,Ju=_.unstable_shouldYield,$u=_.unstable_requestPaint,ae=_.unstable_now,Qu=_.unstable_getCurrentPriorityLevel,Jo=_.unstable_ImmediatePriority,ea=_.unstable_UserBlockingPriority,Tr=_.unstable_NormalPriority,Yu=_.unstable_LowPriority,ta=_.unstable_IdlePriority,Nr=null,dt=null;function Gu(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Nr,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Xu,Ku=Math.log,qu=Math.LN2;function Xu(e){return e>>>=0,e===0?32:31-(Ku(e)/qu|0)|0}var Lr=64,Pr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Un(a):(l&=i,l!==0&&(r=Un(l)))}else i=n&~o,i!==0?r=Un(i):l!==0&&(r=Un(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),o=1<<n,r|=e[n],t&=~o;return r}function Zu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-tt(l),a=1<<i,s=o[i];s===-1?((a&n)===0||(a&r)!==0)&&(o[i]=Zu(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function $o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function na(){var e=Lr;return Lr<<=1,(Lr&4194240)===0&&(Lr=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function tc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Yo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var $=0;function ra(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var oa,Go,la,ia,aa,Ko=!1,jr=[],_t=null,jt=null,Mt=null,Bn=new Map,Wn=new Map,It=[],nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Vn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=or(t),t!==null&&Go(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rc(e,t,n,r,o){switch(t){case"focusin":return _t=Vn(_t,e,t,n,r,o),!0;case"dragenter":return jt=Vn(jt,e,t,n,r,o),!0;case"mouseover":return Mt=Vn(Mt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Bn.set(l,Vn(Bn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Wn.set(l,Vn(Wn.get(l)||null,e,t,n,r,o)),!0}return!1}function ua(e){var t=Kt(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=Yi(n),t!==null){e.blockedOn=t,aa(e.priority,function(){la(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fo=r,n.target.dispatchEvent(r),Fo=null}else return t=or(n),t!==null&&Go(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){Mr(e)&&n.delete(t)}function oc(){Ko=!1,_t!==null&&Mr(_t)&&(_t=null),jt!==null&&Mr(jt)&&(jt=null),Mt!==null&&Mr(Mt)&&(Mt=null),Bn.forEach(ca),Wn.forEach(ca)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ko||(Ko=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,oc)))}function $n(e){function t(o){return Jn(o,e)}if(0<jr.length){Jn(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Jn(_t,e),jt!==null&&Jn(jt,e),Mt!==null&&Jn(Mt,e),Bn.forEach(t),Wn.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)ua(n),n.blockedOn===null&&It.shift()}var fn=Se.ReactCurrentBatchConfig,Ir=!0;function lc(e,t,n,r){var o=$,l=fn.transition;fn.transition=null;try{$=1,qo(e,t,n,r)}finally{$=o,fn.transition=l}}function ic(e,t,n,r){var o=$,l=fn.transition;fn.transition=null;try{$=4,qo(e,t,n,r)}finally{$=o,fn.transition=l}}function qo(e,t,n,r){if(Ir){var o=Xo(e,t,n,r);if(o===null)hl(e,t,r,Or,n),sa(e,r);else if(rc(o,e,t,n,r))r.stopPropagation();else if(sa(e,r),t&4&&-1<nc.indexOf(e)){for(;o!==null;){var l=or(o);if(l!==null&&oa(l),l=Xo(e,t,n,r),l===null&&hl(e,t,r,Or,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Or=null;function Xo(e,t,n,r){if(Or=null,e=Uo(r),e=Kt(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yi(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Or=e,null}function da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case Jo:return 1;case ea:return 4;case Tr:case Yu:return 16;case ta:return 536870912;default:return 16}default:return 16}}var Ot=null,Zo=null,Rr=null;function fa(){if(Rr)return Rr;var e,t=Zo,n=t.length,r,o="value"in Ot?Ot.value:Ot.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Rr=o.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function pa(){return!1}function Fe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Dr:pa,this.isPropagationStopped=pa,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Fe(pn),Qn=C({},pn,{view:0,detail:0}),ac=Fe(Qn),tl,nl,Yn,zr=C({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(tl=e.screenX-Yn.screenX,nl=e.screenY-Yn.screenY):nl=tl=0,Yn=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),ma=Fe(zr),sc=C({},zr,{dataTransfer:0}),uc=Fe(sc),cc=C({},Qn,{relatedTarget:0}),rl=Fe(cc),dc=C({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),fc=Fe(dc),pc=C({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mc=Fe(pc),hc=C({},pn,{data:0}),ha=Fe(hc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vc[e])?!!t[e]:!1}function ol(){return wc}var kc=C({},Qn,{key:function(e){if(e.key){var t=gc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sc=Fe(kc),xc=C({},zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ga=Fe(xc),Ec=C({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),Cc=Fe(Ec),Tc=C({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nc=Fe(Tc),Lc=C({},zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pc=Fe(Lc),_c=[9,13,27,32],ll=ce&&"CompositionEvent"in window,Gn=null;ce&&"documentMode"in document&&(Gn=document.documentMode);var jc=ce&&"TextEvent"in window&&!Gn,ya=ce&&(!ll||Gn&&8<Gn&&11>=Gn),va=" ",wa=!1;function ka(e,t){switch(e){case"keyup":return _c.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Mc(e,t){switch(e){case"compositionend":return Sa(t);case"keypress":return t.which!==32?null:(wa=!0,va);case"textInput":return e=t.data,e===va&&wa?null:e;default:return null}}function Ic(e,t){if(mn)return e==="compositionend"||!ll&&ka(e,t)?(e=fa(),Rr=Zo=Ot=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ya&&t.locale!=="ko"?null:t.data;default:return null}}var Oc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oc[e.type]:t==="textarea"}function Ea(e,t,n,r){Wi(r),t=Br(t,"onChange"),0<t.length&&(n=new el("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,qn=null;function Rc(e){Ha(e,0)}function br(e){var t=wn(e);if(Mi(t))return e}function Ac(e,t){if(e==="change")return t}var Ca=!1;if(ce){var il;if(ce){var al="oninput"in document;if(!al){var Ta=document.createElement("div");Ta.setAttribute("oninput","return;"),al=typeof Ta.oninput=="function"}il=al}else il=!1;Ca=il&&(!document.documentMode||9<document.documentMode)}function Na(){Kn&&(Kn.detachEvent("onpropertychange",La),qn=Kn=null)}function La(e){if(e.propertyName==="value"&&br(qn)){var t=[];Ea(t,qn,e,Uo(e)),Qi(Rc,t)}}function Dc(e,t,n){e==="focusin"?(Na(),Kn=t,qn=n,Kn.attachEvent("onpropertychange",La)):e==="focusout"&&Na()}function zc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return br(qn)}function bc(e,t){if(e==="click")return br(t)}function Fc(e,t){if(e==="input"||e==="change")return br(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Uc;function Xn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!V.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function Pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _a(e,t){var n=Pa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pa(n)}}function ja(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ja(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ma(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hc(e){var t=Ma(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ja(n.ownerDocument.documentElement,n)){if(r!==null&&sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=_a(n,l);var i=_a(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bc=ce&&"documentMode"in document&&11>=document.documentMode,hn=null,ul=null,Zn=null,cl=!1;function Ia(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cl||hn==null||hn!==Sr(r)||(r=hn,"selectionStart"in r&&sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&Xn(Zn,r)||(Zn=r,r=Br(ul,"onSelect"),0<r.length&&(t=new el("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},dl={},Oa={};ce&&(Oa=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Ur(e){if(dl[e])return dl[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oa)return dl[e]=t[n];return e}var Ra=Ur("animationend"),Aa=Ur("animationiteration"),Da=Ur("animationstart"),za=Ur("transitionend"),ba=new Map,Fa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){ba.set(e,t),W(t,[e])}for(var fl=0;fl<Fa.length;fl++){var pl=Fa[fl],Wc=pl.toLowerCase(),Vc=pl[0].toUpperCase()+pl.slice(1);Rt(Wc,"on"+Vc)}Rt(Ra,"onAnimationEnd"),Rt(Aa,"onAnimationIteration"),Rt(Da,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(za,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Ua(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wu(r,t,void 0,e),e.currentTarget=null}function Ha(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,p=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Ua(o,a,p),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,p=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Ua(o,a,p),l=s}}}if(Cr)throw e=Vo,Cr=!1,Vo=null,e}function K(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(Ba(t,e,2,!1),n.add(r))}function ml(e,t,n){var r=0;t&&(r|=4),Ba(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Hr]){e[Hr]=!0,b.forEach(function(n){n!=="selectionchange"&&(Jc.has(n)||ml(n,!1,e),ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,ml("selectionchange",!1,t))}}function Ba(e,t,n,r){switch(da(t)){case 1:var o=lc;break;case 4:o=ic;break;default:o=qo}n=o.bind(null,t,n,e),o=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Kt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Qi(function(){var p=l,y=Uo(n),v=[];e:{var h=ba.get(e);if(h!==void 0){var x=el,T=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":x=Sc;break;case"focusin":T="focus",x=rl;break;case"focusout":T="blur",x=rl;break;case"beforeblur":case"afterblur":x=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Cc;break;case Ra:case Aa:case Da:x=fc;break;case za:x=Nc;break;case"scroll":x=ac;break;case"wheel":x=Pc;break;case"copy":case"cut":case"paste":x=mc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ga}var N=(t&4)!==0,se=!N&&e==="scroll",d=N?h!==null?h+"Capture":null:h;N=[];for(var u=p,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=zn(u,d),w!=null&&N.push(nr(u,w,f)))),se)break;u=u.return}0<N.length&&(h=new x(h,T,null,n,y),v.push({event:h,listeners:N}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Fo&&(T=n.relatedTarget||n.fromElement)&&(Kt(T)||T[vt]))break e;if((x||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,x?(T=n.relatedTarget||n.toElement,x=p,T=T?Kt(T):null,T!==null&&(se=Gt(T),T!==se||T.tag!==5&&T.tag!==6)&&(T=null)):(x=null,T=p),x!==T)){if(N=ma,w="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(N=ga,w="onPointerLeave",d="onPointerEnter",u="pointer"),se=x==null?h:wn(x),f=T==null?h:wn(T),h=new N(w,u+"leave",x,n,y),h.target=se,h.relatedTarget=f,w=null,Kt(y)===p&&(N=new N(d,u+"enter",T,n,y),N.target=f,N.relatedTarget=se,w=N),se=w,x&&T)t:{for(N=x,d=T,u=0,f=N;f;f=yn(f))u++;for(f=0,w=d;w;w=yn(w))f++;for(;0<u-f;)N=yn(N),u--;for(;0<f-u;)d=yn(d),f--;for(;u--;){if(N===d||d!==null&&N===d.alternate)break t;N=yn(N),d=yn(d)}N=null}else N=null;x!==null&&Wa(v,h,x,N,!1),T!==null&&se!==null&&Wa(v,se,T,N,!0)}}e:{if(h=p?wn(p):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var L=Ac;else if(xa(h))if(Ca)L=Fc;else{L=zc;var j=Dc}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=bc);if(L&&(L=L(e,p))){Ea(v,L,n,y);break e}j&&j(e,h,p),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&Ro(h,"number",h.value)}switch(j=p?wn(p):window,e){case"focusin":(xa(j)||j.contentEditable==="true")&&(hn=j,ul=p,Zn=null);break;case"focusout":Zn=ul=hn=null;break;case"mousedown":cl=!0;break;case"contextmenu":case"mouseup":case"dragend":cl=!1,Ia(v,n,y);break;case"selectionchange":if(Bc)break;case"keydown":case"keyup":Ia(v,n,y)}var M;if(ll)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else mn?ka(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ya&&n.locale!=="ko"&&(mn||O!=="onCompositionStart"?O==="onCompositionEnd"&&mn&&(M=fa()):(Ot=y,Zo="value"in Ot?Ot.value:Ot.textContent,mn=!0)),j=Br(p,O),0<j.length&&(O=new ha(O,e,null,n,y),v.push({event:O,listeners:j}),M?O.data=M:(M=Sa(n),M!==null&&(O.data=M)))),(M=jc?Mc(e,n):Ic(e,n))&&(p=Br(p,"onBeforeInput"),0<p.length&&(y=new ha("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:p}),y.data=M))}Ha(v,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=zn(e,n),l!=null&&r.unshift(nr(e,l,o)),l=zn(e,t),l!=null&&r.push(nr(e,l,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wa(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,p=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&p!==null&&(a=p,o?(s=zn(n,l),s!=null&&i.unshift(nr(n,s,a))):o||(s=zn(n,l),s!=null&&i.push(nr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var $c=/\r\n?/g,Qc=/\u0000|\uFFFD/g;function Va(e){return(typeof e=="string"?e:""+e).replace($c,`
`).replace(Qc,"")}function Wr(e,t,n){if(t=Va(t),Va(e)!==t&&n)throw Error(m(425))}function Vr(){}var gl=null,yl=null;function vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,Yc=typeof clearTimeout=="function"?clearTimeout:void 0,Ja=typeof Promise=="function"?Promise:void 0,Gc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ja<"u"?function(e){return Ja.resolve(null).then(e).catch(Kc)}:wl;function Kc(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);$n(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),ft="__reactFiber$"+vn,rr="__reactProps$"+vn,vt="__reactContainer$"+vn,Sl="__reactEvents$"+vn,qc="__reactListeners$"+vn,Xc="__reactHandles$"+vn;function Kt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[ft])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[ft]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Jr(e){return e[rr]||null}var xl=[],kn=-1;function Dt(e){return{current:e}}function q(e){0>kn||(e.current=xl[kn],xl[kn]=null,kn--)}function G(e,t){kn++,xl[kn]=e.current,e.current=t}var zt={},xe=Dt(zt),Me=Dt(!1),qt=zt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function $r(){q(Me),q(xe)}function Qa(e,t,n){if(xe.current!==zt)throw Error(m(168));G(xe,t),G(Me,n)}function Ya(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(m(108,Y(e)||"Unknown",o));return C({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,qt=xe.current,G(xe,e),G(Me,Me.current),!0}function Ga(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=Ya(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,q(Me),q(xe),G(xe,e)):q(Me),G(Me,n)}var wt=null,Yr=!1,El=!1;function Ka(e){wt===null?wt=[e]:wt.push(e)}function Zc(e){Yr=!0,Ka(e)}function bt(){if(!El&&wt!==null){El=!0;var e=0,t=$;try{var n=wt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Yr=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),Xi(Jo,bt),o}finally{$=t,El=!1}}return null}var xn=[],En=0,Gr=null,Kr=0,$e=[],Qe=0,Xt=null,kt=1,St="";function Zt(e,t){xn[En++]=Kr,xn[En++]=Gr,Gr=e,Kr=t}function qa(e,t,n){$e[Qe++]=kt,$e[Qe++]=St,$e[Qe++]=Xt,Xt=e;var r=kt;e=St;var o=32-tt(r)-1;r&=~(1<<o),n+=1;var l=32-tt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,kt=1<<32-tt(t)+o|n<<o|r,St=l+e}else kt=1<<l|n<<o|r,St=e}function Cl(e){e.return!==null&&(Zt(e,1),qa(e,1,0))}function Tl(e){for(;e===Gr;)Gr=xn[--En],xn[En]=null,Kr=xn[--En],xn[En]=null;for(;e===Xt;)Xt=$e[--Qe],$e[Qe]=null,St=$e[--Qe],$e[Qe]=null,kt=$e[--Qe],$e[Qe]=null}var Ue=null,He=null,te=!1,rt=null;function Xa(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Za(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,He=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,He=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(te){var t=He;if(t){var n=t;if(!Za(e,t)){if(Nl(e))throw Error(m(418));t=At(n.nextSibling);var r=Ue;t&&Za(e,t)?Xa(r,n):(e.flags=e.flags&-4097|2,te=!1,Ue=e)}}else{if(Nl(e))throw Error(m(418));e.flags=e.flags&-4097|2,te=!1,Ue=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function qr(e){if(e!==Ue)return!1;if(!te)return es(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vl(e.type,e.memoizedProps)),t&&(t=He)){if(Nl(e))throw ts(),Error(m(418));for(;t;)Xa(e,t),t=At(t.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ue?At(e.stateNode.nextSibling):null;return!0}function ts(){for(var e=He;e;)e=At(e.nextSibling)}function Cn(){He=Ue=null,te=!1}function Pl(e){rt===null?rt=[e]:rt.push(e)}var ed=Se.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function Xr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function rs(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=$t(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,w){return u===null||u.tag!==6?(u=wi(f,d.mode,w),u.return=d,u):(u=o(u,f),u.return=d,u)}function s(d,u,f,w){var L=f.type;return L===_e?y(d,u,f.props.children,w,f.key):u!==null&&(u.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===je&&ns(L)===u.type)?(w=o(u,f.props),w.ref=lr(d,u,f),w.return=d,w):(w=Eo(f.type,f.key,f.props,null,d.mode,w),w.ref=lr(d,u,f),w.return=d,w)}function p(d,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ki(f,d.mode,w),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function y(d,u,f,w,L){return u===null||u.tag!==7?(u=sn(f,d.mode,w,L),u.return=d,u):(u=o(u,f),u.return=d,u)}function v(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=wi(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ze:return f=Eo(u.type,u.key,u.props,null,d.mode,f),f.ref=lr(d,null,u),f.return=d,f;case Ne:return u=ki(u,d.mode,f),u.return=d,u;case je:var w=u._init;return v(d,w(u._payload),f)}if(Rn(u)||I(u))return u=sn(u,d.mode,f,null),u.return=d,u;Xr(d,u)}return null}function h(d,u,f,w){var L=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return L!==null?null:a(d,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:return f.key===L?s(d,u,f,w):null;case Ne:return f.key===L?p(d,u,f,w):null;case je:return L=f._init,h(d,u,L(f._payload),w)}if(Rn(f)||I(f))return L!==null?null:y(d,u,f,w,null);Xr(d,f)}return null}function x(d,u,f,w,L){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(u,d,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ze:return d=d.get(w.key===null?f:w.key)||null,s(u,d,w,L);case Ne:return d=d.get(w.key===null?f:w.key)||null,p(u,d,w,L);case je:var j=w._init;return x(d,u,f,j(w._payload),L)}if(Rn(w)||I(w))return d=d.get(f)||null,y(u,d,w,L,null);Xr(u,w)}return null}function T(d,u,f,w){for(var L=null,j=null,M=u,O=u=0,ye=null;M!==null&&O<f.length;O++){M.index>O?(ye=M,M=null):ye=M.sibling;var B=h(d,M,f[O],w);if(B===null){M===null&&(M=ye);break}e&&M&&B.alternate===null&&t(d,M),u=l(B,u,O),j===null?L=B:j.sibling=B,j=B,M=ye}if(O===f.length)return n(d,M),te&&Zt(d,O),L;if(M===null){for(;O<f.length;O++)M=v(d,f[O],w),M!==null&&(u=l(M,u,O),j===null?L=M:j.sibling=M,j=M);return te&&Zt(d,O),L}for(M=r(d,M);O<f.length;O++)ye=x(M,d,O,f[O],w),ye!==null&&(e&&ye.alternate!==null&&M.delete(ye.key===null?O:ye.key),u=l(ye,u,O),j===null?L=ye:j.sibling=ye,j=ye);return e&&M.forEach(function(Qt){return t(d,Qt)}),te&&Zt(d,O),L}function N(d,u,f,w){var L=I(f);if(typeof L!="function")throw Error(m(150));if(f=L.call(f),f==null)throw Error(m(151));for(var j=L=null,M=u,O=u=0,ye=null,B=f.next();M!==null&&!B.done;O++,B=f.next()){M.index>O?(ye=M,M=null):ye=M.sibling;var Qt=h(d,M,B.value,w);if(Qt===null){M===null&&(M=ye);break}e&&M&&Qt.alternate===null&&t(d,M),u=l(Qt,u,O),j===null?L=Qt:j.sibling=Qt,j=Qt,M=ye}if(B.done)return n(d,M),te&&Zt(d,O),L;if(M===null){for(;!B.done;O++,B=f.next())B=v(d,B.value,w),B!==null&&(u=l(B,u,O),j===null?L=B:j.sibling=B,j=B);return te&&Zt(d,O),L}for(M=r(d,M);!B.done;O++,B=f.next())B=x(M,d,O,B.value,w),B!==null&&(e&&B.alternate!==null&&M.delete(B.key===null?O:B.key),u=l(B,u,O),j===null?L=B:j.sibling=B,j=B);return e&&M.forEach(function(Od){return t(d,Od)}),te&&Zt(d,O),L}function se(d,u,f,w){if(typeof f=="object"&&f!==null&&f.type===_e&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:e:{for(var L=f.key,j=u;j!==null;){if(j.key===L){if(L=f.type,L===_e){if(j.tag===7){n(d,j.sibling),u=o(j,f.props.children),u.return=d,d=u;break e}}else if(j.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===je&&ns(L)===j.type){n(d,j.sibling),u=o(j,f.props),u.ref=lr(d,j,f),u.return=d,d=u;break e}n(d,j);break}else t(d,j);j=j.sibling}f.type===_e?(u=sn(f.props.children,d.mode,w,f.key),u.return=d,d=u):(w=Eo(f.type,f.key,f.props,null,d.mode,w),w.ref=lr(d,u,f),w.return=d,d=w)}return i(d);case Ne:e:{for(j=f.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=ki(f,d.mode,w),u.return=d,d=u}return i(d);case je:return j=f._init,se(d,u,j(f._payload),w)}if(Rn(f))return T(d,u,f,w);if(I(f))return N(d,u,f,w);Xr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=wi(f,d.mode,w),u.return=d,d=u),i(d)):n(d,u)}return se}var Tn=rs(!0),os=rs(!1),Zr=Dt(null),eo=null,Nn=null,_l=null;function jl(){_l=Nn=eo=null}function Ml(e){var t=Zr.current;q(Zr),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){eo=e,_l=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Oe=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(_l!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(eo===null)throw Error(m(308));Nn=e,eo.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var en=null;function Ol(e){en===null?en=[e]:en.push(e)}function ls(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ol(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ol(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yo(e,n)}}function as(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var o=e.updateQueue;Ft=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,p=s.next;s.next=null,i===null?l=p:i.next=p,i=s;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==i&&(a===null?y.firstBaseUpdate=p:a.next=p,y.lastBaseUpdate=s))}if(l!==null){var v=o.baseState;i=0,y=p=s=null,a=l;do{var h=a.lane,x=a.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=e,N=a;switch(h=t,x=n,N.tag){case 1:if(T=N.payload,typeof T=="function"){v=T.call(x,v,h);break e}v=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=N.payload,h=typeof T=="function"?T.call(x,v,h):T,h==null)break e;v=C({},v,h);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(p=y=x,s=v):y=y.next=x,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(y===null&&(s=v),o.baseState=s,o.firstBaseUpdate=p,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);rn|=i,e.lanes=i,e.memoizedState=v}}function ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(m(191,o));o.call(r)}}}var ir={},pt=Dt(ir),ar=Dt(ir),sr=Dt(ir);function tn(e){if(e===ir)throw Error(m(174));return e}function Al(e,t){switch(G(sr,t),G(ar,e),G(pt,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Do(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Do(t,e)}q(pt),G(pt,t)}function Pn(){q(pt),q(ar),q(sr)}function us(e){tn(sr.current);var t=tn(pt.current),n=Do(t,e.type);t!==n&&(G(ar,e),G(pt,n))}function Dl(e){ar.current===e&&(q(pt),q(ar))}var re=Dt(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zl=[];function bl(){for(var e=0;e<zl.length;e++)zl[e]._workInProgressVersionPrimary=null;zl.length=0}var oo=Se.ReactCurrentDispatcher,Fl=Se.ReactCurrentBatchConfig,nn=0,oe=null,fe=null,he=null,lo=!1,ur=!1,cr=0,td=0;function Ee(){throw Error(m(321))}function Ul(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Hl(e,t,n,r,o,l){if(nn=l,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?ld:id,e=n(r,o),ur){l=0;do{if(ur=!1,cr=0,25<=l)throw Error(m(301));l+=1,he=fe=null,t.updateQueue=null,oo.current=ad,e=n(r,o)}while(ur)}if(oo.current=so,t=fe!==null&&fe.next!==null,nn=0,he=fe=oe=null,lo=!1,t)throw Error(m(300));return e}function Bl(){var e=cr!==0;return cr=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?oe.memoizedState=he=e:he=he.next=e,he}function Ge(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=he===null?oe.memoizedState:he.next;if(t!==null)he=t,fe=e;else{if(e===null)throw Error(m(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},he===null?oe.memoizedState=he=e:he=he.next=e}return he}function dr(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,p=l;do{var y=p.lane;if((nn&y)===y)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(a=s=v,i=r):s=s.next=v,oe.lanes|=y,rn|=y}p=p.next}while(p!==null&&p!==l);s===null?i=r:s.next=a,nt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,oe.lanes|=l,rn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);nt(l,t.memoizedState)||(Oe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function cs(){}function ds(e,t){var n=oe,r=Ge(),o=t(),l=!nt(r.memoizedState,o);if(l&&(r.memoizedState=o,Oe=!0),r=r.queue,Jl(ms.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,fr(9,ps.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(m(349));(nn&30)!==0||fs(n,t,o)}return o}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ps(e,t,n,r){t.value=n,t.getSnapshot=r,hs(t)&&gs(e)}function ms(e,t,n){return n(function(){hs(t)&&gs(e)})}function hs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function gs(e){var t=xt(e,1);t!==null&&at(t,e,1,-1)}function ys(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=od.bind(null,oe,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vs(){return Ge().memoizedState}function io(e,t,n,r){var o=mt();oe.flags|=e,o.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function ao(e,t,n,r){var o=Ge();r=r===void 0?null:r;var l=void 0;if(fe!==null){var i=fe.memoizedState;if(l=i.destroy,r!==null&&Ul(r,i.deps)){o.memoizedState=fr(t,n,l,r);return}}oe.flags|=e,o.memoizedState=fr(1|t,n,l,r)}function ws(e,t){return io(8390656,8,e,t)}function Jl(e,t){return ao(2048,8,e,t)}function ks(e,t){return ao(4,2,e,t)}function Ss(e,t){return ao(4,4,e,t)}function xs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Es(e,t,n){return n=n!=null?n.concat([e]):null,ao(4,4,xs.bind(null,t,e),n)}function $l(){}function Cs(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ul(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ts(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ul(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ns(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n):(nt(n,t)||(n=na(),oe.lanes|=n,rn|=n,e.baseState=!0),t)}function nd(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{$=n,Fl.transition=r}}function Ls(){return Ge().memoizedState}function rd(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e))_s(t,n);else if(n=ls(e,t,n,r),n!==null){var o=Pe();at(n,e,r,o),js(n,t,r)}}function od(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))_s(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,nt(a,i)){var s=t.interleaved;s===null?(o.next=o,Ol(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=ls(e,t,o,r),n!==null&&(o=Pe(),at(n,e,r,o),js(n,t,r))}}function Ps(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function _s(e,t){ur=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yo(e,n)}}var so={readContext:Ye,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},ld={readContext:Ye,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rd.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:ys,useDebugValue:$l,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=ys(!1),t=e[0];return e=nd.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=mt();if(te){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),ge===null)throw Error(m(349));(nn&30)!==0||fs(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,ws(ms.bind(null,r,l,e),[e]),r.flags|=2048,fr(9,ps.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=mt(),t=ge.identifierPrefix;if(te){var n=St,r=kt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=td++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},id={readContext:Ye,useCallback:Cs,useContext:Ye,useEffect:Jl,useImperativeHandle:Es,useInsertionEffect:ks,useLayoutEffect:Ss,useMemo:Ts,useReducer:Wl,useRef:vs,useState:function(){return Wl(dr)},useDebugValue:$l,useDeferredValue:function(e){var t=Ge();return Ns(t,fe.memoizedState,e)},useTransition:function(){var e=Wl(dr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ls,unstable_isNewReconciler:!1},ad={readContext:Ye,useCallback:Cs,useContext:Ye,useEffect:Jl,useImperativeHandle:Es,useInsertionEffect:ks,useLayoutEffect:Ss,useMemo:Ts,useReducer:Vl,useRef:vs,useState:function(){return Vl(dr)},useDebugValue:$l,useDeferredValue:function(e){var t=Ge();return fe===null?t.memoizedState=e:Ns(t,fe.memoizedState,e)},useTransition:function(){var e=Vl(dr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ls,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=C({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Vt(e),l=Et(r,o);l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,o),t!==null&&(at(t,e,o,r),to(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Vt(e),l=Et(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,o),t!==null&&(at(t,e,o,r),to(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Vt(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,r),t!==null&&(at(t,e,r,n),to(t,e,r))}};function Ms(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(o,l):!0}function Is(e,t,n){var r=!1,o=zt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ye(l):(o=Ie(t)?qt:xe.current,r=t.contextTypes,l=(r=r!=null)?Sn(e,o):zt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Os(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Rl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ye(l):(l=Ie(t)?qt:xe.current,o.context=Sn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ql(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&uo.enqueueReplaceState(o,o.state,null),no(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function _n(e,t){try{var n="",r=t;do n+=U(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Kl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sd=typeof WeakMap=="function"?WeakMap:Map;function Rs(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,di=r),Kl(e,t)},n}function As(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Kl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Kl(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ds(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=xd.bind(null,e,t,n),t.then(e,e))}function zs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bs(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ud=Se.ReactCurrentOwner,Oe=!1;function Le(e,t,n,r){t.child=e===null?os(t,null,n,r):Tn(t,e.child,n,r)}function Fs(e,t,n,r,o){n=n.render;var l=t.ref;return Ln(t,o),r=Hl(e,t,n,r,l,o),n=Bl(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(te&&n&&Cl(t),t.flags|=1,Le(e,t,r,o),t.child)}function Us(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!vi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Hs(e,t,l,r,o)):(e=Eo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(i,r)&&e.ref===t.ref)return Ct(e,t,o)}return t.flags|=1,e=$t(l,r),e.ref=t.ref,e.return=t,t.child=e}function Hs(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Xn(l,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Ct(e,t,o)}return ql(e,t,n,r,o)}function Bs(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Mn,Be),Be|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Mn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,G(Mn,Be),Be|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,G(Mn,Be),Be|=r;return Le(e,t,o,n),t.child}function Ws(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,n,r,o){var l=Ie(n)?qt:xe.current;return l=Sn(t,l),Ln(t,o),n=Hl(e,t,n,r,l,o),r=Bl(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(te&&r&&Cl(t),t.flags|=1,Le(e,t,n,o),t.child)}function Vs(e,t,n,r,o){if(Ie(n)){var l=!0;Qr(t)}else l=!1;if(Ln(t,o),t.stateNode===null)fo(e,t),Is(t,n,r),Yl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ye(p):(p=Ie(n)?qt:xe.current,p=Sn(t,p));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==p)&&Os(t,i,r,p),Ft=!1;var h=t.memoizedState;i.state=h,no(t,r,i,o),s=t.memoizedState,a!==r||h!==s||Me.current||Ft?(typeof y=="function"&&(Ql(t,n,y,r),s=t.memoizedState),(a=Ft||Ms(t,n,a,r,h,s,p))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=p,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,is(e,t),a=t.memoizedProps,p=t.type===t.elementType?a:ot(t.type,a),i.props=p,v=t.pendingProps,h=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ye(s):(s=Ie(n)?qt:xe.current,s=Sn(t,s));var x=n.getDerivedStateFromProps;(y=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==v||h!==s)&&Os(t,i,r,s),Ft=!1,h=t.memoizedState,i.state=h,no(t,r,i,o);var T=t.memoizedState;a!==v||h!==T||Me.current||Ft?(typeof x=="function"&&(Ql(t,n,x,r),T=t.memoizedState),(p=Ft||Ms(t,n,p,r,h,T,s)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,T,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,T,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=T),i.props=r,i.state=T,i.context=s,r=p):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,l,o)}function Xl(e,t,n,r,o,l){Ws(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ga(t,n,!1),Ct(e,t,l);r=t.stateNode,ud.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Tn(t,e.child,null,l),t.child=Tn(t,null,a,l)):Le(e,t,a,l),t.memoizedState=r.state,o&&Ga(t,n,!0),t.child}function Js(e){var t=e.stateNode;t.pendingContext?Qa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qa(e,t.context,!1),Al(e,t.containerInfo)}function $s(e,t,n,r,o){return Cn(),Pl(o),t.flags|=256,Le(e,t,n,r),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function ei(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qs(e,t,n){var r=t.pendingProps,o=re.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(re,o&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Co(i,r,0,null),e=sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ei(n),t.memoizedState=Zl,e):ti(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return cd(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=$t(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=$t(a,l):(l=sn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ei(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Zl,r}return l=e.child,e=l.sibling,r=$t(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ti(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&Pl(r),Tn(t,e.child,null,n),e=ti(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(m(422))),co(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Co({mode:"visible",children:r.children},o,0,null),l=sn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Tn(t,e.child,null,i),t.child.memoizedState=ei(i),t.memoizedState=Zl,l);if((t.mode&1)===0)return co(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(m(419)),r=Gl(l,r,void 0),co(e,t,i,r)}if(a=(i&e.childLanes)!==0,Oe||a){if(r=ge,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,xt(e,o),at(r,e,o,-1))}return yi(),r=Gl(Error(m(421))),co(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ed.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,He=At(o.nextSibling),Ue=t,te=!0,rt=null,e!==null&&($e[Qe++]=kt,$e[Qe++]=St,$e[Qe++]=Xt,kt=e.id,St=e.overflow,Xt=t),t=ti(t,r.children),t.flags|=4096,t)}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function ni(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Gs(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Le(e,t,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,n,t);else if(e.tag===19)Ys(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(re,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ni(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ro(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ni(t,!0,n,null,l);break;case"together":ni(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dd(e,t,n){switch(t.tag){case 3:Js(t),Cn();break;case 5:us(t);break;case 1:Ie(t.type)&&Qr(t);break;case 4:Al(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(Zr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(re,re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Qs(e,t,n):(G(re,re.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);G(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Gs(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Bs(e,t,n)}return Ct(e,t,n)}var Ks,ri,qs,Xs;Ks=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ri=function(){},qs=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(pt.current);var l=null;switch(n){case"input":o=Io(e,o),r=Io(e,r),l=[];break;case"select":o=C({},o,{value:void 0}),r=C({},r,{value:void 0}),l=[];break;case"textarea":o=Ao(e,o),r=Ao(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}zo(n,r);var i;n=null;for(p in o)if(!r.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var a=o[p];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(R.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var s=r[p];if(a=o?.[p],r.hasOwnProperty(p)&&s!==a&&(s!=null||a!=null))if(p==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(R.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&K("scroll",e),l||a===s||(l=[])):(l=l||[]).push(p,s))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}},Xs=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fd(e,t,n){var r=t.pendingProps;switch(Tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ie(t.type)&&$r(),Ce(t),null;case 3:return r=t.stateNode,Pn(),q(Me),q(xe),bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(mi(rt),rt=null))),ri(e,t),Ce(t),null;case 5:Dl(t);var o=tn(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)qs(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return Ce(t),null}if(e=tn(pt.current),qr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ft]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<er.length;o++)K(er[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Ii(r,l),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},K("invalid",r);break;case"textarea":Ai(r,l),K("invalid",r)}zo(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Wr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Wr(r.textContent,a,e),o=["children",""+a]):R.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&K("scroll",r)}switch(n){case"input":kr(r),Ri(r,l,!0);break;case"textarea":kr(r),zi(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Vr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[ft]=t,e[rr]=r,Ks(e,t,!1,!1),t.stateNode=e;e:{switch(i=bo(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<er.length;o++)K(er[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":Ii(e,r),o=Io(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=C({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ai(e,r),o=Ao(e,r),K("invalid",e);break;default:o=r}zo(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Hi(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Fi(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&An(e,s):typeof s=="number"&&An(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(R.hasOwnProperty(l)?s!=null&&l==="onScroll"&&K("scroll",e):s!=null&&Xe(e,l,s,i))}switch(n){case"input":kr(e),Ri(e,r,!1);break;case"textarea":kr(e),zi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+J(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?un(e,!!r.multiple,l,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Xs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=tn(sr.current),tn(pt.current),qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(l=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return Ce(t),null;case 13:if(q(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&He!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ts(),Cn(),t.flags|=98560,l=!1;else if(l=qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(m(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(m(317));l[ft]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),l=!1}else rt!==null&&(mi(rt),rt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(re.current&1)!==0?pe===0&&(pe=3):yi())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Pn(),ri(e,t),e===null&&tr(t.stateNode.containerInfo),Ce(t),null;case 10:return Ml(t.type._context),Ce(t),null;case 17:return Ie(t.type)&&$r(),Ce(t),null;case 19:if(q(re),l=t.memoizedState,l===null)return Ce(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)pr(l,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ro(e),i!==null){for(t.flags|=128,pr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(re,re.current&1|2),t.child}e=e.sibling}l.tail!==null&&ae()>In&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ro(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!te)return Ce(t),null}else 2*ae()-l.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ae(),t.sibling=null,n=re.current,G(re,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return gi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Be&1073741824)!==0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function pd(e,t){switch(Tl(t),t.tag){case 1:return Ie(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),q(Me),q(xe),bl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Dl(t),null;case 13:if(q(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(re),null;case 4:return Pn(),null;case 10:return Ml(t.type._context),null;case 22:case 23:return gi(),null;case 24:return null;default:return null}}var po=!1,Te=!1,md=typeof WeakSet=="function"?WeakSet:Set,E=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function oi(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Zs=!1;function hd(e,t){if(gl=Ir,e=Ma(),sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,p=0,y=0,v=e,h=null;t:for(;;){for(var x;v!==n||o!==0&&v.nodeType!==3||(a=i+o),v!==l||r!==0&&v.nodeType!==3||(s=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(x=v.firstChild)!==null;)h=v,v=x;for(;;){if(v===e)break t;if(h===n&&++p===o&&(a=i),h===l&&++y===r&&(s=i),(x=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(yl={focusedElem:e,selectionRange:n},Ir=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var T=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var N=T.memoizedProps,se=T.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?N:ot(t.type,N),se);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return T=Zs,Zs=!1,T}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&oi(t,n,l)}o=o.next}while(o!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function li(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[rr],delete t[Sl],delete t[qc],delete t[Xc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(ii(e,t,n),e=e.sibling;e!==null;)ii(e,t,n),e=e.sibling}function ai(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ai(e,t,n),e=e.sibling;e!==null;)ai(e,t,n),e=e.sibling}var we=null,lt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Nr,n)}catch{}switch(n.tag){case 5:Te||jn(n,t);case 6:var r=we,o=lt;we=null,Ht(e,t,n),we=r,lt=o,we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),$n(e)):kl(we,n.stateNode));break;case 4:r=we,o=lt,we=n.stateNode.containerInfo,lt=!0,Ht(e,t,n),we=r,lt=o;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&oi(n,t,i),o=o.next}while(o!==r)}Ht(e,t,n);break;case 1:if(!Te&&(jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,t,a)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Ht(e,t,n),Te=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new md),t.forEach(function(r){var o=Cd.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,lt=!1;break e;case 3:we=a.stateNode.containerInfo,lt=!0;break e;case 4:we=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(we===null)throw Error(m(160));ru(l,i,o),we=null,lt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(p){ie(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lu(t,e),t=t.sibling}function lu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ht(e),r&4){try{mr(3,e,e.return),mo(3,e)}catch(N){ie(e,e.return,N)}try{mr(5,e,e.return)}catch(N){ie(e,e.return,N)}}break;case 1:it(t,e),ht(e),r&512&&n!==null&&jn(n,n.return);break;case 5:if(it(t,e),ht(e),r&512&&n!==null&&jn(n,n.return),e.flags&32){var o=e.stateNode;try{An(o,"")}catch(N){ie(e,e.return,N)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Oi(o,l),bo(a,i);var p=bo(a,l);for(i=0;i<s.length;i+=2){var y=s[i],v=s[i+1];y==="style"?Hi(o,v):y==="dangerouslySetInnerHTML"?Fi(o,v):y==="children"?An(o,v):Xe(o,y,v,p)}switch(a){case"input":Oo(o,l);break;case"textarea":Di(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?un(o,!!l.multiple,x,!1):h!==!!l.multiple&&(l.defaultValue!=null?un(o,!!l.multiple,l.defaultValue,!0):un(o,!!l.multiple,l.multiple?[]:"",!1))}o[rr]=l}catch(N){ie(e,e.return,N)}}break;case 6:if(it(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(m(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(N){ie(e,e.return,N)}}break;case 3:if(it(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(N){ie(e,e.return,N)}break;case 4:it(t,e),ht(e);break;case 13:it(t,e),ht(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ci=ae())),r&4&&ou(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(p=Te)||y,it(t,e),Te=p):it(t,e),ht(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&(e.mode&1)!==0)for(E=e,y=e.child;y!==null;){for(v=E=y;E!==null;){switch(h=E,x=h.child,h.tag){case 0:case 11:case 14:case 15:mr(4,h,h.return);break;case 1:jn(h,h.return);var T=h.stateNode;if(typeof T.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(N){ie(r,n,N)}}break;case 5:jn(h,h.return);break;case 22:if(h.memoizedState!==null){su(v);continue}}x!==null?(x.return=h,E=x):su(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{o=v.stateNode,p?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,s=v.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ui("display",i))}catch(N){ie(e,e.return,N)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(N){ie(e,e.return,N)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:it(t,e),ht(e),r&4&&ou(e);break;case 21:break;default:it(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(An(o,""),r.flags&=-33);var l=nu(e);ai(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=nu(e);ii(e,a,i);break;default:throw Error(m(161))}}catch(s){ie(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gd(e,t,n){E=e,iu(e)}function iu(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||po;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Te;a=po;var p=Te;if(po=i,(Te=s)&&!p)for(E=o;E!==null;)i=E,s=i.child,i.tag===22&&i.memoizedState!==null?uu(o):s!==null?(s.return=i,E=s):uu(o);for(;l!==null;)E=l,iu(l),l=l.sibling;E=o,po=a,Te=p}au(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,E=l):au(e)}}function au(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Te||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ss(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ss(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&$n(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Te||t.flags&512&&li(t)}catch(h){ie(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function su(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function uu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(s){ie(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ie(t,o,s)}}var l=t.return;try{li(t)}catch(s){ie(t,l,s)}break;case 5:var i=t.return;try{li(t)}catch(s){ie(t,i,s)}}}catch(s){ie(t,t.return,s)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var yd=Math.ceil,ho=Se.ReactCurrentDispatcher,si=Se.ReactCurrentOwner,Ke=Se.ReactCurrentBatchConfig,F=0,ge=null,de=null,ke=0,Be=0,Mn=Dt(0),pe=0,hr=null,rn=0,go=0,ui=0,gr=null,Re=null,ci=0,In=1/0,Tt=null,yo=!1,di=null,Bt=null,vo=!1,Wt=null,wo=0,yr=0,fi=null,ko=-1,So=0;function Pe(){return(F&6)!==0?ae():ko!==-1?ko:ko=ae()}function Vt(e){return(e.mode&1)===0?1:(F&2)!==0&&ke!==0?ke&-ke:ed.transition!==null?(So===0&&(So=na()),So):(e=$,e!==0||(e=window.event,e=e===void 0?16:da(e.type)),e)}function at(e,t,n,r){if(50<yr)throw yr=0,fi=null,Error(m(185));Hn(e,n,r),((F&2)===0||e!==ge)&&(e===ge&&((F&2)===0&&(go|=n),pe===4&&Jt(e,ke)),Ae(e,r),n===1&&F===0&&(t.mode&1)===0&&(In=ae()+500,Yr&&bt()))}function Ae(e,t){var n=e.callbackNode;ec(e,t);var r=_r(e,e===ge?ke:0);if(r===0)n!==null&&Zi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zi(n),t===1)e.tag===0?Zc(du.bind(null,e)):Ka(du.bind(null,e)),Gc(function(){(F&6)===0&&bt()}),n=null;else{switch(ra(r)){case 1:n=Jo;break;case 4:n=ea;break;case 16:n=Tr;break;case 536870912:n=ta;break;default:n=Tr}n=wu(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(ko=-1,So=0,(F&6)!==0)throw Error(m(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=_r(e,e===ge?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=xo(e,r);else{t=r;var o=F;F|=2;var l=pu();(ge!==e||ke!==t)&&(Tt=null,In=ae()+500,ln(e,t));do try{kd();break}catch(a){fu(e,a)}while(!0);jl(),ho.current=l,F=o,de!==null?t=0:(ge=null,ke=0,t=pe)}if(t!==0){if(t===2&&(o=$o(e),o!==0&&(r=o,t=pi(e,o))),t===1)throw n=hr,ln(e,0),Jt(e,r),Ae(e,ae()),n;if(t===6)Jt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!vd(o)&&(t=xo(e,r),t===2&&(l=$o(e),l!==0&&(r=l,t=pi(e,l))),t===1))throw n=hr,ln(e,0),Jt(e,r),Ae(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:an(e,Re,Tt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=ci+500-ae(),10<t)){if(_r(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=wl(an.bind(null,e,Re,Tt),t);break}an(e,Re,Tt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-tt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yd(r/1960))-r,10<r){e.timeoutHandle=wl(an.bind(null,e,Re,Tt),r);break}an(e,Re,Tt);break;case 5:an(e,Re,Tt);break;default:throw Error(m(329))}}}return Ae(e,ae()),e.callbackNode===n?cu.bind(null,e):null}function pi(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=xo(e,t),e!==2&&(t=Re,Re=n,t!==null&&mi(t)),e}function mi(e){Re===null?Re=e:Re.push.apply(Re,e)}function vd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!nt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~ui,t&=~go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if((F&6)!==0)throw Error(m(327));On();var t=_r(e,0);if((t&1)===0)return Ae(e,ae()),null;var n=xo(e,t);if(e.tag!==0&&n===2){var r=$o(e);r!==0&&(t=r,n=pi(e,r))}if(n===1)throw n=hr,ln(e,0),Jt(e,t),Ae(e,ae()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Re,Tt),Ae(e,ae()),null}function hi(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(In=ae()+500,Yr&&bt())}}function on(e){Wt!==null&&Wt.tag===0&&(F&6)===0&&On();var t=F;F|=1;var n=Ke.transition,r=$;try{if(Ke.transition=null,$=1,e)return e()}finally{$=r,Ke.transition=n,F=t,(F&6)===0&&bt()}}function gi(){Be=Mn.current,q(Mn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yc(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Tl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:Pn(),q(Me),q(xe),bl();break;case 5:Dl(r);break;case 4:Pn();break;case 13:q(re);break;case 19:q(re);break;case 10:Ml(r.type._context);break;case 22:case 23:gi()}n=n.return}if(ge=e,de=e=$t(e.current,null),ke=Be=t,pe=0,hr=null,ui=go=rn=0,Re=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}en=null}return e}function fu(e,t){do{var n=de;try{if(jl(),oo.current=so,lo){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}lo=!1}if(nn=0,he=fe=oe=null,ur=!1,cr=0,si.current=null,n===null||n.return===null){pe=1,hr=t,de=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=ke,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,y=a,v=y.tag;if((y.mode&1)===0&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=zs(i);if(x!==null){x.flags&=-257,bs(x,i,a,l,t),x.mode&1&&Ds(l,p,t),t=x,s=p;var T=t.updateQueue;if(T===null){var N=new Set;N.add(s),t.updateQueue=N}else T.add(s);break e}else{if((t&1)===0){Ds(l,p,t),yi();break e}s=Error(m(426))}}else if(te&&a.mode&1){var se=zs(i);if(se!==null){(se.flags&65536)===0&&(se.flags|=256),bs(se,i,a,l,t),Pl(_n(s,a));break e}}l=s=_n(s,a),pe!==4&&(pe=2),gr===null?gr=[l]:gr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Rs(l,s,t);as(l,d);break e;case 1:a=s;var u=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Bt===null||!Bt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=As(l,a,t);as(l,w);break e}}l=l.return}while(l!==null)}hu(n)}catch(L){t=L,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function pu(){var e=ho.current;return ho.current=so,e===null?so:e}function yi(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||(rn&268435455)===0&&(go&268435455)===0||Jt(ge,ke)}function xo(e,t){var n=F;F|=2;var r=pu();(ge!==e||ke!==t)&&(Tt=null,ln(e,t));do try{wd();break}catch(o){fu(e,o)}while(!0);if(jl(),F=n,ho.current=r,de!==null)throw Error(m(261));return ge=null,ke=0,pe}function wd(){for(;de!==null;)mu(de)}function kd(){for(;de!==null&&!Ju();)mu(de)}function mu(e){var t=vu(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?hu(e):de=t,si.current=null}function hu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=fd(n,t,Be),n!==null){de=n;return}}else{if(n=pd(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);pe===0&&(pe=5)}function an(e,t,n){var r=$,o=Ke.transition;try{Ke.transition=null,$=1,Sd(e,t,n,r)}finally{Ke.transition=o,$=r}return null}function Sd(e,t,n,r){do On();while(Wt!==null);if((F&6)!==0)throw Error(m(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(tc(e,l),e===ge&&(de=ge=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vo||(vo=!0,wu(Tr,function(){return On(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Ke.transition,Ke.transition=null;var i=$;$=1;var a=F;F|=4,si.current=null,hd(e,n),lu(n,e),Hc(yl),Ir=!!gl,yl=gl=null,e.current=n,gd(n),$u(),F=a,$=i,Ke.transition=l}else e.current=n;if(vo&&(vo=!1,Wt=e,wo=o),l=e.pendingLanes,l===0&&(Bt=null),Gu(n.stateNode),Ae(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yo)throw yo=!1,e=di,di=null,e;return(wo&1)!==0&&e.tag!==0&&On(),l=e.pendingLanes,(l&1)!==0?e===fi?yr++:(yr=0,fi=e):yr=0,bt(),null}function On(){if(Wt!==null){var e=ra(wo),t=Ke.transition,n=$;try{if(Ke.transition=null,$=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,wo=0,(F&6)!==0)throw Error(m(331));var o=F;for(F|=4,E=e.current;E!==null;){var l=E,i=l.child;if((E.flags&16)!==0){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var p=a[s];for(E=p;E!==null;){var y=E;switch(y.tag){case 0:case 11:case 15:mr(8,y,l)}var v=y.child;if(v!==null)v.return=y,E=v;else for(;E!==null;){y=E;var h=y.sibling,x=y.return;if(eu(y),y===p){E=null;break}if(h!==null){h.return=x,E=h;break}E=x}}}var T=l.alternate;if(T!==null){var N=T.child;if(N!==null){T.child=null;do{var se=N.sibling;N.sibling=null,N=se}while(N!==null)}}E=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,E=i;else e:for(;E!==null;){if(l=E,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:mr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,E=d;break e}E=l.return}}var u=e.current;for(E=u;E!==null;){i=E;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,E=f;else e:for(i=u;E!==null;){if(a=E,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:mo(9,a)}}catch(L){ie(a,a.return,L)}if(a===i){E=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,E=w;break e}E=a.return}}if(F=o,bt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Nr,e)}catch{}r=!0}return r}finally{$=n,Ke.transition=t}}return!1}function gu(e,t,n){t=_n(n,t),t=Rs(e,t,1),e=Ut(e,t,1),t=Pe(),e!==null&&(Hn(e,1,t),Ae(e,t))}function ie(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=_n(n,e),e=As(t,e,1),t=Ut(t,e,1),e=Pe(),t!==null&&(Hn(t,1,e),Ae(t,e));break}}t=t.return}}function xd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>ae()-ci?ln(e,0):ui|=n),Ae(e,t)}function yu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var n=Pe();e=xt(e,t),e!==null&&(Hn(e,t,n),Ae(e,n))}function Ed(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yu(e,n)}function Cd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),yu(e,n)}var vu;vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Oe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Oe=!1,dd(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,te&&(t.flags&1048576)!==0&&qa(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=Sn(t,xe.current);Ln(t,n),o=Hl(null,t,r,e,o,n);var l=Bl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(l=!0,Qr(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Rl(t),o.updater=uo,t.stateNode=o,o._reactInternals=t,Yl(t,r,e,n),t=Xl(null,t,r,!0,l,n)):(t.tag=0,te&&l&&Cl(t),Le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Nd(r),e=ot(r,e),o){case 0:t=ql(null,t,r,e,n);break e;case 1:t=Vs(null,t,r,e,n);break e;case 11:t=Fs(null,t,r,e,n);break e;case 14:t=Us(null,t,r,ot(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),ql(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Vs(e,t,r,o,n);case 3:e:{if(Js(t),e===null)throw Error(m(387));r=t.pendingProps,l=t.memoizedState,o=l.element,is(e,t),no(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=_n(Error(m(423)),t),t=$s(e,t,r,n,o);break e}else if(r!==o){o=_n(Error(m(424)),t),t=$s(e,t,r,n,o);break e}else for(He=At(t.stateNode.containerInfo.firstChild),Ue=t,te=!0,rt=null,n=os(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===o){t=Ct(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return us(t),e===null&&Ll(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,vl(r,o)?i=null:l!==null&&vl(r,l)&&(t.flags|=32),Ws(e,t),Le(e,t,i,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return Qs(e,t,n);case 4:return Al(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Fs(e,t,r,o,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,G(Zr,r._currentValue),r._currentValue=i,l!==null)if(nt(l.value,i)){if(l.children===o.children&&!Me.current){t=Ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Et(-1,n&-n),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?s.next=s:(s.next=y.next,y.next=s),p.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Il(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(m(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Il(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ln(t,n),o=Ye(o),r=r(o),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,o=ot(r,t.pendingProps),o=ot(r.type,o),Us(e,t,r,o,n);case 15:return Hs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),fo(e,t),t.tag=1,Ie(r)?(e=!0,Qr(t)):e=!1,Ln(t,n),Is(t,r,o),Yl(t,r,o,n),Xl(null,t,r,!0,e,n);case 19:return Gs(e,t,n);case 22:return Bs(e,t,n)}throw Error(m(156,t.tag))};function wu(e,t){return Xi(e,t)}function Td(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Td(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nd(e){if(typeof e=="function")return vi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")vi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case _e:return sn(n.children,o,l,t);case Je:i=8,o|=8;break;case Pt:return e=qe(12,n,t,o|2),e.elementType=Pt,e.lanes=l,e;case ze:return e=qe(13,n,t,o),e.elementType=ze,e.lanes=l,e;case et:return e=qe(19,n,t,o),e.elementType=et,e.lanes=l,e;case le:return Co(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:i=10;break e;case Yt:i=9;break e;case ut:i=11;break e;case ct:i=14;break e;case je:i=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=qe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function sn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=qe(22,e,r,t),e.elementType=le,e.lanes=n,e.stateNode={isHidden:!1},e}function wi(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function ki(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ld(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Si(e,t,n,r,o,l,i,a,s){return e=new Ld(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=qe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(l),e}function Pd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ku(e){if(!e)return zt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Ya(e,n,t)}return t}function Su(e,t,n,r,o,l,i,a,s){return e=Si(n,r,!0,e,o,l,i,a,s),e.context=ku(null),n=e.current,r=Pe(),o=Vt(n),l=Et(r,o),l.callback=t??null,Ut(n,l,o),e.current.lanes=o,Hn(e,o,r),Ae(e,r),e}function To(e,t,n,r){var o=t.current,l=Pe(),i=Vt(o);return n=ku(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(o,t,i),e!==null&&(at(e,o,i,l),to(e,o,i)),i}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xi(e,t){xu(e,t),(e=e.alternate)&&xu(e,t)}function _d(){return null}var Eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ei(e){this._internalRoot=e}Lo.prototype.render=Ei.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));To(e,t,null,null)},Lo.prototype.unmount=Ei.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){To(null,e,null,null)}),t[vt]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ia();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&ua(e)}};function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cu(){}function jd(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var p=No(i);l.call(p)}}var i=Su(t,r,e,0,null,!1,!1,"",Cu);return e._reactRootContainer=i,e[vt]=i.current,tr(e.nodeType===8?e.parentNode:e),on(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var p=No(s);a.call(p)}}var s=Si(e,0,!1,null,null,!1,!1,"",Cu);return e._reactRootContainer=s,e[vt]=s.current,tr(e.nodeType===8?e.parentNode:e),on(function(){To(t,s,n,r)}),s}function _o(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=No(i);a.call(s)}}To(t,i,e,o)}else i=jd(n,t,e,o,r);return No(i)}oa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Yo(t,n|1),Ae(t,ae()),(F&6)===0&&(In=ae()+500,bt()))}break;case 13:on(function(){var r=xt(e,1);if(r!==null){var o=Pe();at(r,e,1,o)}}),xi(e,1)}},Go=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Pe();at(t,e,134217728,n)}xi(e,134217728)}},la=function(e){if(e.tag===13){var t=Vt(e),n=xt(e,t);if(n!==null){var r=Pe();at(n,e,t,r)}xi(e,t)}},ia=function(){return $},aa=function(e,t){var n=$;try{return $=e,t()}finally{$=n}},Ho=function(e,t,n){switch(t){case"input":if(Oo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Jr(r);if(!o)throw Error(m(90));Mi(r),Oo(r,o)}}}break;case"textarea":Di(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Ji=hi,$i=on;var Md={usingClientEntryPoint:!1,Events:[or,wn,Jr,Wi,Vi,hi]},vr={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Id={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ki(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||_d,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{Nr=jo.inject(Id),dt=jo}catch{}}return De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md,De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ci(t))throw Error(m(200));return Pd(e,t,null,n)},De.createRoot=function(e,t){if(!Ci(e))throw Error(m(299));var n=!1,r="",o=Eu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Si(e,1,!1,null,null,n,!1,r,o),e[vt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Ei(t)},De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Ki(t),e=e===null?null:e.stateNode,e},De.flushSync=function(e){return on(e)},De.hydrate=function(e,t,n){if(!Po(t))throw Error(m(200));return _o(null,e,t,!0,n)},De.hydrateRoot=function(e,t,n){if(!Ci(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Eu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Su(t,null,e,1,n??null,o,!1,l,i),e[vt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Lo(t)},De.render=function(e,t,n){if(!Po(t))throw Error(m(200));return _o(null,e,t,!1,n)},De.unmountComponentAtNode=function(e){if(!Po(e))throw Error(m(40));return e._reactRootContainer?(on(function(){_o(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1},De.unstable_batchedUpdates=hi,De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Po(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return _o(e,t,n,!1,r)},De.version="18.3.1-next-f1338f8080-20240426",De}var Iu;function Ud(){if(Iu)return Li.exports;Iu=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(_){console.error(_)}}return k(),Li.exports=Fd(),Li.exports}var Ou;function Hd(){if(Ou)return Mo;Ou=1;var k=Ud();return Mo.createRoot=k.createRoot,Mo.hydrateRoot=k.hydrateRoot,Mo}var Bd=Hd(),Nt=ji();function Wd({modules:k,activeModule:_,setActiveModule:m}){return P.jsx("aside",{className:"fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto",children:P.jsxs("div",{className:"p-4",children:[P.jsx("h2",{className:"text-sm text-gray-500 dark:text-gray-400 mb-3",children:"Learning Modules"}),P.jsx("nav",{className:"space-y-1",children:k.map((b,R)=>P.jsx("button",{onClick:()=>m(R),className:`w-full text-left px-4 py-3 rounded-lg transition-all ${_===R?"bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("span",{className:`text-xs px-2 py-1 rounded ${_===R?"bg-white/20":"bg-gray-200 dark:bg-gray-700"}`,children:R+1}),P.jsx("span",{className:"text-sm",children:b.title})]})},R))})]})})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=k=>k.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jd=k=>k.replace(/^([A-Z])|[\s-_]+(\w)/g,(_,m,b)=>b?b.toUpperCase():m.toLowerCase()),Ru=k=>{const _=Jd(k);return _.charAt(0).toUpperCase()+_.slice(1)},zu=(...k)=>k.filter((_,m,b)=>!!_&&_.trim()!==""&&b.indexOf(_)===m).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Nt.forwardRef(({color:k="currentColor",size:_=24,strokeWidth:m=2,absoluteStrokeWidth:b,className:R="",children:W,iconNode:ue,...ce},V)=>Nt.createElement("svg",{ref:V,...$d,width:_,height:_,stroke:k,strokeWidth:b?Number(m)*24/Number(_):m,className:zu("lucide",R),...ce},[...ue.map(([ve,me])=>Nt.createElement(ve,me)),...Array.isArray(W)?W:[W]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=(k,_)=>{const m=Nt.forwardRef(({className:b,...R},W)=>Nt.createElement(Qd,{ref:W,iconNode:_,className:zu(`lucide-${Vd(Ru(k))}`,`lucide-${k}`,b),...R}));return m.displayName=Ru(k),m};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Gd=Lt("check",Yd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],qd=Lt("chevron-down",Kd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Zd=Lt("chevron-up",Xd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],tf=Lt("code",ef);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],rf=Lt("copy",nf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],lf=Lt("lightbulb",of);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],sf=Lt("moon",af);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],cf=Lt("sparkles",uf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ff=Lt("sun",df);function Au({code:k}){const[_,m]=Nt.useState(!1),b=()=>{navigator.clipboard.writeText(k),m(!0),setTimeout(()=>m(!1),2e3)};return P.jsxs("div",{className:"relative group",children:[P.jsx("button",{onClick:b,className:"absolute top-3 right-3 p-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10",children:_?P.jsx(Gd,{className:"w-4 h-4 text-green-400"}):P.jsx(rf,{className:"w-4 h-4"})}),P.jsx("pre",{className:"bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto",children:P.jsx("code",{className:"text-sm",children:k})})]})}function pf({topic:k}){const[_,m]=Nt.useState(!1);return P.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl",children:[P.jsxs("button",{onClick:()=>m(!_),className:"w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",children:[P.jsx("h3",{className:"text-gray-900 dark:text-white",children:k.title}),_?P.jsx(Zd,{className:"w-5 h-5 text-gray-500"}):P.jsx(qd,{className:"w-5 h-5 text-gray-500"})]}),_&&P.jsxs("div",{className:"px-6 pb-6 space-y-4",children:[P.jsx("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500",children:P.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:k.definition})}),k.example&&P.jsxs("div",{className:"p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500",children:[P.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[P.jsx(lf,{className:"w-5 h-5 text-purple-600 dark:text-purple-400"}),P.jsx("p",{className:"text-purple-800 dark:text-purple-300",children:"Real-World Example"})]}),P.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:k.example})]}),k.code&&P.jsx(Au,{code:k.code}),k.subtopics&&k.subtopics.length>0&&P.jsx("div",{className:"space-y-3 mt-4",children:k.subtopics.map((b,R)=>P.jsxs("div",{className:"pl-4 border-l-2 border-gray-300 dark:border-gray-600",children:[P.jsx("h4",{className:"text-gray-800 dark:text-gray-200 mb-2",children:b.title}),P.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-2",children:b.definition}),b.code&&P.jsx(Au,{code:b.code})]},R))})]})]})}function mf({module:k}){return P.jsxs("div",{className:"max-w-5xl mx-auto",children:[P.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white shadow-xl",children:[P.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[P.jsx(cf,{className:"w-6 h-6"}),P.jsx("h1",{className:"text-white",children:k.title})]}),P.jsx("p",{className:"text-white/90 text-lg",children:k.description})]}),P.jsx("div",{className:"space-y-6",children:k.topics.map((_,m)=>P.jsx(pf,{topic:_},m))})]})}function hf({isDarkMode:k,setIsDarkMode:_}){return P.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700",children:P.jsxs("div",{className:"px-8 py-4 flex items-center justify-between",children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg",children:P.jsx(tf,{className:"w-6 h-6 text-white"})}),P.jsxs("div",{children:[P.jsx("h1",{className:"text-gray-900 dark:text-white",children:"JavaScript Learning Hub"}),P.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Your Journey to Becoming a JS Wizard! 🧙‍♂️"})]})]}),P.jsx("button",{onClick:()=>_(!k),className:"p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",children:k?P.jsx(ff,{className:"w-5 h-5 text-yellow-400"}):P.jsx(sf,{className:"w-5 h-5 text-gray-700"})})]})})}const Du=[{title:"JavaScript Basics",description:"Think of this as learning the alphabet before writing stories.",topics:[{title:"What is JavaScript?",definition:"JavaScript is a programming language that makes websites interactive and fun! It's like magic that brings web pages to life - making buttons work, animations move, and games playable.",example:"Just like how a remote control makes your TV change channels, JavaScript makes websites respond when you click buttons or type in forms!",code:`// This is JavaScript - it can show messages!
console.log("Hello, World!");
console.log("I'm learning JavaScript!");`},{title:"How JavaScript Runs",definition:"JavaScript runs in two main places: in your web browser (like Chrome or Firefox) and on computers using Node.js. When you visit a website, the browser reads the JavaScript code and makes things happen!",example:"Think of your browser as a robot that reads JavaScript instructions and follows them to make the webpage do cool things!",code:`// The browser runs this code and shows the result
alert("Welcome to my website!");`},{title:"Adding JavaScript to HTML",definition:"There are three ways to add JavaScript to your web page: directly in HTML tags (inline), inside the HTML file (internal), or in a separate file (external).",example:"It's like adding toppings to a pizza - you can sprinkle them on top, mix them in, or keep them in separate containers!",subtopics:[{title:"Inline JavaScript",definition:"Writing JavaScript directly inside HTML tags.",code:`<button onclick="alert('You clicked me!')">Click Me</button>`},{title:"Internal JavaScript",definition:"Writing JavaScript inside <script> tags in your HTML file.",code:`<script>
  console.log("This JavaScript is inside the HTML!");
<\/script>`},{title:"External JavaScript",definition:"Writing JavaScript in a separate .js file and linking it to your HTML.",code:`<!-- In your HTML file -->
<script src="script.js"><\/script>

// In script.js file
console.log("This comes from an external file!");`}]},{title:"console.log() and Debugging",definition:"console.log() is like a magic window that lets you see what's happening in your code. It prints messages to the browser's console, which helps you find and fix problems (bugs)!",example:"Imagine you're baking cookies and you check them every few minutes. console.log() is like checking your code to see if everything is working correctly!",code:`// Using console.log to see what's happening
console.log("Starting my program...");
let age = 10;
console.log("My age is:", age);
console.log("Program finished!");`}]},{title:"Variables & Data Types",description:"Where JavaScript learns to remember things.",topics:[{title:"Variables: var, let, const",definition:"Variables are like labeled boxes where you can store information. 'let' is for things that can change, 'const' is for things that stay the same, and 'var' is the old way (we mostly use let and const now).",example:"Think of variables like labeled jars in your kitchen - one jar for 'Sugar' (const, because the label doesn't change), one for 'Cookies Left' (let, because the number changes when you eat them)!",code:`// Using let for values that can change
let score = 0;
score = 10;  // Can change it!

// Using const for values that stay the same
const myName = "Alex";
// myName = "Bob";  // ERROR! Can't change const

// Using var (old way, avoid using it)
var oldWay = "I'm the old method";`},{title:"Rules for Naming Variables",definition:"Variables must start with a letter, $ or _. They can't have spaces or special characters. Use meaningful names so you remember what they store!",example:"Just like you can't name your pet '123' or 'My Dog!', variables have naming rules too!",code:`// Good variable names
let playerScore = 100;
let userName = "Sam";
let _privateData = "secret";
let $price = 9.99;

// Bad variable names (these will cause errors!)
// let 123abc = "wrong";  // Can't start with number
// let my-score = 50;     // Can't use dash
// let my score = 50;     // Can't have spaces`},{title:"Data Types - Primitive Types",definition:"Data types are like different kinds of toys - numbers for math, strings for text, booleans for true/false, null for 'empty on purpose', and undefined for 'not set yet'.",example:"Like having different boxes for different toys - one for action figures (strings), one for marbles (numbers), and one for yes/no cards (booleans)!",subtopics:[{title:"String (Text)",definition:"Strings are text wrapped in quotes. Use them for words, sentences, or any text!",code:`let name = "Alice";
let message = 'Hello, world!';
let sentence = "I'm 10 years old!";
console.log(name);  // Shows: Alice`},{title:"Number",definition:"Numbers are for math! They can be whole numbers or decimals.",code:`let age = 10;
let price = 9.99;
let temperature = -5;
console.log(age + 5);  // Shows: 15`},{title:"Boolean (True/False)",definition:"Booleans are like switches - either true (on) or false (off).",code:`let isRaining = true;
let isSunny = false;
let hasFinishedHomework = true;
console.log(isRaining);  // Shows: true`},{title:"Null & Undefined",definition:"Null means 'empty on purpose', undefined means 'not set yet'.",code:`let emptyBox = null;  // Intentionally empty
let notSetYet;  // undefined (no value given)
console.log(emptyBox);      // null
console.log(notSetYet);     // undefined`}]},{title:"Data Types - Non-Primitive Types",definition:"Non-primitive types can hold multiple values! Objects store related data together, and arrays store lists of items.",example:"Like a backpack (object) that holds your pencil case, lunch box, and books (properties), or a shopping list (array) with multiple items!",code:`// Array - a list of items
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);  // Shows: apple

// Object - related data together
let student = {
  name: "Sam",
  age: 10,
  grade: 5
};
console.log(student.name);  // Shows: Sam`},{title:"typeof Operator",definition:"The typeof operator tells you what type of data you have. It's like asking 'what kind of thing is this?'",example:"Like checking if something is a toy, a book, or food - typeof tells you what category your data belongs to!",code:`console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (weird!)
console.log(typeof [1, 2, 3]);   // "object"`},{title:"Type Conversion & Coercion",definition:"Type conversion is when you change data from one type to another on purpose. Type coercion is when JavaScript does it automatically (sometimes in surprising ways!)",example:"Like turning ice into water (conversion) or ice melting on its own on a hot day (coercion)!",code:`// Type Conversion (you do it)
let num = "123";
let realNumber = Number(num);  // Convert string to number
console.log(realNumber + 10);  // 133

let age = 10;
let ageText = String(age);  // Convert number to string
console.log(ageText + "10");  // "1010" (combines text)

// Type Coercion (JavaScript does it)
console.log("5" + 3);   // "53" (makes number a string)
console.log("5" - 3);   // 2 (makes string a number)
console.log(true + 1);  // 2 (true becomes 1)`}]},{title:"Operators",description:"The math and logic toolkit.",topics:[{title:"Arithmetic Operators",definition:"These operators do math! Addition (+), subtraction (-), multiplication (*), division (/), remainder (%), and exponentiation (**).",example:"Just like using a calculator! You can add your pocket money, subtract what you spent, multiply to find totals, and divide to share with friends!",code:`let a = 10;
let b = 3;

console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7 (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.333... (division)
console.log(a % b);   // 1 (remainder)
console.log(a ** b);  // 1000 (10 to power of 3)`},{title:"Assignment Operators",definition:"These operators give values to variables. The = sign assigns a value, and you can combine it with math operators for shortcuts!",example:"Like filling a piggy bank! = puts money in, += adds more, -= takes some out!",code:`let score = 10;       // Assign 10
score += 5;          // Same as: score = score + 5
console.log(score);  // 15

score -= 3;          // Same as: score = score - 3
console.log(score);  // 12

score *= 2;          // Same as: score = score * 2
console.log(score);  // 24

score /= 4;          // Same as: score = score / 4
console.log(score);  // 6`},{title:"Comparison Operators",definition:"These compare two values and give you true or false. == checks if values are similar, === checks if they're exactly the same (including type)!",example:"Like comparing two toys - are they the same color? The same size? Exactly the same toy?",code:`console.log(5 == "5");    // true (same value, different type)
console.log(5 === "5");   // false (different types!)
console.log(5 === 5);     // true (exactly same)

console.log(10 > 5);      // true (greater than)
console.log(10 < 5);      // false (less than)
console.log(10 >= 10);    // true (greater or equal)
console.log(5 != 10);     // true (not equal)
console.log(5 !== "5");   // true (not equal, strict)`},{title:"Logical Operators",definition:"These combine true/false values! AND (&&) means both must be true, OR (||) means at least one must be true, NOT (!) flips true to false and vice versa.",example:"Like making decisions: 'I'll go outside if it's sunny AND I've finished homework' or 'I'll have ice cream OR cake' or 'It's NOT raining'!",code:`let isSunny = true;
let hasHomework = false;

// AND - both must be true
console.log(isSunny && hasHomework);  // false

// OR - at least one must be true
console.log(isSunny || hasHomework);  // true

// NOT - flips the value
console.log(!isSunny);                // false
console.log(!hasHomework);            // true

// Combining them
let canGoOut = isSunny && !hasHomework;
console.log(canGoOut);  // true`},{title:"Unary & Ternary Operators",definition:"Unary operators work with one value (like ++ to increase by 1). Ternary operator is a shortcut for if-else - it's like asking a question and choosing between two answers!",example:"Unary is like pressing a '+1' button. Ternary is like asking 'Is it raining? If yes, take umbrella, if no, wear sunglasses!'",code:`// Unary operators
let count = 5;
count++;         // Increase by 1
console.log(count);  // 6

count--;         // Decrease by 1
console.log(count);  // 5

// Ternary operator: condition ? ifTrue : ifFalse
let age = 10;
let ticket = age < 12 ? "child ticket" : "adult ticket";
console.log(ticket);  // "child ticket"

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade);  // "B"`}]},{title:"Control Flow",description:"Teaching JavaScript how to choose paths.",topics:[{title:"if, else, else if",definition:"These help your code make decisions! 'if' checks a condition, 'else' handles when it's false, and 'else if' checks another condition.",example:"Like deciding what to wear: IF it's raining, wear a raincoat, ELSE IF it's cold, wear a jacket, ELSE wear a t-shirt!",code:`let temperature = 20;

if (temperature > 30) {
  console.log("It's hot! 🌞");
} else if (temperature > 20) {
  console.log("It's nice! 😊");
} else if (temperature > 10) {
  console.log("It's cool! 🧥");
} else {
  console.log("It's cold! 🥶");
}

// Another example
let score = 85;
if (score >= 90) {
  console.log("Grade: A - Excellent!");
} else if (score >= 80) {
  console.log("Grade: B - Great!");
} else {
  console.log("Keep practicing!");
}`},{title:"switch Statement",definition:"Switch is like a menu with many choices. It checks one value against many possible options and runs the matching code.",example:"Like choosing from a restaurant menu - if you pick option 1, you get pizza; option 2, you get pasta; option 3, you get salad!",code:`let day = 3;

switch (day) {
  case 1:
    console.log("Monday - School day! 📚");
    break;
  case 2:
    console.log("Tuesday - Math class! 🔢");
    break;
  case 3:
    console.log("Wednesday - Art class! 🎨");
    break;
  case 6:
  case 7:
    console.log("Weekend - Play time! 🎮");
    break;
  default:
    console.log("Another school day!");
}

// Another example
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("🍎 Apples are crunchy!");
    break;
  case "banana":
    console.log("🍌 Bananas are sweet!");
    break;
  default:
    console.log("I don't know that fruit!");
}`},{title:"Truthy & Falsy Values",definition:"In JavaScript, some values act like 'true' (truthy) and some act like 'false' (falsy) when used in conditions. Falsy values are: false, 0, empty string '', null, undefined, and NaN.",example:"Like checking if your toy box has toys - an empty box (falsy) versus a box with toys (truthy)!",code:`// Falsy values (act like false)
if (0) {
  console.log("This won't run");
}

if ("") {
  console.log("This won't run either");
}

// Truthy values (act like true)
if ("hello") {
  console.log("This WILL run! 🎉");
}

if (42) {
  console.log("This WILL run too! 🎉");
}

// Practical example
let userName = "";
if (userName) {
  console.log("Welcome, " + userName);
} else {
  console.log("Please enter your name!");
}`}]},{title:"Loops & Iteration",description:"When repetition becomes powerful.",topics:[{title:"for Loop",definition:"A for loop repeats code a specific number of times. It has three parts: starting point, stopping condition, and step (how much to change each time).",example:"Like doing jumping jacks - start at 1, count to 10, add 1 each time. Jump, count, jump, count, until you reach 10!",code:`// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// Shows: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

// Print even numbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// Shows: 2, 4, 6, 8, 10

// Countdown
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off! 🚀");`},{title:"while Loop",definition:"A while loop keeps repeating as long as a condition is true. It's like saying 'keep doing this WHILE something is true'.",example:"Like eating cookies while there are cookies left in the jar - you keep eating (looping) while cookies exist!",code:`// Count to 5 with while
let count = 1;
while (count <= 5) {
  console.log("Count: " + count);
  count++;
}

// Keep doubling until over 100
let number = 1;
while (number < 100) {
  console.log(number);
  number = number * 2;
}
// Shows: 1, 2, 4, 8, 16, 32, 64

// Be careful - avoid infinite loops!
// while (true) {
//   console.log("This never stops! 😱");
// }`},{title:"do...while Loop",definition:"Similar to while, but it ALWAYS runs at least once before checking the condition. It does first, then checks!",example:"Like trying a new food - you try it once (do), then decide if you want more (while)!",code:`// Runs at least once
let x = 10;
do {
  console.log("x is: " + x);
  x++;
} while (x < 5);
// Shows "x is: 10" even though 10 is not < 5!

// Compare with regular while
let y = 10;
while (y < 5) {
  console.log("y is: " + y);  // This never runs!
  y++;
}

// Useful for user input simulation
let attempts = 0;
do {
  console.log("Try again!");
  attempts++;
} while (attempts < 3);`},{title:"break & continue",definition:"'break' stops the loop completely and exits. 'continue' skips the current round and moves to the next one.",example:"'break' is like stopping a game completely when you win. 'continue' is like skipping your turn but the game goes on!",code:`// Using break - stop when found
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Found 5! Stopping!");
    break;  // Exit the loop
  }
  console.log(i);
}
// Shows: 1, 2, 3, 4, Found 5! Stopping!

// Using continue - skip certain numbers
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;  // Skip 3
  }
  console.log(i);
}
// Shows: 1, 2, 4, 5 (skips 3)

// Skip even numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // Skip even numbers
  }
  console.log(i + " is odd");
}`},{title:"Nested Loops",definition:"A nested loop is a loop inside another loop! The inner loop completes all its rounds for each round of the outer loop.",example:"Like a clock - for every hour (outer loop), the minute hand goes around 60 times (inner loop)!",code:`// Print a pattern
for (let i = 1; i <= 3; i++) {
  console.log("Outer loop: " + i);
  for (let j = 1; j <= 3; j++) {
    console.log("  Inner loop: " + j);
  }
}

// Multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " × " + j + " = " + (i * j));
  }
}

// Create a grid pattern
for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= 3; col++) {
    line += "* ";
  }
  console.log(line);
}
// Shows:
// * * *
// * * *
// * * *`}]},{title:"Functions",description:"The reusable building blocks.",topics:[{title:"Function Declaration",definition:"A function is a reusable block of code that performs a task. You create (declare) it once and can use it many times!",example:"Like a recipe - write it once, use it whenever you want to make that dish!",code:`// Creating a function
function sayHello() {
  console.log("Hello, friend! 👋");
}

// Using the function
sayHello();  // Shows: Hello, friend! 👋
sayHello();  // Can use it again!

// Function with a task
function celebrateBirthday() {
  console.log("🎉 Happy Birthday!");
  console.log("🎂 Make a wish!");
  console.log("🎈 Party time!");
}

celebrateBirthday();`},{title:"Parameters & Arguments",definition:"Parameters are like blank spaces in a function that you fill in when you use it. Arguments are the actual values you provide!",example:"Like a greeting card template with a blank for the name - the blank is the parameter, and 'Alex' is the argument you write in!",code:`// Function with parameters
function greet(name) {
  console.log("Hello, " + name + "! 😊");
}

// Using with arguments
greet("Alex");     // Hello, Alex! 😊
greet("Sam");      // Hello, Sam! 😊
greet("Jordan");   // Hello, Jordan! 😊

// Multiple parameters
function addNumbers(a, b) {
  let sum = a + b;
  console.log(a + " + " + b + " = " + sum);
}

addNumbers(5, 3);   // 5 + 3 = 8
addNumbers(10, 20); // 10 + 20 = 30

// Fun example
function createStory(hero, villain) {
  console.log(hero + " defeated " + villain + "!");
}

createStory("Superman", "Lex Luthor");`},{title:"Return Statement",definition:"The 'return' statement sends a value back from the function. It's like getting an answer from a calculator!",example:"Like asking a friend to calculate something and they give you the answer back!",code:`// Function that returns a value
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("The answer is: " + result);  // 8

// Using return value directly
console.log(add(10, 20));  // 30

// Function with decision
function isOldEnough(age) {
  if (age >= 13) {
    return "You can have social media!";
  } else {
    return "Wait a few more years!";
  }
}

console.log(isOldEnough(10));  // Wait a few more years!
console.log(isOldEnough(14));  // You can have social media!

// Math function
function square(number) {
  return number * number;
}

console.log(square(5));   // 25
console.log(square(10));  // 100`},{title:"Arrow Functions",definition:"Arrow functions are a shorter way to write functions using =>. They're like function shortcuts!",example:"Like writing 'thanks' instead of 'thank you very much' - shorter but means the same thing!",code:`// Regular function
function sayHi(name) {
  return "Hi, " + name;
}

// Arrow function - shorter!
const sayHello = (name) => {
  return "Hello, " + name;
};

// Even shorter (one line)
const greet = (name) => "Hey, " + name;

console.log(greet("Alex"));  // Hey, Alex

// Arrow function with math
const double = (num) => num * 2;
console.log(double(5));  // 10

// Multiple parameters
const add = (a, b) => a + b;
console.log(add(3, 7));  // 10

// No parameters
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());`},{title:"Default Parameters",definition:"Default parameters give a parameter a backup value in case you don't provide one. It's like a safety net!",example:"Like ordering a sandwich - if you don't say what bread you want, they give you white bread by default!",code:`// Function with default parameter
function greet(name = "friend") {
  console.log("Hello, " + name + "!");
}

greet("Alex");    // Hello, Alex!
greet();          // Hello, friend! (uses default)

// Multiple defaults
function createProfile(name = "User", age = 10, country = "USA") {
  console.log(name + " is " + age + " years old from " + country);
}

createProfile("Sam", 12, "Canada");  // Sam is 12 years old from Canada
createProfile("Alex");                // Alex is 10 years old from USA
createProfile();                      // User is 10 years old from USA

// Useful for math
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 3));  // 15
console.log(multiply(5));     // 5 (uses default b = 1)`},{title:"Callback Functions",definition:"A callback is a function that you pass to another function. The other function will 'call it back' when it's ready!",example:"Like giving your phone number to a friend and saying 'call me back when you get home' - you give them the way to contact you, they use it later!",code:`// Simple callback example
function doHomework(subject, callback) {
  console.log("Starting " + subject + " homework...");
  callback();
}

function finished() {
  console.log("Homework done! Time to play! 🎮");
}

doHomework("math", finished);

// Callback with arrow function
doHomework("reading", () => {
  console.log("All done! 📚");
});

// Callback with parameters
function calculate(a, b, operation) {
  let result = operation(a, b);
  console.log("Result: " + result);
}

calculate(5, 3, (x, y) => x + y);  // Result: 8
calculate(5, 3, (x, y) => x * y);  // Result: 15`}]},{title:"Arrays",description:"JavaScript's favorite container.",topics:[{title:"Creating & Using Arrays",definition:"An array is a special variable that can hold multiple values in order, like a list. Each item has a position number (index) starting from 0!",example:"Like a playlist of songs, a shopping list, or a lineup of your favorite toys - arrays keep things in order!",code:`// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, "world"];

// Accessing items (index starts at 0!)
console.log(fruits[0]);  // "apple" (first item)
console.log(fruits[1]);  // "banana" (second item)
console.log(fruits[2]);  // "orange" (third item)

// Changing items
fruits[1] = "grape";
console.log(fruits);  // ["apple", "grape", "orange"]

// Array length
console.log(fruits.length);  // 3 items

// Last item trick
console.log(fruits[fruits.length - 1]);  // "orange"`},{title:"Array Methods - Adding & Removing",definition:"Arrays have special commands (methods) to add or remove items. push/pop work on the end, shift/unshift work on the beginning!",example:"Like a line of people - push adds to the back, unshift adds to the front, pop removes from back, shift removes from front!",code:`let toys = ["car", "doll", "ball"];

// push - add to end
toys.push("robot");
console.log(toys);  // ["car", "doll", "ball", "robot"]

// pop - remove from end
let removed = toys.pop();
console.log(removed);  // "robot"
console.log(toys);     // ["car", "doll", "ball"]

// unshift - add to beginning
toys.unshift("puzzle");
console.log(toys);  // ["puzzle", "car", "doll", "ball"]

// shift - remove from beginning
let first = toys.shift();
console.log(first);  // "puzzle"
console.log(toys);   // ["car", "doll", "ball"]`},{title:"Array Methods - slice & splice",definition:"slice copies a portion of an array without changing it. splice can add, remove, or replace items IN the array (it changes it!)",example:"slice is like taking a photo of part of your toy collection. splice is like actually rearranging the toys on your shelf!",code:`let colors = ["red", "blue", "green", "yellow", "purple"];

// slice - copy part (doesn't change original)
let someColors = colors.slice(1, 3);
console.log(someColors);  // ["blue", "green"]
console.log(colors);      // Still all 5 colors

// splice - change the array
// Remove 2 items starting at index 1
let removed = colors.splice(1, 2);
console.log(removed);  // ["blue", "green"]
console.log(colors);   // ["red", "yellow", "purple"]

// Add items with splice
colors.splice(1, 0, "orange", "pink");
console.log(colors);  // ["red", "orange", "pink", "yellow", "purple"]

// Replace items
colors.splice(1, 2, "black");
console.log(colors);  // ["red", "black", "yellow", "purple"]`},{title:"Array Methods - Others",definition:"More useful array methods: concat joins arrays, join makes a string, indexOf finds positions, includes checks if something exists!",example:"Like tools in a toolbox - each method helps you do something different with your arrays!",code:`let fruits = ["apple", "banana", "orange"];
let veggies = ["carrot", "broccoli"];

// concat - combine arrays
let food = fruits.concat(veggies);
console.log(food);  
// ["apple", "banana", "orange", "carrot", "broccoli"]

// join - make a string
let fruitString = fruits.join(", ");
console.log(fruitString);  // "apple, banana, orange"

// indexOf - find position
console.log(fruits.indexOf("banana"));  // 1
console.log(fruits.indexOf("grape"));   // -1 (not found)

// includes - check if exists
console.log(fruits.includes("apple"));  // true
console.log(fruits.includes("grape"));  // false

// reverse - flip the order
fruits.reverse();
console.log(fruits);  // ["orange", "banana", "apple"]`},{title:"Looping Through Arrays",definition:"You can use loops to go through each item in an array one by one. It's the most common use of loops!",example:"Like checking each present under a Christmas tree one at a time!",code:`let animals = ["dog", "cat", "bird", "fish"];

// Using for loop
for (let i = 0; i < animals.length; i++) {
  console.log((i + 1) + ". " + animals[i]);
}
// 1. dog
// 2. cat
// 3. bird
// 4. fish

// Using for...of loop (easier!)
for (let animal of animals) {
  console.log("I have a " + animal);
}

// forEach method
animals.forEach((animal, index) => {
  console.log("Animal #" + (index + 1) + ": " + animal);
});`}]},{title:"Objects",description:"Where data gets structured.",topics:[{title:"Creating & Using Objects",definition:"Objects store related information together using key-value pairs. Each piece of information has a name (key) and a value!",example:"Like a ID card that has your name, age, grade, and favorite color - all information about YOU in one place!",code:`// Creating an object
let student = {
  name: "Alex",
  age: 10,
  grade: 5,
  favoriteSubject: "Math"
};

// Accessing properties - dot notation
console.log(student.name);  // "Alex"
console.log(student.age);   // 10

// Accessing properties - bracket notation
console.log(student["grade"]);  // 5

// Useful when key has spaces or is in a variable
let key = "favoriteSubject";
console.log(student[key]);  // "Math"

// Real example
let myPet = {
  name: "Buddy",
  type: "dog",
  age: 3,
  color: "brown"
};

console.log(myPet.name + " is a " + myPet.color + " " + myPet.type);
// "Buddy is a brown dog"`},{title:"Adding, Updating, Deleting Properties",definition:"You can change objects after creating them! Add new properties, update existing ones, or delete properties you don't need.",example:"Like updating your profile - you can add a new hobby, change your favorite color, or remove old information!",code:`let character = {
  name: "Hero",
  level: 1,
  power: "speed"
};

// Adding new property
character.weapon = "sword";
character["score"] = 0;
console.log(character);
// { name: "Hero", level: 1, power: "speed", weapon: "sword", score: 0 }

// Updating existing property
character.level = 2;
character.score = 100;
console.log(character.level);  // 2

// Deleting property
delete character.weapon;
console.log(character);
// { name: "Hero", level: 2, power: "speed", score: 100 }`},{title:"Object Methods",definition:"Objects can have functions inside them called methods! They're actions the object can perform.",example:"Like a robot toy that has buttons - each button (method) makes it do something different!",code:`let dog = {
  name: "Max",
  age: 3,
  
  // Methods (functions in objects)
  bark: function() {
    console.log("Woof! Woof! 🐕");
  },
  
  introduce: function() {
    console.log("Hi! I'm " + this.name + " and I'm " + this.age + " years old!");
  },
  
  // Shorter way to write methods
  celebrate() {
    console.log(this.name + " is doing a happy dance! 🎉");
  }
};

// Using methods
dog.bark();         // Woof! Woof! 🐕
dog.introduce();    // Hi! I'm Max and I'm 3 years old!
dog.celebrate();    // Max is doing a happy dance! 🎉`},{title:"this Keyword",definition:"Inside an object's method, 'this' refers to the object itself. It's like saying 'my own' or 'this object's' property!",example:"Like when you say 'my name' instead of saying your name - 'this' refers to the current object!",code:`let player = {
  name: "Sam",
  score: 0,
  lives: 3,
  
  addPoints: function(points) {
    this.score = this.score + points;
    console.log(this.name + " now has " + this.score + " points!");
  },
  
  loseLife: function() {
    this.lives--;
    if (this.lives > 0) {
      console.log(this.lives + " lives remaining!");
    } else {
      console.log("Game Over!");
    }
  }
};

player.addPoints(10);  // Sam now has 10 points!
player.addPoints(25);  // Sam now has 35 points!
player.loseLife();     // 2 lives remaining!`},{title:"Nested Objects",definition:"Objects can contain other objects inside them! It's like boxes within boxes, organizing related information together.",example:"Like a backpack (object) that contains a pencil case (another object), which contains pencils and erasers (more properties)!",code:`let school = {
  name: "Sunny Elementary",
  address: {
    street: "123 Main St",
    city: "Springfield",
    zipCode: "12345"
  },
  principal: {
    name: "Ms. Johnson",
    age: 45,
    office: "Room 101"
  }
};

// Accessing nested properties
console.log(school.name);  // "Sunny Elementary"
console.log(school.address.city);  // "Springfield"
console.log(school.principal.name);  // "Ms. Johnson"

// Another example
let user = {
  username: "alex123",
  profile: {
    firstName: "Alex",
    lastName: "Smith",
    hobbies: ["gaming", "reading", "soccer"]
  }
};

console.log(user.profile.firstName);  // "Alex"
console.log(user.profile.hobbies[0]);  // "gaming"`}]},{title:"Strings & Numbers",description:"Polishing text and numbers.",topics:[{title:"String Methods - Basics",definition:"Strings have built-in methods to work with text. You can change case, get length, and extract parts!",example:"Like text editing tools - making text bigger or smaller, copying parts, or counting letters!",code:`let message = "Hello, World!";

// Length - count characters
console.log(message.length);  // 13

// Change case
console.log(message.toUpperCase());  // "HELLO, WORLD!"
console.log(message.toLowerCase());  // "hello, world!"

let name = "  Alex  ";
// Remove spaces from start and end
console.log(name.trim());  // "Alex"

// Check if string includes something
console.log(message.includes("World"));  // true
console.log(message.includes("Bye"));    // false

// Check how string starts or ends
console.log(message.startsWith("Hello"));  // true
console.log(message.endsWith("!"));        // true`},{title:"String Methods - Extracting",definition:"You can get parts of a string using slice, substring, or charAt. It's like cutting a piece of a ribbon!",example:"Like cutting a sandwich - you can take a slice from the middle, from the start, or just one bite!",code:`let text = "JavaScript is awesome!";

// charAt - get one character
console.log(text.charAt(0));   // "J"
console.log(text.charAt(4));   // "S"

// slice - get a portion
console.log(text.slice(0, 10));   // "JavaScript"
console.log(text.slice(14));      // "awesome!"
console.log(text.slice(-8));      // "awesome!" (from end)

// substring - similar to slice
console.log(text.substring(0, 10));  // "JavaScript"

// split - break into array
let words = text.split(" ");
console.log(words);  // ["JavaScript", "is", "awesome!"]

let letters = "a,b,c,d".split(",");
console.log(letters);  // ["a", "b", "c", "d"]`},{title:"String Methods - Changing",definition:"Methods to replace text, repeat it, or add padding. Remember: strings don't change - these methods create NEW strings!",example:"Like making a copy of your homework with corrections - the original stays the same, you get a new version!",code:`let sentence = "I love cats. Cats are cute.";

// replace - change first match
console.log(sentence.replace("cats", "dogs"));
// "I love dogs. Cats are cute."

// replaceAll - change all matches
console.log(sentence.replaceAll("cats", "dogs"));
console.log(sentence.replaceAll("Cats", "Dogs"));
// "I love dogs. Dogs are cute."

// repeat - repeat text
console.log("Ha".repeat(3));  // "HaHaHa"
console.log("🎉".repeat(5));  // "🎉🎉🎉🎉🎉"

// padStart - add padding to start
let num = "5";
console.log(num.padStart(3, "0"));  // "005"

// padEnd - add padding to end
console.log(num.padEnd(3, "0"));  // "500"`},{title:"Template Literals",definition:"Template literals use backticks (`) and let you insert variables directly into strings using ${variable}. They also allow multi-line strings!",example:"Like Mad Libs - a story with blanks that you fill in with words!",code:`let name = "Alex";
let age = 10;
let hobby = "coding";

// Old way
console.log("My name is " + name + " and I'm " + age);

// Template literal way (easier!)
console.log(\`My name is \${name} and I'm \${age}\`);

// With calculations
let a = 5;
let b = 3;
console.log(\`\${a} + \${b} = \${a + b}\`);  // "5 + 3 = 8"

// Multi-line strings
let story = \`Once upon a time,
there was a kid named \${name}.
They loved \${hobby} and was \${age} years old.
The end!\`;

console.log(story);

// Practical use
let score = 95;
console.log(\`Your score: \${score}% - \${score >= 90 ? "Excellent!" : "Good!"}\`);`},{title:"Number Methods & Math Object",definition:"Numbers have methods too! Plus JavaScript has a Math object with useful functions for calculations and random numbers!",example:"Like a super calculator with special buttons for rounding, random numbers, and fancy math!",code:`// Number methods
let num = 3.14159;

// Convert to string
console.log(num.toString());  // "3.14159"

// Fixed decimal places
console.log(num.toFixed(2));  // "3.14"

// Math object methods
console.log(Math.round(4.7));   // 5 (round to nearest)
console.log(Math.round(4.4));   // 4
console.log(Math.floor(4.9));   // 4 (round down)
console.log(Math.ceil(4.1));    // 5 (round up)

// Random number (0 to 0.999...)
console.log(Math.random());

// Random number from 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// Random number from 1 to 6 (like a dice)
let dice = Math.floor(Math.random() * 6) + 1;
console.log("You rolled: " + dice);

// Other useful Math methods
console.log(Math.max(5, 10, 3, 8));  // 10 (biggest)
console.log(Math.min(5, 10, 3, 8));  // 3 (smallest)
console.log(Math.pow(2, 3));         // 8 (2 to power of 3)
console.log(Math.sqrt(16));          // 4 (square root)`}]},{title:"Date & Time",description:"Making JavaScript time-aware.",topics:[{title:"Date Object Basics",definition:"The Date object helps you work with dates and times. You can get the current date/time or create specific dates!",example:"Like a calendar and clock combined - it knows what day it is and what time it is!",code:`// Current date and time
let now = new Date();
console.log(now);  // Full date and time

// Specific date (month is 0-11, so 0 = January!)
let birthday = new Date(2014, 0, 15);  // Jan 15, 2014
console.log(birthday);

// From a string
let christmas = new Date("2024-12-25");
console.log(christmas);

// Get parts of the date
let today = new Date();
console.log(today.getFullYear());   // 2024
console.log(today.getMonth());      // 0-11 (0 = Jan)
console.log(today.getDate());       // Day of month (1-31)
console.log(today.getDay());        // Day of week (0-6, 0 = Sunday)
console.log(today.getHours());      // Hour (0-23)
console.log(today.getMinutes());    // Minutes (0-59)
console.log(today.getSeconds());    // Seconds (0-59)`},{title:"Setting & Formatting Dates",definition:"You can change parts of a date and format it to display the way you want!",example:"Like setting an alarm clock - you can change the hour, minute, or even the whole date!",code:`let date = new Date();

// Setting parts of the date
date.setFullYear(2025);
date.setMonth(11);  // December (remember 0-11!)
date.setDate(25);
console.log(date);  // Dec 25, 2025

// Creating a nice format
let now = new Date();
let day = now.getDate();
let month = now.getMonth() + 1;  // Add 1 because it's 0-11
let year = now.getFullYear();

console.log(\`Today is \${month}/\${day}/\${year}\`);

// Get day name
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
            "Thursday", "Friday", "Saturday"];
let dayName = days[now.getDay()];
console.log("Today is " + dayName);

// Get month name
let months = ["January", "February", "March", "April", "May", 
              "June", "July", "August", "September", "October", 
              "November", "December"];
let monthName = months[now.getMonth()];
console.log("Current month: " + monthName);`},{title:"Timers - setTimeout",definition:"setTimeout runs code once after waiting a certain number of milliseconds (1000 ms = 1 second). It's like setting a timer!",example:"Like a kitchen timer - set it for 3 seconds, and when time's up, it beeps (runs your code)!",code:`// Run code after 2 seconds
setTimeout(() => {
  console.log("2 seconds have passed! ⏰");
}, 2000);

// Countdown example
console.log("Starting countdown...");
setTimeout(() => {
  console.log("3...");
}, 1000);
setTimeout(() => {
  console.log("2...");
}, 2000);
setTimeout(() => {
  console.log("1...");
}, 3000);
setTimeout(() => {
  console.log("Blast off! 🚀");
}, 4000);

// With a function
function showMessage() {
  console.log("Time's up! ⏱️");
}

setTimeout(showMessage, 3000);  // After 3 seconds

// Cancel a timeout
let timer = setTimeout(() => {
  console.log("This won't run!");
}, 5000);

clearTimeout(timer);  // Cancel it!`},{title:"Timers - setInterval",definition:"setInterval runs code repeatedly at a regular interval (every X milliseconds). It keeps going until you stop it!",example:"Like a heartbeat or a clock ticking - it happens over and over at regular intervals!",code:`// Run every 2 seconds
let counter = 0;
let interval = setInterval(() => {
  counter++;
  console.log("Counter: " + counter);
}, 2000);

// Stop after 10 seconds
setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped!");
}, 10000);

// Clock example
let clockInterval = setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  console.log(\`\${hours}:\${minutes}:\${seconds}\`);
}, 1000);

// Countdown timer
let countdown = 10;
let countdownInterval = setInterval(() => {
  console.log(countdown);
  countdown--;
  
  if (countdown < 0) {
    clearInterval(countdownInterval);
    console.log("Done! 🎉");
  }
}, 1000);`}]},{title:"DOM (Document Object Model)",description:"Where JavaScript talks to the web page.",topics:[{title:"What is DOM?",definition:"The DOM is how JavaScript sees and controls a web page. It's like a map of all the elements (buttons, text, images) on the page that JavaScript can change!",example:"Imagine your web page is a toy room. The DOM is like a list of all the toys and where they are. JavaScript can use this list to move toys around, change them, or add new ones!",code:`// The DOM represents your HTML in JavaScript
// HTML: <h1 id="title">Hello World</h1>

// JavaScript can find and change it
let title = document.getElementById("title");
title.textContent = "Hello JavaScript!";

// Structure example
// document
//   └── html
//       ├── head
//       │   └── title
//       └── body
//           ├── h1
//           ├── p
//           └── button`},{title:"Selecting Elements",definition:"Before you can change something on the page, you need to find it! There are different ways to select elements using their id, class, or tag name.",example:"Like finding a specific book in a library - you can search by its title (id), category (class), or type (tag)!",code:`// By ID (most specific, only one element)
let header = document.getElementById("main-header");

// By class (can select multiple elements)
let buttons = document.getElementsByClassName("btn");

// By tag name (all elements of that type)
let paragraphs = document.getElementsByTagName("p");

// querySelector (uses CSS selectors, returns first match)
let firstButton = document.querySelector(".btn");
let mainTitle = document.querySelector("#title");

// querySelectorAll (returns all matches)
let allButtons = document.querySelectorAll(".btn");
let allParagraphs = document.querySelectorAll("p");

// Examples
let element = document.querySelector(".my-class");
let items = document.querySelectorAll("li");  // All list items`},{title:"Changing Content & Styles",definition:"Once you've selected an element, you can change its text, HTML content, or CSS styles using JavaScript!",example:"Like redecorating your room - you can change the posters (content), paint the walls (styles), or rearrange furniture (structure)!",code:`// Change text content
let heading = document.querySelector("h1");
heading.textContent = "New Title!";

// Change HTML (can include tags)
let div = document.querySelector(".container");
div.innerHTML = "<p>New <strong>HTML</strong> content!</p>";

// Change styles
let box = document.querySelector(".box");
box.style.color = "blue";
box.style.backgroundColor = "yellow";
box.style.fontSize = "24px";
box.style.padding = "20px";

// Change multiple styles
box.style.cssText = "color: red; background: blue; padding: 10px;";

// Add/remove classes
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("highlight");  // Add if not there, remove if there

// Change attributes
let img = document.querySelector("img");
img.setAttribute("src", "new-image.jpg");
img.setAttribute("alt", "A cool picture");`},{title:"Creating & Removing Elements",definition:"JavaScript can create brand new elements and add them to the page, or remove existing ones! It's like building with blocks.",example:"Like adding new LEGO pieces to your build or taking some away - JavaScript can add and remove parts of the web page!",code:`// Create a new element
let newParagraph = document.createElement("p");
newParagraph.textContent = "I'm a new paragraph!";
newParagraph.className = "my-class";

// Add it to the page
document.body.appendChild(newParagraph);

// Or add to a specific parent
let container = document.querySelector(".container");
container.appendChild(newParagraph);

// Create a button
let button = document.createElement("button");
button.textContent = "Click Me!";
button.id = "my-button";
container.appendChild(button);

// Remove an element
let oldElement = document.querySelector(".old");
oldElement.remove();

// Or remove child from parent
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
parent.removeChild(child);

// Replace an element
let newElement = document.createElement("div");
newElement.textContent = "New content";
let oldEl = document.querySelector(".old");
oldEl.replaceWith(newElement);`},{title:"DOM Traversal",definition:"DOM traversal means moving around the DOM tree - going from one element to its parent, children, or siblings!",example:"Like a family tree - you can go from a child to their parent, to their siblings, or to their own children!",code:`// HTML structure:
// <div class="parent">
//   <h1>Title</h1>
//   <p>Paragraph 1</p>
//   <p>Paragraph 2</p>
// </div>

let paragraph = document.querySelector("p");

// Get parent element
let parent = paragraph.parentElement;
console.log(parent);  // The div

// Get children
let children = parent.children;
console.log(children);  // All child elements

// Get first and last child
let firstChild = parent.firstElementChild;  // h1
let lastChild = parent.lastElementChild;    // last p

// Get siblings
let nextSibling = paragraph.nextElementSibling;  // Next p
let prevSibling = paragraph.previousElementSibling;  // h1

// Practical example
let listItem = document.querySelector("li");
let list = listItem.parentElement;  // Get the ul
let allItems = list.children;  // All li elements`}]},{title:"Events",description:"Making pages interactive.",topics:[{title:"Event Handling Basics",definition:"Events are things that happen on a web page - like clicks, typing, or mouse movement. Event handlers are functions that run when events happen!",example:"Like a doorbell - when someone presses it (event), it rings (handler function runs)!",code:`// HTML: <button id="myBtn">Click Me</button>

// Method 1: onclick in HTML
// <button onclick="sayHello()">Click Me</button>

// Method 2: onclick property
let btn = document.getElementById("myBtn");
btn.onclick = function() {
  console.log("Button clicked! 🎉");
};

// Method 3: addEventListener (BEST!)
btn.addEventListener("click", function() {
  console.log("Button clicked!");
});

// With arrow function
btn.addEventListener("click", () => {
  alert("Hello! You clicked the button!");
});

// Named function
function handleClick() {
  console.log("Clicked!");
}
btn.addEventListener("click", handleClick);`},{title:"Mouse Events",definition:"Mouse events happen when you use your mouse - clicking, moving, hovering, etc. Each type of mouse action has its own event!",example:"Like different ways to play with a toy - you can click it, hover over it, drag it, or double-click it!",code:`let box = document.querySelector(".box");

// Click events
box.addEventListener("click", () => {
  console.log("Single click!");
});

box.addEventListener("dblclick", () => {
  console.log("Double click!");
});

// Mouse movement
box.addEventListener("mouseenter", () => {
  console.log("Mouse entered!");
  box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseleave", () => {
  console.log("Mouse left!");
  box.style.backgroundColor = "white";
});

box.addEventListener("mousemove", (e) => {
  console.log(\`Mouse at X: \${e.clientX}, Y: \${e.clientY}\`);
});

// Mouse buttons
box.addEventListener("mousedown", () => {
  console.log("Mouse button pressed!");
});

box.addEventListener("mouseup", () => {
  console.log("Mouse button released!");
});`},{title:"Keyboard Events",definition:"Keyboard events happen when you press, hold, or release keys on your keyboard. You can detect which key was pressed!",example:"Like playing a piano - each key you press makes something happen!",code:`// Listen on the whole document
document.addEventListener("keydown", (e) => {
  console.log("Key pressed: " + e.key);
});

document.addEventListener("keyup", (e) => {
  console.log("Key released: " + e.key);
});

// Detect specific keys
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("You pressed Enter!");
  }
  if (e.key === " ") {
    console.log("You pressed Space!");
  }
  if (e.key === "ArrowUp") {
    console.log("You pressed Up Arrow!");
  }
});

// Fun game controls
document.addEventListener("keydown", (e) => {
  switch(e.key) {
    case "w":
      console.log("Move up!");
      break;
    case "s":
      console.log("Move down!");
      break;
    case "a":
      console.log("Move left!");
      break;
    case "d":
      console.log("Move right!");
      break;
  }
});`},{title:"Form Events",definition:"Form events happen when you interact with form elements like inputs, selects, and forms themselves - typing, focusing, submitting!",example:"Like filling out a worksheet - events happen when you start writing, finish a question, or turn in the whole worksheet!",code:`// HTML: <input type="text" id="nameInput">

let input = document.getElementById("nameInput");

// When user types
input.addEventListener("input", (e) => {
  console.log("Current value: " + e.target.value);
});

// When user finishes typing (leaves the field)
input.addEventListener("change", (e) => {
  console.log("Final value: " + e.target.value);
});

// When field gets focus
input.addEventListener("focus", () => {
  console.log("Input is focused!");
  input.style.backgroundColor = "lightblue";
});

// When field loses focus
input.addEventListener("blur", () => {
  console.log("Input lost focus!");
  input.style.backgroundColor = "white";
});

// Form submission
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();  // Stop page reload!
  console.log("Form submitted!");
  // Process form data here
});`},{title:"Event Object & preventDefault",definition:"When an event happens, JavaScript creates an event object with information about it. preventDefault() stops the default action from happening!",example:"Like catching a ball (event object has info about the ball) and deciding not to throw it back (preventDefault)!",code:`// Event object has useful info
button.addEventListener("click", (event) => {
  console.log(event.type);        // "click"
  console.log(event.target);      // Element that was clicked
  console.log(event.clientX);     // Mouse X position
  console.log(event.clientY);     // Mouse Y position
});

// preventDefault - stop default behavior
let link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();  // Don't follow the link!
  console.log("Link click prevented!");
});

// Prevent form from refreshing page
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form won't reload the page!");
  // Handle form data with JavaScript instead
});

// Prevent right-click menu
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("Right-click disabled!");
});`}]},{title:"Advanced Functions & Scope",description:"JavaScript's brainpower upgrade.",topics:[{title:"Scope (Global, Local, Block)",definition:"Scope is where variables can be used. Global scope = everywhere, Local scope = inside a function, Block scope = inside { curly braces }!",example:"Like your toys - some are in your room (local), some are in the whole house (global), some are just in your closet (block)!",code:`// Global scope - accessible everywhere
let globalVar = "I'm global!";

function myFunction() {
  // Local (function) scope
  let localVar = "I'm local!";
  console.log(globalVar);  // Can access global ✓
  console.log(localVar);   // Can access local ✓
}

myFunction();
console.log(globalVar);  // Can access global ✓
// console.log(localVar);   // ERROR! Can't access local ✗

// Block scope (with let and const)
if (true) {
  let blockVar = "I'm in a block!";
  console.log(blockVar);  // Works ✓
}
// console.log(blockVar);  // ERROR! Can't access outside block ✗

// var doesn't have block scope (that's why we avoid it!)
if (true) {
  var oldVar = "I escape blocks!";
}
console.log(oldVar);  // Works! (but confusing)`},{title:"Hoisting",definition:"Hoisting is JavaScript's behavior of moving declarations to the top before running code. Functions get hoisted completely, but variables only their declarations!",example:"Like organizing your backpack before school - JavaScript reorganizes some code before running it!",code:`// You can call function before declaring it!
sayHi();  // Works! ✓

function sayHi() {
  console.log("Hello!");
}

// Variable hoisting is trickier
console.log(myVar);  // undefined (not an error!)
var myVar = 5;
// JavaScript sees it as:
// var myVar;           // Declaration hoisted
// console.log(myVar);  // undefined
// myVar = 5;           // Assignment stays here

// let and const DON'T work like this
// console.log(myLet);  // ERROR! ✗
let myLet = 10;

// Best practice: declare variables at the top!
let name;
let age;
let score;

name = "Alex";
age = 10;
score = 100;`},{title:"Closures",definition:"A closure is when a function remembers variables from where it was created, even after that outer function is done running!",example:"Like a backpack - even when you leave home (outer function ends), your backpack still has your stuff (remembers variables)!",code:`// Simple closure
function outer() {
  let message = "Hello";
  
  function inner() {
    console.log(message);  // Can access message!
  }
  
  return inner;
}

let myFunction = outer();
myFunction();  // "Hello" - remembers message!

// Practical example - private counter
function createCounter() {
  let count = 0;  // Private variable!
  
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

let counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.decrement();  // 1
console.log(counter.getCount());  // 1
// Can't access count directly - it's private!`},{title:"Higher-Order Functions",definition:"Higher-order functions either take other functions as arguments OR return a function. They're like function managers!",example:"Like a coach who tells players what to do - the coach (higher-order function) gives instructions (other functions) to players!",code:`// Function that takes another function
function doTwice(func) {
  func();
  func();
}

function sayHello() {
  console.log("Hello!");
}

doTwice(sayHello);  // "Hello!" "Hello!"

// Function that returns a function
function multiplyBy(num) {
  return function(x) {
    return x * num;
  };
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Array methods are higher-order functions!
let numbers = [1, 2, 3, 4, 5];

// map - transform each item
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - keep items that pass test
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

// forEach - do something with each item
numbers.forEach(num => console.log(num * 2));`}]},{title:"ES6+ Modern JavaScript",description:"The modern wardrobe upgrade.",topics:[{title:"Destructuring",definition:"Destructuring is a quick way to unpack values from arrays or properties from objects into separate variables!",example:"Like unpacking a lunch box - instead of taking out each item one by one, you can grab them all at once!",code:`// Array destructuring
let colors = ["red", "green", "blue"];

// Old way
let color1 = colors[0];
let color2 = colors[1];

// New way - destructuring!
let [first, second, third] = colors;
console.log(first);   // "red"
console.log(second);  // "green"

// Skip values
let [primary, , tertiary] = colors;
console.log(primary);   // "red"
console.log(tertiary);  // "blue"

// Object destructuring
let person = {
  name: "Alex",
  age: 10,
  hobby: "coding"
};

// Old way
let name = person.name;
let age = person.age;

// New way!
let { name, age, hobby } = person;
console.log(name);  // "Alex"
console.log(age);   // 10

// Rename variables
let { name: userName, age: userAge } = person;
console.log(userName);  // "Alex"`},{title:"Spread & Rest Operators",definition:"Spread (...) expands an array/object. Rest (...) collects multiple values into an array. Same syntax, different use!",example:"Spread is like dumping out all your LEGO pieces. Rest is like gathering them all back into a bucket!",code:`// SPREAD - expand array
let fruits = ["apple", "banana"];
let moreFruits = ["orange", ...fruits, "grape"];
console.log(moreFruits);  
// ["orange", "apple", "banana", "grape"]

// Copy array
let numbers = [1, 2, 3];
let numbersCopy = [...numbers];

// Spread in function
function add(a, b, c) {
  return a + b + c;
}
let nums = [1, 2, 3];
console.log(add(...nums));  // 6

// Spread object
let person = { name: "Alex", age: 10 };
let personWithHobby = { ...person, hobby: "coding" };
console.log(personWithHobby);
// { name: "Alex", age: 10, hobby: "coding" }

// REST - collect into array
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15`},{title:"Optional Chaining & Nullish Coalescing",definition:"Optional chaining (?.) safely accesses nested properties. Nullish coalescing (??) provides default values only for null/undefined!",example:"Like checking if a box exists before opening it (optional chaining), and having a backup gift ready if it's empty (nullish coalescing)!",code:`// Without optional chaining
let user = { name: "Alex" };

// This would crash if user.address doesn't exist!
// let city = user.address.city;  // ERROR!

// With optional chaining - safe!
let city = user?.address?.city;
console.log(city);  // undefined (no error!)

// Real example
let person = {
  name: "Sam",
  pet: {
    name: "Buddy",
    type: "dog"
  }
};

console.log(person?.pet?.name);  // "Buddy"
console.log(person?.car?.brand); // undefined (safe!)

// Nullish Coalescing (??)
let score = 0;

// Old way - wrong!
let display = score || "No score";
console.log(display);  // "No score" (0 is falsy!)

// New way - correct!
let display2 = score ?? "No score";
console.log(display2);  // 0 (only null/undefined use default)

let name = null;
console.log(name ?? "Guest");  // "Guest"

let age = 0;
console.log(age ?? 18);  // 0 (0 is not null/undefined!)`},{title:"Modules (import & export)",definition:"Modules let you split code into separate files. Export makes code available to other files, import brings it in!",example:"Like having different boxes for different toys - you can take toys from one box (import) or share toys with others (export)!",code:`// In file: math.js
// Export single items
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

// Or export all at once
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

export { multiply, divide };

// Default export (only one per file)
export default function calculate(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  return 0;
}

// In another file: app.js
import calculate from "./math.js";  // Default import
import { add, subtract, PI } from "./math.js";  // Named imports

console.log(add(5, 3));      // 8
console.log(PI);             // 3.14159
console.log(calculate(10, 5, "+")); // 15

// Import everything
import * as MathStuff from "./math.js";
console.log(MathStuff.add(2, 3));  // 5`}]},{title:"Asynchronous JavaScript",description:"Handling time without freezing the app.",topics:[{title:"Synchronous vs Asynchronous",definition:"Synchronous code runs line by line, waiting for each to finish. Asynchronous code can start something and move on while waiting for it to complete!",example:"Synchronous is like washing dishes - you finish one before starting the next. Asynchronous is like laundry - you start the washer and do other things while it runs!",code:`// SYNCHRONOUS - runs in order
console.log("First");
console.log("Second");
console.log("Third");
// Output: First, Second, Third (in order)

// ASYNCHRONOUS - doesn't wait!
console.log("First");

setTimeout(() => {
  console.log("Second (after 2 seconds)");
}, 2000);

console.log("Third");
// Output: First, Third, Second (Third doesn't wait!)

// Real example
console.log("Start cooking 🍳");

setTimeout(() => {
  console.log("Food is ready! 🍕");
}, 3000);

console.log("Set the table 🍽️");
console.log("Pour drinks 🥤");
// While food cooks, you can do other things!`},{title:"Promises",definition:"A Promise represents something that will complete in the future. It can succeed (resolve) or fail (reject). You use .then() for success and .catch() for errors!",example:"Like ordering pizza - you get a promise it will arrive. When it comes (resolve), you eat it (.then). If they mess up (reject), you complain (.catch)!",code:`// Creating a promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  
  setTimeout(() => {
    if (success) {
      resolve("Task completed! ✓");
    } else {
      reject("Task failed! ✗");
    }
  }, 2000);
});

// Using the promise
myPromise
  .then((result) => {
    console.log(result);  // If successful
  })
  .catch((error) => {
    console.log(error);   // If failed
  });

// Practical example - delay
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(\`Waited \${seconds} seconds!\`);
    }, seconds * 1000);
  });
}

wait(2)
  .then((message) => {
    console.log(message);
    return wait(1);  // Chain another promise!
  })
  .then((message) => {
    console.log(message);
  });`},{title:"async / await",definition:"async/await makes asynchronous code look synchronous! 'async' marks a function as asynchronous, 'await' waits for a promise to finish.",example:"Like waiting in line - 'await' means you stay in line until it's your turn, making the code easier to read!",code:`// Old way with promises
function oldWay() {
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

// New way with async/await - cleaner!
async function newWay() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Simple example
function delay(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

async function countdown() {
  console.log("3");
  await delay(1);
  console.log("2");
  await delay(1);
  console.log("1");
  await delay(1);
  console.log("Go! 🚀");
}

countdown();

// Async functions always return a promise
async function getNumber() {
  return 42;
}

getNumber().then(num => console.log(num));  // 42`},{title:"Error Handling with try...catch",definition:"try...catch helps handle errors in asynchronous code. Code in 'try' runs normally, 'catch' handles any errors, 'finally' always runs!",example:"Like trying to ride a bike - if you fall (error), your friend catches you (catch block), and either way you get back up (finally)!",code:`// Basic try...catch
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.log("Oops! Something went wrong:", error);
} finally {
  console.log("This always runs!");
}

// With async/await
async function getData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  } finally {
    console.log("Finished trying to get data");
  }
}

// Multiple operations
async function processData() {
  try {
    console.log("Starting...");
    
    await delay(1);
    console.log("Step 1 complete");
    
    await delay(1);
    console.log("Step 2 complete");
    
    // Simulate an error
    throw new Error("Something went wrong!");
    
  } catch (error) {
    console.log("Caught error:", error.message);
  } finally {
    console.log("Cleanup complete");
  }
}`}]},{title:"APIs & AJAX",description:"Talking to servers.",topics:[{title:"What is an API? & JSON",definition:"API (Application Programming Interface) lets different programs talk to each other. JSON (JavaScript Object Notation) is how data is sent and received - it looks like JavaScript objects!",example:"API is like a waiter at a restaurant - you tell them what you want (request), they bring it to you (response). JSON is the menu - it's written in a format everyone understands!",code:`// JSON looks like JavaScript objects
let jsonString = '{"name": "Alex", "age": 10, "hobbies": ["coding", "gaming"]}';

// Parse JSON string to JavaScript object
let person = JSON.parse(jsonString);
console.log(person.name);  // "Alex"
console.log(person.hobbies[0]);  // "coding"

// Convert JavaScript object to JSON string
let student = {
  name: "Sam",
  grade: 5,
  subjects: ["Math", "Science"]
};

let json = JSON.stringify(student);
console.log(json);
// {"name":"Sam","grade":5,"subjects":["Math","Science"]}

// Example API response (JSON)
let apiResponse = {
  "weather": "sunny",
  "temperature": 75,
  "city": "Springfield"
};

console.log("It's " + apiResponse.weather + " in " + apiResponse.city);`},{title:"fetch() API",definition:"fetch() is JavaScript's modern way to make HTTP requests to get data from servers. It returns a Promise!",example:"Like sending a text message to a friend asking for homework answers - fetch sends a request and waits for a reply!",code:`// Basic GET request
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// With async/await (easier to read!)
async function getData() {
  try {
    let response = await fetch("https://api.example.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Real example - get a random joke
async function getJoke() {
  try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let joke = await response.json();
    console.log(joke.setup);
    console.log(joke.punchline);
  } catch (error) {
    console.log("Couldn't get joke:", error);
  }
}

getJoke();`},{title:"HTTP Methods",definition:"HTTP methods tell the server what you want to do: GET (get data), POST (send new data), PUT (update data), DELETE (remove data).",example:"Like different actions with your toys: GET (look at them), POST (get a new toy), PUT (paint an old toy), DELETE (give away a toy)!",code:`// GET - fetch data (default)
async function getUsers() {
  let response = await fetch("https://api.example.com/users");
  let users = await response.json();
  return users;
}

// POST - send new data
async function createUser(userData) {
  let response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  let result = await response.json();
  return result;
}

// Using POST
let newUser = {
  name: "Alex",
  age: 10,
  email: "alex@example.com"
};

createUser(newUser);

// PUT - update existing data
async function updateUser(id, userData) {
  let response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  return await response.json();
}

// DELETE - remove data
async function deleteUser(id) {
  let response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: "DELETE"
  });
  return await response.json();
}`},{title:"Handling API Responses & Errors",definition:"When making API requests, you need to check if they succeeded and handle different types of responses and errors properly!",example:"Like checking if your online order went through - did it work? Was there an error? Is the item in stock?",code:`// Check response status
async function fetchData(url) {
  try {
    let response = await fetch(url);
    
    // Check if request succeeded
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    let data = await response.json();
    return data;
    
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}

// Handle different status codes
async function getUserById(id) {
  try {
    let response = await fetch(\`https://api.example.com/users/\${id}\`);
    
    if (response.status === 404) {
      console.log("User not found!");
      return null;
    }
    
    if (response.status === 500) {
      console.log("Server error!");
      return null;
    }
    
    if (response.ok) {
      let user = await response.json();
      return user;
    }
    
  } catch (error) {
    console.log("Network error:", error);
    return null;
  }
}

// Practical example with loading state
async function loadData() {
  console.log("Loading... ⏳");
  
  try {
    let data = await fetchData("https://api.example.com/data");
    
    if (data) {
      console.log("Success! ✓", data);
    } else {
      console.log("Failed to load data ✗");
    }
    
  } catch (error) {
    console.log("Error:", error);
  }
  
  console.log("Done!");
}`}]},{title:"Error Handling & Debugging",description:"Finding and fixing bugs.",topics:[{title:"Types of Errors",definition:"JavaScript has different types of errors: Syntax errors (typos in code), Reference errors (using undeclared variables), Type errors (wrong type of data), and more!",example:"Like making mistakes in homework - spelling errors (syntax), using a word you don't know (reference), or using a number where you need a word (type)!",code:`// SYNTAX ERROR - typo in code
// console.log("Hello"  // Missing closing )

// REFERENCE ERROR - variable doesn't exist
// console.log(myVariable);  // ReferenceError

// TYPE ERROR - wrong operation for type
// let num = 5;
// num.toUpperCase();  // TypeError (numbers don't have toUpperCase)

// RANGE ERROR - invalid value
// let arr = new Array(-1);  // RangeError (can't have negative length)

// Common mistakes to watch for:
// 1. Spelling mistakes
let nmae = "Alex";  // Typo!
// console.log(name);  // ERROR - it's "nmae" not "name"

// 2. Case sensitivity
let myName = "Alex";
// console.log(myname);  // ERROR - JavaScript is case-sensitive

// 3. Missing quotes
// console.log(Hello);  // ERROR - needs quotes
console.log("Hello");  // Correct!

// 4. Forgetting to close brackets
// function test() {
//   console.log("Hi");
// Missing closing }!`},{title:"try, catch, finally",definition:"try lets you test code for errors, catch handles the error if one occurs, finally runs code whether there's an error or not!",example:"Like trying to jump rope - TRY to jump, if you trip (error) your friend CATCHES you, and FINALLY you both smile!",code:`// Basic try-catch
try {
  // Try to run this code
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  // If error happens, run this
  console.log("Error occurred:", error.message);
}

// With finally
try {
  console.log("Attempting something...");
  throw new Error("Oops!");
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("This always runs!");
}

// Practical example
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  } finally {
    console.log("Division attempt complete");
  }
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // null (with error message)

// Multiple catches
try {
  let data = JSON.parse("invalid json");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Invalid JSON format!");
  } else {
    console.log("Other error:", error);
  }
}`},{title:"Custom Errors",definition:"You can create your own custom errors with specific messages to help understand what went wrong!",example:"Like making your own warning signs - instead of a generic 'STOP', you make one that says 'STOP - Wet Floor'!",code:`// Throwing custom errors
function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative!");
  }
  if (age > 150) {
    throw new Error("Age seems too high!");
  }
  return true;
}

try {
  checkAge(-5);
} catch (error) {
  console.log("Error:", error.message);
  // "Error: Age cannot be negative!"
}

// Custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required!");
  }
  if (user.age < 0) {
    throw new ValidationError("Age must be positive!");
  }
  return true;
}

try {
  validateUser({ age: 10 });  // Missing name
} catch (error) {
  console.log(error.name + ":", error.message);
  // "ValidationError: Name is required!"
}

// Practical example
function processData(data) {
  if (!data) {
    throw new Error("No data provided!");
  }
  if (typeof data !== "object") {
    throw new TypeError("Data must be an object!");
  }
  console.log("Processing:", data);
}

try {
  processData(null);
} catch (error) {
  console.log("Failed:", error.message);
}`},{title:"Browser DevTools & Debugging",definition:"Browser DevTools are built-in tools that help you find and fix bugs. Use console.log() to print values, debugger to pause code, and breakpoints to inspect!",example:"Like a detective's magnifying glass - DevTools help you examine your code closely to find problems!",code:`// console methods for debugging
console.log("Normal message");
console.warn("Warning message ⚠️");
console.error("Error message ❌");
console.info("Info message ℹ️");

// Log multiple values
let name = "Alex";
let score = 95;
console.log("Player:", name, "Score:", score);

// Table format for arrays/objects
let students = [
  { name: "Alex", grade: 90 },
  { name: "Sam", grade: 85 }
];
console.table(students);

// Group related logs
console.group("User Details");
console.log("Name: Alex");
console.log("Age: 10");
console.log("Grade: 5");
console.groupEnd();

// Time how long code takes
console.time("myTimer");
for (let i = 0; i < 1000000; i++) {
  // Some operation
}
console.timeEnd("myTimer");  // Shows how long it took

// Debugger - pauses code here
function complexFunction(x) {
  let result = x * 2;
  debugger;  // Code pauses here! (when DevTools open)
  return result + 10;
}

// Assert - only logs if condition is false
let age = 5;
console.assert(age >= 10, "Age should be 10 or more!");

// Clear console
// console.clear();`}]},{title:"JavaScript OOP",description:"Object-Oriented JavaScript.",topics:[{title:"Classes & Objects",definition:"A class is like a blueprint for creating objects. Objects created from a class are called instances. Classes help organize code better!",example:"A class is like a cookie cutter - the shape you use to make cookies. Each cookie is an object made from that class!",code:`// Creating a class
class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  
  bark() {
    console.log(this.name + " says: Woof! Woof! 🐕");
  }
  
  introduce() {
    console.log(\`Hi! I'm \${this.name}, a \${this.age} year old \${this.breed}!\`);
  }
}

// Creating objects (instances) from the class
let dog1 = new Dog("Buddy", "Golden Retriever", 3);
let dog2 = new Dog("Max", "Beagle", 5);

dog1.bark();       // Buddy says: Woof! Woof! 🐕
dog1.introduce();  // Hi! I'm Buddy, a 3 year old Golden Retriever!

dog2.bark();       // Max says: Woof! Woof! 🐕
dog2.introduce();  // Hi! I'm Max, a 5 year old Beagle!

// Another example
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.subjects = [];
  }
  
  addSubject(subject) {
    this.subjects.push(subject);
    console.log(\`Added \${subject} for \${this.name}\`);
  }
}

let student = new Student("Alex", 5);
student.addSubject("Math");
student.addSubject("Science");`},{title:"Inheritance",definition:"Inheritance lets one class get properties and methods from another class. The child class extends the parent class and gets all its features!",example:"Like how you inherit traits from your parents - you get some features from them, but you're still your own person!",code:`// Parent class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  eat() {
    console.log(this.name + " is eating 🍽️");
  }
  
  sleep() {
    console.log(this.name + " is sleeping 😴");
  }
}

// Child class extends parent
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);  // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    console.log(this.name + " says: Woof! 🐕");
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  
  meow() {
    console.log(this.name + " says: Meow! 🐱");
  }
}

// Using child classes
let dog = new Dog("Buddy", 3, "Golden Retriever");
dog.eat();    // From Animal class ✓
dog.sleep();  // From Animal class ✓
dog.bark();   // From Dog class ✓

let cat = new Cat("Whiskers", 2, "orange");
cat.eat();    // From Animal class ✓
cat.sleep();  // From Animal class ✓
cat.meow();   // From Cat class ✓`},{title:"Encapsulation & Private Fields",definition:"Encapsulation means keeping some data private (hidden) inside a class. Use # to make fields private - they can't be accessed from outside!",example:"Like your diary with a lock - some things are private and only you can see them!",code:`// Public and private fields
class BankAccount {
  // Private field (starts with #)
  #balance = 0;
  
  constructor(owner) {
    this.owner = owner;  // Public
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(\`Deposited $\${amount}. New balance: $\${this.#balance}\`);
    }
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(\`Withdrew $\${amount}. Remaining: $\${this.#balance}\`);
    } else {
      console.log("Insufficient funds!");
    }
  }
  
  getBalance() {
    return this.#balance;  // Controlled access
  }
}

let account = new BankAccount("Alex");
account.deposit(100);    // Deposited $100. New balance: $100
account.withdraw(30);    // Withdrew $30. Remaining: $70
console.log(account.getBalance());  // 70

// account.#balance = 1000;  // ERROR! Can't access private field
// console.log(account.#balance);  // ERROR!

// Another example
class Player {
  #health = 100;
  
  constructor(name) {
    this.name = name;
  }
  
  takeDamage(damage) {
    this.#health -= damage;
    if (this.#health <= 0) {
      console.log(this.name + " is defeated! 💀");
    }
  }
  
  showHealth() {
    console.log(\`\${this.name}'s health: \${this.#health}\`);
  }
}

let player = new Player("Hero");
player.takeDamage(30);
player.showHealth();  // Hero's health: 70`},{title:"Static Methods & Properties",definition:"Static methods and properties belong to the class itself, not to instances. You call them on the class, not on objects!",example:"Like a classroom rule that applies to everyone - it belongs to the class (classroom), not to individual students (objects)!",code:`class MathHelper {
  // Static property
  static PI = 3.14159;
  
  // Static method
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
  
  static circleArea(radius) {
    return this.PI * radius * radius;
  }
}

// Call on the class, not on an object
console.log(MathHelper.add(5, 3));        // 8
console.log(MathHelper.PI);               // 3.14159
console.log(MathHelper.circleArea(5));    // 78.53975

// Another example
class Player {
  static totalPlayers = 0;
  
  constructor(name) {
    this.name = name;
    Player.totalPlayers++;  // Increment class variable
  }
  
  static getPlayerCount() {
    return \`Total players: \${this.totalPlayers}\`;
  }
}

let p1 = new Player("Alex");
let p2 = new Player("Sam");
let p3 = new Player("Jordan");

console.log(Player.getPlayerCount());  // Total players: 3

// Utility class example
class StringUtils {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static reverse(str) {
    return str.split("").reverse().join("");
  }
}

console.log(StringUtils.capitalize("hello"));  // "Hello"
console.log(StringUtils.reverse("hello"));     // "olleh"`}]},{title:"Browser Storage",description:"Remembering things between refreshes.",topics:[{title:"localStorage",definition:"localStorage saves data in the browser that stays even after you close the tab or browser! Perfect for remembering user preferences or saved data.",example:"Like writing in a notebook that never gets erased - the information stays there until you erase it yourself!",code:`// Save data
localStorage.setItem("username", "Alex");
localStorage.setItem("score", "100");
localStorage.setItem("level", "5");

// Get data
let username = localStorage.getItem("username");
console.log(username);  // "Alex"

let score = localStorage.getItem("score");
console.log(score);  // "100" (note: always returns string!)

// Save number (convert to string automatically)
localStorage.setItem("age", 10);

// Get and convert back to number
let age = Number(localStorage.getItem("age"));
console.log(age + 5);  // 15

// Remove one item
localStorage.removeItem("score");

// Clear everything
localStorage.clear();

// Save objects (use JSON)
let player = {
  name: "Alex",
  score: 95,
  level: 3
};

// Convert to JSON string before saving
localStorage.setItem("player", JSON.stringify(player));

// Get and convert back to object
let savedPlayer = JSON.parse(localStorage.getItem("player"));
console.log(savedPlayer.name);   // "Alex"
console.log(savedPlayer.score);  // 95

// Practical example - dark mode preference
function saveDarkMode(enabled) {
  localStorage.setItem("darkMode", enabled);
}

function loadDarkMode() {
  let darkMode = localStorage.getItem("darkMode");
  return darkMode === "true";  // Convert string to boolean
}

saveDarkMode(true);
console.log(loadDarkMode());  // true`},{title:"sessionStorage",definition:"sessionStorage works like localStorage but data is deleted when you close the tab! Good for temporary data during a session.",example:"Like a whiteboard - you can write on it during class, but it gets erased at the end of the day (when you close the tab)!",code:`// Works exactly like localStorage
sessionStorage.setItem("tempUser", "Guest");
sessionStorage.setItem("cartItems", "3");

// Get data
let tempUser = sessionStorage.getItem("tempUser");
console.log(tempUser);  // "Guest"

// Save object
let cart = {
  items: ["apple", "banana"],
  total: 5.99
};

sessionStorage.setItem("cart", JSON.stringify(cart));

// Get object
let savedCart = JSON.parse(sessionStorage.getItem("cart"));
console.log(savedCart.items);  // ["apple", "banana"]

// Remove item
sessionStorage.removeItem("cartItems");

// Clear all
sessionStorage.clear();

// When to use localStorage vs sessionStorage:
// localStorage: User preferences, saved games, settings
// sessionStorage: Shopping cart, form data, temporary filters

// Example - form data during session
function saveFormData(data) {
  sessionStorage.setItem("formData", JSON.stringify(data));
}

function loadFormData() {
  let data = sessionStorage.getItem("formData");
  return data ? JSON.parse(data) : null;
}

// Save user's form progress
saveFormData({
  name: "Alex",
  email: "alex@example.com",
  message: "Hello..."
});

// Load it back if page refreshes
let formData = loadFormData();
if (formData) {
  console.log("Restoring form:", formData);
}`},{title:"Cookies (Introduction)",definition:"Cookies are small pieces of data stored in the browser, but they're sent to the server with every request. They can have expiration dates!",example:"Like a permission slip that you show every time you go somewhere - cookies go with every web request!",code:`// Setting a cookie (basic)
document.cookie = "username=Alex";
document.cookie = "theme=dark";

// Setting cookie with expiration (7 days)
let date = new Date();
date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
let expires = "expires=" + date.toUTCString();
document.cookie = "user=Alex; " + expires + "; path=/";

// Get all cookies (returns string)
console.log(document.cookie);
// "username=Alex; theme=dark; user=Alex"

// Helper function to set cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Helper function to get cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length);
    }
  }
  return null;
}

// Helper function to delete cookie
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Using helpers
setCookie("username", "Alex", 7);  // Save for 7 days
console.log(getCookie("username"));  // "Alex"
deleteCookie("username");  // Delete it

// When to use what:
// localStorage: Long-term storage, large data
// sessionStorage: Temporary data for this tab
// cookies: Small data that needs to go to server`}]},{title:"Performance & Best Practices",description:"Writing clean, professional code.",topics:[{title:"Clean Code Principles",definition:"Clean code is easy to read and understand. Use descriptive names, keep functions small, add comments when needed, and organize your code logically!",example:"Like keeping your room organized - everything has a place, it's easy to find things, and it looks nice!",code:`// ❌ BAD CODE - unclear, messy
let x = 10;
let y = 20;
function f(a,b){return a+b}
let z=f(x,y)

// ✅ GOOD CODE - clear, organized
let playerScore = 10;
let enemyScore = 20;

function calculateTotalScore(score1, score2) {
  return score1 + score2;
}

let totalScore = calculateTotalScore(playerScore, enemyScore);

// ❌ BAD - long function doing many things
function doEverything(user) {
  validateUser(user);
  saveToDatabase(user);
  sendEmail(user);
  updateUI(user);
  logActivity(user);
}

// ✅ GOOD - separate small functions
function processNewUser(user) {
  if (isValidUser(user)) {
    saveUser(user);
    notifyUser(user);
  }
}

// Use meaningful names
// ❌ BAD
let d = 7;
let temp = getData();

// ✅ GOOD
let daysUntilBirthday = 7;
let userData = getUserData();

// Add helpful comments
// Calculate area of a circle
function circleArea(radius) {
  const PI = 3.14159;
  return PI * radius * radius;
}

// Use consistent formatting
// ✅ GOOD
if (isLoggedIn) {
  showDashboard();
} else {
  showLogin();
}`},{title:"Common Mistakes to Avoid",definition:"Learning from common mistakes helps you write better code! Watch out for type coercion, variable scope issues, and forgetting to handle errors.",example:"Like learning from when you fell off your bike - now you know to be more careful!",code:`// ❌ MISTAKE 1: Using == instead of ===
if (5 == "5") {  // true (bad!)
  console.log("These are equal?");
}

// ✅ FIX: Use strict equality
if (5 === "5") {  // false (good!)
  console.log("This won't run");
}

// ❌ MISTAKE 2: Not using let/const (using var)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 3, 3, 3 (unexpected!)

// ✅ FIX: Use let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 0, 1, 2 (expected!)

// ❌ MISTAKE 3: Modifying array while looping
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  numbers.pop();  // BAD! Changes array during loop
}

// ✅ FIX: Use filter or make a copy
let filtered = numbers.filter(num => num > 2);

// ❌ MISTAKE 4: Not handling errors
let data = JSON.parse(userInput);  // Might crash!

// ✅ FIX: Use try-catch
try {
  let data = JSON.parse(userInput);
  console.log(data);
} catch (error) {
  console.log("Invalid JSON");
}

// ❌ MISTAKE 5: Not checking for null/undefined
let user = getUser();
console.log(user.name);  // Might crash!

// ✅ FIX: Check first
if (user && user.name) {
  console.log(user.name);
}

// Or use optional chaining
console.log(user?.name);`},{title:"Code Optimization Tips",definition:"Optimization makes code run faster and use less memory. Avoid unnecessary loops, reuse calculations, and use efficient methods!",example:"Like taking a shortcut instead of the long way - you get there faster!",code:`// ❌ SLOW: Creating strings in a loop
let result = "";
for (let i = 0; i < 1000; i++) {
  result += "text";  // Creates new string each time!
}

// ✅ FAST: Use array join
let parts = [];
for (let i = 0; i < 1000; i++) {
  parts.push("text");
}
let result = parts.join("");

// ❌ SLOW: Accessing DOM in loop
for (let i = 0; i < 100; i++) {
  document.getElementById("list").innerHTML += "<li>Item</li>";
}

// ✅ FAST: Build string first, update DOM once
let html = "";
for (let i = 0; i < 100; i++) {
  html += "<li>Item</li>";
}
document.getElementById("list").innerHTML = html;

// ❌ SLOW: Calculating same thing repeatedly
for (let i = 0; i < array.length; i++) {  // Checks length each time!
  console.log(array[i]);
}

// ✅ FAST: Cache the length
let len = array.length;
for (let i = 0; i < len; i++) {
  console.log(array[i]);
}

// Or use for...of
for (let item of array) {
  console.log(item);
}

// ❌ SLOW: Deep nesting
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    for (let k = 0; k < 100; k++) {
      // 1,000,000 iterations!
    }
  }
}

// ✅ FAST: Reduce nesting when possible
// Debouncing - don't run function too often
let timeout;
function handleResize() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    // Only runs after user stops resizing
    console.log("Resized!");
  }, 250);
}

window.addEventListener("resize", handleResize);`},{title:"Security Basics & Memory Management",definition:"Write secure code by validating input, avoiding XSS attacks, and being careful with user data. Let JavaScript's garbage collector handle memory, but avoid memory leaks!",example:"Like locking your door and not talking to strangers - be safe with code too!",code:`// ❌ SECURITY RISK: Directly using user input
let userInput = "<script>alert('hacked!')<\/script>";
element.innerHTML = userInput;  // BAD! Runs the script!

// ✅ SAFE: Use textContent or sanitize
element.textContent = userInput;  // Displays as text, safe!

// Or create element safely
let div = document.createElement("div");
div.textContent = userInput;

// ❌ SECURITY RISK: eval() - never use!
let code = "alert('dangerous!')";
eval(code);  // VERY BAD! Can run any code!

// ✅ SAFE: Use proper parsing
let data = JSON.parse(jsonString);

// Validate user input
function validateAge(age) {
  // Check type
  if (typeof age !== "number") {
    return false;
  }
  // Check range
  if (age < 0 || age > 150) {
    return false;
  }
  return true;
}

// ❌ MEMORY LEAK: Keeping references
let bigArray = new Array(1000000);
element.addEventListener("click", () => {
  console.log(bigArray);  // Keeps bigArray in memory forever!
});

// ✅ BETTER: Clean up when done
let bigArray = new Array(1000000);
function handler() {
  console.log(bigArray.length);
}
element.addEventListener("click", handler);

// Remove when no longer needed
element.removeEventListener("click", handler);
bigArray = null;  // Let garbage collector free memory

// ❌ MEMORY LEAK: Forgotten timers
let interval = setInterval(() => {
  console.log("Running...");
}, 1000);
// Never stopped!

// ✅ CLEAN: Stop when done
let interval = setInterval(() => {
  console.log("Running...");
}, 1000);

// Stop after 10 seconds
setTimeout(() => {
  clearInterval(interval);
  interval = null;
}, 10000);`}]}];function gf(){const[k,_]=Nt.useState(0),[m,b]=Nt.useState(!0);return P.jsx("div",{className:m?"dark":"",children:P.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300",children:[P.jsx(hf,{isDarkMode:m,setIsDarkMode:b}),P.jsxs("div",{className:"flex",children:[P.jsx(Wd,{modules:Du,activeModule:k,setActiveModule:_}),P.jsx("main",{className:"flex-1 ml-64 p-8 pt-24",children:P.jsx(mf,{module:Du[k]})})]})]})})}Bd.createRoot(document.getElementById("root")).render(P.jsx(gf,{}));
