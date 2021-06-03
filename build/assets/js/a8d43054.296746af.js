(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[9083],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,k=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7409:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),s={id:"baking_explained",title:"How baking works?",authors:"Maxime Sallerin"},i={unversionedId:"baking/baking_explained",id:"baking/baking_explained",isDocsHomePage:!1,title:"How baking works?",description:"In this section, we will discuss how baking works. The different actors of the mechanism and the technological solutions will be presented.",source:"@site/docs/baking/baking_explained.md",sourceDirName:"baking",slug:"/baking/baking_explained",permalink:"/baking/baking_explained",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/baking/baking_explained.md",version:"current",lastUpdatedBy:"ThomasZoughebi",lastUpdatedAt:1622628810,formattedLastUpdatedAt:"6/2/2021",frontMatter:{id:"baking_explained",title:"How baking works?",authors:"Maxime Sallerin"},sidebar:"docs",previous:{title:"Introduction",permalink:"/baking"},next:{title:"Rewards",permalink:"/baking/reward"}},l=[{value:"Cycle",id:"cycle",children:[]},{value:"Baking",id:"baking",children:[]},{value:"Endorsing",id:"endorsing",children:[]},{value:"Rolls",id:"rolls",children:[{value:"Roll selection",id:"roll-selection",children:[]}]},{value:"Accusation",id:"accusation",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"References",id:"references",children:[]}],c={toc:l};function p(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we will discuss how baking works. The different actors of the mechanism and the technological solutions will be presented."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9337).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 1: How Baking Works?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Baker")," participating in the consensus by ",(0,o.kt)("strong",{parentName:"li"},"creating")," new blocks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Endorser")," participating in the consensus by ",(0,o.kt)("strong",{parentName:"li"},"validating")," the blocks created by other bakers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accuser")," participating in the consensus by ",(0,o.kt)("strong",{parentName:"li"},"monitoring")," bakers and endorsers works."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A roll")," represents 8,000\ua729 delegated to a given key and are taken every ",(0,o.kt)("inlineCode",{parentName:"li"},"BLOCKS_PER_ROLL_SNAPSHOT")," = 256 blocks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Roll snapshots")," represent the state of rolls for a given block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BLOCKS_PER_CYLCE")," = 4096 blocks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n")," current cycle."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PRESERVED_CYCLES")," = 5 cyles. Number of cycles during which the tokens are frozen.")),(0,o.kt)("h2",{id:"cycle"},"Cycle"),(0,o.kt)("p",null,"The Tezos consensus is organized in cycles. One cycle corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"BLOCKS_PER_CYLCE")," = 4096 blocks (\u2248 2.8 days).\nAt any point, the shell will not implicitly accept a branch whose fork point is in a cycle more than ",(0,o.kt)("inlineCode",{parentName:"p"},"PRESERVED_CYCLES")," = 5 cycles in the past (\u2248 14 days)."),(0,o.kt)("h2",{id:"baking"},"Baking"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Baking")," is the act of signing and publishing blocks. In Tezos, the right to produce a block in cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is assigned to a randomly selected roll in a randomly selected roll snapshot from cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n-PRESERVED_CYCLES-2"),"."),(0,o.kt)("p",null,"So ",(0,o.kt)("strong",{parentName:"p"},"bakers")," are randomly elected from the list of all nodes that have declared themselves as delegates, in proportion to the amount of XTZ they have."),(0,o.kt)("p",null,"A baker is a delegate, a coin holder who delegates his XTZ is a ",(0,o.kt)("strong",{parentName:"p"},"delegator"),". Note that a baker does not necessarily need delegators to function, he can play solo, but he has fewer chances to be selected for baking."),(0,o.kt)("p",null,"The selected baker will be able to create the next block to add to the chain and communicate it to the network. He will receive a certain number of XTZ as a reward."),(0,o.kt)("p",null,"Several bakers are elected to create a block with a priority list. The one with the highest priority will try to create a block. If he fails to do so within the time limit, the hand will pass to the next baker. A block generated by the baker that does not have priority will be invalid and refused by the network."),(0,o.kt)("p",null,"To create a block, a baker will have to freeze part of his tokens, which will be made available to him only ",(0,o.kt)("inlineCode",{parentName:"p"},"PRESERVED_CYCLES")," = 5 cycles later."),(0,o.kt)("p",null,"A baker can be marked as either active or passive. A passive delegate cannot be selected for baking or endorsing.\nA baker becomes passive for cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," when they fail to create any blocks or endorsements in the past ",(0,o.kt)("inlineCode",{parentName:"p"},"PRESERVED_CYCLES")," cycles, that is, in cycles ",(0,o.kt)("inlineCode",{parentName:"p"},"n-1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"n-2"),", \u2026, ",(0,o.kt)("inlineCode",{parentName:"p"},"n - PRESERVED_CYCLES"),"."),(0,o.kt)("h2",{id:"endorsing"},"Endorsing"),(0,o.kt)("p",null,"Tezos also relies on ",(0,o.kt)("strong",{parentName:"p"},"endorsers")," who approve the newly created block in exchange for a reward. Then, each other member of the network will have to validate the block on its own version of the chain."),(0,o.kt)("p",null,"Endorsing rights are set in the same way as baking rights. At every block height, 32 random rolls are selected. Their owners are supposed to endorse a block. Endorsing serves as a vote on a block."),(0,o.kt)("p",null,"Each endorser verifies the last block that was baked, say at the level ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", and emits an endorsement operation. The endorsement operations are then baked in block ",(0,o.kt)("inlineCode",{parentName:"p"},"n+1"),". Once block ",(0,o.kt)("inlineCode",{parentName:"p"},"n+1")," is baked, no other endorsement for block ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," will be considered valid."),(0,o.kt)("p",null,"Endorsing is a sign of activity, so the more endorsement blocks contain, the healthier the chain."),(0,o.kt)("h2",{id:"rolls"},"Rolls"),(0,o.kt)("p",null,"A roll represents 8,000\ua729 delegated to a given private key. So, the more rolls someone has, the higher the chance to bake the next block. If 10 rolls are active, and a baker owns ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mfrac",{parentName:"mrow"},(0,o.kt)("mn",{parentName:"mfrac"},"2"),(0,o.kt)("mn",{parentName:"mfrac"},"10"))),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{2}{10}")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1.190108em",verticalAlign:"-0.345em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,o.kt)("span",{parentName:"span",className:"mfrac"},(0,o.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.845108em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-2.6550000000000002em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,o.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,o.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))),(0,o.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,o.kt)("span",{parentName:"span"}))))),(0,o.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," of these rolls, he has a 20% chance of being selected. Note that 8,000\ua729 or 15,999\ua729 stakeholders have the same probability of baking."),(0,o.kt)("p",null,"Baking rights are called priorities and given in turns. For example, if 10 rolls were active, the protocol could randomly select a priority list as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," Priority1 = Roll 6\n Priority2 = Roll 9\n Priority3 = Roll 4\n Priority4 = Roll 3\n .\n .\n .\n Priority10 = Roll 7\n")),(0,o.kt)("p",null,"Consequently, the person who owns roll #6 would have priority to propose the new block. If he does not create and broadcast it within a certain period, the next baker who owns roll #9 may take over. Note that a baker may have several rolls selected and therefore receive several priorities."),(0,o.kt)("p",null,"Each validation establishes a new priority list."),(0,o.kt)("h3",{id:"roll-selection"},"Roll selection"),(0,o.kt)("p",null,"At each cycle, a random seed is created. A pseudo-random number generator uses the seed to generate the priority list based on a snapshot of existing rolls 2 cycles ago."),(0,o.kt)("h4",{id:"roll-snapshots"},"Roll snapshots"),(0,o.kt)("p",null,"Snapshots of owned rolls are done every 256 blocks and define who can bake. The order of baking is then defined by assigning priorities to each roll. The ordering is done using a pseudo-random number generator based on a seed."),(0,o.kt)("h4",{id:"random-seed"},"Random seed"),(0,o.kt)("p",null,"Since Tezos runs a deterministic protocol, there is no randomness."),(0,o.kt)("p",null,"The random seed for cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is a 256-bit number generated at the very end of cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n-1")," from nonces to which delegates commit during cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n-2"),". One out of every ",(0,o.kt)("inlineCode",{parentName:"p"},"BLOCKS_PER_COMMITMENT")," = 32 blocks can contain a commitment. There are therefore, at most ",(0,o.kt)("inlineCode",{parentName:"p"},"BLOCKS_PER_CYCLE / BLOCKS_PER_COMMITMENT")," = 128 commitments per cycle. The commitment is generated by the baker who produces the block and is included in the block header."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In cryptography, ",(0,o.kt)("strong",{parentName:"p"},"a nonce")," (number used once) is an arbitrary number intended to be used only once.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"A commitment")," is the hash of a nonce.")),(0,o.kt)("p",null,'The seed is created by requesting a secret number (nonce) from all roll owners. All secret numbers are gathered and used to create a hash that will be used as the random seed. Since the last owner to reveal his secret already knows the other numbers, a 2-phase process called "Commit & Reveal" is in place.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8742).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 2: Commit & Reveal"),(0,o.kt)("p",null,"The seed for cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is then obtained as follows: the seed of cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n-1")," is hashed with a constant and then with each nonce revealed in cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n-1"),"."),(0,o.kt)("p",null,"Each cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is associated with a random seed. This seed is used to randomly select:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a roll snapshot from cycle ",(0,o.kt)("inlineCode",{parentName:"li"},"n-2")),(0,o.kt)("li",{parentName:"ul"},"rolls in the selected snapshot")),(0,o.kt)("p",null,"The selected rolls determine the baking and endorsing rights in cycle ",(0,o.kt)("inlineCode",{parentName:"p"},"n+PRESERVED_CYCLES"),"."),(0,o.kt)("h4",{id:"baker-and-endorser-selection"},"Baker and endorser selection"),(0,o.kt)("p",null,"The generated list of priorities identifies which roll has the responsibility to forge a block (baking) and which rolls have to endorse this new block. It is a round-robin process that cycles on the list of priorities until the end of the cycle (4096 blocks)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"A round robin")," is an arrangement of choosing all elements in a group equally in some rational order, usually from the top to the bottom of a list and then starting again at the top of the list and so on.")),(0,o.kt)("h2",{id:"accusation"},"Accusation"),(0,o.kt)("p",null,"There are also ",(0,o.kt)("strong",{parentName:"p"},"accusers"),". These network members monitor that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a baker does not create two competing blocks at the same level"),(0,o.kt)("li",{parentName:"ul"},"an endorser does not endorse a block twice or more at the same baking slot")),(0,o.kt)("p",null,"If an accusation is correct, the accuser gets a part of the funds that were frozen by the baker or the endorser, as a reward. The other part is burned."),(0,o.kt)("p",null,"Any attempt to fraud is therefore punished."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Cryptocurrency tokens or coins are ",(0,o.kt)("em",{parentName:"p"},"burned")," when they are permanently removed from the circulating supply on purpose.")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The Tezos consensus protocol uses the Liquid Proof of Stake algorithm. Delegates (people who have at least 8,000 \ua729 of delegated funds) are given the responsibility of creating and endorsing blocks. They are rewarded for their action. They are also required to stake some of their capital to ensure honest behavior."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"[1]"," ",(0,o.kt)("a",{parentName:"p",href:"https://tezos.gitlab.io/008/proof_of_stake.html"},"https://tezos.gitlab.io/008/proof_of_stake.html")),(0,o.kt)("p",null,"[2]"," ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.tezosagora.org/learn/baking/proofofstake/consensus"},"https://wiki.tezosagora.org/learn/baking/proofofstake/consensus")))}p.isMDXComponent=!0},9337:function(e,t,n){"use strict";t.Z=n.p+"assets/images/baking_explained-a432afbabd4803c12cad3aa9c4023b6b.svg"},8742:function(e,t,n){"use strict";t.Z=n.p+"assets/images/commit_reveal-970d6cd5d6a196045cbe341b5860e91e.svg"}}]);