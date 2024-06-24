goog.provide('mranderson048.re_frame.v0v10v2.re_frame.trace');
mranderson048.re_frame.v0v10v2.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = null;
mranderson048.re_frame.v0v10v2.re_frame.trace.reset_tracing_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v2.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
mranderson048.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_ = goog.define("mranderson048.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_ = (function mranderson048$re_frame$v0v10v2$re_frame$trace$is_trace_enabled_QMARK_(){
return mranderson048.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_;
});
mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
mranderson048.re_frame.v0v10v2.re_frame.trace.register_trace_cb = (function mranderson048$re_frame$v0v10v2$re_frame$trace$register_trace_cb(key,f){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
mranderson048.re_frame.v0v10v2.re_frame.trace.remove_trace_cb = (function mranderson048$re_frame$v0v10v2$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
mranderson048.re_frame.v0v10v2.re_frame.trace.next_id = (function mranderson048$re_frame$v0v10v2$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.trace.id,cljs.core.inc);
});
mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace = (function mranderson048$re_frame$v0v10v2$re_frame$trace$start_trace(p__19007){
var map__19008 = p__19007;
var map__19008__$1 = cljs.core.__destructure_map(map__19008);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19008__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19008__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19008__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19008__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),mranderson048.re_frame.v0v10v2.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], null);
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v2.re_frame.trace.js.map
