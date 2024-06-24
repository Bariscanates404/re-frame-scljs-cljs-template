goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__23988 = arguments.length;
switch (G__23988) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__24012 = cljs.core.seq(Object.keys(localStorage));
var chunk__24013 = null;
var count__24014 = (0);
var i__24015 = (0);
while(true){
if((i__24015 < count__24014)){
var k = chunk__24013.cljs$core$IIndexed$_nth$arity$2(null, i__24015);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__24112 = seq__24012;
var G__24113 = chunk__24013;
var G__24114 = count__24014;
var G__24115 = (i__24015 + (1));
seq__24012 = G__24112;
chunk__24013 = G__24113;
count__24014 = G__24114;
i__24015 = G__24115;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24012);
if(temp__5804__auto__){
var seq__24012__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24012__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24012__$1);
var G__24120 = cljs.core.chunk_rest(seq__24012__$1);
var G__24121 = c__5525__auto__;
var G__24122 = cljs.core.count(c__5525__auto__);
var G__24123 = (0);
seq__24012 = G__24120;
chunk__24013 = G__24121;
count__24014 = G__24122;
i__24015 = G__24123;
continue;
} else {
var k = cljs.core.first(seq__24012__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__24124 = cljs.core.next(seq__24012__$1);
var G__24125 = null;
var G__24126 = (0);
var G__24127 = (0);
seq__24012 = G__24124;
chunk__24013 = G__24125;
count__24014 = G__24126;
i__24015 = G__24127;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
