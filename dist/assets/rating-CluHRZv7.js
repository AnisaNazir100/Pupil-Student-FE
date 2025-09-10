import{r as m,j as e,G as n,S as d,M as a,T as s,B as u}from"./index-Dhb-fOBp.js";import{C as j,a as p,b as f}from"./ComponentSkeleton-CdPpPS-v.js";import{R as i}from"./Rating-sqwebwmx.js";import{H as x}from"./Heart-eJTqeSwc.js";import{E as g}from"./EmojiHappy-CC3563X2.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";const v={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function O(){const[r,l]=m.useState(2),[o,h]=m.useState(-1);return e.jsxs(j,{children:[e.jsx(p,{title:"Rating",caption:"Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.",directory:"src/pages/components-overview/rating",link:"https://mui.com/material-ui/react-rating/"}),e.jsx(f,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsxs(d,{spacing:3,children:[e.jsx(a,{title:"Basic",codeHighlight:!0,codeString:`<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<Rating name="read-only" value={3} readOnly />
<Rating name="disabled" value={4} disabled />
<Rating name="no-value" value={null} />`,children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{item:!0,xs:5,sm:3,children:e.jsx(s,{variant:"h6",children:"Controlled"})}),e.jsx(n,{item:!0,xs:7,sm:9,children:e.jsx(i,{name:"simple-controlled",value:r,onChange:(c,t)=>{l(t)}})}),e.jsx(n,{item:!0,xs:5,sm:3,children:e.jsx(s,{variant:"h6",children:"Read Only"})}),e.jsx(n,{item:!0,xs:7,sm:9,children:e.jsx(i,{name:"read-only",value:3,readOnly:!0})}),e.jsx(n,{item:!0,xs:5,sm:3,children:e.jsx(s,{variant:"h6",children:"Disabled"})}),e.jsx(n,{item:!0,xs:7,sm:9,children:e.jsx(i,{name:"disabled",value:4,disabled:!0})}),e.jsx(n,{item:!0,xs:5,sm:3,children:e.jsx(s,{variant:"h6",children:"No rating"})}),e.jsx(n,{item:!0,xs:7,sm:9,children:e.jsx(i,{name:"no-value",value:null})})]})}),e.jsx(a,{title:"Precision",codeString:`<Rating name="half-rating" defaultValue={3.6} precision={0.1} />
<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />`,children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"half-rating",defaultValue:3.6,precision:.1})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})})]})}),e.jsx(a,{title:"Hover Feedback",codeString:`<Box
  sx={{
    width: 200,
    display: 'flex',
    alignItems: 'center'
  }}
>
  <Rating
    name="hover-feedback"
    value={value}
    precision={0.5}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    onChangeActive={(event, newHover) => {
      setHover(newHover);
    }}
  />
  {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
</Box>`,children:e.jsxs(u,{sx:{width:200,display:"flex",alignItems:"center"},children:[e.jsx(i,{name:"hover-feedback",value:r,precision:.5,onChange:(c,t)=>{l(t)},onChangeActive:(c,t)=>{h(t)}}),r!==null&&e.jsx(u,{sx:{ml:2},children:v[o!==-1?o:r]})]})})]})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsxs(d,{spacing:3,children:[e.jsx(a,{title:"Sizes",codeString:`<Rating name="size-small" defaultValue={2} size="small" />
  <Rating name="size-medium" defaultValue={2} />
  <Rating name="size-large" defaultValue={2} size="large" />`,children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"size-small",defaultValue:2,size:"small"})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"size-medium",defaultValue:2})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"size-large",defaultValue:2,size:"large"})})]})}),e.jsx(a,{title:"Customization",codeString:`<Rating name="customized-10" defaultValue={2} max={10} />
<Rating
  name="customized-color"
  defaultValue={2}
  precision={0.5}
  icon={<Heart variant="Bold" style={{ fontSize: '1.3rem', margin: 2 }} />}
  emptyIcon={<Heart style={{ fontSize: '1.3rem', margin: 2 }} />}
  sx={{ color: 'error.main' }}
/>
<Rating
  name="customized-color"
  defaultValue={3}
  icon={<EmojiHappy style={{ fontSize: '1.3rem', margin: 2 }} />}
  emptyIcon={<EmojiHappy style={{ fontSize: '1.3rem', margin: 2 }} />}
  sx={{ color: 'warning.main' }}
/>`,children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"customized-10",defaultValue:2,max:10})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"customized-color-heart",defaultValue:2,icon:e.jsx(x,{variant:"Bold",style:{fontSize:"1.3rem",margin:2}}),emptyIcon:e.jsx(x,{style:{fontSize:"1.3rem",margin:2}}),sx:{color:"error.main"}})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"customized-color-smily",defaultValue:3,icon:e.jsx(g,{style:{fontSize:"1.3rem",margin:2}}),emptyIcon:e.jsx(g,{style:{fontSize:"1.3rem",margin:2}}),sx:{color:"warning.main"}})})]})}),e.jsx(a,{title:"Half",codeString:`<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
<Rating
  name="customized-color"
  defaultValue={3.5}
  precision={0.5}
  icon={<Star1 style={{ fontSize: '1.3rem', margin: 2 }} />}
  emptyIcon={<Star1 style={{ fontSize: '1.3rem', margin: 2 }} />}
  sx={{ color: 'warning.main' }}
/>`,children:e.jsx(n,{container:!0,spacing:1,children:e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"half-rating-read-custom",defaultValue:2.5,precision:.5})})})})]})})]})})]})}export{O as default};
