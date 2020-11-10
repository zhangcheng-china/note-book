(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{1605:function(v,_,t){"use strict";t.r(_);var d=t(20),l=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"倒排索引核心原理快速揭秘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引核心原理快速揭秘"}},[v._v("#")]),v._v(" 倒排索引核心原理快速揭秘")]),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#normalization"}},[v._v("normalization")])])])]),t("p"),v._v(" "),t("p",[v._v("本节快速告诉你倒排索引的的基本原理")]),v._v(" "),t("p",[v._v("假设说有以下两条数据")]),v._v(" "),t("ul",[t("li",[v._v("doc1：I really liked my small dogs, and I think my mom also liked them.")]),v._v(" "),t("li",[v._v("doc2：He never liked any dogs, so I hope that my mom will not expect me to liked him.")])]),v._v(" "),t("p",[v._v("插入被分词，初步的倒排索引的建立")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("word")]),v._v(" "),t("th",[v._v("doc1")]),v._v(" "),t("th",[v._v("doc2")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("I")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("really")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("liked")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("my")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("small")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("dogs")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("and")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("think")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("mom")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("also")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("them")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("He")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("never")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("any")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("so")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("hope")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("that")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("will")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("not")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("expect")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("me")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("to")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("him")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")])])])]),v._v(" "),t("p",[v._v("演示了一下倒排索引最简单的建立的一个过程")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[v._v("真实的倒排索引比这个复杂多了，这里只是这么一个基本原理")])]),v._v(" "),t("p",[t("strong",[v._v("搜索 mother like little dog，不可能有任何结果")])]),v._v(" "),t("p",[v._v("因为会被拆分为以下几个词语，而这些词语并没有在上面第一步中初步索引中存在")]),v._v(" "),t("ul",[t("li",[v._v("mother")]),v._v(" "),t("li",[v._v("like")]),v._v(" "),t("li",[v._v("little")]),v._v(" "),t("li",[v._v("dog")])]),v._v(" "),t("p",[v._v("这个是不是我们想要的搜索结果？？？绝对不是，因为在我们看来：")]),v._v(" "),t("ul",[t("li",[v._v("mother 和 mom 有区别吗？同义词，都是妈妈的意思。")]),v._v(" "),t("li",[v._v("like 和 liked 有区别吗？没有，都是喜欢的意思，只不过一个是现在时，一个是过去时。")]),v._v(" "),t("li",[v._v("little 和 small 有区别吗？同义词，都是小小的。")]),v._v(" "),t("li",[v._v("dog 和 dogs 有区别吗？狗，只不过一个是单数，一个是复数。")])]),v._v(" "),t("h2",{attrs:{id:"normalization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#normalization"}},[v._v("#")]),v._v(" normalization")]),v._v(" "),t("p",[t("strong",[v._v("什么是 normalization？")])]),v._v(" "),t("p",[v._v("简单说，建立倒排索引的时候，会执行一个操作，也就是说对拆分出的各个单词进行相应的处理，\n以提升后面搜索的时候能够搜索到相关联的文档的概率")]),v._v(" "),t("p",[v._v("比如：括时态的转换，单复数的转换，同义词的转换，大小写的转换")]),v._v(" "),t("ul",[t("li",[v._v("mom —> mother")]),v._v(" "),t("li",[v._v("liked —> like")]),v._v(" "),t("li",[v._v("small —> little")]),v._v(" "),t("li",[v._v("dogs —> dog")])]),v._v(" "),t("p",[v._v("重新建立倒排索引，加入 normalization ，再次用 mother liked little dog 搜索，就可以搜索到了")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("word")]),v._v(" "),t("th",[v._v("doc1")]),v._v(" "),t("th",[v._v("doc2")]),v._v(" "),t("th")])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("I")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("really")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("like")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("liked --\x3e like")])]),v._v(" "),t("tr",[t("td",[v._v("my")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("little")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("small --\x3e little")])]),v._v(" "),t("tr",[t("td",[v._v("dog")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("dogs --\x3e dog")])]),v._v(" "),t("tr",[t("td",[v._v("and")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("think")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("mom")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("also")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("them")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("He")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("never")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("any")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("so")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("hope")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("that")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("will")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("not")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("expect")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("me")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("to")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("him")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td")])])]),v._v(" "),t("p",[v._v("mother like little dog，分词、normalization")]),v._v(" "),t("ul",[t("li",[v._v("mother\t--\x3e mom")]),v._v(" "),t("li",[v._v("like\t--\x3e like")]),v._v(" "),t("li",[v._v("little\t--\x3e little")]),v._v(" "),t("li",[v._v("dog\t--\x3e dog")])]),v._v(" "),t("p",[v._v("doc1 和 doc2 都会搜索出来")])])}),[],!1,null,null,null);_.default=l.exports}}]);