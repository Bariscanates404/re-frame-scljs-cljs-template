goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22163__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22164__i = 0, G__22164__a = new Array(arguments.length -  0);
while (G__22164__i < G__22164__a.length) {G__22164__a[G__22164__i] = arguments[G__22164__i + 0]; ++G__22164__i;}
  args = new cljs.core.IndexedSeq(G__22164__a,0,null);
} 
return G__22163__delegate.call(this,args);};
G__22163.cljs$lang$maxFixedArity = 0;
G__22163.cljs$lang$applyTo = (function (arglist__22165){
var args = cljs.core.seq(arglist__22165);
return G__22163__delegate(args);
});
G__22163.cljs$core$IFn$_invoke$arity$variadic = G__22163__delegate;
return G__22163;
})()
);

(o.error = (function() { 
var G__22166__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22167__i = 0, G__22167__a = new Array(arguments.length -  0);
while (G__22167__i < G__22167__a.length) {G__22167__a[G__22167__i] = arguments[G__22167__i + 0]; ++G__22167__i;}
  args = new cljs.core.IndexedSeq(G__22167__a,0,null);
} 
return G__22166__delegate.call(this,args);};
G__22166.cljs$lang$maxFixedArity = 0;
G__22166.cljs$lang$applyTo = (function (arglist__22168){
var args = cljs.core.seq(arglist__22168);
return G__22166__delegate(args);
});
G__22166.cljs$core$IFn$_invoke$arity$variadic = G__22166__delegate;
return G__22166;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
