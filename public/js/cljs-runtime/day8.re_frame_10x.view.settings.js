goog.provide('day8.re_frame_10x.view.settings');
day8.re_frame_10x.view.settings.comp_section_width = "400px";
day8.re_frame_10x.view.settings.instruction__section_width = "190px";
day8.re_frame_10x.view.settings.horizontal_gap = day8.re_frame_10x.common_styles.gs_7s;
day8.re_frame_10x.view.settings.vertical_gap = day8.re_frame_10x.common_styles.gs_12s;
day8.re_frame_10x.view.settings.settings_box_vertical_padding = day8.re_frame_10x.common_styles.gs_7;
day8.re_frame_10x.view.settings.settings_box_padding = day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["7px","0"], 0));
day8.re_frame_10x.view.settings.settings_box_81 = mranderson048.garden.v1v3v3.garden.compiler.render_css(mranderson048.garden.v1v3v3.garden.units.px_(day8.re_frame_10x.common_styles.gs_81,mranderson048.garden.v1v3v3.garden.units.px_STAR_((2),day8.re_frame_10x.view.settings.settings_box_vertical_padding)));
day8.re_frame_10x.view.settings.settings_box_131 = mranderson048.garden.v1v3v3.garden.compiler.render_css(mranderson048.garden.v1v3v3.garden.units.px_(day8.re_frame_10x.common_styles.gs_131,mranderson048.garden.v1v3v3.garden.units.px_STAR_((2),day8.re_frame_10x.view.settings.settings_box_vertical_padding)));
day8.re_frame_10x.view.settings.settings_styles = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-10x--","#--re-frame-10x--",-1788857107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".settings",".settings",1002597819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.white_background_color], null)], null)], null);
day8.re_frame_10x.view.settings.closeable_text_box = (function day8$re_frame_10x$view$settings$closeable_text_box(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19843 = arguments.length;
var i__5727__auto___19844 = (0);
while(true){
if((i__5727__auto___19844 < len__5726__auto___19843)){
args__5732__auto__.push((arguments[i__5727__auto___19844]));

var G__19845 = (i__5727__auto___19844 + (1));
i__5727__auto___19844 = G__19845;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.settings.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(day8.re_frame_10x.view.settings.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__19773){
var map__19774 = p__19773;
var map__19774__$1 = cljs.core.__destructure_map(map__19774);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19774__$1,new cljs.core.Keyword(null,"model","model",331153215));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19774__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19774__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19774__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0px",day8.re_frame_10x.common_styles.gs_5s], 0))], null),new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.close_button,new cljs.core.Keyword(null,"div-size","div-size",1661625995),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(25),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),(-4),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),(10),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close], null)], null)], null);
}));

(day8.re_frame_10x.view.settings.closeable_text_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.view.settings.closeable_text_box.cljs$lang$applyTo = (function (seq19768){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19768));
}));

day8.re_frame_10x.view.settings.explanation_text = (function day8$re_frame_10x$view$settings$explanation_text(children){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.instruction__section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
});
/**
 * settings and explanation are both children of re-com boxes
 */
day8.re_frame_10x.view.settings.settings_box = (function day8$re_frame_10x$view$settings$settings_box(settings,explanation,min_height){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.view.settings.settings_box_padding,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),settings], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.explanation_text,explanation], null)], null)], null);
});
day8.re_frame_10x.view.settings.render = (function day8$re_frame_10x$view$settings$render(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.common_styles.gs_12s,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.common_styles.gs_19s], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var num_epochs = cljs.core.deref((function (){var G__19785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19785) : mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null, G__19785));
})());
var num_traces = cljs.core.deref((function (){var G__19786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19786) : mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null, G__19786));
})());
var epochs_to_retain = (function (){var G__19788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19788) : mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null, G__19788));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Retain last"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_31s,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"35px",new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0px",day8.re_frame_10x.common_styles.gs_5s], 0))], null),new cljs.core.Keyword(null,"model","model",331153215),epochs_to_retain,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19775_SHARP_){
var G__19791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),p1__19775_SHARP_], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19791) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19791));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"epochs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_31s], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clear all epochs"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__19792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19792) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19792));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),num_epochs," epochs currently retained, involving ",num_traces," traces."], null)], null),day8.re_frame_10x.view.settings.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),(function (){var follows_events_QMARK_ = cljs.core.deref((function (){var G__19794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19794) : mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null, G__19794));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),follows_events_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),"sync app-db with epoch navigation",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19777_SHARP_){
var G__19796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),p1__19777_SHARP_], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19796) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19796));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"When you navigate to an epoch, update app-db to match. Causes UI to \"time travel\"."], null)], null),day8.re_frame_10x.view.settings.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Ignore epochs for:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_81s], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ event-id"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__19798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","add-ignored-event","settings/add-ignored-event",-1185281607)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19798) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19798));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__5480__auto__ = (function day8$re_frame_10x$view$settings$render_$_iter__19799(s__19800){
return (new cljs.core.LazySeq(null,(function (){
var s__19800__$1 = s__19800;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19800__$1);
if(temp__5804__auto__){
var s__19800__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19800__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19800__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19802 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19801 = (0);
while(true){
if((i__19801 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__19801);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append(b__19802,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__19801,id,item,c__5478__auto__,size__5479__auto__,b__19802,s__19800__$2,temp__5804__auto__){
return (function (){
var G__19804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),id], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19804) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19804));
});})(i__19801,id,item,c__5478__auto__,size__5479__auto__,b__19802,s__19800__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__19801,id,item,c__5478__auto__,size__5479__auto__,b__19802,s__19800__$2,temp__5804__auto__){
return (function (p1__19778_SHARP_){
var G__19805 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),id,p1__19778_SHARP_], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19805) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19805));
});})(i__19801,id,item,c__5478__auto__,size__5479__auto__,b__19802,s__19800__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__19858 = (i__19801 + (1));
i__19801 = G__19858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19802),day8$re_frame_10x$view$settings$render_$_iter__19799(cljs.core.chunk_rest(s__19800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19802),null);
}
} else {
var item = cljs.core.first(s__19800__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__19800__$2,temp__5804__auto__){
return (function (){
var G__19809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),id], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19809) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19809));
});})(id,item,s__19800__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__19800__$2,temp__5804__auto__){
return (function (p1__19778_SHARP_){
var G__19810 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),id,p1__19778_SHARP_], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19810) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19810));
});})(id,item,s__19800__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$view$settings$render_$_iter__19799(cljs.core.rest(s__19800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref((function (){var G__19813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19813) : mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null, G__19813));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"All trace associated with these events will be ignored."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Useful if you want to ignore a periodic background polling event."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Filter out trace for views in:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ namespace"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__19814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","add-filtered-view-trace","settings/add-filtered-view-trace",1856187997)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19814) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19814));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__5480__auto__ = (function day8$re_frame_10x$view$settings$render_$_iter__19815(s__19816){
return (new cljs.core.LazySeq(null,(function (){
var s__19816__$1 = s__19816;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19816__$1);
if(temp__5804__auto__){
var s__19816__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19816__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19816__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19818 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19817 = (0);
while(true){
if((i__19817 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__19817);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append(b__19818,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__19817,id,item,c__5478__auto__,size__5479__auto__,b__19818,s__19816__$2,temp__5804__auto__){
return (function (){
var G__19820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),id], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19820) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19820));
});})(i__19817,id,item,c__5478__auto__,size__5479__auto__,b__19818,s__19816__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__19817,id,item,c__5478__auto__,size__5479__auto__,b__19818,s__19816__$2,temp__5804__auto__){
return (function (p1__19781_SHARP_){
var G__19823 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),id,p1__19781_SHARP_], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19823) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19823));
});})(i__19817,id,item,c__5478__auto__,size__5479__auto__,b__19818,s__19816__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__19963 = (i__19817 + (1));
i__19817 = G__19963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19818),day8$re_frame_10x$view$settings$render_$_iter__19815(cljs.core.chunk_rest(s__19816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19818),null);
}
} else {
var item = cljs.core.first(s__19816__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__19816__$2,temp__5804__auto__){
return (function (){
var G__19827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),id], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19827) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19827));
});})(id,item,s__19816__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__19816__$2,temp__5804__auto__){
return (function (p1__19781_SHARP_){
var G__19830 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),id,p1__19781_SHARP_], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19830) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19830));
});})(id,item,s__19816__$2,temp__5804__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$view$settings$render_$_iter__19815(cljs.core.rest(s__19816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref((function (){var G__19831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19831) : mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null, G__19831));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sometimes you want to focus on your own views, and the trace associated with library views is just noise."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nominate one or more namespaces."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),(function (){var low_level_trace = cljs.core.deref((function (){var G__19832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19832) : mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null, G__19832));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Remove low level trace"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"reagent","reagent",2131627322).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"reagent internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19782_SHARP_){
var G__19833 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"reagent","reagent",2131627322),p1__19782_SHARP_], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19833) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19833));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"re-frame internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19783_SHARP_){
var G__19834 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),p1__19783_SHARP_], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19834) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19834));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Most of the time, low level trace is noisy and you want it filtered out."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Factory Reset"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__19837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805)], null);
return (mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19837) : mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null, G__19837));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),day8.re_frame_10x.view.settings.settings_box_81], null)], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.settings.js.map
