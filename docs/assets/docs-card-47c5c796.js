import{_ as p}from"./doc-props-table.vue_vue_type_style_index_0_lang-4818a722.js";import{_ as c}from"./doc-slots-table.vue_vue_type_script_setup_true_lang-15a1518d.js";import{d as m}from"./constants-bb4d541a.js";import{D as r}from"./doc-example-37d5db29.js";import{d as f,r as a,o as b,f as g,h as o,i as t,g as s,w as n,k as h}from"./index-33667c39.js";import"./doc-code.vue_vue_type_style_index_0_lang-9a51bb32.js";const v={class:"section"},x={class:"content"},_={class:"subsection"},w={class:"content"},y={class:"d-flex justify-between align-start mb-10"},C={class:"subsection"},S={class:"content"},D={class:"d-flex justify-between align-start mb-10"},J={class:"d-flex justify-end"},j={class:"subsection"},q={class:"content"},E={class:"subsection"},M={class:"content"},N=`<neo-card padding="20px">
  <div class="d-flex justify-between">
    <neo-profile class="mb-10" img="../../profile.png" width="50px" height="50px" border="none" shadow="none" rounded="circle" />
    <neo-button rounded="round" shadow="none">Edit profile</neo-button>
  </div>
  <div class="d-flex flex-column">
    <h3 class="ma-0">John Doe</h3>
    <p class="ma-0">My name is John doe !</p>
  </div>
</neo-card>`,P=`<neo-card padding="20px">
  <template #header>
    <div class="d-flex justify-between align-start mb-10">
      <neo-profile img="../../profile.png" width="50px" height="50px" border="none" shadow="none" rounded="circle" />
      <neo-button rounded="round" shadow="none" class="pa-0 ma-0">Edit profile</neo-button>
    </div>
    <div class="d-flex flex-column">
      <h3 class="ma-0">John Doe</h3>
      <p class="ma-0">My name is John doe !</p>
    </div>
  </template>

  <div class="content border-lite my-5 pa-5">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
      ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
      mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
  </div>

  <template #footer>
    <div class="d-flex justify-end">
      <neo-button rounded="round" shadow="none" class="pa-0 ma-0">See more</neo-button>
    </div>
  </template>
</neo-card>`,L=f({__name:"docs-card",setup(k){const u=[{name:"default",props:[],description:"Body of the card"},{name:"header",props:[],description:"Header of the card"},{name:"footer",props:[],description:"Footer of the card"}];return(B,e)=>{const d=a("neo-profile"),i=a("neo-button"),l=a("neo-card");return b(),g("div",v,[e[15]||(e[15]=o("div",{class:"title"},"Card",-1)),o("div",x,[e[14]||(e[14]=o("p",null,[o("strong",null,"Neo-card"),t(" allowing you to show content. Card is a flexible container component. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.")],-1)),o("div",_,[e[3]||(e[3]=o("div",{class:"title"},"Basic",-1)),o("div",w,[e[2]||(e[2]=o("p",null,"You can use natively neo-card in your template. Here is an example :",-1)),s(r,{"code-snippets":[{code:N,lang:"html"}]},{default:n(()=>[s(l,{padding:"20px"},{default:n(()=>[o("div",y,[s(d,{img:"../../profile.png",width:"50px",height:"50px",border:"none",shadow:"none",rounded:"circle"}),s(i,{rounded:"round",shadow:"none",class:"pa-0 ma-0"},{default:n(()=>e[0]||(e[0]=[t("Edit profile")])),_:1,__:[0]})]),e[1]||(e[1]=o("div",{class:"d-flex flex-column"},[o("h3",{class:"ma-0"},"John Doe"),o("p",{class:"ma-0"},"My name is John doe !")],-1))]),_:1,__:[1]})]),_:1},8,["code-snippets"])])]),o("div",C,[e[9]||(e[9]=o("div",{class:"title"},"Advanced",-1)),o("div",S,[e[8]||(e[8]=o("p",null,"You can define different slots to customize your card. For example, you can create an header or footer, check this out :",-1)),s(r,{"code-snippets":[{code:P,lang:"html"}]},{default:n(()=>[s(l,{padding:"20px"},{header:n(()=>[o("div",D,[s(d,{img:"../../profile.png",width:"50px",height:"50px",border:"none",shadow:"none",rounded:"circle"}),s(i,{rounded:"round",shadow:"none",class:"pa-0 ma-0"},{default:n(()=>e[4]||(e[4]=[t("Edit profile")])),_:1,__:[4]})]),e[5]||(e[5]=o("div",{class:"d-flex flex-column"},[o("h3",{class:"ma-0"},"John Doe"),o("p",{class:"ma-0"},"My name is John doe !")],-1))]),footer:n(()=>[o("div",J,[s(i,{rounded:"round",shadow:"none",class:"pa-0 ma-0"},{default:n(()=>e[6]||(e[6]=[t("See more")])),_:1,__:[6]})])]),default:n(()=>[e[7]||(e[7]=o("div",{class:"content border-lite my-5 pa-5"},[o("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.")],-1))]),_:1,__:[7]})]),_:1},8,["code-snippets"])])]),o("div",j,[e[11]||(e[11]=o("div",{class:"title"},"Props",-1)),o("div",q,[e[10]||(e[10]=o("p",null,"You can use the following props to customize your card:",-1)),s(p,{items:h(m)},null,8,["items"])])]),o("div",E,[e[13]||(e[13]=o("div",{class:"title"},"Slots",-1)),o("div",M,[e[12]||(e[12]=o("p",null,"You can use the following slots to customize your card:",-1)),s(c,{items:u})])])])])}}});export{L as default};
