import{j as e,M as l,G as n,d as t,eD as o,b3 as D,eE as z,r as d,P as b,eF as v,H as W,dg as O,T as x,B as I,bU as C,U as N,Y as f,aW as Y,cM as q,a2 as E,av as B,eG as R,S as p,d0 as L,aa as T,be as w,au as g,bf as m,eH as F,eI as G,cd as V,eJ as A,bJ as j,eK as H,bI as M,eL as U,b4 as a}from"./index-Dhb-fOBp.js";import{C as Z,a as K,b as J}from"./ComponentSkeleton-CdPpPS-v.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";function $(){return e.jsx(l,{title:"Color Variants",codeString:`<Button variant="contained" onClick={() => enqueueSnackbar('This is default message.')}>
  Default
</Button>
<Button variant="contained" onClick={() => enqueueSnackbar('This is success message', { variant: 'success' })}>
  success
</Button>
<Button variant="contained" onClick={() => enqueueSnackbar('This is warning message', { variant: 'warning' })}>
  Warning
</Button>
<Button variant="contained" onClick={() => enqueueSnackbar('This is info message', { variant: 'info' })}>
  Info
</Button>
<Button variant="contained" onClick={() => enqueueSnackbar('This is error message', { variant: 'error' })}>
  Error
</Button>
`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is default message."),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"success",onClick:()=>o("This is success message",{variant:"success"}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"warning",onClick:()=>o("This is warning message",{variant:"warning"}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"info",onClick:()=>o("This is info message",{variant:"info"}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"error",onClick:()=>o("This is info message",{variant:"error"}),children:"Error"})})]})})}const Q=D(z)({"@media (min-width:600px)":{minWidth:"344px !important"}});function y({id:r,message:i},s){const{closeSnackbar:c}=v(),[u,k]=d.useState(!1),h=d.useCallback(()=>{k(P=>!P)},[]),S=d.useCallback(()=>{c(r)},[r,c]);return e.jsx(Q,{ref:s,children:e.jsxs(W,{sx:{bgcolor:"warning.light",width:"100%"},children:[e.jsxs(O,{sx:{padding:"8px 8px 8px 16px",justifyContent:"space-between"},children:[e.jsx(x,{variant:"subtitle2",children:i}),e.jsxs(I,{sx:{marginLeft:"auto"},children:[e.jsx(C,{"aria-label":"Show more",sx:{p:1,transition:"all .2s",transform:u?"rotate(180deg)":"rotate(0deg)"},onClick:h,children:e.jsx(N,{})}),e.jsx(C,{sx:{p:1,transition:"all .2s"},onClick:S,children:e.jsx(f,{style:{transform:"rotate(45deg)"}})})]})]}),e.jsx(Y,{in:u,timeout:"auto",unmountOnExit:!0,children:e.jsxs(q,{sx:{padding:2,borderTopLeftRadius:0,borderTopRightRadius:0,bgcolor:"warning.lighter"},children:[e.jsx(x,{gutterBottom:!0,children:"PDF ready"}),e.jsx(t,{size:"small",startIcon:e.jsx(E,{variant:"Bold",style:{fontSize:16,marginTop:-2}}),sx:{"&:hover":{bgcolor:"transparent"}},children:"Download now"})]})})]})})}const X=d.forwardRef(y);function _(){return e.jsx(l,{title:"Custom Component",codeString:`<Button
  variant="outlined"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() => {
    // third party
    enqueueSnackbar("You're report is ready", {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      content: (key: SnackbarKey, message: SnackbarMessage) => <CustomNotistack id={key} message={message} />
    });
  }}
>
  Show snackbar
</Button>`,children:e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{o("You're report is ready",{anchorOrigin:{vertical:"bottom",horizontal:"right"},content:(i,s)=>e.jsx(X,{id:i,message:s})})},children:"Show snackbar"})})}y.propTypes={id:b.any,message:b.any};function ee(){const[r,i]=d.useState(!1),s=u=>{i(u.target.checked),R(u.target.checked)};return e.jsxs(l,{title:"Dense",codeString:`<Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
Dense margins
<Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => enqueueSnackbar('Your notification here')}>
  Show snackbar
</Button>`,children:[e.jsx(B,{checked:r,onChange:s,inputProps:{"aria-label":"controlled"}}),"Dense margins",e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>o("Your notification here"),children:"Show snackbar"})]})}function ne(){const{closeSnackbar:r}=v();return e.jsx(l,{title:"Dismiss Programmatically",codeString:`<Button variant="outlined" 
  onClick={() => enqueueSnackbar('No connection!', { variant: 'error',persist: true, anchorOrigin: { horizontal: 'center', vertical: 'bottom' }})}>
  Back Online
</Button>
<Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => closeSnackbar()}>
    Back Online
</Button>`,children:e.jsxs(p,{flexDirection:"row",justifyContent:"space-between",children:[e.jsx(t,{variant:"outlined",fullWidth:!0,color:"error",sx:{marginBlockStart:2,marginInlineEnd:2},onClick:()=>o("No connection!",{variant:"error",persist:!0,anchorOrigin:{horizontal:"center",vertical:"bottom"}}),children:"Simulate connection loss"}),e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>r(),children:"Back Online"})]})})}function te(){const[r,i]=d.useState(1),s=(h,S)=>{typeof S=="number"&&i(S)},c=[{value:1},{value:3},{value:5},{value:7},{value:9},{value:11}];function u(h){return h===11?"persist":`${h}s`}return e.jsxs(l,{title:"Hide Duration",codeString:`<Button
  variant="contained"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() => {
    if (value !== 11) {
      enqueueSnackbar('Your notification here', { autoHideDuration: value * 1000 });
    } else {
      enqueueSnackbar('Your notification here', { persist: true });
    }
  }}
>
  Show Snackbar
</Button>`,children:[e.jsx(L,{value:r,min:1,step:2,max:11,valueLabelDisplay:"on",marks:c,getAriaValueText:u,valueLabelFormat:u,onChange:s}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{r!==11?o("Your notification here",{autoHideDuration:r*1e3}):o("Your notification here",{persist:!0})},children:"Show Snackbar"})]})}function ae(){const[r,i]=d.useState("usedefault"),s=u=>{i(u.target.value)};return e.jsxs(l,{title:"With Icons",codeString:`<Button
variant="contained"
fullWidth
sx={{ marginBlockStart: 2 }}
onClick={() => {
  enqueueSnackbar('Your notification here', { variant: 'info' });
  dispatch(
    handlerIconVariants({
      iconVariant: value
    })
  );
}}
>
  Show Snackbar
</Button>`,children:[e.jsx(T,{children:e.jsxs(w,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",value:r,onChange:s,name:"row-radio-buttons-group",children:[e.jsx(g,{value:"usedefault",control:e.jsx(m,{}),label:"Use Default"}),e.jsx(g,{value:"useemojis",control:e.jsx(m,{}),label:"Use Emojis"}),e.jsx(g,{value:"hide",control:e.jsx(m,{}),label:"Hide"})]})}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{o("Your notification here",{variant:"info"}),F(r)},children:"Show Snackbar"})]})}function re(){const r={minWidth:"auto"},{snackbar:i}=G(),[s,c]=d.useState(3),u=()=>{o("Your notification here"),A(s)};return e.jsxs(l,{title:"Maximum snackbars",codeString:`<Button
variant="contained"
fullWidth
sx={{ marginBlockStart: 2 }}
onClick={() => {
  enqueueSnackbar('Your notification here');
  handlerIncrease(value);
}}
>
  Show Snackbar
</Button>`,children:[e.jsxs(p,{justifyContent:"space-between",flexDirection:"row",children:[e.jsx(t,{variant:"outlined",size:"small",sx:r,disabled:i.maxStack===0,onClick:()=>c(h=>h-1),children:e.jsx(V,{})}),e.jsxs(x,{variant:"body1",children:["stack up to ",s]}),e.jsx(t,{variant:"outlined",size:"small",sx:r,disabled:i.maxStack===4,onClick:()=>c(h=>h+1),children:e.jsx(f,{})})]}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>u(),children:"Show Snackbar"})]})}function oe(){return e.jsx(l,{title:"Positioning",codeString:`<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is default message.', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    })
  }
>
  Top-Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is success message', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    })
  }
>
  Top-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is warning message', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
  }
>
  Top-right
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      }
    })
  }
>
  Bottom-left
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      }
    })
  }
>
  Bottom-center
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      }
    })
  }
>
  Bottom-Right
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is default message.",{anchorOrigin:{vertical:"top",horizontal:"left"}}),children:"Top-Left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is success message",{anchorOrigin:{vertical:"top",horizontal:"center"}}),children:"Top-Center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is warning message",{anchorOrigin:{vertical:"top",horizontal:"right"}}),children:"Top-right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"left"}}),children:"Bottom-left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"center"}}),children:"Bottom-center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"right"}}),children:"Bottom-Right"})})]})})}function ie(){const[r,i]=d.useState(!0),s=u=>{i(u.target.checked)};return e.jsx(l,{title:"Prevent Duplicate",codeString:`<Button
  variant="outlined"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() =>
    enqueueSnackbar('You only see me once.', {
      preventDuplicate: checked ? true : false
    })
  }
>
  Show snackbar
</Button>`,children:e.jsxs(p,{flexDirection:"row",gap:1,justifyContent:"center",alignItems:"center",flexWrap:"wrap",children:[e.jsx(B,{checked:r,onChange:s,inputProps:{"aria-label":"controlled"}}),"Prevent duplicate",e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>o("You only see me once.",{preventDuplicate:!!r}),children:"Show snackbar"})]})})}function se(){const{closeSnackbar:r}=v(),i=c=>e.jsxs(p,{direction:"row",spacing:.5,children:[e.jsx(t,{size:"small",color:"error",variant:"contained",onClick:()=>{alert(`I belong to snackbar with id ${c}`)},children:"Undo"}),e.jsx(t,{size:"small",color:"secondary",variant:"contained",onClick:()=>r(c),children:"Dismiss"})]});return e.jsx(l,{title:"With Action",codeString:`const actionTask = (snackbarId: SnackbarKey) => (
  <>
    <Button
      variant="text"
      onClick={() => {
        alert("I belong to snackbar with id {snackbarId}");
      }}
    >
      Undo
    </Button>
    <Button variant="text" onClick={() => closeSnackbar(snackbarId)}>
      Dismiss
    </Button>
  </>
);
<Button variant="outlined" onClick={() => enqueueSnackbar('Your notification here', { action: (key) => actionTask(key) })}>
 Show Snackbar
</Button>`,children:e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>o("Your notification here",{action:c=>i(c)}),children:"Show Snackbar"})})}function ce(){const[r,i]=d.useState("slide"),s=k=>{i(k.target.value)},c=()=>{switch(r){case"slide":o("Your notification here",{TransitionComponent:j});break;case"grow":o("Your notification here",{TransitionComponent:U});break;case"fade":o("Your notification here",{TransitionComponent:M});break;case"zoom":o("Your notification here",{TransitionComponent:H});break;default:o("Your notification here",{TransitionComponent:j});break}};return e.jsxs(l,{title:"Animation",codeString:`<Button variant="contained" 
  onClick={() => enqueueSnackbar('Your notification here', { TransitionComponent: Slide })>
  Slide
</Button>
<Button variant="contained" 
  onClick={() => enqueueSnackbar('Your notification here', { TransitionComponent: Grow })>
  Grow
</Button>
<Button variant="contained" 
  onClick={() => enqueueSnackbar('Your notification here', { TransitionComponent: Fade })>
  Fade
</Button>
<Button variant="contained" 
  onClick={() => enqueueSnackbar('Your notification here', { TransitionComponent: Zoom })>
  Zoom
</Button>`,children:[e.jsx(T,{children:e.jsxs(w,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",value:r,onChange:s,name:"row-radio-buttons-group",children:[e.jsx(g,{value:"slide",control:e.jsx(m,{}),label:"Slide"}),e.jsx(g,{value:"grow",control:e.jsx(m,{}),label:"Grow"}),e.jsx(g,{value:"fade",control:e.jsx(m,{}),label:"Fade"}),e.jsx(g,{value:"zoom",control:e.jsx(m,{}),label:"Zoom"})]})}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>c(),children:"Show Snackbar"})]})}function ge(){return e.jsxs(Z,{children:[e.jsx(K,{title:"Snackbar",caption:"Snackbars provide brief notifications. The component is also known as a toast.",directory:"src/pages/components-overview/snackbar",link:"https://mui.com/material-ui/react-snackbar/"}),e.jsx(J,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"Basic",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
    } as SnackbarProps);
  }
>
  Error
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is default message",variant:"alert"}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{color:"secondary"}}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{color:"success"}}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{color:"warning"}}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{color:"info"}}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{color:"error"}}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"Outlined",codeString:`<Button
  variant="outlined"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
      alert: {
        variant: 'outlined'
      },
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="outlined"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'secondary'
      },
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="outlined"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'success'
      },
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="outlined"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'warning'
      },
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="outlined"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'info'
      },
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="outlined"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'error'
      },
    } as SnackbarProps);
  }
>
  Error
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",onClick:()=>a({open:!0,message:"This is default message",variant:"alert",alert:{variant:"outlined"}}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{variant:"outlined",color:"secondary"}}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{variant:"outlined",color:"success"}}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{variant:"outlined",color:"warning"}}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{variant:"outlined",color:"info"}}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{variant:"outlined",color:"error"}}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"With Close",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
      close: true
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
      close: true
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
      close: true
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
      close: true
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
      close: true
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
      close: true
    } as SnackbarProps);
  }
>
  Error
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is default message",variant:"alert",close:!0}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{color:"secondary"},close:!0}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{color:"success"},close:!0}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{color:"warning"},close:!0}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{color:"info"},close:!0}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{color:"error"},close:!0}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"With Close + Action",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Error
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",onClick:()=>a({open:!0,message:"This is default message",variant:"alert",alert:{variant:"outlined"},actionButton:!0,close:!0}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{variant:"outlined",color:"secondary"},actionButton:!0,close:!0}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{variant:"outlined",color:"success"},actionButton:!0,close:!0}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{variant:"outlined",color:"warning"},actionButton:!0,close:!0}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{variant:"outlined",color:"info"},actionButton:!0,close:!0}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{variant:"outlined",color:"error"},actionButton:!0,close:!0}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"Position",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'left' },
      message: 'This is an top-left message!',
      close: true
    } as SnackbarProps);
  }
>
  Top-Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
      message: 'This is an top-center message!',
      close: true
    } as SnackbarProps);
  }
>
  Top-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      message: 'This is an top-right message!',
      close: true
    } as SnackbarProps);
  }
>
  Top-Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      message: 'This is an bottom-right message!',
      close: true
    } as SnackbarProps);
  }
>
  Bottom-Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      message: 'This is an bottom-center message!',
      close: true
    } as SnackbarProps);
  }
>
  Bottom-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
      message: 'This is an bottom-left message!',
      close: true
    } as SnackbarProps);
  }
>
  Bottom-Left
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"top",horizontal:"left"},message:"This is an top-left message!",close:!0}),children:"Top-Left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"top",horizontal:"center"},message:"This is an top-center message!",close:!0}),children:"Top-Center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},message:"This is an top-right message!",close:!0}),children:"Top-Right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"},message:"This is an bottom-right message!",close:!0}),children:"Bottom-Right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"This is an bottom-center message!",close:!0}),children:"Bottom-Center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},message:"This is an bottom-left message!",close:!0}),children:"Bottom-Left"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"Transitions",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an fade message!',
      transition: 'Fade',
      close: true
    } as SnackbarProps);
  }
>
  Default/Fade
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-left message!',
      transition: 'SlideLeft',
      close: true
    } as SnackbarProps);
  }
>
  Slide Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-up message!',
      transition: 'SlideUp',
      close: true
    } as SnackbarProps);
  }
>
  Slide Up
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-right message!',
      transition: 'SlideRight',
      close: true
    } as SnackbarProps);
  }
>
  Slide Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-down message!',
      transition: 'SlideDown',
      close: true
    } as SnackbarProps);
  }
>
  Slide Down
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an grow message!',
      transition: 'Grow',
      close: true
    } as SnackbarProps);
  }
>
  Grow
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an fade message!",transition:"Fade",close:!0}),children:"Default/Fade"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-left message!",transition:"SlideLeft",close:!0}),children:"Slide Left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-up message!",transition:"SlideUp",close:!0}),children:"Slide Up"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-right message!",transition:"SlideRight",close:!0}),children:"Slide Right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-down message!",transition:"SlideDown",close:!0}),children:"Slide Down"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an grow message!",transition:"Grow",close:!0}),children:"Grow"})})]})})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(x,{variant:"h5",sx:{mt:2},children:"Extended - Notistack"})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx($,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(re,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ae,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(te,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(se,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ne,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ie,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ce,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ee,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(_,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(oe,{})})]})})]})}export{ge as default};
