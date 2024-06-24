goog.provide('app.core');
app.core.start = (function app$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.app], null),document.getElementById("app"));
});
app.core.init = (function app$core$init(){
return app.core.start();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
