import{d as u,t as l,K as m,E as c,G as i,o as p,b as f,i as d,B as t}from"../modules/vue-BaJc6KuR.js";import{u as _}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CbesUEDK.js";import{u as v}from"./context-Yw3Y9qOk.js";import"../index-p6uNHFrC.js";import"../modules/shiki-B0Gxe0S4.js";const k=u({__name:"DrawingLayer",setup(g){const{drauu:e,drawingEnabled:o,loadCanvas:s}=_(),r=v().$scale,n=l();return m(()=>{e.mount(n.value,n.value.parentElement),c(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),s()}),i(()=>{e.unmount()}),(a,w)=>(p(),f("svg",{ref_key:"svg",ref:n,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!t(o),"touch-none":t(o)}])},null,2))}});export{k as default};