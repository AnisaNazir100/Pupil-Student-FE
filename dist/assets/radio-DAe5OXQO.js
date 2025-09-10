import{j as o,G as n,S as s,M as a,aa as r,be as t,au as l,bf as e}from"./index-Dhb-fOBp.js";import{C as i,a as c,b as d}from"./ComponentSkeleton-CdPpPS-v.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";function R(){return o.jsxs(i,{children:[o.jsx(c,{title:"Radio",caption:"Radio buttons allow the user to select one option from a set.",directory:"src/pages/components-overview/radio",link:"https://mui.com/material-ui/react-radio-button/"}),o.jsx(d,{children:o.jsxs(n,{container:!0,spacing:3,children:[o.jsx(n,{item:!0,xs:12,lg:6,children:o.jsxs(s,{spacing:3,children:[o.jsx(a,{title:"Basic",codeHighlight:!0,codeString:`<FormControl component="fieldset">
  <RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group" row>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio disabled />} label="Other" />
  </RadioGroup>
</FormControl>`,children:o.jsx(r,{children:o.jsxs(t,{row:!0,"aria-labelledby":"gender",name:"gender",children:[o.jsx(l,{value:"female",control:o.jsx(e,{}),label:"Female"}),o.jsx(l,{value:"male",control:o.jsx(e,{}),label:"Male"}),o.jsx(l,{value:"other",control:o.jsx(e,{disabled:!0}),label:"Other"})]})})}),o.jsx(a,{title:"Size",codeString:`<FormControl component="fieldset">
  <RadioGroup aria-label="size" defaultValue="small" name="radio-buttons-group" row>
    <FormControlLabel value="small" control={<Radio />} label="Default" />
    <FormControlLabel value="medium" control={<Radio className="size-medium" />} label="Medium" />
    <FormControlLabel value="large" control={<Radio className="size-large" />} label="Large" />
  </RadioGroup>
</FormControl>`,children:o.jsx(r,{component:"fieldset",children:o.jsxs(t,{"aria-label":"size",defaultValue:"small",name:"size",row:!0,children:[o.jsx(l,{value:"small",control:o.jsx(e,{className:"size-small"}),label:"Default"}),o.jsx(l,{value:"medium",control:o.jsx(e,{}),label:"Medium"}),o.jsx(l,{value:"large",control:o.jsx(e,{className:"size-large"}),label:"Large"})]})})})]})}),o.jsx(n,{item:!0,xs:12,lg:6,children:o.jsxs(s,{spacing:3,children:[o.jsx(a,{title:"Colors",codeString:`<FormControl component="fieldset">
  <RadioGroup aria-label="size" defaultValue="success" name="radio-buttons-group" row>
    <FormControlLabel value="primary" control={<Radio />} label="Primary" />
    <FormControlLabel value="secondary" control={<Radio color="secondary" />} label="Secondary" />
    <FormControlLabel value="success" control={<Radio color="success" />} label="Success" />
    <FormControlLabel value="warning" control={<Radio color="warning" />} label="Warning" />
    <FormControlLabel value="info" control={<Radio color="info" />} label="Info" />
    <FormControlLabel value="error" control={<Radio color="error" />} label="Error" />
  </RadioGroup>
</FormControl>`,children:o.jsx(r,{component:"fieldset",children:o.jsxs(t,{"aria-label":"size",defaultValue:"success",name:"colors",row:!0,children:[o.jsx(l,{value:"primary",control:o.jsx(e,{}),label:"Primary"}),o.jsx(l,{value:"secondary",control:o.jsx(e,{color:"secondary"}),label:"Secondary"}),o.jsx(l,{value:"success",control:o.jsx(e,{color:"success"}),label:"Success"}),o.jsx(l,{value:"warning",control:o.jsx(e,{color:"warning"}),label:"Warning"}),o.jsx(l,{value:"info",control:o.jsx(e,{color:"info"}),label:"Info"}),o.jsx(l,{value:"error",control:o.jsx(e,{color:"error"}),label:"Error"})]})})}),o.jsx(a,{title:"Label Placement",codeString:`<FormControl component="fieldset">
  <RadioGroup row aria-label="position" name="position" defaultValue="top">
    <FormControlLabel value="top" control={<Radio />} label="Top" labelPlacement="top" />
    <FormControlLabel value="start" control={<Radio />} label="Start" labelPlacement="start" sx={{ mr: 1 }} />
    <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom" />
    <FormControlLabel value="end" control={<Radio />} label="End" sx={{ ml: 1 }} />
  </RadioGroup>
</FormControl>`,children:o.jsx(r,{component:"fieldset",children:o.jsxs(t,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[o.jsx(l,{value:"top",control:o.jsx(e,{}),label:"Top",labelPlacement:"top"}),o.jsx(l,{value:"start",control:o.jsx(e,{}),label:"Start",labelPlacement:"start",sx:{mr:1}}),o.jsx(l,{value:"bottom",control:o.jsx(e,{}),label:"Bottom",labelPlacement:"bottom"}),o.jsx(l,{value:"end",control:o.jsx(e,{}),label:"End",sx:{ml:1}})]})})})]})})]})})]})}export{R as default};
