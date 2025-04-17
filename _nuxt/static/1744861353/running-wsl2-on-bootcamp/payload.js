__NUXT_JSONP__("/running-wsl2-on-bootcamp", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:[{article:{slug:"running-wsl2-on-bootcamp",title:"Running WSL2 on a Mac using Bootcamp",summary:"Getting Microsoft's Windows Subsystem-For-Linux running in Bootcamp is somewhat straightforward, but there are a few gotchas. Read on for the how, and then after that for the why (mac is unix-based. Why not just use that?)",shouldShowTableOfContents:r,shouldShowUpdatedAt:r,createdAt:"2020-11-09T23:41:34.140Z",titleImage:"\u002FbootcampTitle.png",tags:[s,t],toc:[{id:u,depth:o,text:v},{id:w,depth:o,text:x},{id:y,depth:z,text:A},{id:B,depth:z,text:C},{id:D,depth:o,text:E}],body:{type:"root",children:[{type:b,tag:p,props:{id:u},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#brief-summary",tabIndex:i},children:[{type:b,tag:e,props:{className:[j,k]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The steps are:"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Boot into MacOS"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Run "},{type:b,tag:f,props:{},children:[{type:a,value:F}]},{type:a,value:" in the terminal to ensure your mac has virtualization."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Boot into Windows from System Preferences. "},{type:b,tag:m,props:{},children:[{type:a,value:"You MUST do it this way. You cannot power off and boot into Windows"}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Disable decompression on the folder that contains your linux distribution."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"If windows ever restarts, make sure first boot into Mac and repeat step 3."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{id:w},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#step-by-step-instructions",tabIndex:i},children:[{type:b,tag:e,props:{className:[j,k]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:H,props:{id:y},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#enabling-virtualization",tabIndex:i},children:[{type:b,tag:e,props:{className:[j,k]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"Disclaimer:"}]},{type:a,value:" I've tried this on a 2015 16-inch MBP, and a 2017 13-inch MBP. If it doesn't work for you, let me know."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After installing WSL2, you may be greeted "},{type:b,tag:f,props:{},children:[{type:a,value:"with"}]},{type:a,value:" the following cryptic error:"}]},{type:a,value:c},{type:b,tag:n,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Installing, this may take a few minutes...\nWslRegisterDistribution failed with error: 0x80370102\nError: 0x80370102 The virtual machine could not be started because a required feature is not installed.\n\nPress any key to continue...\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You'll get this error when you mac hardware doesn't support CPU virtualization, which is odd because most macs since 2010 certainly "},{type:b,tag:M,props:{},children:[{type:a,value:"do"}]},{type:a,value:" support it. It turns out that this feature needs to be enabled by the BIOS, and can only be enabled on the MacOS side. So you may run into this error, for example, if you've booted into windows from power-on."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To fix this, boot into MacOS, open a terminal, and run "},{type:b,tag:f,props:{},children:[{type:a,value:F}]},{type:a,value:". Ensure that you get a response from that command (You should see \"VMX\" in the response. That is the hardware feature you need)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you do that, you need to boot "},{type:b,tag:M,props:{},children:[{type:a,value:"directly"}]},{type:a,value:" into windows by going to System Preferences \u003E Startup Disk and boot into windows by selecting your Bootcamp partition. By booting into Windows directly from MacOS, the virtualization feature that you need for WSL2 will be enabled."}]},{type:a,value:c},{type:b,tag:n,props:{className:[N]},children:[{type:a,value:q},{type:b,tag:O,props:{className:[],":src":"'\u002Fbootcamp.jpg'"},children:[]},{type:a,value:q},{type:b,tag:e,props:{className:[P,Q]},children:[{type:a,value:"Select your Bootcamp partition and click the \"Restart\" button."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Note that this specific step of going to system preferences, and then to your Bootcamp partition, is absolutely required. "},{type:b,tag:m,props:{},children:[{type:a,value:"Do NOT simply reboot your machine and select your windows partition at boot!"}]},{type:a,value:" If you do so, then it's possible that the virtualization feature you need won't be enabled in Windows."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"Note that if you restart windows, you may need to repeat this process over again (i.e. boot into MacOS, System Preferences \u003E Boot Into Windows)"}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:H,props:{id:B},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#disable-compression",tabIndex:i},children:[{type:b,tag:e,props:{className:[j,k]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You may ALSO get another cryptic error:"}]},{type:a,value:c},{type:b,tag:n,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"The requested operation could not be completed due to a virtual disk system limitation.\nVirtual hard disk files must be uncompressed and unencrypted and must not be sparse.\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To fix this, you need to disable folder encryption and folder compression on the folder where your linux subsystem is installed. Mine was installed at: "},{type:b,tag:f,props:{},children:[{type:a,value:"C:\\Users\\myusername\\AppData\\Local\\Packages\\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you find it, right click on the folder, go the \"General\" tab, click on \"Advanced\" and make sure that both checkboxes are the bottom are unchecked."}]},{type:a,value:c},{type:b,tag:n,props:{className:[N]},children:[{type:a,value:q},{type:b,tag:O,props:{className:["medium"],":src":"'\u002Ffolder.PNG'"},children:[]},{type:a,value:"\n    "},{type:b,tag:e,props:{className:[P,Q]},children:[{type:a,value:"Ensure that the two checkboxes inside of the red square are unchecked."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After doing this, you should be good to go!"}]},{type:a,value:c},{type:b,tag:p,props:{id:D},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#why-run-wsl2-on-mac",tabIndex:i},children:[{type:b,tag:e,props:{className:[j,k]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You might be asking yourself this question when macs themselves are unix-like environments. Well, the term \"unix-like\" should give the answer away: in my opinion, MacOS is NOT a substitute for developing, building, and testing on a real linux distribution. If your target platform is a mac, then great, write all of your code and build scripts on a mac. But if your target platform is linux, much of the code you've written to build out and maintain your environment (i.e. install libraries, configure databases, etc) will not be portable to your actual application servers. Whereas if you use a linux platform all the way through, the portability of your code increases. Your development environment buildout code will never be 100% portable, but I'd argue that the closer you can get your development environment to your actual application servers, the better."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So why not just install a linux VM on Mac? Well, aside from the brief snags mentioned above, I think WSL2 is a far more pleasant (and cheaper, i.e. free) experience than anything like virtualbox or parallels on mac. WSL2 even integrates natively with IDEs like VScode (which is an amazing experience, which I use to develop this website)."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Frunning-wsl2-on-bootcamp",extension:".md",updatedAt:"2025-04-11T01:38:28.935Z"},tags:{Anime:{slug:"anime",name:"Anime"},"How To":{slug:"howto",name:s},Essay:{slug:"essay",name:"Essay"},Gaming:{slug:"gaming",name:"Gaming"},Reviews:{slug:"reviews",name:"Reviews"},Life:{slug:"life",name:"Life"},Programming:{slug:"programming",name:t}},prev:{slug:"why-start-a-blog-in-2020",title:"Why Start a Blog in 2020?"},next:{slug:"how-to-buy-a-display-for-gaming",title:"How to Buy a TV or Monitor For Gaming"}}],fetch:{},mutations:void 0}}("text","element","\n","p","span","code","a","true",-1,"icon","icon-link","li","strong","div",2,"h2","\n  ",true,"How To","Programming","brief-summary","Brief Summary","step-by-step-instructions","Step-by-Step Instructions","enabling-virtualization",3,"Enabling Virtualization","disable-compression","Disable Compression","why-run-wsl2-on-mac","Why Run WSL2 on Mac?","sysctl -a | grep machdep.cpu.features",".","h3","nuxt-content-highlight","pre","language-text","line-numbers","em","imageContainer","img","titleImageCaption","text--secondary")));