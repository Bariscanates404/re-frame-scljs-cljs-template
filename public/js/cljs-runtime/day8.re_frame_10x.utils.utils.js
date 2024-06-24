goog.provide('day8.re_frame_10x.utils.utils');
day8.re_frame_10x.utils.utils.diff_link = "https://github.com/Day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/Diffs.md";
/**
 * Get the last element in the vector
 */
day8.re_frame_10x.utils.utils.last_in_vec = (function day8$re_frame_10x$utils$utils$last_in_vec(v){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(cljs.core.count(v) - (1)));
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.utils.utils.find_all_indexes_in_vec = (function day8$re_frame_10x$utils$utils$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__17955_SHARP_,p2__17953_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__17953_SHARP_) : pred.call(null, p2__17953_SHARP_)))){
return p1__17955_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.utils.utils.find_index_in_vec = (function day8$re_frame_10x$utils$utils$find_index_in_vec(pred,v){
return cljs.core.first(day8.re_frame_10x.utils.utils.find_all_indexes_in_vec(pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.utils.utils.id_between_xf = (function day8$re_frame_10x$utils$utils$id_between_xf(beginning,ending){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__17958_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17958_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17958_SHARP_) <= ending)));
}));
});
day8.re_frame_10x.utils.utils.spy = (function day8$re_frame_10x$utils$utils$spy(var_args){
var G__17960 = arguments.length;
switch (G__17960) {
case 1:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1 = (function (x){
console.log(x);

return x;
}));

(day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
console.log(label,x);

return x;
}));

(day8.re_frame_10x.utils.utils.spy.cljs$lang$maxFixedArity = 2);

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.utils.utils.pluralize = (function day8$re_frame_10x$utils$utils$pluralize(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17987 = arguments.length;
var i__5727__auto___17988 = (0);
while(true){
if((i__5727__auto___17988 < len__5726__auto___17987)){
args__5732__auto__.push((arguments[i__5727__auto___17988]));

var G__17989 = (i__5727__auto___17988 + (1));
i__5727__auto___17988 = G__17989;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__17966){
var vec__17967 = p__17966;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17967,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5002__auto__ = plural;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.utils.utils.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.utils.utils.pluralize.cljs$lang$applyTo = (function (seq17961){
var G__17962 = cljs.core.first(seq17961);
var seq17961__$1 = cljs.core.next(seq17961);
var G__17963 = cljs.core.first(seq17961__$1);
var seq17961__$2 = cljs.core.next(seq17961__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17962,G__17963,seq17961__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.utils.utils.pluralize_ = (function day8$re_frame_10x$utils$utils$pluralize_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17990 = arguments.length;
var i__5727__auto___17991 = (0);
while(true){
if((i__5727__auto___17991 < len__5726__auto___17990)){
args__5732__auto__.push((arguments[i__5727__auto___17991]));

var G__17992 = (i__5727__auto___17991 + (1));
i__5727__auto___17991 = G__17992;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__17977){
var vec__17978 = p__17977;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17978,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5002__auto__ = plural;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq17973){
var G__17974 = cljs.core.first(seq17973);
var seq17973__$1 = cljs.core.next(seq17973);
var G__17975 = cljs.core.first(seq17973__$1);
var seq17973__$2 = cljs.core.next(seq17973__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17974,G__17975,seq17973__$2);
}));

day8.re_frame_10x.utils.utils.copy_to_clipboard = (function day8$re_frame_10x$utils$utils$copy_to_clipboard(text){
var el = document.createElement("textarea");
(el.value = text);

(el.style.position = "absolute");

(el.style.left = "-9999px");

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});

//# sourceMappingURL=day8.re_frame_10x.utils.utils.js.map
