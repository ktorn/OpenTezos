(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[8197],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1897:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"introduction",title:"Introduction",slug:"/explorer",authors:"Maxime Sallerin"},s={unversionedId:"explorer/introduction",id:"explorer/introduction",isDocsHomePage:!1,title:"Introduction",description:"This module focuses on blockchain explorers and blockchain indexers for Tezos,",source:"@site/docs/explorer/introduction.md",sourceDirName:"explorer",slug:"/explorer",permalink:"/explorer",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/explorer/introduction.md",version:"current",lastUpdatedBy:"Maxime Sallerin",lastUpdatedAt:1622627280,formattedLastUpdatedAt:"6/2/2021",frontMatter:{id:"introduction",title:"Introduction",slug:"/explorer",authors:"Maxime Sallerin"},sidebar:"docs",previous:{title:"Exam",permalink:"/deploy-a-node/exam"},next:{title:"How Indexers Work?",permalink:"/explorer/indexer-explained"}},l=[{value:"What is a blockchain explorer?",id:"what-is-a-blockchain-explorer",children:[{value:"Blockchain explorer use cases",id:"blockchain-explorer-use-cases",children:[]}]},{value:"What is an indexer ?",id:"what-is-an-indexer-",children:[]}],c={toc:l};function p(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This module focuses on ",(0,o.kt)("strong",{parentName:"p"},"blockchain explorers")," and ",(0,o.kt)("strong",{parentName:"p"},"blockchain indexers")," for Tezos,\nhow they work and how to use them.\nMore precisely, it will be explained how to observe the different information\n(storage, entrypoint, bigmap, etc.) of a ",(0,o.kt)("strong",{parentName:"p"},"smart contract")," deployed on the Tezos blockchain."),(0,o.kt)("p",null,"Public blockchains like Tezos are meant to be transparent, meaning that everyone has access to the information. However, the accessibility and readability of its information are not always easy and intuitive.\nThe block explorer was designed to remedy this problem."),(0,o.kt)("h2",{id:"what-is-a-blockchain-explorer"},"What is a blockchain explorer?"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"blockchain explorer"),", also known as a ",(0,o.kt)("em",{parentName:"p"},"block explorer"),", is an app tracking activity on the blockchain.\nAll transactions ever performed on a network can be viewed using such a tool."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Blockchain explorers are like search engines for blockchains."),(0,o.kt)("br",{parentName:"p"}),"\n","You can think of it as a window into the blockchain world,\nallowing you to observe what's happening in it."),(0,o.kt)("p",null,"Cryptocurrency users and developers use such a tool to view the status of past or pending transactions."),(0,o.kt)("p",null,"Some of the most basic information available on blockchain explorers includes (but are not limited to):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Block feeds"),": This allows you to view all the latest baked and pending blocks on the blockchain.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Pending block")," are the blocks awaiting approval of the 32 endorsement slots. Check-out ",(0,o.kt)("a",{parentName:"p",href:"/baking/introduction"},"Baking module")," to understand more about baking process."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transaction feeds"),": The transaction feed displays all the most recent and upcoming transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sending and receiving addresses"),": Each transaction can be viewed individually to reveal the public addresses of the sending and receiving parties."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Wallet history"),": All past and pending transactions of a wallet address.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Note that for Tezos there are two main types of addresses: ",(0,o.kt)("em",{parentName:"p"},"kt1")," and ",(0,o.kt)("em",{parentName:"p"},"tz1")," addresses.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"tz1")," and ",(0,o.kt)("em",{parentName:"p"},"kt1")," addresses have the same functionality in terms of transactions. However, there is one difference, ",(0,o.kt)("em",{parentName:"p"},"kt1")," accounts have smart contract functionality and ",(0,o.kt)("em",{parentName:"p"},"tz1")," does not. This means that with the ",(0,o.kt)("em",{parentName:"p"},"kt1")," address you can observe on the explorer, the entrypoints, storage, etc ... of the associated smart contract.")))),(0,o.kt)("h3",{id:"blockchain-explorer-use-cases"},"Blockchain explorer use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"casual users check if their coins are still safe."),(0,o.kt)("li",{parentName:"ul"},"delegators verify that their baker is not cheating with their earnings."),(0,o.kt)("li",{parentName:"ul"},"users of smart contrats, who wants to take a look at the code, storage and history."),(0,o.kt)("li",{parentName:"ul"},"blockchain engineers who develop and debug new features on a test network (e.g. new blockchain consensus)."),(0,o.kt)("li",{parentName:"ul"},"DApp developers who need debugging tools and more visibility into the current and past state of their contracts running on internal testnets and on the mainnet."),(0,o.kt)("li",{parentName:"ul"},"bakers and staking services who need reliable data about delegation and earnings history to calculate correct payouts, plan their bond pools, and execute operations."),(0,o.kt)("li",{parentName:"ul"},"less technical user groups like auditors and regulators with strict requirements for the data quality, as they need to access a trusted copy of the full on-chain history in a format that's easy to digest for their spreadsheets and compliance tools.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6768).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 1: Typical use cases of a block explorer"),(0,o.kt)("h2",{id:"what-is-an-indexer-"},"What is an indexer ?"),(0,o.kt)("p",null,"A block explorer is typically made of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an indexer that is a node operator that extracts the on-chain data and stores it into a database"),(0,o.kt)("li",{parentName:"ul"},"an API that queries the database"),(0,o.kt)("li",{parentName:"ul"},"a frontend that displays the data")),(0,o.kt)("p",null,"Since, the on-chain data is already in the database of the node itself why an indexer is needed ?\nThe indexer is relevant because it ",(0,o.kt)("strong",{parentName:"p"},"optimizes")," the way a node stores data. The purpose is to provide ",(0,o.kt)("strong",{parentName:"p"},"very quick access")," to blockchain data according to some specific criteria related to a given address."),(0,o.kt)("p",null,"So, the indexer is the part of the explorer that fetches the raw data from the node, then processes it and stores it in the database in ",(0,o.kt)("strong",{parentName:"p"},"an efficient way"),"."),(0,o.kt)("p",null,"The next chapter will describe how an indexer works."))}p.isMDXComponent=!0},6768:function(e,t,n){"use strict";t.Z=n.p+"assets/images/use_cases-cd70594aa5740b7ac8da247dd8aa01d9.svg"}}]);