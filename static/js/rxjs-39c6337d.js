import{c as M,b as S,d as E,a as x,e as Mn,f as hn,g as G,h as Wn,i as Dn}from"./tslib-f4dc1f8d.js";function l(n){return typeof n=="function"}function Q(n){var e=function(r){Error.call(r),r.stack=new Error().stack},t=n(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var K=Q(function(n){return function(t){n(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function W(n,e){if(n){var t=n.indexOf(e);0<=t&&n.splice(t,1)}}var j=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var e,t,r,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var a=M(u),s=a.next();!s.done;s=a.next()){var f=s.value;f.remove(this)}}catch(h){e={error:h}}finally{try{s&&!s.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else u.remove(this);var c=this.initialTeardown;if(l(c))try{c()}catch(h){o=h instanceof K?h.errors:[h]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var d=M(v),b=d.next();!b.done;b=d.next()){var p=b.value;try{un(p)}catch(h){o=o??[],h instanceof K?o=S(S([],E(o)),E(h.errors)):o.push(h)}}}catch(h){r={error:h}}finally{try{b&&!b.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(o)throw new K(o)}},n.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)un(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},n.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},n.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},n.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&W(t,e)},n.prototype.remove=function(e){var t=this._finalizers;t&&W(t,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}(),dn=j.EMPTY;function pn(n){return n instanceof j||n&&"closed"in n&&l(n.remove)&&l(n.add)&&l(n.unsubscribe)}function un(n){l(n)?n():n.unsubscribe()}var $={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},J={setTimeout:function(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i=J.delegate;return i?.setTimeout?i.setTimeout.apply(i,S([n,e],E(t))):setTimeout.apply(void 0,S([n,e],E(t)))},clearTimeout:function(n){var e=J.delegate;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function yn(n){J.setTimeout(function(){throw n})}function D(){}var U=null;function V(n){if($.useDeprecatedSynchronousErrorHandling){var e=!U;if(e&&(U={errorThrown:!1,error:null}),n(),e){var t=U,r=t.errorThrown,i=t.error;if(U=null,r)throw i}}else n()}var X=function(n){x(e,n);function e(t){var r=n.call(this)||this;return r.isStopped=!1,t?(r.destination=t,pn(t)&&t.add(r)):r.destination=Gn,r}return e.create=function(t,r,i){return new C(t,r,i)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(j),Fn=Function.prototype.bind;function Z(n,e){return Fn.call(n,e)}var Yn=function(){function n(e){this.partialObserver=e}return n.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(r){L(r)}},n.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(r){L(r)}else L(e)},n.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){L(t)}},n}(),C=function(n){x(e,n);function e(t,r,i){var o=n.call(this)||this,u;if(l(t)||!t)u={next:t??void 0,error:r??void 0,complete:i??void 0};else{var a;o&&$.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return o.unsubscribe()},u={next:t.next&&Z(t.next,a),error:t.error&&Z(t.error,a),complete:t.complete&&Z(t.complete,a)}):u=t}return o.destination=new Yn(u),o}return e}(X);function L(n){yn(n)}function qn(n){throw n}var Gn={closed:!0,next:D,error:qn,complete:D},B=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function P(n){return n}function Vt(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return mn(n)}function mn(n){return n.length===0?P:n.length===1?n[0]:function(t){return n.reduce(function(r,i){return i(r)},t)}}var w=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var t=new n;return t.source=this,t.operator=e,t},n.prototype.subscribe=function(e,t,r){var i=this,o=Zn(e)?e:new C(e,t,r);return V(function(){var u=i,a=u.operator,s=u.source;o.add(a?a.call(o,s):s?i._subscribe(o):i._trySubscribe(o))}),o},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},n.prototype.forEach=function(e,t){var r=this;return t=an(t),new t(function(i,o){var u=new C({next:function(a){try{e(a)}catch(s){o(s),u.unsubscribe()}},error:o,complete:i});r.subscribe(u)})},n.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},n.prototype[B]=function(){return this},n.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return mn(e)(this)},n.prototype.toPromise=function(e){var t=this;return e=an(e),new e(function(r,i){var o;t.subscribe(function(u){return o=u},function(u){return i(u)},function(){return r(o)})})},n.create=function(e){return new n(e)},n}();function an(n){var e;return(e=n??$.Promise)!==null&&e!==void 0?e:Promise}function Kn(n){return n&&l(n.next)&&l(n.error)&&l(n.complete)}function Zn(n){return n&&n instanceof X||Kn(n)&&pn(n)}function Hn(n){return l(n?.lift)}function m(n){return function(e){if(Hn(e))return e.lift(function(t){try{return n(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function y(n,e,t,r,i){return new Jn(n,e,t,r,i)}var Jn=function(n){x(e,n);function e(t,r,i,o,u,a){var s=n.call(this,t)||this;return s.onFinalize=u,s.shouldUnsubscribe=a,s._next=r?function(f){try{r(f)}catch(c){t.error(c)}}:n.prototype._next,s._error=o?function(f){try{o(f)}catch(c){t.error(c)}finally{this.unsubscribe()}}:n.prototype._error,s._complete=i?function(){try{i()}catch(f){t.error(f)}finally{this.unsubscribe()}}:n.prototype._complete,s}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;n.prototype.unsubscribe.call(this),!r&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(X),Qn=Q(function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Y=function(n){x(e,n);function e(){var t=n.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var r=new sn(this,this);return r.operator=t,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Qn},e.prototype.next=function(t){var r=this;V(function(){var i,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var u=M(r.currentObservers),a=u.next();!a.done;a=u.next()){var s=a.value;s.next(t)}}catch(f){i={error:f}}finally{try{a&&!a.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}}})},e.prototype.error=function(t){var r=this;V(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var i=r.observers;i.length;)i.shift().error(t)}})},e.prototype.complete=function(){var t=this;V(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var r=this,i=this,o=i.hasError,u=i.isStopped,a=i.observers;return o||u?dn:(this.currentObservers=null,a.push(t),new j(function(){r.currentObservers=null,W(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var r=this,i=r.hasError,o=r.thrownError,u=r.isStopped;i?t.error(o):u&&t.complete()},e.prototype.asObservable=function(){var t=new w;return t.source=this,t},e.create=function(t,r){return new sn(t,r)},e}(w),sn=function(n){x(e,n);function e(t,r){var i=n.call(this)||this;return i.destination=t,i.source=r,i}return e.prototype.next=function(t){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,t)},e.prototype.error=function(t){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,t)},e.prototype.complete=function(){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||r===void 0||r.call(t)},e.prototype._subscribe=function(t){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(t))!==null&&i!==void 0?i:dn},e}(Y),Mt=function(n){x(e,n);function e(t){var r=n.call(this)||this;return r._value=t,r}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var r=n.prototype._subscribe.call(this,t);return!r.closed&&t.next(this._value),r},e.prototype.getValue=function(){var t=this,r=t.hasError,i=t.thrownError,o=t._value;if(r)throw i;return this._throwIfClosed(),o},e.prototype.next=function(t){n.prototype.next.call(this,this._value=t)},e}(Y),z={now:function(){return(z.delegate||Date).now()},delegate:void 0},$n=function(n){x(e,n);function e(t,r,i){t===void 0&&(t=1/0),r===void 0&&(r=1/0),i===void 0&&(i=z);var o=n.call(this)||this;return o._bufferSize=t,o._windowTime=r,o._timestampProvider=i,o._buffer=[],o._infiniteTimeWindow=!0,o._infiniteTimeWindow=r===1/0,o._bufferSize=Math.max(1,t),o._windowTime=Math.max(1,r),o}return e.prototype.next=function(t){var r=this,i=r.isStopped,o=r._buffer,u=r._infiniteTimeWindow,a=r._timestampProvider,s=r._windowTime;i||(o.push(t),!u&&o.push(a.now()+s)),this._trimBuffer(),n.prototype.next.call(this,t)},e.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(t),i=this,o=i._infiniteTimeWindow,u=i._buffer,a=u.slice(),s=0;s<a.length&&!t.closed;s+=o?1:2)t.next(a[s]);return this._checkFinalizedStatuses(t),r},e.prototype._trimBuffer=function(){var t=this,r=t._bufferSize,i=t._timestampProvider,o=t._buffer,u=t._infiniteTimeWindow,a=(u?1:2)*r;if(r<1/0&&a<o.length&&o.splice(0,o.length-a),!u){for(var s=i.now(),f=0,c=1;c<o.length&&o[c]<=s;c+=2)f=c;f&&o.splice(0,f+1)}},e}(Y),Xn=function(n){x(e,n);function e(t,r){return n.call(this)||this}return e.prototype.schedule=function(t,r){return this},e}(j),F={setInterval:function(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i=F.delegate;return i?.setInterval?i.setInterval.apply(i,S([n,e],E(t))):setInterval.apply(void 0,S([n,e],E(t)))},clearInterval:function(n){var e=F.delegate;return(e?.clearInterval||clearInterval)(n)},delegate:void 0},Bn=function(n){x(e,n);function e(t,r){var i=n.call(this,t,r)||this;return i.scheduler=t,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(t,r){var i;if(r===void 0&&(r=0),this.closed)return this;this.state=t;var o=this.id,u=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(u,o,r)),this.pending=!0,this.delay=r,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(u,this.id,r),this},e.prototype.requestAsyncId=function(t,r,i){return i===void 0&&(i=0),F.setInterval(t.flush.bind(t,this),i)},e.prototype.recycleAsyncId=function(t,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;r!=null&&F.clearInterval(r)},e.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(t,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,r){var i=!1,o;try{this.work(t)}catch(u){i=!0,o=u||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},e.prototype.unsubscribe=function(){if(!this.closed){var t=this,r=t.id,i=t.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,W(o,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},e}(Xn),fn=function(){function n(e,t){t===void 0&&(t=n.now),this.schedulerActionCtor=e,this.now=t}return n.prototype.schedule=function(e,t,r){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(r,t)},n.now=z.now,n}(),zn=function(n){x(e,n);function e(t,r){r===void 0&&(r=fn.now);var i=n.call(this,t,r)||this;return i.actions=[],i._active=!1,i}return e.prototype.flush=function(t){var r=this.actions;if(this._active){r.push(t);return}var i;this._active=!0;do if(i=t.execute(t.state,t.delay))break;while(t=r.shift());if(this._active=!1,i){for(;t=r.shift();)t.unsubscribe();throw i}},e}(fn),bn=new zn(Bn),Nn=bn,wn=new w(function(n){return n.complete()});function gn(n){return n&&l(n.schedule)}function N(n){return n[n.length-1]}function nt(n){return l(N(n))?n.pop():void 0}function nn(n){return gn(N(n))?n.pop():void 0}function tt(n,e){return typeof N(n)=="number"?n.pop():e}var tn=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function En(n){return l(n?.then)}function Sn(n){return l(n[B])}function xn(n){return Symbol.asyncIterator&&l(n?.[Symbol.asyncIterator])}function _n(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function et(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var In=et();function An(n){return l(n?.[In])}function Tn(n){return Mn(this,arguments,function(){var t,r,i,o;return hn(this,function(u){switch(u.label){case 0:t=n.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,G(t.read())];case 3:return r=u.sent(),i=r.value,o=r.done,o?[4,G(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,G(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function Cn(n){return l(n?.getReader)}function g(n){if(n instanceof w)return n;if(n!=null){if(Sn(n))return rt(n);if(tn(n))return it(n);if(En(n))return ot(n);if(xn(n))return Pn(n);if(An(n))return ut(n);if(Cn(n))return at(n)}throw _n(n)}function rt(n){return new w(function(e){var t=n[B]();if(l(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function it(n){return new w(function(e){for(var t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function ot(n){return new w(function(e){n.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,yn)})}function ut(n){return new w(function(e){var t,r;try{for(var i=M(n),o=i.next();!o.done;o=i.next()){var u=o.value;if(e.next(u),e.closed)return}}catch(a){t={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}e.complete()})}function Pn(n){return new w(function(e){st(n,e).catch(function(t){return e.error(t)})})}function at(n){return Pn(Tn(n))}function st(n,e){var t,r,i,o;return Wn(this,void 0,void 0,function(){var u,a;return hn(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),t=Dn(n),s.label=1;case 1:return[4,t.next()];case 2:if(r=s.sent(),!!r.done)return[3,4];if(u=r.value,e.next(u),e.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=s.sent(),i={error:a},[3,11];case 6:return s.trys.push([6,,9,10]),r&&!r.done&&(o=t.return)?[4,o.call(t)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function I(n,e,t,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=e.schedule(function(){t(),i?n.add(this.schedule(null,r)):this.unsubscribe()},r);if(n.add(o),!i)return o}function On(n,e){return e===void 0&&(e=0),m(function(t,r){t.subscribe(y(r,function(i){return I(r,n,function(){return r.next(i)},e)},function(){return I(r,n,function(){return r.complete()},e)},function(i){return I(r,n,function(){return r.error(i)},e)}))})}function jn(n,e){return e===void 0&&(e=0),m(function(t,r){r.add(n.schedule(function(){return t.subscribe(r)},e))})}function ft(n,e){return g(n).pipe(jn(e),On(e))}function ct(n,e){return g(n).pipe(jn(e),On(e))}function lt(n,e){return new w(function(t){var r=0;return e.schedule(function(){r===n.length?t.complete():(t.next(n[r++]),t.closed||this.schedule())})})}function vt(n,e){return new w(function(t){var r;return I(t,e,function(){r=n[In](),I(t,e,function(){var i,o,u;try{i=r.next(),o=i.value,u=i.done}catch(a){t.error(a);return}u?t.complete():t.next(o)},0,!0)}),function(){return l(r?.return)&&r.return()}})}function kn(n,e){if(!n)throw new Error("Iterable cannot be null");return new w(function(t){I(t,e,function(){var r=n[Symbol.asyncIterator]();I(t,e,function(){r.next().then(function(i){i.done?t.complete():t.next(i.value)})},0,!0)})})}function ht(n,e){return kn(Tn(n),e)}function dt(n,e){if(n!=null){if(Sn(n))return ft(n,e);if(tn(n))return lt(n,e);if(En(n))return ct(n,e);if(xn(n))return kn(n,e);if(An(n))return vt(n,e);if(Cn(n))return ht(n,e)}throw _n(n)}function Rn(n,e){return e?dt(n,e):g(n)}var en=Q(function(n){return function(){n(this),this.name="EmptyError",this.message="no elements in sequence"}});function Wt(n,e){var t=typeof e=="object";return new Promise(function(r,i){var o=new C({next:function(u){r(u),o.unsubscribe()},error:i,complete:function(){t?r(e.defaultValue):i(new en)}});n.subscribe(o)})}function pt(n){return n instanceof Date&&!isNaN(n)}function q(n,e){return m(function(t,r){var i=0;t.subscribe(y(r,function(o){r.next(n.call(e,o,i++))}))})}var yt=Array.isArray;function mt(n,e){return yt(e)?n.apply(void 0,S([],E(e))):n(e)}function Un(n){return q(function(e){return mt(n,e)})}function bt(n,e,t,r,i,o,u,a){var s=[],f=0,c=0,v=!1,d=function(){v&&!s.length&&!f&&e.complete()},b=function(h){return f<r?p(h):s.push(h)},p=function(h){o&&e.next(h),f++;var A=!1;g(t(h,c++)).subscribe(y(e,function(_){i?.(_),o?b(_):e.next(_)},function(){A=!0},void 0,function(){if(A)try{f--;for(var _=function(){var T=s.shift();u?I(e,u,function(){return p(T)}):p(T)};s.length&&f<r;)_();d()}catch(T){e.error(T)}}))};return n.subscribe(y(e,b,function(){v=!0,d()})),function(){a?.()}}function rn(n,e,t){return t===void 0&&(t=1/0),l(e)?rn(function(r,i){return q(function(o,u){return e(r,o,i,u)})(g(n(r,i)))},t):(typeof e=="number"&&(t=e),m(function(r,i){return bt(r,i,n,t)}))}function Ln(n){return n===void 0&&(n=1/0),rn(P,n)}function wt(){return Ln(1)}function cn(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return wt()(Rn(n,nn(n)))}function Dt(n){return new w(function(e){g(n()).subscribe(e)})}var gt=["addListener","removeListener"],Et=["addEventListener","removeEventListener"],St=["on","off"];function ln(n,e,t,r){if(l(t)&&(r=t,t=void 0),r)return ln(n,e,t).pipe(Un(r));var i=E(It(n)?Et.map(function(a){return function(s){return n[a](e,s,t)}}):xt(n)?gt.map(vn(n,e)):_t(n)?St.map(vn(n,e)):[],2),o=i[0],u=i[1];if(!o&&tn(n))return rn(function(a){return ln(a,e,t)})(g(n));if(!o)throw new TypeError("Invalid event target");return new w(function(a){var s=function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return a.next(1<f.length?f:f[0])};return o(s),function(){return u(s)}})}function vn(n,e){return function(t){return function(r){return n[t](e,r)}}}function xt(n){return l(n.addListener)&&l(n.removeListener)}function _t(n){return l(n.on)&&l(n.off)}function It(n){return l(n.addEventListener)&&l(n.removeEventListener)}function At(n,e,t){return t?At(n,e).pipe(Un(t)):new w(function(r){var i=function(){for(var u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];return r.next(u.length===1?u[0]:u)},o=n(i);return l(e)?function(){return e(i,o)}:void 0})}function Ft(n,e,t){n===void 0&&(n=0),t===void 0&&(t=Nn);var r=-1;return e!=null&&(gn(e)?t=e:r=e),new w(function(i){var o=pt(n)?+n-t.now():n;o<0&&(o=0);var u=0;return t.schedule(function(){i.closed||(i.next(u++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function Yt(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=nn(n),r=tt(n,1/0),i=n;return i.length?i.length===1?g(i[0]):Ln(r)(Rn(i,t)):wn}function Vn(n,e){return m(function(t,r){var i=0;t.subscribe(y(r,function(o){return n.call(e,o,i++)&&r.next(o)}))})}function qt(n,e){return e===void 0&&(e=bn),m(function(t,r){var i=null,o=null,u=null,a=function(){if(i){i.unsubscribe(),i=null;var f=o;o=null,r.next(f)}};function s(){var f=u+n,c=e.now();if(c<f){i=this.schedule(void 0,f-c),r.add(i);return}a()}t.subscribe(y(r,function(f){o=f,u=e.now(),i||(i=e.schedule(s,n),r.add(i))},function(){a(),r.complete()},void 0,function(){o=i=null}))})}function Tt(n){return m(function(e,t){var r=!1;e.subscribe(y(t,function(i){r=!0,t.next(i)},function(){r||t.next(n),t.complete()}))})}function Ct(n){return n<=0?function(){return wn}:m(function(e,t){var r=0;e.subscribe(y(t,function(i){++r<=n&&(t.next(i),n<=r&&t.complete())}))})}function Gt(n){return q(function(){return n})}function Pt(n,e){return e===void 0&&(e=P),n=n??Ot,m(function(t,r){var i,o=!0;t.subscribe(y(r,function(u){var a=e(u);(o||!n(i,a))&&(o=!1,i=a,r.next(u))}))})}function Ot(n,e){return n===e}function Kt(n,e){return Pt(function(t,r){return e?e(t[n],r[n]):t[n]===r[n]})}function jt(n){return n===void 0&&(n=kt),m(function(e,t){var r=!1;e.subscribe(y(t,function(i){r=!0,t.next(i)},function(){return r?t.complete():t.error(n())}))})}function kt(){return new en}function Zt(n,e){var t=arguments.length>=2;return function(r){return r.pipe(n?Vn(function(i,o){return n(i,o,r)}):P,Ct(1),t?Tt(e):jt(function(){return new en}))}}function Ht(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=n.length;if(t===0)throw new Error("list of properties cannot be empty.");return q(function(r){for(var i=r,o=0;o<t;o++){var u=i?.[n[o]];if(typeof u<"u")i=u;else return}return i})}function Rt(n){n===void 0&&(n={});var e=n.connector,t=e===void 0?function(){return new Y}:e,r=n.resetOnError,i=r===void 0?!0:r,o=n.resetOnComplete,u=o===void 0?!0:o,a=n.resetOnRefCountZero,s=a===void 0?!0:a;return function(f){var c,v,d,b=0,p=!1,h=!1,A=function(){v?.unsubscribe(),v=void 0},_=function(){A(),c=d=void 0,p=h=!1},T=function(){var O=c;_(),O?.unsubscribe()};return m(function(O,on){b++,!h&&!p&&A();var k=d=d??t();on.add(function(){b--,b===0&&!h&&!p&&(v=H(T,s))}),k.subscribe(on),!c&&b>0&&(c=new C({next:function(R){return k.next(R)},error:function(R){h=!0,A(),v=H(_,i,R),k.error(R)},complete:function(){p=!0,A(),v=H(_,u),k.complete()}}),g(O).subscribe(c))})(f)}}function H(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if(e===!0){n();return}if(e!==!1){var i=new C({next:function(){i.unsubscribe(),n()}});return g(e.apply(void 0,S([],E(t)))).subscribe(i)}}function Jt(n,e,t){var r,i,o,u,a=!1;return n&&typeof n=="object"?(r=n.bufferSize,u=r===void 0?1/0:r,i=n.windowTime,e=i===void 0?1/0:i,o=n.refCount,a=o===void 0?!1:o,t=n.scheduler):u=n??1/0,Rt({connector:function(){return new $n(u,e,t)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function Qt(n){return Vn(function(e,t){return n<=t})}function $t(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=nn(n);return m(function(r,i){(t?cn(n,r,t):cn(n,r)).subscribe(i)})}function Xt(n,e){return m(function(t,r){var i=null,o=0,u=!1,a=function(){return u&&!i&&r.complete()};t.subscribe(y(r,function(s){i?.unsubscribe();var f=0,c=o++;g(n(s,c)).subscribe(i=y(r,function(v){return r.next(e?e(s,v,c,f++):v)},function(){i=null,a()}))},function(){u=!0,a()}))})}function Bt(n){return m(function(e,t){g(n).subscribe(y(t,function(){return t.complete()},D)),!t.closed&&e.subscribe(t)})}function zt(n,e,t){var r=l(n)||e||t?{next:n,error:e,complete:t}:n;return r?m(function(i,o){var u;(u=r.subscribe)===null||u===void 0||u.call(r);var a=!0;i.subscribe(y(o,function(s){var f;(f=r.next)===null||f===void 0||f.call(r,s),o.next(s)},function(){var s;a=!1,(s=r.complete)===null||s===void 0||s.call(r),o.complete()},function(s){var f;a=!1,(f=r.error)===null||f===void 0||f.call(r,s),o.error(s)},function(){var s,f;a&&((s=r.unsubscribe)===null||s===void 0||s.call(r)),(f=r.finalize)===null||f===void 0||f.call(r)}))}):P}var Ut={leading:!0,trailing:!1};function Nt(n,e){return e===void 0&&(e=Ut),m(function(t,r){var i=e.leading,o=e.trailing,u=!1,a=null,s=null,f=!1,c=function(){s?.unsubscribe(),s=null,o&&(b(),f&&r.complete())},v=function(){s=null,f&&r.complete()},d=function(p){return s=g(n(p)).subscribe(y(r,c,v))},b=function(){if(u){u=!1;var p=a;a=null,r.next(p),!f&&d(p)}};t.subscribe(y(r,function(p){u=!0,a=p,!(s&&!s.closed)&&(i?b():d(p))},function(){f=!0,!(o&&u&&s&&!s.closed)&&r.complete()}))})}function ne(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=nt(n);return m(function(r,i){for(var o=n.length,u=new Array(o),a=n.map(function(){return!1}),s=!1,f=function(v){g(n[v]).subscribe(y(i,function(d){u[v]=d,!s&&!a[v]&&(a[v]=!0,(s=a.every(P))&&(a=null))},D))},c=0;c<o;c++)f(c);r.subscribe(y(i,function(v){if(s){var d=S([v],E(u));i.next(t?t.apply(void 0,S([],E(d))):d)}}))})}export{qt as A,Mt as B,w as O,Y as S,j as a,Vn as b,ln as c,rn as d,Yt as e,Zt as f,Ft as g,Nt as h,Ht as i,Dt as j,Ct as k,Bt as l,q as m,Kt as n,Wt as o,Vt as p,$t as q,Pt as r,Jt as s,zt as t,Gt as u,At as v,ne as w,Rt as x,Xt as y,Qt as z};
