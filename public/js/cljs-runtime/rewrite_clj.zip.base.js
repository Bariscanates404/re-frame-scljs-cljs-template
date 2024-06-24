goog.provide('rewrite_clj.zip.base');
/**
 * Create zipper over the given Clojure/EDN node.
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(node){
return clojure.zip.zipper(rewrite_clj.node.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_clj.node.children),rewrite_clj.node.replace_children,node);
});
/**
 * Create zipper over the given Clojure/EDN node and move
 * to the first non-whitespace/non-comment child.
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(node){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1(node) : rewrite_clj.node.tag.call(null, node)),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.edn_STAR_(node);
var or__5002__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(clojure.zip.down(top));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return top;
}
} else {
var G__21302 = (function (){var G__21282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
return (rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1(G__21282) : rewrite_clj.node.forms_node.call(null, G__21282));
})();
node = G__21302;
continue;
}
break;
}
});
/**
 * Get tag of node at the current zipper location.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__21287 = zloc;
var G__21287__$1 = (((G__21287 == null))?null:clojure.zip.node(G__21287));
if((G__21287__$1 == null)){
return null;
} else {
return (rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.tag.cljs$core$IFn$_invoke$arity$1(G__21287__$1) : rewrite_clj.node.tag.call(null, G__21287__$1));
}
});
/**
 * Get sexpr represented by the given node.
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__21289 = zloc;
var G__21289__$1 = (((G__21289 == null))?null:clojure.zip.node(G__21289));
if((G__21289__$1 == null)){
return null;
} else {
return (rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(G__21289__$1) : rewrite_clj.node.sexpr.call(null, G__21289__$1));
}
});
/**
 * Get children as s-expressions.
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__21294 = zloc;
var G__21294__$1 = (((G__21294 == null))?null:clojure.zip.node(G__21294));
if((G__21294__$1 == null)){
return null;
} else {
return (rewrite_clj.node.child_sexprs.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.child_sexprs.cljs$core$IFn$_invoke$arity$1(G__21294__$1) : rewrite_clj.node.child_sexprs.call(null, G__21294__$1));
}
});
/**
 * Get length of printable string for the given zipper location.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__5002__auto__ = (function (){var G__21295 = zloc;
var G__21295__$1 = (((G__21295 == null))?null:clojure.zip.node(G__21295));
if((G__21295__$1 == null)){
return null;
} else {
return (rewrite_clj.node.length.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.length.cljs$core$IFn$_invoke$arity$1(G__21295__$1) : rewrite_clj.node.length.call(null, G__21295__$1));
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
});
/**
 * Create zipper from String.
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(s){
var G__21299 = s;
var G__21299__$1 = (((G__21299 == null))?null:rewrite_clj.parser.parse_string_all(G__21299));
if((G__21299__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn(G__21299__$1);
}
});
/**
 * Create string representing the current zipper location.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__21300 = zloc;
var G__21300__$1 = (((G__21300 == null))?null:clojure.zip.node(G__21300));
if((G__21300__$1 == null)){
return null;
} else {
return (rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1(G__21300__$1) : rewrite_clj.node.string.call(null, G__21300__$1));
}
});
/**
 * Create string representing the zipped-up zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__21301 = zloc;
var G__21301__$1 = (((G__21301 == null))?null:clojure.zip.root(G__21301));
if((G__21301__$1 == null)){
return null;
} else {
return (rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1(G__21301__$1) : rewrite_clj.node.string.call(null, G__21301__$1));
}
});

//# sourceMappingURL=rewrite_clj.zip.base.js.map
