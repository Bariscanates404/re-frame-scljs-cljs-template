goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__27208){
var map__27209 = p__27208;
var map__27209__$1 = cljs.core.__destructure_map(map__27209);
var runtime = map__27209__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27209__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_27413 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_27413)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__27277 = runtime;
var G__27278 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_27413);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__27277,G__27278) : shadow.remote.runtime.shared.process.call(null, G__27277,G__27278));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__27282,res){
var map__27284 = p__27282;
var map__27284__$1 = cljs.core.__destructure_map(map__27284);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27284__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27284__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__27285 = res;
var G__27285__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27285,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__27285);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27285__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__27285__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__27301 = arguments.length;
switch (G__27301) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__27305,msg,handlers,timeout_after_ms){
var map__27306 = p__27305;
var map__27306__$1 = cljs.core.__destructure_map(map__27306);
var runtime = map__27306__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27306__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27419 = arguments.length;
var i__5727__auto___27420 = (0);
while(true){
if((i__5727__auto___27420 < len__5726__auto___27419)){
args__5732__auto__.push((arguments[i__5727__auto___27420]));

var G__27421 = (i__5727__auto___27420 + (1));
i__5727__auto___27420 = G__27421;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__27318,ev,args){
var map__27319 = p__27318;
var map__27319__$1 = cljs.core.__destructure_map(map__27319);
var runtime = map__27319__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27319__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__27320 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27323 = null;
var count__27324 = (0);
var i__27325 = (0);
while(true){
if((i__27325 < count__27324)){
var ext = chunk__27323.cljs$core$IIndexed$_nth$arity$2(null, i__27325);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27423 = seq__27320;
var G__27424 = chunk__27323;
var G__27425 = count__27324;
var G__27426 = (i__27325 + (1));
seq__27320 = G__27423;
chunk__27323 = G__27424;
count__27324 = G__27425;
i__27325 = G__27426;
continue;
} else {
var G__27427 = seq__27320;
var G__27428 = chunk__27323;
var G__27429 = count__27324;
var G__27430 = (i__27325 + (1));
seq__27320 = G__27427;
chunk__27323 = G__27428;
count__27324 = G__27429;
i__27325 = G__27430;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27320);
if(temp__5804__auto__){
var seq__27320__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27320__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27320__$1);
var G__27432 = cljs.core.chunk_rest(seq__27320__$1);
var G__27433 = c__5525__auto__;
var G__27434 = cljs.core.count(c__5525__auto__);
var G__27435 = (0);
seq__27320 = G__27432;
chunk__27323 = G__27433;
count__27324 = G__27434;
i__27325 = G__27435;
continue;
} else {
var ext = cljs.core.first(seq__27320__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27441 = cljs.core.next(seq__27320__$1);
var G__27442 = null;
var G__27443 = (0);
var G__27444 = (0);
seq__27320 = G__27441;
chunk__27323 = G__27442;
count__27324 = G__27443;
i__27325 = G__27444;
continue;
} else {
var G__27449 = cljs.core.next(seq__27320__$1);
var G__27450 = null;
var G__27451 = (0);
var G__27452 = (0);
seq__27320 = G__27449;
chunk__27323 = G__27450;
count__27324 = G__27451;
i__27325 = G__27452;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq27315){
var G__27316 = cljs.core.first(seq27315);
var seq27315__$1 = cljs.core.next(seq27315);
var G__27317 = cljs.core.first(seq27315__$1);
var seq27315__$2 = cljs.core.next(seq27315__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27316,G__27317,seq27315__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__27332,p__27333){
var map__27334 = p__27332;
var map__27334__$1 = cljs.core.__destructure_map(map__27334);
var runtime = map__27334__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27334__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27335 = p__27333;
var map__27335__$1 = cljs.core.__destructure_map(map__27335);
var msg = map__27335__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27335__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__27336 = cljs.core.deref(state_ref);
var map__27336__$1 = cljs.core.__destructure_map(map__27336);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27336__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27336__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__27340,msg){
var map__27342 = p__27340;
var map__27342__$1 = cljs.core.__destructure_map(map__27342);
var runtime = map__27342__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27342__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__27344,key,p__27345){
var map__27346 = p__27344;
var map__27346__$1 = cljs.core.__destructure_map(map__27346);
var state = map__27346__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27346__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__27347 = p__27345;
var map__27347__$1 = cljs.core.__destructure_map(map__27347);
var spec = map__27347__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27347__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27347__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__27350,key,spec){
var map__27351 = p__27350;
var map__27351__$1 = cljs.core.__destructure_map(map__27351);
var runtime = map__27351__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27351__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___27471 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___27471 == null)){
} else {
var on_welcome_27472 = temp__5808__auto___27471;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_27472.cljs$core$IFn$_invoke$arity$0 ? on_welcome_27472.cljs$core$IFn$_invoke$arity$0() : on_welcome_27472.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__27352_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__27352_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__27353_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__27353_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__27354_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__27354_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__27355_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__27355_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__27356_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__27356_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__27358,key){
var map__27359 = p__27358;
var map__27359__$1 = cljs.core.__destructure_map(map__27359);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27359__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__27362,msg){
var map__27363 = p__27362;
var map__27363__$1 = cljs.core.__destructure_map(map__27363);
var runtime = map__27363__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27363__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__27375,p__27376){
var map__27383 = p__27375;
var map__27383__$1 = cljs.core.__destructure_map(map__27383);
var runtime = map__27383__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27383__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27384 = p__27376;
var map__27384__$1 = cljs.core.__destructure_map(map__27384);
var msg = map__27384__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27384__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27384__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__27390 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27392 = null;
var count__27393 = (0);
var i__27394 = (0);
while(true){
if((i__27394 < count__27393)){
var map__27401 = chunk__27392.cljs$core$IIndexed$_nth$arity$2(null, i__27394);
var map__27401__$1 = cljs.core.__destructure_map(map__27401);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27401__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__27488 = seq__27390;
var G__27489 = chunk__27392;
var G__27490 = count__27393;
var G__27491 = (i__27394 + (1));
seq__27390 = G__27488;
chunk__27392 = G__27489;
count__27393 = G__27490;
i__27394 = G__27491;
continue;
} else {
var G__27492 = seq__27390;
var G__27493 = chunk__27392;
var G__27494 = count__27393;
var G__27495 = (i__27394 + (1));
seq__27390 = G__27492;
chunk__27392 = G__27493;
count__27393 = G__27494;
i__27394 = G__27495;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27390);
if(temp__5804__auto__){
var seq__27390__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27390__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27390__$1);
var G__27496 = cljs.core.chunk_rest(seq__27390__$1);
var G__27497 = c__5525__auto__;
var G__27498 = cljs.core.count(c__5525__auto__);
var G__27499 = (0);
seq__27390 = G__27496;
chunk__27392 = G__27497;
count__27393 = G__27498;
i__27394 = G__27499;
continue;
} else {
var map__27407 = cljs.core.first(seq__27390__$1);
var map__27407__$1 = cljs.core.__destructure_map(map__27407);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27407__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__27501 = cljs.core.next(seq__27390__$1);
var G__27502 = null;
var G__27503 = (0);
var G__27504 = (0);
seq__27390 = G__27501;
chunk__27392 = G__27502;
count__27393 = G__27503;
i__27394 = G__27504;
continue;
} else {
var G__27506 = cljs.core.next(seq__27390__$1);
var G__27507 = null;
var G__27508 = (0);
var G__27509 = (0);
seq__27390 = G__27506;
chunk__27392 = G__27507;
count__27393 = G__27508;
i__27394 = G__27509;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
