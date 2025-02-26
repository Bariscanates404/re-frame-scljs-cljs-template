goog.provide('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
mranderson048.re_frame.v0v10v2.re_frame.interceptor.mandatory_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"before","before",-1633692388),null], null), null);
mranderson048.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_ = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$interceptor_QMARK_(m){
return ((cljs.core.map_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.interceptor.mandatory_interceptor_keys,cljs.core.set(cljs.core.keys(m)))));
});
/**
 * Create an interceptor from named arguments
 */
mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$__GT_interceptor(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19038 = arguments.length;
var i__5727__auto___19039 = (0);
while(true){
if((i__5727__auto___19039 < len__5726__auto___19038)){
args__5732__auto__.push((arguments[i__5727__auto___19039]));

var G__19040 = (i__5727__auto___19039 + (1));
i__5727__auto___19039 = G__19040;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__19005){
var map__19006 = p__19005;
var map__19006__$1 = cljs.core.__destructure_map(map__19006);
var m = map__19006__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,new cljs.core.Keyword(null,"after","after",594996914));
if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5802__auto___19044 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),mranderson048.re_frame.v0v10v2.re_frame.interceptor.mandatory_interceptor_keys));
if(temp__5802__auto___19044){
var unknown_keys_19045 = temp__5802__auto___19044;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ->interceptor ",m," has unknown keys:",unknown_keys_19045], 0));
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",-26044928);
}
})(),new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null);
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq19004){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19004));
}));

mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$get_effect(var_args){
var G__19010 = arguments.length;
switch (G__19010) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null));
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),not_found);
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$lang$maxFixedArity = 3);

mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_effect = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$assoc_effect(context,key,value){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),value);
});
mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$get_coeffect(var_args){
var G__19018 = arguments.length;
switch (G__19018) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null));
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),not_found);
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$lang$maxFixedArity = 3);

mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$assoc_coeffect(context,key,value){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),value);
});
mranderson048.re_frame.v0v10v2.re_frame.interceptor.update_coeffect = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$update_coeffect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19050 = arguments.length;
var i__5727__auto___19051 = (0);
while(true){
if((i__5727__auto___19051 < len__5726__auto___19050)){
args__5732__auto__.push((arguments[i__5727__auto___19051]));

var G__19052 = (i__5727__auto___19051 + (1));
i__5727__auto___19051 = G__19052;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),f,args);
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.update_coeffect.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(mranderson048.re_frame.v0v10v2.re_frame.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq19019){
var G__19020 = cljs.core.first(seq19019);
var seq19019__$1 = cljs.core.next(seq19019);
var G__19021 = cljs.core.first(seq19019__$1);
var seq19019__$2 = cljs.core.next(seq19019__$1);
var G__19022 = cljs.core.first(seq19019__$2);
var seq19019__$3 = cljs.core.next(seq19019__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19020,G__19021,G__19022,seq19019__$3);
}));

mranderson048.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptor_fn = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$invoke_interceptor_fn(context,interceptor,direction){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(interceptor,direction);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(context) : f.call(null, context));
} else {
return context;
}
});
/**
 * Loop over all interceptors, calling `direction` function on each,
 *   threading the value of `context` through every call.
 * 
 *   `direction` is one of `:before` or `:after`.
 * 
 *   Each iteration, the next interceptor to process is obtained from
 *   context's `:queue`. After they are processed, interceptors are popped
 *   from `:queue` and added to `:stack`.
 * 
 *   After sufficient iteration, `:queue` will be empty, and `:stack` will
 *   contain all interceptors processed.
 * 
 *   Returns updated `context`. Ie. the `context` which has been threaded
 *   through all interceptor functions.
 * 
 *   Generally speaking, an interceptor's `:before` function will (if present)
 *   add to a `context's` `:coeffects`, while it's `:after` function
 *   will modify the `context`'s `:effects`.  Very approximately.
 * 
 *   But because all interceptor functions are given `context`, and can
 *   return a modified version of it, the way is clear for an interceptor
 *   to introspect the stack or queue, or even modify the queue
 *   (add new interceptors via `enqueue`?). This is a very fluid arrangement.
 */
mranderson048.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptors = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$invoke_interceptors(context,direction){
var context__$1 = context;
while(true){
var queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.empty_QMARK_(queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek(queue);
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context__$1);
var G__19061 = mranderson048.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptor_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop(queue),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,interceptor)], 0)),interceptor,direction);
context__$1 = G__19061;
continue;
}
break;
}
});
/**
 * Add a collection of `interceptors` to the end of `context's` execution `:queue`.
 *   Returns the updated `context`.
 * 
 *   In an advanced case, this function could allow an interceptor to add new
 *   interceptors to the `:queue` of a context.
 */
mranderson048.re_frame.v0v10v2.re_frame.interceptor.enqueue = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$enqueue(context,interceptors){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,mranderson048.re_frame.v0v10v2.re_frame.interop.empty_queue),interceptors);
});
/**
 * Create a fresh context
 */
mranderson048.re_frame.v0v10v2.re_frame.interceptor.context = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$context(var_args){
var G__19024 = arguments.length;
switch (G__19024) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2 = (function (event,interceptors){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.enqueue(mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"event","event",301435442),event),interceptors);
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3 = (function (event,interceptors,db){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect(mranderson048.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2(event,interceptors),new cljs.core.Keyword(null,"db","db",993250759),db);
}));

(mranderson048.re_frame.v0v10v2.re_frame.interceptor.context.cljs$lang$maxFixedArity = 3);

/**
 * Called on completion of `:before` processing, this function prepares/modifies
 * `context` for the backwards sweep of processing in which an interceptor
 * chain's `:after` fns are called.
 * 
 *   At this point in processing, the `:queue` is empty and `:stack` holds all
 *   the previously run interceptors. So this function enables the backwards walk
 *   by priming `:queue` with what's currently in `:stack`
 */
mranderson048.re_frame.v0v10v2.re_frame.interceptor.change_direction = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$change_direction(context){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.enqueue(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"queue","queue",1455835879)),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context));
});
/**
 * Executes the given chain (coll) of interceptors.
 * 
 * Each interceptor has this form:
 *     {:before  (fn [context] ...)     ;; returns possibly modified context
 *      :after   (fn [context] ...)}    ;; `identity` would be a noop
 * 
 * Walks the queue of iterceptors from beginning to end, calling the
 * `:before` fn on each, then reverse direction and walk backwards,
 * calling the `:after` fn on each.
 * 
 * The last interceptor in the chain presumably wraps an event
 * handler fn. So the overall goal of the process is to "handle
 * the given event".
 * 
 * Thread a `context` through all calls. `context` has this form:
 * 
 *   {:coeffects {:event [:a-query-id :some-param]
 *                :db    <original contents of app-db>}
 *    :effects   {:db    <new value for app-db>
 *                :dispatch  [:an-event-id :param1]}
 *    :queue     <a collection of further interceptors>
 *    :stack     <a collection of interceptors already walked>}
 * 
 * `context` has `:coeffects` and `:effects` which, if this was a web
 * server, would be somewhat anologous to `request` and `response`
 * respectively.
 * 
 * `coeffects` will contain data like `event` and the initial
 * state of `db` -  the inputs required by the event handler
 * (sitting presumably on the end of the chain), while handler-returned
 * side effects are put into `:effects` including, but not limited to,
 * new values for `db`.
 * 
 * The first few interceptors in a chain will likely have `:before`
 * functions which "prime" the `context` by adding the event, and
 * the current state of app-db into `:coeffects`. But interceptors can
 * add whatever they want to `:coeffects` - perhaps the event handler needs
 * some information from localstore, or a random number, or access to
 * a DataScript connection.
 * 
 * Equally, some interceptors in the chain will have `:after` fn
 * which can process the side effects accumulated into `:effects`
 * including but, not limited to, updates to app-db.
 * 
 * Through both stages (before and after), `context` contains a `:queue`
 * of interceptors yet to be processed, and a `:stack` of interceptors
 * already done.  In advanced cases, these values can be modified by the
 * functions through which the context is threaded.
 */
mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute = (function mranderson048$re_frame$v0v10v2$re_frame$interceptor$execute(event_v,interceptors){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptors(mranderson048.re_frame.v0v10v2.re_frame.interceptor.change_direction(mranderson048.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptors(mranderson048.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2(event_v,interceptors),new cljs.core.Keyword(null,"before","before",-1633692388))),new cljs.core.Keyword(null,"after","after",594996914));
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v2.re_frame.interceptor.js.map
