var titleTime,OriginTitle=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?($('[rel="icon"]').attr("href","/joke.ico"),document.title="看不见我🙈~看不见我🙈~",clearTimeout(titleTime)):($('[rel="icon"]').attr("href","/favicon.ico"),document.title=" ( ๑•̀ㅂ•́) ✧被发现了～",titleTime=setTimeout((function(){document.title=OriginTitle}),2e3))}));