goog.provide('mranderson048.reagent.v0v8v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom.imported !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.imported = null;
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom.roots !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
mranderson048.reagent.v0v8v0.reagent.dom.render_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__18368 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18369 = true;
(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18369);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__18372 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18373 = false;
(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18373);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson048.reagent.v0v8v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18372);
}}));
}finally {(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18368);
}});
mranderson048.reagent.v0v8v0.reagent.dom.re_render_component = (function mranderson048$reagent$v0v8v0$reagent$dom$re_render_component(comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v8v0.reagent.dom.render = (function mranderson048$reagent$v0v8v0$reagent$dom$render(var_args){
var G__18384 = arguments.length;
switch (G__18384) {
case 2:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

var f = (function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp(f,container,callback);
}));

(mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

mranderson048.reagent.v0v8v0.reagent.dom.unmount_component_at_node = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_component_at_node(container){
return mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v8v0.reagent.dom.dom_node = (function mranderson048$reagent$v0v8v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
(mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node = mranderson048.reagent.v0v8v0.reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson048.reagent.v0v8v0.reagent.dom.force_update_all = (function mranderson048$reagent$v0v8v0$reagent$dom$force_update_all(){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

var seq__18399_18414 = cljs.core.seq(cljs.core.vals(cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.dom.roots)));
var chunk__18400_18415 = null;
var count__18401_18416 = (0);
var i__18402_18417 = (0);
while(true){
if((i__18402_18417 < count__18401_18416)){
var v_18418 = chunk__18400_18415.cljs$core$IIndexed$_nth$arity$2(null, i__18402_18417);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_18418);


var G__18419 = seq__18399_18414;
var G__18420 = chunk__18400_18415;
var G__18421 = count__18401_18416;
var G__18422 = (i__18402_18417 + (1));
seq__18399_18414 = G__18419;
chunk__18400_18415 = G__18420;
count__18401_18416 = G__18421;
i__18402_18417 = G__18422;
continue;
} else {
var temp__5804__auto___18423 = cljs.core.seq(seq__18399_18414);
if(temp__5804__auto___18423){
var seq__18399_18424__$1 = temp__5804__auto___18423;
if(cljs.core.chunked_seq_QMARK_(seq__18399_18424__$1)){
var c__5525__auto___18425 = cljs.core.chunk_first(seq__18399_18424__$1);
var G__18426 = cljs.core.chunk_rest(seq__18399_18424__$1);
var G__18427 = c__5525__auto___18425;
var G__18428 = cljs.core.count(c__5525__auto___18425);
var G__18429 = (0);
seq__18399_18414 = G__18426;
chunk__18400_18415 = G__18427;
count__18401_18416 = G__18428;
i__18402_18417 = G__18429;
continue;
} else {
var v_18432 = cljs.core.first(seq__18399_18424__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_18432);


var G__18433 = cljs.core.next(seq__18399_18424__$1);
var G__18434 = null;
var G__18435 = (0);
var G__18436 = (0);
seq__18399_18414 = G__18433;
chunk__18400_18415 = G__18434;
count__18401_18416 = G__18435;
i__18402_18417 = G__18436;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.dom.js.map
