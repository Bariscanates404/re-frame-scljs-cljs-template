goog.provide('reagent.impl.component');
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__22815 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k]));
var G__22816 = (i + (1));
m = G__22815;
i = G__22816;
continue;
} else {
return m;
}
break;
}
});
reagent.impl.component.extract_props = (function reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.component.extract_children = (function reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.component.props_argv = (function reagent$impl$component$props_argv(c,p){
var temp__5806__auto__ = (p["argv"]);
if((temp__5806__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.component.shallow_obj_to_map(p)], null);
} else {
var a = temp__5806__auto__;
return a;
}
});
reagent.impl.component.get_argv = (function reagent$impl$component$get_argv(c){
return reagent.impl.component.props_argv(c,(c["props"]));
});
reagent.impl.component.get_props = (function reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5806__auto__ = (p["argv"]);
if((temp__5806__auto__ == null)){
return reagent.impl.component.shallow_obj_to_map(p);
} else {
var v = temp__5806__auto__;
return reagent.impl.component.extract_props(v);
}
});
reagent.impl.component.get_children = (function reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5806__auto__ = (p["argv"]);
if((temp__5806__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,module$node_modules$react$index.Children.toArray((p["children"])));
} else {
var v = temp__5806__auto__;
return reagent.impl.component.extract_children(v);
}
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__22664 = c;
var G__22664__$1 = (((G__22664 == null))?null:G__22664.prototype);
if((G__22664__$1 == null)){
return null;
} else {
return (G__22664__$1["reagentRender"]);
}
})() == null)))));
});
reagent.impl.component.react_class_QMARK_ = (function reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__22667 = c;
var G__22667__$1 = (((G__22667 == null))?null:G__22667.prototype);
if((G__22667__$1 == null)){
return null;
} else {
return (G__22667__$1["render"]);
}
})() == null)))));
});
reagent.impl.component.reagent_component_QMARK_ = (function reagent$impl$component$reagent_component_QMARK_(c){
return (!(((c["reagentRender"]) == null)));
});
reagent.impl.component.cached_react_class = (function reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.component.cache_react_class = (function reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.component !== 'undefined') && (typeof reagent.impl.component.as_element !== 'undefined')){
} else {
reagent.impl.component.as_element = null;
}
reagent.impl.component.wrap_render = (function reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__22718 = n;
switch (G__22718) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(res) : reagent.impl.component.as_element.call(null, res));
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_(res))?((function (c,f,_,res){
return (function() { 
var G__22818__delegate = function (args){
var G__22748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(G__22748) : reagent.impl.component.as_element.call(null, G__22748));
};
var G__22818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22819__i = 0, G__22819__a = new Array(arguments.length -  0);
while (G__22819__i < G__22819__a.length) {G__22819__a[G__22819__i] = arguments[G__22819__i + 0]; ++G__22819__i;}
  args = new cljs.core.IndexedSeq(G__22819__a,0,null);
} 
return G__22818__delegate.call(this,args);};
G__22818.cljs$lang$maxFixedArity = 0;
G__22818.cljs$lang$applyTo = (function (arglist__22820){
var args = cljs.core.seq(arglist__22820);
return G__22818__delegate(args);
});
G__22818.cljs$core$IFn$_invoke$arity$variadic = G__22818__delegate;
return G__22818;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__22821 = c;
c = G__22821;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__22751 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__22752 = c;
(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__22752);

try{var ok = [false];
try{var res = reagent.impl.component.wrap_render(c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1((reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0 ? reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0() : reagent.impl.component.comp_name.call(null, )))].join(''));
} else {
}
}
}
}finally {(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__22751);
}});
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function reagent$impl$component$render(){
var c = this;
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return reagent.ratom.run_in_reaction((function (){
return reagent.impl.component.do_render(c);
}),c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__22761 = key;
var G__22761__$1 = (((G__22761 instanceof cljs.core.Keyword))?G__22761.fqn:null);
switch (G__22761__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return (function reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_(reagent.impl.component.state_atom(c),f.call(c,c));
});

break;
case "componentWillReceiveProps":
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops));
});

break;
case "shouldComponentUpdate":
return (function reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__5002__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__5002__auto____$1 = noargv;
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
try{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv);
}catch (e22768){var e = e22768;
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}}
} else {
if(noargv){
return f.call(c,c,reagent.impl.component.get_argv(c),reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});

break;
case "componentWillUpdate":
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops));
});

break;
case "componentDidUpdate":
return (function reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,oldprops));
});

break;
case "componentWillMount":
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidMount":
return (function reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentWillUnmount":
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__22769_22825 = (c["cljsRatom"]);
if((G__22769_22825 == null)){
} else {
reagent.ratom.dispose_BANG_(G__22769_22825);
}

reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidCatch":
return (function reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});

break;
default:
return null;

}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__5000__auto__ = wrap;
if(cljs.core.truth_(and__5000__auto__)){
return f;
} else {
return and__5000__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__5002__auto__ = wrap;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return f;
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.dash_to_camel(k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var renders_22826 = cljs.core.select_keys(fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_22827 = cljs.core.first(cljs.core.vals(renders_22826));
if((cljs.core.count(renders_22826) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count(renders_22826))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_(render_fun_22827)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun_22827], 0))].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__5002__auto__ = render_fun;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return reagent.impl.util.fun_name(render_fun__$1);
}
})());
var name__$1 = (function (){var G__22773 = name;
switch (G__22773) {
case "":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"));

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name__$1));
}),cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__22774 = o;
(G__22774[cljs.core.name(k)] = v);

return G__22774;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

return module$node_modules$create_react_class$index(reagent.impl.component.cljsify(body));
});
reagent.impl.component.fiber_component_path = (function reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__22775 = fiber;
var G__22775__$1 = (((G__22775 == null))?null:(G__22775["type"]));
if((G__22775__$1 == null)){
return null;
} else {
return (G__22775__$1["displayName"]);
}
})();
var parent = (function (){var G__22776 = fiber;
if((G__22776 == null)){
return null;
} else {
return (G__22776["return"]);
}
})();
var path = (function (){var G__22777 = parent;
var G__22777__$1 = (((G__22777 == null))?null:(reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1(G__22777) : reagent.impl.component.fiber_component_path.call(null, G__22777)));
if((G__22777__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22777__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
reagent.impl.component.component_path = (function reagent$impl$component$component_path(c){
var temp__5802__auto__ = (function (){var or__5002__auto__ = (function (){var G__22778 = c;
if((G__22778 == null)){
return null;
} else {
return (G__22778["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__22779 = c;
if((G__22779 == null)){
return null;
} else {
return G__22779._reactInternalFiber;
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var fiber = temp__5802__auto__;
return reagent.impl.component.fiber_component_path(fiber);
} else {
var instance = (function (){var or__5002__auto__ = (function (){var G__22780 = c;
if((G__22780 == null)){
return null;
} else {
return (G__22780["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var G__22781 = c;
if((G__22781 == null)){
return null;
} else {
return G__22781._reactInternalInstance;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return c;
}
}
})();
var elem = (function (){var or__5002__auto__ = (function (){var G__22782 = instance;
if((G__22782 == null)){
return null;
} else {
return (G__22782["_currentElement"]);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__22783 = instance;
if((G__22783 == null)){
return null;
} else {
return G__22783._currentElement;
}
}
})();
var name = (function (){var G__22784 = elem;
var G__22784__$1 = (((G__22784 == null))?null:(G__22784["type"]));
if((G__22784__$1 == null)){
return null;
} else {
return (G__22784__$1["displayName"]);
}
})();
var owner = (function (){var or__5002__auto__ = (function (){var G__22786 = elem;
if((G__22786 == null)){
return null;
} else {
return (G__22786["_owner"]);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__22788 = elem;
if((G__22788 == null)){
return null;
} else {
return G__22788._owner;
}
}
})();
var path = (function (){var G__22789 = owner;
var G__22789__$1 = (((G__22789 == null))?null:(reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1(G__22789) : reagent.impl.component.component_path.call(null, G__22789)));
if((G__22789__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22789__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var c = reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__5002__auto__ = reagent.impl.component.component_path(c);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__22793 = c;
var G__22793__$1 = (((G__22793 == null))?null:G__22793.constructor);
if((G__22793__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name(G__22793__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_(n)))){
return [" (in ",n,")"].join('');
} else {
return "";
}

});
reagent.impl.component.fn_to_class = (function reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((reagent.impl.component.react_class_QMARK_(f)) && ((!(reagent.impl.component.reagent_class_QMARK_(f)))))))))){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = reagent.impl.util.fun_name(f);
if(cljs.core.empty_QMARK_(n)){
return f;
} else {
return n;
}
})()),reagent.impl.component.comp_name()].join(''));
} else {
}
} else {
}

if(reagent.impl.component.reagent_class_QMARK_(f)){
return reagent.impl.component.cache_react_class(f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = reagent.impl.component.create_class(withrender);
return reagent.impl.component.cache_react_class(f,res);
}
});
reagent.impl.component.as_class = (function reagent$impl$component$as_class(tag){
var temp__5806__auto__ = reagent.impl.component.cached_react_class(tag);
if((temp__5806__auto__ == null)){
return reagent.impl.component.fn_to_class(tag);
} else {
var cached_class = temp__5806__auto__;
return cached_class;
}
});
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
if(reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return reagent.impl.component.as_class(comp);
}
});

//# sourceMappingURL=reagent.impl.component.js.map
