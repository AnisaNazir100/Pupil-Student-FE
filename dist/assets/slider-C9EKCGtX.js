import{c as L,r as d,j as e,G as x,S as c,M as t,d0 as a}from"./index-Dhb-fOBp.js";import{C as T,a as D,b as k}from"./ComponentSkeleton-CdPpPS-v.js";import{V as M,a as w}from"./VolumeMute-DVA9ScvI.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";function i(s){return`${s}°C`}function R(s){return h.findIndex(n=>n.value===s)+1}const r=10,h=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];function U(){const s=L(),[n,b]=d.useState(55),p=(S,l)=>{b(l)},[V,f]=d.useState([20,37]),C=(S,l)=>{f(l)},[o,v]=d.useState([20,55]),j=(S,l,m)=>{Array.isArray(l)&&v(m===0?[Math.min(l[0],o[1]-r),o[1]]:[o[0],Math.max(l[1],o[0]+r)])},[y,g]=d.useState([35,76]),A=(S,l,m)=>{if(Array.isArray(l))if(l[1]-l[0]<r)if(m===0){const u=Math.min(l[0],100-r);g([u,u+r])}else{const u=Math.max(l[1],r);g([u-r,u])}else g(l)};return e.jsxs(T,{children:[e.jsx(D,{title:"Slider",caption:"Sliders allow users to make selections from a range of values.",directory:"src/pages/components-overview/slider",link:"https://mui.com/material-ui/react-slider/"}),e.jsx(k,{children:e.jsxs(x,{container:!0,spacing:2.5,children:[e.jsx(x,{item:!0,xs:12,sm:6,children:e.jsxs(c,{spacing:2.5,children:[e.jsx(t,{title:"Basic",codeHighlight:!0,codeString:"<Slider defaultValue={35} />",children:e.jsx(a,{defaultValue:35})}),e.jsx(t,{title:"With Icons",codeString:`<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  <VolumeMute style={{ color: volume <= 25 ? 'inherit' : theme.palette.text.secondary }} />
  <Slider aria-label="Volume" value={volume} onChange={handleVolumeChange} />
  <VolumeHigh style={{ color: volume > 25 ? 'inherit' : theme.palette.text.secondary }} />
</Stack>`,children:e.jsxs(c,{spacing:2,direction:"row",sx:{mb:1},alignItems:"center",children:[e.jsx(M,{style:{color:n<=25?"inherit":s.palette.text.secondary}}),e.jsx(a,{"aria-label":"Volume",value:n,onChange:p}),e.jsx(w,{style:{color:n>25?"inherit":s.palette.text.secondary}})]})}),e.jsx(t,{title:"Range",codeString:`<Slider
  getAriaLabel={() => 'Temperature range'}
  value={range}
  onChange={handleRangeChange}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
/>`,children:e.jsx(a,{getAriaLabel:()=>"Temperature range",value:V,onChange:C,valueLabelDisplay:"auto",getAriaValueText:i})}),e.jsx(t,{title:"With Label",codeString:`<Slider
  sx={{ mt: 2.5 }}
  aria-label="Always visible"
  defaultValue={80}
  getAriaValueText={valuetext}
  step={10}
  valueLabelDisplay="on"
/>`,children:e.jsx(a,{sx:{mt:2.5},"aria-label":"Always visible",defaultValue:80,getAriaValueText:i,step:10,valueLabelDisplay:"on"})}),e.jsx(t,{title:"Vertical",codeString:`<Stack sx={{ height: 300 }} spacing={1} direction="row">
  <Slider aria-label="Temperature" orientation="vertical" getAriaValueText={valuetext} defaultValue={30} />
  <Slider aria-label="Temperature" orientation="vertical" defaultValue={30} disabled />
  <Slider
    getAriaLabel={() => 'Temperature'}
    orientation="vertical"
    getAriaValueText={valuetext}
    defaultValue={[20, 37]}
    marks={marks}
    color="warning"
  />
</Stack>`,children:e.jsxs(c,{sx:{height:300},spacing:1,direction:"row",children:[e.jsx(a,{"aria-label":"Temperature",orientation:"vertical",getAriaValueText:i,defaultValue:30}),e.jsx(a,{"aria-label":"Temperature",orientation:"vertical",defaultValue:30,disabled:!0}),e.jsx(a,{getAriaLabel:()=>"Temperature",orientation:"vertical",getAriaValueText:i,defaultValue:[20,37],marks:h,color:"warning"})]})})]})}),e.jsx(x,{item:!0,xs:12,sm:6,children:e.jsxs(c,{spacing:2.5,children:[e.jsx(t,{title:"Disabled",codeString:"<Slider defaultValue={50} disabled />",children:e.jsx(a,{defaultValue:50,disabled:!0})}),e.jsxs(t,{title:"Sizes",codeString:`<Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto" />
<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />`,children:[e.jsx(a,{size:"small",defaultValue:70,"aria-label":"Small",valueLabelDisplay:"auto"}),e.jsx(a,{defaultValue:50,"aria-label":"Default",valueLabelDisplay:"auto"})]}),e.jsx(t,{title:"Discrete",codeString:`<Slider
  aria-label="Temperature"
  defaultValue={60}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={110}
/>`,children:e.jsx(a,{"aria-label":"Temperature",defaultValue:60,getAriaValueText:i,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})}),e.jsx(t,{title:"Restricted values",codeString:`<Slider
  aria-label="Restricted values"
  defaultValue={20}
  valueLabelFormat={valueLabelFormat}
  getAriaValueText={valuetext}
  step={null}
  valueLabelDisplay="auto"
  marks={marks}
/>`,children:e.jsx(a,{"aria-label":"Restricted values",defaultValue:20,valueLabelFormat:R,getAriaValueText:i,step:null,valueLabelDisplay:"auto",marks:h})}),e.jsxs(t,{title:"Minimum distance",codeString:`<Slider
  getAriaLabel={() => 'Minimum distance'}
  value={value1}
  onChange={handleChange1}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
  disableSwap
/>
<Slider
  getAriaLabel={() => 'Minimum distance shift'}
  value={value2}
  onChange={handleChange2}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
  disableSwap
/>`,children:[e.jsx(a,{getAriaLabel:()=>"Minimum distance",value:o,onChange:j,valueLabelDisplay:"auto",getAriaValueText:i,disableSwap:!0}),e.jsx(a,{getAriaLabel:()=>"Minimum distance shift",value:y,onChange:A,valueLabelDisplay:"auto",getAriaValueText:i,disableSwap:!0})]}),e.jsxs(t,{title:"Colors",codeString:`<Slider defaultValue={65} />
<Slider defaultValue={50} color="secondary" />
<Slider defaultValue={95} color="success" />
<Slider defaultValue={30} color="warning" />
<Slider defaultValue={85} color="info" />
<Slider defaultValue={5} color="error" />`,children:[e.jsx(a,{defaultValue:65}),e.jsx(a,{defaultValue:50,color:"secondary"}),e.jsx(a,{defaultValue:95,color:"success"}),e.jsx(a,{defaultValue:30,color:"warning"}),e.jsx(a,{defaultValue:85,color:"info"}),e.jsx(a,{defaultValue:5,color:"error"})]})]})})]})})]})}export{U as default};
