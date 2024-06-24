goog.provide('rewrite_clj.node.reader_macro');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.reader_macro.ReaderNode = (function (tag,prefix,suffix,sexpr_fn,sexpr_count,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.suffix = suffix;
this.sexpr_fn = sexpr_fn;
this.sexpr_count = sexpr_count;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.reader_macro.ReaderNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null, );
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k20647,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__20668 = k20647;
var G__20668__$1 = (((G__20668 instanceof cljs.core.Keyword))?G__20668.fqn:null);
switch (G__20668__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "suffix":
return self__.suffix;

break;
case "sexpr-fn":
return self__.sexpr_fn;

break;
case "sexpr-count":
return self__.sexpr_count;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20647,else__5303__auto__);

}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__20674){
var vec__20676 = p__20674;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20676,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20676,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#rewrite-clj.node.reader-macro.ReaderNode{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20646){
var self__ = this;
var G__20646__$1 = this;
return (new cljs.core.RecordIter((0),G__20646__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1051800113 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20648,other20649){
var self__ = this;
var this20648__$1 = this;
return (((!((other20649 == null)))) && ((((this20648__$1.constructor === other20649.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20648__$1.tag,other20649.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20648__$1.prefix,other20649.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20648__$1.suffix,other20649.suffix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20648__$1.sexpr_fn,other20649.sexpr_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20648__$1.sexpr_count,other20649.sexpr_count)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20648__$1.children,other20649.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20648__$1.__extmap,other20649.__extmap)))))))))))))))));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not(self__.sexpr_fn);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.sexpr_fn)){
var G__20715 = rewrite_clj.node.protocols.sexprs(self__.children);
return (self__.sexpr_fn.cljs$core$IFn$_invoke$arity$1 ? self__.sexpr_fn.cljs$core$IFn$_invoke$arity$1(G__20715) : self__.sexpr_fn.call(null, G__20715));
} else {
throw (new Error("Unsupported operation"));
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((rewrite_clj.node.protocols.sum_lengths(self__.children) + (1)) + cljs.core.count(self__.prefix)) + cljs.core.count(self__.suffix));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.suffix)].join('');
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.sexpr_count)){
rewrite_clj.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,self__.sexpr_count);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k20647){
var self__ = this;
var this__5307__auto____$1 = this;
var G__20717 = k20647;
var G__20717__$1 = (((G__20717 instanceof cljs.core.Keyword))?G__20717.fqn:null);
switch (G__20717__$1) {
case "tag":
case "prefix":
case "suffix":
case "sexpr-fn":
case "sexpr-count":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20647);

}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__20646){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__20719 = cljs.core.keyword_identical_QMARK_;
var expr__20720 = k__5309__auto__;
if(cljs.core.truth_((pred__20719.cljs$core$IFn$_invoke$arity$2 ? pred__20719.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__20720) : pred__20719.call(null, new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__20720)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(G__20646,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20719.cljs$core$IFn$_invoke$arity$2 ? pred__20719.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__20720) : pred__20719.call(null, new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__20720)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,G__20646,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20719.cljs$core$IFn$_invoke$arity$2 ? pred__20719.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__20720) : pred__20719.call(null, new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__20720)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,G__20646,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20719.cljs$core$IFn$_invoke$arity$2 ? pred__20719.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),expr__20720) : pred__20719.call(null, new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),expr__20720)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,G__20646,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20719.cljs$core$IFn$_invoke$arity$2 ? pred__20719.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),expr__20720) : pred__20719.call(null, new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),expr__20720)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,G__20646,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20719.cljs$core$IFn$_invoke$arity$2 ? pred__20719.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__20720) : pred__20719.call(null, new cljs.core.Keyword(null,"children","children",-940561982),expr__20720)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,G__20646,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__20646),null));
}
}
}
}
}
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__20646){
var self__ = this;
var this__5299__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,G__20646,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"sexpr-fn","sexpr-fn",425590113,null),new cljs.core.Symbol(null,"sexpr-count","sexpr-count",-1763900812,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$type = true);

(rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.reader-macro/ReaderNode",null,(1),null));
}));

(rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"rewrite-clj.node.reader-macro/ReaderNode");
}));

/**
 * Positional factory function for rewrite-clj.node.reader-macro/ReaderNode.
 */
rewrite_clj.node.reader_macro.__GT_ReaderNode = (function rewrite_clj$node$reader_macro$__GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
return (new rewrite_clj.node.reader_macro.ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.reader-macro/ReaderNode, taking a map of keywords to field values.
 */
rewrite_clj.node.reader_macro.map__GT_ReaderNode = (function rewrite_clj$node$reader_macro$map__GT_ReaderNode(G__20660){
var extmap__5342__auto__ = (function (){var G__20730 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20660,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__20660)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20730);
} else {
return G__20730;
}
})();
return (new rewrite_clj.node.reader_macro.ReaderNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__20660),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__20660),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__20660),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414).cljs$core$IFn$_invoke$arity$1(G__20660),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957).cljs$core$IFn$_invoke$arity$1(G__20660),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__20660),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.reader_macro.ReaderMacroNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null, );
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k20733,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__20741 = k20733;
var G__20741__$1 = (((G__20741 instanceof cljs.core.Keyword))?G__20741.fqn:null);
switch (G__20741__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20733,else__5303__auto__);

}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__20746){
var vec__20747 = p__20746;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20747,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20747,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#rewrite-clj.node.reader-macro.ReaderMacroNode{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20732){
var self__ = this;
var G__20732__$1 = this;
return (new cljs.core.RecordIter((0),G__20732__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (856986356 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20734,other20735){
var self__ = this;
var this20734__$1 = this;
return (((!((other20735 == null)))) && ((((this20734__$1.constructor === other20735.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20734__$1.children,other20735.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20734__$1.__extmap,other20735.__extmap)))))));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),(new cljs.core.List(null,this$__$1.rewrite_clj$node$protocols$Node$string$arity$1(null, ),null,(1),null)),(2),null));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (rewrite_clj.node.protocols.sum_lengths(self__.children) + (1));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(2));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k20733){
var self__ = this;
var this__5307__auto____$1 = this;
var G__20757 = k20733;
var G__20757__$1 = (((G__20757 instanceof cljs.core.Keyword))?G__20757.fqn:null);
switch (G__20757__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20733);

}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__20732){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__20758 = cljs.core.keyword_identical_QMARK_;
var expr__20759 = k__5309__auto__;
if(cljs.core.truth_((pred__20758.cljs$core$IFn$_invoke$arity$2 ? pred__20758.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__20759) : pred__20758.call(null, new cljs.core.Keyword(null,"children","children",-940561982),expr__20759)))){
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(G__20732,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__20732),null));
}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__20732){
var self__ = this;
var this__5299__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,G__20732,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$type = true);

(rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.reader-macro/ReaderMacroNode",null,(1),null));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"rewrite-clj.node.reader-macro/ReaderMacroNode");
}));

/**
 * Positional factory function for rewrite-clj.node.reader-macro/ReaderMacroNode.
 */
rewrite_clj.node.reader_macro.__GT_ReaderMacroNode = (function rewrite_clj$node$reader_macro$__GT_ReaderMacroNode(children){
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.reader-macro/ReaderMacroNode, taking a map of keywords to field values.
 */
rewrite_clj.node.reader_macro.map__GT_ReaderMacroNode = (function rewrite_clj$node$reader_macro$map__GT_ReaderMacroNode(G__20737){
var extmap__5342__auto__ = (function (){var G__20765 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20737,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__20737)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20765);
} else {
return G__20765;
}
})();
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__20737),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.reader_macro.DerefNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.reader_macro.DerefNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null, );
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k20772,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__20781 = k20772;
var G__20781__$1 = (((G__20781 instanceof cljs.core.Keyword))?G__20781.fqn:null);
switch (G__20781__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20772,else__5303__auto__);

}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__20782){
var vec__20783 = p__20782;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20783,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20783,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#rewrite-clj.node.reader-macro.DerefNode{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20771){
var self__ = this;
var G__20771__$1 = this;
return (new cljs.core.RecordIter((0),G__20771__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1560233006 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20773,other20774){
var self__ = this;
var this20773__$1 = this;
return (((!((other20774 == null)))) && ((((this20773__$1.constructor === other20774.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20773__$1.children,other20774.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20773__$1.__extmap,other20774.__extmap)))))));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"deref","deref",-145586795);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"deref","deref",1494944732,null),rewrite_clj.node.protocols.sexprs(self__.children));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (rewrite_clj.node.protocols.sum_lengths(self__.children) + (1));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(1));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k20772){
var self__ = this;
var this__5307__auto____$1 = this;
var G__20795 = k20772;
var G__20795__$1 = (((G__20795 instanceof cljs.core.Keyword))?G__20795.fqn:null);
switch (G__20795__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20772);

}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__20771){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__20796 = cljs.core.keyword_identical_QMARK_;
var expr__20797 = k__5309__auto__;
if(cljs.core.truth_((pred__20796.cljs$core$IFn$_invoke$arity$2 ? pred__20796.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__20797) : pred__20796.call(null, new cljs.core.Keyword(null,"children","children",-940561982),expr__20797)))){
return (new rewrite_clj.node.reader_macro.DerefNode(G__20771,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__20771),null));
}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__20771){
var self__ = this;
var this__5299__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,G__20771,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(rewrite_clj.node.reader_macro.DerefNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.reader_macro.DerefNode.cljs$lang$type = true);

(rewrite_clj.node.reader_macro.DerefNode.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.reader-macro/DerefNode",null,(1),null));
}));

(rewrite_clj.node.reader_macro.DerefNode.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"rewrite-clj.node.reader-macro/DerefNode");
}));

/**
 * Positional factory function for rewrite-clj.node.reader-macro/DerefNode.
 */
rewrite_clj.node.reader_macro.__GT_DerefNode = (function rewrite_clj$node$reader_macro$__GT_DerefNode(children){
return (new rewrite_clj.node.reader_macro.DerefNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.reader-macro/DerefNode, taking a map of keywords to field values.
 */
rewrite_clj.node.reader_macro.map__GT_DerefNode = (function rewrite_clj$node$reader_macro$map__GT_DerefNode(G__20775){
var extmap__5342__auto__ = (function (){var G__20801 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20775,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__20775)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20801);
} else {
return G__20801;
}
})();
return (new rewrite_clj.node.reader_macro.DerefNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__20775),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

rewrite_clj.node.reader_macro.__GT_node = (function rewrite_clj$node$reader_macro$__GT_node(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
if(cljs.core.truth_(sexpr_count)){
rewrite_clj.node.protocols.assert_sexpr_count(children,sexpr_count);
} else {
}

return rewrite_clj.node.reader_macro.__GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children);
});
/**
 * Create node representing a var.
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.reader_macro.var_node = (function rewrite_clj$node$reader_macro$var_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.reader_macro.__GT_node(new cljs.core.Keyword(null,"var","var",-769682797),"'","",((function (children){
return (function (p1__20803_SHARP_){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),p1__20803_SHARP_);
});})(children))
,(1),children);
} else {
var G__20874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__20874;
continue;
}
break;
}
});
/**
 * Create node representing an inline evaluation. (`#=...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.reader_macro.eval_node = (function rewrite_clj$node$reader_macro$eval_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.reader_macro.__GT_node(new cljs.core.Keyword(null,"eval","eval",-1103567905),"=","",((function (children){
return (function (p1__20805_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"eval","eval",536963622,null),(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),p1__20805_SHARP_),null,(1),null)),(2),null));
});})(children))
,(1),children);
} else {
var G__20875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__20875;
continue;
}
break;
}
});
/**
 * Create node representing a reader macro. (`#... ...`)
 */
rewrite_clj.node.reader_macro.reader_macro_node = (function rewrite_clj$node$reader_macro$reader_macro_node(var_args){
var G__20807 = arguments.length;
switch (G__20807) {
case 1:
return rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
return rewrite_clj.node.reader_macro.__GT_ReaderMacroNode(children);
}));

(rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2 = (function (macro_node,form_node){
return rewrite_clj.node.reader_macro.__GT_ReaderMacroNode(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [macro_node,rewrite_clj.node.whitespace.spaces((1)),form_node], null));
}));

(rewrite_clj.node.reader_macro.reader_macro_node.cljs$lang$maxFixedArity = 2);

/**
 * Create node representing the dereferencing of a form. (`@...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.reader_macro.deref_node = (function rewrite_clj$node$reader_macro$deref_node(children){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.reader_macro.__GT_DerefNode(children);
} else {
return rewrite_clj.node.reader_macro.__GT_DerefNode(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null));
}
});

//# sourceMappingURL=rewrite_clj.node.reader_macro.js.map
