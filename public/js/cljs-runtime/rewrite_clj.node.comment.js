goog.provide('rewrite_clj.node.comment');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rewrite_clj.node.comment.CommentNode = (function (s,__meta,__extmap,__hash){
this.s = s;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.comment.CommentNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null, );
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k20124,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__20137 = k20124;
var G__20137__$1 = (((G__20137 instanceof cljs.core.Keyword))?G__20137.fqn:null);
switch (G__20137__$1) {
case "s":
return self__.s;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20124,else__5303__auto__);

}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__20139){
var vec__20140 = p__20139;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20140,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20140,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#rewrite-clj.node.comment.CommentNode{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20123){
var self__ = this;
var G__20123__$1 = this;
return (new cljs.core.RecordIter((0),G__20123__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (495469178 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20126,other20127){
var self__ = this;
var this20126__$1 = this;
return (((!((other20127 == null)))) && ((((this20126__$1.constructor === other20127.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20126__$1.s,other20127.s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20126__$1.__extmap,other20127.__extmap)))))));
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"comment","comment",532206069);
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation"));
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((1) + cljs.core.count(self__.s));
}));

(rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [";",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s)].join('');
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k20124){
var self__ = this;
var this__5307__auto____$1 = this;
var G__20154 = k20124;
var G__20154__$1 = (((G__20154 instanceof cljs.core.Keyword))?G__20154.fqn:null);
switch (G__20154__$1) {
case "s":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20124);

}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__20123){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__20156 = cljs.core.keyword_identical_QMARK_;
var expr__20157 = k__5309__auto__;
if(cljs.core.truth_((pred__20156.cljs$core$IFn$_invoke$arity$2 ? pred__20156.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),expr__20157) : pred__20156.call(null, new cljs.core.Keyword(null,"s","s",1705939918),expr__20157)))){
return (new rewrite_clj.node.comment.CommentNode(G__20123,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__20123),null));
}
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null))], null),self__.__extmap));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__20123){
var self__ = this;
var this__5299__auto____$1 = this;
return (new rewrite_clj.node.comment.CommentNode(self__.s,G__20123,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.comment.CommentNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(rewrite_clj.node.comment.CommentNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
}));

(rewrite_clj.node.comment.CommentNode.cljs$lang$type = true);

(rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.comment/CommentNode",null,(1),null));
}));

(rewrite_clj.node.comment.CommentNode.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"rewrite-clj.node.comment/CommentNode");
}));

/**
 * Positional factory function for rewrite-clj.node.comment/CommentNode.
 */
rewrite_clj.node.comment.__GT_CommentNode = (function rewrite_clj$node$comment$__GT_CommentNode(s){
return (new rewrite_clj.node.comment.CommentNode(s,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.comment/CommentNode, taking a map of keywords to field values.
 */
rewrite_clj.node.comment.map__GT_CommentNode = (function rewrite_clj$node$comment$map__GT_CommentNode(G__20130){
var extmap__5342__auto__ = (function (){var G__20171 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20130,new cljs.core.Keyword(null,"s","s",1705939918));
if(cljs.core.record_QMARK_(G__20130)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20171);
} else {
return G__20171;
}
})();
return (new rewrite_clj.node.comment.CommentNode(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__20130),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

/**
 * Create node representing an EDN comment.
 */
rewrite_clj.node.comment.comment_node = (function rewrite_clj$node$comment$comment_node(s){
return rewrite_clj.node.comment.__GT_CommentNode(s);
});
/**
 * Check whether a node represents a comment.
 */
rewrite_clj.node.comment.comment_QMARK_ = (function rewrite_clj$node$comment$comment_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.tag(node),new cljs.core.Keyword(null,"comment","comment",532206069));
});

//# sourceMappingURL=rewrite_clj.node.comment.js.map
