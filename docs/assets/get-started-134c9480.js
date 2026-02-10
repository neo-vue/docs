import{_ as t}from"./doc-code.vue_vue_type_style_index_0_lang-b1e53d5c.js";import{d as n,o as i,f as l,h as o,g as s}from"./index-e4d10795.js";const r={class:"section"},a={class:"content"},p={class:"subsection"},d={class:"content"},u={class:"mb-10"},m={class:"mb-10"},c={class:"subsection mb-20"},f={class:"content"},v={class:"mb-10"},b={class:"mb-10"},_=`import { createApp } from 'vue';
import NeoVue from '@neo-vue/neo-ui';
import App from './App.vue';

const app = createApp(App);

app.use(NeoVue);

app.mount('#app');`,h=`createApp(App);
app.use(NeoVue, {
  theme: {
    primary: '#3333',
    secondary: '#3333',
    accent: '#3333',
    info: '#3333',
    warning: '#3333',
    error: '#3333',
    success: '#3333',
    borderColor: '#3333',
    shadowColor: '#3333',
  }
});

app.mount('#app');`,A=n({__name:"get-started",setup(g){return(y,e)=>(i(),l("div",r,[e[7]||(e[7]=o("div",{class:"title"},"Get started",-1)),o("div",a,[e[6]||(e[6]=o("p",null," Neo VUE is a component library for Vue 3. It is built with TypeScript and SCSS. ",-1)),o("div",p,[e[2]||(e[2]=o("div",{class:"title"},"Download",-1)),o("div",d,[e[0]||(e[0]=o("p",null," To install Neo VUE, run the following command: ",-1)),o("pre",u,[s(t,{value:"npm install @neo-vue/neo-ui",lang:"bash",theme:"light"})]),e[1]||(e[1]=o("p",{class:"mb-10"}," Or if you prefer yarn: ",-1)),o("pre",m,[s(t,{value:"yarn add @neo-vue/neo-ui",lang:"bash",theme:"light"})])])]),o("div",c,[e[5]||(e[5]=o("div",{class:"title"},"Installation",-1)),o("div",f,[e[3]||(e[3]=o("p",null," To use Neo VUE, you need to import the library in your main.ts file: ",-1)),o("pre",v,[s(t,{value:_,theme:"light"})]),e[4]||(e[4]=o("p",null," You can also add options to plugin, for custom final color rendering of components like border, shadow, or main colors : ",-1)),o("pre",b,[s(t,{value:h,theme:"light"})])])])])]))}});export{A as default};
