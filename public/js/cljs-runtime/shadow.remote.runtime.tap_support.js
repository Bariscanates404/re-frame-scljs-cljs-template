goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__28298,p__28299){
var map__28302 = p__28298;
var map__28302__$1 = cljs.core.__destructure_map(map__28302);
var svc = map__28302__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28302__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28302__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28302__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28303 = p__28299;
var map__28303__$1 = cljs.core.__destructure_map(map__28303);
var msg = map__28303__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28303__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28303__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28303__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28303__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__28334,p__28335){
var map__28337 = p__28334;
var map__28337__$1 = cljs.core.__destructure_map(map__28337);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28337__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__28338 = p__28335;
var map__28338__$1 = cljs.core.__destructure_map(map__28338);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28338__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__28344,p__28345){
var map__28346 = p__28344;
var map__28346__$1 = cljs.core.__destructure_map(map__28346);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28346__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28346__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28347 = p__28345;
var map__28347__$1 = cljs.core.__destructure_map(map__28347);
var msg = map__28347__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28347__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__28349,tid){
var map__28350 = p__28349;
var map__28350__$1 = cljs.core.__destructure_map(map__28350);
var svc = map__28350__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28350__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__28355 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__28356 = null;
var count__28357 = (0);
var i__28358 = (0);
while(true){
if((i__28358 < count__28357)){
var vec__28374 = chunk__28356.cljs$core$IIndexed$_nth$arity$2(null, i__28358);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28374,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28374,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28385 = seq__28355;
var G__28386 = chunk__28356;
var G__28387 = count__28357;
var G__28388 = (i__28358 + (1));
seq__28355 = G__28385;
chunk__28356 = G__28386;
count__28357 = G__28387;
i__28358 = G__28388;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28355);
if(temp__5804__auto__){
var seq__28355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28355__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28355__$1);
var G__28389 = cljs.core.chunk_rest(seq__28355__$1);
var G__28390 = c__5525__auto__;
var G__28391 = cljs.core.count(c__5525__auto__);
var G__28392 = (0);
seq__28355 = G__28389;
chunk__28356 = G__28390;
count__28357 = G__28391;
i__28358 = G__28392;
continue;
} else {
var vec__28377 = cljs.core.first(seq__28355__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28393 = cljs.core.next(seq__28355__$1);
var G__28394 = null;
var G__28395 = (0);
var G__28396 = (0);
seq__28355 = G__28393;
chunk__28356 = G__28394;
count__28357 = G__28395;
i__28358 = G__28396;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__28351_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__28351_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__28352_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__28352_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__28353_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__28353_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__28354_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__28354_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__28380){
var map__28384 = p__28380;
var map__28384__$1 = cljs.core.__destructure_map(map__28384);
var svc = map__28384__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28384__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28384__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
