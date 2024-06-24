goog.provide('mranderson048.re_frame.v0v10v2.re_frame.subs');
mranderson048.re_frame.v0v10v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_((mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.subs.kind) : mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null, mranderson048.re_frame.v0v10v2.re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__19025_19350 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction));
var chunk__19026_19351 = null;
var count__19027_19352 = (0);
var i__19028_19353 = (0);
while(true){
if((i__19028_19353 < count__19027_19352)){
var vec__19035_19354 = chunk__19026_19351.cljs$core$IIndexed$_nth$arity$2(null, i__19028_19353);
var k_19355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19035_19354,(0),null);
var rxn_19356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19035_19354,(1),null);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_(rxn_19356);


var G__19358 = seq__19025_19350;
var G__19359 = chunk__19026_19351;
var G__19360 = count__19027_19352;
var G__19361 = (i__19028_19353 + (1));
seq__19025_19350 = G__19358;
chunk__19026_19351 = G__19359;
count__19027_19352 = G__19360;
i__19028_19353 = G__19361;
continue;
} else {
var temp__5804__auto___19362 = cljs.core.seq(seq__19025_19350);
if(temp__5804__auto___19362){
var seq__19025_19363__$1 = temp__5804__auto___19362;
if(cljs.core.chunked_seq_QMARK_(seq__19025_19363__$1)){
var c__5525__auto___19364 = cljs.core.chunk_first(seq__19025_19363__$1);
var G__19365 = cljs.core.chunk_rest(seq__19025_19363__$1);
var G__19366 = c__5525__auto___19364;
var G__19367 = cljs.core.count(c__5525__auto___19364);
var G__19368 = (0);
seq__19025_19350 = G__19365;
chunk__19026_19351 = G__19366;
count__19027_19352 = G__19367;
i__19028_19353 = G__19368;
continue;
} else {
var vec__19041_19369 = cljs.core.first(seq__19025_19363__$1);
var k_19370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041_19369,(0),null);
var rxn_19371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041_19369,(1),null);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_(rxn_19371);


var G__19373 = cljs.core.next(seq__19025_19363__$1);
var G__19374 = null;
var G__19375 = (0);
var G__19376 = (0);
seq__19025_19350 = G__19373;
chunk__19026_19351 = G__19374;
count__19027_19352 = G__19375;
i__19028_19353 = G__19376;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$subs$clear_all_handlers_BANG_(){
mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.subs.kind);

return mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return = (function mranderson048$re_frame$v0v10v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson048.re_frame.v0v10v2.re_frame.interop.add_on_dispose_BANG_(r,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19048 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19049 = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(r)], null)], null));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19049);

try{try{return null;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__18981__auto___19385 = mranderson048.re_frame.v0v10v2.re_frame.interop.now();
var duration__18982__auto___19386 = (end__18981__auto___19385 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__19053_19387 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__19054_19388 = null;
var count__19055_19389 = (0);
var i__19056_19390 = (0);
while(true){
if((i__19056_19390 < count__19055_19389)){
var vec__19070_19391 = chunk__19054_19388.cljs$core$IIndexed$_nth$arity$2(null, i__19056_19390);
var k__18983__auto___19392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19070_19391,(0),null);
var cb__18984__auto___19393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19070_19391,(1),null);
try{var G__19076_19394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19386,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19393.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19393.cljs$core$IFn$_invoke$arity$1(G__19076_19394) : cb__18984__auto___19393.call(null, G__19076_19394));
}catch (e19073){if((e19073 instanceof java.lang.Exception)){
var e__18985__auto___19396 = e19073;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19392,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19396], 0));
} else {
throw e19073;

}
}

var G__19397 = seq__19053_19387;
var G__19398 = chunk__19054_19388;
var G__19399 = count__19055_19389;
var G__19400 = (i__19056_19390 + (1));
seq__19053_19387 = G__19397;
chunk__19054_19388 = G__19398;
count__19055_19389 = G__19399;
i__19056_19390 = G__19400;
continue;
} else {
var temp__5804__auto___19401 = cljs.core.seq(seq__19053_19387);
if(temp__5804__auto___19401){
var seq__19053_19402__$1 = temp__5804__auto___19401;
if(cljs.core.chunked_seq_QMARK_(seq__19053_19402__$1)){
var c__5525__auto___19403 = cljs.core.chunk_first(seq__19053_19402__$1);
var G__19404 = cljs.core.chunk_rest(seq__19053_19402__$1);
var G__19405 = c__5525__auto___19403;
var G__19406 = cljs.core.count(c__5525__auto___19403);
var G__19407 = (0);
seq__19053_19387 = G__19404;
chunk__19054_19388 = G__19405;
count__19055_19389 = G__19406;
i__19056_19390 = G__19407;
continue;
} else {
var vec__19083_19408 = cljs.core.first(seq__19053_19402__$1);
var k__18983__auto___19409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19083_19408,(0),null);
var cb__18984__auto___19410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19083_19408,(1),null);
try{var G__19091_19411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19386,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19410.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19410.cljs$core$IFn$_invoke$arity$1(G__19091_19411) : cb__18984__auto___19410.call(null, G__19091_19411));
}catch (e19086){if((e19086 instanceof java.lang.Exception)){
var e__18985__auto___19415 = e19086;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19409,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19415], 0));
} else {
throw e19086;

}
}

var G__19416 = cljs.core.next(seq__19053_19402__$1);
var G__19417 = null;
var G__19418 = (0);
var G__19419 = (0);
seq__19053_19387 = G__19416;
chunk__19054_19388 = G__19417;
count__19055_19389 = G__19418;
i__19056_19390 = G__19419;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19048);
}} else {
return null;
}
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19420 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19420);

} else {
}

return r;
});
mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup = (function mranderson048$re_frame$v0v10v2$re_frame$subs$cache_lookup(var_args){
var G__19098 = arguments.length;
switch (G__19098) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
}));

(mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
}));

(mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2);

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson048.re-frame.v0v10v2.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe = (function mranderson048$re_frame$v0v10v2$re_frame$subs$subscribe(var_args){
var G__19113 = arguments.length;
switch (G__19113) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19116 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19117 = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19117);

try{try{var temp__5802__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5802__auto__)){
var cached = temp__5802__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19429 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19429);

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19431 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19431);

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19436 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19436);

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query) : handler_fn.call(null, mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query)));
}
}
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__18981__auto___19444 = mranderson048.re_frame.v0v10v2.re_frame.interop.now();
var duration__18982__auto___19445 = (end__18981__auto___19444 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__19118_19449 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__19121_19450 = null;
var count__19122_19451 = (0);
var i__19123_19452 = (0);
while(true){
if((i__19123_19452 < count__19122_19451)){
var vec__19163_19454 = chunk__19121_19450.cljs$core$IIndexed$_nth$arity$2(null, i__19123_19452);
var k__18983__auto___19455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19163_19454,(0),null);
var cb__18984__auto___19456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19163_19454,(1),null);
try{var G__19167_19457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19445,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19456.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19456.cljs$core$IFn$_invoke$arity$1(G__19167_19457) : cb__18984__auto___19456.call(null, G__19167_19457));
}catch (e19166){if((e19166 instanceof java.lang.Exception)){
var e__18985__auto___19463 = e19166;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19455,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19463], 0));
} else {
throw e19166;

}
}

var G__19466 = seq__19118_19449;
var G__19467 = chunk__19121_19450;
var G__19468 = count__19122_19451;
var G__19469 = (i__19123_19452 + (1));
seq__19118_19449 = G__19466;
chunk__19121_19450 = G__19467;
count__19122_19451 = G__19468;
i__19123_19452 = G__19469;
continue;
} else {
var temp__5804__auto___19471 = cljs.core.seq(seq__19118_19449);
if(temp__5804__auto___19471){
var seq__19118_19476__$1 = temp__5804__auto___19471;
if(cljs.core.chunked_seq_QMARK_(seq__19118_19476__$1)){
var c__5525__auto___19479 = cljs.core.chunk_first(seq__19118_19476__$1);
var G__19481 = cljs.core.chunk_rest(seq__19118_19476__$1);
var G__19483 = c__5525__auto___19479;
var G__19484 = cljs.core.count(c__5525__auto___19479);
var G__19485 = (0);
seq__19118_19449 = G__19481;
chunk__19121_19450 = G__19483;
count__19122_19451 = G__19484;
i__19123_19452 = G__19485;
continue;
} else {
var vec__19168_19486 = cljs.core.first(seq__19118_19476__$1);
var k__18983__auto___19487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19168_19486,(0),null);
var cb__18984__auto___19488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19168_19486,(1),null);
try{var G__19172_19490 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19445,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19488.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19488.cljs$core$IFn$_invoke$arity$1(G__19172_19490) : cb__18984__auto___19488.call(null, G__19172_19490));
}catch (e19171){if((e19171 instanceof java.lang.Exception)){
var e__18985__auto___19492 = e19171;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19487,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19492], 0));
} else {
throw e19171;

}
}

var G__19497 = cljs.core.next(seq__19118_19476__$1);
var G__19498 = null;
var G__19499 = (0);
var G__19500 = (0);
seq__19118_19449 = G__19497;
chunk__19121_19450 = G__19498;
count__19122_19451 = G__19499;
i__19123_19452 = G__19500;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19116);
}} else {
var temp__5802__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5802__auto__)){
var cached = temp__5802__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19501 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19501);

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19503 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19503);

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19504 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19504);

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query) : handler_fn.call(null, mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query)));
}
}
}
}));

(mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19175 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19176 = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19176);

try{try{var temp__5802__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5802__auto__)){
var cached = temp__5802__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19507 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19507);

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19508 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19508);

} else {
}

if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5804__auto___19509 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5804__auto___19509)){
var not_reactive_19510 = temp__5804__auto___19509;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_19510], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19511 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19511);

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
}));
var sub = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction((function (){
var G__19207 = mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
var G__19208 = query;
var G__19209 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__19207,G__19208,G__19209) : handler_fn.call(null, G__19207,G__19208,G__19209));
}));
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,dynv,mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction((function (){
return cljs.core.deref(cljs.core.deref(sub));
})));
}
}
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__18981__auto___19520 = mranderson048.re_frame.v0v10v2.re_frame.interop.now();
var duration__18982__auto___19521 = (end__18981__auto___19520 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__19177_19522 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__19178_19523 = null;
var count__19179_19526 = (0);
var i__19180_19529 = (0);
while(true){
if((i__19180_19529 < count__19179_19526)){
var vec__19191_19530 = chunk__19178_19523.cljs$core$IIndexed$_nth$arity$2(null, i__19180_19529);
var k__18983__auto___19531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19191_19530,(0),null);
var cb__18984__auto___19532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19191_19530,(1),null);
try{var G__19195_19537 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19521,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19532.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19532.cljs$core$IFn$_invoke$arity$1(G__19195_19537) : cb__18984__auto___19532.call(null, G__19195_19537));
}catch (e19194){if((e19194 instanceof java.lang.Exception)){
var e__18985__auto___19538 = e19194;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19531,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19538], 0));
} else {
throw e19194;

}
}

var G__19539 = seq__19177_19522;
var G__19540 = chunk__19178_19523;
var G__19541 = count__19179_19526;
var G__19542 = (i__19180_19529 + (1));
seq__19177_19522 = G__19539;
chunk__19178_19523 = G__19540;
count__19179_19526 = G__19541;
i__19180_19529 = G__19542;
continue;
} else {
var temp__5804__auto___19543 = cljs.core.seq(seq__19177_19522);
if(temp__5804__auto___19543){
var seq__19177_19544__$1 = temp__5804__auto___19543;
if(cljs.core.chunked_seq_QMARK_(seq__19177_19544__$1)){
var c__5525__auto___19545 = cljs.core.chunk_first(seq__19177_19544__$1);
var G__19546 = cljs.core.chunk_rest(seq__19177_19544__$1);
var G__19547 = c__5525__auto___19545;
var G__19548 = cljs.core.count(c__5525__auto___19545);
var G__19549 = (0);
seq__19177_19522 = G__19546;
chunk__19178_19523 = G__19547;
count__19179_19526 = G__19548;
i__19180_19529 = G__19549;
continue;
} else {
var vec__19199_19550 = cljs.core.first(seq__19177_19544__$1);
var k__18983__auto___19551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19199_19550,(0),null);
var cb__18984__auto___19552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19199_19550,(1),null);
try{var G__19204_19553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19521,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19552.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19552.cljs$core$IFn$_invoke$arity$1(G__19204_19553) : cb__18984__auto___19552.call(null, G__19204_19553));
}catch (e19202){if((e19202 instanceof java.lang.Exception)){
var e__18985__auto___19554 = e19202;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19551,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19554], 0));
} else {
throw e19202;

}
}

var G__19555 = cljs.core.next(seq__19177_19544__$1);
var G__19556 = null;
var G__19557 = (0);
var G__19558 = (0);
seq__19177_19522 = G__19555;
chunk__19178_19523 = G__19556;
count__19179_19526 = G__19557;
i__19180_19529 = G__19558;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19175);
}} else {
var temp__5802__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5802__auto__)){
var cached = temp__5802__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19559 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19559);

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19560 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19560);

} else {
}

if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5804__auto___19565 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5804__auto___19565)){
var not_reactive_19566 = temp__5804__auto___19565;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_19566], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19567 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19567);

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
}));
var sub = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction((function (){
var G__19225 = mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
var G__19226 = query;
var G__19227 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__19225,G__19226,G__19227) : handler_fn.call(null, G__19225,G__19226,G__19227));
}));
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,dynv,mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction((function (){
return cljs.core.deref(cljs.core.deref(sub));
})));
}
}
}
}));

(mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.map_vals = (function mranderson048$re_frame$v0v10v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__19231){
var vec__19232 = p__19231;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19232,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19232,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null, v))], null);
})),m);
});
mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals = (function mranderson048$re_frame$v0v10v2$re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?mranderson048.re_frame.v0v10v2.re_frame.subs.map_vals(cljs.core.deref,signals):((mranderson048.re_frame.v0v10v2.re_frame.interop.deref_QMARK_(signals))?cljs.core.deref(signals):mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19568 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19568);

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub = (function mranderson048$re_frame$v0v10v2$re_frame$subs$reg_sub(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19569 = arguments.length;
var i__5727__auto___19570 = (0);
while(true){
if((i__5727__auto___19570 < len__5726__auto___19569)){
args__5732__auto__.push((arguments[i__5727__auto___19570]));

var G__19571 = (i__5727__auto___19570 + (1));
i__5727__auto___19570 = G__19571;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__19261 = cljs.core.count(input_args);
switch (G__19261) {
case (0):
return (function() {
var G__19573 = null;
var G__19573__1 = (function (_){
return mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
});
var G__19573__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
});
G__19573 = function(_,___$1){
switch(arguments.length){
case 1:
return G__19573__1.call(this,_);
case 2:
return G__19573__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19573.cljs$core$IFn$_invoke$arity$1 = G__19573__1;
G__19573.cljs$core$IFn$_invoke$arity$2 = G__19573__2;
return G__19573;
})()

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__19266 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19266,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19266,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()

}
})();
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id,(function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null, query_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction((function (){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19269 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19270 = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19270);

try{try{var subscription = (function (){var G__19305 = mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__19306 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__19305,G__19306) : computation_fn.call(null, G__19305,G__19306));
})();
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19602 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19602);

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__18981__auto___19603 = mranderson048.re_frame.v0v10v2.re_frame.interop.now();
var duration__18982__auto___19604 = (end__18981__auto___19603 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__19275_19609 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__19276_19610 = null;
var count__19277_19611 = (0);
var i__19278_19612 = (0);
while(true){
if((i__19278_19612 < count__19277_19611)){
var vec__19290_19613 = chunk__19276_19610.cljs$core$IIndexed$_nth$arity$2(null, i__19278_19612);
var k__18983__auto___19614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290_19613,(0),null);
var cb__18984__auto___19615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290_19613,(1),null);
try{var G__19294_19620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19604,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19615.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19615.cljs$core$IFn$_invoke$arity$1(G__19294_19620) : cb__18984__auto___19615.call(null, G__19294_19620));
}catch (e19293){if((e19293 instanceof java.lang.Exception)){
var e__18985__auto___19625 = e19293;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19614,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19625], 0));
} else {
throw e19293;

}
}

var G__19626 = seq__19275_19609;
var G__19627 = chunk__19276_19610;
var G__19628 = count__19277_19611;
var G__19629 = (i__19278_19612 + (1));
seq__19275_19609 = G__19626;
chunk__19276_19610 = G__19627;
count__19277_19611 = G__19628;
i__19278_19612 = G__19629;
continue;
} else {
var temp__5804__auto___19630 = cljs.core.seq(seq__19275_19609);
if(temp__5804__auto___19630){
var seq__19275_19635__$1 = temp__5804__auto___19630;
if(cljs.core.chunked_seq_QMARK_(seq__19275_19635__$1)){
var c__5525__auto___19636 = cljs.core.chunk_first(seq__19275_19635__$1);
var G__19637 = cljs.core.chunk_rest(seq__19275_19635__$1);
var G__19638 = c__5525__auto___19636;
var G__19639 = cljs.core.count(c__5525__auto___19636);
var G__19640 = (0);
seq__19275_19609 = G__19637;
chunk__19276_19610 = G__19638;
count__19277_19611 = G__19639;
i__19278_19612 = G__19640;
continue;
} else {
var vec__19300_19645 = cljs.core.first(seq__19275_19635__$1);
var k__18983__auto___19646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19300_19645,(0),null);
var cb__18984__auto___19647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19300_19645,(1),null);
try{var G__19304_19648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19604,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19647.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19647.cljs$core$IFn$_invoke$arity$1(G__19304_19648) : cb__18984__auto___19647.call(null, G__19304_19648));
}catch (e19303){if((e19303 instanceof java.lang.Exception)){
var e__18985__auto___19653 = e19303;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19646,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19653], 0));
} else {
throw e19303;

}
}

var G__19654 = cljs.core.next(seq__19275_19635__$1);
var G__19655 = null;
var G__19656 = (0);
var G__19657 = (0);
seq__19275_19609 = G__19654;
chunk__19276_19610 = G__19655;
count__19277_19611 = G__19656;
i__19278_19612 = G__19657;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19269);
}} else {
var subscription = (function (){var G__19307 = mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__19308 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__19307,G__19308) : computation_fn.call(null, G__19307,G__19308));
})();
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19658 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19658);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(reaction_id,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(reaction));

return reaction;
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null, query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction((function (){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19309 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19310 = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19310);

try{try{var subscription = (function (){var G__19335 = mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__19336 = query_vec;
var G__19337 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__19335,G__19336,G__19337) : computation_fn.call(null, G__19335,G__19336,G__19337));
})();
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19659 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19659);

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__18981__auto___19660 = mranderson048.re_frame.v0v10v2.re_frame.interop.now();
var duration__18982__auto___19661 = (end__18981__auto___19660 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__19311_19662 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__19312_19663 = null;
var count__19313_19664 = (0);
var i__19314_19665 = (0);
while(true){
if((i__19314_19665 < count__19313_19664)){
var vec__19325_19666 = chunk__19312_19663.cljs$core$IIndexed$_nth$arity$2(null, i__19314_19665);
var k__18983__auto___19667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19325_19666,(0),null);
var cb__18984__auto___19668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19325_19666,(1),null);
try{var G__19329_19669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19661,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19668.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19668.cljs$core$IFn$_invoke$arity$1(G__19329_19669) : cb__18984__auto___19668.call(null, G__19329_19669));
}catch (e19328){if((e19328 instanceof java.lang.Exception)){
var e__18985__auto___19670 = e19328;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19667,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19670], 0));
} else {
throw e19328;

}
}

var G__19671 = seq__19311_19662;
var G__19672 = chunk__19312_19663;
var G__19673 = count__19313_19664;
var G__19674 = (i__19314_19665 + (1));
seq__19311_19662 = G__19671;
chunk__19312_19663 = G__19672;
count__19313_19664 = G__19673;
i__19314_19665 = G__19674;
continue;
} else {
var temp__5804__auto___19675 = cljs.core.seq(seq__19311_19662);
if(temp__5804__auto___19675){
var seq__19311_19676__$1 = temp__5804__auto___19675;
if(cljs.core.chunked_seq_QMARK_(seq__19311_19676__$1)){
var c__5525__auto___19677 = cljs.core.chunk_first(seq__19311_19676__$1);
var G__19678 = cljs.core.chunk_rest(seq__19311_19676__$1);
var G__19679 = c__5525__auto___19677;
var G__19680 = cljs.core.count(c__5525__auto___19677);
var G__19681 = (0);
seq__19311_19662 = G__19678;
chunk__19312_19663 = G__19679;
count__19313_19664 = G__19680;
i__19314_19665 = G__19681;
continue;
} else {
var vec__19330_19682 = cljs.core.first(seq__19311_19676__$1);
var k__18983__auto___19683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19330_19682,(0),null);
var cb__18984__auto___19684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19330_19682,(1),null);
try{var G__19334_19685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19661,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19684.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19684.cljs$core$IFn$_invoke$arity$1(G__19334_19685) : cb__18984__auto___19684.call(null, G__19334_19685));
}catch (e19333){if((e19333 instanceof java.lang.Exception)){
var e__18985__auto___19686 = e19333;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19683,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19686], 0));
} else {
throw e19333;

}
}

var G__19687 = cljs.core.next(seq__19311_19676__$1);
var G__19688 = null;
var G__19689 = (0);
var G__19690 = (0);
seq__19311_19662 = G__19687;
chunk__19312_19663 = G__19688;
count__19313_19664 = G__19689;
i__19314_19665 = G__19690;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19309);
}} else {
var subscription = (function (){var G__19340 = mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__19341 = query_vec;
var G__19342 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__19340,G__19341,G__19342) : computation_fn.call(null, G__19340,G__19341,G__19342));
})();
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19691 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19691);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(reaction_id,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id(reaction));

return reaction;
});
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2;
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3;
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn;
})()
);
}));

(mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq19253){
var G__19254 = cljs.core.first(seq19253);
var seq19253__$1 = cljs.core.next(seq19253);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19254,seq19253__$1);
}));


//# sourceMappingURL=mranderson048.re_frame.v0v10v2.re_frame.subs.js.map
