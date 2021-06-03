(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[7313],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),o=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return i.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=o(a),m=n,d=k["".concat(r,".").concat(m)]||k[m]||u[m]||l;return a?i.createElement(d,s(s({ref:t},p),{},{components:a})):i.createElement(d,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=k;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var o=2;o<l;o++)s[o]=a[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4708:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return r},default:function(){return p}});var i=a(2122),n=a(9756),l=(a(7294),a(3905)),s={id:"exam",title:"Exam",author:"Aymeric Bethencourt"},c={unversionedId:"defi/exam",id:"defi/exam",isDocsHomePage:!1,title:"Exam",description:"Question 1",source:"@site/docs/defi/exam.md",sourceDirName:"defi",slug:"/defi/exam",permalink:"/defi/exam",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/defi/exam.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1622735695,formattedLastUpdatedAt:"6/3/2021",frontMatter:{id:"exam",title:"Exam",author:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Lending and Flash Loans",permalink:"/defi/lending"},next:{title:"Introduction",permalink:"/formal-verification"}},r=[{value:"Question 1",id:"question-1",children:[]},{value:"Question 2",id:"question-2",children:[]},{value:"Question 3",id:"question-3",children:[]},{value:"Question 4",id:"question-4",children:[]},{value:"Question 5",id:"question-5",children:[]},{value:"Question 6",id:"question-6",children:[]},{value:"Question 7",id:"question-7",children:[]},{value:"Question 8",id:"question-8",children:[]},{value:"Question 9",id:"question-9",children:[]},{value:"Question 10",id:"question-10",children:[]},{value:"Question 11",id:"question-11",children:[]}],o={toc:r};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,i.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"question-1"},"Question 1"),(0,l.kt)("p",null,"Why is DeFi often compared to ",(0,l.kt)("em",{parentName:"p"},"Money Bricks")," ?"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","DeFi apps form layers that rely on other DeFi apps just like bricks would with each other."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","DeFi apps respect common standards that allow them to interact with each other."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","DeFi apps relies on banks to perform KYCs"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","DeFi apps are often open-source, allowing developers to fork them and modify them to create their apps.")),(0,l.kt)("h3",{id:"question-2"},"Question 2"),(0,l.kt)("p",null,"Consider a liquidity pool with 120,000 wXTZ and 4 BTCtz. I want to exchange 1 BTCtz. What is the marginal price of 1 BTCtz?"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","20,000 wXTZ "),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","24,000 wXTZ "),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","30,000 wXTZ"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","36,000 wXTZ")),(0,l.kt)("h3",{id:"question-3"},"Question 3"),(0,l.kt)("p",null,"Consider a liquidity pool with 120,000 wXTZ and 4 BTCtz. I want to exchange 1 BTCtz. What is the effective swap price of my 1 BTCtz?"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","20,000 wXTZ "),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","24,000 wXTZ "),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","30,000 wXTZ"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","36,000 wXTZ")),(0,l.kt)("h3",{id:"question-4"},"Question 4"),(0,l.kt)("p",null,"The FA2 token standards allow Tezos developers to:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create fungible tokens (equivalent to ERC-20 on Ethereum)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create non-fungible tokens (equivalent to ERC-721 on Ethereum)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create non-transferable tokens (equivalent to ERC-1238 on Ethereum)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create multi-asset contracts (equivalent to ERC-1151 on Ethereum)")),(0,l.kt)("h3",{id:"question-5"},"Question 5"),(0,l.kt)("p",null,"A wrapped asset can be pegged to:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","a fiat currency"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","a commodity"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","a security"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","a stock")),(0,l.kt)("h3",{id:"question-6"},"Question 6"),(0,l.kt)("p",null,"All stablecoins are collateralized by a reserve:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","true"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","false")),(0,l.kt)("h3",{id:"question-7"},"Question 7"),(0,l.kt)("p",null,"Using an exchange is required to make an Atomic Swap:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","true"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","false")),(0,l.kt)("h3",{id:"question-8"},"Question 8"),(0,l.kt)("p",null,"Synthetics are wrapped tokens pegged to their original asset:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","true"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","false")),(0,l.kt)("h3",{id:"question-9"},"Question 9"),(0,l.kt)("p",null,"An oracle can:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","fetch price data"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","fetch weather data"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","process the data"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","guarantee the fetched data is valid")),(0,l.kt)("h3",{id:"question-10"},"Question 10"),(0,l.kt)("p",null,"If I do not repay a flash loan in the same block,"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","the loan is postponed to the next block"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","the loan is canceled but all my other operation involving the borrowed money are still executed"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","all my operations involving the borrowed money are canceled and my gas fee is refunded"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","all my operations involving the borrowed money are canceled but my gas fee is not refunded")),(0,l.kt)("h3",{id:"question-11"},"Question 11"),(0,l.kt)("p",null,"Can I exchange an FA1.2 token against an FA2 token on DEXs?"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","true"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","false")))}p.isMDXComponent=!0}}]);