goog.provide('mranderson048.reagent.v0v8v0.reagent.impl.util');
mranderson048.reagent.v0v8v0.reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!(((window["document"]) == null)))));
mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_non_reactive_STAR_ = false;
mranderson048.reagent.v0v8v0.reagent.impl.util.memoize_1 = (function mranderson048$reagent$v0v8v0$reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null, arg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
});
mranderson048.reagent.v0v8v0.reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
mranderson048.reagent.v0v8v0.reagent.impl.util.capitalize = (function mranderson048$reagent$v0v8v0$reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join('');
}
});
mranderson048.reagent.v0v8v0.reagent.impl.util.dash_to_camel = (function mranderson048$reagent$v0v8v0$reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__17843 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var seq__17844 = cljs.core.seq(vec__17843);
var first__17845 = cljs.core.first(seq__17844);
var seq__17844__$1 = cljs.core.next(seq__17844);
var start = first__17845;
var parts = seq__17844__$1;
if(cljs.core.truth_((mranderson048.reagent.v0v8v0.reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : mranderson048.reagent.v0v8v0.reagent.impl.util.dont_camel_case.call(null, start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.impl.util.capitalize,parts));
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.util.fun_name = (function mranderson048$reagent$v0v8v0$reagent$impl$util$fun_name(f){
var n = (function (){var or__5002__auto__ = (function (){var and__5000__auto__ = cljs.core.fn_QMARK_(f);
if(and__5000__auto__){
var or__5002__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (f["name"]);
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var and__5000__auto__ = (((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__5000__auto__){
return cljs.core.name(f);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"$",".");
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.Fn}
*/
mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__17858 = (arguments.length - (1));
switch (G__17858) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (18):
return self__.cljs$core$IFn$_invoke$arity$18((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (20):
return self__.cljs$core$IFn$_invoke$arity$20((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.apply = (function (self__,args17857){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17857)));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$0 ? self__.pfn.cljs$core$IFn$_invoke$arity$0() : self__.pfn.call(null, ));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$1 ? self__.pfn.cljs$core$IFn$_invoke$arity$1(a) : self__.pfn.call(null, a));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$2 ? self__.pfn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.pfn.call(null, a,b));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$3 ? self__.pfn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.pfn.call(null, a,b,c));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$4 ? self__.pfn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.pfn.call(null, a,b,c,d));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$5 ? self__.pfn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.pfn.call(null, a,b,c,d,e));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$6 ? self__.pfn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : self__.pfn.call(null, a,b,c,d,e,f__$1));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$7 ? self__.pfn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : self__.pfn.call(null, a,b,c,d,e,f__$1,g));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$8 ? self__.pfn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$9 ? self__.pfn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$10 ? self__.pfn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$11 ? self__.pfn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$12 ? self__.pfn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k,l));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$13 ? self__.pfn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$14 ? self__.pfn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$15 ? self__.pfn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$16 ? self__.pfn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$17 ? self__.pfn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$18 ? self__.pfn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$19 ? self__.pfn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$20 ? self__.pfn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.pfn.call(null, a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.pfn,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pfn","pfn",-513383568,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.cljs$lang$type = true);

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.impl.util/PartialFn");

(mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"mranderson048.reagent.v0v8v0.reagent.impl.util/PartialFn");
}));

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.impl.util/PartialFn.
 */
mranderson048.reagent.v0v8v0.reagent.impl.util.__GT_PartialFn = (function mranderson048$reagent$v0v8v0$reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new mranderson048.reagent.v0v8v0.reagent.impl.util.PartialFn(pfn,f,args));
});

mranderson048.reagent.v0v8v0.reagent.impl.util.make_partial_fn = (function mranderson048$reagent$v0v8v0$reagent$impl$util$make_partial_fn(f,args){
return mranderson048.reagent.v0v8v0.reagent.impl.util.__GT_PartialFn(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,f,args),f,args);
});
mranderson048.reagent.v0v8v0.reagent.impl.util.merge_class = (function mranderson048$reagent$v0v8v0$reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5804__auto__)){
var c1 = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5804__auto____$1)){
var c2 = temp__5804__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.util.merge_style = (function mranderson048$reagent$v0v8v0$reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5804__auto__)){
var s1 = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5804__auto____$1)){
var s2 = temp__5804__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.util.merge_props = (function mranderson048$reagent$v0v8v0$reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error(["Assert failed: ",["Property must be a map, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1], 0))].join(''),"\n","(map? p1)"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.impl.util.merge_style(p1,mranderson048.reagent.v0v8v0.reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0))));
}
});
mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = false;
mranderson048.reagent.v0v8v0.reagent.impl.util.force_update = (function mranderson048$reagent$v0v8v0$reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR__orig_val__17884 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__17885 = true;
(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__17885);

try{return (comp["forceUpdate"])();
}finally {(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__17884);
}} else {
return (comp["forceUpdate"])();
}
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.impl.util.js.map
