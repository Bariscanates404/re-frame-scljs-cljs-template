goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31273 = arguments.length;
var i__5727__auto___31274 = (0);
while(true){
if((i__5727__auto___31274 < len__5726__auto___31273)){
args__5732__auto__.push((arguments[i__5727__auto___31274]));

var G__31275 = (i__5727__auto___31274 + (1));
i__5727__auto___31274 = G__31275;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq30991){
var G__30992 = cljs.core.first(seq30991);
var seq30991__$1 = cljs.core.next(seq30991);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30992,seq30991__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__30995 = cljs.core.seq(sources);
var chunk__30996 = null;
var count__30997 = (0);
var i__30998 = (0);
while(true){
if((i__30998 < count__30997)){
var map__31005 = chunk__30996.cljs$core$IIndexed$_nth$arity$2(null, i__30998);
var map__31005__$1 = cljs.core.__destructure_map(map__31005);
var src = map__31005__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31005__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31005__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31005__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31005__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31006){var e_31276 = e31006;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_31276);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_31276.message)].join('')));
}

var G__31277 = seq__30995;
var G__31278 = chunk__30996;
var G__31279 = count__30997;
var G__31280 = (i__30998 + (1));
seq__30995 = G__31277;
chunk__30996 = G__31278;
count__30997 = G__31279;
i__30998 = G__31280;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30995);
if(temp__5804__auto__){
var seq__30995__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30995__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30995__$1);
var G__31281 = cljs.core.chunk_rest(seq__30995__$1);
var G__31282 = c__5525__auto__;
var G__31283 = cljs.core.count(c__5525__auto__);
var G__31284 = (0);
seq__30995 = G__31281;
chunk__30996 = G__31282;
count__30997 = G__31283;
i__30998 = G__31284;
continue;
} else {
var map__31007 = cljs.core.first(seq__30995__$1);
var map__31007__$1 = cljs.core.__destructure_map(map__31007);
var src = map__31007__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31007__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31007__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31007__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31007__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31008){var e_31285 = e31008;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_31285);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_31285.message)].join('')));
}

var G__31286 = cljs.core.next(seq__30995__$1);
var G__31287 = null;
var G__31288 = (0);
var G__31289 = (0);
seq__30995 = G__31286;
chunk__30996 = G__31287;
count__30997 = G__31288;
i__30998 = G__31289;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__31009 = cljs.core.seq(js_requires);
var chunk__31010 = null;
var count__31011 = (0);
var i__31012 = (0);
while(true){
if((i__31012 < count__31011)){
var js_ns = chunk__31010.cljs$core$IIndexed$_nth$arity$2(null, i__31012);
var require_str_31290 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_31290);


var G__31291 = seq__31009;
var G__31292 = chunk__31010;
var G__31293 = count__31011;
var G__31294 = (i__31012 + (1));
seq__31009 = G__31291;
chunk__31010 = G__31292;
count__31011 = G__31293;
i__31012 = G__31294;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31009);
if(temp__5804__auto__){
var seq__31009__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31009__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31009__$1);
var G__31295 = cljs.core.chunk_rest(seq__31009__$1);
var G__31296 = c__5525__auto__;
var G__31297 = cljs.core.count(c__5525__auto__);
var G__31298 = (0);
seq__31009 = G__31295;
chunk__31010 = G__31296;
count__31011 = G__31297;
i__31012 = G__31298;
continue;
} else {
var js_ns = cljs.core.first(seq__31009__$1);
var require_str_31299 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_31299);


var G__31300 = cljs.core.next(seq__31009__$1);
var G__31301 = null;
var G__31302 = (0);
var G__31303 = (0);
seq__31009 = G__31300;
chunk__31010 = G__31301;
count__31011 = G__31302;
i__31012 = G__31303;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__31014){
var map__31015 = p__31014;
var map__31015__$1 = cljs.core.__destructure_map(map__31015);
var msg = map__31015__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31015__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31015__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31016(s__31017){
return (new cljs.core.LazySeq(null,(function (){
var s__31017__$1 = s__31017;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31017__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__31022 = cljs.core.first(xs__6360__auto__);
var map__31022__$1 = cljs.core.__destructure_map(map__31022);
var src = map__31022__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31022__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31022__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__31017__$1,map__31022,map__31022__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31015,map__31015__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31016_$_iter__31018(s__31019){
return (new cljs.core.LazySeq(null,((function (s__31017__$1,map__31022,map__31022__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31015,map__31015__$1,msg,info,reload_info){
return (function (){
var s__31019__$1 = s__31019;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31019__$1);
if(temp__5804__auto____$1){
var s__31019__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31019__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31019__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31021 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31020 = (0);
while(true){
if((i__31020 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__31020);
cljs.core.chunk_append(b__31021,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__31304 = (i__31020 + (1));
i__31020 = G__31304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31021),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31016_$_iter__31018(cljs.core.chunk_rest(s__31019__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31021),null);
}
} else {
var warning = cljs.core.first(s__31019__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31016_$_iter__31018(cljs.core.rest(s__31019__$2)));
}
} else {
return null;
}
break;
}
});})(s__31017__$1,map__31022,map__31022__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31015,map__31015__$1,msg,info,reload_info))
,null,null));
});})(s__31017__$1,map__31022,map__31022__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31015,map__31015__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31016(cljs.core.rest(s__31017__$1)));
} else {
var G__31305 = cljs.core.rest(s__31017__$1);
s__31017__$1 = G__31305;
continue;
}
} else {
var G__31306 = cljs.core.rest(s__31017__$1);
s__31017__$1 = G__31306;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__31023_31307 = cljs.core.seq(warnings);
var chunk__31024_31308 = null;
var count__31025_31309 = (0);
var i__31026_31310 = (0);
while(true){
if((i__31026_31310 < count__31025_31309)){
var map__31029_31311 = chunk__31024_31308.cljs$core$IIndexed$_nth$arity$2(null, i__31026_31310);
var map__31029_31312__$1 = cljs.core.__destructure_map(map__31029_31311);
var w_31313 = map__31029_31312__$1;
var msg_31314__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31029_31312__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_31315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31029_31312__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31029_31312__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_31317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31029_31312__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_31317)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_31315),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_31316),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_31314__$1)].join(''));


var G__31318 = seq__31023_31307;
var G__31319 = chunk__31024_31308;
var G__31320 = count__31025_31309;
var G__31321 = (i__31026_31310 + (1));
seq__31023_31307 = G__31318;
chunk__31024_31308 = G__31319;
count__31025_31309 = G__31320;
i__31026_31310 = G__31321;
continue;
} else {
var temp__5804__auto___31322 = cljs.core.seq(seq__31023_31307);
if(temp__5804__auto___31322){
var seq__31023_31323__$1 = temp__5804__auto___31322;
if(cljs.core.chunked_seq_QMARK_(seq__31023_31323__$1)){
var c__5525__auto___31324 = cljs.core.chunk_first(seq__31023_31323__$1);
var G__31325 = cljs.core.chunk_rest(seq__31023_31323__$1);
var G__31326 = c__5525__auto___31324;
var G__31327 = cljs.core.count(c__5525__auto___31324);
var G__31328 = (0);
seq__31023_31307 = G__31325;
chunk__31024_31308 = G__31326;
count__31025_31309 = G__31327;
i__31026_31310 = G__31328;
continue;
} else {
var map__31030_31329 = cljs.core.first(seq__31023_31323__$1);
var map__31030_31330__$1 = cljs.core.__destructure_map(map__31030_31329);
var w_31331 = map__31030_31330__$1;
var msg_31332__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31030_31330__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_31333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31030_31330__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31030_31330__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_31335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31030_31330__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_31335)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_31333),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_31334),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_31332__$1)].join(''));


var G__31336 = cljs.core.next(seq__31023_31323__$1);
var G__31337 = null;
var G__31338 = (0);
var G__31339 = (0);
seq__31023_31307 = G__31336;
chunk__31024_31308 = G__31337;
count__31025_31309 = G__31338;
i__31026_31310 = G__31339;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__31013_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__31013_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__31031){
var map__31032 = p__31031;
var map__31032__$1 = cljs.core.__destructure_map(map__31032);
var msg = map__31032__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31032__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31032__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__31033 = cljs.core.seq(updates);
var chunk__31035 = null;
var count__31036 = (0);
var i__31037 = (0);
while(true){
if((i__31037 < count__31036)){
var path = chunk__31035.cljs$core$IIndexed$_nth$arity$2(null, i__31037);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__31147_31340 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__31151_31341 = null;
var count__31152_31342 = (0);
var i__31153_31343 = (0);
while(true){
if((i__31153_31343 < count__31152_31342)){
var node_31344 = chunk__31151_31341.cljs$core$IIndexed$_nth$arity$2(null, i__31153_31343);
if(cljs.core.not(node_31344.shadow$old)){
var path_match_31345 = shadow.cljs.devtools.client.browser.match_paths(node_31344.getAttribute("href"),path);
if(cljs.core.truth_(path_match_31345)){
var new_link_31346 = (function (){var G__31179 = node_31344.cloneNode(true);
G__31179.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_31345),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__31179;
})();
(node_31344.shadow$old = true);

(new_link_31346.onload = ((function (seq__31147_31340,chunk__31151_31341,count__31152_31342,i__31153_31343,seq__31033,chunk__31035,count__31036,i__31037,new_link_31346,path_match_31345,node_31344,path,map__31032,map__31032__$1,msg,updates,reload_info){
return (function (e){
var seq__31180_31347 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__31182_31348 = null;
var count__31183_31349 = (0);
var i__31184_31350 = (0);
while(true){
if((i__31184_31350 < count__31183_31349)){
var map__31188_31351 = chunk__31182_31348.cljs$core$IIndexed$_nth$arity$2(null, i__31184_31350);
var map__31188_31352__$1 = cljs.core.__destructure_map(map__31188_31351);
var task_31353 = map__31188_31352__$1;
var fn_str_31354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31188_31352__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31188_31352__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31356 = goog.getObjectByName(fn_str_31354,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31355)].join(''));

(fn_obj_31356.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31356.cljs$core$IFn$_invoke$arity$2(path,new_link_31346) : fn_obj_31356.call(null, path,new_link_31346));


var G__31357 = seq__31180_31347;
var G__31358 = chunk__31182_31348;
var G__31359 = count__31183_31349;
var G__31360 = (i__31184_31350 + (1));
seq__31180_31347 = G__31357;
chunk__31182_31348 = G__31358;
count__31183_31349 = G__31359;
i__31184_31350 = G__31360;
continue;
} else {
var temp__5804__auto___31361 = cljs.core.seq(seq__31180_31347);
if(temp__5804__auto___31361){
var seq__31180_31362__$1 = temp__5804__auto___31361;
if(cljs.core.chunked_seq_QMARK_(seq__31180_31362__$1)){
var c__5525__auto___31363 = cljs.core.chunk_first(seq__31180_31362__$1);
var G__31364 = cljs.core.chunk_rest(seq__31180_31362__$1);
var G__31365 = c__5525__auto___31363;
var G__31366 = cljs.core.count(c__5525__auto___31363);
var G__31367 = (0);
seq__31180_31347 = G__31364;
chunk__31182_31348 = G__31365;
count__31183_31349 = G__31366;
i__31184_31350 = G__31367;
continue;
} else {
var map__31189_31368 = cljs.core.first(seq__31180_31362__$1);
var map__31189_31369__$1 = cljs.core.__destructure_map(map__31189_31368);
var task_31370 = map__31189_31369__$1;
var fn_str_31371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31189_31369__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31189_31369__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31373 = goog.getObjectByName(fn_str_31371,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31372)].join(''));

(fn_obj_31373.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31373.cljs$core$IFn$_invoke$arity$2(path,new_link_31346) : fn_obj_31373.call(null, path,new_link_31346));


var G__31374 = cljs.core.next(seq__31180_31362__$1);
var G__31375 = null;
var G__31376 = (0);
var G__31377 = (0);
seq__31180_31347 = G__31374;
chunk__31182_31348 = G__31375;
count__31183_31349 = G__31376;
i__31184_31350 = G__31377;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_31344);
});})(seq__31147_31340,chunk__31151_31341,count__31152_31342,i__31153_31343,seq__31033,chunk__31035,count__31036,i__31037,new_link_31346,path_match_31345,node_31344,path,map__31032,map__31032__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_31345], 0));

goog.dom.insertSiblingAfter(new_link_31346,node_31344);


var G__31378 = seq__31147_31340;
var G__31379 = chunk__31151_31341;
var G__31380 = count__31152_31342;
var G__31381 = (i__31153_31343 + (1));
seq__31147_31340 = G__31378;
chunk__31151_31341 = G__31379;
count__31152_31342 = G__31380;
i__31153_31343 = G__31381;
continue;
} else {
var G__31382 = seq__31147_31340;
var G__31383 = chunk__31151_31341;
var G__31384 = count__31152_31342;
var G__31385 = (i__31153_31343 + (1));
seq__31147_31340 = G__31382;
chunk__31151_31341 = G__31383;
count__31152_31342 = G__31384;
i__31153_31343 = G__31385;
continue;
}
} else {
var G__31386 = seq__31147_31340;
var G__31387 = chunk__31151_31341;
var G__31388 = count__31152_31342;
var G__31389 = (i__31153_31343 + (1));
seq__31147_31340 = G__31386;
chunk__31151_31341 = G__31387;
count__31152_31342 = G__31388;
i__31153_31343 = G__31389;
continue;
}
} else {
var temp__5804__auto___31390 = cljs.core.seq(seq__31147_31340);
if(temp__5804__auto___31390){
var seq__31147_31391__$1 = temp__5804__auto___31390;
if(cljs.core.chunked_seq_QMARK_(seq__31147_31391__$1)){
var c__5525__auto___31392 = cljs.core.chunk_first(seq__31147_31391__$1);
var G__31393 = cljs.core.chunk_rest(seq__31147_31391__$1);
var G__31394 = c__5525__auto___31392;
var G__31395 = cljs.core.count(c__5525__auto___31392);
var G__31396 = (0);
seq__31147_31340 = G__31393;
chunk__31151_31341 = G__31394;
count__31152_31342 = G__31395;
i__31153_31343 = G__31396;
continue;
} else {
var node_31397 = cljs.core.first(seq__31147_31391__$1);
if(cljs.core.not(node_31397.shadow$old)){
var path_match_31398 = shadow.cljs.devtools.client.browser.match_paths(node_31397.getAttribute("href"),path);
if(cljs.core.truth_(path_match_31398)){
var new_link_31399 = (function (){var G__31190 = node_31397.cloneNode(true);
G__31190.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_31398),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__31190;
})();
(node_31397.shadow$old = true);

(new_link_31399.onload = ((function (seq__31147_31340,chunk__31151_31341,count__31152_31342,i__31153_31343,seq__31033,chunk__31035,count__31036,i__31037,new_link_31399,path_match_31398,node_31397,seq__31147_31391__$1,temp__5804__auto___31390,path,map__31032,map__31032__$1,msg,updates,reload_info){
return (function (e){
var seq__31191_31400 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__31193_31401 = null;
var count__31194_31402 = (0);
var i__31195_31403 = (0);
while(true){
if((i__31195_31403 < count__31194_31402)){
var map__31199_31404 = chunk__31193_31401.cljs$core$IIndexed$_nth$arity$2(null, i__31195_31403);
var map__31199_31405__$1 = cljs.core.__destructure_map(map__31199_31404);
var task_31406 = map__31199_31405__$1;
var fn_str_31407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199_31405__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199_31405__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31409 = goog.getObjectByName(fn_str_31407,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31408)].join(''));

(fn_obj_31409.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31409.cljs$core$IFn$_invoke$arity$2(path,new_link_31399) : fn_obj_31409.call(null, path,new_link_31399));


var G__31410 = seq__31191_31400;
var G__31411 = chunk__31193_31401;
var G__31412 = count__31194_31402;
var G__31413 = (i__31195_31403 + (1));
seq__31191_31400 = G__31410;
chunk__31193_31401 = G__31411;
count__31194_31402 = G__31412;
i__31195_31403 = G__31413;
continue;
} else {
var temp__5804__auto___31414__$1 = cljs.core.seq(seq__31191_31400);
if(temp__5804__auto___31414__$1){
var seq__31191_31415__$1 = temp__5804__auto___31414__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31191_31415__$1)){
var c__5525__auto___31416 = cljs.core.chunk_first(seq__31191_31415__$1);
var G__31417 = cljs.core.chunk_rest(seq__31191_31415__$1);
var G__31418 = c__5525__auto___31416;
var G__31419 = cljs.core.count(c__5525__auto___31416);
var G__31420 = (0);
seq__31191_31400 = G__31417;
chunk__31193_31401 = G__31418;
count__31194_31402 = G__31419;
i__31195_31403 = G__31420;
continue;
} else {
var map__31200_31421 = cljs.core.first(seq__31191_31415__$1);
var map__31200_31422__$1 = cljs.core.__destructure_map(map__31200_31421);
var task_31423 = map__31200_31422__$1;
var fn_str_31424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31200_31422__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31200_31422__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31426 = goog.getObjectByName(fn_str_31424,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31425)].join(''));

(fn_obj_31426.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31426.cljs$core$IFn$_invoke$arity$2(path,new_link_31399) : fn_obj_31426.call(null, path,new_link_31399));


var G__31427 = cljs.core.next(seq__31191_31415__$1);
var G__31428 = null;
var G__31429 = (0);
var G__31430 = (0);
seq__31191_31400 = G__31427;
chunk__31193_31401 = G__31428;
count__31194_31402 = G__31429;
i__31195_31403 = G__31430;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_31397);
});})(seq__31147_31340,chunk__31151_31341,count__31152_31342,i__31153_31343,seq__31033,chunk__31035,count__31036,i__31037,new_link_31399,path_match_31398,node_31397,seq__31147_31391__$1,temp__5804__auto___31390,path,map__31032,map__31032__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_31398], 0));

goog.dom.insertSiblingAfter(new_link_31399,node_31397);


var G__31431 = cljs.core.next(seq__31147_31391__$1);
var G__31432 = null;
var G__31433 = (0);
var G__31434 = (0);
seq__31147_31340 = G__31431;
chunk__31151_31341 = G__31432;
count__31152_31342 = G__31433;
i__31153_31343 = G__31434;
continue;
} else {
var G__31435 = cljs.core.next(seq__31147_31391__$1);
var G__31436 = null;
var G__31437 = (0);
var G__31438 = (0);
seq__31147_31340 = G__31435;
chunk__31151_31341 = G__31436;
count__31152_31342 = G__31437;
i__31153_31343 = G__31438;
continue;
}
} else {
var G__31439 = cljs.core.next(seq__31147_31391__$1);
var G__31440 = null;
var G__31441 = (0);
var G__31442 = (0);
seq__31147_31340 = G__31439;
chunk__31151_31341 = G__31440;
count__31152_31342 = G__31441;
i__31153_31343 = G__31442;
continue;
}
}
} else {
}
}
break;
}


var G__31443 = seq__31033;
var G__31444 = chunk__31035;
var G__31445 = count__31036;
var G__31446 = (i__31037 + (1));
seq__31033 = G__31443;
chunk__31035 = G__31444;
count__31036 = G__31445;
i__31037 = G__31446;
continue;
} else {
var G__31447 = seq__31033;
var G__31448 = chunk__31035;
var G__31449 = count__31036;
var G__31450 = (i__31037 + (1));
seq__31033 = G__31447;
chunk__31035 = G__31448;
count__31036 = G__31449;
i__31037 = G__31450;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31033);
if(temp__5804__auto__){
var seq__31033__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31033__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31033__$1);
var G__31451 = cljs.core.chunk_rest(seq__31033__$1);
var G__31452 = c__5525__auto__;
var G__31453 = cljs.core.count(c__5525__auto__);
var G__31454 = (0);
seq__31033 = G__31451;
chunk__31035 = G__31452;
count__31036 = G__31453;
i__31037 = G__31454;
continue;
} else {
var path = cljs.core.first(seq__31033__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__31201_31455 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__31205_31456 = null;
var count__31206_31457 = (0);
var i__31207_31458 = (0);
while(true){
if((i__31207_31458 < count__31206_31457)){
var node_31459 = chunk__31205_31456.cljs$core$IIndexed$_nth$arity$2(null, i__31207_31458);
if(cljs.core.not(node_31459.shadow$old)){
var path_match_31460 = shadow.cljs.devtools.client.browser.match_paths(node_31459.getAttribute("href"),path);
if(cljs.core.truth_(path_match_31460)){
var new_link_31461 = (function (){var G__31233 = node_31459.cloneNode(true);
G__31233.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_31460),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__31233;
})();
(node_31459.shadow$old = true);

(new_link_31461.onload = ((function (seq__31201_31455,chunk__31205_31456,count__31206_31457,i__31207_31458,seq__31033,chunk__31035,count__31036,i__31037,new_link_31461,path_match_31460,node_31459,path,seq__31033__$1,temp__5804__auto__,map__31032,map__31032__$1,msg,updates,reload_info){
return (function (e){
var seq__31234_31462 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__31236_31463 = null;
var count__31237_31464 = (0);
var i__31238_31465 = (0);
while(true){
if((i__31238_31465 < count__31237_31464)){
var map__31242_31466 = chunk__31236_31463.cljs$core$IIndexed$_nth$arity$2(null, i__31238_31465);
var map__31242_31467__$1 = cljs.core.__destructure_map(map__31242_31466);
var task_31468 = map__31242_31467__$1;
var fn_str_31469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31242_31467__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31242_31467__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31471 = goog.getObjectByName(fn_str_31469,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31470)].join(''));

(fn_obj_31471.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31471.cljs$core$IFn$_invoke$arity$2(path,new_link_31461) : fn_obj_31471.call(null, path,new_link_31461));


var G__31472 = seq__31234_31462;
var G__31473 = chunk__31236_31463;
var G__31474 = count__31237_31464;
var G__31475 = (i__31238_31465 + (1));
seq__31234_31462 = G__31472;
chunk__31236_31463 = G__31473;
count__31237_31464 = G__31474;
i__31238_31465 = G__31475;
continue;
} else {
var temp__5804__auto___31476__$1 = cljs.core.seq(seq__31234_31462);
if(temp__5804__auto___31476__$1){
var seq__31234_31477__$1 = temp__5804__auto___31476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31234_31477__$1)){
var c__5525__auto___31478 = cljs.core.chunk_first(seq__31234_31477__$1);
var G__31479 = cljs.core.chunk_rest(seq__31234_31477__$1);
var G__31480 = c__5525__auto___31478;
var G__31481 = cljs.core.count(c__5525__auto___31478);
var G__31482 = (0);
seq__31234_31462 = G__31479;
chunk__31236_31463 = G__31480;
count__31237_31464 = G__31481;
i__31238_31465 = G__31482;
continue;
} else {
var map__31243_31483 = cljs.core.first(seq__31234_31477__$1);
var map__31243_31484__$1 = cljs.core.__destructure_map(map__31243_31483);
var task_31485 = map__31243_31484__$1;
var fn_str_31486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243_31484__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243_31484__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31488 = goog.getObjectByName(fn_str_31486,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31487)].join(''));

(fn_obj_31488.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31488.cljs$core$IFn$_invoke$arity$2(path,new_link_31461) : fn_obj_31488.call(null, path,new_link_31461));


var G__31489 = cljs.core.next(seq__31234_31477__$1);
var G__31490 = null;
var G__31491 = (0);
var G__31492 = (0);
seq__31234_31462 = G__31489;
chunk__31236_31463 = G__31490;
count__31237_31464 = G__31491;
i__31238_31465 = G__31492;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_31459);
});})(seq__31201_31455,chunk__31205_31456,count__31206_31457,i__31207_31458,seq__31033,chunk__31035,count__31036,i__31037,new_link_31461,path_match_31460,node_31459,path,seq__31033__$1,temp__5804__auto__,map__31032,map__31032__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_31460], 0));

goog.dom.insertSiblingAfter(new_link_31461,node_31459);


var G__31493 = seq__31201_31455;
var G__31494 = chunk__31205_31456;
var G__31495 = count__31206_31457;
var G__31496 = (i__31207_31458 + (1));
seq__31201_31455 = G__31493;
chunk__31205_31456 = G__31494;
count__31206_31457 = G__31495;
i__31207_31458 = G__31496;
continue;
} else {
var G__31497 = seq__31201_31455;
var G__31498 = chunk__31205_31456;
var G__31499 = count__31206_31457;
var G__31500 = (i__31207_31458 + (1));
seq__31201_31455 = G__31497;
chunk__31205_31456 = G__31498;
count__31206_31457 = G__31499;
i__31207_31458 = G__31500;
continue;
}
} else {
var G__31501 = seq__31201_31455;
var G__31502 = chunk__31205_31456;
var G__31503 = count__31206_31457;
var G__31504 = (i__31207_31458 + (1));
seq__31201_31455 = G__31501;
chunk__31205_31456 = G__31502;
count__31206_31457 = G__31503;
i__31207_31458 = G__31504;
continue;
}
} else {
var temp__5804__auto___31505__$1 = cljs.core.seq(seq__31201_31455);
if(temp__5804__auto___31505__$1){
var seq__31201_31506__$1 = temp__5804__auto___31505__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31201_31506__$1)){
var c__5525__auto___31507 = cljs.core.chunk_first(seq__31201_31506__$1);
var G__31508 = cljs.core.chunk_rest(seq__31201_31506__$1);
var G__31509 = c__5525__auto___31507;
var G__31510 = cljs.core.count(c__5525__auto___31507);
var G__31511 = (0);
seq__31201_31455 = G__31508;
chunk__31205_31456 = G__31509;
count__31206_31457 = G__31510;
i__31207_31458 = G__31511;
continue;
} else {
var node_31512 = cljs.core.first(seq__31201_31506__$1);
if(cljs.core.not(node_31512.shadow$old)){
var path_match_31513 = shadow.cljs.devtools.client.browser.match_paths(node_31512.getAttribute("href"),path);
if(cljs.core.truth_(path_match_31513)){
var new_link_31514 = (function (){var G__31244 = node_31512.cloneNode(true);
G__31244.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_31513),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__31244;
})();
(node_31512.shadow$old = true);

(new_link_31514.onload = ((function (seq__31201_31455,chunk__31205_31456,count__31206_31457,i__31207_31458,seq__31033,chunk__31035,count__31036,i__31037,new_link_31514,path_match_31513,node_31512,seq__31201_31506__$1,temp__5804__auto___31505__$1,path,seq__31033__$1,temp__5804__auto__,map__31032,map__31032__$1,msg,updates,reload_info){
return (function (e){
var seq__31245_31515 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__31247_31516 = null;
var count__31248_31517 = (0);
var i__31249_31518 = (0);
while(true){
if((i__31249_31518 < count__31248_31517)){
var map__31253_31519 = chunk__31247_31516.cljs$core$IIndexed$_nth$arity$2(null, i__31249_31518);
var map__31253_31520__$1 = cljs.core.__destructure_map(map__31253_31519);
var task_31521 = map__31253_31520__$1;
var fn_str_31522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31253_31520__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31253_31520__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31524 = goog.getObjectByName(fn_str_31522,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31523)].join(''));

(fn_obj_31524.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31524.cljs$core$IFn$_invoke$arity$2(path,new_link_31514) : fn_obj_31524.call(null, path,new_link_31514));


var G__31525 = seq__31245_31515;
var G__31526 = chunk__31247_31516;
var G__31527 = count__31248_31517;
var G__31528 = (i__31249_31518 + (1));
seq__31245_31515 = G__31525;
chunk__31247_31516 = G__31526;
count__31248_31517 = G__31527;
i__31249_31518 = G__31528;
continue;
} else {
var temp__5804__auto___31529__$2 = cljs.core.seq(seq__31245_31515);
if(temp__5804__auto___31529__$2){
var seq__31245_31530__$1 = temp__5804__auto___31529__$2;
if(cljs.core.chunked_seq_QMARK_(seq__31245_31530__$1)){
var c__5525__auto___31531 = cljs.core.chunk_first(seq__31245_31530__$1);
var G__31532 = cljs.core.chunk_rest(seq__31245_31530__$1);
var G__31533 = c__5525__auto___31531;
var G__31534 = cljs.core.count(c__5525__auto___31531);
var G__31535 = (0);
seq__31245_31515 = G__31532;
chunk__31247_31516 = G__31533;
count__31248_31517 = G__31534;
i__31249_31518 = G__31535;
continue;
} else {
var map__31254_31536 = cljs.core.first(seq__31245_31530__$1);
var map__31254_31537__$1 = cljs.core.__destructure_map(map__31254_31536);
var task_31538 = map__31254_31537__$1;
var fn_str_31539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31254_31537__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31254_31537__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31541 = goog.getObjectByName(fn_str_31539,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31540)].join(''));

(fn_obj_31541.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31541.cljs$core$IFn$_invoke$arity$2(path,new_link_31514) : fn_obj_31541.call(null, path,new_link_31514));


var G__31542 = cljs.core.next(seq__31245_31530__$1);
var G__31543 = null;
var G__31544 = (0);
var G__31545 = (0);
seq__31245_31515 = G__31542;
chunk__31247_31516 = G__31543;
count__31248_31517 = G__31544;
i__31249_31518 = G__31545;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_31512);
});})(seq__31201_31455,chunk__31205_31456,count__31206_31457,i__31207_31458,seq__31033,chunk__31035,count__31036,i__31037,new_link_31514,path_match_31513,node_31512,seq__31201_31506__$1,temp__5804__auto___31505__$1,path,seq__31033__$1,temp__5804__auto__,map__31032,map__31032__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_31513], 0));

goog.dom.insertSiblingAfter(new_link_31514,node_31512);


var G__31546 = cljs.core.next(seq__31201_31506__$1);
var G__31547 = null;
var G__31548 = (0);
var G__31549 = (0);
seq__31201_31455 = G__31546;
chunk__31205_31456 = G__31547;
count__31206_31457 = G__31548;
i__31207_31458 = G__31549;
continue;
} else {
var G__31550 = cljs.core.next(seq__31201_31506__$1);
var G__31551 = null;
var G__31552 = (0);
var G__31553 = (0);
seq__31201_31455 = G__31550;
chunk__31205_31456 = G__31551;
count__31206_31457 = G__31552;
i__31207_31458 = G__31553;
continue;
}
} else {
var G__31554 = cljs.core.next(seq__31201_31506__$1);
var G__31555 = null;
var G__31556 = (0);
var G__31557 = (0);
seq__31201_31455 = G__31554;
chunk__31205_31456 = G__31555;
count__31206_31457 = G__31556;
i__31207_31458 = G__31557;
continue;
}
}
} else {
}
}
break;
}


var G__31558 = cljs.core.next(seq__31033__$1);
var G__31559 = null;
var G__31560 = (0);
var G__31561 = (0);
seq__31033 = G__31558;
chunk__31035 = G__31559;
count__31036 = G__31560;
i__31037 = G__31561;
continue;
} else {
var G__31562 = cljs.core.next(seq__31033__$1);
var G__31563 = null;
var G__31564 = (0);
var G__31565 = (0);
seq__31033 = G__31562;
chunk__31035 = G__31563;
count__31036 = G__31564;
i__31037 = G__31565;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__31255){
var map__31256 = p__31255;
var map__31256__$1 = cljs.core.__destructure_map(map__31256);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31256__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__31257,done,error){
var map__31258 = p__31257;
var map__31258__$1 = cljs.core.__destructure_map(map__31258);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31258__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__31259,done,error){
var map__31260 = p__31259;
var map__31260__$1 = cljs.core.__destructure_map(map__31260);
var msg = map__31260__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31260__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31260__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31260__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__31261){
var map__31262 = p__31261;
var map__31262__$1 = cljs.core.__destructure_map(map__31262);
var src = map__31262__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31262__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__31263 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__31263) : done.call(null, G__31263));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__31264){
var map__31265 = p__31264;
var map__31265__$1 = cljs.core.__destructure_map(map__31265);
var msg__$1 = map__31265__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31265__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e31266){var ex = e31266;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__31267){
var map__31268 = p__31267;
var map__31268__$1 = cljs.core.__destructure_map(map__31268);
var env = map__31268__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31268__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__31269){
var map__31270 = p__31269;
var map__31270__$1 = cljs.core.__destructure_map(map__31270);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31270__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31270__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__31271){
var map__31272 = p__31271;
var map__31272__$1 = cljs.core.__destructure_map(map__31272);
var svc = map__31272__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31272__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
