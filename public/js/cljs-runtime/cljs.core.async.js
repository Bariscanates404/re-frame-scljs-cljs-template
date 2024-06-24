goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27202 = (function (f,blockable,meta27203){
this.f = f;
this.blockable = blockable;
this.meta27203 = meta27203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27204,meta27203__$1){
var self__ = this;
var _27204__$1 = this;
return (new cljs.core.async.t_cljs$core$async27202(self__.f,self__.blockable,meta27203__$1));
}));

(cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27204){
var self__ = this;
var _27204__$1 = this;
return self__.meta27203;
}));

(cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27203","meta27203",-1519982275,null)], null);
}));

(cljs.core.async.t_cljs$core$async27202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27202");

(cljs.core.async.t_cljs$core$async27202.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async27202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27202.
 */
cljs.core.async.__GT_t_cljs$core$async27202 = (function cljs$core$async$__GT_t_cljs$core$async27202(f,blockable,meta27203){
return (new cljs.core.async.t_cljs$core$async27202(f,blockable,meta27203));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27201 = arguments.length;
switch (G__27201) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async27202(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27265 = arguments.length;
switch (G__27265) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27283 = arguments.length;
switch (G__27283) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27299 = arguments.length;
switch (G__27299) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29314 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29314) : fn1.call(null, val_29314));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29314) : fn1.call(null, val_29314));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27304 = arguments.length;
switch (G__27304) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___29316 = n;
var x_29317 = (0);
while(true){
if((x_29317 < n__5593__auto___29316)){
(a[x_29317] = x_29317);

var G__29318 = (x_29317 + (1));
x_29317 = G__29318;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27308 = (function (flag,meta27309){
this.flag = flag;
this.meta27309 = meta27309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27310,meta27309__$1){
var self__ = this;
var _27310__$1 = this;
return (new cljs.core.async.t_cljs$core$async27308(self__.flag,meta27309__$1));
}));

(cljs.core.async.t_cljs$core$async27308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27310){
var self__ = this;
var _27310__$1 = this;
return self__.meta27309;
}));

(cljs.core.async.t_cljs$core$async27308.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27309","meta27309",-1699506383,null)], null);
}));

(cljs.core.async.t_cljs$core$async27308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27308");

(cljs.core.async.t_cljs$core$async27308.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async27308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27308.
 */
cljs.core.async.__GT_t_cljs$core$async27308 = (function cljs$core$async$__GT_t_cljs$core$async27308(flag,meta27309){
return (new cljs.core.async.t_cljs$core$async27308(flag,meta27309));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async27308(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27312 = (function (flag,cb,meta27313){
this.flag = flag;
this.cb = cb;
this.meta27313 = meta27313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27314,meta27313__$1){
var self__ = this;
var _27314__$1 = this;
return (new cljs.core.async.t_cljs$core$async27312(self__.flag,self__.cb,meta27313__$1));
}));

(cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27314){
var self__ = this;
var _27314__$1 = this;
return self__.meta27313;
}));

(cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27313","meta27313",1379960073,null)], null);
}));

(cljs.core.async.t_cljs$core$async27312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27312");

(cljs.core.async.t_cljs$core$async27312.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async27312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27312.
 */
cljs.core.async.__GT_t_cljs$core$async27312 = (function cljs$core$async$__GT_t_cljs$core$async27312(flag,cb,meta27313){
return (new cljs.core.async.t_cljs$core$async27312(flag,cb,meta27313));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async27312(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27328_SHARP_){
var G__27330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27328_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27330) : fret.call(null, G__27330));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27329_SHARP_){
var G__27331 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27329_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27331) : fret.call(null, G__27331));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29321 = (i + (1));
i = G__29321;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29322 = arguments.length;
var i__5727__auto___29323 = (0);
while(true){
if((i__5727__auto___29323 < len__5726__auto___29322)){
args__5732__auto__.push((arguments[i__5727__auto___29323]));

var G__29324 = (i__5727__auto___29323 + (1));
i__5727__auto___29323 = G__29324;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27339){
var map__27341 = p__27339;
var map__27341__$1 = cljs.core.__destructure_map(map__27341);
var opts = map__27341__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27337){
var G__27338 = cljs.core.first(seq27337);
var seq27337__$1 = cljs.core.next(seq27337);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27338,seq27337__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27349 = arguments.length;
switch (G__27349) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27119__auto___29326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_27388){
var state_val_27389 = (state_27388[(1)]);
if((state_val_27389 === (7))){
var inst_27382 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27398_29327 = state_27388__$1;
(statearr_27398_29327[(2)] = inst_27382);

(statearr_27398_29327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (1))){
var state_27388__$1 = state_27388;
var statearr_27399_29328 = state_27388__$1;
(statearr_27399_29328[(2)] = null);

(statearr_27399_29328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (4))){
var inst_27361 = (state_27388[(7)]);
var inst_27361__$1 = (state_27388[(2)]);
var inst_27364 = (inst_27361__$1 == null);
var state_27388__$1 = (function (){var statearr_27400 = state_27388;
(statearr_27400[(7)] = inst_27361__$1);

return statearr_27400;
})();
if(cljs.core.truth_(inst_27364)){
var statearr_27402_29329 = state_27388__$1;
(statearr_27402_29329[(1)] = (5));

} else {
var statearr_27403_29330 = state_27388__$1;
(statearr_27403_29330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (13))){
var state_27388__$1 = state_27388;
var statearr_27404_29331 = state_27388__$1;
(statearr_27404_29331[(2)] = null);

(statearr_27404_29331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (6))){
var inst_27361 = (state_27388[(7)]);
var state_27388__$1 = state_27388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27388__$1,(11),to,inst_27361);
} else {
if((state_val_27389 === (3))){
var inst_27386 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27388__$1,inst_27386);
} else {
if((state_val_27389 === (12))){
var state_27388__$1 = state_27388;
var statearr_27412_29333 = state_27388__$1;
(statearr_27412_29333[(2)] = null);

(statearr_27412_29333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (2))){
var state_27388__$1 = state_27388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27388__$1,(4),from);
} else {
if((state_val_27389 === (11))){
var inst_27373 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
if(cljs.core.truth_(inst_27373)){
var statearr_27414_29334 = state_27388__$1;
(statearr_27414_29334[(1)] = (12));

} else {
var statearr_27415_29335 = state_27388__$1;
(statearr_27415_29335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (9))){
var state_27388__$1 = state_27388;
var statearr_27417_29336 = state_27388__$1;
(statearr_27417_29336[(2)] = null);

(statearr_27417_29336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (5))){
var state_27388__$1 = state_27388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27418_29337 = state_27388__$1;
(statearr_27418_29337[(1)] = (8));

} else {
var statearr_27422_29338 = state_27388__$1;
(statearr_27422_29338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (14))){
var inst_27380 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27431_29339 = state_27388__$1;
(statearr_27431_29339[(2)] = inst_27380);

(statearr_27431_29339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (10))){
var inst_27370 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27440_29340 = state_27388__$1;
(statearr_27440_29340[(2)] = inst_27370);

(statearr_27440_29340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (8))){
var inst_27367 = cljs.core.async.close_BANG_(to);
var state_27388__$1 = state_27388;
var statearr_27453_29342 = state_27388__$1;
(statearr_27453_29342[(2)] = inst_27367);

(statearr_27453_29342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_27454 = [null,null,null,null,null,null,null,null];
(statearr_27454[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_27454[(1)] = (1));

return statearr_27454;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_27388){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_27388);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e27459){var ex__26859__auto__ = e27459;
var statearr_27460_29344 = state_27388;
(statearr_27460_29344[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_27388[(4)]))){
var statearr_27461_29345 = state_27388;
(statearr_27461_29345[(1)] = cljs.core.first((state_27388[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29346 = state_27388;
state_27388 = G__29346;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_27388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_27388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_27466 = f__27120__auto__();
(statearr_27466[(6)] = c__27119__auto___29326);

return statearr_27466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__27477){
var vec__27478 = p__27477;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27478,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27478,(1),null);
var job = vec__27478;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27119__auto___29348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_27485){
var state_val_27486 = (state_27485[(1)]);
if((state_val_27486 === (1))){
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27485__$1,(2),res,v);
} else {
if((state_val_27486 === (2))){
var inst_27482 = (state_27485[(2)]);
var inst_27483 = cljs.core.async.close_BANG_(res);
var state_27485__$1 = (function (){var statearr_27487 = state_27485;
(statearr_27487[(7)] = inst_27482);

return statearr_27487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27485__$1,inst_27483);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0 = (function (){
var statearr_27500 = [null,null,null,null,null,null,null,null];
(statearr_27500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__);

(statearr_27500[(1)] = (1));

return statearr_27500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1 = (function (state_27485){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_27485);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e27505){var ex__26859__auto__ = e27505;
var statearr_27510_29350 = state_27485;
(statearr_27510_29350[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_27485[(4)]))){
var statearr_27511_29351 = state_27485;
(statearr_27511_29351[(1)] = cljs.core.first((state_27485[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29352 = state_27485;
state_27485 = G__29352;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = function(state_27485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1.call(this,state_27485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_27512 = f__27120__auto__();
(statearr_27512[(6)] = c__27119__auto___29348);

return statearr_27512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__27513){
var vec__27514 = p__27513;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27514,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27514,(1),null);
var job = vec__27514;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___29355 = n;
var __29356 = (0);
while(true){
if((__29356 < n__5593__auto___29355)){
var G__27519_29357 = type;
var G__27519_29358__$1 = (((G__27519_29357 instanceof cljs.core.Keyword))?G__27519_29357.fqn:null);
switch (G__27519_29358__$1) {
case "compute":
var c__27119__auto___29360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29356,c__27119__auto___29360,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async){
return (function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = ((function (__29356,c__27119__auto___29360,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async){
return (function (state_27536){
var state_val_27537 = (state_27536[(1)]);
if((state_val_27537 === (1))){
var state_27536__$1 = state_27536;
var statearr_27541_29361 = state_27536__$1;
(statearr_27541_29361[(2)] = null);

(statearr_27541_29361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (2))){
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27536__$1,(4),jobs);
} else {
if((state_val_27537 === (3))){
var inst_27534 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27536__$1,inst_27534);
} else {
if((state_val_27537 === (4))){
var inst_27526 = (state_27536[(2)]);
var inst_27527 = process__$1(inst_27526);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27527)){
var statearr_27545_29362 = state_27536__$1;
(statearr_27545_29362[(1)] = (5));

} else {
var statearr_27546_29363 = state_27536__$1;
(statearr_27546_29363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (5))){
var state_27536__$1 = state_27536;
var statearr_27547_29364 = state_27536__$1;
(statearr_27547_29364[(2)] = null);

(statearr_27547_29364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (6))){
var state_27536__$1 = state_27536;
var statearr_27551_29365 = state_27536__$1;
(statearr_27551_29365[(2)] = null);

(statearr_27551_29365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (7))){
var inst_27532 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27553_29367 = state_27536__$1;
(statearr_27553_29367[(2)] = inst_27532);

(statearr_27553_29367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29356,c__27119__auto___29360,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async))
;
return ((function (__29356,switch__26855__auto__,c__27119__auto___29360,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0 = (function (){
var statearr_27554 = [null,null,null,null,null,null,null];
(statearr_27554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__);

(statearr_27554[(1)] = (1));

return statearr_27554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1 = (function (state_27536){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_27536);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e27559){var ex__26859__auto__ = e27559;
var statearr_27560_29369 = state_27536;
(statearr_27560_29369[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_27536[(4)]))){
var statearr_27561_29370 = state_27536;
(statearr_27561_29370[(1)] = cljs.core.first((state_27536[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29371 = state_27536;
state_27536 = G__29371;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = function(state_27536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1.call(this,state_27536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__;
})()
;})(__29356,switch__26855__auto__,c__27119__auto___29360,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async))
})();
var state__27121__auto__ = (function (){var statearr_27563 = f__27120__auto__();
(statearr_27563[(6)] = c__27119__auto___29360);

return statearr_27563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
});})(__29356,c__27119__auto___29360,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async))
);


break;
case "async":
var c__27119__auto___29372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29356,c__27119__auto___29372,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async){
return (function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = ((function (__29356,c__27119__auto___29372,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async){
return (function (state_27576){
var state_val_27577 = (state_27576[(1)]);
if((state_val_27577 === (1))){
var state_27576__$1 = state_27576;
var statearr_27579_29373 = state_27576__$1;
(statearr_27579_29373[(2)] = null);

(statearr_27579_29373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (2))){
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27576__$1,(4),jobs);
} else {
if((state_val_27577 === (3))){
var inst_27574 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27576__$1,inst_27574);
} else {
if((state_val_27577 === (4))){
var inst_27566 = (state_27576[(2)]);
var inst_27567 = async(inst_27566);
var state_27576__$1 = state_27576;
if(cljs.core.truth_(inst_27567)){
var statearr_27583_29374 = state_27576__$1;
(statearr_27583_29374[(1)] = (5));

} else {
var statearr_27584_29375 = state_27576__$1;
(statearr_27584_29375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (5))){
var state_27576__$1 = state_27576;
var statearr_27585_29376 = state_27576__$1;
(statearr_27585_29376[(2)] = null);

(statearr_27585_29376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (6))){
var state_27576__$1 = state_27576;
var statearr_27586_29377 = state_27576__$1;
(statearr_27586_29377[(2)] = null);

(statearr_27586_29377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (7))){
var inst_27572 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27587_29378 = state_27576__$1;
(statearr_27587_29378[(2)] = inst_27572);

(statearr_27587_29378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29356,c__27119__auto___29372,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async))
;
return ((function (__29356,switch__26855__auto__,c__27119__auto___29372,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0 = (function (){
var statearr_27588 = [null,null,null,null,null,null,null];
(statearr_27588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__);

(statearr_27588[(1)] = (1));

return statearr_27588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1 = (function (state_27576){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_27576);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e27608){var ex__26859__auto__ = e27608;
var statearr_27609_29381 = state_27576;
(statearr_27609_29381[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_27576[(4)]))){
var statearr_27615_29382 = state_27576;
(statearr_27615_29382[(1)] = cljs.core.first((state_27576[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29383 = state_27576;
state_27576 = G__29383;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = function(state_27576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1.call(this,state_27576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__;
})()
;})(__29356,switch__26855__auto__,c__27119__auto___29372,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async))
})();
var state__27121__auto__ = (function (){var statearr_27624 = f__27120__auto__();
(statearr_27624[(6)] = c__27119__auto___29372);

return statearr_27624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
});})(__29356,c__27119__auto___29372,G__27519_29357,G__27519_29358__$1,n__5593__auto___29355,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27519_29358__$1)].join('')));

}

var G__29384 = (__29356 + (1));
__29356 = G__29384;
continue;
} else {
}
break;
}

var c__27119__auto___29385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_27651){
var state_val_27652 = (state_27651[(1)]);
if((state_val_27652 === (7))){
var inst_27647 = (state_27651[(2)]);
var state_27651__$1 = state_27651;
var statearr_27653_29386 = state_27651__$1;
(statearr_27653_29386[(2)] = inst_27647);

(statearr_27653_29386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27652 === (1))){
var state_27651__$1 = state_27651;
var statearr_27654_29387 = state_27651__$1;
(statearr_27654_29387[(2)] = null);

(statearr_27654_29387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27652 === (4))){
var inst_27627 = (state_27651[(7)]);
var inst_27627__$1 = (state_27651[(2)]);
var inst_27633 = (inst_27627__$1 == null);
var state_27651__$1 = (function (){var statearr_27665 = state_27651;
(statearr_27665[(7)] = inst_27627__$1);

return statearr_27665;
})();
if(cljs.core.truth_(inst_27633)){
var statearr_27668_29388 = state_27651__$1;
(statearr_27668_29388[(1)] = (5));

} else {
var statearr_27674_29389 = state_27651__$1;
(statearr_27674_29389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27652 === (6))){
var inst_27627 = (state_27651[(7)]);
var inst_27637 = (state_27651[(8)]);
var inst_27637__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27639 = [inst_27627,inst_27637__$1];
var inst_27640 = (new cljs.core.PersistentVector(null,2,(5),inst_27638,inst_27639,null));
var state_27651__$1 = (function (){var statearr_27680 = state_27651;
(statearr_27680[(8)] = inst_27637__$1);

return statearr_27680;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27651__$1,(8),jobs,inst_27640);
} else {
if((state_val_27652 === (3))){
var inst_27649 = (state_27651[(2)]);
var state_27651__$1 = state_27651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27651__$1,inst_27649);
} else {
if((state_val_27652 === (2))){
var state_27651__$1 = state_27651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27651__$1,(4),from);
} else {
if((state_val_27652 === (9))){
var inst_27644 = (state_27651[(2)]);
var state_27651__$1 = (function (){var statearr_27691 = state_27651;
(statearr_27691[(9)] = inst_27644);

return statearr_27691;
})();
var statearr_27692_29390 = state_27651__$1;
(statearr_27692_29390[(2)] = null);

(statearr_27692_29390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27652 === (5))){
var inst_27635 = cljs.core.async.close_BANG_(jobs);
var state_27651__$1 = state_27651;
var statearr_27697_29392 = state_27651__$1;
(statearr_27697_29392[(2)] = inst_27635);

(statearr_27697_29392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27652 === (8))){
var inst_27637 = (state_27651[(8)]);
var inst_27642 = (state_27651[(2)]);
var state_27651__$1 = (function (){var statearr_27705 = state_27651;
(statearr_27705[(10)] = inst_27642);

return statearr_27705;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27651__$1,(9),results,inst_27637);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0 = (function (){
var statearr_27716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__);

(statearr_27716[(1)] = (1));

return statearr_27716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1 = (function (state_27651){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_27651);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e27717){var ex__26859__auto__ = e27717;
var statearr_27718_29394 = state_27651;
(statearr_27718_29394[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_27651[(4)]))){
var statearr_27721_29395 = state_27651;
(statearr_27721_29395[(1)] = cljs.core.first((state_27651[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29396 = state_27651;
state_27651 = G__29396;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = function(state_27651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1.call(this,state_27651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_27732 = f__27120__auto__();
(statearr_27732[(6)] = c__27119__auto___29385);

return statearr_27732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


var c__27119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_27775){
var state_val_27776 = (state_27775[(1)]);
if((state_val_27776 === (7))){
var inst_27771 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27777_29397 = state_27775__$1;
(statearr_27777_29397[(2)] = inst_27771);

(statearr_27777_29397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (20))){
var state_27775__$1 = state_27775;
var statearr_27778_29398 = state_27775__$1;
(statearr_27778_29398[(2)] = null);

(statearr_27778_29398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (1))){
var state_27775__$1 = state_27775;
var statearr_27779_29399 = state_27775__$1;
(statearr_27779_29399[(2)] = null);

(statearr_27779_29399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (4))){
var inst_27739 = (state_27775[(7)]);
var inst_27739__$1 = (state_27775[(2)]);
var inst_27740 = (inst_27739__$1 == null);
var state_27775__$1 = (function (){var statearr_27780 = state_27775;
(statearr_27780[(7)] = inst_27739__$1);

return statearr_27780;
})();
if(cljs.core.truth_(inst_27740)){
var statearr_27781_29400 = state_27775__$1;
(statearr_27781_29400[(1)] = (5));

} else {
var statearr_27782_29401 = state_27775__$1;
(statearr_27782_29401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (15))){
var inst_27752 = (state_27775[(8)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27775__$1,(18),to,inst_27752);
} else {
if((state_val_27776 === (21))){
var inst_27766 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27783_29403 = state_27775__$1;
(statearr_27783_29403[(2)] = inst_27766);

(statearr_27783_29403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (13))){
var inst_27768 = (state_27775[(2)]);
var state_27775__$1 = (function (){var statearr_27784 = state_27775;
(statearr_27784[(9)] = inst_27768);

return statearr_27784;
})();
var statearr_27785_29404 = state_27775__$1;
(statearr_27785_29404[(2)] = null);

(statearr_27785_29404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (6))){
var inst_27739 = (state_27775[(7)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27775__$1,(11),inst_27739);
} else {
if((state_val_27776 === (17))){
var inst_27761 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27761)){
var statearr_27790_29405 = state_27775__$1;
(statearr_27790_29405[(1)] = (19));

} else {
var statearr_27791_29406 = state_27775__$1;
(statearr_27791_29406[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (3))){
var inst_27773 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27775__$1,inst_27773);
} else {
if((state_val_27776 === (12))){
var inst_27749 = (state_27775[(10)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27775__$1,(14),inst_27749);
} else {
if((state_val_27776 === (2))){
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27775__$1,(4),results);
} else {
if((state_val_27776 === (19))){
var state_27775__$1 = state_27775;
var statearr_27793_29407 = state_27775__$1;
(statearr_27793_29407[(2)] = null);

(statearr_27793_29407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (11))){
var inst_27749 = (state_27775[(2)]);
var state_27775__$1 = (function (){var statearr_27796 = state_27775;
(statearr_27796[(10)] = inst_27749);

return statearr_27796;
})();
var statearr_27802_29408 = state_27775__$1;
(statearr_27802_29408[(2)] = null);

(statearr_27802_29408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (9))){
var state_27775__$1 = state_27775;
var statearr_27806_29409 = state_27775__$1;
(statearr_27806_29409[(2)] = null);

(statearr_27806_29409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (5))){
var state_27775__$1 = state_27775;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27807_29410 = state_27775__$1;
(statearr_27807_29410[(1)] = (8));

} else {
var statearr_27808_29411 = state_27775__$1;
(statearr_27808_29411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (14))){
var inst_27755 = (state_27775[(11)]);
var inst_27752 = (state_27775[(8)]);
var inst_27752__$1 = (state_27775[(2)]);
var inst_27754 = (inst_27752__$1 == null);
var inst_27755__$1 = cljs.core.not(inst_27754);
var state_27775__$1 = (function (){var statearr_27809 = state_27775;
(statearr_27809[(11)] = inst_27755__$1);

(statearr_27809[(8)] = inst_27752__$1);

return statearr_27809;
})();
if(inst_27755__$1){
var statearr_27810_29416 = state_27775__$1;
(statearr_27810_29416[(1)] = (15));

} else {
var statearr_27811_29417 = state_27775__$1;
(statearr_27811_29417[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (16))){
var inst_27755 = (state_27775[(11)]);
var state_27775__$1 = state_27775;
var statearr_27816_29418 = state_27775__$1;
(statearr_27816_29418[(2)] = inst_27755);

(statearr_27816_29418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (10))){
var inst_27746 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27817_29419 = state_27775__$1;
(statearr_27817_29419[(2)] = inst_27746);

(statearr_27817_29419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (18))){
var inst_27758 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27818_29420 = state_27775__$1;
(statearr_27818_29420[(2)] = inst_27758);

(statearr_27818_29420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27776 === (8))){
var inst_27743 = cljs.core.async.close_BANG_(to);
var state_27775__$1 = state_27775;
var statearr_27819_29421 = state_27775__$1;
(statearr_27819_29421[(2)] = inst_27743);

(statearr_27819_29421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0 = (function (){
var statearr_27820 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__);

(statearr_27820[(1)] = (1));

return statearr_27820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1 = (function (state_27775){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_27775);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e27821){var ex__26859__auto__ = e27821;
var statearr_27822_29422 = state_27775;
(statearr_27822_29422[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_27775[(4)]))){
var statearr_27823_29423 = state_27775;
(statearr_27823_29423[(1)] = cljs.core.first((state_27775[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29424 = state_27775;
state_27775 = G__29424;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__ = function(state_27775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1.call(this,state_27775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_27824 = f__27120__auto__();
(statearr_27824[(6)] = c__27119__auto__);

return statearr_27824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));

return c__27119__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27826 = arguments.length;
switch (G__27826) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27832 = arguments.length;
switch (G__27832) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27834 = arguments.length;
switch (G__27834) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27119__auto___29428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_27863){
var state_val_27864 = (state_27863[(1)]);
if((state_val_27864 === (7))){
var inst_27859 = (state_27863[(2)]);
var state_27863__$1 = state_27863;
var statearr_27865_29429 = state_27863__$1;
(statearr_27865_29429[(2)] = inst_27859);

(statearr_27865_29429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (1))){
var state_27863__$1 = state_27863;
var statearr_27866_29430 = state_27863__$1;
(statearr_27866_29430[(2)] = null);

(statearr_27866_29430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (4))){
var inst_27838 = (state_27863[(7)]);
var inst_27838__$1 = (state_27863[(2)]);
var inst_27839 = (inst_27838__$1 == null);
var state_27863__$1 = (function (){var statearr_27867 = state_27863;
(statearr_27867[(7)] = inst_27838__$1);

return statearr_27867;
})();
if(cljs.core.truth_(inst_27839)){
var statearr_27868_29432 = state_27863__$1;
(statearr_27868_29432[(1)] = (5));

} else {
var statearr_27869_29433 = state_27863__$1;
(statearr_27869_29433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (13))){
var state_27863__$1 = state_27863;
var statearr_27870_29434 = state_27863__$1;
(statearr_27870_29434[(2)] = null);

(statearr_27870_29434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (6))){
var inst_27838 = (state_27863[(7)]);
var inst_27845 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27838) : p.call(null, inst_27838));
var state_27863__$1 = state_27863;
if(cljs.core.truth_(inst_27845)){
var statearr_27871_29436 = state_27863__$1;
(statearr_27871_29436[(1)] = (9));

} else {
var statearr_27872_29437 = state_27863__$1;
(statearr_27872_29437[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (3))){
var inst_27861 = (state_27863[(2)]);
var state_27863__$1 = state_27863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27863__$1,inst_27861);
} else {
if((state_val_27864 === (12))){
var state_27863__$1 = state_27863;
var statearr_27873_29438 = state_27863__$1;
(statearr_27873_29438[(2)] = null);

(statearr_27873_29438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (2))){
var state_27863__$1 = state_27863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27863__$1,(4),ch);
} else {
if((state_val_27864 === (11))){
var inst_27838 = (state_27863[(7)]);
var inst_27850 = (state_27863[(2)]);
var state_27863__$1 = state_27863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27863__$1,(8),inst_27850,inst_27838);
} else {
if((state_val_27864 === (9))){
var state_27863__$1 = state_27863;
var statearr_27874_29439 = state_27863__$1;
(statearr_27874_29439[(2)] = tc);

(statearr_27874_29439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (5))){
var inst_27842 = cljs.core.async.close_BANG_(tc);
var inst_27843 = cljs.core.async.close_BANG_(fc);
var state_27863__$1 = (function (){var statearr_27875 = state_27863;
(statearr_27875[(8)] = inst_27842);

return statearr_27875;
})();
var statearr_27876_29440 = state_27863__$1;
(statearr_27876_29440[(2)] = inst_27843);

(statearr_27876_29440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (14))){
var inst_27857 = (state_27863[(2)]);
var state_27863__$1 = state_27863;
var statearr_27877_29441 = state_27863__$1;
(statearr_27877_29441[(2)] = inst_27857);

(statearr_27877_29441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (10))){
var state_27863__$1 = state_27863;
var statearr_27881_29442 = state_27863__$1;
(statearr_27881_29442[(2)] = fc);

(statearr_27881_29442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27864 === (8))){
var inst_27852 = (state_27863[(2)]);
var state_27863__$1 = state_27863;
if(cljs.core.truth_(inst_27852)){
var statearr_27882_29443 = state_27863__$1;
(statearr_27882_29443[(1)] = (12));

} else {
var statearr_27883_29444 = state_27863__$1;
(statearr_27883_29444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_27884 = [null,null,null,null,null,null,null,null,null];
(statearr_27884[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_27884[(1)] = (1));

return statearr_27884;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_27863){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_27863);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e27887){var ex__26859__auto__ = e27887;
var statearr_27888_29445 = state_27863;
(statearr_27888_29445[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_27863[(4)]))){
var statearr_27889_29446 = state_27863;
(statearr_27889_29446[(1)] = cljs.core.first((state_27863[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29447 = state_27863;
state_27863 = G__29447;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_27863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_27863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_27894 = f__27120__auto__();
(statearr_27894[(6)] = c__27119__auto___29428);

return statearr_27894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_27930){
var state_val_27931 = (state_27930[(1)]);
if((state_val_27931 === (7))){
var inst_27925 = (state_27930[(2)]);
var state_27930__$1 = state_27930;
var statearr_27934_29448 = state_27930__$1;
(statearr_27934_29448[(2)] = inst_27925);

(statearr_27934_29448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (1))){
var inst_27897 = init;
var inst_27898 = inst_27897;
var state_27930__$1 = (function (){var statearr_27937 = state_27930;
(statearr_27937[(7)] = inst_27898);

return statearr_27937;
})();
var statearr_27938_29453 = state_27930__$1;
(statearr_27938_29453[(2)] = null);

(statearr_27938_29453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (4))){
var inst_27903 = (state_27930[(8)]);
var inst_27903__$1 = (state_27930[(2)]);
var inst_27906 = (inst_27903__$1 == null);
var state_27930__$1 = (function (){var statearr_27941 = state_27930;
(statearr_27941[(8)] = inst_27903__$1);

return statearr_27941;
})();
if(cljs.core.truth_(inst_27906)){
var statearr_27942_29457 = state_27930__$1;
(statearr_27942_29457[(1)] = (5));

} else {
var statearr_27943_29458 = state_27930__$1;
(statearr_27943_29458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (6))){
var inst_27898 = (state_27930[(7)]);
var inst_27903 = (state_27930[(8)]);
var inst_27913 = (state_27930[(9)]);
var inst_27913__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27898,inst_27903) : f.call(null, inst_27898,inst_27903));
var inst_27914 = cljs.core.reduced_QMARK_(inst_27913__$1);
var state_27930__$1 = (function (){var statearr_27945 = state_27930;
(statearr_27945[(9)] = inst_27913__$1);

return statearr_27945;
})();
if(inst_27914){
var statearr_27946_29459 = state_27930__$1;
(statearr_27946_29459[(1)] = (8));

} else {
var statearr_27948_29460 = state_27930__$1;
(statearr_27948_29460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (3))){
var inst_27927 = (state_27930[(2)]);
var state_27930__$1 = state_27930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27930__$1,inst_27927);
} else {
if((state_val_27931 === (2))){
var state_27930__$1 = state_27930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27930__$1,(4),ch);
} else {
if((state_val_27931 === (9))){
var inst_27913 = (state_27930[(9)]);
var inst_27898 = inst_27913;
var state_27930__$1 = (function (){var statearr_27949 = state_27930;
(statearr_27949[(7)] = inst_27898);

return statearr_27949;
})();
var statearr_27950_29464 = state_27930__$1;
(statearr_27950_29464[(2)] = null);

(statearr_27950_29464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (5))){
var inst_27898 = (state_27930[(7)]);
var state_27930__$1 = state_27930;
var statearr_27951_29465 = state_27930__$1;
(statearr_27951_29465[(2)] = inst_27898);

(statearr_27951_29465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (10))){
var inst_27920 = (state_27930[(2)]);
var state_27930__$1 = state_27930;
var statearr_27952_29466 = state_27930__$1;
(statearr_27952_29466[(2)] = inst_27920);

(statearr_27952_29466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (8))){
var inst_27913 = (state_27930[(9)]);
var inst_27916 = cljs.core.deref(inst_27913);
var state_27930__$1 = state_27930;
var statearr_27954_29470 = state_27930__$1;
(statearr_27954_29470[(2)] = inst_27916);

(statearr_27954_29470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__26856__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26856__auto____0 = (function (){
var statearr_27955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27955[(0)] = cljs$core$async$reduce_$_state_machine__26856__auto__);

(statearr_27955[(1)] = (1));

return statearr_27955;
});
var cljs$core$async$reduce_$_state_machine__26856__auto____1 = (function (state_27930){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_27930);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e27957){var ex__26859__auto__ = e27957;
var statearr_27958_29471 = state_27930;
(statearr_27958_29471[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_27930[(4)]))){
var statearr_27959_29472 = state_27930;
(statearr_27959_29472[(1)] = cljs.core.first((state_27930[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29476 = state_27930;
state_27930 = G__29476;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26856__auto__ = function(state_27930){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26856__auto____1.call(this,state_27930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26856__auto____0;
cljs$core$async$reduce_$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26856__auto____1;
return cljs$core$async$reduce_$_state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_27960 = f__27120__auto__();
(statearr_27960[(6)] = c__27119__auto__);

return statearr_27960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));

return c__27119__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__27119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_27968){
var state_val_27969 = (state_27968[(1)]);
if((state_val_27969 === (1))){
var inst_27962 = cljs.core.async.reduce(f__$1,init,ch);
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27968__$1,(2),inst_27962);
} else {
if((state_val_27969 === (2))){
var inst_27964 = (state_27968[(2)]);
var inst_27965 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27964) : f__$1.call(null, inst_27964));
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27968__$1,inst_27965);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26856__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26856__auto____0 = (function (){
var statearr_27970 = [null,null,null,null,null,null,null];
(statearr_27970[(0)] = cljs$core$async$transduce_$_state_machine__26856__auto__);

(statearr_27970[(1)] = (1));

return statearr_27970;
});
var cljs$core$async$transduce_$_state_machine__26856__auto____1 = (function (state_27968){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_27968);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e27971){var ex__26859__auto__ = e27971;
var statearr_27972_29481 = state_27968;
(statearr_27972_29481[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_27968[(4)]))){
var statearr_27973_29485 = state_27968;
(statearr_27973_29485[(1)] = cljs.core.first((state_27968[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29486 = state_27968;
state_27968 = G__29486;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26856__auto__ = function(state_27968){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26856__auto____1.call(this,state_27968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26856__auto____0;
cljs$core$async$transduce_$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26856__auto____1;
return cljs$core$async$transduce_$_state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_27974 = f__27120__auto__();
(statearr_27974[(6)] = c__27119__auto__);

return statearr_27974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));

return c__27119__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__27976 = arguments.length;
switch (G__27976) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_28001){
var state_val_28002 = (state_28001[(1)]);
if((state_val_28002 === (7))){
var inst_27983 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28003_29491 = state_28001__$1;
(statearr_28003_29491[(2)] = inst_27983);

(statearr_28003_29491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (1))){
var inst_27977 = cljs.core.seq(coll);
var inst_27978 = inst_27977;
var state_28001__$1 = (function (){var statearr_28005 = state_28001;
(statearr_28005[(7)] = inst_27978);

return statearr_28005;
})();
var statearr_28006_29492 = state_28001__$1;
(statearr_28006_29492[(2)] = null);

(statearr_28006_29492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (4))){
var inst_27978 = (state_28001[(7)]);
var inst_27981 = cljs.core.first(inst_27978);
var state_28001__$1 = state_28001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28001__$1,(7),ch,inst_27981);
} else {
if((state_val_28002 === (13))){
var inst_27995 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28007_29496 = state_28001__$1;
(statearr_28007_29496[(2)] = inst_27995);

(statearr_28007_29496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (6))){
var inst_27986 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
if(cljs.core.truth_(inst_27986)){
var statearr_28009_29497 = state_28001__$1;
(statearr_28009_29497[(1)] = (8));

} else {
var statearr_28010_29498 = state_28001__$1;
(statearr_28010_29498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (3))){
var inst_27999 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28001__$1,inst_27999);
} else {
if((state_val_28002 === (12))){
var state_28001__$1 = state_28001;
var statearr_28012_29499 = state_28001__$1;
(statearr_28012_29499[(2)] = null);

(statearr_28012_29499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (2))){
var inst_27978 = (state_28001[(7)]);
var state_28001__$1 = state_28001;
if(cljs.core.truth_(inst_27978)){
var statearr_28014_29500 = state_28001__$1;
(statearr_28014_29500[(1)] = (4));

} else {
var statearr_28015_29501 = state_28001__$1;
(statearr_28015_29501[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (11))){
var inst_27992 = cljs.core.async.close_BANG_(ch);
var state_28001__$1 = state_28001;
var statearr_28016_29505 = state_28001__$1;
(statearr_28016_29505[(2)] = inst_27992);

(statearr_28016_29505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (9))){
var state_28001__$1 = state_28001;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28017_29506 = state_28001__$1;
(statearr_28017_29506[(1)] = (11));

} else {
var statearr_28018_29507 = state_28001__$1;
(statearr_28018_29507[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (5))){
var inst_27978 = (state_28001[(7)]);
var state_28001__$1 = state_28001;
var statearr_28019_29508 = state_28001__$1;
(statearr_28019_29508[(2)] = inst_27978);

(statearr_28019_29508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (10))){
var inst_27997 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28026_29509 = state_28001__$1;
(statearr_28026_29509[(2)] = inst_27997);

(statearr_28026_29509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (8))){
var inst_27978 = (state_28001[(7)]);
var inst_27988 = cljs.core.next(inst_27978);
var inst_27978__$1 = inst_27988;
var state_28001__$1 = (function (){var statearr_28027 = state_28001;
(statearr_28027[(7)] = inst_27978__$1);

return statearr_28027;
})();
var statearr_28028_29510 = state_28001__$1;
(statearr_28028_29510[(2)] = null);

(statearr_28028_29510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_28029 = [null,null,null,null,null,null,null,null];
(statearr_28029[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_28029[(1)] = (1));

return statearr_28029;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_28001){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_28001);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e28030){var ex__26859__auto__ = e28030;
var statearr_28031_29511 = state_28001;
(statearr_28031_29511[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_28001[(4)]))){
var statearr_28032_29512 = state_28001;
(statearr_28032_29512[(1)] = cljs.core.first((state_28001[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29513 = state_28001;
state_28001 = G__29513;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_28001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_28001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_28039 = f__27120__auto__();
(statearr_28039[(6)] = c__27119__auto__);

return statearr_28039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));

return c__27119__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28044 = arguments.length;
switch (G__28044) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_29516 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29516(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29517 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29517(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29518 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29518(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29519 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29519(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28058 = (function (ch,cs,meta28059){
this.ch = ch;
this.cs = cs;
this.meta28059 = meta28059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28060,meta28059__$1){
var self__ = this;
var _28060__$1 = this;
return (new cljs.core.async.t_cljs$core$async28058(self__.ch,self__.cs,meta28059__$1));
}));

(cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28060){
var self__ = this;
var _28060__$1 = this;
return self__.meta28059;
}));

(cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28059","meta28059",1508091418,null)], null);
}));

(cljs.core.async.t_cljs$core$async28058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28058");

(cljs.core.async.t_cljs$core$async28058.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28058.
 */
cljs.core.async.__GT_t_cljs$core$async28058 = (function cljs$core$async$__GT_t_cljs$core$async28058(ch,cs,meta28059){
return (new cljs.core.async.t_cljs$core$async28058(ch,cs,meta28059));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async28058(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__27119__auto___29520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_28222){
var state_val_28223 = (state_28222[(1)]);
if((state_val_28223 === (7))){
var inst_28216 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28224_29521 = state_28222__$1;
(statearr_28224_29521[(2)] = inst_28216);

(statearr_28224_29521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (20))){
var inst_28116 = (state_28222[(7)]);
var inst_28130 = cljs.core.first(inst_28116);
var inst_28131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28130,(0),null);
var inst_28132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28130,(1),null);
var state_28222__$1 = (function (){var statearr_28227 = state_28222;
(statearr_28227[(8)] = inst_28131);

return statearr_28227;
})();
if(cljs.core.truth_(inst_28132)){
var statearr_28228_29522 = state_28222__$1;
(statearr_28228_29522[(1)] = (22));

} else {
var statearr_28229_29523 = state_28222__$1;
(statearr_28229_29523[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (27))){
var inst_28081 = (state_28222[(9)]);
var inst_28167 = (state_28222[(10)]);
var inst_28162 = (state_28222[(11)]);
var inst_28160 = (state_28222[(12)]);
var inst_28167__$1 = cljs.core._nth(inst_28160,inst_28162);
var inst_28168 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28167__$1,inst_28081,done);
var state_28222__$1 = (function (){var statearr_28232 = state_28222;
(statearr_28232[(10)] = inst_28167__$1);

return statearr_28232;
})();
if(cljs.core.truth_(inst_28168)){
var statearr_28233_29524 = state_28222__$1;
(statearr_28233_29524[(1)] = (30));

} else {
var statearr_28234_29525 = state_28222__$1;
(statearr_28234_29525[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (1))){
var state_28222__$1 = state_28222;
var statearr_28235_29526 = state_28222__$1;
(statearr_28235_29526[(2)] = null);

(statearr_28235_29526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (24))){
var inst_28116 = (state_28222[(7)]);
var inst_28137 = (state_28222[(2)]);
var inst_28138 = cljs.core.next(inst_28116);
var inst_28092 = inst_28138;
var inst_28093 = null;
var inst_28094 = (0);
var inst_28095 = (0);
var state_28222__$1 = (function (){var statearr_28236 = state_28222;
(statearr_28236[(13)] = inst_28092);

(statearr_28236[(14)] = inst_28094);

(statearr_28236[(15)] = inst_28095);

(statearr_28236[(16)] = inst_28093);

(statearr_28236[(17)] = inst_28137);

return statearr_28236;
})();
var statearr_28237_29527 = state_28222__$1;
(statearr_28237_29527[(2)] = null);

(statearr_28237_29527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (39))){
var state_28222__$1 = state_28222;
var statearr_28241_29528 = state_28222__$1;
(statearr_28241_29528[(2)] = null);

(statearr_28241_29528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (4))){
var inst_28081 = (state_28222[(9)]);
var inst_28081__$1 = (state_28222[(2)]);
var inst_28083 = (inst_28081__$1 == null);
var state_28222__$1 = (function (){var statearr_28242 = state_28222;
(statearr_28242[(9)] = inst_28081__$1);

return statearr_28242;
})();
if(cljs.core.truth_(inst_28083)){
var statearr_28243_29529 = state_28222__$1;
(statearr_28243_29529[(1)] = (5));

} else {
var statearr_28244_29530 = state_28222__$1;
(statearr_28244_29530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (15))){
var inst_28092 = (state_28222[(13)]);
var inst_28094 = (state_28222[(14)]);
var inst_28095 = (state_28222[(15)]);
var inst_28093 = (state_28222[(16)]);
var inst_28112 = (state_28222[(2)]);
var inst_28113 = (inst_28095 + (1));
var tmp28238 = inst_28092;
var tmp28239 = inst_28094;
var tmp28240 = inst_28093;
var inst_28092__$1 = tmp28238;
var inst_28093__$1 = tmp28240;
var inst_28094__$1 = tmp28239;
var inst_28095__$1 = inst_28113;
var state_28222__$1 = (function (){var statearr_28245 = state_28222;
(statearr_28245[(18)] = inst_28112);

(statearr_28245[(13)] = inst_28092__$1);

(statearr_28245[(14)] = inst_28094__$1);

(statearr_28245[(15)] = inst_28095__$1);

(statearr_28245[(16)] = inst_28093__$1);

return statearr_28245;
})();
var statearr_28247_29531 = state_28222__$1;
(statearr_28247_29531[(2)] = null);

(statearr_28247_29531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (21))){
var inst_28141 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28251_29532 = state_28222__$1;
(statearr_28251_29532[(2)] = inst_28141);

(statearr_28251_29532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (31))){
var inst_28167 = (state_28222[(10)]);
var inst_28171 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_28167);
var state_28222__$1 = state_28222;
var statearr_28252_29533 = state_28222__$1;
(statearr_28252_29533[(2)] = inst_28171);

(statearr_28252_29533[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (32))){
var inst_28159 = (state_28222[(19)]);
var inst_28162 = (state_28222[(11)]);
var inst_28161 = (state_28222[(20)]);
var inst_28160 = (state_28222[(12)]);
var inst_28173 = (state_28222[(2)]);
var inst_28174 = (inst_28162 + (1));
var tmp28248 = inst_28159;
var tmp28249 = inst_28161;
var tmp28250 = inst_28160;
var inst_28159__$1 = tmp28248;
var inst_28160__$1 = tmp28250;
var inst_28161__$1 = tmp28249;
var inst_28162__$1 = inst_28174;
var state_28222__$1 = (function (){var statearr_28253 = state_28222;
(statearr_28253[(21)] = inst_28173);

(statearr_28253[(19)] = inst_28159__$1);

(statearr_28253[(11)] = inst_28162__$1);

(statearr_28253[(20)] = inst_28161__$1);

(statearr_28253[(12)] = inst_28160__$1);

return statearr_28253;
})();
var statearr_28254_29534 = state_28222__$1;
(statearr_28254_29534[(2)] = null);

(statearr_28254_29534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (40))){
var inst_28189 = (state_28222[(22)]);
var inst_28193 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_28189);
var state_28222__$1 = state_28222;
var statearr_28255_29535 = state_28222__$1;
(statearr_28255_29535[(2)] = inst_28193);

(statearr_28255_29535[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (33))){
var inst_28177 = (state_28222[(23)]);
var inst_28179 = cljs.core.chunked_seq_QMARK_(inst_28177);
var state_28222__$1 = state_28222;
if(inst_28179){
var statearr_28257_29536 = state_28222__$1;
(statearr_28257_29536[(1)] = (36));

} else {
var statearr_28258_29537 = state_28222__$1;
(statearr_28258_29537[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (13))){
var inst_28106 = (state_28222[(24)]);
var inst_28109 = cljs.core.async.close_BANG_(inst_28106);
var state_28222__$1 = state_28222;
var statearr_28259_29538 = state_28222__$1;
(statearr_28259_29538[(2)] = inst_28109);

(statearr_28259_29538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (22))){
var inst_28131 = (state_28222[(8)]);
var inst_28134 = cljs.core.async.close_BANG_(inst_28131);
var state_28222__$1 = state_28222;
var statearr_28260_29539 = state_28222__$1;
(statearr_28260_29539[(2)] = inst_28134);

(statearr_28260_29539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (36))){
var inst_28177 = (state_28222[(23)]);
var inst_28182 = cljs.core.chunk_first(inst_28177);
var inst_28183 = cljs.core.chunk_rest(inst_28177);
var inst_28184 = cljs.core.count(inst_28182);
var inst_28159 = inst_28183;
var inst_28160 = inst_28182;
var inst_28161 = inst_28184;
var inst_28162 = (0);
var state_28222__$1 = (function (){var statearr_28261 = state_28222;
(statearr_28261[(19)] = inst_28159);

(statearr_28261[(11)] = inst_28162);

(statearr_28261[(20)] = inst_28161);

(statearr_28261[(12)] = inst_28160);

return statearr_28261;
})();
var statearr_28262_29540 = state_28222__$1;
(statearr_28262_29540[(2)] = null);

(statearr_28262_29540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (41))){
var inst_28177 = (state_28222[(23)]);
var inst_28195 = (state_28222[(2)]);
var inst_28196 = cljs.core.next(inst_28177);
var inst_28159 = inst_28196;
var inst_28160 = null;
var inst_28161 = (0);
var inst_28162 = (0);
var state_28222__$1 = (function (){var statearr_28264 = state_28222;
(statearr_28264[(19)] = inst_28159);

(statearr_28264[(25)] = inst_28195);

(statearr_28264[(11)] = inst_28162);

(statearr_28264[(20)] = inst_28161);

(statearr_28264[(12)] = inst_28160);

return statearr_28264;
})();
var statearr_28265_29541 = state_28222__$1;
(statearr_28265_29541[(2)] = null);

(statearr_28265_29541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (43))){
var state_28222__$1 = state_28222;
var statearr_28266_29542 = state_28222__$1;
(statearr_28266_29542[(2)] = null);

(statearr_28266_29542[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (29))){
var inst_28204 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28267_29543 = state_28222__$1;
(statearr_28267_29543[(2)] = inst_28204);

(statearr_28267_29543[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (44))){
var inst_28213 = (state_28222[(2)]);
var state_28222__$1 = (function (){var statearr_28268 = state_28222;
(statearr_28268[(26)] = inst_28213);

return statearr_28268;
})();
var statearr_28269_29544 = state_28222__$1;
(statearr_28269_29544[(2)] = null);

(statearr_28269_29544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (6))){
var inst_28151 = (state_28222[(27)]);
var inst_28150 = cljs.core.deref(cs);
var inst_28151__$1 = cljs.core.keys(inst_28150);
var inst_28152 = cljs.core.count(inst_28151__$1);
var inst_28153 = cljs.core.reset_BANG_(dctr,inst_28152);
var inst_28158 = cljs.core.seq(inst_28151__$1);
var inst_28159 = inst_28158;
var inst_28160 = null;
var inst_28161 = (0);
var inst_28162 = (0);
var state_28222__$1 = (function (){var statearr_28270 = state_28222;
(statearr_28270[(27)] = inst_28151__$1);

(statearr_28270[(28)] = inst_28153);

(statearr_28270[(19)] = inst_28159);

(statearr_28270[(11)] = inst_28162);

(statearr_28270[(20)] = inst_28161);

(statearr_28270[(12)] = inst_28160);

return statearr_28270;
})();
var statearr_28271_29545 = state_28222__$1;
(statearr_28271_29545[(2)] = null);

(statearr_28271_29545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (28))){
var inst_28159 = (state_28222[(19)]);
var inst_28177 = (state_28222[(23)]);
var inst_28177__$1 = cljs.core.seq(inst_28159);
var state_28222__$1 = (function (){var statearr_28272 = state_28222;
(statearr_28272[(23)] = inst_28177__$1);

return statearr_28272;
})();
if(inst_28177__$1){
var statearr_28273_29546 = state_28222__$1;
(statearr_28273_29546[(1)] = (33));

} else {
var statearr_28274_29547 = state_28222__$1;
(statearr_28274_29547[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (25))){
var inst_28162 = (state_28222[(11)]);
var inst_28161 = (state_28222[(20)]);
var inst_28164 = (inst_28162 < inst_28161);
var inst_28165 = inst_28164;
var state_28222__$1 = state_28222;
if(cljs.core.truth_(inst_28165)){
var statearr_28275_29548 = state_28222__$1;
(statearr_28275_29548[(1)] = (27));

} else {
var statearr_28276_29549 = state_28222__$1;
(statearr_28276_29549[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (34))){
var state_28222__$1 = state_28222;
var statearr_28277_29550 = state_28222__$1;
(statearr_28277_29550[(2)] = null);

(statearr_28277_29550[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (17))){
var state_28222__$1 = state_28222;
var statearr_28278_29551 = state_28222__$1;
(statearr_28278_29551[(2)] = null);

(statearr_28278_29551[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (3))){
var inst_28218 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28222__$1,inst_28218);
} else {
if((state_val_28223 === (12))){
var inst_28146 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28279_29552 = state_28222__$1;
(statearr_28279_29552[(2)] = inst_28146);

(statearr_28279_29552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (2))){
var state_28222__$1 = state_28222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28222__$1,(4),ch);
} else {
if((state_val_28223 === (23))){
var state_28222__$1 = state_28222;
var statearr_28280_29553 = state_28222__$1;
(statearr_28280_29553[(2)] = null);

(statearr_28280_29553[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (35))){
var inst_28202 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28281_29554 = state_28222__$1;
(statearr_28281_29554[(2)] = inst_28202);

(statearr_28281_29554[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (19))){
var inst_28116 = (state_28222[(7)]);
var inst_28121 = cljs.core.chunk_first(inst_28116);
var inst_28123 = cljs.core.chunk_rest(inst_28116);
var inst_28124 = cljs.core.count(inst_28121);
var inst_28092 = inst_28123;
var inst_28093 = inst_28121;
var inst_28094 = inst_28124;
var inst_28095 = (0);
var state_28222__$1 = (function (){var statearr_28282 = state_28222;
(statearr_28282[(13)] = inst_28092);

(statearr_28282[(14)] = inst_28094);

(statearr_28282[(15)] = inst_28095);

(statearr_28282[(16)] = inst_28093);

return statearr_28282;
})();
var statearr_28283_29555 = state_28222__$1;
(statearr_28283_29555[(2)] = null);

(statearr_28283_29555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (11))){
var inst_28092 = (state_28222[(13)]);
var inst_28116 = (state_28222[(7)]);
var inst_28116__$1 = cljs.core.seq(inst_28092);
var state_28222__$1 = (function (){var statearr_28284 = state_28222;
(statearr_28284[(7)] = inst_28116__$1);

return statearr_28284;
})();
if(inst_28116__$1){
var statearr_28285_29556 = state_28222__$1;
(statearr_28285_29556[(1)] = (16));

} else {
var statearr_28286_29557 = state_28222__$1;
(statearr_28286_29557[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (9))){
var inst_28148 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28287_29558 = state_28222__$1;
(statearr_28287_29558[(2)] = inst_28148);

(statearr_28287_29558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (5))){
var inst_28090 = cljs.core.deref(cs);
var inst_28091 = cljs.core.seq(inst_28090);
var inst_28092 = inst_28091;
var inst_28093 = null;
var inst_28094 = (0);
var inst_28095 = (0);
var state_28222__$1 = (function (){var statearr_28288 = state_28222;
(statearr_28288[(13)] = inst_28092);

(statearr_28288[(14)] = inst_28094);

(statearr_28288[(15)] = inst_28095);

(statearr_28288[(16)] = inst_28093);

return statearr_28288;
})();
var statearr_28289_29559 = state_28222__$1;
(statearr_28289_29559[(2)] = null);

(statearr_28289_29559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (14))){
var state_28222__$1 = state_28222;
var statearr_28290_29560 = state_28222__$1;
(statearr_28290_29560[(2)] = null);

(statearr_28290_29560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (45))){
var inst_28210 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28291_29561 = state_28222__$1;
(statearr_28291_29561[(2)] = inst_28210);

(statearr_28291_29561[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (26))){
var inst_28151 = (state_28222[(27)]);
var inst_28206 = (state_28222[(2)]);
var inst_28207 = cljs.core.seq(inst_28151);
var state_28222__$1 = (function (){var statearr_28292 = state_28222;
(statearr_28292[(29)] = inst_28206);

return statearr_28292;
})();
if(inst_28207){
var statearr_28293_29562 = state_28222__$1;
(statearr_28293_29562[(1)] = (42));

} else {
var statearr_28295_29563 = state_28222__$1;
(statearr_28295_29563[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (16))){
var inst_28116 = (state_28222[(7)]);
var inst_28118 = cljs.core.chunked_seq_QMARK_(inst_28116);
var state_28222__$1 = state_28222;
if(inst_28118){
var statearr_28296_29564 = state_28222__$1;
(statearr_28296_29564[(1)] = (19));

} else {
var statearr_28297_29565 = state_28222__$1;
(statearr_28297_29565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (38))){
var inst_28199 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28300_29566 = state_28222__$1;
(statearr_28300_29566[(2)] = inst_28199);

(statearr_28300_29566[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (30))){
var state_28222__$1 = state_28222;
var statearr_28301_29567 = state_28222__$1;
(statearr_28301_29567[(2)] = null);

(statearr_28301_29567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (10))){
var inst_28095 = (state_28222[(15)]);
var inst_28093 = (state_28222[(16)]);
var inst_28105 = cljs.core._nth(inst_28093,inst_28095);
var inst_28106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28105,(0),null);
var inst_28107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28105,(1),null);
var state_28222__$1 = (function (){var statearr_28304 = state_28222;
(statearr_28304[(24)] = inst_28106);

return statearr_28304;
})();
if(cljs.core.truth_(inst_28107)){
var statearr_28305_29568 = state_28222__$1;
(statearr_28305_29568[(1)] = (13));

} else {
var statearr_28308_29569 = state_28222__$1;
(statearr_28308_29569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (18))){
var inst_28144 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28311_29570 = state_28222__$1;
(statearr_28311_29570[(2)] = inst_28144);

(statearr_28311_29570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (42))){
var state_28222__$1 = state_28222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28222__$1,(45),dchan);
} else {
if((state_val_28223 === (37))){
var inst_28189 = (state_28222[(22)]);
var inst_28081 = (state_28222[(9)]);
var inst_28177 = (state_28222[(23)]);
var inst_28189__$1 = cljs.core.first(inst_28177);
var inst_28190 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28189__$1,inst_28081,done);
var state_28222__$1 = (function (){var statearr_28315 = state_28222;
(statearr_28315[(22)] = inst_28189__$1);

return statearr_28315;
})();
if(cljs.core.truth_(inst_28190)){
var statearr_28316_29571 = state_28222__$1;
(statearr_28316_29571[(1)] = (39));

} else {
var statearr_28317_29572 = state_28222__$1;
(statearr_28317_29572[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (8))){
var inst_28094 = (state_28222[(14)]);
var inst_28095 = (state_28222[(15)]);
var inst_28097 = (inst_28095 < inst_28094);
var inst_28098 = inst_28097;
var state_28222__$1 = state_28222;
if(cljs.core.truth_(inst_28098)){
var statearr_28319_29573 = state_28222__$1;
(statearr_28319_29573[(1)] = (10));

} else {
var statearr_28321_29574 = state_28222__$1;
(statearr_28321_29574[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__26856__auto__ = null;
var cljs$core$async$mult_$_state_machine__26856__auto____0 = (function (){
var statearr_28324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28324[(0)] = cljs$core$async$mult_$_state_machine__26856__auto__);

(statearr_28324[(1)] = (1));

return statearr_28324;
});
var cljs$core$async$mult_$_state_machine__26856__auto____1 = (function (state_28222){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_28222);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e28325){var ex__26859__auto__ = e28325;
var statearr_28326_29575 = state_28222;
(statearr_28326_29575[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_28222[(4)]))){
var statearr_28327_29576 = state_28222;
(statearr_28327_29576[(1)] = cljs.core.first((state_28222[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29577 = state_28222;
state_28222 = G__29577;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26856__auto__ = function(state_28222){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26856__auto____1.call(this,state_28222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26856__auto____0;
cljs$core$async$mult_$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26856__auto____1;
return cljs$core$async$mult_$_state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_28328 = f__27120__auto__();
(statearr_28328[(6)] = c__27119__auto___29520);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28339 = arguments.length;
switch (G__28339) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_29584 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_29584(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29586 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_29586(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29589 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29589(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29590 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_29590(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29591 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29591(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29592 = arguments.length;
var i__5727__auto___29593 = (0);
while(true){
if((i__5727__auto___29593 < len__5726__auto___29592)){
args__5732__auto__.push((arguments[i__5727__auto___29593]));

var G__29594 = (i__5727__auto___29593 + (1));
i__5727__auto___29593 = G__29594;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28369){
var map__28370 = p__28369;
var map__28370__$1 = cljs.core.__destructure_map(map__28370);
var opts = map__28370__$1;
var statearr_28371_29596 = state;
(statearr_28371_29596[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_28372_29597 = state;
(statearr_28372_29597[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_28373_29601 = state;
(statearr_28373_29601[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28362){
var G__28363 = cljs.core.first(seq28362);
var seq28362__$1 = cljs.core.next(seq28362);
var G__28364 = cljs.core.first(seq28362__$1);
var seq28362__$2 = cljs.core.next(seq28362__$1);
var G__28365 = cljs.core.first(seq28362__$2);
var seq28362__$3 = cljs.core.next(seq28362__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28363,G__28364,G__28365,seq28362__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28381 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28382){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28382 = meta28382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28383,meta28382__$1){
var self__ = this;
var _28383__$1 = this;
return (new cljs.core.async.t_cljs$core$async28381(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28382__$1));
}));

(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28383){
var self__ = this;
var _28383__$1 = this;
return self__.meta28382;
}));

(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async28381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28382","meta28382",1002029291,null)], null);
}));

(cljs.core.async.t_cljs$core$async28381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28381");

(cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28381.
 */
cljs.core.async.__GT_t_cljs$core$async28381 = (function cljs$core$async$__GT_t_cljs$core$async28381(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28382){
return (new cljs.core.async.t_cljs$core$async28381(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28382));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async28381(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__27119__auto___29613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_28464){
var state_val_28465 = (state_28464[(1)]);
if((state_val_28465 === (7))){
var inst_28424 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
if(cljs.core.truth_(inst_28424)){
var statearr_28466_29614 = state_28464__$1;
(statearr_28466_29614[(1)] = (8));

} else {
var statearr_28467_29615 = state_28464__$1;
(statearr_28467_29615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (20))){
var inst_28417 = (state_28464[(7)]);
var state_28464__$1 = state_28464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28464__$1,(23),out,inst_28417);
} else {
if((state_val_28465 === (1))){
var inst_28400 = calc_state();
var inst_28401 = cljs.core.__destructure_map(inst_28400);
var inst_28402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28401,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28401,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28401,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28405 = inst_28400;
var state_28464__$1 = (function (){var statearr_28468 = state_28464;
(statearr_28468[(8)] = inst_28402);

(statearr_28468[(9)] = inst_28403);

(statearr_28468[(10)] = inst_28404);

(statearr_28468[(11)] = inst_28405);

return statearr_28468;
})();
var statearr_28469_29616 = state_28464__$1;
(statearr_28469_29616[(2)] = null);

(statearr_28469_29616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (24))){
var inst_28408 = (state_28464[(12)]);
var inst_28405 = inst_28408;
var state_28464__$1 = (function (){var statearr_28470 = state_28464;
(statearr_28470[(11)] = inst_28405);

return statearr_28470;
})();
var statearr_28471_29617 = state_28464__$1;
(statearr_28471_29617[(2)] = null);

(statearr_28471_29617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (4))){
var inst_28417 = (state_28464[(7)]);
var inst_28419 = (state_28464[(13)]);
var inst_28416 = (state_28464[(2)]);
var inst_28417__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28416,(0),null);
var inst_28418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28416,(1),null);
var inst_28419__$1 = (inst_28417__$1 == null);
var state_28464__$1 = (function (){var statearr_28472 = state_28464;
(statearr_28472[(14)] = inst_28418);

(statearr_28472[(7)] = inst_28417__$1);

(statearr_28472[(13)] = inst_28419__$1);

return statearr_28472;
})();
if(cljs.core.truth_(inst_28419__$1)){
var statearr_28473_29618 = state_28464__$1;
(statearr_28473_29618[(1)] = (5));

} else {
var statearr_28474_29619 = state_28464__$1;
(statearr_28474_29619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (15))){
var inst_28409 = (state_28464[(15)]);
var inst_28438 = (state_28464[(16)]);
var inst_28438__$1 = cljs.core.empty_QMARK_(inst_28409);
var state_28464__$1 = (function (){var statearr_28475 = state_28464;
(statearr_28475[(16)] = inst_28438__$1);

return statearr_28475;
})();
if(inst_28438__$1){
var statearr_28476_29620 = state_28464__$1;
(statearr_28476_29620[(1)] = (17));

} else {
var statearr_28477_29621 = state_28464__$1;
(statearr_28477_29621[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (21))){
var inst_28408 = (state_28464[(12)]);
var inst_28405 = inst_28408;
var state_28464__$1 = (function (){var statearr_28478 = state_28464;
(statearr_28478[(11)] = inst_28405);

return statearr_28478;
})();
var statearr_28479_29622 = state_28464__$1;
(statearr_28479_29622[(2)] = null);

(statearr_28479_29622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (13))){
var inst_28431 = (state_28464[(2)]);
var inst_28432 = calc_state();
var inst_28405 = inst_28432;
var state_28464__$1 = (function (){var statearr_28480 = state_28464;
(statearr_28480[(11)] = inst_28405);

(statearr_28480[(17)] = inst_28431);

return statearr_28480;
})();
var statearr_28481_29623 = state_28464__$1;
(statearr_28481_29623[(2)] = null);

(statearr_28481_29623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (22))){
var inst_28458 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
var statearr_28482_29624 = state_28464__$1;
(statearr_28482_29624[(2)] = inst_28458);

(statearr_28482_29624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (6))){
var inst_28418 = (state_28464[(14)]);
var inst_28422 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28418,change);
var state_28464__$1 = state_28464;
var statearr_28483_29625 = state_28464__$1;
(statearr_28483_29625[(2)] = inst_28422);

(statearr_28483_29625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (25))){
var state_28464__$1 = state_28464;
var statearr_28484_29626 = state_28464__$1;
(statearr_28484_29626[(2)] = null);

(statearr_28484_29626[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (17))){
var inst_28418 = (state_28464[(14)]);
var inst_28410 = (state_28464[(18)]);
var inst_28440 = (inst_28410.cljs$core$IFn$_invoke$arity$1 ? inst_28410.cljs$core$IFn$_invoke$arity$1(inst_28418) : inst_28410.call(null, inst_28418));
var inst_28441 = cljs.core.not(inst_28440);
var state_28464__$1 = state_28464;
var statearr_28485_29629 = state_28464__$1;
(statearr_28485_29629[(2)] = inst_28441);

(statearr_28485_29629[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (3))){
var inst_28462 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28464__$1,inst_28462);
} else {
if((state_val_28465 === (12))){
var state_28464__$1 = state_28464;
var statearr_28486_29634 = state_28464__$1;
(statearr_28486_29634[(2)] = null);

(statearr_28486_29634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (2))){
var inst_28408 = (state_28464[(12)]);
var inst_28405 = (state_28464[(11)]);
var inst_28408__$1 = cljs.core.__destructure_map(inst_28405);
var inst_28409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28408__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28408__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28408__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28464__$1 = (function (){var statearr_28487 = state_28464;
(statearr_28487[(15)] = inst_28409);

(statearr_28487[(12)] = inst_28408__$1);

(statearr_28487[(18)] = inst_28410);

return statearr_28487;
})();
return cljs.core.async.ioc_alts_BANG_(state_28464__$1,(4),inst_28411);
} else {
if((state_val_28465 === (23))){
var inst_28449 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
if(cljs.core.truth_(inst_28449)){
var statearr_28488_29635 = state_28464__$1;
(statearr_28488_29635[(1)] = (24));

} else {
var statearr_28489_29636 = state_28464__$1;
(statearr_28489_29636[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (19))){
var inst_28444 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
var statearr_28490_29637 = state_28464__$1;
(statearr_28490_29637[(2)] = inst_28444);

(statearr_28490_29637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (11))){
var inst_28418 = (state_28464[(14)]);
var inst_28428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28418);
var state_28464__$1 = state_28464;
var statearr_28491_29638 = state_28464__$1;
(statearr_28491_29638[(2)] = inst_28428);

(statearr_28491_29638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (9))){
var inst_28409 = (state_28464[(15)]);
var inst_28418 = (state_28464[(14)]);
var inst_28435 = (state_28464[(19)]);
var inst_28435__$1 = (inst_28409.cljs$core$IFn$_invoke$arity$1 ? inst_28409.cljs$core$IFn$_invoke$arity$1(inst_28418) : inst_28409.call(null, inst_28418));
var state_28464__$1 = (function (){var statearr_28492 = state_28464;
(statearr_28492[(19)] = inst_28435__$1);

return statearr_28492;
})();
if(cljs.core.truth_(inst_28435__$1)){
var statearr_28493_29639 = state_28464__$1;
(statearr_28493_29639[(1)] = (14));

} else {
var statearr_28494_29640 = state_28464__$1;
(statearr_28494_29640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (5))){
var inst_28419 = (state_28464[(13)]);
var state_28464__$1 = state_28464;
var statearr_28495_29641 = state_28464__$1;
(statearr_28495_29641[(2)] = inst_28419);

(statearr_28495_29641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (14))){
var inst_28435 = (state_28464[(19)]);
var state_28464__$1 = state_28464;
var statearr_28496_29642 = state_28464__$1;
(statearr_28496_29642[(2)] = inst_28435);

(statearr_28496_29642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (26))){
var inst_28454 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
var statearr_28497_29643 = state_28464__$1;
(statearr_28497_29643[(2)] = inst_28454);

(statearr_28497_29643[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (16))){
var inst_28446 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
if(cljs.core.truth_(inst_28446)){
var statearr_28498_29644 = state_28464__$1;
(statearr_28498_29644[(1)] = (20));

} else {
var statearr_28499_29645 = state_28464__$1;
(statearr_28499_29645[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (10))){
var inst_28460 = (state_28464[(2)]);
var state_28464__$1 = state_28464;
var statearr_28500_29646 = state_28464__$1;
(statearr_28500_29646[(2)] = inst_28460);

(statearr_28500_29646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (18))){
var inst_28438 = (state_28464[(16)]);
var state_28464__$1 = state_28464;
var statearr_28501_29647 = state_28464__$1;
(statearr_28501_29647[(2)] = inst_28438);

(statearr_28501_29647[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28465 === (8))){
var inst_28417 = (state_28464[(7)]);
var inst_28426 = (inst_28417 == null);
var state_28464__$1 = state_28464;
if(cljs.core.truth_(inst_28426)){
var statearr_28502_29648 = state_28464__$1;
(statearr_28502_29648[(1)] = (11));

} else {
var statearr_28503_29649 = state_28464__$1;
(statearr_28503_29649[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__26856__auto__ = null;
var cljs$core$async$mix_$_state_machine__26856__auto____0 = (function (){
var statearr_28504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28504[(0)] = cljs$core$async$mix_$_state_machine__26856__auto__);

(statearr_28504[(1)] = (1));

return statearr_28504;
});
var cljs$core$async$mix_$_state_machine__26856__auto____1 = (function (state_28464){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_28464);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e28505){var ex__26859__auto__ = e28505;
var statearr_28506_29656 = state_28464;
(statearr_28506_29656[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_28464[(4)]))){
var statearr_28507_29657 = state_28464;
(statearr_28507_29657[(1)] = cljs.core.first((state_28464[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29658 = state_28464;
state_28464 = G__29658;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26856__auto__ = function(state_28464){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26856__auto____1.call(this,state_28464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26856__auto____0;
cljs$core$async$mix_$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26856__auto____1;
return cljs$core$async$mix_$_state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_28508 = f__27120__auto__();
(statearr_28508[(6)] = c__27119__auto___29613);

return statearr_28508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_29659 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29659(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29660 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29660(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29661 = (function() {
var G__29662 = null;
var G__29662__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__29662__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__29662 = function(p,v){
switch(arguments.length){
case 1:
return G__29662__1.call(this,p);
case 2:
return G__29662__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29662.cljs$core$IFn$_invoke$arity$1 = G__29662__1;
G__29662.cljs$core$IFn$_invoke$arity$2 = G__29662__2;
return G__29662;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28510 = arguments.length;
switch (G__28510) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29661(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29661(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28516 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28517){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28517 = meta28517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28518,meta28517__$1){
var self__ = this;
var _28518__$1 = this;
return (new cljs.core.async.t_cljs$core$async28516(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28517__$1));
}));

(cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28518){
var self__ = this;
var _28518__$1 = this;
return self__.meta28517;
}));

(cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28517","meta28517",735581370,null)], null);
}));

(cljs.core.async.t_cljs$core$async28516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28516");

(cljs.core.async.t_cljs$core$async28516.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28516.
 */
cljs.core.async.__GT_t_cljs$core$async28516 = (function cljs$core$async$__GT_t_cljs$core$async28516(ch,topic_fn,buf_fn,mults,ensure_mult,meta28517){
return (new cljs.core.async.t_cljs$core$async28516(ch,topic_fn,buf_fn,mults,ensure_mult,meta28517));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28513 = arguments.length;
switch (G__28513) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__28511_SHARP_){
if(cljs.core.truth_((p1__28511_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28511_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28511_SHARP_.call(null, topic)))){
return p1__28511_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28511_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async28516(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__27119__auto___29671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_28599){
var state_val_28600 = (state_28599[(1)]);
if((state_val_28600 === (7))){
var inst_28595 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28603_29678 = state_28599__$1;
(statearr_28603_29678[(2)] = inst_28595);

(statearr_28603_29678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (20))){
var state_28599__$1 = state_28599;
var statearr_28604_29679 = state_28599__$1;
(statearr_28604_29679[(2)] = null);

(statearr_28604_29679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (1))){
var state_28599__$1 = state_28599;
var statearr_28605_29680 = state_28599__$1;
(statearr_28605_29680[(2)] = null);

(statearr_28605_29680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (24))){
var inst_28576 = (state_28599[(7)]);
var inst_28587 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28576);
var state_28599__$1 = state_28599;
var statearr_28609_29681 = state_28599__$1;
(statearr_28609_29681[(2)] = inst_28587);

(statearr_28609_29681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (4))){
var inst_28525 = (state_28599[(8)]);
var inst_28525__$1 = (state_28599[(2)]);
var inst_28526 = (inst_28525__$1 == null);
var state_28599__$1 = (function (){var statearr_28610 = state_28599;
(statearr_28610[(8)] = inst_28525__$1);

return statearr_28610;
})();
if(cljs.core.truth_(inst_28526)){
var statearr_28611_29682 = state_28599__$1;
(statearr_28611_29682[(1)] = (5));

} else {
var statearr_28612_29683 = state_28599__$1;
(statearr_28612_29683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (15))){
var inst_28570 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28613_29684 = state_28599__$1;
(statearr_28613_29684[(2)] = inst_28570);

(statearr_28613_29684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (21))){
var inst_28592 = (state_28599[(2)]);
var state_28599__$1 = (function (){var statearr_28614 = state_28599;
(statearr_28614[(9)] = inst_28592);

return statearr_28614;
})();
var statearr_28615_29685 = state_28599__$1;
(statearr_28615_29685[(2)] = null);

(statearr_28615_29685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (13))){
var inst_28550 = (state_28599[(10)]);
var inst_28552 = cljs.core.chunked_seq_QMARK_(inst_28550);
var state_28599__$1 = state_28599;
if(inst_28552){
var statearr_28616_29686 = state_28599__$1;
(statearr_28616_29686[(1)] = (16));

} else {
var statearr_28617_29687 = state_28599__$1;
(statearr_28617_29687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (22))){
var inst_28583 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28583)){
var statearr_28618_29688 = state_28599__$1;
(statearr_28618_29688[(1)] = (23));

} else {
var statearr_28619_29689 = state_28599__$1;
(statearr_28619_29689[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (6))){
var inst_28576 = (state_28599[(7)]);
var inst_28578 = (state_28599[(11)]);
var inst_28525 = (state_28599[(8)]);
var inst_28576__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28525) : topic_fn.call(null, inst_28525));
var inst_28577 = cljs.core.deref(mults);
var inst_28578__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28577,inst_28576__$1);
var state_28599__$1 = (function (){var statearr_28622 = state_28599;
(statearr_28622[(7)] = inst_28576__$1);

(statearr_28622[(11)] = inst_28578__$1);

return statearr_28622;
})();
if(cljs.core.truth_(inst_28578__$1)){
var statearr_28625_29690 = state_28599__$1;
(statearr_28625_29690[(1)] = (19));

} else {
var statearr_28626_29691 = state_28599__$1;
(statearr_28626_29691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (25))){
var inst_28589 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28628_29692 = state_28599__$1;
(statearr_28628_29692[(2)] = inst_28589);

(statearr_28628_29692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (17))){
var inst_28550 = (state_28599[(10)]);
var inst_28561 = cljs.core.first(inst_28550);
var inst_28562 = cljs.core.async.muxch_STAR_(inst_28561);
var inst_28563 = cljs.core.async.close_BANG_(inst_28562);
var inst_28564 = cljs.core.next(inst_28550);
var inst_28536 = inst_28564;
var inst_28537 = null;
var inst_28538 = (0);
var inst_28539 = (0);
var state_28599__$1 = (function (){var statearr_28629 = state_28599;
(statearr_28629[(12)] = inst_28563);

(statearr_28629[(13)] = inst_28538);

(statearr_28629[(14)] = inst_28539);

(statearr_28629[(15)] = inst_28537);

(statearr_28629[(16)] = inst_28536);

return statearr_28629;
})();
var statearr_28631_29693 = state_28599__$1;
(statearr_28631_29693[(2)] = null);

(statearr_28631_29693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (3))){
var inst_28597 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28599__$1,inst_28597);
} else {
if((state_val_28600 === (12))){
var inst_28572 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28634_29694 = state_28599__$1;
(statearr_28634_29694[(2)] = inst_28572);

(statearr_28634_29694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (2))){
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28599__$1,(4),ch);
} else {
if((state_val_28600 === (23))){
var state_28599__$1 = state_28599;
var statearr_28636_29695 = state_28599__$1;
(statearr_28636_29695[(2)] = null);

(statearr_28636_29695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (19))){
var inst_28578 = (state_28599[(11)]);
var inst_28525 = (state_28599[(8)]);
var inst_28581 = cljs.core.async.muxch_STAR_(inst_28578);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28599__$1,(22),inst_28581,inst_28525);
} else {
if((state_val_28600 === (11))){
var inst_28550 = (state_28599[(10)]);
var inst_28536 = (state_28599[(16)]);
var inst_28550__$1 = cljs.core.seq(inst_28536);
var state_28599__$1 = (function (){var statearr_28638 = state_28599;
(statearr_28638[(10)] = inst_28550__$1);

return statearr_28638;
})();
if(inst_28550__$1){
var statearr_28639_29696 = state_28599__$1;
(statearr_28639_29696[(1)] = (13));

} else {
var statearr_28643_29697 = state_28599__$1;
(statearr_28643_29697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (9))){
var inst_28574 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28644_29698 = state_28599__$1;
(statearr_28644_29698[(2)] = inst_28574);

(statearr_28644_29698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (5))){
var inst_28533 = cljs.core.deref(mults);
var inst_28534 = cljs.core.vals(inst_28533);
var inst_28535 = cljs.core.seq(inst_28534);
var inst_28536 = inst_28535;
var inst_28537 = null;
var inst_28538 = (0);
var inst_28539 = (0);
var state_28599__$1 = (function (){var statearr_28645 = state_28599;
(statearr_28645[(13)] = inst_28538);

(statearr_28645[(14)] = inst_28539);

(statearr_28645[(15)] = inst_28537);

(statearr_28645[(16)] = inst_28536);

return statearr_28645;
})();
var statearr_28646_29699 = state_28599__$1;
(statearr_28646_29699[(2)] = null);

(statearr_28646_29699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (14))){
var state_28599__$1 = state_28599;
var statearr_28650_29700 = state_28599__$1;
(statearr_28650_29700[(2)] = null);

(statearr_28650_29700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (16))){
var inst_28550 = (state_28599[(10)]);
var inst_28555 = cljs.core.chunk_first(inst_28550);
var inst_28557 = cljs.core.chunk_rest(inst_28550);
var inst_28558 = cljs.core.count(inst_28555);
var inst_28536 = inst_28557;
var inst_28537 = inst_28555;
var inst_28538 = inst_28558;
var inst_28539 = (0);
var state_28599__$1 = (function (){var statearr_28653 = state_28599;
(statearr_28653[(13)] = inst_28538);

(statearr_28653[(14)] = inst_28539);

(statearr_28653[(15)] = inst_28537);

(statearr_28653[(16)] = inst_28536);

return statearr_28653;
})();
var statearr_28654_29701 = state_28599__$1;
(statearr_28654_29701[(2)] = null);

(statearr_28654_29701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (10))){
var inst_28538 = (state_28599[(13)]);
var inst_28539 = (state_28599[(14)]);
var inst_28537 = (state_28599[(15)]);
var inst_28536 = (state_28599[(16)]);
var inst_28544 = cljs.core._nth(inst_28537,inst_28539);
var inst_28545 = cljs.core.async.muxch_STAR_(inst_28544);
var inst_28546 = cljs.core.async.close_BANG_(inst_28545);
var inst_28547 = (inst_28539 + (1));
var tmp28647 = inst_28538;
var tmp28648 = inst_28537;
var tmp28649 = inst_28536;
var inst_28536__$1 = tmp28649;
var inst_28537__$1 = tmp28648;
var inst_28538__$1 = tmp28647;
var inst_28539__$1 = inst_28547;
var state_28599__$1 = (function (){var statearr_28657 = state_28599;
(statearr_28657[(13)] = inst_28538__$1);

(statearr_28657[(14)] = inst_28539__$1);

(statearr_28657[(17)] = inst_28546);

(statearr_28657[(15)] = inst_28537__$1);

(statearr_28657[(16)] = inst_28536__$1);

return statearr_28657;
})();
var statearr_28660_29702 = state_28599__$1;
(statearr_28660_29702[(2)] = null);

(statearr_28660_29702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (18))){
var inst_28567 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28661_29703 = state_28599__$1;
(statearr_28661_29703[(2)] = inst_28567);

(statearr_28661_29703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (8))){
var inst_28538 = (state_28599[(13)]);
var inst_28539 = (state_28599[(14)]);
var inst_28541 = (inst_28539 < inst_28538);
var inst_28542 = inst_28541;
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28542)){
var statearr_28662_29704 = state_28599__$1;
(statearr_28662_29704[(1)] = (10));

} else {
var statearr_28663_29705 = state_28599__$1;
(statearr_28663_29705[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_28666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28666[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_28666[(1)] = (1));

return statearr_28666;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_28599){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_28599);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e28667){var ex__26859__auto__ = e28667;
var statearr_28668_29707 = state_28599;
(statearr_28668_29707[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_28599[(4)]))){
var statearr_28669_29712 = state_28599;
(statearr_28669_29712[(1)] = cljs.core.first((state_28599[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29713 = state_28599;
state_28599 = G__29713;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_28599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_28599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_28670 = f__27120__auto__();
(statearr_28670[(6)] = c__27119__auto___29671);

return statearr_28670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28676 = arguments.length;
switch (G__28676) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28680 = arguments.length;
switch (G__28680) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28683 = arguments.length;
switch (G__28683) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__27119__auto___29717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_28731){
var state_val_28732 = (state_28731[(1)]);
if((state_val_28732 === (7))){
var state_28731__$1 = state_28731;
var statearr_28735_29718 = state_28731__$1;
(statearr_28735_29718[(2)] = null);

(statearr_28735_29718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (1))){
var state_28731__$1 = state_28731;
var statearr_28737_29719 = state_28731__$1;
(statearr_28737_29719[(2)] = null);

(statearr_28737_29719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (4))){
var inst_28691 = (state_28731[(7)]);
var inst_28692 = (state_28731[(8)]);
var inst_28694 = (inst_28692 < inst_28691);
var state_28731__$1 = state_28731;
if(cljs.core.truth_(inst_28694)){
var statearr_28739_29721 = state_28731__$1;
(statearr_28739_29721[(1)] = (6));

} else {
var statearr_28740_29722 = state_28731__$1;
(statearr_28740_29722[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (15))){
var inst_28717 = (state_28731[(9)]);
var inst_28722 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28717);
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28731__$1,(17),out,inst_28722);
} else {
if((state_val_28732 === (13))){
var inst_28717 = (state_28731[(9)]);
var inst_28717__$1 = (state_28731[(2)]);
var inst_28718 = cljs.core.some(cljs.core.nil_QMARK_,inst_28717__$1);
var state_28731__$1 = (function (){var statearr_28741 = state_28731;
(statearr_28741[(9)] = inst_28717__$1);

return statearr_28741;
})();
if(cljs.core.truth_(inst_28718)){
var statearr_28742_29724 = state_28731__$1;
(statearr_28742_29724[(1)] = (14));

} else {
var statearr_28743_29725 = state_28731__$1;
(statearr_28743_29725[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (6))){
var state_28731__$1 = state_28731;
var statearr_28744_29726 = state_28731__$1;
(statearr_28744_29726[(2)] = null);

(statearr_28744_29726[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (17))){
var inst_28724 = (state_28731[(2)]);
var state_28731__$1 = (function (){var statearr_28748 = state_28731;
(statearr_28748[(10)] = inst_28724);

return statearr_28748;
})();
var statearr_28749_29727 = state_28731__$1;
(statearr_28749_29727[(2)] = null);

(statearr_28749_29727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (3))){
var inst_28729 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28731__$1,inst_28729);
} else {
if((state_val_28732 === (12))){
var _ = (function (){var statearr_28750 = state_28731;
(statearr_28750[(4)] = cljs.core.rest((state_28731[(4)])));

return statearr_28750;
})();
var state_28731__$1 = state_28731;
var ex28747 = (state_28731__$1[(2)]);
var statearr_28751_29728 = state_28731__$1;
(statearr_28751_29728[(5)] = ex28747);


if((ex28747 instanceof Object)){
var statearr_28753_29729 = state_28731__$1;
(statearr_28753_29729[(1)] = (11));

(statearr_28753_29729[(5)] = null);

} else {
throw ex28747;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (2))){
var inst_28690 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28691 = cnt;
var inst_28692 = (0);
var state_28731__$1 = (function (){var statearr_28757 = state_28731;
(statearr_28757[(11)] = inst_28690);

(statearr_28757[(7)] = inst_28691);

(statearr_28757[(8)] = inst_28692);

return statearr_28757;
})();
var statearr_28758_29731 = state_28731__$1;
(statearr_28758_29731[(2)] = null);

(statearr_28758_29731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (11))){
var inst_28696 = (state_28731[(2)]);
var inst_28697 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28731__$1 = (function (){var statearr_28759 = state_28731;
(statearr_28759[(12)] = inst_28696);

return statearr_28759;
})();
var statearr_28760_29733 = state_28731__$1;
(statearr_28760_29733[(2)] = inst_28697);

(statearr_28760_29733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (9))){
var inst_28692 = (state_28731[(8)]);
var _ = (function (){var statearr_28761 = state_28731;
(statearr_28761[(4)] = cljs.core.cons((12),(state_28731[(4)])));

return statearr_28761;
})();
var inst_28703 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28692) : chs__$1.call(null, inst_28692));
var inst_28704 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28692) : done.call(null, inst_28692));
var inst_28705 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28703,inst_28704);
var ___$1 = (function (){var statearr_28762 = state_28731;
(statearr_28762[(4)] = cljs.core.rest((state_28731[(4)])));

return statearr_28762;
})();
var state_28731__$1 = state_28731;
var statearr_28763_29734 = state_28731__$1;
(statearr_28763_29734[(2)] = inst_28705);

(statearr_28763_29734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (5))){
var inst_28715 = (state_28731[(2)]);
var state_28731__$1 = (function (){var statearr_28765 = state_28731;
(statearr_28765[(13)] = inst_28715);

return statearr_28765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28731__$1,(13),dchan);
} else {
if((state_val_28732 === (14))){
var inst_28720 = cljs.core.async.close_BANG_(out);
var state_28731__$1 = state_28731;
var statearr_28766_29735 = state_28731__$1;
(statearr_28766_29735[(2)] = inst_28720);

(statearr_28766_29735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (16))){
var inst_28727 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
var statearr_28767_29736 = state_28731__$1;
(statearr_28767_29736[(2)] = inst_28727);

(statearr_28767_29736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (10))){
var inst_28692 = (state_28731[(8)]);
var inst_28708 = (state_28731[(2)]);
var inst_28709 = (inst_28692 + (1));
var inst_28692__$1 = inst_28709;
var state_28731__$1 = (function (){var statearr_28768 = state_28731;
(statearr_28768[(8)] = inst_28692__$1);

(statearr_28768[(14)] = inst_28708);

return statearr_28768;
})();
var statearr_28769_29737 = state_28731__$1;
(statearr_28769_29737[(2)] = null);

(statearr_28769_29737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (8))){
var inst_28713 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
var statearr_28772_29738 = state_28731__$1;
(statearr_28772_29738[(2)] = inst_28713);

(statearr_28772_29738[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_28774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28774[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_28774[(1)] = (1));

return statearr_28774;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_28731){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_28731);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e28776){var ex__26859__auto__ = e28776;
var statearr_28777_29739 = state_28731;
(statearr_28777_29739[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_28731[(4)]))){
var statearr_28778_29740 = state_28731;
(statearr_28778_29740[(1)] = cljs.core.first((state_28731[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29741 = state_28731;
state_28731 = G__29741;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_28731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_28731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_28780 = f__27120__auto__();
(statearr_28780[(6)] = c__27119__auto___29717);

return statearr_28780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28783 = arguments.length;
switch (G__28783) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27119__auto___29743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_28819){
var state_val_28820 = (state_28819[(1)]);
if((state_val_28820 === (7))){
var inst_28795 = (state_28819[(7)]);
var inst_28797 = (state_28819[(8)]);
var inst_28795__$1 = (state_28819[(2)]);
var inst_28797__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28795__$1,(0),null);
var inst_28798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28795__$1,(1),null);
var inst_28799 = (inst_28797__$1 == null);
var state_28819__$1 = (function (){var statearr_28823 = state_28819;
(statearr_28823[(7)] = inst_28795__$1);

(statearr_28823[(8)] = inst_28797__$1);

(statearr_28823[(9)] = inst_28798);

return statearr_28823;
})();
if(cljs.core.truth_(inst_28799)){
var statearr_28824_29746 = state_28819__$1;
(statearr_28824_29746[(1)] = (8));

} else {
var statearr_28825_29747 = state_28819__$1;
(statearr_28825_29747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (1))){
var inst_28784 = cljs.core.vec(chs);
var inst_28785 = inst_28784;
var state_28819__$1 = (function (){var statearr_28826 = state_28819;
(statearr_28826[(10)] = inst_28785);

return statearr_28826;
})();
var statearr_28827_29748 = state_28819__$1;
(statearr_28827_29748[(2)] = null);

(statearr_28827_29748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (4))){
var inst_28785 = (state_28819[(10)]);
var state_28819__$1 = state_28819;
return cljs.core.async.ioc_alts_BANG_(state_28819__$1,(7),inst_28785);
} else {
if((state_val_28820 === (6))){
var inst_28815 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28828_29749 = state_28819__$1;
(statearr_28828_29749[(2)] = inst_28815);

(statearr_28828_29749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (3))){
var inst_28817 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28819__$1,inst_28817);
} else {
if((state_val_28820 === (2))){
var inst_28785 = (state_28819[(10)]);
var inst_28787 = cljs.core.count(inst_28785);
var inst_28788 = (inst_28787 > (0));
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28788)){
var statearr_28832_29750 = state_28819__$1;
(statearr_28832_29750[(1)] = (4));

} else {
var statearr_28833_29751 = state_28819__$1;
(statearr_28833_29751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (11))){
var inst_28785 = (state_28819[(10)]);
var inst_28808 = (state_28819[(2)]);
var tmp28829 = inst_28785;
var inst_28785__$1 = tmp28829;
var state_28819__$1 = (function (){var statearr_28835 = state_28819;
(statearr_28835[(10)] = inst_28785__$1);

(statearr_28835[(11)] = inst_28808);

return statearr_28835;
})();
var statearr_28836_29752 = state_28819__$1;
(statearr_28836_29752[(2)] = null);

(statearr_28836_29752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (9))){
var inst_28797 = (state_28819[(8)]);
var state_28819__$1 = state_28819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28819__$1,(11),out,inst_28797);
} else {
if((state_val_28820 === (5))){
var inst_28813 = cljs.core.async.close_BANG_(out);
var state_28819__$1 = state_28819;
var statearr_28844_29753 = state_28819__$1;
(statearr_28844_29753[(2)] = inst_28813);

(statearr_28844_29753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (10))){
var inst_28811 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28846_29754 = state_28819__$1;
(statearr_28846_29754[(2)] = inst_28811);

(statearr_28846_29754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (8))){
var inst_28795 = (state_28819[(7)]);
var inst_28797 = (state_28819[(8)]);
var inst_28785 = (state_28819[(10)]);
var inst_28798 = (state_28819[(9)]);
var inst_28802 = (function (){var cs = inst_28785;
var vec__28790 = inst_28795;
var v = inst_28797;
var c = inst_28798;
return (function (p1__28781_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28781_SHARP_);
});
})();
var inst_28804 = cljs.core.filterv(inst_28802,inst_28785);
var inst_28785__$1 = inst_28804;
var state_28819__$1 = (function (){var statearr_28847 = state_28819;
(statearr_28847[(10)] = inst_28785__$1);

return statearr_28847;
})();
var statearr_28848_29755 = state_28819__$1;
(statearr_28848_29755[(2)] = null);

(statearr_28848_29755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_28851 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28851[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_28851[(1)] = (1));

return statearr_28851;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_28819){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_28819);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e28853){var ex__26859__auto__ = e28853;
var statearr_28854_29756 = state_28819;
(statearr_28854_29756[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_28819[(4)]))){
var statearr_28855_29757 = state_28819;
(statearr_28855_29757[(1)] = cljs.core.first((state_28819[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29758 = state_28819;
state_28819 = G__29758;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_28819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_28819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_28856 = f__27120__auto__();
(statearr_28856[(6)] = c__27119__auto___29743);

return statearr_28856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28858 = arguments.length;
switch (G__28858) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27119__auto___29761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_28883){
var state_val_28884 = (state_28883[(1)]);
if((state_val_28884 === (7))){
var inst_28864 = (state_28883[(7)]);
var inst_28864__$1 = (state_28883[(2)]);
var inst_28866 = (inst_28864__$1 == null);
var inst_28867 = cljs.core.not(inst_28866);
var state_28883__$1 = (function (){var statearr_28888 = state_28883;
(statearr_28888[(7)] = inst_28864__$1);

return statearr_28888;
})();
if(inst_28867){
var statearr_28890_29762 = state_28883__$1;
(statearr_28890_29762[(1)] = (8));

} else {
var statearr_28891_29763 = state_28883__$1;
(statearr_28891_29763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (1))){
var inst_28859 = (0);
var state_28883__$1 = (function (){var statearr_28892 = state_28883;
(statearr_28892[(8)] = inst_28859);

return statearr_28892;
})();
var statearr_28893_29764 = state_28883__$1;
(statearr_28893_29764[(2)] = null);

(statearr_28893_29764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (4))){
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28883__$1,(7),ch);
} else {
if((state_val_28884 === (6))){
var inst_28878 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28895_29765 = state_28883__$1;
(statearr_28895_29765[(2)] = inst_28878);

(statearr_28895_29765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (3))){
var inst_28880 = (state_28883[(2)]);
var inst_28881 = cljs.core.async.close_BANG_(out);
var state_28883__$1 = (function (){var statearr_28897 = state_28883;
(statearr_28897[(9)] = inst_28880);

return statearr_28897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28883__$1,inst_28881);
} else {
if((state_val_28884 === (2))){
var inst_28859 = (state_28883[(8)]);
var inst_28861 = (inst_28859 < n);
var state_28883__$1 = state_28883;
if(cljs.core.truth_(inst_28861)){
var statearr_28898_29770 = state_28883__$1;
(statearr_28898_29770[(1)] = (4));

} else {
var statearr_28900_29771 = state_28883__$1;
(statearr_28900_29771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (11))){
var inst_28859 = (state_28883[(8)]);
var inst_28870 = (state_28883[(2)]);
var inst_28871 = (inst_28859 + (1));
var inst_28859__$1 = inst_28871;
var state_28883__$1 = (function (){var statearr_28901 = state_28883;
(statearr_28901[(10)] = inst_28870);

(statearr_28901[(8)] = inst_28859__$1);

return statearr_28901;
})();
var statearr_28902_29772 = state_28883__$1;
(statearr_28902_29772[(2)] = null);

(statearr_28902_29772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (9))){
var state_28883__$1 = state_28883;
var statearr_28904_29773 = state_28883__$1;
(statearr_28904_29773[(2)] = null);

(statearr_28904_29773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (5))){
var state_28883__$1 = state_28883;
var statearr_28905_29774 = state_28883__$1;
(statearr_28905_29774[(2)] = null);

(statearr_28905_29774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (10))){
var inst_28875 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28906_29775 = state_28883__$1;
(statearr_28906_29775[(2)] = inst_28875);

(statearr_28906_29775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28884 === (8))){
var inst_28864 = (state_28883[(7)]);
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28883__$1,(11),out,inst_28864);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_28908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28908[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_28908[(1)] = (1));

return statearr_28908;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_28883){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_28883);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e28909){var ex__26859__auto__ = e28909;
var statearr_28910_29776 = state_28883;
(statearr_28910_29776[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_28883[(4)]))){
var statearr_28911_29777 = state_28883;
(statearr_28911_29777[(1)] = cljs.core.first((state_28883[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29778 = state_28883;
state_28883 = G__29778;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_28883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_28883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_28913 = f__27120__auto__();
(statearr_28913[(6)] = c__27119__auto___29761);

return statearr_28913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28926 = (function (f,ch,meta28924,_,fn1,meta28927){
this.f = f;
this.ch = ch;
this.meta28924 = meta28924;
this._ = _;
this.fn1 = fn1;
this.meta28927 = meta28927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28928,meta28927__$1){
var self__ = this;
var _28928__$1 = this;
return (new cljs.core.async.t_cljs$core$async28926(self__.f,self__.ch,self__.meta28924,self__._,self__.fn1,meta28927__$1));
}));

(cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28928){
var self__ = this;
var _28928__$1 = this;
return self__.meta28927;
}));

(cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__28914_SHARP_){
var G__28930 = (((p1__28914_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28914_SHARP_) : self__.f.call(null, p1__28914_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28930) : f1.call(null, G__28930));
});
}));

(cljs.core.async.t_cljs$core$async28926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28924","meta28924",-675872232,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28923","cljs.core.async/t_cljs$core$async28923",-22326357,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28927","meta28927",-1651467621,null)], null);
}));

(cljs.core.async.t_cljs$core$async28926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28926");

(cljs.core.async.t_cljs$core$async28926.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28926.
 */
cljs.core.async.__GT_t_cljs$core$async28926 = (function cljs$core$async$__GT_t_cljs$core$async28926(f,ch,meta28924,_,fn1,meta28927){
return (new cljs.core.async.t_cljs$core$async28926(f,ch,meta28924,_,fn1,meta28927));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28923 = (function (f,ch,meta28924){
this.f = f;
this.ch = ch;
this.meta28924 = meta28924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28925,meta28924__$1){
var self__ = this;
var _28925__$1 = this;
return (new cljs.core.async.t_cljs$core$async28923(self__.f,self__.ch,meta28924__$1));
}));

(cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28925){
var self__ = this;
var _28925__$1 = this;
return self__.meta28924;
}));

(cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async28926(self__.f,self__.ch,self__.meta28924,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28938 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28938) : self__.f.call(null, G__28938));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28924","meta28924",-675872232,null)], null);
}));

(cljs.core.async.t_cljs$core$async28923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28923");

(cljs.core.async.t_cljs$core$async28923.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28923.
 */
cljs.core.async.__GT_t_cljs$core$async28923 = (function cljs$core$async$__GT_t_cljs$core$async28923(f,ch,meta28924){
return (new cljs.core.async.t_cljs$core$async28923(f,ch,meta28924));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async28923(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28939 = (function (f,ch,meta28940){
this.f = f;
this.ch = ch;
this.meta28940 = meta28940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28941,meta28940__$1){
var self__ = this;
var _28941__$1 = this;
return (new cljs.core.async.t_cljs$core$async28939(self__.f,self__.ch,meta28940__$1));
}));

(cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28941){
var self__ = this;
var _28941__$1 = this;
return self__.meta28940;
}));

(cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async28939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28940","meta28940",-153616626,null)], null);
}));

(cljs.core.async.t_cljs$core$async28939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28939");

(cljs.core.async.t_cljs$core$async28939.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28939.
 */
cljs.core.async.__GT_t_cljs$core$async28939 = (function cljs$core$async$__GT_t_cljs$core$async28939(f,ch,meta28940){
return (new cljs.core.async.t_cljs$core$async28939(f,ch,meta28940));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async28939(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28943 = (function (p,ch,meta28944){
this.p = p;
this.ch = ch;
this.meta28944 = meta28944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28945,meta28944__$1){
var self__ = this;
var _28945__$1 = this;
return (new cljs.core.async.t_cljs$core$async28943(self__.p,self__.ch,meta28944__$1));
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28945){
var self__ = this;
var _28945__$1 = this;
return self__.meta28944;
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28944","meta28944",1751288134,null)], null);
}));

(cljs.core.async.t_cljs$core$async28943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28943");

(cljs.core.async.t_cljs$core$async28943.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28943.
 */
cljs.core.async.__GT_t_cljs$core$async28943 = (function cljs$core$async$__GT_t_cljs$core$async28943(p,ch,meta28944){
return (new cljs.core.async.t_cljs$core$async28943(p,ch,meta28944));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async28943(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28948 = arguments.length;
switch (G__28948) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27119__auto___29800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_28969){
var state_val_28970 = (state_28969[(1)]);
if((state_val_28970 === (7))){
var inst_28965 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
var statearr_28973_29801 = state_28969__$1;
(statearr_28973_29801[(2)] = inst_28965);

(statearr_28973_29801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (1))){
var state_28969__$1 = state_28969;
var statearr_28974_29802 = state_28969__$1;
(statearr_28974_29802[(2)] = null);

(statearr_28974_29802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (4))){
var inst_28951 = (state_28969[(7)]);
var inst_28951__$1 = (state_28969[(2)]);
var inst_28952 = (inst_28951__$1 == null);
var state_28969__$1 = (function (){var statearr_28975 = state_28969;
(statearr_28975[(7)] = inst_28951__$1);

return statearr_28975;
})();
if(cljs.core.truth_(inst_28952)){
var statearr_28976_29803 = state_28969__$1;
(statearr_28976_29803[(1)] = (5));

} else {
var statearr_28977_29804 = state_28969__$1;
(statearr_28977_29804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (6))){
var inst_28951 = (state_28969[(7)]);
var inst_28956 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28951) : p.call(null, inst_28951));
var state_28969__$1 = state_28969;
if(cljs.core.truth_(inst_28956)){
var statearr_28978_29805 = state_28969__$1;
(statearr_28978_29805[(1)] = (8));

} else {
var statearr_28979_29806 = state_28969__$1;
(statearr_28979_29806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (3))){
var inst_28967 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28969__$1,inst_28967);
} else {
if((state_val_28970 === (2))){
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28969__$1,(4),ch);
} else {
if((state_val_28970 === (11))){
var inst_28959 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
var statearr_28980_29807 = state_28969__$1;
(statearr_28980_29807[(2)] = inst_28959);

(statearr_28980_29807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (9))){
var state_28969__$1 = state_28969;
var statearr_28981_29808 = state_28969__$1;
(statearr_28981_29808[(2)] = null);

(statearr_28981_29808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (5))){
var inst_28954 = cljs.core.async.close_BANG_(out);
var state_28969__$1 = state_28969;
var statearr_28982_29810 = state_28969__$1;
(statearr_28982_29810[(2)] = inst_28954);

(statearr_28982_29810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (10))){
var inst_28962 = (state_28969[(2)]);
var state_28969__$1 = (function (){var statearr_28983 = state_28969;
(statearr_28983[(8)] = inst_28962);

return statearr_28983;
})();
var statearr_28984_29812 = state_28969__$1;
(statearr_28984_29812[(2)] = null);

(statearr_28984_29812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (8))){
var inst_28951 = (state_28969[(7)]);
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28969__$1,(11),out,inst_28951);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_28985 = [null,null,null,null,null,null,null,null,null];
(statearr_28985[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_28985[(1)] = (1));

return statearr_28985;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_28969){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_28969);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e28986){var ex__26859__auto__ = e28986;
var statearr_28987_29813 = state_28969;
(statearr_28987_29813[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_28969[(4)]))){
var statearr_28988_29814 = state_28969;
(statearr_28988_29814[(1)] = cljs.core.first((state_28969[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29815 = state_28969;
state_28969 = G__29815;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_28969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_28969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_28989 = f__27120__auto__();
(statearr_28989[(6)] = c__27119__auto___29800);

return statearr_28989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28991 = arguments.length;
switch (G__28991) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27119__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_29053){
var state_val_29054 = (state_29053[(1)]);
if((state_val_29054 === (7))){
var inst_29049 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29055_29817 = state_29053__$1;
(statearr_29055_29817[(2)] = inst_29049);

(statearr_29055_29817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (20))){
var inst_29019 = (state_29053[(7)]);
var inst_29030 = (state_29053[(2)]);
var inst_29031 = cljs.core.next(inst_29019);
var inst_29005 = inst_29031;
var inst_29006 = null;
var inst_29007 = (0);
var inst_29008 = (0);
var state_29053__$1 = (function (){var statearr_29056 = state_29053;
(statearr_29056[(8)] = inst_29008);

(statearr_29056[(9)] = inst_29030);

(statearr_29056[(10)] = inst_29007);

(statearr_29056[(11)] = inst_29005);

(statearr_29056[(12)] = inst_29006);

return statearr_29056;
})();
var statearr_29057_29818 = state_29053__$1;
(statearr_29057_29818[(2)] = null);

(statearr_29057_29818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (1))){
var state_29053__$1 = state_29053;
var statearr_29058_29819 = state_29053__$1;
(statearr_29058_29819[(2)] = null);

(statearr_29058_29819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (4))){
var inst_28994 = (state_29053[(13)]);
var inst_28994__$1 = (state_29053[(2)]);
var inst_28995 = (inst_28994__$1 == null);
var state_29053__$1 = (function (){var statearr_29059 = state_29053;
(statearr_29059[(13)] = inst_28994__$1);

return statearr_29059;
})();
if(cljs.core.truth_(inst_28995)){
var statearr_29060_29820 = state_29053__$1;
(statearr_29060_29820[(1)] = (5));

} else {
var statearr_29061_29821 = state_29053__$1;
(statearr_29061_29821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (15))){
var state_29053__$1 = state_29053;
var statearr_29065_29822 = state_29053__$1;
(statearr_29065_29822[(2)] = null);

(statearr_29065_29822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (21))){
var state_29053__$1 = state_29053;
var statearr_29066_29823 = state_29053__$1;
(statearr_29066_29823[(2)] = null);

(statearr_29066_29823[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (13))){
var inst_29008 = (state_29053[(8)]);
var inst_29007 = (state_29053[(10)]);
var inst_29005 = (state_29053[(11)]);
var inst_29006 = (state_29053[(12)]);
var inst_29015 = (state_29053[(2)]);
var inst_29016 = (inst_29008 + (1));
var tmp29062 = inst_29007;
var tmp29063 = inst_29005;
var tmp29064 = inst_29006;
var inst_29005__$1 = tmp29063;
var inst_29006__$1 = tmp29064;
var inst_29007__$1 = tmp29062;
var inst_29008__$1 = inst_29016;
var state_29053__$1 = (function (){var statearr_29067 = state_29053;
(statearr_29067[(8)] = inst_29008__$1);

(statearr_29067[(14)] = inst_29015);

(statearr_29067[(10)] = inst_29007__$1);

(statearr_29067[(11)] = inst_29005__$1);

(statearr_29067[(12)] = inst_29006__$1);

return statearr_29067;
})();
var statearr_29068_29824 = state_29053__$1;
(statearr_29068_29824[(2)] = null);

(statearr_29068_29824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (22))){
var state_29053__$1 = state_29053;
var statearr_29069_29825 = state_29053__$1;
(statearr_29069_29825[(2)] = null);

(statearr_29069_29825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (6))){
var inst_28994 = (state_29053[(13)]);
var inst_29003 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28994) : f.call(null, inst_28994));
var inst_29004 = cljs.core.seq(inst_29003);
var inst_29005 = inst_29004;
var inst_29006 = null;
var inst_29007 = (0);
var inst_29008 = (0);
var state_29053__$1 = (function (){var statearr_29070 = state_29053;
(statearr_29070[(8)] = inst_29008);

(statearr_29070[(10)] = inst_29007);

(statearr_29070[(11)] = inst_29005);

(statearr_29070[(12)] = inst_29006);

return statearr_29070;
})();
var statearr_29071_29826 = state_29053__$1;
(statearr_29071_29826[(2)] = null);

(statearr_29071_29826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (17))){
var inst_29019 = (state_29053[(7)]);
var inst_29023 = cljs.core.chunk_first(inst_29019);
var inst_29024 = cljs.core.chunk_rest(inst_29019);
var inst_29025 = cljs.core.count(inst_29023);
var inst_29005 = inst_29024;
var inst_29006 = inst_29023;
var inst_29007 = inst_29025;
var inst_29008 = (0);
var state_29053__$1 = (function (){var statearr_29072 = state_29053;
(statearr_29072[(8)] = inst_29008);

(statearr_29072[(10)] = inst_29007);

(statearr_29072[(11)] = inst_29005);

(statearr_29072[(12)] = inst_29006);

return statearr_29072;
})();
var statearr_29073_29831 = state_29053__$1;
(statearr_29073_29831[(2)] = null);

(statearr_29073_29831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (3))){
var inst_29051 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29053__$1,inst_29051);
} else {
if((state_val_29054 === (12))){
var inst_29039 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29074_29832 = state_29053__$1;
(statearr_29074_29832[(2)] = inst_29039);

(statearr_29074_29832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (2))){
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29053__$1,(4),in$);
} else {
if((state_val_29054 === (23))){
var inst_29047 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29075_29833 = state_29053__$1;
(statearr_29075_29833[(2)] = inst_29047);

(statearr_29075_29833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (19))){
var inst_29034 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29076_29834 = state_29053__$1;
(statearr_29076_29834[(2)] = inst_29034);

(statearr_29076_29834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (11))){
var inst_29019 = (state_29053[(7)]);
var inst_29005 = (state_29053[(11)]);
var inst_29019__$1 = cljs.core.seq(inst_29005);
var state_29053__$1 = (function (){var statearr_29077 = state_29053;
(statearr_29077[(7)] = inst_29019__$1);

return statearr_29077;
})();
if(inst_29019__$1){
var statearr_29078_29835 = state_29053__$1;
(statearr_29078_29835[(1)] = (14));

} else {
var statearr_29079_29836 = state_29053__$1;
(statearr_29079_29836[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (9))){
var inst_29041 = (state_29053[(2)]);
var inst_29042 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29053__$1 = (function (){var statearr_29080 = state_29053;
(statearr_29080[(15)] = inst_29041);

return statearr_29080;
})();
if(cljs.core.truth_(inst_29042)){
var statearr_29081_29837 = state_29053__$1;
(statearr_29081_29837[(1)] = (21));

} else {
var statearr_29082_29838 = state_29053__$1;
(statearr_29082_29838[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (5))){
var inst_28997 = cljs.core.async.close_BANG_(out);
var state_29053__$1 = state_29053;
var statearr_29083_29839 = state_29053__$1;
(statearr_29083_29839[(2)] = inst_28997);

(statearr_29083_29839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (14))){
var inst_29019 = (state_29053[(7)]);
var inst_29021 = cljs.core.chunked_seq_QMARK_(inst_29019);
var state_29053__$1 = state_29053;
if(inst_29021){
var statearr_29084_29840 = state_29053__$1;
(statearr_29084_29840[(1)] = (17));

} else {
var statearr_29085_29841 = state_29053__$1;
(statearr_29085_29841[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (16))){
var inst_29037 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29086_29842 = state_29053__$1;
(statearr_29086_29842[(2)] = inst_29037);

(statearr_29086_29842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (10))){
var inst_29008 = (state_29053[(8)]);
var inst_29006 = (state_29053[(12)]);
var inst_29013 = cljs.core._nth(inst_29006,inst_29008);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29053__$1,(13),out,inst_29013);
} else {
if((state_val_29054 === (18))){
var inst_29019 = (state_29053[(7)]);
var inst_29028 = cljs.core.first(inst_29019);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29053__$1,(20),out,inst_29028);
} else {
if((state_val_29054 === (8))){
var inst_29008 = (state_29053[(8)]);
var inst_29007 = (state_29053[(10)]);
var inst_29010 = (inst_29008 < inst_29007);
var inst_29011 = inst_29010;
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_29011)){
var statearr_29087_29847 = state_29053__$1;
(statearr_29087_29847[(1)] = (10));

} else {
var statearr_29088_29848 = state_29053__$1;
(statearr_29088_29848[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26856__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26856__auto____0 = (function (){
var statearr_29089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29089[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26856__auto__);

(statearr_29089[(1)] = (1));

return statearr_29089;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26856__auto____1 = (function (state_29053){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_29053);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e29090){var ex__26859__auto__ = e29090;
var statearr_29091_29850 = state_29053;
(statearr_29091_29850[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_29053[(4)]))){
var statearr_29092_29851 = state_29053;
(statearr_29092_29851[(1)] = cljs.core.first((state_29053[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29852 = state_29053;
state_29053 = G__29852;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26856__auto__ = function(state_29053){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26856__auto____1.call(this,state_29053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26856__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26856__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_29093 = f__27120__auto__();
(statearr_29093[(6)] = c__27119__auto__);

return statearr_29093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));

return c__27119__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29095 = arguments.length;
switch (G__29095) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29097 = arguments.length;
switch (G__29097) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29099 = arguments.length;
switch (G__29099) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27119__auto___29858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_29123){
var state_val_29124 = (state_29123[(1)]);
if((state_val_29124 === (7))){
var inst_29118 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29125_29862 = state_29123__$1;
(statearr_29125_29862[(2)] = inst_29118);

(statearr_29125_29862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (1))){
var inst_29100 = null;
var state_29123__$1 = (function (){var statearr_29126 = state_29123;
(statearr_29126[(7)] = inst_29100);

return statearr_29126;
})();
var statearr_29127_29863 = state_29123__$1;
(statearr_29127_29863[(2)] = null);

(statearr_29127_29863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (4))){
var inst_29103 = (state_29123[(8)]);
var inst_29103__$1 = (state_29123[(2)]);
var inst_29104 = (inst_29103__$1 == null);
var inst_29105 = cljs.core.not(inst_29104);
var state_29123__$1 = (function (){var statearr_29128 = state_29123;
(statearr_29128[(8)] = inst_29103__$1);

return statearr_29128;
})();
if(inst_29105){
var statearr_29129_29864 = state_29123__$1;
(statearr_29129_29864[(1)] = (5));

} else {
var statearr_29130_29865 = state_29123__$1;
(statearr_29130_29865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (6))){
var state_29123__$1 = state_29123;
var statearr_29131_29866 = state_29123__$1;
(statearr_29131_29866[(2)] = null);

(statearr_29131_29866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (3))){
var inst_29120 = (state_29123[(2)]);
var inst_29121 = cljs.core.async.close_BANG_(out);
var state_29123__$1 = (function (){var statearr_29132 = state_29123;
(statearr_29132[(9)] = inst_29120);

return statearr_29132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29123__$1,inst_29121);
} else {
if((state_val_29124 === (2))){
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29123__$1,(4),ch);
} else {
if((state_val_29124 === (11))){
var inst_29103 = (state_29123[(8)]);
var inst_29112 = (state_29123[(2)]);
var inst_29100 = inst_29103;
var state_29123__$1 = (function (){var statearr_29133 = state_29123;
(statearr_29133[(7)] = inst_29100);

(statearr_29133[(10)] = inst_29112);

return statearr_29133;
})();
var statearr_29134_29867 = state_29123__$1;
(statearr_29134_29867[(2)] = null);

(statearr_29134_29867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (9))){
var inst_29103 = (state_29123[(8)]);
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29123__$1,(11),out,inst_29103);
} else {
if((state_val_29124 === (5))){
var inst_29100 = (state_29123[(7)]);
var inst_29103 = (state_29123[(8)]);
var inst_29107 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29103,inst_29100);
var state_29123__$1 = state_29123;
if(inst_29107){
var statearr_29136_29868 = state_29123__$1;
(statearr_29136_29868[(1)] = (8));

} else {
var statearr_29137_29869 = state_29123__$1;
(statearr_29137_29869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (10))){
var inst_29115 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29138_29870 = state_29123__$1;
(statearr_29138_29870[(2)] = inst_29115);

(statearr_29138_29870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (8))){
var inst_29100 = (state_29123[(7)]);
var tmp29135 = inst_29100;
var inst_29100__$1 = tmp29135;
var state_29123__$1 = (function (){var statearr_29139 = state_29123;
(statearr_29139[(7)] = inst_29100__$1);

return statearr_29139;
})();
var statearr_29140_29871 = state_29123__$1;
(statearr_29140_29871[(2)] = null);

(statearr_29140_29871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_29141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29141[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_29141[(1)] = (1));

return statearr_29141;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_29123){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_29123);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e29142){var ex__26859__auto__ = e29142;
var statearr_29143_29872 = state_29123;
(statearr_29143_29872[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_29123[(4)]))){
var statearr_29144_29873 = state_29123;
(statearr_29144_29873[(1)] = cljs.core.first((state_29123[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29874 = state_29123;
state_29123 = G__29874;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_29123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_29123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_29145 = f__27120__auto__();
(statearr_29145[(6)] = c__27119__auto___29858);

return statearr_29145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29147 = arguments.length;
switch (G__29147) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27119__auto___29876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_29185){
var state_val_29186 = (state_29185[(1)]);
if((state_val_29186 === (7))){
var inst_29181 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29187_29877 = state_29185__$1;
(statearr_29187_29877[(2)] = inst_29181);

(statearr_29187_29877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (1))){
var inst_29148 = (new Array(n));
var inst_29149 = inst_29148;
var inst_29150 = (0);
var state_29185__$1 = (function (){var statearr_29188 = state_29185;
(statearr_29188[(7)] = inst_29149);

(statearr_29188[(8)] = inst_29150);

return statearr_29188;
})();
var statearr_29189_29878 = state_29185__$1;
(statearr_29189_29878[(2)] = null);

(statearr_29189_29878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (4))){
var inst_29153 = (state_29185[(9)]);
var inst_29153__$1 = (state_29185[(2)]);
var inst_29154 = (inst_29153__$1 == null);
var inst_29155 = cljs.core.not(inst_29154);
var state_29185__$1 = (function (){var statearr_29190 = state_29185;
(statearr_29190[(9)] = inst_29153__$1);

return statearr_29190;
})();
if(inst_29155){
var statearr_29191_29879 = state_29185__$1;
(statearr_29191_29879[(1)] = (5));

} else {
var statearr_29192_29880 = state_29185__$1;
(statearr_29192_29880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (15))){
var inst_29175 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29193_29881 = state_29185__$1;
(statearr_29193_29881[(2)] = inst_29175);

(statearr_29193_29881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (13))){
var state_29185__$1 = state_29185;
var statearr_29194_29882 = state_29185__$1;
(statearr_29194_29882[(2)] = null);

(statearr_29194_29882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (6))){
var inst_29150 = (state_29185[(8)]);
var inst_29171 = (inst_29150 > (0));
var state_29185__$1 = state_29185;
if(cljs.core.truth_(inst_29171)){
var statearr_29195_29884 = state_29185__$1;
(statearr_29195_29884[(1)] = (12));

} else {
var statearr_29196_29885 = state_29185__$1;
(statearr_29196_29885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (3))){
var inst_29183 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29185__$1,inst_29183);
} else {
if((state_val_29186 === (12))){
var inst_29149 = (state_29185[(7)]);
var inst_29173 = cljs.core.vec(inst_29149);
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29185__$1,(15),out,inst_29173);
} else {
if((state_val_29186 === (2))){
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29185__$1,(4),ch);
} else {
if((state_val_29186 === (11))){
var inst_29165 = (state_29185[(2)]);
var inst_29166 = (new Array(n));
var inst_29149 = inst_29166;
var inst_29150 = (0);
var state_29185__$1 = (function (){var statearr_29197 = state_29185;
(statearr_29197[(7)] = inst_29149);

(statearr_29197[(10)] = inst_29165);

(statearr_29197[(8)] = inst_29150);

return statearr_29197;
})();
var statearr_29198_29889 = state_29185__$1;
(statearr_29198_29889[(2)] = null);

(statearr_29198_29889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (9))){
var inst_29149 = (state_29185[(7)]);
var inst_29163 = cljs.core.vec(inst_29149);
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29185__$1,(11),out,inst_29163);
} else {
if((state_val_29186 === (5))){
var inst_29158 = (state_29185[(11)]);
var inst_29153 = (state_29185[(9)]);
var inst_29149 = (state_29185[(7)]);
var inst_29150 = (state_29185[(8)]);
var inst_29157 = (inst_29149[inst_29150] = inst_29153);
var inst_29158__$1 = (inst_29150 + (1));
var inst_29159 = (inst_29158__$1 < n);
var state_29185__$1 = (function (){var statearr_29199 = state_29185;
(statearr_29199[(11)] = inst_29158__$1);

(statearr_29199[(12)] = inst_29157);

return statearr_29199;
})();
if(cljs.core.truth_(inst_29159)){
var statearr_29200_29890 = state_29185__$1;
(statearr_29200_29890[(1)] = (8));

} else {
var statearr_29201_29891 = state_29185__$1;
(statearr_29201_29891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (14))){
var inst_29178 = (state_29185[(2)]);
var inst_29179 = cljs.core.async.close_BANG_(out);
var state_29185__$1 = (function (){var statearr_29203 = state_29185;
(statearr_29203[(13)] = inst_29178);

return statearr_29203;
})();
var statearr_29204_29892 = state_29185__$1;
(statearr_29204_29892[(2)] = inst_29179);

(statearr_29204_29892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (10))){
var inst_29169 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29205_29893 = state_29185__$1;
(statearr_29205_29893[(2)] = inst_29169);

(statearr_29205_29893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (8))){
var inst_29158 = (state_29185[(11)]);
var inst_29149 = (state_29185[(7)]);
var tmp29202 = inst_29149;
var inst_29149__$1 = tmp29202;
var inst_29150 = inst_29158;
var state_29185__$1 = (function (){var statearr_29206 = state_29185;
(statearr_29206[(7)] = inst_29149__$1);

(statearr_29206[(8)] = inst_29150);

return statearr_29206;
})();
var statearr_29207_29894 = state_29185__$1;
(statearr_29207_29894[(2)] = null);

(statearr_29207_29894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_29208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29208[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_29208[(1)] = (1));

return statearr_29208;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_29185){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_29185);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e29209){var ex__26859__auto__ = e29209;
var statearr_29210_29895 = state_29185;
(statearr_29210_29895[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_29185[(4)]))){
var statearr_29211_29896 = state_29185;
(statearr_29211_29896[(1)] = cljs.core.first((state_29185[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29897 = state_29185;
state_29185 = G__29897;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_29185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_29185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_29212 = f__27120__auto__();
(statearr_29212[(6)] = c__27119__auto___29876);

return statearr_29212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29214 = arguments.length;
switch (G__29214) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27119__auto___29899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_29259){
var state_val_29260 = (state_29259[(1)]);
if((state_val_29260 === (7))){
var inst_29255 = (state_29259[(2)]);
var state_29259__$1 = state_29259;
var statearr_29261_29901 = state_29259__$1;
(statearr_29261_29901[(2)] = inst_29255);

(statearr_29261_29901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (1))){
var inst_29215 = [];
var inst_29216 = inst_29215;
var inst_29217 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29259__$1 = (function (){var statearr_29262 = state_29259;
(statearr_29262[(7)] = inst_29217);

(statearr_29262[(8)] = inst_29216);

return statearr_29262;
})();
var statearr_29263_29902 = state_29259__$1;
(statearr_29263_29902[(2)] = null);

(statearr_29263_29902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (4))){
var inst_29220 = (state_29259[(9)]);
var inst_29220__$1 = (state_29259[(2)]);
var inst_29221 = (inst_29220__$1 == null);
var inst_29222 = cljs.core.not(inst_29221);
var state_29259__$1 = (function (){var statearr_29264 = state_29259;
(statearr_29264[(9)] = inst_29220__$1);

return statearr_29264;
})();
if(inst_29222){
var statearr_29265_29903 = state_29259__$1;
(statearr_29265_29903[(1)] = (5));

} else {
var statearr_29266_29904 = state_29259__$1;
(statearr_29266_29904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (15))){
var inst_29216 = (state_29259[(8)]);
var inst_29247 = cljs.core.vec(inst_29216);
var state_29259__$1 = state_29259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29259__$1,(18),out,inst_29247);
} else {
if((state_val_29260 === (13))){
var inst_29242 = (state_29259[(2)]);
var state_29259__$1 = state_29259;
var statearr_29267_29905 = state_29259__$1;
(statearr_29267_29905[(2)] = inst_29242);

(statearr_29267_29905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (6))){
var inst_29216 = (state_29259[(8)]);
var inst_29244 = inst_29216.length;
var inst_29245 = (inst_29244 > (0));
var state_29259__$1 = state_29259;
if(cljs.core.truth_(inst_29245)){
var statearr_29268_29906 = state_29259__$1;
(statearr_29268_29906[(1)] = (15));

} else {
var statearr_29269_29907 = state_29259__$1;
(statearr_29269_29907[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (17))){
var inst_29252 = (state_29259[(2)]);
var inst_29253 = cljs.core.async.close_BANG_(out);
var state_29259__$1 = (function (){var statearr_29270 = state_29259;
(statearr_29270[(10)] = inst_29252);

return statearr_29270;
})();
var statearr_29271_29908 = state_29259__$1;
(statearr_29271_29908[(2)] = inst_29253);

(statearr_29271_29908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (3))){
var inst_29257 = (state_29259[(2)]);
var state_29259__$1 = state_29259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29259__$1,inst_29257);
} else {
if((state_val_29260 === (12))){
var inst_29216 = (state_29259[(8)]);
var inst_29235 = cljs.core.vec(inst_29216);
var state_29259__$1 = state_29259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29259__$1,(14),out,inst_29235);
} else {
if((state_val_29260 === (2))){
var state_29259__$1 = state_29259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29259__$1,(4),ch);
} else {
if((state_val_29260 === (11))){
var inst_29224 = (state_29259[(11)]);
var inst_29220 = (state_29259[(9)]);
var inst_29216 = (state_29259[(8)]);
var inst_29232 = inst_29216.push(inst_29220);
var tmp29272 = inst_29216;
var inst_29216__$1 = tmp29272;
var inst_29217 = inst_29224;
var state_29259__$1 = (function (){var statearr_29273 = state_29259;
(statearr_29273[(7)] = inst_29217);

(statearr_29273[(8)] = inst_29216__$1);

(statearr_29273[(12)] = inst_29232);

return statearr_29273;
})();
var statearr_29274_29909 = state_29259__$1;
(statearr_29274_29909[(2)] = null);

(statearr_29274_29909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (9))){
var inst_29217 = (state_29259[(7)]);
var inst_29228 = cljs.core.keyword_identical_QMARK_(inst_29217,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_29259__$1 = state_29259;
var statearr_29275_29914 = state_29259__$1;
(statearr_29275_29914[(2)] = inst_29228);

(statearr_29275_29914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (5))){
var inst_29224 = (state_29259[(11)]);
var inst_29217 = (state_29259[(7)]);
var inst_29220 = (state_29259[(9)]);
var inst_29225 = (state_29259[(13)]);
var inst_29224__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29220) : f.call(null, inst_29220));
var inst_29225__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29224__$1,inst_29217);
var state_29259__$1 = (function (){var statearr_29276 = state_29259;
(statearr_29276[(11)] = inst_29224__$1);

(statearr_29276[(13)] = inst_29225__$1);

return statearr_29276;
})();
if(inst_29225__$1){
var statearr_29277_29915 = state_29259__$1;
(statearr_29277_29915[(1)] = (8));

} else {
var statearr_29278_29917 = state_29259__$1;
(statearr_29278_29917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (14))){
var inst_29224 = (state_29259[(11)]);
var inst_29220 = (state_29259[(9)]);
var inst_29237 = (state_29259[(2)]);
var inst_29238 = [];
var inst_29239 = inst_29238.push(inst_29220);
var inst_29216 = inst_29238;
var inst_29217 = inst_29224;
var state_29259__$1 = (function (){var statearr_29279 = state_29259;
(statearr_29279[(14)] = inst_29239);

(statearr_29279[(7)] = inst_29217);

(statearr_29279[(8)] = inst_29216);

(statearr_29279[(15)] = inst_29237);

return statearr_29279;
})();
var statearr_29280_29918 = state_29259__$1;
(statearr_29280_29918[(2)] = null);

(statearr_29280_29918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (16))){
var state_29259__$1 = state_29259;
var statearr_29281_29919 = state_29259__$1;
(statearr_29281_29919[(2)] = null);

(statearr_29281_29919[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (10))){
var inst_29230 = (state_29259[(2)]);
var state_29259__$1 = state_29259;
if(cljs.core.truth_(inst_29230)){
var statearr_29282_29920 = state_29259__$1;
(statearr_29282_29920[(1)] = (11));

} else {
var statearr_29283_29921 = state_29259__$1;
(statearr_29283_29921[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (18))){
var inst_29249 = (state_29259[(2)]);
var state_29259__$1 = state_29259;
var statearr_29284_29922 = state_29259__$1;
(statearr_29284_29922[(2)] = inst_29249);

(statearr_29284_29922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (8))){
var inst_29225 = (state_29259[(13)]);
var state_29259__$1 = state_29259;
var statearr_29285_29923 = state_29259__$1;
(statearr_29285_29923[(2)] = inst_29225);

(statearr_29285_29923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26856__auto__ = null;
var cljs$core$async$state_machine__26856__auto____0 = (function (){
var statearr_29286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29286[(0)] = cljs$core$async$state_machine__26856__auto__);

(statearr_29286[(1)] = (1));

return statearr_29286;
});
var cljs$core$async$state_machine__26856__auto____1 = (function (state_29259){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_29259);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e29287){var ex__26859__auto__ = e29287;
var statearr_29288_29925 = state_29259;
(statearr_29288_29925[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_29259[(4)]))){
var statearr_29289_29926 = state_29259;
(statearr_29289_29926[(1)] = cljs.core.first((state_29259[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29927 = state_29259;
state_29259 = G__29927;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
cljs$core$async$state_machine__26856__auto__ = function(state_29259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26856__auto____1.call(this,state_29259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26856__auto____0;
cljs$core$async$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26856__auto____1;
return cljs$core$async$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_29290 = f__27120__auto__();
(statearr_29290[(6)] = c__27119__auto___29899);

return statearr_29290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
