import{_ as u}from"./doc-props-table.vue_vue_type_style_index_0_lang-0daef48d.js";import{_ as c}from"./doc-slots-table.vue_vue_type_script_setup_true_lang-6fc592a1.js";import{d as f}from"./constants-bb4d541a.js";import{D as v}from"./doc-example-8c52533f.js";import{d as y,b as i,e as h,r as k,o as C,f as _,h as e,i as w,g as s,w as o}from"./index-e4d10795.js";import"./doc-code.vue_vue_type_style_index_0_lang-b1e53d5c.js";const b={class:"section"},g={class:"content"},S={class:"subsection"},x={class:"content"},B={class:"d-flex flex-wrap justify-center mt-5 gap-15"},D={class:"subsection"},V={class:"content"},P={class:"subsection"},N={class:"content"},z=`<neo-step v-model="activeStep" :steps="steps">
  <template #details>
    <div>
      <p>Content of the first step (Details).</p>
    </div>
  </template>
  <template #payment>
    <div>
      <p>Content of the second step (Payment).</p>
    </div>
  </template>
  <template #confirmation>
    <div>
      <p>Content of the last step (Confirmation).</p>
    </div>
  </template>
</neo-step>`,F=`import { ref } from 'vue';

const activeStep = ref('details');

const steps = ref([
  { key: 'details', title: 'Details' },
  { key: 'payment', title: 'Payment' },
  { key: 'confirmation', title: 'Confirmation' }
]);`,J=y({__name:"docs-step",setup(j){const n=i("details"),l=i([{key:"details",title:"Details"},{key:"payment",title:"Payment"},{key:"confirmation",title:"Confirmation"}]),a=h(()=>window.innerWidth<=768),p=[{name:"modelValue",description:"The key of the active step",type:["String"],default:"null",required:!1},{name:"steps",description:"The list of steps to display",type:["Array<{ key: string, title: string }"],default:"null",required:!0},{name:"hideFooter",description:"Hides the footer containing the action buttons.",type:["Boolean"],default:"false",required:!1},...f],d=[{name:"[key]",description:"Dynamic slot for the content of each step. Replace [key] with the key of your step.",props:[]},{name:"active-header",description:"Slot to customize the active step header.",props:["step: Object","index: Number"]},{name:"footer",description:"Slot to customize the footer actions.",props:["previousStep: Function","nextStep: Function","isFirst: Boolean","isLast: Boolean"]}];return(q,t)=>{const r=k("neo-step");return C(),_("div",b,[t[11]||(t[11]=e("div",{class:"title"},"Step",-1)),e("div",g,[t[10]||(t[10]=e("p",null,[e("strong",null,"Neo-step"),w(" is a component that allows you to display a process in several steps.")],-1)),e("div",S,[t[5]||(t[5]=e("div",{class:"title"},"Basic",-1)),e("div",x,[t[4]||(t[4]=e("p",null,"Here is a basic example of how to use the neo-step component:",-1)),s(v,{"code-snippets":[{code:F,lang:"js"},{code:z,lang:"html"}]},{default:o(()=>[e("div",B,[s(r,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=m=>n.value=m),steps:l.value,width:a.value?"100%":"auto"},{details:o(()=>t[1]||(t[1]=[e("div",null,[e("p",null,"Content of the first step (Details).")],-1)])),payment:o(()=>t[2]||(t[2]=[e("div",null,[e("p",null,"Content of the second step (Payment).")],-1)])),confirmation:o(()=>t[3]||(t[3]=[e("div",null,[e("p",null,"Content of the last step (Confirmation).")],-1)])),_:1},8,["modelValue","steps","width"])])]),_:1},8,["code-snippets"])])]),e("div",D,[t[7]||(t[7]=e("div",{class:"title"},"Props",-1)),e("div",V,[t[6]||(t[6]=e("p",null,"You can use the following props to customize the component:",-1)),s(u,{items:p})])]),e("div",P,[t[9]||(t[9]=e("div",{class:"title"},"Slots",-1)),e("div",N,[t[8]||(t[8]=e("p",null,"You can use the following slots to customize the component:",-1)),s(c,{items:d})])])])])}}});export{J as default};
