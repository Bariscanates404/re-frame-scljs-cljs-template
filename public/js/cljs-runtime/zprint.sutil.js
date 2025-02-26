goog.provide('zprint.sutil');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,cljs.core.next(sexpr));
} else {
return null;
}
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__19713 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19713) : zthing_QMARK_.call(null, G__19713));
})())){
return i;
} else {
var G__19990 = cljs.core.next(sloc);
var G__19991 = (i + (1));
sloc = G__19990;
i = G__19991;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__19797 = arguments.length;
switch (G__19797) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
}));

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
}));

(zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2);

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (((typeof x === 'string') || (typeof x === 'number'))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__19854 = cljs.core.first(pair_seq__$1);
var seq__19855 = cljs.core.seq(vec__19854);
var first__19856 = cljs.core.first(seq__19855);
var seq__19855__$1 = cljs.core.next(seq__19855);
var k = first__19856;
var rest_of_pair = seq__19855__$1;
var pair = vec__19854;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,current_ns)){
var G__19996 = ns;
var G__19997 = cljs.core.next(pair_seq__$1);
var G__19998 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns = G__19996;
pair_seq__$1 = G__19997;
out = G__19998;
continue;
} else {
return null;
}
} else {
var G__19999 = current_ns;
var G__20000 = cljs.core.next(pair_seq__$1);
var G__20001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns = G__19999;
pair_seq__$1 = G__20000;
out = G__20001;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__20002 = ns;
var G__20003 = cljs.core.next(pair_seq__$1);
var G__20004 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns = G__20002;
pair_seq__$1 = G__20003;
out = G__20004;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__19860 = zprint.zfns.zstring;
var znumstr_orig_val__19861 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__19862 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__19863 = zprint.zfns.zsexpr;
var zseqnws_orig_val__19864 = zprint.zfns.zseqnws;
var zmap_right_orig_val__19865 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__19866 = zprint.zfns.zfocus_style;
var zfirst_orig_val__19867 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__19868 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__19869 = zprint.zfns.zsecond;
var zthird_orig_val__19870 = zprint.zfns.zthird;
var zfourth_orig_val__19871 = zprint.zfns.zfourth;
var znthnext_orig_val__19872 = zprint.zfns.znthnext;
var zcount_orig_val__19873 = zprint.zfns.zcount;
var zmap_orig_val__19874 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__19875 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__19876 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__19877 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__19878 = zprint.zfns.zfocus;
var zfind_path_orig_val__19879 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__19880 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__19881 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__19882 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__19883 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__19884 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__19885 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__19886 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__19887 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__19888 = zprint.zfns.ztag;
var zparseuneval_orig_val__19889 = zprint.zfns.zparseuneval;
var zlast_orig_val__19890 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__19891 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__19892 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__19893 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__19894 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__19895 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__19896 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__19897 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__19898 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__19899 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__19900 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__19901 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__19902 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__19903 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__19904 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__19905 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__19906 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__19907 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__19908 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__19909 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__19910 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__19911 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__19912 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__19913 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__19914 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__19915 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__19916 = zprint.zfns.zfind;
var zstring_temp_val__19918 = zprint.sutil.sstring;
var znumstr_temp_val__19919 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__19920 = cljs.core.constantly(false);
var zsexpr_temp_val__19921 = cljs.core.identity;
var zseqnws_temp_val__19922 = zprint.sutil.sseqnws;
var zmap_right_temp_val__19923 = zprint.sutil.smap_right;
var zfocus_style_temp_val__19924 = zprint.sutil.sfocus_style;
var zfirst_temp_val__19925 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__19926 = zprint.sutil.sfirst;
var zsecond_temp_val__19927 = zprint.sutil.ssecond;
var zthird_temp_val__19928 = zprint.sutil.sthird;
var zfourth_temp_val__19929 = zprint.sutil.sfourth;
var znthnext_temp_val__19930 = zprint.sutil.snthnext;
var zcount_temp_val__19931 = zprint.sutil.scount;
var zmap_temp_val__19932 = zprint.sutil.smap;
var zmap_w_nl_temp_val__19933 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__19934 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__19935 = cljs.core.fn_QMARK_;
var zfocus_temp_val__19936 = zprint.sutil.sfocus;
var zfind_path_temp_val__19937 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__19938 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__19939 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__19940 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__19941 = cljs.core.map_QMARK_;
var zset_QMARK__temp_val__19942 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__19943 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__19944 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__19945 = cljs.core.constantly(false);
var ztag_temp_val__19946 = cljs.core.constantly(null);
var zparseuneval_temp_val__19947 = cljs.core.constantly(null);
var zlast_temp_val__19948 = zprint.sutil.slast;
var zarray_QMARK__temp_val__19949 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__19950 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__19951 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__19952 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__19953 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__19954 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__19955 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__19956 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__19957 = cljs.core.constantly(false);
var zmap_all_temp_val__19958 = cljs.core.map;
var zfuture_QMARK__temp_val__19959 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__19960 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__19961 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__19962 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__19964 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__19965 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__19966 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__19967 = null;
var zdotdotdot_temp_val__19968 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__19969 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__19970 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__19971 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__19972 = cljs.core.constantly(false);
var zlift_ns_temp_val__19973 = zprint.sutil.slift_ns;
var zinlinecomment_QMARK__temp_val__19974 = cljs.core.constantly(false);
var zfind_temp_val__19975 = zprint.sutil.sfind;
(zprint.zfns.zstring = zstring_temp_val__19918);

(zprint.zfns.znumstr = znumstr_temp_val__19919);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__19920);

(zprint.zfns.zsexpr = zsexpr_temp_val__19921);

(zprint.zfns.zseqnws = zseqnws_temp_val__19922);

(zprint.zfns.zmap_right = zmap_right_temp_val__19923);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__19924);

(zprint.zfns.zfirst = zfirst_temp_val__19925);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__19926);

(zprint.zfns.zsecond = zsecond_temp_val__19927);

(zprint.zfns.zthird = zthird_temp_val__19928);

(zprint.zfns.zfourth = zfourth_temp_val__19929);

(zprint.zfns.znthnext = znthnext_temp_val__19930);

(zprint.zfns.zcount = zcount_temp_val__19931);

(zprint.zfns.zmap = zmap_temp_val__19932);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__19933);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__19934);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__19935);

(zprint.zfns.zfocus = zfocus_temp_val__19936);

(zprint.zfns.zfind_path = zfind_path_temp_val__19937);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__19938);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__19939);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__19940);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__19941);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__19942);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__19943);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__19944);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__19945);

(zprint.zfns.ztag = ztag_temp_val__19946);

(zprint.zfns.zparseuneval = zparseuneval_temp_val__19947);

(zprint.zfns.zlast = zlast_temp_val__19948);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__19949);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__19950);

(zprint.zfns.zderef = zderef_temp_val__19951);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__19952);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__19953);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__19954);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__19955);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__19956);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__19957);

(zprint.zfns.zmap_all = zmap_all_temp_val__19958);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__19959);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__19960);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__19961);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__19962);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__19964);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__19965);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__19966);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__19967);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__19968);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__19969);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__19970);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__19971);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__19972);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__19973);

(zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__19974);

(zprint.zfns.zfind = zfind_temp_val__19975);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null, ));
}finally {(zprint.zfns.zfind = zfind_orig_val__19916);

(zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__19915);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__19914);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__19913);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__19912);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__19911);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__19910);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__19909);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__19908);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__19907);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__19906);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__19905);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__19904);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__19903);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__19902);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__19901);

(zprint.zfns.zmap_all = zmap_all_orig_val__19900);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__19899);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__19898);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__19897);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__19896);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__19895);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__19894);

(zprint.zfns.zderef = zderef_orig_val__19893);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__19892);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__19891);

(zprint.zfns.zlast = zlast_orig_val__19890);

(zprint.zfns.zparseuneval = zparseuneval_orig_val__19889);

(zprint.zfns.ztag = ztag_orig_val__19888);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__19887);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__19886);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__19885);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__19884);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__19883);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__19882);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__19881);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__19880);

(zprint.zfns.zfind_path = zfind_path_orig_val__19879);

(zprint.zfns.zfocus = zfocus_orig_val__19878);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__19877);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__19876);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__19875);

(zprint.zfns.zmap = zmap_orig_val__19874);

(zprint.zfns.zcount = zcount_orig_val__19873);

(zprint.zfns.znthnext = znthnext_orig_val__19872);

(zprint.zfns.zfourth = zfourth_orig_val__19871);

(zprint.zfns.zthird = zthird_orig_val__19870);

(zprint.zfns.zsecond = zsecond_orig_val__19869);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__19868);

(zprint.zfns.zfirst = zfirst_orig_val__19867);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__19866);

(zprint.zfns.zmap_right = zmap_right_orig_val__19865);

(zprint.zfns.zseqnws = zseqnws_orig_val__19864);

(zprint.zfns.zsexpr = zsexpr_orig_val__19863);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__19862);

(zprint.zfns.znumstr = znumstr_orig_val__19861);

(zprint.zfns.zstring = zstring_orig_val__19860);
}});

//# sourceMappingURL=zprint.sutil.js.map
