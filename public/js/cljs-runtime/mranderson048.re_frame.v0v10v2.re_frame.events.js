goog.provide('mranderson048.re_frame.v0v10v2.re_frame.events');
mranderson048.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_((mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.events.kind) : mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null, mranderson048.re_frame.v0v10v2.re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson048$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__19063_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__19063_SHARP_));
});
if((!(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_))){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__5804__auto___19114 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5804__auto___19114)){
var not_i_19115 = temp__5804__auto___19114;
if(cljs.core.fn_QMARK_(not_i_19115)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_19115], 0));
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_19115], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson048.re_frame.v0v10v2.re_frame.events.register = (function mranderson048$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v2.re_frame.events.kind,id,mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils(id,interceptors));
});
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.handle = (function mranderson048$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector(event_v);
var temp__5802__auto__ = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5802__auto__)){
var interceptors = temp__5802__auto__;
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling \"",mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR__orig_val__19074 = mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
var _STAR_handling_STAR__temp_val__19075 = event_v;
(mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__19075);

try{if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19077 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19078 = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson048.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19078);

try{try{return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute(event_v,interceptors);
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__18981__auto___19119 = mranderson048.re_frame.v0v10v2.re_frame.interop.now();
var duration__18982__auto___19120 = (end__18981__auto___19119 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__19079_19124 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__19080_19125 = null;
var count__19081_19126 = (0);
var i__19082_19127 = (0);
while(true){
if((i__19082_19127 < count__19081_19126)){
var vec__19100_19128 = chunk__19080_19125.cljs$core$IIndexed$_nth$arity$2(null, i__19082_19127);
var k__18983__auto___19129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19100_19128,(0),null);
var cb__18984__auto___19130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19100_19128,(1),null);
try{var G__19104_19134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19120,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19130.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19130.cljs$core$IFn$_invoke$arity$1(G__19104_19134) : cb__18984__auto___19130.call(null, G__19104_19134));
}catch (e19103){if((e19103 instanceof java.lang.Exception)){
var e__18985__auto___19136 = e19103;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19129,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19136], 0));
} else {
throw e19103;

}
}

var G__19137 = seq__19079_19124;
var G__19138 = chunk__19080_19125;
var G__19139 = count__19081_19126;
var G__19140 = (i__19082_19127 + (1));
seq__19079_19124 = G__19137;
chunk__19080_19125 = G__19138;
count__19081_19126 = G__19139;
i__19082_19127 = G__19140;
continue;
} else {
var temp__5804__auto___19141 = cljs.core.seq(seq__19079_19124);
if(temp__5804__auto___19141){
var seq__19079_19142__$1 = temp__5804__auto___19141;
if(cljs.core.chunked_seq_QMARK_(seq__19079_19142__$1)){
var c__5525__auto___19144 = cljs.core.chunk_first(seq__19079_19142__$1);
var G__19145 = cljs.core.chunk_rest(seq__19079_19142__$1);
var G__19146 = c__5525__auto___19144;
var G__19147 = cljs.core.count(c__5525__auto___19144);
var G__19148 = (0);
seq__19079_19124 = G__19145;
chunk__19080_19125 = G__19146;
count__19081_19126 = G__19147;
i__19082_19127 = G__19148;
continue;
} else {
var vec__19105_19149 = cljs.core.first(seq__19079_19142__$1);
var k__18983__auto___19150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19105_19149,(0),null);
var cb__18984__auto___19151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19105_19149,(1),null);
try{var G__19109_19152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19120,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19151.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19151.cljs$core$IFn$_invoke$arity$1(G__19109_19152) : cb__18984__auto___19151.call(null, G__19109_19152));
}catch (e19108){if((e19108 instanceof java.lang.Exception)){
var e__18985__auto___19153 = e19108;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19150,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19153], 0));
} else {
throw e19108;

}
}

var G__19154 = cljs.core.next(seq__19079_19142__$1);
var G__19155 = null;
var G__19156 = (0);
var G__19157 = (0);
seq__19079_19124 = G__19154;
chunk__19080_19125 = G__19155;
count__19081_19126 = G__19156;
i__19082_19127 = G__19157;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19077);
}} else {
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute(event_v,interceptors);
}
}finally {(mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__19074);
}}
} else {
return null;
}
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v2.re_frame.events.js.map
