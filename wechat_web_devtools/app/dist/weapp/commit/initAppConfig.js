"use strict";function init(){var r=require("fs"),t=require("path");_exports=function(e,n,o){var i=e.projectpath,a=t.join(i,"app.json"),s=void 0;try{s=r.readFileSync(a,"utf8")}catch(p){return void o("未找到入口 app.json 文件，或者文件读取失败，请检查后重试。")}try{s=JSON.parse(s)}catch(p){return void o("Parse app.json 失败，错误信息: "+p.toString())}for(var c=s.pages||[],u=0,v=c.length;u<v;u++){var j=c[u],d=t.join(i,j+".json");if(r.existsSync(d))try{JSON.parse(r.readFileSync(d,"utf8"))}catch(p){return void o("Parse "+j+".json 失败，错误信息: "+p.toString())}}o(null,{})}}var _exports;init(),module.exports=_exports;