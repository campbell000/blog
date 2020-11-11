__NUXT_JSONP__("/posts/how_to", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:[{articles:[{slug:"running-wsl2-on-bootcamp",title:"Running WSL2 on a Mac using Bootcamp",summary:"Getting Microsoft's Windows Subsystem-For-Linux running in Bootcamp is somewhat straightforward, but there are a few gotchas. Read on for the how, and then after that for the why (mac is unix-based. Why not just use that?)",shouldShowTableOfContents:true,shouldShowUpdatedAt:false,titleImage:"bootcampTitle.png",tags:[p,q,w,q],toc:[{id:x,depth:r,text:y},{id:z,depth:r,text:A},{id:B,depth:C,text:D},{id:E,depth:C,text:F},{id:G,depth:r,text:H}],body:{type:f,children:[{type:b,tag:s,props:{id:x},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#brief-summary",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The brief TLDR is:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:"Boot into MacOS"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:"Run "},{type:b,tag:i,props:{},children:[{type:a,value:I}]},{type:a,value:" to remind your mac that it can do things"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:"Disable decompression on the folder that contains your linux distribution."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{id:z},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#step-by-step-instructions",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:J,props:{id:B},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#enabling-virtualization",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"Disclaimer:"}]},{type:a,value:" I've tried this on a 2015 16-inch MBP, and a 2017 13-inch MBP. If it doesn't work for you. Let me know."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"After installing WSL2, you may be greeted "},{type:b,tag:i,props:{},children:[{type:a,value:"with"}]},{type:a,value:" the following error:"}]},{type:a,value:c},{type:b,tag:v,props:{className:[K]},children:[{type:b,tag:L,props:{className:[M,N]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Installing, this may take a few minutes...\nWslRegisterDistribution failed with error: 0x80370102\nError: 0x80370102 The virtual machine could not be started because a required feature is not installed.\n\nPress any key to continue...\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You'll get this error when you mac hardware doesn't support CPU virtualization, which is odd because most macs made in the past 7 years support it. It turns out that this feature needs to be enabled, and can only be enabled on the MAC side. So you may run into this error, for example, if you've booted directly into windows. "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"So boot into MacOS, open a terminal, and run "},{type:b,tag:i,props:{},children:[{type:a,value:I}]},{type:a,value:". Ensure that you get a response from that command (You should see \"VMX\" in the response. That is the hardware feature you need)."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once you do that, you need to boot "},{type:b,tag:"em",props:{},children:[{type:a,value:"directly"}]},{type:a,value:" into windows by going to System Preferences \u003E Startup Disk and boot into windows that way. "},{type:b,tag:u,props:{},children:[{type:a,value:"Do not simply reboot your machine and select windows at boot"}]},{type:a,value:". "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"Also note that you'll need to re-do this step if you ever reboot windows!"}]},{type:a,value:". Thanks, Apple!"}]},{type:a,value:c},{type:b,tag:J,props:{id:E},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#disable-compression",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You may ALSO get another cryptic error:"}]},{type:a,value:c},{type:b,tag:v,props:{className:[K]},children:[{type:b,tag:L,props:{className:[M,N]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"The requested operation could not be completed due to a virtual disk system limitation.\nVirtual hard disk files must be uncompressed and unencrypted and must not be sparse.\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To fix this, you need to disable folder encryption and folder compression. You can do this by navigating to the folder in windows explorer (mine was at "},{type:b,tag:i,props:{},children:[{type:a,value:"C:\\Users\\myusername\\AppData\\Local\\Packages\\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc"}]},{type:a,value:"), right click on the folder, go the \"General\" tab, click on \"Advanced\" and make sure that both checkboxes are the bottom are unchecked."}]},{type:a,value:c},{type:b,tag:v,props:{className:["imageContainer"]},children:[{type:a,value:"\n  "},{type:b,tag:"img",props:{className:["medium"],":src":"'folder.PNG'"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"After doing this, you should be good to go!"}]},{type:a,value:c},{type:b,tag:s,props:{id:G},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#why-run-wsl2-on-mac",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You might be asking yourself this question when macs themselves are unix-like environments. Well, the term \"unix-like\" should give the answer away: in my opinion, MacOS is NOT a substitute for developing, building, and testing on a real linux distribution. If your target platform is a mac, then great, write all of your code and build scripts on a mac. But if your target platform is linux, much of the code you've written to build out and maintain your environment (i.e. install libraries, configure databases, etc) will not be portable to your actual application servers. Whereas if you use a linux platform all the way through, the portability of your code increases. Your development environment buildout code will never be 100% portable, but I'd argue that the closer you can get your development environment to your actual application servers, the better."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"So why not just install a linux VM on Mac? Well, aside from the brief snags mentioned above, I think WSL2 is a far more pleasant (and cheaper, i.e. free) experience than anything like virtualbox or parallels on mac. WSL2 even integrates natively with IDEs like VScode (which is an amazing experience, which I use to develop this website)."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Frunning-wsl2-on-bootcamp",extension:g,createdAt:"2020-11-11T18:02:27.070Z",updatedAt:"2020-11-11T19:34:56.370Z"}],tag:{slug:O,name:p,toc:[],body:{type:f,children:[]},dir:h,path:P,extension:g,createdAt:d,updatedAt:d},tags:[{slug:"gaming",name:"Gaming",toc:[],body:{type:f,children:[]},dir:h,path:"\u002Ftags\u002Fgaming",extension:g,createdAt:d,updatedAt:d},{slug:O,name:p,toc:[],body:{type:f,children:[]},dir:h,path:P,extension:g,createdAt:d,updatedAt:d},{slug:"life",name:"Life",toc:[],body:{type:f,children:[]},dir:h,path:"\u002Ftags\u002Flife",extension:g,createdAt:d,updatedAt:d},{slug:"misc",name:"Misc",toc:[],body:{type:f,children:[]},dir:h,path:"\u002Ftags\u002Fmisc",extension:g,createdAt:d,updatedAt:d},{slug:"opinion",name:"Opinion",toc:[],body:{type:f,children:[]},dir:h,path:"\u002Ftags\u002Fopinion",extension:g,createdAt:d,updatedAt:d},{slug:"programming",name:q,toc:[],body:{type:f,children:[]},dir:h,path:"\u002Ftags\u002Fprogramming",extension:g,createdAt:d,updatedAt:d},{slug:"reviews",name:"Reviews",toc:[],body:{type:f,children:[]},dir:h,path:"\u002Ftags\u002Freviews",extension:g,createdAt:d,updatedAt:d},{slug:"technology",name:w,toc:[],body:{type:f,children:[]},dir:h,path:"\u002Ftags\u002Ftechnology",extension:g,createdAt:d,updatedAt:d}]}],fetch:[],mutations:void 0}}("text","element","\n","2020-11-09T12:35:08.950Z","p","root",".md","\u002Ftags","code","a","true",-1,"span","icon","icon-link","How To","Programming",2,"h2","li","strong","div","Technology","brief-summary","Brief Summary","step-by-step-instructions","Step-by-Step Instructions","enabling-virtualization",3,"Enabling Virtualization","disable-compression","Disable Compression","why-run-wsl2-on-mac","Why Run WSL2 on Mac?","sysctl -a | grep machdep.cpu.features","h3","nuxt-content-highlight","pre","language-text","line-numbers","how_to","\u002Ftags\u002Fhow_to")));