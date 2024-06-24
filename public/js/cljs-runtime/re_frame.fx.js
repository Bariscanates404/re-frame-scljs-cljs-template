goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23918 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23919 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23919);

try{try{var seq__23928 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23929 = null;
var count__23930 = (0);
var i__23931 = (0);
while(true){
if((i__23931 < count__23930)){
var vec__23954 = chunk__23929.cljs$core$IIndexed$_nth$arity$2(null, i__23931);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23954,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23954,(1),null);
var temp__5802__auto___24239 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24239)){
var effect_fn_24240 = temp__5802__auto___24239;
(effect_fn_24240.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24240.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24240.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24241 = seq__23928;
var G__24242 = chunk__23929;
var G__24243 = count__23930;
var G__24244 = (i__23931 + (1));
seq__23928 = G__24241;
chunk__23929 = G__24242;
count__23930 = G__24243;
i__23931 = G__24244;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23928);
if(temp__5804__auto__){
var seq__23928__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23928__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23928__$1);
var G__24245 = cljs.core.chunk_rest(seq__23928__$1);
var G__24246 = c__5525__auto__;
var G__24247 = cljs.core.count(c__5525__auto__);
var G__24248 = (0);
seq__23928 = G__24245;
chunk__23929 = G__24246;
count__23930 = G__24247;
i__23931 = G__24248;
continue;
} else {
var vec__23967 = cljs.core.first(seq__23928__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23967,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23967,(1),null);
var temp__5802__auto___24249 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24249)){
var effect_fn_24250 = temp__5802__auto___24249;
(effect_fn_24250.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24250.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24250.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24251 = cljs.core.next(seq__23928__$1);
var G__24252 = null;
var G__24253 = (0);
var G__24254 = (0);
seq__23928 = G__24251;
chunk__23929 = G__24252;
count__23930 = G__24253;
i__23931 = G__24254;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23563__auto___24255 = re_frame.interop.now();
var duration__23564__auto___24256 = (end__23563__auto___24255 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23564__auto___24256,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23563__auto___24255);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23918);
}} else {
var seq__23979 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23980 = null;
var count__23981 = (0);
var i__23982 = (0);
while(true){
if((i__23982 < count__23981)){
var vec__24038 = chunk__23980.cljs$core$IIndexed$_nth$arity$2(null, i__23982);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24038,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24038,(1),null);
var temp__5802__auto___24257 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24257)){
var effect_fn_24258 = temp__5802__auto___24257;
(effect_fn_24258.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24258.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24258.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24259 = seq__23979;
var G__24260 = chunk__23980;
var G__24261 = count__23981;
var G__24262 = (i__23982 + (1));
seq__23979 = G__24259;
chunk__23980 = G__24260;
count__23981 = G__24261;
i__23982 = G__24262;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23979);
if(temp__5804__auto__){
var seq__23979__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23979__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23979__$1);
var G__24263 = cljs.core.chunk_rest(seq__23979__$1);
var G__24264 = c__5525__auto__;
var G__24265 = cljs.core.count(c__5525__auto__);
var G__24266 = (0);
seq__23979 = G__24263;
chunk__23980 = G__24264;
count__23981 = G__24265;
i__23982 = G__24266;
continue;
} else {
var vec__24060 = cljs.core.first(seq__23979__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24060,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24060,(1),null);
var temp__5802__auto___24267 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24267)){
var effect_fn_24268 = temp__5802__auto___24267;
(effect_fn_24268.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24268.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24268.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24269 = cljs.core.next(seq__23979__$1);
var G__24270 = null;
var G__24271 = (0);
var G__24272 = (0);
seq__23979 = G__24269;
chunk__23980 = G__24270;
count__23981 = G__24271;
i__23982 = G__24272;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24071 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24072 = null;
var count__24073 = (0);
var i__24074 = (0);
while(true){
if((i__24074 < count__24073)){
var map__24098 = chunk__24072.cljs$core$IIndexed$_nth$arity$2(null, i__24074);
var map__24098__$1 = cljs.core.__destructure_map(map__24098);
var effect = map__24098__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24098__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24098__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__24071,chunk__24072,count__24073,i__24074,map__24098,map__24098__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__24071,chunk__24072,count__24073,i__24074,map__24098,map__24098__$1,effect,ms,dispatch))
,ms);
}


var G__24273 = seq__24071;
var G__24274 = chunk__24072;
var G__24275 = count__24073;
var G__24276 = (i__24074 + (1));
seq__24071 = G__24273;
chunk__24072 = G__24274;
count__24073 = G__24275;
i__24074 = G__24276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24071);
if(temp__5804__auto__){
var seq__24071__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24071__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24071__$1);
var G__24277 = cljs.core.chunk_rest(seq__24071__$1);
var G__24278 = c__5525__auto__;
var G__24279 = cljs.core.count(c__5525__auto__);
var G__24280 = (0);
seq__24071 = G__24277;
chunk__24072 = G__24278;
count__24073 = G__24279;
i__24074 = G__24280;
continue;
} else {
var map__24111 = cljs.core.first(seq__24071__$1);
var map__24111__$1 = cljs.core.__destructure_map(map__24111);
var effect = map__24111__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24111__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24111__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__24071,chunk__24072,count__24073,i__24074,map__24111,map__24111__$1,effect,ms,dispatch,seq__24071__$1,temp__5804__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__24071,chunk__24072,count__24073,i__24074,map__24111,map__24111__$1,effect,ms,dispatch,seq__24071__$1,temp__5804__auto__))
,ms);
}


var G__24281 = cljs.core.next(seq__24071__$1);
var G__24282 = null;
var G__24283 = (0);
var G__24284 = (0);
seq__24071 = G__24281;
chunk__24072 = G__24282;
count__24073 = G__24283;
i__24074 = G__24284;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__24164 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24165 = null;
var count__24166 = (0);
var i__24167 = (0);
while(true){
if((i__24167 < count__24166)){
var event = chunk__24165.cljs$core$IIndexed$_nth$arity$2(null, i__24167);
re_frame.router.dispatch(event);


var G__24285 = seq__24164;
var G__24286 = chunk__24165;
var G__24287 = count__24166;
var G__24288 = (i__24167 + (1));
seq__24164 = G__24285;
chunk__24165 = G__24286;
count__24166 = G__24287;
i__24167 = G__24288;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24164);
if(temp__5804__auto__){
var seq__24164__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24164__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24164__$1);
var G__24289 = cljs.core.chunk_rest(seq__24164__$1);
var G__24290 = c__5525__auto__;
var G__24291 = cljs.core.count(c__5525__auto__);
var G__24292 = (0);
seq__24164 = G__24289;
chunk__24165 = G__24290;
count__24166 = G__24291;
i__24167 = G__24292;
continue;
} else {
var event = cljs.core.first(seq__24164__$1);
re_frame.router.dispatch(event);


var G__24293 = cljs.core.next(seq__24164__$1);
var G__24294 = null;
var G__24295 = (0);
var G__24296 = (0);
seq__24164 = G__24293;
chunk__24165 = G__24294;
count__24166 = G__24295;
i__24167 = G__24296;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24203 = cljs.core.seq(value);
var chunk__24204 = null;
var count__24205 = (0);
var i__24206 = (0);
while(true){
if((i__24206 < count__24205)){
var event = chunk__24204.cljs$core$IIndexed$_nth$arity$2(null, i__24206);
clear_event(event);


var G__24297 = seq__24203;
var G__24298 = chunk__24204;
var G__24299 = count__24205;
var G__24300 = (i__24206 + (1));
seq__24203 = G__24297;
chunk__24204 = G__24298;
count__24205 = G__24299;
i__24206 = G__24300;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24203);
if(temp__5804__auto__){
var seq__24203__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24203__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24203__$1);
var G__24301 = cljs.core.chunk_rest(seq__24203__$1);
var G__24302 = c__5525__auto__;
var G__24303 = cljs.core.count(c__5525__auto__);
var G__24304 = (0);
seq__24203 = G__24301;
chunk__24204 = G__24302;
count__24205 = G__24303;
i__24206 = G__24304;
continue;
} else {
var event = cljs.core.first(seq__24203__$1);
clear_event(event);


var G__24305 = cljs.core.next(seq__24203__$1);
var G__24306 = null;
var G__24307 = (0);
var G__24308 = (0);
seq__24203 = G__24305;
chunk__24204 = G__24306;
count__24205 = G__24307;
i__24206 = G__24308;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
