goog.provide('mranderson048.reagent.v0v8v0.reagent.debug');
mranderson048.reagent.v0v8v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson048.reagent.v0v8v0.reagent.debug.tracking = false;
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__17459__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17460__i = 0, G__17460__a = new Array(arguments.length -  0);
while (G__17460__i < G__17460__a.length) {G__17460__a[G__17460__i] = arguments[G__17460__i + 0]; ++G__17460__i;}
  args = new cljs.core.IndexedSeq(G__17460__a,0,null);
} 
return G__17459__delegate.call(this,args);};
G__17459.cljs$lang$maxFixedArity = 0;
G__17459.cljs$lang$applyTo = (function (arglist__17461){
var args = cljs.core.seq(arglist__17461);
return G__17459__delegate(args);
});
G__17459.cljs$core$IFn$_invoke$arity$variadic = G__17459__delegate;
return G__17459;
})()
);

(o.error = (function() { 
var G__17462__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17463__i = 0, G__17463__a = new Array(arguments.length -  0);
while (G__17463__i < G__17463__a.length) {G__17463__a[G__17463__i] = arguments[G__17463__i + 0]; ++G__17463__i;}
  args = new cljs.core.IndexedSeq(G__17463__a,0,null);
} 
return G__17462__delegate.call(this,args);};
G__17462.cljs$lang$maxFixedArity = 0;
G__17462.cljs$lang$applyTo = (function (arglist__17464){
var args = cljs.core.seq(arglist__17464);
return G__17462__delegate(args);
});
G__17462.cljs$core$IFn$_invoke$arity$variadic = G__17462__delegate;
return G__17462;
})()
);

return o;
})();
}
mranderson048.reagent.v0v8v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v8v0$reagent$debug$track_warnings(f){
(mranderson048.reagent.v0v8v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

(mranderson048.reagent.v0v8v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.debug.js.map
