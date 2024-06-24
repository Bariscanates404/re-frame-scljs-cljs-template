goog.provide('mranderson048.garden.v1v3v3.garden.core');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson048.garden.v1v3v3.garden.core.css = (function mranderson048$garden$v1v3v3$garden$core$css(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18025 = arguments.length;
var i__5727__auto___18026 = (0);
while(true){
if((i__5727__auto___18026 < len__5726__auto___18025)){
args__5732__auto__.push((arguments[i__5727__auto___18026]));

var G__18027 = (i__5727__auto___18026 + (1));
i__5727__auto___18026 = G__18027;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.compile_css,rules);
}));

(mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq18018){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18018));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson048.garden.v1v3v3.garden.core.style = (function mranderson048$garden$v1v3v3$garden$core$style(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18028 = arguments.length;
var i__5727__auto___18029 = (0);
while(true){
if((i__5727__auto___18029 < len__5726__auto___18028)){
args__5732__auto__.push((arguments[i__5727__auto___18029]));

var G__18030 = (i__5727__auto___18029 + (1));
i__5727__auto___18029 = G__18030;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson048.garden.v1v3v3.garden.compiler.compile_style(maps);
}));

(mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq18021){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18021));
}));


//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.core.js.map
