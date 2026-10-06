"use strict";(()=>{var e={};e.id=45,e.ids=[45],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9445:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>d,patchFetch:()=>h,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>c,staticGenerationAsyncStorage:()=>u});var o={};r.r(o),r.d(o,{GET:()=>n});var a=r(3278),s=r(5002),i=r(4877);async function n(){return new Response(`# Robots.txt for therecherche.co.uk
User-agent: *
Allow: /

# Sitemap
Sitemap: https://therecherche.co.uk/sitemap.xml

# Disallow admin and private areas
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /*.json$

# Crawl-delay for respectful crawling
Crawl-delay: 10

# Host directive
Host: https://therecherche.co.uk`,{headers:{"Content-Type":"text/plain","Cache-Control":"public, s-maxage=86400, stale-while-revalidate=604800"}})}let p=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/robots/route",pathname:"/api/robots",filename:"route",bundlePath:"app/api/robots/route"},resolvedPagePath:"C:\\Users\\simon\\therecherche.co.uk\\src\\app\\api\\robots\\route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:l,staticGenerationAsyncStorage:u,serverHooks:c}=p,d="/api/robots/route";function h(){return(0,i.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:u})}},3278:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[379],()=>r(9445));module.exports=o})();