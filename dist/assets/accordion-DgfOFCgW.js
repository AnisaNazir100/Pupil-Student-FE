import{r as u,cm as N,cn as $,b3 as T,cM as K,cr as B,br as E,ct as Q,bs as h,eT as Y,aW as Z,j as e,cx as k,cy as G,c$ as ee,M as L,T as a,c as oe,B as ie,S as C,X as ae,G as S}from"./index-Dhb-fOBp.js";import{C as se,a as te,b as ne}from"./ComponentSkeleton-CdPpPS-v.js";import{E as re}from"./EmojiHappy-CC3563X2.js";import{C as de}from"./Clock-BwW73QNk.js";import{I as ce}from"./Image-HXSK629e.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";const F=u.createContext({});function le(o){return $("MuiAccordion",o)}const R=N("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),pe=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],ue=o=>{const{classes:i,square:s,expanded:t,disabled:c,disableGutters:p}=o;return G({root:["root",!s&&"rounded",t&&"expanded",c&&"disabled",!p&&"gutters"],region:["region"]},le,i)},me=T(K,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,i)=>{const{ownerState:s}=o;return[{[`& .${R.region}`]:i.region},i.root,!s.square&&i.rounded,!s.disableGutters&&i.gutters]}})(({theme:o})=>{const i={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],i),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],i)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${R.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o})=>({variants:[{props:i=>!i.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:i=>!i.disableGutters,style:{[`&.${R.expanded}`]:{margin:"16px 0"}}}]})),n=u.forwardRef(function(i,s){const t=B({props:i,name:"MuiAccordion"}),{children:c,className:p,defaultExpanded:l=!1,disabled:g=!1,disableGutters:x=!1,expanded:M,onChange:y,square:v=!1,slots:f={},slotProps:D={},TransitionComponent:w,TransitionProps:b}=t,A=E(t,pe),[m,W]=Q({controlled:M,default:l,name:"Accordion",state:"expanded"}),V=u.useCallback(J=>{W(!m),y&&y(J,!m)},[m,y,W]),[I,...z]=u.Children.toArray(c),q=u.useMemo(()=>({expanded:m,disabled:g,disableGutters:x,toggle:V}),[m,g,x,V]),P=h({},t,{square:v,disabled:g,disableGutters:x,expanded:m}),U=ue(P),H=h({transition:w},f),_=h({transition:b},D),[O,X]=Y("transition",{elementType:Z,externalForwardedProps:{slots:H,slotProps:_},ownerState:P});return e.jsxs(me,h({className:k(U.root,p),ref:s,ownerState:P,square:v},A,{children:[e.jsx(F.Provider,{value:q,children:I}),e.jsx(O,h({in:m,timeout:"auto"},X,{children:e.jsx("div",{"aria-labelledby":I.props.id,id:I.props["aria-controls"],role:"region",className:U.region,children:z})}))]}))});function ge(o){return $("MuiAccordionDetails",o)}N("MuiAccordionDetails",["root"]);const he=["className"],xe=o=>{const{classes:i}=o;return G({root:["root"]},ge,i)},ye=T("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,i)=>i.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),r=u.forwardRef(function(i,s){const t=B({props:i,name:"MuiAccordionDetails"}),{className:c}=t,p=E(t,he),l=t,g=xe(l);return e.jsx(ye,h({className:k(g.root,c),ref:s,ownerState:l},p))});function be(o){return $("MuiAccordionSummary",o)}const j=N("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Ae=["children","className","expandIcon","focusVisibleClassName","onClick"],Se=o=>{const{classes:i,expanded:s,disabled:t,disableGutters:c}=o;return G({root:["root",s&&"expanded",t&&"disabled",!c&&"gutters"],focusVisible:["focusVisible"],content:["content",s&&"expanded",!c&&"contentGutters"],expandIconWrapper:["expandIconWrapper",s&&"expanded"]},be,i)},je=T(ee,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,i)=>i.root})(({theme:o})=>{const i={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],i),[`&.${j.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${j.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${j.disabled})`]:{cursor:"pointer"},variants:[{props:s=>!s.disableGutters,style:{[`&.${j.expanded}`]:{minHeight:64}}}]}}),Ce=T("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,i)=>i.content})(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:i=>!i.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${j.expanded}`]:{margin:"20px 0"}}}]})),Te=T("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,i)=>i.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${j.expanded}`]:{transform:"rotate(180deg)"}})),d=u.forwardRef(function(i,s){const t=B({props:i,name:"MuiAccordionSummary"}),{children:c,className:p,expandIcon:l,focusVisibleClassName:g,onClick:x}=t,M=E(t,Ae),{disabled:y=!1,disableGutters:v,expanded:f,toggle:D}=u.useContext(F),w=m=>{D&&D(m),x&&x(m)},b=h({},t,{expanded:f,disabled:y,disableGutters:v}),A=Se(b);return e.jsxs(je,h({focusRipple:!1,disableRipple:!0,disabled:y,component:"div","aria-expanded":f,className:k(A.root,p),focusVisibleClassName:k(A.focusVisible,g),onClick:w,ref:s,ownerState:b},M,{children:[e.jsx(Ce,{className:A.content,ownerState:b,children:c}),l&&e.jsx(Te,{className:A.expandIconWrapper,ownerState:b,children:l})]}))});function Le(){return e.jsx(L,{title:"Basic",codeString:`<Accordion>
  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    <Typography variant="h6">Accordion 01</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    <Typography variant="h6">Accordion 02</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    <Typography variant="h6">Accordion 03</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
    <Typography variant="h6">Accordion 04</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
    <Typography variant="h6">Accordion 05</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>`,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(d,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 01"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{children:[e.jsx(d,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 02"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{children:[e.jsx(d,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 03"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{children:[e.jsx(d,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 04"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{children:[e.jsx(d,{"aria-controls":"panel5d-content",id:"panel5d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 05"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})}function ve(){const[o,i]=u.useState(!1),s=c=>(p,l)=>{i(l?c:!1)};return e.jsx(L,{title:"Disabled",codeString:`<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    <Typography variant="h6">Accordion 01</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    <Typography variant="h6">Accordion 02</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    <Typography variant="h6">Accordion 03</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} disabled>
  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
    <Typography variant="h6">Accordion 04</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} disabled>
  <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
    <Typography variant="h6">Accordion 05</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>`,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{expanded:o==="panel1",onChange:s("panel1"),children:[e.jsx(d,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 01"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:o==="panel2",onChange:s("panel2"),children:[e.jsx(d,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 02"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:o==="panel3",onChange:s("panel3"),children:[e.jsx(d,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 03"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:o==="panel4",onChange:s("panel4"),disabled:!0,children:[e.jsx(d,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 04"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:o==="panel5",onChange:s("panel5"),disabled:!0,children:[e.jsx(d,{"aria-controls":"panel5d-content",id:"panel5d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 05"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})}function fe(){const[o,i]=u.useState("panel2"),s=c=>{i(c)};return e.jsx(L,{title:"Controlled",codeString:`<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    <Typography variant="h6">Accordion 01</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    <Typography variant="h6">Accordion 02</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    <Typography variant="h6">Accordion 03</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
    <Typography variant="h6">Accordion 04</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>`,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{expanded:o==="panel1",onChange:()=>s("panel1"),children:[e.jsx(d,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 01"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:o==="panel2",onChange:()=>s("panel2"),children:[e.jsx(d,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 02"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:o==="panel3",onChange:()=>s("panel3"),children:[e.jsx(d,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 03"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:o==="panel4",onChange:()=>s("panel4"),children:[e.jsx(d,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 04"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})}function De(){const[o,i]=u.useState(!1),s=c=>(p,l)=>{i(l?c:!1)};return e.jsx(L,{title:"Fixed",codeString:`<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    <Typography variant="h6">Accordion 01</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    <Typography variant="h6">Accordion 02</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    <Typography variant="h6">Accordion 03</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded>
  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
    <Typography variant="h6">Accordion 04</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>`,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{expanded:o==="panel1",onChange:s("panel1"),children:[e.jsx(d,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 01"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:o==="panel2",onChange:s("panel2"),children:[e.jsx(d,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 02"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:o==="panel3",onChange:s("panel3"),children:[e.jsx(d,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 03"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:!0,children:[e.jsx(d,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsx(a,{variant:"h6",children:"Accordion 04"})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})}function Re(){const o=oe(),[i,s]=u.useState("panel1"),t=p=>(l,g)=>{s(g?p:!1)};return e.jsx(L,{title:"Customized",codeString:`<Box
  sx={{
    '& .MuiAccordion-root': {
      borderColor: theme.palette.divider,
      '& .MuiAccordionSummary-root': {
        bgcolor: 'transparent',
        flexDirection: 'row'
      },
      '& .MuiAccordionDetails-root': {
        borderColor: theme.palette.divider
      },
      '& .Mui-expanded': {
        color: 'primary.main'
      }
    }
  }}
>
  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <EmojiHappy />
        <Typography variant="h6">Accordion 01</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Stack spacing={2}>
        <Typography variant="h5">Lorem ipsum dolor sit amet,</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </Stack>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Profile />
        <Typography variant="h6">Accordion 02</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Clock />
        <Typography variant="h6">Accordion 03</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Image />
        <Typography variant="h6">Accordion 04</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
</Box>`,children:e.jsxs(ie,{sx:{"& .MuiAccordion-root":{borderColor:o.palette.divider,"& .MuiAccordionSummary-root":{bgcolor:"transparent",flexDirection:"row","&:focus-visible":{bgcolor:"primary.lighter"}},"& .MuiAccordionDetails-root":{borderColor:o.palette.divider},"& .Mui-expanded":{color:"primary.main"}}},children:[e.jsxs(n,{expanded:i==="panel1",onChange:t("panel1"),children:[e.jsx(d,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsxs(C,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(re,{size:18}),e.jsx(a,{variant:"h6",children:"Accordion 01"})]})}),e.jsx(r,{children:e.jsxs(C,{spacing:2,children:[e.jsx(a,{variant:"h5",children:"Lorem ipsum dolor sit amet,"}),e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}),e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]})})]}),e.jsxs(n,{expanded:i==="panel2",onChange:t("panel2"),children:[e.jsx(d,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsxs(C,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(ae,{size:18}),e.jsx(a,{variant:"h6",children:"Accordion 02"})]})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:i==="panel3",onChange:t("panel3"),children:[e.jsx(d,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsxs(C,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(de,{size:18}),e.jsx(a,{variant:"h6",children:"Accordion 03"})]})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{expanded:i==="panel4",onChange:t("panel4"),children:[e.jsx(d,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsxs(C,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(ce,{size:18}),e.jsx(a,{variant:"h6",children:"Accordion 04"})]})}),e.jsx(r,{children:e.jsx(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})}function Be(){return e.jsxs(se,{children:[e.jsx(te,{title:"Accordion",caption:"Lists are continuous, vertical indexes of text or images.",directory:"src/pages/components-overview/accordion",link:"https://mui.com/material-ui/react-accordion/"}),e.jsx(ne,{children:e.jsxs(S,{container:!0,spacing:3,children:[e.jsx(S,{item:!0,xs:12,lg:6,children:e.jsx(Le,{})}),e.jsx(S,{item:!0,xs:12,lg:6,children:e.jsx(ve,{})}),e.jsx(S,{item:!0,xs:12,lg:6,children:e.jsx(fe,{})}),e.jsx(S,{item:!0,xs:12,lg:6,children:e.jsx(De,{})}),e.jsx(S,{item:!0,xs:12,lg:6,children:e.jsx(Re,{})})]})})]})}export{Be as default};
