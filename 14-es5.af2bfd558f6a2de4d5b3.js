function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{COqo:function(e,n,r){"use strict";r.d(n,"a",(function(){return i}));var t=r("fXoL"),i=function(){var e=function(){function e(){_classCallCheck(this,e),this.recipes=[{id:"r1",image:"https://boursbama.ir/fileman/Uploads/3272020201311792ofoghboursbama99.jpeg",title:"\u0628\u0631\u0631\u0633\u06cc \u0627\u062e\u0628\u0627\u0631 \u0634\u0627\u062e\u0635 \u0647\u0627\u06cc \u0627\u0642\u062a\u0635\u0627\u062f\u06cc \u0628\u0627\u0632\u0627\u0631 \u062c\u0647\u0627\u0646\u06cc : 30 \u0645\u0627\u0631\u06332020",ingredients:["ing1","ing2","ing3"]},{id:"r2",image:"https://boursbama.ir/fileman/Uploads/3252020202517583faraboursboursbama99.jpeg",title:"\u062a\u062d\u0644\u06cc\u0644 \u062a\u06a9\u0646\u06cc\u06a9\u0627\u0644 \u0646\u0645\u0627\u062f \u0628\u0648\u0631\u0633",ingredients:["ing1","ing2","ing3"]}]}return _createClass(e,[{key:"GetRecipes",value:function(){return _toConsumableArray(this.recipes)}},{key:"GetRecipe",value:function(e){return this.recipes.find((function(n){return n.id===e}))}},{key:"DeleteRecipe",value:function(e){this.recipes=this.recipes.filter((function(n){return n.id!==e}))}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},tmrb:function(e,n,r){"use strict";r.r(n);var t,i=r("TEn/"),o=r("ofXK"),a=r("3Pt+"),u=r("qtYk"),c=r("tyNb"),l=r("fXoL"),s=[{path:"",children:[{path:"",loadChildren:function(){return r.e(15).then(r.bind(null,"69QG")).then((function(e){return e.RecipesPageModule}))}},{path:":recipeId",loadChildren:function(){return r.e(3).then(r.bind(null,"AjDV")).then((function(e){return e.RecipeDetailPageModule}))}}]}],f=((t=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[c.j.forChild(s)],c.j]}),t),p=r("COqo");r.d(n,"Tab1PageModule",(function(){return d}));var b,d=((b=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:b}),b.\u0275inj=l.Gb({factory:function(e){return new(e||b)},providers:[p.a],imports:[[i.A,o.b,a.a,u.a,f]]}),b)}}]);