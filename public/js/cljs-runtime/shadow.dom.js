goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_30016 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_30016(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_30017 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_30017(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29319 = coll;
var G__29320 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29319,G__29320) : shadow.dom.lazy_native_coll_seq.call(null, G__29319,G__29320));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__29343 = arguments.length;
switch (G__29343) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__29349 = arguments.length;
switch (G__29349) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__29354 = arguments.length;
switch (G__29354) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__29368 = arguments.length;
switch (G__29368) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__29380 = arguments.length;
switch (G__29380) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__29393 = arguments.length;
switch (G__29393) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e29402){if((e29402 instanceof Object)){
var e = e29402;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29402;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__29412 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29413 = null;
var count__29414 = (0);
var i__29415 = (0);
while(true){
if((i__29415 < count__29414)){
var el = chunk__29413.cljs$core$IIndexed$_nth$arity$2(null, i__29415);
var handler_30024__$1 = ((function (seq__29412,chunk__29413,count__29414,i__29415,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__29412,chunk__29413,count__29414,i__29415,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30024__$1);


var G__30025 = seq__29412;
var G__30026 = chunk__29413;
var G__30027 = count__29414;
var G__30028 = (i__29415 + (1));
seq__29412 = G__30025;
chunk__29413 = G__30026;
count__29414 = G__30027;
i__29415 = G__30028;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29412);
if(temp__5804__auto__){
var seq__29412__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29412__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29412__$1);
var G__30029 = cljs.core.chunk_rest(seq__29412__$1);
var G__30030 = c__5525__auto__;
var G__30031 = cljs.core.count(c__5525__auto__);
var G__30032 = (0);
seq__29412 = G__30029;
chunk__29413 = G__30030;
count__29414 = G__30031;
i__29415 = G__30032;
continue;
} else {
var el = cljs.core.first(seq__29412__$1);
var handler_30033__$1 = ((function (seq__29412,chunk__29413,count__29414,i__29415,el,seq__29412__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__29412,chunk__29413,count__29414,i__29415,el,seq__29412__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30033__$1);


var G__30034 = cljs.core.next(seq__29412__$1);
var G__30035 = null;
var G__30036 = (0);
var G__30037 = (0);
seq__29412 = G__30034;
chunk__29413 = G__30035;
count__29414 = G__30036;
i__29415 = G__30037;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__29435 = arguments.length;
switch (G__29435) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__29449 = cljs.core.seq(events);
var chunk__29450 = null;
var count__29451 = (0);
var i__29452 = (0);
while(true){
if((i__29452 < count__29451)){
var vec__29467 = chunk__29450.cljs$core$IIndexed$_nth$arity$2(null, i__29452);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29467,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30039 = seq__29449;
var G__30040 = chunk__29450;
var G__30041 = count__29451;
var G__30042 = (i__29452 + (1));
seq__29449 = G__30039;
chunk__29450 = G__30040;
count__29451 = G__30041;
i__29452 = G__30042;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29449);
if(temp__5804__auto__){
var seq__29449__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29449__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29449__$1);
var G__30043 = cljs.core.chunk_rest(seq__29449__$1);
var G__30044 = c__5525__auto__;
var G__30045 = cljs.core.count(c__5525__auto__);
var G__30046 = (0);
seq__29449 = G__30043;
chunk__29450 = G__30044;
count__29451 = G__30045;
i__29452 = G__30046;
continue;
} else {
var vec__29473 = cljs.core.first(seq__29449__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29473,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30047 = cljs.core.next(seq__29449__$1);
var G__30048 = null;
var G__30049 = (0);
var G__30050 = (0);
seq__29449 = G__30047;
chunk__29450 = G__30048;
count__29451 = G__30049;
i__29452 = G__30050;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__29477 = cljs.core.seq(styles);
var chunk__29478 = null;
var count__29479 = (0);
var i__29480 = (0);
while(true){
if((i__29480 < count__29479)){
var vec__29493 = chunk__29478.cljs$core$IIndexed$_nth$arity$2(null, i__29480);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29493,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29493,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30051 = seq__29477;
var G__30052 = chunk__29478;
var G__30053 = count__29479;
var G__30054 = (i__29480 + (1));
seq__29477 = G__30051;
chunk__29478 = G__30052;
count__29479 = G__30053;
i__29480 = G__30054;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29477);
if(temp__5804__auto__){
var seq__29477__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29477__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29477__$1);
var G__30055 = cljs.core.chunk_rest(seq__29477__$1);
var G__30056 = c__5525__auto__;
var G__30057 = cljs.core.count(c__5525__auto__);
var G__30058 = (0);
seq__29477 = G__30055;
chunk__29478 = G__30056;
count__29479 = G__30057;
i__29480 = G__30058;
continue;
} else {
var vec__29502 = cljs.core.first(seq__29477__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29502,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29502,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30059 = cljs.core.next(seq__29477__$1);
var G__30060 = null;
var G__30061 = (0);
var G__30062 = (0);
seq__29477 = G__30059;
chunk__29478 = G__30060;
count__29479 = G__30061;
i__29480 = G__30062;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__29515_30063 = key;
var G__29515_30064__$1 = (((G__29515_30063 instanceof cljs.core.Keyword))?G__29515_30063.fqn:null);
switch (G__29515_30064__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_30066 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_30066,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_30066,"aria-");
}
})())){
el.setAttribute(ks_30066,value);
} else {
(el[ks_30066] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29578){
var map__29579 = p__29578;
var map__29579__$1 = cljs.core.__destructure_map(map__29579);
var props = map__29579__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29579__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29581 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29581,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29581,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29581,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29585 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29585,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29585;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29588 = arguments.length;
switch (G__29588) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29595){
var vec__29598 = p__29595;
var seq__29599 = cljs.core.seq(vec__29598);
var first__29600 = cljs.core.first(seq__29599);
var seq__29599__$1 = cljs.core.next(seq__29599);
var nn = first__29600;
var first__29600__$1 = cljs.core.first(seq__29599__$1);
var seq__29599__$2 = cljs.core.next(seq__29599__$1);
var np = first__29600__$1;
var nc = seq__29599__$2;
var node = vec__29598;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29602 = nn;
var G__29603 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29602,G__29603) : create_fn.call(null, G__29602,G__29603));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29604 = nn;
var G__29605 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29604,G__29605) : create_fn.call(null, G__29604,G__29605));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29606 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29606,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29606,(1),null);
var seq__29609_30068 = cljs.core.seq(node_children);
var chunk__29610_30069 = null;
var count__29611_30070 = (0);
var i__29612_30071 = (0);
while(true){
if((i__29612_30071 < count__29611_30070)){
var child_struct_30072 = chunk__29610_30069.cljs$core$IIndexed$_nth$arity$2(null, i__29612_30071);
var children_30073 = shadow.dom.dom_node(child_struct_30072);
if(cljs.core.seq_QMARK_(children_30073)){
var seq__29663_30074 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30073));
var chunk__29665_30075 = null;
var count__29666_30076 = (0);
var i__29667_30077 = (0);
while(true){
if((i__29667_30077 < count__29666_30076)){
var child_30078 = chunk__29665_30075.cljs$core$IIndexed$_nth$arity$2(null, i__29667_30077);
if(cljs.core.truth_(child_30078)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30078);


var G__30079 = seq__29663_30074;
var G__30080 = chunk__29665_30075;
var G__30081 = count__29666_30076;
var G__30082 = (i__29667_30077 + (1));
seq__29663_30074 = G__30079;
chunk__29665_30075 = G__30080;
count__29666_30076 = G__30081;
i__29667_30077 = G__30082;
continue;
} else {
var G__30083 = seq__29663_30074;
var G__30084 = chunk__29665_30075;
var G__30085 = count__29666_30076;
var G__30086 = (i__29667_30077 + (1));
seq__29663_30074 = G__30083;
chunk__29665_30075 = G__30084;
count__29666_30076 = G__30085;
i__29667_30077 = G__30086;
continue;
}
} else {
var temp__5804__auto___30087 = cljs.core.seq(seq__29663_30074);
if(temp__5804__auto___30087){
var seq__29663_30088__$1 = temp__5804__auto___30087;
if(cljs.core.chunked_seq_QMARK_(seq__29663_30088__$1)){
var c__5525__auto___30089 = cljs.core.chunk_first(seq__29663_30088__$1);
var G__30090 = cljs.core.chunk_rest(seq__29663_30088__$1);
var G__30091 = c__5525__auto___30089;
var G__30092 = cljs.core.count(c__5525__auto___30089);
var G__30093 = (0);
seq__29663_30074 = G__30090;
chunk__29665_30075 = G__30091;
count__29666_30076 = G__30092;
i__29667_30077 = G__30093;
continue;
} else {
var child_30094 = cljs.core.first(seq__29663_30088__$1);
if(cljs.core.truth_(child_30094)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30094);


var G__30095 = cljs.core.next(seq__29663_30088__$1);
var G__30096 = null;
var G__30097 = (0);
var G__30098 = (0);
seq__29663_30074 = G__30095;
chunk__29665_30075 = G__30096;
count__29666_30076 = G__30097;
i__29667_30077 = G__30098;
continue;
} else {
var G__30099 = cljs.core.next(seq__29663_30088__$1);
var G__30100 = null;
var G__30101 = (0);
var G__30102 = (0);
seq__29663_30074 = G__30099;
chunk__29665_30075 = G__30100;
count__29666_30076 = G__30101;
i__29667_30077 = G__30102;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30073);
}


var G__30103 = seq__29609_30068;
var G__30104 = chunk__29610_30069;
var G__30105 = count__29611_30070;
var G__30106 = (i__29612_30071 + (1));
seq__29609_30068 = G__30103;
chunk__29610_30069 = G__30104;
count__29611_30070 = G__30105;
i__29612_30071 = G__30106;
continue;
} else {
var temp__5804__auto___30107 = cljs.core.seq(seq__29609_30068);
if(temp__5804__auto___30107){
var seq__29609_30109__$1 = temp__5804__auto___30107;
if(cljs.core.chunked_seq_QMARK_(seq__29609_30109__$1)){
var c__5525__auto___30110 = cljs.core.chunk_first(seq__29609_30109__$1);
var G__30111 = cljs.core.chunk_rest(seq__29609_30109__$1);
var G__30112 = c__5525__auto___30110;
var G__30113 = cljs.core.count(c__5525__auto___30110);
var G__30114 = (0);
seq__29609_30068 = G__30111;
chunk__29610_30069 = G__30112;
count__29611_30070 = G__30113;
i__29612_30071 = G__30114;
continue;
} else {
var child_struct_30115 = cljs.core.first(seq__29609_30109__$1);
var children_30117 = shadow.dom.dom_node(child_struct_30115);
if(cljs.core.seq_QMARK_(children_30117)){
var seq__29672_30118 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30117));
var chunk__29674_30119 = null;
var count__29675_30120 = (0);
var i__29676_30121 = (0);
while(true){
if((i__29676_30121 < count__29675_30120)){
var child_30122 = chunk__29674_30119.cljs$core$IIndexed$_nth$arity$2(null, i__29676_30121);
if(cljs.core.truth_(child_30122)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30122);


var G__30123 = seq__29672_30118;
var G__30124 = chunk__29674_30119;
var G__30125 = count__29675_30120;
var G__30126 = (i__29676_30121 + (1));
seq__29672_30118 = G__30123;
chunk__29674_30119 = G__30124;
count__29675_30120 = G__30125;
i__29676_30121 = G__30126;
continue;
} else {
var G__30127 = seq__29672_30118;
var G__30128 = chunk__29674_30119;
var G__30129 = count__29675_30120;
var G__30130 = (i__29676_30121 + (1));
seq__29672_30118 = G__30127;
chunk__29674_30119 = G__30128;
count__29675_30120 = G__30129;
i__29676_30121 = G__30130;
continue;
}
} else {
var temp__5804__auto___30131__$1 = cljs.core.seq(seq__29672_30118);
if(temp__5804__auto___30131__$1){
var seq__29672_30132__$1 = temp__5804__auto___30131__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29672_30132__$1)){
var c__5525__auto___30133 = cljs.core.chunk_first(seq__29672_30132__$1);
var G__30134 = cljs.core.chunk_rest(seq__29672_30132__$1);
var G__30135 = c__5525__auto___30133;
var G__30136 = cljs.core.count(c__5525__auto___30133);
var G__30137 = (0);
seq__29672_30118 = G__30134;
chunk__29674_30119 = G__30135;
count__29675_30120 = G__30136;
i__29676_30121 = G__30137;
continue;
} else {
var child_30138 = cljs.core.first(seq__29672_30132__$1);
if(cljs.core.truth_(child_30138)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30138);


var G__30139 = cljs.core.next(seq__29672_30132__$1);
var G__30140 = null;
var G__30141 = (0);
var G__30142 = (0);
seq__29672_30118 = G__30139;
chunk__29674_30119 = G__30140;
count__29675_30120 = G__30141;
i__29676_30121 = G__30142;
continue;
} else {
var G__30143 = cljs.core.next(seq__29672_30132__$1);
var G__30144 = null;
var G__30145 = (0);
var G__30146 = (0);
seq__29672_30118 = G__30143;
chunk__29674_30119 = G__30144;
count__29675_30120 = G__30145;
i__29676_30121 = G__30146;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30117);
}


var G__30147 = cljs.core.next(seq__29609_30109__$1);
var G__30148 = null;
var G__30149 = (0);
var G__30150 = (0);
seq__29609_30068 = G__30147;
chunk__29610_30069 = G__30148;
count__29611_30070 = G__30149;
i__29612_30071 = G__30150;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__29708 = cljs.core.seq(node);
var chunk__29709 = null;
var count__29710 = (0);
var i__29711 = (0);
while(true){
if((i__29711 < count__29710)){
var n = chunk__29709.cljs$core$IIndexed$_nth$arity$2(null, i__29711);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__30151 = seq__29708;
var G__30152 = chunk__29709;
var G__30153 = count__29710;
var G__30154 = (i__29711 + (1));
seq__29708 = G__30151;
chunk__29709 = G__30152;
count__29710 = G__30153;
i__29711 = G__30154;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29708);
if(temp__5804__auto__){
var seq__29708__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29708__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29708__$1);
var G__30155 = cljs.core.chunk_rest(seq__29708__$1);
var G__30156 = c__5525__auto__;
var G__30157 = cljs.core.count(c__5525__auto__);
var G__30158 = (0);
seq__29708 = G__30155;
chunk__29709 = G__30156;
count__29710 = G__30157;
i__29711 = G__30158;
continue;
} else {
var n = cljs.core.first(seq__29708__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__30159 = cljs.core.next(seq__29708__$1);
var G__30160 = null;
var G__30161 = (0);
var G__30162 = (0);
seq__29708 = G__30159;
chunk__29709 = G__30160;
count__29710 = G__30161;
i__29711 = G__30162;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__29723 = arguments.length;
switch (G__29723) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__29732 = arguments.length;
switch (G__29732) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__29745 = arguments.length;
switch (G__29745) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30169 = arguments.length;
var i__5727__auto___30170 = (0);
while(true){
if((i__5727__auto___30170 < len__5726__auto___30169)){
args__5732__auto__.push((arguments[i__5727__auto___30170]));

var G__30171 = (i__5727__auto___30170 + (1));
i__5727__auto___30170 = G__30171;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__29766_30172 = cljs.core.seq(nodes);
var chunk__29767_30173 = null;
var count__29768_30174 = (0);
var i__29769_30175 = (0);
while(true){
if((i__29769_30175 < count__29768_30174)){
var node_30176 = chunk__29767_30173.cljs$core$IIndexed$_nth$arity$2(null, i__29769_30175);
fragment.appendChild(shadow.dom._to_dom(node_30176));


var G__30177 = seq__29766_30172;
var G__30178 = chunk__29767_30173;
var G__30179 = count__29768_30174;
var G__30180 = (i__29769_30175 + (1));
seq__29766_30172 = G__30177;
chunk__29767_30173 = G__30178;
count__29768_30174 = G__30179;
i__29769_30175 = G__30180;
continue;
} else {
var temp__5804__auto___30181 = cljs.core.seq(seq__29766_30172);
if(temp__5804__auto___30181){
var seq__29766_30182__$1 = temp__5804__auto___30181;
if(cljs.core.chunked_seq_QMARK_(seq__29766_30182__$1)){
var c__5525__auto___30183 = cljs.core.chunk_first(seq__29766_30182__$1);
var G__30184 = cljs.core.chunk_rest(seq__29766_30182__$1);
var G__30185 = c__5525__auto___30183;
var G__30186 = cljs.core.count(c__5525__auto___30183);
var G__30187 = (0);
seq__29766_30172 = G__30184;
chunk__29767_30173 = G__30185;
count__29768_30174 = G__30186;
i__29769_30175 = G__30187;
continue;
} else {
var node_30188 = cljs.core.first(seq__29766_30182__$1);
fragment.appendChild(shadow.dom._to_dom(node_30188));


var G__30189 = cljs.core.next(seq__29766_30182__$1);
var G__30190 = null;
var G__30191 = (0);
var G__30192 = (0);
seq__29766_30172 = G__30189;
chunk__29767_30173 = G__30190;
count__29768_30174 = G__30191;
i__29769_30175 = G__30192;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29760){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29760));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29779_30193 = cljs.core.seq(scripts);
var chunk__29780_30194 = null;
var count__29781_30195 = (0);
var i__29782_30196 = (0);
while(true){
if((i__29782_30196 < count__29781_30195)){
var vec__29789_30197 = chunk__29780_30194.cljs$core$IIndexed$_nth$arity$2(null, i__29782_30196);
var script_tag_30198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29789_30197,(0),null);
var script_body_30199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29789_30197,(1),null);
eval(script_body_30199);


var G__30200 = seq__29779_30193;
var G__30201 = chunk__29780_30194;
var G__30202 = count__29781_30195;
var G__30203 = (i__29782_30196 + (1));
seq__29779_30193 = G__30200;
chunk__29780_30194 = G__30201;
count__29781_30195 = G__30202;
i__29782_30196 = G__30203;
continue;
} else {
var temp__5804__auto___30204 = cljs.core.seq(seq__29779_30193);
if(temp__5804__auto___30204){
var seq__29779_30205__$1 = temp__5804__auto___30204;
if(cljs.core.chunked_seq_QMARK_(seq__29779_30205__$1)){
var c__5525__auto___30206 = cljs.core.chunk_first(seq__29779_30205__$1);
var G__30207 = cljs.core.chunk_rest(seq__29779_30205__$1);
var G__30208 = c__5525__auto___30206;
var G__30209 = cljs.core.count(c__5525__auto___30206);
var G__30210 = (0);
seq__29779_30193 = G__30207;
chunk__29780_30194 = G__30208;
count__29781_30195 = G__30209;
i__29782_30196 = G__30210;
continue;
} else {
var vec__29792_30211 = cljs.core.first(seq__29779_30205__$1);
var script_tag_30212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29792_30211,(0),null);
var script_body_30213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29792_30211,(1),null);
eval(script_body_30213);


var G__30214 = cljs.core.next(seq__29779_30205__$1);
var G__30215 = null;
var G__30216 = (0);
var G__30217 = (0);
seq__29779_30193 = G__30214;
chunk__29780_30194 = G__30215;
count__29781_30195 = G__30216;
i__29782_30196 = G__30217;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29795){
var vec__29796 = p__29795;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__29811 = arguments.length;
switch (G__29811) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__29827 = cljs.core.seq(style_keys);
var chunk__29828 = null;
var count__29829 = (0);
var i__29830 = (0);
while(true){
if((i__29830 < count__29829)){
var it = chunk__29828.cljs$core$IIndexed$_nth$arity$2(null, i__29830);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30222 = seq__29827;
var G__30223 = chunk__29828;
var G__30224 = count__29829;
var G__30225 = (i__29830 + (1));
seq__29827 = G__30222;
chunk__29828 = G__30223;
count__29829 = G__30224;
i__29830 = G__30225;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29827);
if(temp__5804__auto__){
var seq__29827__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29827__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29827__$1);
var G__30226 = cljs.core.chunk_rest(seq__29827__$1);
var G__30227 = c__5525__auto__;
var G__30228 = cljs.core.count(c__5525__auto__);
var G__30229 = (0);
seq__29827 = G__30226;
chunk__29828 = G__30227;
count__29829 = G__30228;
i__29830 = G__30229;
continue;
} else {
var it = cljs.core.first(seq__29827__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30231 = cljs.core.next(seq__29827__$1);
var G__30232 = null;
var G__30233 = (0);
var G__30234 = (0);
seq__29827 = G__30231;
chunk__29828 = G__30232;
count__29829 = G__30233;
i__29830 = G__30234;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k29844,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__29854 = k29844;
var G__29854__$1 = (((G__29854 instanceof cljs.core.Keyword))?G__29854.fqn:null);
switch (G__29854__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29844,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__29857){
var vec__29859 = p__29857;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29843){
var self__ = this;
var G__29843__$1 = this;
return (new cljs.core.RecordIter((0),G__29843__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29845,other29846){
var self__ = this;
var this29845__$1 = this;
return (((!((other29846 == null)))) && ((((this29845__$1.constructor === other29846.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29845__$1.x,other29846.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29845__$1.y,other29846.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29845__$1.__extmap,other29846.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k29844){
var self__ = this;
var this__5307__auto____$1 = this;
var G__29883 = k29844;
var G__29883__$1 = (((G__29883 instanceof cljs.core.Keyword))?G__29883.fqn:null);
switch (G__29883__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29844);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__29843){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__29886 = cljs.core.keyword_identical_QMARK_;
var expr__29887 = k__5309__auto__;
if(cljs.core.truth_((pred__29886.cljs$core$IFn$_invoke$arity$2 ? pred__29886.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29887) : pred__29886.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__29887)))){
return (new shadow.dom.Coordinate(G__29843,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29886.cljs$core$IFn$_invoke$arity$2 ? pred__29886.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29887) : pred__29886.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__29887)))){
return (new shadow.dom.Coordinate(self__.x,G__29843,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__29843),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__29843){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29843,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29849){
var extmap__5342__auto__ = (function (){var G__29900 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29849,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29849)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29900);
} else {
return G__29900;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29849),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29849),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k29911,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__29924 = k29911;
var G__29924__$1 = (((G__29924 instanceof cljs.core.Keyword))?G__29924.fqn:null);
switch (G__29924__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29911,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__29928){
var vec__29929 = p__29928;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29929,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29929,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29910){
var self__ = this;
var G__29910__$1 = this;
return (new cljs.core.RecordIter((0),G__29910__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29912,other29913){
var self__ = this;
var this29912__$1 = this;
return (((!((other29913 == null)))) && ((((this29912__$1.constructor === other29913.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29912__$1.w,other29913.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29912__$1.h,other29913.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29912__$1.__extmap,other29913.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k29911){
var self__ = this;
var this__5307__auto____$1 = this;
var G__29932 = k29911;
var G__29932__$1 = (((G__29932 instanceof cljs.core.Keyword))?G__29932.fqn:null);
switch (G__29932__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29911);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__29910){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__29933 = cljs.core.keyword_identical_QMARK_;
var expr__29934 = k__5309__auto__;
if(cljs.core.truth_((pred__29933.cljs$core$IFn$_invoke$arity$2 ? pred__29933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29934) : pred__29933.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__29934)))){
return (new shadow.dom.Size(G__29910,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29933.cljs$core$IFn$_invoke$arity$2 ? pred__29933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29934) : pred__29933.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__29934)))){
return (new shadow.dom.Size(self__.w,G__29910,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__29910),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__29910){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29910,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29916){
var extmap__5342__auto__ = (function (){var G__29936 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29916,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29916)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29936);
} else {
return G__29936;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29916),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29916),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__30255 = (i + (1));
var G__30256 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30255;
ret = G__30256;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29941){
var vec__29942 = p__29941;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29942,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29942,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29946 = arguments.length;
switch (G__29946) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__30261 = ps;
var G__30262 = (i + (1));
el__$1 = G__30261;
i = G__30262;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__29947 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29950_30263 = cljs.core.seq(props);
var chunk__29951_30264 = null;
var count__29952_30265 = (0);
var i__29953_30267 = (0);
while(true){
if((i__29953_30267 < count__29952_30265)){
var vec__29960_30270 = chunk__29951_30264.cljs$core$IIndexed$_nth$arity$2(null, i__29953_30267);
var k_30271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29960_30270,(0),null);
var v_30272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29960_30270,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_30271);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30271),v_30272);


var G__30273 = seq__29950_30263;
var G__30274 = chunk__29951_30264;
var G__30275 = count__29952_30265;
var G__30276 = (i__29953_30267 + (1));
seq__29950_30263 = G__30273;
chunk__29951_30264 = G__30274;
count__29952_30265 = G__30275;
i__29953_30267 = G__30276;
continue;
} else {
var temp__5804__auto___30277 = cljs.core.seq(seq__29950_30263);
if(temp__5804__auto___30277){
var seq__29950_30278__$1 = temp__5804__auto___30277;
if(cljs.core.chunked_seq_QMARK_(seq__29950_30278__$1)){
var c__5525__auto___30279 = cljs.core.chunk_first(seq__29950_30278__$1);
var G__30280 = cljs.core.chunk_rest(seq__29950_30278__$1);
var G__30281 = c__5525__auto___30279;
var G__30282 = cljs.core.count(c__5525__auto___30279);
var G__30283 = (0);
seq__29950_30263 = G__30280;
chunk__29951_30264 = G__30281;
count__29952_30265 = G__30282;
i__29953_30267 = G__30283;
continue;
} else {
var vec__29963_30284 = cljs.core.first(seq__29950_30278__$1);
var k_30285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29963_30284,(0),null);
var v_30286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29963_30284,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_30285);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30285),v_30286);


var G__30287 = cljs.core.next(seq__29950_30278__$1);
var G__30288 = null;
var G__30289 = (0);
var G__30290 = (0);
seq__29950_30263 = G__30287;
chunk__29951_30264 = G__30288;
count__29952_30265 = G__30289;
i__29953_30267 = G__30290;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29967 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29967,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29967,(1),null);
var seq__29970_30291 = cljs.core.seq(node_children);
var chunk__29972_30292 = null;
var count__29973_30293 = (0);
var i__29974_30294 = (0);
while(true){
if((i__29974_30294 < count__29973_30293)){
var child_struct_30295 = chunk__29972_30292.cljs$core$IIndexed$_nth$arity$2(null, i__29974_30294);
if((!((child_struct_30295 == null)))){
if(typeof child_struct_30295 === 'string'){
var text_30296 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30296),child_struct_30295].join(''));
} else {
var children_30297 = shadow.dom.svg_node(child_struct_30295);
if(cljs.core.seq_QMARK_(children_30297)){
var seq__29988_30298 = cljs.core.seq(children_30297);
var chunk__29990_30299 = null;
var count__29991_30300 = (0);
var i__29992_30301 = (0);
while(true){
if((i__29992_30301 < count__29991_30300)){
var child_30302 = chunk__29990_30299.cljs$core$IIndexed$_nth$arity$2(null, i__29992_30301);
if(cljs.core.truth_(child_30302)){
node.appendChild(child_30302);


var G__30304 = seq__29988_30298;
var G__30305 = chunk__29990_30299;
var G__30306 = count__29991_30300;
var G__30307 = (i__29992_30301 + (1));
seq__29988_30298 = G__30304;
chunk__29990_30299 = G__30305;
count__29991_30300 = G__30306;
i__29992_30301 = G__30307;
continue;
} else {
var G__30310 = seq__29988_30298;
var G__30311 = chunk__29990_30299;
var G__30312 = count__29991_30300;
var G__30313 = (i__29992_30301 + (1));
seq__29988_30298 = G__30310;
chunk__29990_30299 = G__30311;
count__29991_30300 = G__30312;
i__29992_30301 = G__30313;
continue;
}
} else {
var temp__5804__auto___30314 = cljs.core.seq(seq__29988_30298);
if(temp__5804__auto___30314){
var seq__29988_30315__$1 = temp__5804__auto___30314;
if(cljs.core.chunked_seq_QMARK_(seq__29988_30315__$1)){
var c__5525__auto___30316 = cljs.core.chunk_first(seq__29988_30315__$1);
var G__30317 = cljs.core.chunk_rest(seq__29988_30315__$1);
var G__30318 = c__5525__auto___30316;
var G__30319 = cljs.core.count(c__5525__auto___30316);
var G__30320 = (0);
seq__29988_30298 = G__30317;
chunk__29990_30299 = G__30318;
count__29991_30300 = G__30319;
i__29992_30301 = G__30320;
continue;
} else {
var child_30321 = cljs.core.first(seq__29988_30315__$1);
if(cljs.core.truth_(child_30321)){
node.appendChild(child_30321);


var G__30322 = cljs.core.next(seq__29988_30315__$1);
var G__30323 = null;
var G__30324 = (0);
var G__30325 = (0);
seq__29988_30298 = G__30322;
chunk__29990_30299 = G__30323;
count__29991_30300 = G__30324;
i__29992_30301 = G__30325;
continue;
} else {
var G__30326 = cljs.core.next(seq__29988_30315__$1);
var G__30327 = null;
var G__30328 = (0);
var G__30329 = (0);
seq__29988_30298 = G__30326;
chunk__29990_30299 = G__30327;
count__29991_30300 = G__30328;
i__29992_30301 = G__30329;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30297);
}
}


var G__30330 = seq__29970_30291;
var G__30331 = chunk__29972_30292;
var G__30332 = count__29973_30293;
var G__30333 = (i__29974_30294 + (1));
seq__29970_30291 = G__30330;
chunk__29972_30292 = G__30331;
count__29973_30293 = G__30332;
i__29974_30294 = G__30333;
continue;
} else {
var G__30334 = seq__29970_30291;
var G__30335 = chunk__29972_30292;
var G__30336 = count__29973_30293;
var G__30337 = (i__29974_30294 + (1));
seq__29970_30291 = G__30334;
chunk__29972_30292 = G__30335;
count__29973_30293 = G__30336;
i__29974_30294 = G__30337;
continue;
}
} else {
var temp__5804__auto___30338 = cljs.core.seq(seq__29970_30291);
if(temp__5804__auto___30338){
var seq__29970_30339__$1 = temp__5804__auto___30338;
if(cljs.core.chunked_seq_QMARK_(seq__29970_30339__$1)){
var c__5525__auto___30340 = cljs.core.chunk_first(seq__29970_30339__$1);
var G__30341 = cljs.core.chunk_rest(seq__29970_30339__$1);
var G__30342 = c__5525__auto___30340;
var G__30343 = cljs.core.count(c__5525__auto___30340);
var G__30344 = (0);
seq__29970_30291 = G__30341;
chunk__29972_30292 = G__30342;
count__29973_30293 = G__30343;
i__29974_30294 = G__30344;
continue;
} else {
var child_struct_30345 = cljs.core.first(seq__29970_30339__$1);
if((!((child_struct_30345 == null)))){
if(typeof child_struct_30345 === 'string'){
var text_30346 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30346),child_struct_30345].join(''));
} else {
var children_30347 = shadow.dom.svg_node(child_struct_30345);
if(cljs.core.seq_QMARK_(children_30347)){
var seq__29994_30348 = cljs.core.seq(children_30347);
var chunk__29996_30349 = null;
var count__29997_30350 = (0);
var i__29998_30351 = (0);
while(true){
if((i__29998_30351 < count__29997_30350)){
var child_30352 = chunk__29996_30349.cljs$core$IIndexed$_nth$arity$2(null, i__29998_30351);
if(cljs.core.truth_(child_30352)){
node.appendChild(child_30352);


var G__30353 = seq__29994_30348;
var G__30354 = chunk__29996_30349;
var G__30355 = count__29997_30350;
var G__30356 = (i__29998_30351 + (1));
seq__29994_30348 = G__30353;
chunk__29996_30349 = G__30354;
count__29997_30350 = G__30355;
i__29998_30351 = G__30356;
continue;
} else {
var G__30357 = seq__29994_30348;
var G__30358 = chunk__29996_30349;
var G__30359 = count__29997_30350;
var G__30360 = (i__29998_30351 + (1));
seq__29994_30348 = G__30357;
chunk__29996_30349 = G__30358;
count__29997_30350 = G__30359;
i__29998_30351 = G__30360;
continue;
}
} else {
var temp__5804__auto___30361__$1 = cljs.core.seq(seq__29994_30348);
if(temp__5804__auto___30361__$1){
var seq__29994_30362__$1 = temp__5804__auto___30361__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29994_30362__$1)){
var c__5525__auto___30363 = cljs.core.chunk_first(seq__29994_30362__$1);
var G__30364 = cljs.core.chunk_rest(seq__29994_30362__$1);
var G__30365 = c__5525__auto___30363;
var G__30366 = cljs.core.count(c__5525__auto___30363);
var G__30367 = (0);
seq__29994_30348 = G__30364;
chunk__29996_30349 = G__30365;
count__29997_30350 = G__30366;
i__29998_30351 = G__30367;
continue;
} else {
var child_30368 = cljs.core.first(seq__29994_30362__$1);
if(cljs.core.truth_(child_30368)){
node.appendChild(child_30368);


var G__30369 = cljs.core.next(seq__29994_30362__$1);
var G__30370 = null;
var G__30371 = (0);
var G__30372 = (0);
seq__29994_30348 = G__30369;
chunk__29996_30349 = G__30370;
count__29997_30350 = G__30371;
i__29998_30351 = G__30372;
continue;
} else {
var G__30373 = cljs.core.next(seq__29994_30362__$1);
var G__30374 = null;
var G__30375 = (0);
var G__30376 = (0);
seq__29994_30348 = G__30373;
chunk__29996_30349 = G__30374;
count__29997_30350 = G__30375;
i__29998_30351 = G__30376;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30347);
}
}


var G__30377 = cljs.core.next(seq__29970_30339__$1);
var G__30378 = null;
var G__30379 = (0);
var G__30380 = (0);
seq__29970_30291 = G__30377;
chunk__29972_30292 = G__30378;
count__29973_30293 = G__30379;
i__29974_30294 = G__30380;
continue;
} else {
var G__30381 = cljs.core.next(seq__29970_30339__$1);
var G__30382 = null;
var G__30383 = (0);
var G__30384 = (0);
seq__29970_30291 = G__30381;
chunk__29972_30292 = G__30382;
count__29973_30293 = G__30383;
i__29974_30294 = G__30384;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30385 = arguments.length;
var i__5727__auto___30386 = (0);
while(true){
if((i__5727__auto___30386 < len__5726__auto___30385)){
args__5732__auto__.push((arguments[i__5727__auto___30386]));

var G__30387 = (i__5727__auto___30386 + (1));
i__5727__auto___30386 = G__30387;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30000){
var G__30001 = cljs.core.first(seq30000);
var seq30000__$1 = cljs.core.next(seq30000);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30001,seq30000__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__30003 = arguments.length;
switch (G__30003) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__27119__auto___30391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27120__auto__ = (function (){var switch__26855__auto__ = (function (state_30008){
var state_val_30009 = (state_30008[(1)]);
if((state_val_30009 === (1))){
var state_30008__$1 = state_30008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30008__$1,(2),once_or_cleanup);
} else {
if((state_val_30009 === (2))){
var inst_30005 = (state_30008[(2)]);
var inst_30006 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_30008__$1 = (function (){var statearr_30010 = state_30008;
(statearr_30010[(7)] = inst_30005);

return statearr_30010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30008__$1,inst_30006);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__26856__auto__ = null;
var shadow$dom$state_machine__26856__auto____0 = (function (){
var statearr_30011 = [null,null,null,null,null,null,null,null];
(statearr_30011[(0)] = shadow$dom$state_machine__26856__auto__);

(statearr_30011[(1)] = (1));

return statearr_30011;
});
var shadow$dom$state_machine__26856__auto____1 = (function (state_30008){
while(true){
var ret_value__26857__auto__ = (function (){try{while(true){
var result__26858__auto__ = switch__26855__auto__(state_30008);
if(cljs.core.keyword_identical_QMARK_(result__26858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26858__auto__;
}
break;
}
}catch (e30012){var ex__26859__auto__ = e30012;
var statearr_30013_30394 = state_30008;
(statearr_30013_30394[(2)] = ex__26859__auto__);


if(cljs.core.seq((state_30008[(4)]))){
var statearr_30014_30395 = state_30008;
(statearr_30014_30395[(1)] = cljs.core.first((state_30008[(4)])));

} else {
throw ex__26859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30396 = state_30008;
state_30008 = G__30396;
continue;
} else {
return ret_value__26857__auto__;
}
break;
}
});
shadow$dom$state_machine__26856__auto__ = function(state_30008){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26856__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26856__auto____1.call(this,state_30008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26856__auto____0;
shadow$dom$state_machine__26856__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26856__auto____1;
return shadow$dom$state_machine__26856__auto__;
})()
})();
var state__27121__auto__ = (function (){var statearr_30015 = f__27120__auto__();
(statearr_30015[(6)] = c__27119__auto___30391);

return statearr_30015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27121__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
