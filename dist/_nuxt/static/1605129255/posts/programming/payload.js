__NUXT_JSONP__("/posts/programming", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah){return {data:[{articles:[{slug:"running-wsl2-on-bootcamp",title:"Running WSL2 on a Mac using Bootcamp",summary:"Getting Microsoft's Windows Subsystem-For-Linux running in Bootcamp is somewhat straightforward, but there are a few gotchas. Read on for the how, and then after that for the why (mac is unix-based. Why not just use that?)",shouldShowTableOfContents:w,shouldShowUpdatedAt:false,titleImage:"bootcampTitle.png",tags:[E,r,x,r],toc:[{id:F,depth:s,text:G},{id:H,depth:s,text:I},{id:J,depth:u,text:K},{id:L,depth:u,text:M},{id:N,depth:s,text:O}],body:{type:h,children:[{type:b,tag:t,props:{id:F},children:[{type:b,tag:f,props:{ariaHidden:j,href:"#brief-summary",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The brief TLDR is:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:"Boot into MacOS"}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:"Run "},{type:b,tag:q,props:{},children:[{type:a,value:P}]},{type:a,value:" to remind your mac that it can do things"}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:"Disable decompression on the folder that contains your linux distribution."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:H},children:[{type:b,tag:f,props:{ariaHidden:j,href:"#step-by-step-instructions",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:v,props:{id:J},children:[{type:b,tag:f,props:{ariaHidden:j,href:"#enabling-virtualization",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Disclaimer:"}]},{type:a,value:" I've tried this on a 2015 16-inch MBP, and a 2017 13-inch MBP. If it doesn't work for you, let me know."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"After installing WSL2, you may be greeted "},{type:b,tag:q,props:{},children:[{type:a,value:"with"}]},{type:a,value:" the following cryptic error:"}]},{type:a,value:c},{type:b,tag:z,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"Installing, this may take a few minutes...\nWslRegisterDistribution failed with error: 0x80370102\nError: 0x80370102 The virtual machine could not be started because a required feature is not installed.\n\nPress any key to continue...\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You'll get this error when you mac hardware doesn't support CPU virtualization, which is odd because most macs made in the past 7 years or so support it. It turns out that this feature needs to be enabled by the BIOS, and can only be enabled on the MAC side. So you may run into this error, for example, if you've booted into windows from power-on."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To fix this, boot into MacOS, open a terminal, and run "},{type:b,tag:q,props:{},children:[{type:a,value:P}]},{type:a,value:". Ensure that you get a response from that command (You should see \"VMX\" in the response. That is the hardware feature you need). "},{type:b,tag:o,props:{},children:[{type:a,value:"The simple act of doing this turns this feature on."}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once you do that, you need to boot "},{type:b,tag:g,props:{},children:[{type:a,value:"directly"}]},{type:a,value:" into windows by going to System Preferences \u003E Startup Disk and boot into windows that way. "},{type:b,tag:o,props:{},children:[{type:a,value:"Do not simply reboot your machine and select windows at boot"}]},{type:a,value:". "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Also note that you'll need to re-do this step if you ever reboot windows!"}]},{type:a,value:". Thanks, Apple!"}]},{type:a,value:c},{type:b,tag:v,props:{id:L},children:[{type:b,tag:f,props:{ariaHidden:j,href:"#disable-compression",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You may ALSO get another cryptic error:"}]},{type:a,value:c},{type:b,tag:z,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"The requested operation could not be completed due to a virtual disk system limitation.\nVirtual hard disk files must be uncompressed and unencrypted and must not be sparse.\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To fix this, you need to disable folder encryption and folder compression. You can do this by navigating to the folder in windows explorer (mine was at "},{type:b,tag:q,props:{},children:[{type:a,value:"C:\\Users\\myusername\\AppData\\Local\\Packages\\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc"}]},{type:a,value:"), right click on the folder, go the \"General\" tab, click on \"Advanced\" and make sure that both checkboxes are the bottom are unchecked."}]},{type:a,value:c},{type:b,tag:z,props:{className:["imageContainer"]},children:[{type:a,value:"\n  "},{type:b,tag:"img",props:{className:["medium"],":src":"'folder.PNG'"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"After doing this, you should be good to go!"}]},{type:a,value:c},{type:b,tag:t,props:{id:N},children:[{type:b,tag:f,props:{ariaHidden:j,href:"#why-run-wsl2-on-mac",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You might be asking yourself this question when macs themselves are unix-like environments. Well, the term \"unix-like\" should give the answer away: in my opinion, MacOS is NOT a substitute for developing, building, and testing on a real linux distribution. If your target platform is a mac, then great, write all of your code and build scripts on a mac. But if your target platform is linux, much of the code you've written to build out and maintain your environment (i.e. install libraries, configure databases, etc) will not be portable to your actual application servers. Whereas if you use a linux platform all the way through, the portability of your code increases. Your development environment buildout code will never be 100% portable, but I'd argue that the closer you can get your development environment to your actual application servers, the better."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"So why not just install a linux VM on Mac? Well, aside from the brief snags mentioned above, I think WSL2 is a far more pleasant (and cheaper, i.e. free) experience than anything like virtualbox or parallels on mac. WSL2 even integrates natively with IDEs like VScode (which is an amazing experience, which I use to develop this website)."}]}]},dir:U,path:"\u002Farticles\u002Frunning-wsl2-on-bootcamp",extension:i,createdAt:d,updatedAt:d},{slug:"about",title:"About this Site",summary:"How's it going? Thanks for stopping by. Below you'll find a meta blog post about this site, why it was created, how it was created, and what kind of content you'll expect to find.",shouldShowTableOfContents:w,shouldShowUpdatedAt:w,tags:[V,W,X,x,r,Y],toc:[{id:Z,depth:s,text:_},{id:$,depth:u,text:aa},{id:ab,depth:u,text:ac},{id:ad,depth:s,text:ae}],body:{type:h,children:[{type:b,tag:t,props:{id:Z},children:[{type:b,tag:f,props:{href:"#why-this-site-was-created",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:v,props:{id:$},children:[{type:b,tag:f,props:{href:"#a-blog-in-2020-is-kinda-like-a-cassette-tape",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"My brother, who's in the music scene, told me that "},{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FCassette_tape",rel:[A,B,C],target:D},children:[{type:a,value:"cassette tapes"}]},{type:a,value:" are sort-of back in style. Arguments about music fidelity aside, I can definitely see the appeal: compared to music-streaming services like spotify, you actually own the music, and the artist will actually make a couple bucks off of your purchase, as opposed to the fraction of the penny they'll make from spotify. And when compared to CDs, cassette tapes function as neat little display pieces, with tiny little labels and pieces of artwork you can display around your apartment. I don't see the industry shifting back to physical media any time soon, but I can see the niche appeal. "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"So how does this relate to starting a blog in 2020? Well, in the past few years, much like how people consume much of their music through music aggregation platforms like spotify or youtube\u002Fapple music, many people consume news and information through news aggregation platforms like facebook, apple news, and reddit. Unless it reaches somebody's front page with billions of upvotes and thousands of little gold stars all over it, your average person (myself included) probably won't see it. So in a way, a blog is kind of like a cassette tape: both are mediums of content with very limited appeal in 2020."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"But that sucks"}]},{type:a,value:". Much like how music aggregation services harm music artists (low pay, only the big boys at the top benefit from this system), content aggregation services harm content creators: no one benefits except for the big, dominant voices (apple, NBCXfinityWarnerIHop, washington post, etc). Like most other human beings on the planet, I want to engage in discourse. I want to discuss, debate, listen, and learn. And I'm beginning to feel less and less comfortable doing so on platforms that are designed to stamp out voices like my own. And on top of that, these platforms are ultimately data-collection\u002Fadvertising-platforms first, and content-platforms second, which is "},{type:b,tag:g,props:{},children:[{type:a,value:"creepy as hell"}]},{type:a,value:". So instead of writing another reddit post, or sharing something on facebook or stackoverflow, I've starting selling my own cassette tapes of tech content (except nothing on this site will ever be monetized! The worst you'll see is donation links, which will solely go to me and\u002For my dog). "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"So, one of the primary reasons of starting to that blog is to become a part of the change I want to see: a shift back to the internet of yesterday, where smaller voices could actually reach people. Where content could simply exist on the internet without a monetary purpose, without a desire to collect your data, where content doesn't simply exist for advertisers to analyze and aggregate into a dystopian, consumerist black hole. "}]},{type:a,value:c},{type:b,tag:v,props:{id:ab},children:[{type:b,tag:f,props:{href:"#putting-my-jack-of-all-trades-master-of-none-skillset-to-good-use",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The second reasons for me starting this blog is a bit more personal. I often have frank discussions with myself about who I'm supposed to be, and whether or not I've met all of the standards I've set out for myself. "},{type:b,tag:o,props:{},children:[{type:a,value:"I always come up short"}]},{type:a,value:". I can hear you say, \"your expectations of yourself are simply too high!\", but the only point of reference I have is my own. In many different areas, I've tried to "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=rg6CiPI6h2g",rel:[A,B,C],target:D},children:[{type:a,value:"\"be the best, like no one ever was\""}]},{type:a,value:": athlete, bodybuilder, musician, "},{type:b,tag:q,props:{},children:[{type:a,value:"game developer"}]},{type:a,value:", competitive gamer, etc, never achieving anything remotely resembling real success. And if you're not the best at something, then does anything else matter? When I was younger, the answer was, undoubtedly, "},{type:b,tag:o,props:{},children:[{type:a,value:"no"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"But as I've gotten older, I've realized that I "},{type:b,tag:g,props:{},children:[{type:a,value:"do"}]},{type:a,value:" have one really great quality: I try "},{type:b,tag:g,props:{},children:[{type:a,value:"really"}]},{type:a,value:" hard. I'm persistent. I'm stubborn. I have siblings that all taunt me and force me to keep up, even when I'm awful at something. And this had led to me being "},{type:b,tag:g,props:{},children:[{type:a,value:"kinda good"}]},{type:a,value:" at "},{type:b,tag:g,props:{},children:[{type:a,value:"a lot of things"}]},{type:a,value:". So, as a result, I have a TON of novice-to-intermediate-level skills in my dumb little brain. And I'd like to think that this gives me an upper-hand in the ability to teach and impart knowledge, since "},{type:b,tag:g,props:{},children:[{type:a,value:"I am very familiar with having to learn, and then re-learn and re-train, over and over again"}]},{type:a,value:" to truly grasp skills and concepts. "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Therefore, while it's taken me 20-some years of soul-searching for me to get to this point, I think I've finally figured out a way to put my \"jack-of-all-trades\" talent to good use: I intend to use this blog to document technical problems and concepts in a way that average people like me can understand them. I want to make content for people that aren't experts in the the stuff that they're looking for, but "},{type:b,tag:g,props:{},children:[{type:a,value:"they know what they're looking for"}]},{type:a,value:". And maybe sprinkle some other fun posts in along the way. To let people know that it's OK if they don't spend every second of their lives getting better at something, because that's something that I, myself, used to fear. "}]},{type:a,value:c},{type:b,tag:t,props:{id:ad},children:[{type:b,tag:f,props:{href:"#how-this-site-was-created",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:ae}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This site was created with Nuxt.js, generated statically (using their \"content\" module) using nuxt-generate and hosted on GitHub pages. Miraculously, I even managed to develop and build it on Windows using Microsoft's Windows Subsystem for Linux (WSL2), so for anyone searching out there, it "},{type:b,tag:g,props:{},children:[{type:a,value:"can"}]},{type:a,value:" be done. I'm even running Windows on Bootcamp (i.e. on a Macbook)! I'll write a tutorial later with a more in-depth explanation later, but I followed "},{type:b,tag:f,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fblog\u002Fcreating-blog-with-nuxt-content\u002F",rel:[A,B,C],target:D},children:[{type:a,value:"this guide as the foundation"}]},{type:a,value:". Nuxt.js is "},{type:b,tag:g,props:{},children:[{type:a,value:af}]},{type:a,value:" opinionated, which I didn't like so much, but it got this blog up and running "},{type:b,tag:g,props:{},children:[{type:a,value:af}]},{type:a,value:" quickly, and static site generation is "},{type:b,tag:g,props:{},children:[{type:a,value:"amazing"}]},{type:a,value:" and, most importantly, "},{type:b,tag:o,props:{},children:[{type:a,value:"free"}]},{type:a,value:". And because it's statically generated, "},{type:b,tag:o,props:{},children:[{type:a,value:"it's fast as hell to load and use"}]},{type:a,value:". So overall, Nuxt.js seems like a very useful and powerful framework, and a great fit for certain use cases. "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"I chose Nuxt.js on a whim after surveying several different static site generation tools (jekyll, gatsby, hugo, etc). I know a little bit of angular, and wanted to give Vue a shot since it seems more lightweight as less opinionated. I know nothing about Vue, and I was able to get this blog up and running in GitHub Pages in about 12 working hours (ran into WSL\u002FBootcamp-related issues, so your time could be less)."}]}]},dir:U,path:"\u002Farticles\u002Fabout",extension:i,createdAt:d,updatedAt:d}],tag:{slug:ag,name:r,toc:[],body:{type:h,children:[]},dir:p,path:ah,extension:i,createdAt:d,updatedAt:d},tags:[{slug:"gaming",name:X,toc:[],body:{type:h,children:[]},dir:p,path:"\u002Ftags\u002Fgaming",extension:i,createdAt:d,updatedAt:d},{slug:"how_to",name:E,toc:[],body:{type:h,children:[]},dir:p,path:"\u002Ftags\u002Fhow_to",extension:i,createdAt:d,updatedAt:d},{slug:"life",name:V,toc:[],body:{type:h,children:[]},dir:p,path:"\u002Ftags\u002Flife",extension:i,createdAt:d,updatedAt:d},{slug:"misc",name:W,toc:[],body:{type:h,children:[]},dir:p,path:"\u002Ftags\u002Fmisc",extension:i,createdAt:d,updatedAt:d},{slug:"opinion",name:Y,toc:[],body:{type:h,children:[]},dir:p,path:"\u002Ftags\u002Fopinion",extension:i,createdAt:d,updatedAt:d},{slug:ag,name:r,toc:[],body:{type:h,children:[]},dir:p,path:ah,extension:i,createdAt:d,updatedAt:d},{slug:"reviews",name:"Reviews",toc:[],body:{type:h,children:[]},dir:p,path:"\u002Ftags\u002Freviews",extension:i,createdAt:d,updatedAt:d},{slug:"technology",name:x,toc:[],body:{type:h,children:[]},dir:p,path:"\u002Ftags\u002Ftechnology",extension:i,createdAt:d,updatedAt:d}]}],fetch:[],mutations:void 0}}("text","element","\n","2020-11-11T21:04:57.967Z","p","a","em","root",".md","true",-1,"span","icon","icon-link","strong","\u002Ftags","code","Programming",2,"h2",3,"h3",true,"Technology","li","div","nofollow","noopener","noreferrer","_blank","How To","brief-summary","Brief Summary","step-by-step-instructions","Step-by-Step Instructions","enabling-virtualization","Enabling Virtualization","disable-compression","Disable Compression","why-run-wsl2-on-mac","Why Run WSL2 on Mac?","sysctl -a | grep machdep.cpu.features","nuxt-content-highlight","pre","language-text","line-numbers","\u002Farticles","Life","Misc","Gaming","Opinion","why-this-site-was-created","Why This Site was Created","a-blog-in-2020-is-kinda-like-a-cassette-tape","A Blog in 2020 is Kinda Like a Cassette Tape","putting-my-jack-of-all-trades-master-of-none-skillset-to-good-use","Putting my \"Jack of all Trades, Master of None\" Skillset to Good Use","how-this-site-was-created","How This Site Was Created","very","programming","\u002Ftags\u002Fprogramming")));