goog.provide('mranderson048.re_frame.v0v10v2.re_frame.router');
mranderson048.re_frame.v0v10v2.re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
var G__19173 = (function (){
return (mranderson048.re_frame.v0v10v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : mranderson048.re_frame.v0v10v2.re_frame.interop.next_tick.call(null, f));
});
return (mranderson048.re_frame.v0v10v2.re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__19173) : mranderson048.re_frame.v0v10v2.re_frame.interop.after_render.call(null, G__19173));
}),new cljs.core.Keyword(null,"yield","yield",177875009),mranderson048.re_frame.v0v10v2.re_frame.interop.next_tick], null);

/**
 * @interface
 */
mranderson048.re_frame.v0v10v2.re_frame.router.IEventQueue = function(){};

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$push$dyn_19338 = (function (this$,event){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router.push[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5351__auto__.call(null, this$,event));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router.push["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5349__auto__.call(null, this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router.push = (function mranderson048$re_frame$v0v10v2$re_frame$router$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$push$dyn_19338(this$,event);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$dyn_19339 = (function (this$,id,callack){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router.add_post_event_callback[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__5351__auto__.call(null, this$,id,callack));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router.add_post_event_callback["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__5349__auto__.call(null, this$,id,callack));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router.add_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$router$add_post_event_callback(this$,id,callack){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$dyn_19339(this$,id,callack);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$dyn_19343 = (function (this$,f){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router.remove_post_event_callback[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5351__auto__.call(null, this$,f));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router.remove_post_event_callback["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5349__auto__.call(null, this$,f));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router.remove_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$router$remove_post_event_callback(this$,f){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$dyn_19343(this$,f);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$dyn_19344 = (function (this$,trigger,arg){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._fsm_trigger[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5351__auto__.call(null, this$,trigger,arg));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._fsm_trigger["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5349__auto__.call(null, this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router._fsm_trigger = (function mranderson048$re_frame$v0v10v2$re_frame$router$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$dyn_19344(this$,trigger,arg);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$dyn_19345 = (function (this$,event){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._add_event[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5351__auto__.call(null, this$,event));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._add_event["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5349__auto__.call(null, this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router._add_event = (function mranderson048$re_frame$v0v10v2$re_frame$router$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$dyn_19345(this$,event);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_19346 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue = (function mranderson048$re_frame$v0v10v2$re_frame$router$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_19346(this$);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$dyn_19347 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._run_next_tick[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._run_next_tick["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router._run_next_tick = (function mranderson048$re_frame$v0v10v2$re_frame$router$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$dyn_19347(this$);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$dyn_19348 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._run_queue[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._run_queue["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router._run_queue = (function mranderson048$re_frame$v0v10v2$re_frame$router$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$dyn_19348(this$);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$dyn_19349 = (function (this$,ex){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._exception[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5351__auto__.call(null, this$,ex));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._exception["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5349__auto__.call(null, this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router._exception = (function mranderson048$re_frame$v0v10v2$re_frame$router$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$dyn_19349(this$,ex);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$dyn_19357 = (function (this$,later_fn){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._pause[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5351__auto__.call(null, this$,later_fn));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._pause["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5349__auto__.call(null, this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router._pause = (function mranderson048$re_frame$v0v10v2$re_frame$router$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$dyn_19357(this$,later_fn);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$dyn_19372 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._resume[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._resume["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router._resume = (function mranderson048$re_frame$v0v10v2$re_frame$router$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$dyn_19372(this$);
}
});

var mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_19377 = (function (this$,event){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5351__auto__.call(null, this$,event));
} else {
var m__5349__auto__ = (mranderson048.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5349__auto__.call(null, this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
});
mranderson048.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks = (function mranderson048$re_frame$v0v10v2$re_frame$router$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
return mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_19377(this$,event);
}
});


/**
* @constructor
 * @implements {mranderson048.re_frame.v0v10v2.re_frame.router.IEventQueue}
*/
mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL);

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5802__auto__ = cljs.core.some(mranderson048.re_frame.v0v10v2.re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__5802__auto__)){
var later_fn = temp__5802__auto__;
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null, );

var G__19395 = (n - (1));
n = G__19395;
continue;
}
}
break;
}
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: could not remove post event call back with id:",id], 0));
} else {
return (self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id));
}
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return (self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event));
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null, );

return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1(null, );
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__19228 = (function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});
return (mranderson048.re_frame.v0v10v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__19228) : mranderson048.re_frame.v0v10v2.re_frame.interop.next_tick.call(null, G__19228));
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19229 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19230 = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("mranderson048.re-frame.v0v10v2.re-frame.router","fsm-trigger","mranderson048.re-frame.v0v10v2.re-frame.router/fsm-trigger",-266555377)], null));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19230);

try{try{var vec__19262 = (function (){var G__19265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__19265)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(null, arg);

return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(null, );
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__19265)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__19265)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(null, );
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__19265)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__19265)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1(null, );
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__19265)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1(null, );
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__19265)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__19265)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__19265)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(null, arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19262,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19262,(1),null);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19430 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19430);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null, ));
} else {
return null;
}
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__18981__auto___19438 = mranderson048.re_frame.v0v10v2.re_frame.interop.now();
var duration__18982__auto___19439 = (end__18981__auto___19438 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__19235_19440 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__19236_19441 = null;
var count__19237_19442 = (0);
var i__19238_19443 = (0);
while(true){
if((i__19238_19443 < count__19237_19442)){
var vec__19249_19446 = chunk__19236_19441.cljs$core$IIndexed$_nth$arity$2(null, i__19238_19443);
var k__18983__auto___19447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19249_19446,(0),null);
var cb__18984__auto___19448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19249_19446,(1),null);
try{var G__19255_19453 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19439,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19448.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19448.cljs$core$IFn$_invoke$arity$1(G__19255_19453) : cb__18984__auto___19448.call(null, G__19255_19453));
}catch (e19252){if((e19252 instanceof java.lang.Exception)){
var e__18985__auto___19458 = e19252;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19447,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19458], 0));
} else {
throw e19252;

}
}

var G__19459 = seq__19235_19440;
var G__19460 = chunk__19236_19441;
var G__19461 = count__19237_19442;
var G__19462 = (i__19238_19443 + (1));
seq__19235_19440 = G__19459;
chunk__19236_19441 = G__19460;
count__19237_19442 = G__19461;
i__19238_19443 = G__19462;
continue;
} else {
var temp__5804__auto___19464 = cljs.core.seq(seq__19235_19440);
if(temp__5804__auto___19464){
var seq__19235_19465__$1 = temp__5804__auto___19464;
if(cljs.core.chunked_seq_QMARK_(seq__19235_19465__$1)){
var c__5525__auto___19470 = cljs.core.chunk_first(seq__19235_19465__$1);
var G__19472 = cljs.core.chunk_rest(seq__19235_19465__$1);
var G__19473 = c__5525__auto___19470;
var G__19474 = cljs.core.count(c__5525__auto___19470);
var G__19475 = (0);
seq__19235_19440 = G__19472;
chunk__19236_19441 = G__19473;
count__19237_19442 = G__19474;
i__19238_19443 = G__19475;
continue;
} else {
var vec__19256_19477 = cljs.core.first(seq__19235_19465__$1);
var k__18983__auto___19478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19256_19477,(0),null);
var cb__18984__auto___19480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19256_19477,(1),null);
try{var G__19260_19489 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18982__auto___19439,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__18984__auto___19480.cljs$core$IFn$_invoke$arity$1 ? cb__18984__auto___19480.cljs$core$IFn$_invoke$arity$1(G__19260_19489) : cb__18984__auto___19480.call(null, G__19260_19489));
}catch (e19259){if((e19259 instanceof java.lang.Exception)){
var e__18985__auto___19491 = e19259;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__18983__auto___19478,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__18985__auto___19491], 0));
} else {
throw e19259;

}
}

var G__19493 = cljs.core.next(seq__19235_19465__$1);
var G__19494 = null;
var G__19495 = (0);
var G__19496 = (0);
seq__19235_19440 = G__19493;
chunk__19236_19441 = G__19494;
count__19237_19442 = G__19495;
i__19238_19443 = G__19496;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19229);
}} else {
var vec__19271 = (function (){var G__19274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__19274)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(null, arg);

return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(null, );
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__19274)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__19274)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(null, );
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__19274)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__19274)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1(null, );
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__19274)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1(null, );
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__19274)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__19274)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__19274)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(null, arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19271,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19271,(1),null);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__18986__auto___19505 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__18986__auto___19505);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null, ));
} else {
return null;
}
}
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__19289 = (function (){
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__19289) : later_fn.call(null, G__19289));
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting existing post event call back with id:",id], 0));
} else {
}

return (self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn));
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{mranderson048.re_frame.v0v10v2.re_frame.events.handle(event_v);

(self__.queue = cljs.core.pop(self__.queue));

return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null, event_v);
}catch (e19295){var ex = e19295;
return this$__$1.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__19296 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__19297 = null;
var count__19298 = (0);
var i__19299 = (0);
while(true){
if((i__19299 < count__19298)){
var callback = chunk__19297.cljs$core$IIndexed$_nth$arity$2(null, i__19299);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null, event_v,self__.queue));


var G__19516 = seq__19296;
var G__19517 = chunk__19297;
var G__19518 = count__19298;
var G__19519 = (i__19299 + (1));
seq__19296 = G__19516;
chunk__19297 = G__19517;
count__19298 = G__19518;
i__19299 = G__19519;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19296);
if(temp__5804__auto__){
var seq__19296__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19296__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19296__$1);
var G__19524 = cljs.core.chunk_rest(seq__19296__$1);
var G__19525 = c__5525__auto__;
var G__19527 = cljs.core.count(c__5525__auto__);
var G__19528 = (0);
seq__19296 = G__19524;
chunk__19297 = G__19525;
count__19298 = G__19527;
i__19299 = G__19528;
continue;
} else {
var callback = cljs.core.first(seq__19296__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null, event_v,self__.queue));


var G__19533 = cljs.core.next(seq__19296__$1);
var G__19534 = null;
var G__19535 = (0);
var G__19536 = (0);
seq__19296 = G__19533;
chunk__19297 = G__19534;
count__19298 = G__19535;
i__19299 = G__19536;
continue;
}
} else {
return null;
}
}
break;
}
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
(self__.queue = mranderson048.re_frame.v0v10v2.re_frame.interop.empty_queue);

throw ex;
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$type = true);

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$ctorStr = "mranderson048.re-frame.v0v10v2.re-frame.router/EventQueue");

(mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"mranderson048.re-frame.v0v10v2.re-frame.router/EventQueue");
}));

/**
 * Positional factory function for mranderson048.re-frame.v0v10v2.re-frame.router/EventQueue.
 */
mranderson048.re_frame.v0v10v2.re_frame.router.__GT_EventQueue = (function mranderson048$re_frame$v0v10v2$re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new mranderson048.re_frame.v0v10v2.re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

mranderson048.re_frame.v0v10v2.re_frame.router.event_queue = mranderson048.re_frame.v0v10v2.re_frame.router.__GT_EventQueue(new cljs.core.Keyword(null,"idle","idle",-2007156861),mranderson048.re_frame.v0v10v2.re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch = (function mranderson048$re_frame$v0v10v2$re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
mranderson048.re_frame.v0v10v2.re_frame.router.event_queue.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2(null, event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch_sync = (function mranderson048$re_frame$v0v10v2$re_frame$router$dispatch_sync(event_v){
mranderson048.re_frame.v0v10v2.re_frame.events.handle(event_v);

mranderson048.re_frame.v0v10v2.re_frame.router.event_queue.mranderson048$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null, event_v);

return null;
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v2.re_frame.router.js.map
