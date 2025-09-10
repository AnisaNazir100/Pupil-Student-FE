import{r,j as a,G as i,S as e,M as o,bK as n,aa as z,ab as B,ac as c,T,q as F}from"./index-Dhb-fOBp.js";import{C as G,a as O,b as R}from"./ComponentSkeleton-CdPpPS-v.js";import{T as k}from"./TablePagination-Ci7qVFsD.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";function X(){const[P,u]=r.useState(2),[m,h]=r.useState(10),x=(t,s)=>{u(s)},j=t=>{h(parseInt(t.target.value,10)),u(0)},[l,v]=r.useState(10),[f,g]=r.useState(!1),y=t=>{v(+t.target.value)},C=()=>{g(!1)},S=()=>{g(!0)},[b,d]=r.useState(1),[w,p]=r.useState(1),I=(t,s)=>{d(s)},M=t=>{+t.target.value>0&&+t.target.value<=100/l?(p(+t.target.value),d(+t.target.value)):p("")};return a.jsxs(G,{children:[a.jsx(O,{title:"Pagination",caption:"The Pagination component enables the user to select a specific page from a range of pages.",directory:"src/pages/components-overview/pagination",link:"https://mui.com/material-ui/react-pagination/"}),a.jsx(R,{children:a.jsxs(i,{container:!0,spacing:3,children:[a.jsx(i,{item:!0,xs:12,lg:6,children:a.jsxs(e,{spacing:3,children:[a.jsx(o,{title:"Basic",codeHighlight:!0,codeString:`<Pagination count={10} defaultPage={1} color="primary" />
<Pagination count={10} defaultPage={2} variant="contained" color="primary" />
<Pagination count={10} defaultPage={3} variant="outlined" color="secondary" />
<Pagination count={10} defaultPage={4} disabled />`,children:a.jsxs(e,{spacing:2,children:[a.jsx(n,{count:10,defaultPage:1,color:"primary"}),a.jsx(n,{count:10,defaultPage:2,variant:"contained",color:"primary"}),a.jsx(n,{count:10,defaultPage:3,variant:"outlined",color:"secondary"}),a.jsx(n,{count:10,defaultPage:4,disabled:!0})]})}),a.jsx(o,{title:"Size",codeString:`<Pagination count={10} defaultPage={1} size="small" color="primary" />
<Pagination count={10} defaultPage={2} variant="outlined" color="primary" />
<Pagination count={10} defaultPage={3} size="large" variant="contained" color="secondary" />`,children:a.jsxs(e,{spacing:2,children:[a.jsx(n,{count:10,defaultPage:1,size:"small",color:"primary"}),a.jsx(n,{count:10,defaultPage:2,variant:"outlined",color:"primary"}),a.jsx(n,{count:10,defaultPage:3,size:"large",variant:"contained",color:"secondary"})]})}),a.jsx(o,{title:"Ranges",codeString:`<Pagination count={11} defaultPage={1} siblingCount={0} color="primary" />
<Pagination count={11} defaultPage={2} color="primary" />
<Pagination count={11} defaultPage={3} color="primary" variant="combined" />
<Pagination count={11} defaultPage={4} siblingCount={0} boundaryCount={2} variant="outlined" color="primary" />
<Pagination count={11} defaultPage={5} boundaryCount={2} variant="contained" color="primary" />`,children:a.jsxs(e,{spacing:2,children:[a.jsx(n,{count:11,defaultPage:1,siblingCount:0,color:"primary"}),a.jsx(n,{count:11,defaultPage:2,color:"primary"}),a.jsx(n,{count:11,defaultPage:3,color:"primary",variant:"combined"}),a.jsx(n,{count:11,defaultPage:4,siblingCount:0,boundaryCount:2,variant:"outlined",color:"primary"}),a.jsx(n,{count:11,defaultPage:5,boundaryCount:2,variant:"contained",color:"primary"})]})}),a.jsx(o,{title:"Tables",codeString:`<Pagination
  count={100 / rows}
  page={currentPage}
  onChange={handleChangePagination}
  color="primary"
  variant="combined"
/>
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <Select
    id="demo-controlled-open-select"
    open={open}
    onClose={handleClose}
    onOpen={handleOpen}
    value={rows}
    onChange={handleChange}
    size="small"
    sx={{ '& .MuiSelect-select': { py: 0.75, px: 1.25 } }}
  >
    <MenuItem value={5}>5 / page</MenuItem>
    <MenuItem value={10}>10 / page</MenuItem>
    <MenuItem value={25}>25 / page</MenuItem>
    <MenuItem value={50}>50 / page</MenuItem>
    <MenuItem value={100}>100 / page</MenuItem>
  </Select>
</FormControl>
<Stack direction="row" spacing={1} alignItems="center">
  <Typography variant="h6">Go to</Typography>
  <TextField
    id="outlined-name"
    placeholder="Page"
    value={goto}
    onChange={handleChangeGoto}
    size="small"
    sx={{ '& .MuiOutlinedInput-input': { py: 0.75, px: 1.25, width: 50 } }}
  />
</Stack>`,children:a.jsxs(a.Fragment,{children:[a.jsxs(i,{container:!0,alignItems:"center",justifyContent:"flex-end",spacing:.5,children:[a.jsx(i,{item:!0,children:a.jsx(n,{count:100/l,page:b,onChange:I,color:"primary",variant:"combined"})}),a.jsx(i,{item:!0,children:a.jsx(z,{sx:{m:1,minWidth:120},children:a.jsxs(B,{id:"demo-controlled-open-select",open:f,onClose:C,onOpen:S,value:l,onChange:y,size:"small",sx:{"& .MuiSelect-select":{py:.75,px:1.25}},children:[a.jsx(c,{value:5,children:"5 / page"}),a.jsx(c,{value:10,children:"10 / page"}),a.jsx(c,{value:25,children:"25 / page"}),a.jsx(c,{value:50,children:"50 / page"}),a.jsx(c,{value:100,children:"100 / page"})]})})}),a.jsx(i,{item:!0,children:a.jsxs(e,{direction:"row",spacing:1,alignItems:"center",children:[a.jsx(T,{variant:"h6",children:"Go to"}),a.jsx(F,{id:"outlined-name",placeholder:"Page",value:w,onChange:M,size:"small",sx:{"& .MuiOutlinedInput-input":{py:.75,px:1.25,width:50}}})]})})]}),a.jsx(k,{component:"div",count:100,page:P,onPageChange:x,rowsPerPage:m,onRowsPerPageChange:j})]})})]})}),a.jsx(i,{item:!0,xs:12,lg:6,children:a.jsxs(e,{spacing:3,children:[a.jsx(o,{title:"Variants",codeString:`<Pagination count={10} defaultPage={1} color="primary" />
<Pagination count={10} defaultPage={2} variant="outlined" color="primary" />
<Pagination count={10} defaultPage={3} variant="contained" color="primary" />
<Pagination count={10} defaultPage={4} variant="combined" color="primary" />`,children:a.jsxs(e,{spacing:2,children:[a.jsx(n,{count:10,defaultPage:1,color:"primary"}),a.jsx(n,{count:10,defaultPage:2,variant:"outlined",color:"primary"}),a.jsx(n,{count:10,defaultPage:3,variant:"contained",color:"primary"}),a.jsx(n,{count:10,defaultPage:4,variant:"combined",color:"primary"})]})}),a.jsx(o,{title:"Circular",codeString:`<Pagination count={10} defaultPage={1} color="primary" shape="circular" />
<Pagination count={10} defaultPage={2} variant="outlined" color="primary" shape="circular" />
<Pagination count={10} defaultPage={3} variant="contained" color="primary" shape="circular" />
<Pagination count={10} defaultPage={4} variant="combined" color="primary" shape="circular" />`,children:a.jsxs(e,{spacing:2,children:[a.jsx(n,{count:10,defaultPage:1,color:"primary",shape:"circular"}),a.jsx(n,{count:10,defaultPage:2,variant:"outlined",color:"primary",shape:"circular"}),a.jsx(n,{count:10,defaultPage:3,variant:"contained",color:"primary",shape:"circular"}),a.jsx(n,{count:10,defaultPage:4,variant:"combined",color:"primary",shape:"circular"})]})}),a.jsx(o,{title:"Buttons",codeString:`<Pagination count={10} showFirstButton showLastButton variant="combined" color="primary" />
<Pagination count={10} hidePrevButton hideNextButton variant="contained" shape="circular" />`,children:a.jsx(e,{spacing:2,children:a.jsxs(e,{spacing:2,children:[a.jsx(n,{count:10,showFirstButton:!0,showLastButton:!0,variant:"combined",color:"primary"}),a.jsx(n,{count:10,hidePrevButton:!0,hideNextButton:!0,variant:"contained",shape:"circular"})]})})}),a.jsx(o,{title:"Colors",codeString:`<Pagination count={10} defaultPage={6} color="primary" />
<Pagination count={10} defaultPage={6} variant="outlined" color="secondary" />
<Pagination count={10} defaultPage={6} variant="contained" color="success" />
<Pagination count={10} defaultPage={6} variant="combined" color="warning" />
<Pagination count={10} defaultPage={6} variant="outlined" color="info" shape="circular" />
<Pagination count={10} defaultPage={6} variant="contained" color="error" shape="circular" />`,children:a.jsx(e,{spacing:2,children:a.jsxs(e,{spacing:2,children:[a.jsx(n,{count:10,defaultPage:6,color:"primary"}),a.jsx(n,{count:10,defaultPage:6,variant:"outlined",color:"secondary"}),a.jsx(n,{count:10,defaultPage:6,variant:"contained",color:"success"}),a.jsx(n,{count:10,defaultPage:6,variant:"combined",color:"warning"}),a.jsx(n,{count:10,defaultPage:6,variant:"outlined",color:"info",shape:"circular"}),a.jsx(n,{count:10,defaultPage:6,variant:"contained",color:"error",shape:"circular"})]})})})]})})]})})]})}export{X as default};
