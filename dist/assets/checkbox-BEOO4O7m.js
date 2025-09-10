import{r as x,j as e,B as k,au as t,av as o,G as n,S as s,M as a,aa as b,aA as m}from"./index-Dhb-fOBp.js";import{C as u,a as j,b as g}from"./ComponentSkeleton-CdPpPS-v.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";function w(){const[l,r]=x.useState([!0,!1]),d=c=>{r([c.target.checked,c.target.checked])},h=c=>{r([c.target.checked,l[1]])},i=c=>{r([l[0],c.target.checked])},C=e.jsxs(k,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e.jsx(t,{label:"Child 1",control:e.jsx(o,{checked:l[0],onChange:h})}),e.jsx(t,{label:"Child 2",control:e.jsx(o,{checked:l[1],onChange:i})})]});return e.jsxs(u,{children:[e.jsx(j,{title:"Checkbox",caption:"Checkboxes allow the user to select one or more items from a set.",directory:"src/pages/components-overview/checkbox",link:"https://mui.com/material-ui/react-checkbox/"}),e.jsx(g,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsxs(s,{spacing:3,children:[e.jsx(a,{title:"Basic",codeHighlight:!0,codeString:`<Checkbox />
<Checkbox defaultChecked />
<Checkbox defaultChecked />
<Checkbox defaultChecked disabled />
<Checkbox disabled />`,children:e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(o,{defaultChecked:!0}),e.jsx(o,{defaultChecked:!0}),e.jsx(o,{defaultChecked:!0,disabled:!0}),e.jsx(o,{disabled:!0})]})}),e.jsx(a,{title:"Size",codeString:`<Checkbox defaultChecked />
<Checkbox defaultChecked className="size-medium" />
<Checkbox defaultChecked className="size-large" />`,children:e.jsxs(e.Fragment,{children:[e.jsx(o,{defaultChecked:!0,className:"size-small"}),e.jsx(o,{defaultChecked:!0}),e.jsx(o,{defaultChecked:!0,className:"size-large"})]})}),e.jsx(a,{title:"Colors",codeString:`<Checkbox />
<Checkbox defaultChecked color="secondary" />
<Checkbox defaultChecked color="success" />
<Checkbox defaultChecked color="warning" />
<Checkbox defaultChecked color="info" />
<Checkbox defaultChecked color="error" />`,children:e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(o,{defaultChecked:!0,color:"secondary"}),e.jsx(o,{defaultChecked:!0,color:"success"}),e.jsx(o,{defaultChecked:!0,color:"warning"}),e.jsx(o,{defaultChecked:!0,color:"info"}),e.jsx(o,{defaultChecked:!0,color:"error"})]})})]})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsxs(s,{spacing:3,children:[e.jsx(a,{title:"Label Placement",codeString:`<FormControl component="fieldset">
  <FormGroup aria-label="position" row>
    <FormControlLabel value="top" control={<Checkbox />} label="Top" labelPlacement="top" />
    <FormControlLabel
      value="start"
      control={<Checkbox defaultChecked />}
      label="Start"
      labelPlacement="start"
      sx={{ mr: 1 }}
    />
    <FormControlLabel value="bottom" control={<Checkbox />} label="Bottom" labelPlacement="bottom" />
    <FormControlLabel value="end" control={<Checkbox defaultChecked />} label="End" labelPlacement="end" sx={{ ml: 1 }} />
  </FormGroup>
</FormControl>`,children:e.jsx(b,{component:"fieldset",children:e.jsxs(m,{"aria-label":"position",row:!0,children:[e.jsx(t,{value:"top",control:e.jsx(o,{}),label:"Top",labelPlacement:"top"}),e.jsx(t,{value:"start",control:e.jsx(o,{defaultChecked:!0}),label:"Start",labelPlacement:"start",sx:{mr:1}}),e.jsx(t,{value:"bottom",control:e.jsx(o,{}),label:"Bottom",labelPlacement:"bottom"}),e.jsx(t,{value:"end",control:e.jsx(o,{defaultChecked:!0}),label:"End",labelPlacement:"end",sx:{ml:1}})]})})}),e.jsx(a,{title:"Indeterminate",codeString:`<>
  <FormControlLabel
    label="Parent"
    control={
      <Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />
    }
  />
  <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
    <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
    <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
  </Box>
</>`,children:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Parent",control:e.jsx(o,{checked:l[0]&&l[1],indeterminate:l[0]!==l[1],onChange:d})}),C]})})]})})]})})]})}export{w as default};
