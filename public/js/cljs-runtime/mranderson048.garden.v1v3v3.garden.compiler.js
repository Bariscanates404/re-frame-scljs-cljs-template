goog.provide('mranderson048.garden.v1v3v3.garden.compiler');
/**
 * The current compiler flags.
 */
mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
mranderson048.garden.v1v3v3.garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,expr], 0));
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = null;
/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
mranderson048.garden.v1v3v3.garden.compiler.vendors = (function mranderson048$garden$v1v3v3$garden$compiler$vendors(){
return cljs.core.seq(new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
mranderson048.garden.v1v3v3.garden.compiler.auto_prefixed_properties = (function mranderson048$garden$v1v3v3$garden$compiler$auto_prefixed_properties(){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_)));
});
mranderson048.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_ = (function mranderson048$garden$v1v3v3$garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_(mranderson048.garden.v1v3v3.garden.compiler.auto_prefixed_properties(),property);
});
mranderson048.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_ = (function mranderson048$garden$v1v3v3$garden$compiler$top_level_expression_QMARK_(x){
var or__5002__auto__ = (mranderson048.garden.v1v3v3.garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : mranderson048.garden.v1v3v3.garden.util.rule_QMARK_.call(null, x));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((mranderson048.garden.v1v3v3.garden.util.at_import_QMARK_(x)) || (((mranderson048.garden.v1v3v3.garden.util.at_media_QMARK_(x)) || (mranderson048.garden.v1v3v3.garden.util.at_keyframes_QMARK_(x)))));
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
mranderson048.garden.v1v3v3.garden.compiler.divide_vec = (function mranderson048$garden$v1v3v3$garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove)(pred,coll);
});

/**
 * @interface
 */
mranderson048.garden.v1v3v3.garden.compiler.IExpandable = function(){};

var mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$dyn_17981 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.garden.v1v3v3.garden.compiler.expand[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (mranderson048.garden.v1v3v3.garden.compiler.expand["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IExpandable.expand",this$);
}
}
});
/**
 * Return a list containing the expanded form of `this`.
 */
mranderson048.garden.v1v3v3.garden.compiler.expand = (function mranderson048$garden$v1v3v3$garden$compiler$expand(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 == null)))))){
return this$.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1(this$);
} else {
return mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$dyn_17981(this$);
}
});

/**
 * Like flatten but only affects seqs.
 */
mranderson048.garden.v1v3v3.garden.compiler.expand_seqs = (function mranderson048$garden$v1v3v3$garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core.seq_QMARK_(x)){
return (mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1(x) : mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null, x));
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0));
});
mranderson048.garden.v1v3v3.garden.compiler.expand_declaration_1 = (function mranderson048$garden$v1v3v3$garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_(declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__17847_SHARP_,p2__17848_SHARP_){
return mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__17847_SHARP_,"-",p2__17848_SHARP_], 0));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__17849){
var vec__17850 = p__17849;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17850,(1),null);
if(mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_(v)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m1,p__17853){
var vec__17854 = p__17853;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17854,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17854,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m1,prefix(k,k1),v1);
}),m,(mranderson048.garden.v1v3v3.garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1(v) : mranderson048.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null, v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,mranderson048.garden.v1v3v3.garden.util.to_str(k),v);
}
}),cljs.core.empty(declaration),declaration);
});
mranderson048.garden.v1v3v3.garden.compiler.expand_declaration = (function mranderson048$garden$v1v3v3$garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_(declaration)){
return declaration;
} else {
return cljs.core.with_meta(mranderson048.garden.v1v3v3.garden.compiler.expand_declaration_1(declaration),cljs.core.meta(declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
mranderson048.garden.v1v3v3.garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
mranderson048.garden.v1v3v3.garden.compiler.extract_reference = (function mranderson048$garden$v1v3v3$garden$compiler$extract_reference(selector){
var temp__5804__auto__ = cljs.core.re_find(mranderson048.garden.v1v3v3.garden.compiler.parent_selector_re,mranderson048.garden.v1v3v3.garden.util.to_str(cljs.core.last(selector)));
if(cljs.core.truth_(temp__5804__auto__)){
var reference = temp__5804__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(reference));
} else {
return null;
}
});
mranderson048.garden.v1v3v3.garden.compiler.expand_selector_reference = (function mranderson048$garden$v1v3v3$garden$compiler$expand_selector_reference(selector){
var temp__5802__auto__ = mranderson048.garden.v1v3v3.garden.compiler.extract_reference(selector);
if(cljs.core.truth_(temp__5802__auto__)){
var reference = temp__5802__auto__;
var parent = cljs.core.butlast(selector);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parent),(new cljs.core.List(null,mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(parent),reference], 0)),null,(1),null)));
} else {
return selector;
}
});
mranderson048.garden.v1v3v3.garden.compiler.expand_selector = (function mranderson048$garden$v1v3v3$garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq(parent))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent,selector__$1], 0))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,selector__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.expand_selector_reference,selector__$2);
});
mranderson048.garden.v1v3v3.garden.compiler.expand_rule = (function mranderson048$garden$v1v3v3$garden$compiler$expand_rule(rule){
var vec__17859 = cljs.core.split_with(mranderson048.garden.v1v3v3.garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(1),null);
var selector__$1 = mranderson048.garden.v1v3v3.garden.compiler.expand_selector(selector,mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
var children__$1 = mranderson048.garden.v1v3v3.garden.compiler.expand(children);
var vec__17862 = mranderson048.garden.v1v3v3.garden.compiler.divide_vec(mranderson048.garden.v1v3v3.garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(1),null);
var ys = (function (){var _STAR_selector_context_STAR__orig_val__17865 = mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_;
var _STAR_selector_context_STAR__temp_val__17866 = ((cljs.core.seq(selector__$1))?selector__$1:mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
(mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__temp_val__17866);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(mranderson048.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs], 0)));
}finally {(mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__orig_val__17865);
}})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ys,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(mranderson048.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declarations], 0))));
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.garden !== 'undefined') && (typeof mranderson048.garden.v1v3v3 !== 'undefined') && (typeof mranderson048.garden.v1v3v3.garden !== 'undefined') && (typeof mranderson048.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule !== 'undefined')){
} else {
mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17867 = cljs.core.get_global_hierarchy;
return (fexpr__17867.cljs$core$IFn$_invoke$arity$0 ? fexpr__17867.cljs$core$IFn$_invoke$arity$0() : fexpr__17867.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("mranderson048.garden.v1v3v3.garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__17868){
var map__17869 = p__17868;
var map__17869__$1 = cljs.core.__destructure_map(map__17869);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17869__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17870 = value;
var map__17870__$1 = cljs.core.__destructure_map(map__17870);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17870__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17870__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return (new cljs.core.List(null,(new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),mranderson048.garden.v1v3v3.garden.util.to_str(identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(mranderson048.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frames], 0))], null),null,null,null)),null,(1),null));
}));
mranderson048.garden.v1v3v3.garden.compiler.expand_media_query_expression = (function mranderson048$garden$v1v3v3$garden$compiler$expand_media_query_expression(expression){
var temp__5802__auto__ = (function (){var G__17871 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null));
return (mranderson048.garden.v1v3v3.garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1 ? mranderson048.garden.v1v3v3.garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1(G__17871) : mranderson048.garden.v1v3v3.garden.compiler.media_expression_behavior.call(null, G__17871));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(expression,mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_) : f.call(null, expression,mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_));
} else {
return expression;
}
});
mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__17872){
var map__17873 = p__17872;
var map__17873__$1 = cljs.core.__destructure_map(map__17873);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17873__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17874 = value;
var map__17874__$1 = cljs.core.__destructure_map(map__17874);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17874__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17874__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = mranderson048.garden.v1v3v3.garden.compiler.expand_media_query_expression(media_queries);
var xs = (function (){var _STAR_media_query_context_STAR__orig_val__17878 = mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_;
var _STAR_media_query_context_STAR__temp_val__17879 = media_queries__$1;
(mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__temp_val__17879);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(mranderson048.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson048.garden.v1v3v3.garden.compiler.expand(rules)], 0)));
}finally {(mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__orig_val__17878);
}})();
var vec__17875 = mranderson048.garden.v1v3v3.garden.compiler.divide_vec(mranderson048.garden.v1v3v3.garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17875,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17875,(1),null);
return cljs.core.cons((new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
mranderson048.garden.v1v3v3.garden.compiler.expand_stylesheet = (function mranderson048$garden$v1v3v3$garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.expand,mranderson048.garden.v1v3v3.garden.compiler.expand(xs)));
});
(mranderson048.garden.v1v3v3.garden.compiler.IExpandable["null"] = true);

(mranderson048.garden.v1v3v3.garden.compiler.expand["null"] = (function (this$){
return null;
}));

(cljs.core.IndexedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.LazySeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.NodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.NodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.BlackNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.BlackNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
}));

(cljs.core.PersistentArrayMapSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMapSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.ChunkedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.Cons.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.RSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
}));

(cljs.core.PersistentHashMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson048.garden.v1v3v3.garden.compiler.expand_declaration(this$__$1),null,(1),null));
}));

(cljs.core.ArrayNodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ArrayNodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

(cljs.core.Subvec.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
}));

(mranderson048.garden.v1v3v3.garden.compiler.IExpandable["_"] = true);

(mranderson048.garden.v1v3v3.garden.compiler.expand["_"] = (function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
}));

(cljs.core.PersistentTreeMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson048.garden.v1v3v3.garden.compiler.expand_declaration(this$__$1),null,(1),null));
}));

(cljs.core.ChunkedCons.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(cljs.core.RedNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RedNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
}));

(cljs.core.PersistentVector.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson048.garden.v1v3v3.garden.compiler.expand_declaration(this$__$1),null,(1),null));
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
}));

(cljs.core.List.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
}));

/**
 * @interface
 */
mranderson048.garden.v1v3v3.garden.compiler.CSSRenderer = function(){};

var mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$dyn_18019 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.garden.v1v3v3.garden.compiler.render_css[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (mranderson048.garden.v1v3v3.garden.compiler.render_css["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("CSSRenderer.render-css",this$);
}
}
});
/**
 * Convert a Clojure data type in to a string of CSS.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_css = (function mranderson048$garden$v1v3v3$garden$compiler$render_css(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 == null)))))){
return this$.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
return mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$dyn_18019(this$);
}
});

mranderson048.garden.v1v3v3.garden.compiler.comma = ", ";
mranderson048.garden.v1v3v3.garden.compiler.colon = ": ";
mranderson048.garden.v1v3v3.garden.compiler.semicolon = ";";
mranderson048.garden.v1v3v3.garden.compiler.l_brace = " {\n";
mranderson048.garden.v1v3v3.garden.compiler.r_brace = "\n}";
mranderson048.garden.v1v3v3.garden.compiler.l_brace_1 = " {\n\n";
mranderson048.garden.v1v3v3.garden.compiler.r_brace_1 = "\n\n}";
mranderson048.garden.v1v3v3.garden.compiler.rule_sep = "\n\n";
mranderson048.garden.v1v3v3.garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
mranderson048.garden.v1v3v3.garden.compiler.space_separated_list = (function mranderson048$garden$v1v3v3$garden$compiler$space_separated_list(var_args){
var G__17881 = arguments.length;
switch (G__17881) {
case 1:
return mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,xs);
}));

(mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
}));

(mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2);

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list = (function mranderson048$garden$v1v3v3$garden$compiler$comma_separated_list(var_args){
var G__17883 = arguments.length;
switch (G__17883) {
case 1:
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,xs);
}));

(mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__5480__auto__ = (function mranderson048$garden$v1v3v3$garden$compiler$iter__17886(s__17887){
return (new cljs.core.LazySeq(null,(function (){
var s__17887__$1 = s__17887;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17887__$1);
if(temp__5804__auto__){
var s__17887__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17887__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17887__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17889 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17888 = (0);
while(true){
if((i__17888 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__17888);
cljs.core.chunk_append(b__17889,((cljs.core.sequential_QMARK_(x))?mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null, x))));

var G__18023 = (i__17888 + (1));
i__17888 = G__18023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17889),mranderson048$garden$v1v3v3$garden$compiler$iter__17886(cljs.core.chunk_rest(s__17887__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17889),null);
}
} else {
var x = cljs.core.first(s__17887__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null, x))),mranderson048$garden$v1v3v3$garden$compiler$iter__17886(cljs.core.rest(s__17887__$2)));
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.comma,ys);
}));

(mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2);

mranderson048.garden.v1v3v3.garden.compiler.rule_join = (function mranderson048$garden$v1v3v3$garden$compiler$rule_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
mranderson048.garden.v1v3v3.garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
mranderson048.garden.v1v3v3.garden.compiler.indent_str = (function mranderson048$garden$v1v3v3$garden$compiler$indent_str(s){
return s.replace(mranderson048.garden.v1v3v3.garden.compiler.indent_loc_re,mranderson048.garden.v1v3v3.garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_value = (function mranderson048$garden$v1v3v3$garden$compiler$render_value(x){
if(mranderson048.garden.v1v3v3.garden.util.at_keyframes_QMARK_(x)){
return mranderson048.garden.v1v3v3.garden.util.to_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return mranderson048.garden.v1v3v3.garden.compiler.render_css(x);
}
});
mranderson048.garden.v1v3v3.garden.compiler.render_property_and_value = (function mranderson048$garden$v1v3v3$garden$compiler$render_property_and_value(p__17891){
var vec__17892 = p__17891;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17892,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17892,(1),null);
if(cljs.core.set_QMARK_(val)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_property_and_value,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_(val))?mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_value,val):mranderson048.garden.v1v3v3.garden.compiler.render_value(val));
return mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop,mranderson048.garden.v1v3v3.garden.compiler.colon,val__$1,mranderson048.garden.v1v3v3.garden.compiler.semicolon], 0));
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
mranderson048.garden.v1v3v3.garden.compiler.add_blocks = (function mranderson048$garden$v1v3v3$garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__17895_SHARP_){
return cljs.core.cons(p1__17895_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__17895_SHARP_) : f.call(null, p1__17895_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declaration], 0));
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
mranderson048.garden.v1v3v3.garden.compiler.prefixed_blocks = (function mranderson048$garden$v1v3v3$garden$compiler$prefixed_blocks(vendors,p__17896){
var vec__17897 = p__17896;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(1),null);
var iter__5480__auto__ = (function mranderson048$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__17900(s__17901){
return (new cljs.core.LazySeq(null,(function (){
var s__17901__$1 = s__17901;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17901__$1);
if(temp__5804__auto__){
var s__17901__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17901__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17901__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17903 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17902 = (0);
while(true){
if((i__17902 < size__5479__auto__)){
var vendor = cljs.core._nth(c__5478__auto__,i__17902);
cljs.core.chunk_append(b__17903,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.garden.v1v3v3.garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null));

var G__18024 = (i__17902 + (1));
i__17902 = G__18024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17903),mranderson048$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__17900(cljs.core.chunk_rest(s__17901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17903),null);
}
} else {
var vendor = cljs.core.first(s__17901__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.garden.v1v3v3.garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null),mranderson048$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__17900(cljs.core.rest(s__17901__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
mranderson048.garden.v1v3v3.garden.compiler.prefix_all_properties = (function mranderson048$garden$v1v3v3$garden$compiler$prefix_all_properties(vendors,declaration){
return mranderson048.garden.v1v3v3.garden.compiler.add_blocks(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
mranderson048.garden.v1v3v3.garden.compiler.prefix_auto_properties = (function mranderson048$garden$v1v3v3$garden$compiler$prefix_auto_properties(vendors,declaration){
return mranderson048.garden.v1v3v3.garden.compiler.add_blocks((function (block){
var vec__17904 = block;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17904,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17904,(1),null);
if(mranderson048.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_(cljs.core.name(p))){
return mranderson048.garden.v1v3v3.garden.compiler.prefixed_blocks(vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
mranderson048.garden.v1v3v3.garden.compiler.prefix_declaration = (function mranderson048$garden$v1v3v3$garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return mranderson048.garden.v1v3v3.garden.compiler.vendors();
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration)))?mranderson048.garden.v1v3v3.garden.compiler.prefix_all_properties:mranderson048.garden.v1v3v3.garden.compiler.prefix_auto_properties);
return (prefix_fn.cljs$core$IFn$_invoke$arity$2 ? prefix_fn.cljs$core$IFn$_invoke$arity$2(vendors,declaration) : prefix_fn.call(null, vendors,declaration));
});
mranderson048.garden.v1v3v3.garden.compiler.render_declaration = (function mranderson048$garden$v1v3v3$garden$compiler$render_declaration(declaration){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_property_and_value,mranderson048.garden.v1v3v3.garden.compiler.prefix_declaration(declaration)));
});
mranderson048.garden.v1v3v3.garden.compiler.render_selector = (function mranderson048$garden$v1v3v3$garden$compiler$render_selector(selector){
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_rule = (function mranderson048$garden$v1v3v3$garden$compiler$render_rule(p__17907){
var vec__17908 = p__17907;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17908,(0),null);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17908,(1),null);
var rule = vec__17908;
if(((cljs.core.seq(rule)) && (cljs.core.every_QMARK_(cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.render_selector(selector)),mranderson048.garden.v1v3v3.garden.compiler.l_brace,cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.indent_str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,declarations)))),mranderson048.garden.v1v3v3.garden.compiler.r_brace].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_media_expr_part = (function mranderson048$garden$v1v3v3$garden$compiler$render_media_expr_part(p__17911){
var vec__17912 = p__17911;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17912,(1),null);
var vec__17915 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17915,(0),null);
var sv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17915,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = v;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(sv);
} else {
return and__5000__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),mranderson048.garden.v1v3v3.garden.compiler.colon,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
mranderson048.garden.v1v3v3.garden.compiler.render_media_expr = (function mranderson048$garden$v1v3v3$garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_(expr)){
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_unit = (function mranderson048$garden$v1v3v3$garden$compiler$render_unit(css_unit){
var map__17918 = css_unit;
var map__17918__$1 = cljs.core.__destructure_map(map__17918);
var magnitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.name(unit)].join('');
});
/**
 * Render a CSS function.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_function = (function mranderson048$garden$v1v3v3$garden$compiler$render_function(css_function){
var map__17919 = css_function;
var map__17919__$1 = cljs.core.__destructure_map(map__17919);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17919__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_(args))?mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(args):mranderson048.garden.v1v3v3.garden.util.to_str(args));
return mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%s(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson048.garden.v1v3v3.garden.util.to_str(function$),args__$1], 0));
});
mranderson048.garden.v1v3v3.garden.compiler.render_color = (function mranderson048$garden$v1v3v3$garden$compiler$render_color(c){
var temp__5802__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5802__auto__)){
var a = temp__5802__auto__;
var map__17921 = mranderson048.garden.v1v3v3.garden.color.as_hsl(c);
var map__17921__$1 = cljs.core.__destructure_map(map__17921);
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17921__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17921__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17921__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__17922 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17922,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17922,(1),null);
return mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("hsla(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null))], 0));
} else {
return mranderson048.garden.v1v3v3.garden.color.as_hex(c);
}
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.garden !== 'undefined') && (typeof mranderson048.garden.v1v3v3 !== 'undefined') && (typeof mranderson048.garden.v1v3v3.garden !== 'undefined') && (typeof mranderson048.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof mranderson048.garden.v1v3v3.garden.compiler.render_at_rule !== 'undefined')){
} else {
/**
 * Render a CSS at-rule
 */
mranderson048.garden.v1v3v3.garden.compiler.render_at_rule = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17925 = cljs.core.get_global_hierarchy;
return (fexpr__17925.cljs$core$IFn$_invoke$arity$0 ? fexpr__17925.cljs$core$IFn$_invoke$arity$0() : fexpr__17925.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("mranderson048.garden.v1v3v3.garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
mranderson048.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
mranderson048.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__17926){
var map__17927 = p__17926;
var map__17927__$1 = cljs.core.__destructure_map(map__17927);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17928 = value;
var map__17928__$1 = cljs.core.__destructure_map(map__17928);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17928__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17928__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?mranderson048.garden.v1v3v3.garden.util.wrap_quotes(url):mranderson048.garden.v1v3v3.garden.compiler.render_css(url));
var queries = (cljs.core.truth_(media_queries)?mranderson048.garden.v1v3v3.garden.compiler.render_media_expr(media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),mranderson048.garden.v1v3v3.garden.compiler.semicolon].join('');
}));
mranderson048.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__17931){
var map__17932 = p__17931;
var map__17932__$1 = cljs.core.__destructure_map(map__17932);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17933 = value;
var map__17933__$1 = cljs.core.__destructure_map(map__17933);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17933__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq(frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.util.to_str(identifier)),mranderson048.garden.v1v3v3.garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.indent_str(mranderson048.garden.v1v3v3.garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,frames)))),mranderson048.garden.v1v3v3.garden.compiler.r_brace_1].join('');
var prefix = (function (vendor){
return ["@",mranderson048.garden.v1v3v3.garden.util.vendor_prefix(vendor,"keyframes ")].join('');
});
return mranderson048.garden.v1v3v3.garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17930_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17930_SHARP_),body].join('');
}),cljs.core.cons("@keyframes ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(prefix,mranderson048.garden.v1v3v3.garden.compiler.vendors()))));
} else {
return null;
}
}));
mranderson048.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__17934){
var map__17935 = p__17934;
var map__17935__$1 = cljs.core.__destructure_map(map__17935);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17935__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17936 = value;
var map__17936__$1 = cljs.core.__destructure_map(map__17936);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17936__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17936__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq(rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.render_media_expr(media_queries)),mranderson048.garden.v1v3v3.garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.indent_str(mranderson048.garden.v1v3v3.garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,rules)))),mranderson048.garden.v1v3v3.garden.compiler.r_brace_1].join('');
} else {
return null;
}
}));
(mranderson048.garden.v1v3v3.garden.compiler.CSSRenderer["null"] = true);

(mranderson048.garden.v1v3v3.garden.compiler.render_css["null"] = (function (this$){
return "";
}));

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_color(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));

(cljs.core.LazySeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));

(cljs.core.NodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.NodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));

(cljs.core.BlackNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.BlackNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
}));

(cljs.core.PersistentArrayMapSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMapSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_unit(this$__$1);
}));

(cljs.core.ChunkedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));

(cljs.core.Cons.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));

(cljs.core.RSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));

(mranderson048.garden.v1v3v3.garden.compiler.CSSRenderer["number"] = true);

(mranderson048.garden.v1v3v3.garden.compiler.render_css["number"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_function(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_declaration(this$__$1);
}));

(cljs.core.ArrayNodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ArrayNodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));

(cljs.core.Subvec.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
}));

(mranderson048.garden.v1v3v3.garden.compiler.CSSRenderer["_"] = true);

(mranderson048.garden.v1v3v3.garden.compiler.render_css["_"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(cljs.core.PersistentTreeMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_declaration(this$__$1);
}));

(cljs.core.ChunkedCons.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(cljs.core.RedNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RedNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
}));

(cljs.core.PersistentVector.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
}));

(cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_declaration(this$__$1);
}));

(cljs.core.List.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
}));
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
mranderson048.garden.v1v3v3.garden.compiler.compile_style = (function mranderson048$garden$v1v3v3$garden$compiler$compile_style(ms){
return cljs.core.first(mranderson048.garden.v1v3v3.garden.compiler.render_css(mranderson048.garden.v1v3v3.garden.compiler.expand(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
mranderson048.garden.v1v3v3.garden.compiler.do_compile = (function mranderson048$garden$v1v3v3$garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR__orig_val__17937 = mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_;
var _STAR_flags_STAR__temp_val__17938 = flags;
(mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__temp_val__17938);

try{return mranderson048.garden.v1v3v3.garden.compiler.rule_join(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.render_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_,mranderson048.garden.v1v3v3.garden.compiler.expand_stylesheet(rules)))));
}finally {(mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__orig_val__17937);
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
mranderson048.garden.v1v3v3.garden.compiler.do_preamble = (function mranderson048$garden$v1v3v3$garden$compiler$do_preamble(p__17940,stylesheet){
var map__17942 = p__17940;
var map__17942__$1 = cljs.core.__destructure_map(map__17942);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17942__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
mranderson048.garden.v1v3v3.garden.compiler.do_compression = (function mranderson048$garden$v1v3v3$garden$compiler$do_compression(p__17943,stylesheet){
var map__17944 = p__17943;
var map__17944__$1 = cljs.core.__destructure_map(map__17944);
var pretty_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17944__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17944__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__5002__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return mranderson048.garden.v1v3v3.garden.compression.compress_stylesheet(stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
mranderson048.garden.v1v3v3.garden.compiler.do_output_to = (function mranderson048$garden$v1v3v3$garden$compiler$do_output_to(p__17947,stylesheet){
var map__17948 = p__17947;
var map__17948__$1 = cljs.core.__destructure_map(map__17948);
var output_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17948__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
mranderson048.garden.v1v3v3.garden.compiler.compile_css = (function mranderson048$garden$v1v3v3$garden$compiler$compile_css(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18031 = arguments.length;
var i__5727__auto___18032 = (0);
while(true){
if((i__5727__auto___18032 < len__5726__auto___18031)){
args__5732__auto__.push((arguments[i__5727__auto___18032]));

var G__18033 = (i__5727__auto___18032 + (1));
i__5727__auto___18032 = G__18033;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(mranderson048.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__17954 = (cljs.core.truth_((function (){var and__5000__auto__ = mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_(flags);
if(and__5000__auto__){
return cljs.core.some(cljs.core.set(cljs.core.keys(flags)),cljs.core.keys(mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,flags], 0)),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,cljs.core.cons(flags,rules)], null));
var flags__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17954,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17954,(1),null);
return mranderson048.garden.v1v3v3.garden.compiler.do_output_to(flags__$1,mranderson048.garden.v1v3v3.garden.compiler.do_compression(flags__$1,mranderson048.garden.v1v3v3.garden.compiler.do_preamble(flags__$1,mranderson048.garden.v1v3v3.garden.compiler.do_compile(flags__$1,rules__$1))));
}));

(mranderson048.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mranderson048.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$applyTo = (function (seq17949){
var G__17950 = cljs.core.first(seq17949);
var seq17949__$1 = cljs.core.next(seq17949);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17950,seq17949__$1);
}));


//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.compiler.js.map
