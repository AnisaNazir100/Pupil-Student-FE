import{r as x,j as e,M as T,B as u,ax as y,ay as l,K as b,T as s,P as n,X as N,bn as I,G as h,S as v}from"./index-Dhb-fOBp.js";import{C as V,a as $,b as A}from"./ComponentSkeleton-CdPpPS-v.js";import{B as D}from"./Book-BuiiOgl-.js";import{I as U}from"./Image-HXSK629e.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";function q({children:a,value:t,index:i,...r}){return e.jsx("div",{role:"tabpanel",hidden:t!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...r,children:t===i&&e.jsx(u,{sx:{pt:2},children:a})})}function S(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}function M(){const[a,t]=x.useState(0),i=(j,o)=>{t(o)};return e.jsx(T,{codeString:`// BasicTabs.tsx
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  <Tab
    label="Tab1"
    icon={<Chip label="99" color="primary" variant="light" size="small" />}
    iconPosition="end"
    {...a11yProps(0)}
  />
  <Tab label="Tab2" icon={<Chip label="9" variant="light" size="small" />} iconPosition="end" {...a11yProps(1)} />
  <Tab label="Tab3" {...a11yProps(2)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>`,children:e.jsxs(u,{sx:{width:"100%"},children:[e.jsx(u,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(y,{value:a,onChange:i,"aria-label":"basic tabs example",children:[e.jsx(l,{label:"Tab1",icon:e.jsx(b,{label:"99",color:"primary",variant:"light",size:"small"}),iconPosition:"end",...S(0)}),e.jsx(l,{label:"Tab2",icon:e.jsx(b,{label:"9",variant:"light",size:"small"}),iconPosition:"end",...S(1)}),e.jsx(l,{label:"Tab3",...S(2)})]})}),e.jsx(q,{value:a,index:0,children:e.jsx(s,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(q,{value:a,index:1,children:e.jsx(s,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(q,{value:a,index:2,children:e.jsx(s,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})})]})})}q.propTypes={children:n.node,value:n.number,index:n.number,other:n.any};function d({children:a,value:t,index:i,...r}){return e.jsx("div",{role:"tabpanel",hidden:t!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...r,children:t===i&&e.jsx(u,{sx:{pt:2},children:a})})}function c(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}function z(){const[a,t]=x.useState(0),i=(j,o)=>{t(o)};return e.jsx(T,{codeString:`// ScrollableTabs.tsx
  <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
  <Tab
    label="Tab1"
    icon={<Chip label="99" color="primary" variant="light" size="small" />}
    iconPosition="end"
    {...a11yProps(0)}
  />
  <Tab
    label="Tab2"
    disabled
    icon={<Chip label="99" disabled variant="light" size="small" />}
    iconPosition="end"
    {...a11yProps(1)}
  />
  <Tab label="Tab3" icon={<Chip label="9" variant="light" size="small" />} iconPosition="end" {...a11yProps(2)} />
  <Tab label="Tab4" {...a11yProps(3)} />
  <Tab label="Tab5" {...a11yProps(4)} />
  <Tab label="Tab6" {...a11yProps(5)} />
  <Tab label="Tab7" {...a11yProps(6)} />
  <Tab label="Tab8" {...a11yProps(7)} />
  <Tab label="Tab9" {...a11yProps(8)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={3}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>
<TabPanel value={value} index={4}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={5}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={6}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>
<TabPanel value={value} index={7}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={8}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>`,children:e.jsxs(u,{sx:{width:"100%"},children:[e.jsx(u,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(y,{value:a,onChange:i,variant:"scrollable",scrollButtons:"auto","aria-label":"basic tabs example",children:[e.jsx(l,{label:"Tab1",icon:e.jsx(b,{label:"99",color:"primary",variant:"light",size:"small"}),iconPosition:"end",...c(0)}),e.jsx(l,{label:"Tab2",disabled:!0,icon:e.jsx(b,{label:"99",disabled:!0,variant:"light",size:"small"}),iconPosition:"end",...c(1)}),e.jsx(l,{label:"Tab3",icon:e.jsx(b,{label:"9",variant:"light",size:"small"}),iconPosition:"end",...c(2)}),e.jsx(l,{label:"Tab4",...c(3)}),e.jsx(l,{label:"Tab5",...c(4)}),e.jsx(l,{label:"Tab6",...c(5)}),e.jsx(l,{label:"Tab7",...c(6)}),e.jsx(l,{label:"Tab8",...c(7)}),e.jsx(l,{label:"Tab9",...c(8)})]})}),e.jsx(d,{value:a,index:0,children:e.jsx(s,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(d,{value:a,index:2,children:e.jsx(s,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(d,{value:a,index:3,children:e.jsx(s,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})}),e.jsx(d,{value:a,index:4,children:e.jsx(s,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(d,{value:a,index:5,children:e.jsx(s,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(d,{value:a,index:6,children:e.jsx(s,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})}),e.jsx(d,{value:a,index:7,children:e.jsx(s,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(d,{value:a,index:8,children:e.jsx(s,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})})]})})}d.propTypes={children:n.node,value:n.number,index:n.number,other:n.any};function g({children:a,value:t,index:i,...r}){return e.jsx("div",{role:"tabpanel",hidden:t!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...r,children:t===i&&e.jsx(u,{sx:{pt:2},children:a})})}function P(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}function B(){const[a,t]=x.useState(0),i=(j,o)=>{t(o)};return e.jsx(T,{codeString:`// IconTabs.tsx
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  <Tab label="Profile" icon={<Profile />} iconPosition="start" {...a11yProps(0)} />
  <Tab label="Followers" icon={<Book />} iconPosition="start" {...a11yProps(1)} />
  <Tab label="Friends" icon={<Profile2User />} iconPosition="start" {...a11yProps(2)} />
  <Tab label="Gallery" icon={<Image />} iconPosition="start" {...a11yProps(3)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>
<TabPanel value={value} index={3}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>`,children:e.jsxs(u,{sx:{width:"100%"},children:[e.jsx(u,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(y,{value:a,onChange:i,"aria-label":"basic tabs example",children:[e.jsx(l,{label:"Profile",icon:e.jsx(N,{}),iconPosition:"start",...P(0)}),e.jsx(l,{label:"Followers",icon:e.jsx(D,{}),iconPosition:"start",...P(1)}),e.jsx(l,{label:"Friends",icon:e.jsx(I,{}),iconPosition:"start",...P(2)}),e.jsx(l,{label:"Gallery",icon:e.jsx(U,{}),iconPosition:"start",...P(3)})]})}),e.jsx(g,{value:a,index:0,children:e.jsx(s,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(g,{value:a,index:1,children:e.jsx(s,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(g,{value:a,index:2,children:e.jsx(s,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})}),e.jsx(g,{value:a,index:3,children:e.jsx(s,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})})]})})}g.propTypes={children:n.node,value:n.number,index:n.number,other:n.any};function f({children:a,value:t,index:i,...r}){return e.jsx("div",{role:"tabpanel",hidden:t!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...r,children:t===i&&e.jsx(u,{sx:{pt:2},children:a})})}function C(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}function w(){const[a,t]=x.useState(0),i=(j,o)=>{t(o)};return e.jsx(T,{codeString:`// CenteredTabs.tsx
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
  <Tab
    label="Tab1"
    icon={<Chip label="99" color="primary" variant="light" size="small" />}
    iconPosition="end"
    {...a11yProps(0)}
  />
  <Tab label="Tab2" icon={<Chip label="9" variant="light" size="small" />} iconPosition="end" {...a11yProps(1)} />
  <Tab label="Tab3" {...a11yProps(2)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>`,children:e.jsxs(u,{sx:{width:"100%"},children:[e.jsx(u,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(y,{value:a,onChange:i,"aria-label":"basic tabs example",centered:!0,children:[e.jsx(l,{label:"Tab1",icon:e.jsx(b,{label:"99",color:"primary",variant:"light",size:"small"}),iconPosition:"end",...C(0)}),e.jsx(l,{label:"Tab2",icon:e.jsx(b,{label:"9",variant:"light",size:"small"}),iconPosition:"end",...C(1)}),e.jsx(l,{label:"Tab3",...C(2)})]})}),e.jsx(f,{value:a,index:0,children:e.jsx(s,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(f,{value:a,index:1,children:e.jsx(s,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(f,{value:a,index:2,children:e.jsx(s,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})})]})})}f.propTypes={children:n.node,value:n.number,index:n.number,other:n.any};function m({children:a,value:t,index:i,...r}){return e.jsx("div",{role:"tabpanel",hidden:t!==i,id:`vertical-tabpanel-${i}`,"aria-labelledby":`vertical-tab-${i}`,...r,children:t===i&&e.jsx(u,{sx:{p:3,height:{xs:"100%",sm:"auto"},overflowX:{xs:"scroll",sm:"auto"}},children:a})})}function p(a){return{id:`vertical-tab-${a}`,"aria-controls":`vertical-tabpanel-${a}`}}function L(){const[a,t]=x.useState(0),i=(j,o)=>{t(o)};return e.jsx(T,{codeString:`// VerticalTabs.tsx
<Tabs
  orientation="vertical"
  variant="scrollable"
  value={value}
  onChange={handleChange}
  aria-label="Vertical tabs example"
  sx={{ borderRight: 1, borderColor: 'divider' }}
>
  <Tab label="Tab 1" {...a11yProps(0)} />
  <Tab label="Tab 2" {...a11yProps(1)} />
  <Tab label="Tab 3" {...a11yProps(2)} />
  <Tab label="Tab 4" {...a11yProps(3)} />
  <Tab label="Tab 5" {...a11yProps(4)} />
  <Tab label="Tab 6" {...a11yProps(5)} />
  <Tab label="Tab 7" {...a11yProps(6)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est quam, mattis non dui sed, pretium dignissim elit. Nam auctor
    augue et magna rutrum dictum. Nulla facilisi. Sed consectetur libero vitae sem ultrices fermentum. Donec ac tortor ullamcorper,
    posuere est congue, pharetra velit. Nullam vehicula elit elementum pellentesque elementum. Duis consectetur sapien purus, et
    scelerisque erat fringilla quis.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean
    consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa,
    tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id
    sollicitudin leo elementum.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Curabitur vitae condimentum magna. In posuere rhoncus dolor sit amet mattis. Suspendisse ligula enim, varius at consequat
    aliquam, pharetra ac velit. Morbi a augue vel leo suscipit convallis. Proin semper pretium dolor, ac pharetra diam gravida non.
    Etiam velit orci, elementum et viverra ornare, vestibulum accumsan dui. Suspendisse sagittis tristique metus non interdum.
    Nullam mollis sagittis dolor.
  </Typography>
</TabPanel>
<TabPanel value={value} index={3}>
  <Typography variant="h6">
    Quisque posuere luctus turpis vel aliquam. Maecenas consequat tempus nisl, ac ultrices lacus laoreet dignissim. Donec pretium
    quis turpis sed rutrum. Etiam fermentum ipsum vel urna scelerisque vulputate. Phasellus nulla dui, bibendum id ligula et,
    eleifend efficitur orci. Integer vel purus nec lectus porta interdum. Aliquam finibus lectus id odio dictum, in facilisis quam
    hendrerit. Ut vitae tellus enim.
  </Typography>
</TabPanel>
<TabPanel value={value} index={4}>
  <Typography variant="h6">
    Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla.
    Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo
    nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum.
  </Typography>
</TabPanel>
<TabPanel value={value} index={5}>
  <Typography variant="h6">
    Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean
    consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa,
    tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id
    sollicitudin leo elementum.
  </Typography>
</TabPanel>
<TabPanel value={value} index={6}>
  <Typography variant="h6">
    Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla.
    Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo
    nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum.
  </Typography>
</TabPanel>`,children:e.jsxs(u,{sx:{flexGrow:1,bgcolor:"background.paper",display:"flex",height:224},children:[e.jsxs(y,{orientation:"vertical",variant:"scrollable",value:a,onChange:i,"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider"},children:[e.jsx(l,{label:"Tab 1",...p(0)}),e.jsx(l,{label:"Tab 2",...p(1)}),e.jsx(l,{label:"Tab 3",...p(2)}),e.jsx(l,{label:"Tab 4",...p(3)}),e.jsx(l,{label:"Tab 5",...p(4)}),e.jsx(l,{label:"Tab 6",...p(5)}),e.jsx(l,{label:"Tab 7",...p(6)})]}),e.jsx(m,{value:a,index:0,children:e.jsx(s,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est quam, mattis non dui sed, pretium dignissim elit. Nam auctor augue et magna rutrum dictum. Nulla facilisi. Sed consectetur libero vitae sem ultrices fermentum. Donec ac tortor ullamcorper, posuere est congue, pharetra velit. Nullam vehicula elit elementum pellentesque elementum. Duis consectetur sapien purus, et scelerisque erat fringilla quis."})}),e.jsx(m,{value:a,index:1,children:e.jsx(s,{variant:"h6",children:"Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa, tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id sollicitudin leo elementum."})}),e.jsx(m,{value:a,index:2,children:e.jsx(s,{variant:"h6",children:"Curabitur vitae condimentum magna. In posuere rhoncus dolor sit amet mattis. Suspendisse ligula enim, varius at consequat aliquam, pharetra ac velit. Morbi a augue vel leo suscipit convallis. Proin semper pretium dolor, ac pharetra diam gravida non. Etiam velit orci, elementum et viverra ornare, vestibulum accumsan dui. Suspendisse sagittis tristique metus non interdum. Nullam mollis sagittis dolor."})}),e.jsx(m,{value:a,index:3,children:e.jsx(s,{variant:"h6",children:"Quisque posuere luctus turpis vel aliquam. Maecenas consequat tempus nisl, ac ultrices lacus laoreet dignissim. Donec pretium quis turpis sed rutrum. Etiam fermentum ipsum vel urna scelerisque vulputate. Phasellus nulla dui, bibendum id ligula et, eleifend efficitur orci. Integer vel purus nec lectus porta interdum. Aliquam finibus lectus id odio dictum, in facilisis quam hendrerit. Ut vitae tellus enim."})}),e.jsx(m,{value:a,index:4,children:e.jsx(s,{variant:"h6",children:"Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla. Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum."})}),e.jsx(m,{value:a,index:5,children:e.jsx(s,{variant:"h6",children:"Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa, tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id sollicitudin leo elementum."})}),e.jsx(m,{value:a,index:6,children:e.jsx(s,{variant:"h6",children:"Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla. Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum."})})]})})}m.propTypes={children:n.node,value:n.number,index:n.number,other:n.any};function X(){return e.jsxs(V,{children:[e.jsx($,{title:"Tabs",caption:"Tabs make it easy to explore and switch between different views.",directory:"src/pages/components-overview/tabs",link:"https://mui.com/material-ui/react-tabs/"}),e.jsx(A,{children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{item:!0,xs:12,lg:6,children:e.jsxs(v,{spacing:1,children:[e.jsx(s,{variant:"h5",children:"Basic"}),e.jsx(M,{})]})}),e.jsx(h,{item:!0,xs:12,lg:6,children:e.jsxs(v,{spacing:1,children:[e.jsx(s,{variant:"h5",children:"Color Tab with Disabled Tab + Scrollable Tabs"}),e.jsx(z,{})]})}),e.jsx(h,{item:!0,xs:12,lg:6,children:e.jsxs(v,{spacing:1,children:[e.jsx(s,{variant:"h5",children:"Icon Tabs"}),e.jsx(B,{})]})}),e.jsx(h,{item:!0,xs:12,lg:6,children:e.jsxs(v,{spacing:1,children:[e.jsx(s,{variant:"h5",children:"Centered Tabs"}),e.jsx(w,{})]})}),e.jsx(h,{item:!0,xs:12,lg:6,children:e.jsxs(v,{spacing:1,children:[e.jsx(s,{variant:"h5",children:"Vertical Tabs"}),e.jsx(L,{})]})})]})})]})}export{X as default};
