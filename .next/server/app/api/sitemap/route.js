"use strict";(()=>{var e={};e.id=436,e.ids=[436],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3078:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>c,patchFetch:()=>m,requestAsyncStorage:()=>p,routeModule:()=>l,serverHooks:()=>d,staticGenerationAsyncStorage:()=>u});var a={};r.r(a),r.d(a,{GET:()=>n});var i=r(3278),s=r(5002),o=r(4877);async function n(){let e=new Date().toISOString().split("T")[0];return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${["","/fitted-wardrobes","/sliding-wardrobe-doors","/walk-in-wardrobes","/home-office-storage","/media-tv-units","/home-libraries","/portfolio","/reviews","/about","/contact","/guides","/guides/fitted-wardrobe-design-ideas","/guides/sliding-door-options","/guides/walk-in-wardrobe-planning","/guides/home-office-storage-solutions","/guides/wardrobe-maintenance-care","/faq","/pricing","/process","/areas-covered","/guarantee","/sustainability"].map(t=>{let r=`https://therecherche.co.uk${t}`,a=""===t?"1.0":t.includes("/guides/")?"0.7":"0.8",i=""===t?"weekly":(t.includes("/guides/"),"monthly");return`
  <url>
    <loc>${r}</loc>
    <lastmod>${e}</lastmod>
    <changefreq>${i}</changefreq>
    <priority>${a}</priority>
    <xhtml:link rel="alternate" hreflang="en-GB" href="${r}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${r}" />
  </url>`}).join("")}
</urlset>`,{headers:{"Content-Type":"application/xml","Cache-Control":"public, s-maxage=86400, stale-while-revalidate=604800"}})}let l=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/sitemap/route",pathname:"/api/sitemap",filename:"route",bundlePath:"app/api/sitemap/route"},resolvedPagePath:"C:\\Users\\simon\\therecherche.co.uk\\src\\app\\api\\sitemap\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:u,serverHooks:d}=l,c="/api/sitemap/route";function m(){return(0,o.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:u})}},3278:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[379],()=>r(3078));module.exports=a})();