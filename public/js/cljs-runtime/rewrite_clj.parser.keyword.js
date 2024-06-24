goog.provide('rewrite_clj.parser.keyword');
rewrite_clj.parser.keyword.parse_keyword = (function rewrite_clj$parser$keyword$parse_keyword(reader){
(rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null, reader));

var temp__5802__auto__ = (rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.peek_char.call(null, reader));
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
if((c === ":")){
var G__20932 = rewrite_clj.reader.read_keyword(reader,":");
var G__20933 = true;
return (rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$2(G__20932,G__20933) : rewrite_clj.node.keyword_node.call(null, G__20932,G__20933));
} else {
var G__20934_20954 = reader;
var G__20935_20955 = ":";
(rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2(G__20934_20954,G__20935_20955) : rewrite_clj.reader.unread.call(null, G__20934_20954,G__20935_20955));

var G__20936 = rewrite_clj.reader.read_keyword(reader,":");
return (rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$1(G__20936) : rewrite_clj.node.keyword_node.call(null, G__20936));
}
} else {
return rewrite_clj.reader.throw_reader(reader,"unexpected EOF while reading keyword.");
}
});

//# sourceMappingURL=rewrite_clj.parser.keyword.js.map
