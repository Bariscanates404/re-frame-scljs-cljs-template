goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27405){
var map__27406 = p__27405;
var map__27406__$1 = cljs.core.__destructure_map(map__27406);
var m = map__27406__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27406__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27406__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27408_27655 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27409_27656 = null;
var count__27410_27657 = (0);
var i__27411_27658 = (0);
while(true){
if((i__27411_27658 < count__27410_27657)){
var f_27659 = chunk__27409_27656.cljs$core$IIndexed$_nth$arity$2(null, i__27411_27658);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27659], 0));


var G__27660 = seq__27408_27655;
var G__27661 = chunk__27409_27656;
var G__27662 = count__27410_27657;
var G__27663 = (i__27411_27658 + (1));
seq__27408_27655 = G__27660;
chunk__27409_27656 = G__27661;
count__27410_27657 = G__27662;
i__27411_27658 = G__27663;
continue;
} else {
var temp__5804__auto___27664 = cljs.core.seq(seq__27408_27655);
if(temp__5804__auto___27664){
var seq__27408_27666__$1 = temp__5804__auto___27664;
if(cljs.core.chunked_seq_QMARK_(seq__27408_27666__$1)){
var c__5525__auto___27667 = cljs.core.chunk_first(seq__27408_27666__$1);
var G__27669 = cljs.core.chunk_rest(seq__27408_27666__$1);
var G__27670 = c__5525__auto___27667;
var G__27671 = cljs.core.count(c__5525__auto___27667);
var G__27672 = (0);
seq__27408_27655 = G__27669;
chunk__27409_27656 = G__27670;
count__27410_27657 = G__27671;
i__27411_27658 = G__27672;
continue;
} else {
var f_27673 = cljs.core.first(seq__27408_27666__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27673], 0));


var G__27675 = cljs.core.next(seq__27408_27666__$1);
var G__27676 = null;
var G__27677 = (0);
var G__27678 = (0);
seq__27408_27655 = G__27675;
chunk__27409_27656 = G__27676;
count__27410_27657 = G__27677;
i__27411_27658 = G__27678;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27679 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27679], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27679)))?cljs.core.second(arglists_27679):arglists_27679)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27436_27681 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27437_27682 = null;
var count__27438_27683 = (0);
var i__27439_27684 = (0);
while(true){
if((i__27439_27684 < count__27438_27683)){
var vec__27462_27685 = chunk__27437_27682.cljs$core$IIndexed$_nth$arity$2(null, i__27439_27684);
var name_27686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27462_27685,(0),null);
var map__27465_27687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27462_27685,(1),null);
var map__27465_27688__$1 = cljs.core.__destructure_map(map__27465_27687);
var doc_27689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27465_27688__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27465_27688__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27686], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27690], 0));

if(cljs.core.truth_(doc_27689)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27689], 0));
} else {
}


var G__27693 = seq__27436_27681;
var G__27694 = chunk__27437_27682;
var G__27695 = count__27438_27683;
var G__27696 = (i__27439_27684 + (1));
seq__27436_27681 = G__27693;
chunk__27437_27682 = G__27694;
count__27438_27683 = G__27695;
i__27439_27684 = G__27696;
continue;
} else {
var temp__5804__auto___27698 = cljs.core.seq(seq__27436_27681);
if(temp__5804__auto___27698){
var seq__27436_27699__$1 = temp__5804__auto___27698;
if(cljs.core.chunked_seq_QMARK_(seq__27436_27699__$1)){
var c__5525__auto___27700 = cljs.core.chunk_first(seq__27436_27699__$1);
var G__27701 = cljs.core.chunk_rest(seq__27436_27699__$1);
var G__27702 = c__5525__auto___27700;
var G__27703 = cljs.core.count(c__5525__auto___27700);
var G__27704 = (0);
seq__27436_27681 = G__27701;
chunk__27437_27682 = G__27702;
count__27438_27683 = G__27703;
i__27439_27684 = G__27704;
continue;
} else {
var vec__27467_27706 = cljs.core.first(seq__27436_27699__$1);
var name_27707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27467_27706,(0),null);
var map__27470_27708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27467_27706,(1),null);
var map__27470_27709__$1 = cljs.core.__destructure_map(map__27470_27708);
var doc_27710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27470_27709__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27470_27709__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27707], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27711], 0));

if(cljs.core.truth_(doc_27710)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27710], 0));
} else {
}


var G__27712 = cljs.core.next(seq__27436_27699__$1);
var G__27713 = null;
var G__27714 = (0);
var G__27715 = (0);
seq__27436_27681 = G__27712;
chunk__27437_27682 = G__27713;
count__27438_27683 = G__27714;
i__27439_27684 = G__27715;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27473 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27474 = null;
var count__27475 = (0);
var i__27476 = (0);
while(true){
if((i__27476 < count__27475)){
var role = chunk__27474.cljs$core$IIndexed$_nth$arity$2(null, i__27476);
var temp__5804__auto___27719__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27719__$1)){
var spec_27720 = temp__5804__auto___27719__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27720)], 0));
} else {
}


var G__27722 = seq__27473;
var G__27723 = chunk__27474;
var G__27724 = count__27475;
var G__27725 = (i__27476 + (1));
seq__27473 = G__27722;
chunk__27474 = G__27723;
count__27475 = G__27724;
i__27476 = G__27725;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__27473);
if(temp__5804__auto____$1){
var seq__27473__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27473__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__27473__$1);
var G__27726 = cljs.core.chunk_rest(seq__27473__$1);
var G__27727 = c__5525__auto__;
var G__27728 = cljs.core.count(c__5525__auto__);
var G__27729 = (0);
seq__27473 = G__27726;
chunk__27474 = G__27727;
count__27475 = G__27728;
i__27476 = G__27729;
continue;
} else {
var role = cljs.core.first(seq__27473__$1);
var temp__5804__auto___27730__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___27730__$2)){
var spec_27731 = temp__5804__auto___27730__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27731)], 0));
} else {
}


var G__27733 = cljs.core.next(seq__27473__$1);
var G__27734 = null;
var G__27735 = (0);
var G__27736 = (0);
seq__27473 = G__27733;
chunk__27474 = G__27734;
count__27475 = G__27735;
i__27476 = G__27736;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27520 = datafied_throwable;
var map__27520__$1 = cljs.core.__destructure_map(map__27520);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27520__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27520__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27520__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27521 = cljs.core.last(via);
var map__27521__$1 = cljs.core.__destructure_map(map__27521);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27521__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27521__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27521__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27522 = data;
var map__27522__$1 = cljs.core.__destructure_map(map__27522);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27522__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27522__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27522__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27523 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27523__$1 = cljs.core.__destructure_map(map__27523);
var top_data = map__27523__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27538 = phase;
var G__27538__$1 = (((G__27538 instanceof cljs.core.Keyword))?G__27538.fqn:null);
switch (G__27538__$1) {
case "read-source":
var map__27539 = data;
var map__27539__$1 = cljs.core.__destructure_map(map__27539);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27539__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27539__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27540 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27540__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27540,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27540);
var G__27540__$2 = (cljs.core.truth_((function (){var fexpr__27542 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27542.cljs$core$IFn$_invoke$arity$1 ? fexpr__27542.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27542.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27540__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27540__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27540__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27540__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27543 = top_data;
var G__27543__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27543,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27543);
var G__27543__$2 = (cljs.core.truth_((function (){var fexpr__27544 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27544.cljs$core$IFn$_invoke$arity$1 ? fexpr__27544.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27544.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27543__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27543__$1);
var G__27543__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27543__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27543__$2);
var G__27543__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27543__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27543__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27543__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27543__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27548 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548,(3),null);
var G__27552 = top_data;
var G__27552__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27552,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27552);
var G__27552__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27552__$1);
var G__27552__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27552__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27552__$2);
var G__27552__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27552__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27552__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27552__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27552__$4;
}

break;
case "execution":
var vec__27555 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27555,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27555,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27555,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27555,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27518_SHARP_){
var or__5002__auto__ = (p1__27518_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__27558 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27558.cljs$core$IFn$_invoke$arity$1 ? fexpr__27558.cljs$core$IFn$_invoke$arity$1(p1__27518_SHARP_) : fexpr__27558.call(null, p1__27518_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__27562 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27562__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27562,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27562);
var G__27562__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27562__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27562__$1);
var G__27562__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27562__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27562__$2);
var G__27562__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27562__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27562__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27562__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27562__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27538__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27581){
var map__27582 = p__27581;
var map__27582__$1 = cljs.core.__destructure_map(map__27582);
var triage_data = map__27582__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27582__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27582__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27582__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27582__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27582__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27582__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27582__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27582__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27589 = phase;
var G__27589__$1 = (((G__27589 instanceof cljs.core.Keyword))?G__27589.fqn:null);
switch (G__27589__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27590 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27591 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27592 = loc;
var G__27593 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27594_27798 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27595_27799 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27596_27800 = true;
var _STAR_print_fn_STAR__temp_val__27597_27801 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27596_27800);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27597_27801);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27578_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27578_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27595_27799);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27594_27798);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27590,G__27591,G__27592,G__27593) : format.call(null, G__27590,G__27591,G__27592,G__27593));

break;
case "macroexpansion":
var G__27598 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27599 = cause_type;
var G__27600 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27601 = loc;
var G__27602 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27598,G__27599,G__27600,G__27601,G__27602) : format.call(null, G__27598,G__27599,G__27600,G__27601,G__27602));

break;
case "compile-syntax-check":
var G__27603 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27604 = cause_type;
var G__27605 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27606 = loc;
var G__27607 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27603,G__27604,G__27605,G__27606,G__27607) : format.call(null, G__27603,G__27604,G__27605,G__27606,G__27607));

break;
case "compilation":
var G__27610 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27611 = cause_type;
var G__27612 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27613 = loc;
var G__27614 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27610,G__27611,G__27612,G__27613,G__27614) : format.call(null, G__27610,G__27611,G__27612,G__27613,G__27614));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27616 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27617 = symbol;
var G__27618 = loc;
var G__27619 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27620_27812 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27621_27813 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27622_27814 = true;
var _STAR_print_fn_STAR__temp_val__27623_27815 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27622_27814);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27623_27815);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27580_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27580_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27621_27813);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27620_27812);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27616,G__27617,G__27618,G__27619) : format.call(null, G__27616,G__27617,G__27618,G__27619));
} else {
var G__27628 = "Execution error%s at %s(%s).\n%s\n";
var G__27629 = cause_type;
var G__27630 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27631 = loc;
var G__27632 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27628,G__27629,G__27630,G__27631,G__27632) : format.call(null, G__27628,G__27629,G__27630,G__27631,G__27632));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27589__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
