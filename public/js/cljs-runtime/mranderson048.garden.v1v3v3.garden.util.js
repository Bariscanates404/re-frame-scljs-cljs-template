goog.provide('mranderson048.garden.v1v3v3.garden.util');
/**
 * Formats a string using goog.string.format.
 */
mranderson048.garden.v1v3v3.garden.util.format = (function mranderson048$garden$v1v3v3$garden$util$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15424 = arguments.length;
var i__5727__auto___15425 = (0);
while(true){
if((i__5727__auto___15425 < len__5726__auto___15424)){
args__5732__auto__.push((arguments[i__5727__auto___15425]));

var G__15426 = (i__5727__auto___15425 + (1));
i__5727__auto___15425 = G__15426;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(mranderson048.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq15202){
var G__15203 = cljs.core.first(seq15202);
var seq15202__$1 = cljs.core.next(seq15202);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15203,seq15202__$1);
}));


/**
 * @interface
 */
mranderson048.garden.v1v3v3.garden.util.ToString = function(){};

var mranderson048$garden$v1v3v3$garden$util$ToString$to_str$dyn_15430 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (mranderson048.garden.v1v3v3.garden.util.to_str["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
mranderson048.garden.v1v3v3.garden.util.to_str = (function mranderson048$garden$v1v3v3$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
return mranderson048$garden$v1v3v3$garden$util$ToString$to_str$dyn_15430(this$);
}
});

(cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(mranderson048.garden.v1v3v3.garden.util.ToString["_"] = true);

(mranderson048.garden.v1v3v3.garden.util.to_str["_"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(mranderson048.garden.v1v3v3.garden.util.ToString["null"] = true);

(mranderson048.garden.v1v3v3.garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
mranderson048.garden.v1v3v3.garden.util.as_str = (function mranderson048$garden$v1v3v3$garden$util$as_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15435 = arguments.length;
var i__5727__auto___15436 = (0);
while(true){
if((i__5727__auto___15436 < len__5726__auto___15435)){
args__5732__auto__.push((arguments[i__5727__auto___15436]));

var G__15437 = (i__5727__auto___15436 + (1));
i__5727__auto___15436 = G__15437;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.util.to_str,args));
}));

(mranderson048.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq15226){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15226));
}));

/**
 * Convert a string to an integer with optional base.
 */
mranderson048.garden.v1v3v3.garden.util.string__GT_int = (function mranderson048$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15442 = arguments.length;
var i__5727__auto___15443 = (0);
while(true){
if((i__5727__auto___15443 < len__5726__auto___15442)){
args__5732__auto__.push((arguments[i__5727__auto___15443]));

var G__15444 = (i__5727__auto___15443 + (1));
i__5727__auto___15443 = G__15444;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__15236){
var vec__15237 = p__15236;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15237,(0),null);
var radix__$1 = (function (){var or__5002__auto__ = radix;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq15228){
var G__15229 = cljs.core.first(seq15228);
var seq15228__$1 = cljs.core.next(seq15228);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15229,seq15228__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
mranderson048.garden.v1v3v3.garden.util.int__GT_string = (function mranderson048$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15449 = arguments.length;
var i__5727__auto___15451 = (0);
while(true){
if((i__5727__auto___15451 < len__5726__auto___15449)){
args__5732__auto__.push((arguments[i__5727__auto___15451]));

var G__15453 = (i__5727__auto___15451 + (1));
i__5727__auto___15451 = G__15453;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__15247){
var vec__15248 = p__15247;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15248,(0),null);
var radix__$1 = (function (){var or__5002__auto__ = radix;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq15241){
var G__15242 = cljs.core.first(seq15241);
var seq15241__$1 = cljs.core.next(seq15241);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15242,seq15241__$1);
}));

/**
 * Return a space separated list of values.
 */
mranderson048.garden.v1v3v3.garden.util.space_join = (function mranderson048$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson048.garden.v1v3v3.garden.util.comma_join = (function mranderson048$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__5480__auto__ = (function mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__15252(s__15253){
return (new cljs.core.LazySeq(null,(function (){
var s__15253__$1 = s__15253;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15253__$1);
if(temp__5804__auto__){
var s__15253__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15253__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15253__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15255 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15254 = (0);
while(true){
if((i__15254 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__15254);
cljs.core.chunk_append(b__15255,((cljs.core.sequential_QMARK_(x))?mranderson048.garden.v1v3v3.garden.util.space_join(x):mranderson048.garden.v1v3v3.garden.util.to_str(x)));

var G__15464 = (i__15254 + (1));
i__15254 = G__15464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15255),mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__15252(cljs.core.chunk_rest(s__15253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15255),null);
}
} else {
var x = cljs.core.first(s__15253__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?mranderson048.garden.v1v3v3.garden.util.space_join(x):mranderson048.garden.v1v3v3.garden.util.to_str(x)),mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__15252(cljs.core.rest(s__15253__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
mranderson048.garden.v1v3v3.garden.util.wrap_quotes = (function mranderson048$garden$v1v3v3$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
mranderson048.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
mranderson048.garden.v1v3v3.garden.util.declaration_QMARK_ = mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_;
mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof mranderson048.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_media_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_media_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_import_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_import_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
mranderson048.garden.v1v3v3.garden.util.prefix = (function mranderson048$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = mranderson048.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
mranderson048.garden.v1v3v3.garden.util.vendor_prefix = (function mranderson048$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = mranderson048.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return mranderson048.garden.v1v3v3.garden.util.prefix(p__$1,s);
} else {
return mranderson048.garden.v1v3v3.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
mranderson048.garden.v1v3v3.garden.util.natural_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
mranderson048.garden.v1v3v3.garden.util.between_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__5090__auto__ = a;
var y__5091__auto__ = b;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var top = (function (){var x__5087__auto__ = a;
var y__5088__auto__ = b;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
mranderson048.garden.v1v3v3.garden.util.clip = (function mranderson048$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__15353 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15353,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15353,(1),null);
var x__5087__auto__ = a__$1;
var y__5088__auto__ = (function (){var x__5090__auto__ = b__$1;
var y__5091__auto__ = n;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
});
/**
 * Return the average of two or more numbers.
 */
mranderson048.garden.v1v3v3.garden.util.average = (function mranderson048$garden$v1v3v3$garden$util$average(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15489 = arguments.length;
var i__5727__auto___15490 = (0);
while(true){
if((i__5727__auto___15490 < len__5726__auto___15489)){
args__5732__auto__.push((arguments[i__5727__auto___15490]));

var G__15492 = (i__5727__auto___15490 + (1));
i__5727__auto___15490 = G__15492;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(mranderson048.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq15363){
var G__15364 = cljs.core.first(seq15363);
var seq15363__$1 = cljs.core.next(seq15363);
var G__15365 = cljs.core.first(seq15363__$1);
var seq15363__$2 = cljs.core.next(seq15363__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15364,G__15365,seq15363__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
mranderson048.garden.v1v3v3.garden.util.cartesian_product = (function mranderson048$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15498 = arguments.length;
var i__5727__auto___15499 = (0);
while(true){
if((i__5727__auto___15499 < len__5726__auto___15498)){
args__5732__auto__.push((arguments[i__5727__auto___15499]));

var G__15500 = (i__5727__auto___15499 + (1));
i__5727__auto___15499 = G__15500;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function mranderson048$garden$v1v3v3$garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5802__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null, i)));
if(temp__5802__auto__){
var rst = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__15507 = (i - (1));
var G__15508 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null, i)));
i = G__15507;
v_seqs__$2 = G__15508;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return mranderson048$garden$v1v3v3$garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq15378){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15378));
}));


//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.util.js.map
