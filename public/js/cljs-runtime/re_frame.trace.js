goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23583){
var map__23584 = p__23583;
var map__23584__$1 = cljs.core.__destructure_map(map__23584);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23584__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23584__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23584__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23584__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__23585_23612 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23586_23613 = null;
var count__23587_23614 = (0);
var i__23588_23615 = (0);
while(true){
if((i__23588_23615 < count__23587_23614)){
var vec__23599_23616 = chunk__23586_23613.cljs$core$IIndexed$_nth$arity$2(null, i__23588_23615);
var k_23617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23599_23616,(0),null);
var cb_23618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23599_23616,(1),null);
try{var G__23603_23619 = cljs.core.deref(re_frame.trace.traces);
(cb_23618.cljs$core$IFn$_invoke$arity$1 ? cb_23618.cljs$core$IFn$_invoke$arity$1(G__23603_23619) : cb_23618.call(null, G__23603_23619));
}catch (e23602){var e_23620 = e23602;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23617,"while storing",cljs.core.deref(re_frame.trace.traces),e_23620], 0));
}

var G__23621 = seq__23585_23612;
var G__23622 = chunk__23586_23613;
var G__23623 = count__23587_23614;
var G__23624 = (i__23588_23615 + (1));
seq__23585_23612 = G__23621;
chunk__23586_23613 = G__23622;
count__23587_23614 = G__23623;
i__23588_23615 = G__23624;
continue;
} else {
var temp__5804__auto___23625 = cljs.core.seq(seq__23585_23612);
if(temp__5804__auto___23625){
var seq__23585_23626__$1 = temp__5804__auto___23625;
if(cljs.core.chunked_seq_QMARK_(seq__23585_23626__$1)){
var c__5525__auto___23627 = cljs.core.chunk_first(seq__23585_23626__$1);
var G__23628 = cljs.core.chunk_rest(seq__23585_23626__$1);
var G__23629 = c__5525__auto___23627;
var G__23630 = cljs.core.count(c__5525__auto___23627);
var G__23631 = (0);
seq__23585_23612 = G__23628;
chunk__23586_23613 = G__23629;
count__23587_23614 = G__23630;
i__23588_23615 = G__23631;
continue;
} else {
var vec__23604_23632 = cljs.core.first(seq__23585_23626__$1);
var k_23633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23604_23632,(0),null);
var cb_23634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23604_23632,(1),null);
try{var G__23608_23635 = cljs.core.deref(re_frame.trace.traces);
(cb_23634.cljs$core$IFn$_invoke$arity$1 ? cb_23634.cljs$core$IFn$_invoke$arity$1(G__23608_23635) : cb_23634.call(null, G__23608_23635));
}catch (e23607){var e_23636 = e23607;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23633,"while storing",cljs.core.deref(re_frame.trace.traces),e_23636], 0));
}

var G__23637 = cljs.core.next(seq__23585_23626__$1);
var G__23638 = null;
var G__23639 = (0);
var G__23640 = (0);
seq__23585_23612 = G__23637;
chunk__23586_23613 = G__23638;
count__23587_23614 = G__23639;
i__23588_23615 = G__23640;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
