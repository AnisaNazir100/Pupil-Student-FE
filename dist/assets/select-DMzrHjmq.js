import{r as h,j as e,M as p,G as d,S as m,bc as x,aa as c,ab as u,ac as t,bi as j,c as b,aN as g,av as I,a3 as C,B as S,K as y}from"./index-Dhb-fOBp.js";import{C as v,a as M,b as T}from"./ComponentSkeleton-CdPpPS-v.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";function f(){const[a,i]=h.useState(""),n=r=>{i(r.target.value)};return e.jsx(p,{title:"Basic",codeHighlight:!0,codeString:`<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Age</InputLabel>
  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} placeholder="Age" onChange={handleChange}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <FormHelperText>Without label</FormHelperText>
  <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
    <MenuItem value="" sx={{ color: 'text.secondary' }}>
      Select Age
    </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>`,children:e.jsxs(d,{container:!0,spacing:2.5,children:[e.jsx(d,{item:!0,xs:12,children:e.jsxs(m,{spacing:1,children:[e.jsx(x,{children:"Age"}),e.jsx(c,{fullWidth:!0,children:e.jsxs(u,{labelId:"demo-simple-select-label",displayEmpty:!0,id:"demo-simple-select",value:a,placeholder:"Age",onChange:n,children:[e.jsx(t,{disabled:!0,value:"",sx:{color:"text.secondary"},children:"Select Age"}),e.jsx(t,{value:10,children:"Ten"}),e.jsx(t,{value:20,children:"Twenty"}),e.jsx(t,{value:30,children:"Thirty"})]})})]})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(c,{fullWidth:!0,children:e.jsxs(u,{value:a,onChange:n,displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[e.jsx(t,{disabled:!0,value:"",sx:{color:"text.secondary"},children:"Without label"}),e.jsx(t,{value:10,children:"Ten"}),e.jsx(t,{value:20,children:"Twenty"}),e.jsx(t,{value:30,children:"Thirty"})]})})})]})})}function W(){const[a,i]=h.useState(""),n=r=>{i(r.target.value)};return e.jsx(p,{title:"With Helper Text",codeString:`<FormControl fullWidth>
  <InputLabel id="demo-simple-select-helper-label">Number</InputLabel>
  <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={age} onChange={handleChange}>
    <MenuItem value="">
      <em>Select Number</em>
    </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  <FormHelperText>helper text</FormHelperText>
</FormControl>`,children:e.jsxs(m,{spacing:1,children:[e.jsx(x,{id:"demo-simple-select-helper-label",children:"Number"}),e.jsxs(c,{fullWidth:!0,children:[e.jsxs(u,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:a,onChange:n,children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"Select Number"})}),e.jsx(t,{value:10,children:"Ten"}),e.jsx(t,{value:20,children:"Twenty"}),e.jsx(t,{value:30,children:"Thirty"})]}),e.jsx(j,{children:"helper text"})]})]})})}function k(){const[a,i]=h.useState(""),n=r=>{i(r.target.value)};return e.jsx(p,{title:"Auto Width",codeString:`<FormControl sx={{ minWidth: 80 }}>
  <InputLabel id="demo-simple-select-autowidth-label">Auto</InputLabel>
  <Select
    labelId="demo-simple-select-autowidth-label"
    id="demo-simple-select-autowidth"
    value={age}
    onChange={handleChange}
    autoWidth
    placeholder="Age"
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value={10}>Twenty</MenuItem>
    <MenuItem value={21}>Twenty one</MenuItem>
    <MenuItem value={22}>Twenty one and a half</MenuItem>
  </Select>
</FormControl>`,children:e.jsxs(c,{sx:{minWidth:80},children:[e.jsx(x,{id:"demo-simple-select-autowidth-label",children:"Auto"}),e.jsxs(u,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",value:a,onChange:n,autoWidth:!0,placeholder:"Age",children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(t,{value:10,children:"Twenty"}),e.jsx(t,{value:21,children:"Twenty one"}),e.jsx(t,{value:22,children:"Twenty one and a half"})]})]})})}const A=48,w=8,H={PaperProps:{style:{maxHeight:A*4.5+w,width:250}}},P=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function N(a,i,n){return{fontWeight:i.indexOf(a)===-1?n.typography.fontWeightRegular:n.typography.fontWeightMedium}}function F(){const a=b(),[i,n]=h.useState([]),o=l=>{const{target:{value:s}}=l;n(typeof s=="string"?s.split(","):s)};return e.jsx(p,{title:"Multiple",codeString:`// MultipleSelect.tsx
<FormControl fullWidth>
  <InputLabel id="demo-multiple-name-label">Name</InputLabel>
  <Select
    labelId="demo-multiple-name-label"
    id="demo-multiple-name"
    multiple
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput />}
    MenuProps={MenuProps}
  >
    {names.map((name) => (
      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
        {name}
      </MenuItem>
    ))}
  </Select>
</FormControl>`,children:e.jsxs(m,{spacing:1,children:[e.jsx(x,{id:"demo-multiple-name-label",children:"Name"}),e.jsx(c,{fullWidth:!0,children:e.jsx(u,{labelId:"demo-multiple-name-label",id:"demo-multiple-name",multiple:!0,value:i,onChange:o,input:e.jsx(g,{}),MenuProps:H,children:P.map(l=>e.jsx(t,{value:l,style:N(l,i,a),children:l},l))})})]})})}const O=48,L=8,E={PaperProps:{style:{maxHeight:O*4.5+L,width:250}}},V=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function B(){const[a,i]=h.useState([]),n=r=>{const{target:{value:l}}=r;i(typeof l=="string"?l.split(","):l)};return e.jsx(p,{title:"With Checkmarks",codeString:`// CheckmarksSelect.tsx
<FormControl fullWidth>
  <InputLabel id="demo-multiple-checkbox-label">Checkmarks</InputLabel>
  <Select
    labelId="demo-multiple-checkbox-label"
    id="demo-multiple-checkbox"
    multiple
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput placeholder="Tag" />}
    renderValue={(selected) => selected.join(', ')}
    MenuProps={MenuProps}
  >
    {names.map((name) => (
      <MenuItem key={name} value={name}>
        <Checkbox checked={personName.indexOf(name) > -1} />
        <ListItemText primary={name} />
      </MenuItem>
    ))}
  </Select>
</FormControl>`,children:e.jsxs(c,{fullWidth:!0,children:[e.jsx(x,{id:"demo-multiple-checkbox-label",children:"Checkmarks"}),e.jsx(u,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:a,onChange:n,input:e.jsx(g,{placeholder:"Tag"}),renderValue:r=>r.join(", "),MenuProps:E,children:V.map(r=>e.jsxs(t,{value:r,children:[e.jsx(I,{checked:a.indexOf(r)>-1}),e.jsx(C,{primary:r})]},r))})]})})}const _=48,$=8,G={PaperProps:{style:{maxHeight:_*4.5+$,width:250}}},D=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function R(a,i,n){return{fontWeight:i.indexOf(a)===-1?n.typography.fontWeightRegular:n.typography.fontWeightMedium}}function K(){const a=b(),[i,n]=h.useState(["Van Henry","Kelly Snyder"]),o=l=>{const{target:{value:s}}=l;n(typeof s=="string"?s.split(","):s)};return e.jsx(p,{title:"With Chip",codeString:`// ChipSelect.tsx
<FormControl fullWidth>
  <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
  <Select
    labelId="demo-multiple-chip-label"
    id="demo-multiple-chip"
    multiple
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput id="select-multiple-chip" placeholder="Chip" />}
    renderValue={(selected) => (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {selected.map((value) => (
          <Chip key={value} label={value} variant="light" color="primary" size="small" />
        ))}
      </Box>
    )}
    MenuProps={MenuProps}
  >
    {names.map((name) => (
      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
        {name}
      </MenuItem>
    ))}
  </Select>
</FormControl>`,children:e.jsxs(m,{spacing:1,children:[e.jsx(x,{id:"demo-multiple-chip-label",children:"Chip"}),e.jsx(c,{fullWidth:!0,children:e.jsx(u,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,value:i,onChange:o,input:e.jsx(g,{id:"select-multiple-chip",placeholder:"Chip"}),renderValue:l=>e.jsx(S,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:l.map(s=>e.jsx(y,{label:s,variant:"light",color:"primary",size:"small"},s))}),MenuProps:G,children:D.map(l=>e.jsx(t,{value:l,style:R(l,i,a),children:l},l))})})]})})}function U(){return e.jsxs(v,{children:[e.jsx(M,{title:"Select",caption:"Select components are used for collecting user provided information from a list of options.",directory:"src/pages/components-overview/select",link:"https://mui.com/material-ui/react-select/"}),e.jsx(T,{children:e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{item:!0,xs:12,sm:6,children:e.jsxs(m,{spacing:3,children:[e.jsx(f,{}),e.jsx(W,{}),e.jsx(k,{})]})}),e.jsx(d,{item:!0,xs:12,sm:6,children:e.jsxs(m,{spacing:3,children:[e.jsx(F,{}),e.jsx(B,{}),e.jsx(K,{})]})})]})})]})}export{U as default};
