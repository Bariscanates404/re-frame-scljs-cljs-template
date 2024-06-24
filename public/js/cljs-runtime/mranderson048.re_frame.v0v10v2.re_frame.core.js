goog.provide('mranderson048.re_frame.v0v10v2.re_frame.core');
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch = mranderson048.re_frame.v0v10v2.re_frame.router.dispatch;
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch_sync = mranderson048.re_frame.v0v10v2.re_frame.router.dispatch_sync;
mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub = mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub;
mranderson048.re_frame.v0v10v2.re_frame.core.subscribe = mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.subs.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_ = mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub_raw = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_sub_raw(query_id,handler_fn){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id,handler_fn);
});
mranderson048.re_frame.v0v10v2.re_frame.core.reg_fx = mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.fx.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.reg_cofx = mranderson048.re_frame.v0v10v2.re_frame.cofx.reg_cofx;
mranderson048.re_frame.v0v10v2.re_frame.core.inject_cofx = mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_cofx;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_db(var_args){
var G__19695 = arguments.length;
switch (G__19695) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_fx(var_args){
var G__19700 = arguments.length;
switch (G__19700) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_ctx(var_args){
var G__19704 = arguments.length;
switch (G__19704) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3);

mranderson048.re_frame.v0v10v2.re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.debug = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.debug;
mranderson048.re_frame.v0v10v2.re_frame.core.path = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.path;
mranderson048.re_frame.v0v10v2.re_frame.core.enrich = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.enrich;
mranderson048.re_frame.v0v10v2.re_frame.core.trim_v = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.trim_v;
mranderson048.re_frame.v0v10v2.re_frame.core.after = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.after;
mranderson048.re_frame.v0v10v2.re_frame.core.on_changes = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.on_changes;
mranderson048.re_frame.v0v10v2.re_frame.core.__GT_interceptor = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor;
mranderson048.re_frame.v0v10v2.re_frame.core.get_coeffect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect;
mranderson048.re_frame.v0v10v2.re_frame.core.assoc_coeffect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect;
mranderson048.re_frame.v0v10v2.re_frame.core.get_effect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect;
mranderson048.re_frame.v0v10v2.re_frame.core.assoc_effect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_effect;
mranderson048.re_frame.v0v10v2.re_frame.core.enqueue = mranderson048.re_frame.v0v10v2.re_frame.interceptor.enqueue;
mranderson048.re_frame.v0v10v2.re_frame.core.set_loggers_BANG_ = mranderson048.re_frame.v0v10v2.re_frame.loggers.set_loggers_BANG_;
mranderson048.re_frame.v0v10v2.re_frame.core.console = mranderson048.re_frame.v0v10v2.re_frame.loggers.console;
/**
 * Checkpoints the state of mranderson048.re-frame.v0v10v2.re-frame and returns a function which, when
 *   later called, will restore mranderson048.re-frame.v0v10v2.re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.core.make_restore_fn = (function mranderson048$re_frame$v0v10v2$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.db.app_db);
var subs_cache = cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_19733 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_19734 = cljs.core.set(cljs.core.vals(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)));
var seq__19706_19735 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_19734,original_subs_19733));
var chunk__19707_19736 = null;
var count__19708_19737 = (0);
var i__19709_19738 = (0);
while(true){
if((i__19709_19738 < count__19708_19737)){
var sub_19739 = chunk__19707_19736.cljs$core$IIndexed$_nth$arity$2(null, i__19709_19738);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_(sub_19739);


var G__19740 = seq__19706_19735;
var G__19741 = chunk__19707_19736;
var G__19742 = count__19708_19737;
var G__19743 = (i__19709_19738 + (1));
seq__19706_19735 = G__19740;
chunk__19707_19736 = G__19741;
count__19708_19737 = G__19742;
i__19709_19738 = G__19743;
continue;
} else {
var temp__5804__auto___19744 = cljs.core.seq(seq__19706_19735);
if(temp__5804__auto___19744){
var seq__19706_19745__$1 = temp__5804__auto___19744;
if(cljs.core.chunked_seq_QMARK_(seq__19706_19745__$1)){
var c__5525__auto___19746 = cljs.core.chunk_first(seq__19706_19745__$1);
var G__19747 = cljs.core.chunk_rest(seq__19706_19745__$1);
var G__19748 = c__5525__auto___19746;
var G__19749 = cljs.core.count(c__5525__auto___19746);
var G__19750 = (0);
seq__19706_19735 = G__19747;
chunk__19707_19736 = G__19748;
count__19708_19737 = G__19749;
i__19709_19738 = G__19750;
continue;
} else {
var sub_19751 = cljs.core.first(seq__19706_19745__$1);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_(sub_19751);


var G__19752 = cljs.core.next(seq__19706_19745__$1);
var G__19753 = null;
var G__19754 = (0);
var G__19755 = (0);
seq__19706_19735 = G__19752;
chunk__19707_19736 = G__19753;
count__19708_19737 = G__19754;
i__19709_19738 = G__19755;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v2.re_frame.db.app_db,app_db);

return null;
});
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$core$add_post_event_callback(var_args){
var G__19712 = arguments.length;
switch (G__19712) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return mranderson048.re_frame.v0v10v2.re_frame.router.event_queue.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3(null, id,f);
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2);

mranderson048.re_frame.v0v10v2.re_frame.core.remove_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$core$remove_post_event_callback(id){
return mranderson048.re_frame.v0v10v2.re_frame.router.event_queue.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null, id);
});
mranderson048.re_frame.v0v10v2.re_frame.core.register_handler = (function mranderson048$re_frame$v0v10v2$re_frame$core$register_handler(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19757 = arguments.length;
var i__5727__auto___19758 = (0);
while(true){
if((i__5727__auto___19758 < len__5726__auto___19757)){
args__5732__auto__.push((arguments[i__5727__auto___19758]));

var G__19759 = (i__5727__auto___19758 + (1));
i__5727__auto___19758 = G__19759;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__19719_19761 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__19720_19762 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ";
var G__19721_19763 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__19722_19764 = ")";
(mranderson048.re_frame.v0v10v2.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v2.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__19719_19761,G__19720_19762,G__19721_19763,G__19722_19764) : mranderson048.re_frame.v0v10v2.re_frame.core.console.call(null, G__19719_19761,G__19720_19762,G__19721_19763,G__19722_19764));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db,args);
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq19716){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19716));
}));

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub = (function mranderson048$re_frame$v0v10v2$re_frame$core$register_sub(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19765 = arguments.length;
var i__5727__auto___19766 = (0);
while(true){
if((i__5727__auto___19766 < len__5726__auto___19765)){
args__5732__auto__.push((arguments[i__5727__auto___19766]));

var G__19767 = (i__5727__auto___19766 + (1));
i__5727__auto___19766 = G__19767;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__19725_19769 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__19726_19770 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ";
var G__19727_19771 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__19728_19772 = ")";
(mranderson048.re_frame.v0v10v2.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v2.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__19725_19769,G__19726_19770,G__19727_19771,G__19728_19772) : mranderson048.re_frame.v0v10v2.re_frame.core.console.call(null, G__19725_19769,G__19726_19770,G__19727_19771,G__19728_19772));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub_raw,args);
}));

(mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq19723){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19723));
}));


//# sourceMappingURL=mranderson048.re_frame.v0v10v2.re_frame.core.js.map
