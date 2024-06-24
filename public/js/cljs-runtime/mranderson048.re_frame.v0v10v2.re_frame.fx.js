goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.fx.kind) : mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null, mranderson048.re_frame.v0v10v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__19378 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__19379 = null;
var count__19380 = (0);
var i__19381 = (0);
while(true){
if((i__19381 < count__19380)){
var vec__19421 = chunk__19379.cljs$core$IIndexed$_nth$arity$2(null, i__19381);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19421,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19421,(1),null);
var temp__5802__auto___19574 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___19574)){
var effect_fn_19575 = temp__5802__auto___19574;
(effect_fn_19575.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19575.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19575.call(null, effect_value));
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}


var G__19576 = seq__19378;
var G__19577 = chunk__19379;
var G__19578 = count__19380;
var G__19579 = (i__19381 + (1));
seq__19378 = G__19576;
chunk__19379 = G__19577;
count__19380 = G__19578;
i__19381 = G__19579;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19378);
if(temp__5804__auto__){
var seq__19378__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19378__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19378__$1);
var G__19580 = cljs.core.chunk_rest(seq__19378__$1);
var G__19581 = c__5525__auto__;
var G__19582 = cljs.core.count(c__5525__auto__);
var G__19583 = (0);
seq__19378 = G__19580;
chunk__19379 = G__19581;
count__19380 = G__19582;
i__19381 = G__19583;
continue;
} else {
var vec__19426 = cljs.core.first(seq__19378__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19426,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19426,(1),null);
var temp__5802__auto___19584 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___19584)){
var effect_fn_19585 = temp__5802__auto___19584;
(effect_fn_19585.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19585.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19585.call(null, effect_value));
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}


var G__19586 = cljs.core.next(seq__19378__$1);
var G__19587 = null;
var G__19588 = (0);
var G__19589 = (0);
seq__19378 = G__19586;
chunk__19379 = G__19587;
count__19380 = G__19588;
i__19381 = G__19589;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__19432 = cljs.core.seq(value);
var chunk__19433 = null;
var count__19434 = (0);
var i__19435 = (0);
while(true){
if((i__19435 < count__19434)){
var map__19502 = chunk__19433.cljs$core$IIndexed$_nth$arity$2(null, i__19435);
var map__19502__$1 = cljs.core.__destructure_map(map__19502);
var effect = map__19502__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19502__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19502__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_(((function (seq__19432,chunk__19433,count__19434,i__19435,map__19502,map__19502__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch(dispatch);
});})(seq__19432,chunk__19433,count__19434,i__19435,map__19502,map__19502__$1,effect,ms,dispatch))
,ms);
}


var G__19590 = seq__19432;
var G__19591 = chunk__19433;
var G__19592 = count__19434;
var G__19593 = (i__19435 + (1));
seq__19432 = G__19590;
chunk__19433 = G__19591;
count__19434 = G__19592;
i__19435 = G__19593;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19432);
if(temp__5804__auto__){
var seq__19432__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19432__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19432__$1);
var G__19594 = cljs.core.chunk_rest(seq__19432__$1);
var G__19595 = c__5525__auto__;
var G__19596 = cljs.core.count(c__5525__auto__);
var G__19597 = (0);
seq__19432 = G__19594;
chunk__19433 = G__19595;
count__19434 = G__19596;
i__19435 = G__19597;
continue;
} else {
var map__19506 = cljs.core.first(seq__19432__$1);
var map__19506__$1 = cljs.core.__destructure_map(map__19506);
var effect = map__19506__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19506__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19506__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_(((function (seq__19432,chunk__19433,count__19434,i__19435,map__19506,map__19506__$1,effect,ms,dispatch,seq__19432__$1,temp__5804__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch(dispatch);
});})(seq__19432,chunk__19433,count__19434,i__19435,map__19506,map__19506__$1,effect,ms,dispatch,seq__19432__$1,temp__5804__auto__))
,ms);
}


var G__19598 = cljs.core.next(seq__19432__$1);
var G__19599 = null;
var G__19600 = (0);
var G__19601 = (0);
seq__19432 = G__19598;
chunk__19433 = G__19599;
count__19434 = G__19600;
i__19435 = G__19601;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch(value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__19512 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19513 = null;
var count__19514 = (0);
var i__19515 = (0);
while(true){
if((i__19515 < count__19514)){
var event = chunk__19513.cljs$core$IIndexed$_nth$arity$2(null, i__19515);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch(event);


var G__19605 = seq__19512;
var G__19606 = chunk__19513;
var G__19607 = count__19514;
var G__19608 = (i__19515 + (1));
seq__19512 = G__19605;
chunk__19513 = G__19606;
count__19514 = G__19607;
i__19515 = G__19608;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19512);
if(temp__5804__auto__){
var seq__19512__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19512__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19512__$1);
var G__19616 = cljs.core.chunk_rest(seq__19512__$1);
var G__19617 = c__5525__auto__;
var G__19618 = cljs.core.count(c__5525__auto__);
var G__19619 = (0);
seq__19512 = G__19616;
chunk__19513 = G__19617;
count__19514 = G__19618;
i__19515 = G__19619;
continue;
} else {
var event = cljs.core.first(seq__19512__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch(event);


var G__19621 = cljs.core.next(seq__19512__$1);
var G__19622 = null;
var G__19623 = (0);
var G__19624 = (0);
seq__19512 = G__19621;
chunk__19513 = G__19622;
count__19514 = G__19623;
i__19515 = G__19624;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__19561 = cljs.core.seq(value);
var chunk__19562 = null;
var count__19563 = (0);
var i__19564 = (0);
while(true){
if((i__19564 < count__19563)){
var event = chunk__19562.cljs$core$IIndexed$_nth$arity$2(null, i__19564);
clear_event(event);


var G__19631 = seq__19561;
var G__19632 = chunk__19562;
var G__19633 = count__19563;
var G__19634 = (i__19564 + (1));
seq__19561 = G__19631;
chunk__19562 = G__19632;
count__19563 = G__19633;
i__19564 = G__19634;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19561);
if(temp__5804__auto__){
var seq__19561__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19561__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19561__$1);
var G__19641 = cljs.core.chunk_rest(seq__19561__$1);
var G__19642 = c__5525__auto__;
var G__19643 = cljs.core.count(c__5525__auto__);
var G__19644 = (0);
seq__19561 = G__19641;
chunk__19562 = G__19642;
count__19563 = G__19643;
i__19564 = G__19644;
continue;
} else {
var event = cljs.core.first(seq__19561__$1);
clear_event(event);


var G__19649 = cljs.core.next(seq__19561__$1);
var G__19650 = null;
var G__19651 = (0);
var G__19652 = (0);
seq__19561 = G__19649;
chunk__19562 = G__19650;
count__19563 = G__19651;
i__19564 = G__19652;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=mranderson048.re_frame.v0v10v2.re_frame.fx.js.map
