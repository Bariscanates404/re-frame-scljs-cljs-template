goog.provide('mranderson048.garden.v1v3v3.garden.types');

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson048.garden.v1v3v3.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15107,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15111 = k15107;
var G__15111__$1 = (((G__15111 instanceof cljs.core.Keyword))?G__15111.fqn:null);
switch (G__15111__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15107,else__5303__auto__);

}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15113){
var vec__15114 = p__15113;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15114,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15114,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#mranderson048.garden.v1v3v3.garden.types.CSSUnit{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15106){
var self__ = this;
var G__15106__$1 = this;
return (new cljs.core.RecordIter((0),G__15106__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1023568500 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15108,other15109){
var self__ = this;
var this15108__$1 = this;
return (((!((other15109 == null)))) && ((((this15108__$1.constructor === other15109.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15108__$1.unit,other15109.unit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15108__$1.magnitude,other15109.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15108__$1.__extmap,other15109.__extmap)))))))));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15107){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15135 = k15107;
var G__15135__$1 = (((G__15135 instanceof cljs.core.Keyword))?G__15135.fqn:null);
switch (G__15135__$1) {
case "unit":
case "magnitude":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15107);

}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15106){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15136 = cljs.core.keyword_identical_QMARK_;
var expr__15137 = k__5309__auto__;
if(cljs.core.truth_((pred__15136.cljs$core$IFn$_invoke$arity$2 ? pred__15136.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175),expr__15137) : pred__15136.call(null, new cljs.core.Keyword(null,"unit","unit",375175175),expr__15137)))){
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(G__15106,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15136.cljs$core$IFn$_invoke$arity$2 ? pred__15136.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__15137) : pred__15136.call(null, new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__15137)))){
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(self__.unit,G__15106,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15106),null));
}
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15106){
var self__ = this;
var this__5299__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,G__15106,self__.__extmap,self__.__hash));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$type = true);

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"mranderson048.garden.v1v3v3.garden.types/CSSUnit",null,(1),null));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"mranderson048.garden.v1v3v3.garden.types/CSSUnit");
}));

/**
 * Positional factory function for mranderson048.garden.v1v3v3.garden.types/CSSUnit.
 */
mranderson048.garden.v1v3v3.garden.types.__GT_CSSUnit = (function mranderson048$garden$v1v3v3$garden$types$__GT_CSSUnit(unit,magnitude){
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for mranderson048.garden.v1v3v3.garden.types/CSSUnit, taking a map of keywords to field values.
 */
mranderson048.garden.v1v3v3.garden.types.map__GT_CSSUnit = (function mranderson048$garden$v1v3v3$garden$types$map__GT_CSSUnit(G__15110){
var extmap__5342__auto__ = (function (){var G__15139 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15110,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], 0));
if(cljs.core.record_QMARK_(G__15110)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15139);
} else {
return G__15139;
}
})();
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__15110),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__15110),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson048.garden.v1v3v3.garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15141,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15145 = k15141;
var G__15145__$1 = (((G__15145 instanceof cljs.core.Keyword))?G__15145.fqn:null);
switch (G__15145__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15141,else__5303__auto__);

}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15146){
var vec__15147 = p__15146;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15147,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15147,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#mranderson048.garden.v1v3v3.garden.types.CSSFunction{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15140){
var self__ = this;
var G__15140__$1 = this;
return (new cljs.core.RecordIter((0),G__15140__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1537479624 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15142,other15143){
var self__ = this;
var this15142__$1 = this;
return (((!((other15143 == null)))) && ((((this15142__$1.constructor === other15143.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15142__$1.function,other15143.function)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15142__$1.args,other15143.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15142__$1.__extmap,other15143.__extmap)))))))));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15141){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15150 = k15141;
var G__15150__$1 = (((G__15150 instanceof cljs.core.Keyword))?G__15150.fqn:null);
switch (G__15150__$1) {
case "function":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15141);

}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15140){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15151 = cljs.core.keyword_identical_QMARK_;
var expr__15152 = k__5309__auto__;
if(cljs.core.truth_((pred__15151.cljs$core$IFn$_invoke$arity$2 ? pred__15151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"function","function",-2127255473),expr__15152) : pred__15151.call(null, new cljs.core.Keyword(null,"function","function",-2127255473),expr__15152)))){
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(G__15140,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15151.cljs$core$IFn$_invoke$arity$2 ? pred__15151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__15152) : pred__15151.call(null, new cljs.core.Keyword(null,"args","args",1315556576),expr__15152)))){
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(self__.function$,G__15140,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15140),null));
}
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15140){
var self__ = this;
var this__5299__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,G__15140,self__.__extmap,self__.__hash));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$type = true);

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"mranderson048.garden.v1v3v3.garden.types/CSSFunction",null,(1),null));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"mranderson048.garden.v1v3v3.garden.types/CSSFunction");
}));

/**
 * Positional factory function for mranderson048.garden.v1v3v3.garden.types/CSSFunction.
 */
mranderson048.garden.v1v3v3.garden.types.__GT_CSSFunction = (function mranderson048$garden$v1v3v3$garden$types$__GT_CSSFunction(function$,args){
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(function$,args,null,null,null));
});

/**
 * Factory function for mranderson048.garden.v1v3v3.garden.types/CSSFunction, taking a map of keywords to field values.
 */
mranderson048.garden.v1v3v3.garden.types.map__GT_CSSFunction = (function mranderson048$garden$v1v3v3$garden$types$map__GT_CSSFunction(G__15144){
var extmap__5342__auto__ = (function (){var G__15156 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15144,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__15144)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15156);
} else {
return G__15156;
}
})();
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__15144),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__15144),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson048.garden.v1v3v3.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15159,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15164 = k15159;
var G__15164__$1 = (((G__15164 instanceof cljs.core.Keyword))?G__15164.fqn:null);
switch (G__15164__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15159,else__5303__auto__);

}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15167){
var vec__15168 = p__15167;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15168,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15168,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#mranderson048.garden.v1v3v3.garden.types.CSSAtRule{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15158){
var self__ = this;
var G__15158__$1 = this;
return (new cljs.core.RecordIter((0),G__15158__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-764506606 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15160,other15161){
var self__ = this;
var this15160__$1 = this;
return (((!((other15161 == null)))) && ((((this15160__$1.constructor === other15161.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15160__$1.identifier,other15161.identifier)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15160__$1.value,other15161.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15160__$1.__extmap,other15161.__extmap)))))))));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15159){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15173 = k15159;
var G__15173__$1 = (((G__15173 instanceof cljs.core.Keyword))?G__15173.fqn:null);
switch (G__15173__$1) {
case "identifier":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15159);

}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15158){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15174 = cljs.core.keyword_identical_QMARK_;
var expr__15175 = k__5309__auto__;
if(cljs.core.truth_((pred__15174.cljs$core$IFn$_invoke$arity$2 ? pred__15174.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__15175) : pred__15174.call(null, new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__15175)))){
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(G__15158,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15174.cljs$core$IFn$_invoke$arity$2 ? pred__15174.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__15175) : pred__15174.call(null, new cljs.core.Keyword(null,"value","value",305978217),expr__15175)))){
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,G__15158,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15158),null));
}
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15158){
var self__ = this;
var this__5299__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,G__15158,self__.__extmap,self__.__hash));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$type = true);

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"mranderson048.garden.v1v3v3.garden.types/CSSAtRule",null,(1),null));
}));

(mranderson048.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"mranderson048.garden.v1v3v3.garden.types/CSSAtRule");
}));

/**
 * Positional factory function for mranderson048.garden.v1v3v3.garden.types/CSSAtRule.
 */
mranderson048.garden.v1v3v3.garden.types.__GT_CSSAtRule = (function mranderson048$garden$v1v3v3$garden$types$__GT_CSSAtRule(identifier,value){
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for mranderson048.garden.v1v3v3.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
mranderson048.garden.v1v3v3.garden.types.map__GT_CSSAtRule = (function mranderson048$garden$v1v3v3$garden$types$map__GT_CSSAtRule(G__15162){
var extmap__5342__auto__ = (function (){var G__15181 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15162,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__15162)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15181);
} else {
return G__15181;
}
})();
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__15162),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__15162),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.types.js.map
