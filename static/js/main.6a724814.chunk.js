(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),c=s(5),i=s(6),a=s(8),l=s(7),u=s(1),b=s.n(u),h=(s(13),s(14),s(2)),d=s.n(h),j=s(0),p=function(t){var e=t.goods;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})},y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var N=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.sortAlphabetically=function(){t.setState({sortType:n.ALPABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.resetGoods=function(){t.setState({sortType:n.NONE,isReversed:!1})},t.reverseGoods=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=[].concat(y);r.sort((function(t,e){switch(s){case n.ALPABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),e&&r.reverse();var o=this.sortAlphabetically,c=this.sortByLength,i=this.reverseGoods,a=this.resetGoods;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:d()("button","is-info",{"is-light":s!==n.ALPABET}),onClick:o,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:d()("button","is-success",{"is-light":s!==n.LENGTH}),onClick:c,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:d()("button","is-warning",{"is-light":!1===e}),onClick:i,children:"Reverse"}),(s!==n.NONE||!0===e)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:a,children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)(p,{goods:r})})]})}}]),s}(b.a.Component);o.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6a724814.chunk.js.map