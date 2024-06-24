goog.provide('mranderson048.garden.v1v3v3.garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16956 = arguments.length;
var i__5727__auto___16957 = (0);
while(true){
if((i__5727__auto___16957 < len__5726__auto___16956)){
args__5732__auto__.push((arguments[i__5727__auto___16957]));

var G__16958 = (i__5727__auto___16957 + (1));
i__5727__auto___16957 = G__16958;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__16959__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__16959 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__16960__i = 0, G__16960__a = new Array(arguments.length -  0);
while (G__16960__i < G__16960__a.length) {G__16960__a[G__16960__i] = arguments[G__16960__i + 0]; ++G__16960__i;}
  children = new cljs.core.IndexedSeq(G__16960__a,0,null);
} 
return G__16959__delegate.call(this,children);};
G__16959.cljs$lang$maxFixedArity = 0;
G__16959.cljs$lang$applyTo = (function (arglist__16961){
var children = cljs.core.seq(arglist__16961);
return G__16959__delegate(children);
});
G__16959.cljs$core$IFn$_invoke$arity$variadic = G__16959__delegate;
return G__16959;
})()
;
}
}));

(mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq16927){
var G__16928 = cljs.core.first(seq16927);
var seq16927__$1 = cljs.core.next(seq16927);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16928,seq16927__$1);
}));

mranderson048.garden.v1v3v3.garden.stylesheet.cssfn = (function mranderson048$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__16962__delegate = function (args){
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__16962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16963__i = 0, G__16963__a = new Array(arguments.length -  0);
while (G__16963__i < G__16963__a.length) {G__16963__a[G__16963__i] = arguments[G__16963__i + 0]; ++G__16963__i;}
  args = new cljs.core.IndexedSeq(G__16963__a,0,null);
} 
return G__16962__delegate.call(this,args);};
G__16962.cljs$lang$maxFixedArity = 0;
G__16962.cljs$lang$applyTo = (function (arglist__16964){
var args = cljs.core.seq(arglist__16964);
return G__16962__delegate(args);
});
G__16962.cljs$core$IFn$_invoke$arity$variadic = G__16962__delegate;
return G__16962;
})()
;
});
mranderson048.garden.v1v3v3.garden.stylesheet.at_rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16965 = arguments.length;
var i__5727__auto___16966 = (0);
while(true){
if((i__5727__auto___16966 < len__5726__auto___16965)){
args__5732__auto__.push((arguments[i__5727__auto___16966]));

var G__16967 = (i__5727__auto___16966 + (1));
i__5727__auto___16966 = G__16967;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq16934){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16934));
}));

/**
 * Create a CSS @import rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_import = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__16943 = arguments.length;
switch (G__16943) {
case 1:
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___16977 = arguments.length;
var i__5727__auto___16978 = (0);
while(true){
if((i__5727__auto___16978 < len__5726__auto___16977)){
args_arr__5751__auto__.push((arguments[i__5727__auto___16978]));

var G__16979 = (i__5727__auto___16978 + (1));
i__5727__auto___16978 = G__16979;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq16941){
var G__16942 = cljs.core.first(seq16941);
var seq16941__$1 = cljs.core.next(seq16941);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16942,seq16941__$1);
}));

(mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_media = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16993 = arguments.length;
var i__5727__auto___16994 = (0);
while(true){
if((i__5727__auto___16994 < len__5726__auto___16993)){
args__5732__auto__.push((arguments[i__5727__auto___16994]));

var G__16995 = (i__5727__auto___16994 + (1));
i__5727__auto___16994 = G__16995;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq16951){
var G__16952 = cljs.core.first(seq16951);
var seq16951__$1 = cljs.core.next(seq16951);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16952,seq16951__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16996 = arguments.length;
var i__5727__auto___16997 = (0);
while(true){
if((i__5727__auto___16997 < len__5726__auto___16996)){
args__5732__auto__.push((arguments[i__5727__auto___16997]));

var G__16998 = (i__5727__auto___16997 + (1));
i__5727__auto___16997 = G__16998;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq16954){
var G__16955 = cljs.core.first(seq16954);
var seq16954__$1 = cljs.core.next(seq16954);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16955,seq16954__$1);
}));

/**
 * Create a color from RGB values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rgb = (function mranderson048$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.hsl = (function mranderson048$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.stylesheet.js.map
