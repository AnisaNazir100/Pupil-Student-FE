import{cs as St,r as b,ct as Se,et as Ct,dB as de,bs as Ke,eu as Ot,j as o,M as L,G as X,bd as v,q as w,B as $,de as At,cW as It,es as vt,b3 as G,P as Ce,bV as qe,K as kt,av as wt,S as Ae,c as Tt,a$ as jt,a2 as Lt,ev as ce,a_ as Pt,W as Mt,ei as Vt,c$ as zt}from"./index-Dhb-fOBp.js";import{C as Ft,a as Bt,b as Dt}from"./ComponentSkeleton-CdPpPS-v.js";import{c as Rt}from"./countries-DfYzOzoU.js";import{S as $t}from"./Setting3-Leal5Tvo.js";import"./Link1-g8L_kSLT.js";import"./Skeleton-z3y3GJ7S.js";function Ne(r){return typeof r.normalize<"u"?r.normalize("NFD").replace(/[\u0300-\u036f]/g,""):r}function Et(r={}){const{ignoreAccents:l=!0,ignoreCase:a=!0,limit:p,matchFrom:u="any",stringify:A,trim:g=!1}=r;return(I,{inputValue:V,getOptionLabel:E})=>{let C=g?V.trim():V;a&&(C=C.toLowerCase()),l&&(C=Ne(C));const P=C?I.filter(h=>{let f=(A||E)(h);return a&&(f=f.toLowerCase()),l&&(f=Ne(f)),u==="start"?f.indexOf(C)===0:f.indexOf(C)>-1}):I;return typeof p=="number"?P.slice(0,p):P}}function ge(r,l){for(let a=0;a<r.length;a+=1)if(l(r[a]))return a;return-1}const Wt=Et(),Ht=5,Gt=r=>{var l;return r.current!==null&&((l=r.current.parentElement)==null?void 0:l.contains(document.activeElement))};function Kt(r){const{unstable_isActiveElementInListbox:l=Gt,unstable_classNamePrefix:a="Mui",autoComplete:p=!1,autoHighlight:u=!1,autoSelect:A=!1,blurOnSelect:g=!1,clearOnBlur:I=!r.freeSolo,clearOnEscape:V=!1,componentName:E="useAutocomplete",defaultValue:C=r.multiple?[]:null,disableClearable:P=!1,disableCloseOnSelect:h=!1,disabled:f,disabledItemsFocusable:z=!1,disableListWrap:K=!1,filterOptions:Je=Wt,filterSelectedOptions:Ie=!1,freeSolo:Q=!1,getOptionDisabled:re,getOptionKey:ve,getOptionLabel:ke=t=>{var e;return(e=t.label)!=null?e:t},groupBy:le,handleHomeEndKeys:we=!r.freeSolo,id:Xe,includeInputInList:Te=!1,inputValue:Qe,isOptionEqualToValue:Y=(t,e)=>t===e,multiple:x=!1,onChange:je,onClose:Le,onHighlightChange:Pe,onInputChange:N,onOpen:Me,open:Ye,openOnFocus:Ze=!1,options:et,readOnly:Z=!1,selectOnFocus:tt=!r.freeSolo,value:ot}=r,F=St(Xe);let j=ke;j=t=>{const e=ke(t);return typeof e!="string"?String(e):e};const me=b.useRef(!1),be=b.useRef(!0),k=b.useRef(null),B=b.useRef(null),[ie,rt]=b.useState(null),[D,he]=b.useState(-1),Ve=u?0:-1,T=b.useRef(Ve),[s,lt]=Se({controlled:ot,default:C,name:E}),[m,ae]=Se({controlled:Qe,default:"",name:E,state:"inputValue"}),[ne,ze]=b.useState(!1),se=b.useCallback((t,e)=>{if(!(x?s.length<e.length:e!==null)&&!I)return;let n;if(x)n="";else if(e==null)n="";else{const c=j(e);n=typeof c=="string"?c:""}m!==n&&(ae(n),N&&N(t,n,"reset"))},[j,m,x,N,ae,I,s]),[_,Fe]=Se({controlled:Ye,default:!1,name:E,state:"open"}),[it,Be]=b.useState(!0),De=!x&&s!=null&&m===j(s),M=_&&!Z,y=M?Je(et.filter(t=>!(Ie&&(x?s:[s]).some(e=>e!==null&&Y(t,e)))),{inputValue:De&&it?"":m,getOptionLabel:j}):[],W=Ct({filteredOptions:y,value:s,inputValue:m});b.useEffect(()=>{const t=s!==W.value;ne&&!t||Q&&!t||se(null,s)},[s,se,ne,W.value,Q]);const fe=_&&y.length>0&&!Z,pe=de(t=>{t===-1?k.current.focus():ie.querySelector(`[data-tag-index="${t}"]`).focus()});b.useEffect(()=>{x&&D>s.length-1&&(he(-1),pe(-1))},[s,x,D,pe]);function at(t,e){if(!B.current||t<0||t>=y.length)return-1;let i=t;for(;;){const n=B.current.querySelector(`[data-option-index="${i}"]`),c=z?!1:!n||n.disabled||n.getAttribute("aria-disabled")==="true";if(n&&n.hasAttribute("tabindex")&&!c)return i;if(e==="next"?i=(i+1)%y.length:i=(i-1+y.length)%y.length,i===t)return-1}}const q=de(({event:t,index:e,reason:i="auto"})=>{if(T.current=e,e===-1?k.current.removeAttribute("aria-activedescendant"):k.current.setAttribute("aria-activedescendant",`${F}-option-${e}`),Pe&&Pe(t,e===-1?null:y[e],i),!B.current)return;const n=B.current.querySelector(`[role="option"].${a}-focused`);n&&(n.classList.remove(`${a}-focused`),n.classList.remove(`${a}-focusVisible`));let c=B.current;if(B.current.getAttribute("role")!=="listbox"&&(c=B.current.parentElement.querySelector('[role="listbox"]')),!c)return;if(e===-1){c.scrollTop=0;return}const S=B.current.querySelector(`[data-option-index="${e}"]`);if(S&&(S.classList.add(`${a}-focused`),i==="keyboard"&&S.classList.add(`${a}-focusVisible`),c.scrollHeight>c.clientHeight&&i!=="mouse"&&i!=="touch")){const O=S,R=c.clientHeight+c.scrollTop,Ge=O.offsetTop+O.offsetHeight;Ge>R?c.scrollTop=Ge-c.clientHeight:O.offsetTop-O.offsetHeight*(le?1.3:0)<c.scrollTop&&(c.scrollTop=O.offsetTop-O.offsetHeight*(le?1.3:0))}}),H=de(({event:t,diff:e,direction:i="next",reason:n="auto"})=>{if(!M)return;const S=at((()=>{const O=y.length-1;if(e==="reset")return Ve;if(e==="start")return 0;if(e==="end")return O;const R=T.current+e;return R<0?R===-1&&Te?-1:K&&T.current!==-1||Math.abs(e)>1?0:O:R>O?R===O+1&&Te?-1:K||Math.abs(e)>1?O:0:R})(),i);if(q({index:S,reason:n,event:t}),p&&e!=="reset")if(S===-1)k.current.value=m;else{const O=j(y[S]);k.current.value=O,O.toLowerCase().indexOf(m.toLowerCase())===0&&m.length>0&&k.current.setSelectionRange(m.length,O.length)}}),nt=()=>{const t=(e,i)=>{const n=e?j(e):"",c=i?j(i):"";return n===c};if(T.current!==-1&&W.filteredOptions&&W.filteredOptions.length!==y.length&&W.inputValue===m&&(x?s.length===W.value.length&&W.value.every((e,i)=>j(s[i])===j(e)):t(W.value,s))){const e=W.filteredOptions[T.current];if(e)return ge(y,i=>j(i)===j(e))}return-1},xe=b.useCallback(()=>{if(!M)return;const t=nt();if(t!==-1){T.current=t;return}const e=x?s[0]:s;if(y.length===0||e==null){H({diff:"reset"});return}if(B.current){if(e!=null){const i=y[T.current];if(x&&i&&ge(s,c=>Y(i,c))!==-1)return;const n=ge(y,c=>Y(c,e));n===-1?H({diff:"reset"}):q({index:n});return}if(T.current>=y.length-1){q({index:y.length-1});return}q({index:T.current})}},[y.length,x?!1:s,Ie,H,q,M,m,x]),st=de(t=>{Ot(B,t),t&&xe()});b.useEffect(()=>{xe()},[xe]);const U=t=>{_||(Fe(!0),Be(!0),Me&&Me(t))},ee=(t,e)=>{_&&(Fe(!1),Le&&Le(t,e))},J=(t,e,i,n)=>{if(x){if(s.length===e.length&&s.every((c,S)=>c===e[S]))return}else if(s===e)return;je&&je(t,e,i,n),lt(e)},ue=b.useRef(!1),te=(t,e,i="selectOption",n="options")=>{let c=i,S=e;if(x){S=Array.isArray(s)?s.slice():[];const O=ge(S,R=>Y(e,R));O===-1?S.push(e):n!=="freeSolo"&&(S.splice(O,1),c="removeOption")}se(t,S),J(t,S,c,{option:e}),!h&&(!t||!t.ctrlKey&&!t.metaKey)&&ee(t,c),(g===!0||g==="touch"&&ue.current||g==="mouse"&&!ue.current)&&k.current.blur()};function pt(t,e){if(t===-1)return-1;let i=t;for(;;){if(e==="next"&&i===s.length||e==="previous"&&i===-1)return-1;const n=ie.querySelector(`[data-tag-index="${i}"]`);if(!n||!n.hasAttribute("tabindex")||n.disabled||n.getAttribute("aria-disabled")==="true")i+=e==="next"?1:-1;else return i}}const Re=(t,e)=>{if(!x)return;m===""&&ee(t,"toggleInput");let i=D;D===-1?m===""&&e==="previous"&&(i=s.length-1):(i+=e==="next"?1:-1,i<0&&(i=0),i===s.length&&(i=-1)),i=pt(i,e),he(i),pe(i)},$e=t=>{me.current=!0,ae(""),N&&N(t,"","clear"),J(t,x?[]:null,"clear")},ut=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(D!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(he(-1),pe(-1)),e.which!==229))switch(e.key){case"Home":M&&we&&(e.preventDefault(),H({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":M&&we&&(e.preventDefault(),H({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),H({diff:-5,direction:"previous",reason:"keyboard",event:e}),U(e);break;case"PageDown":e.preventDefault(),H({diff:Ht,direction:"next",reason:"keyboard",event:e}),U(e);break;case"ArrowDown":e.preventDefault(),H({diff:1,direction:"next",reason:"keyboard",event:e}),U(e);break;case"ArrowUp":e.preventDefault(),H({diff:-1,direction:"previous",reason:"keyboard",event:e}),U(e);break;case"ArrowLeft":Re(e,"previous");break;case"ArrowRight":Re(e,"next");break;case"Enter":if(T.current!==-1&&M){const i=y[T.current],n=re?re(i):!1;if(e.preventDefault(),n)return;te(e,i,"selectOption"),p&&k.current.setSelectionRange(k.current.value.length,k.current.value.length)}else Q&&m!==""&&De===!1&&(x&&e.preventDefault(),te(e,m,"createOption","freeSolo"));break;case"Escape":M?(e.preventDefault(),e.stopPropagation(),ee(e,"escape")):V&&(m!==""||x&&s.length>0)&&(e.preventDefault(),e.stopPropagation(),$e(e));break;case"Backspace":if(x&&!Z&&m===""&&s.length>0){const i=D===-1?s.length-1:D,n=s.slice();n.splice(i,1),J(e,n,"removeOption",{option:s[i]})}break;case"Delete":if(x&&!Z&&m===""&&s.length>0&&D!==-1){const i=D,n=s.slice();n.splice(i,1),J(e,n,"removeOption",{option:s[i]})}break}},dt=t=>{ze(!0),Ze&&!me.current&&U(t)},Ee=t=>{if(l(B)){k.current.focus();return}ze(!1),be.current=!0,me.current=!1,A&&T.current!==-1&&M?te(t,y[T.current],"blur"):A&&Q&&m!==""?te(t,m,"blur","freeSolo"):I&&se(t,s),ee(t,"blur")},ct=t=>{const e=t.target.value;m!==e&&(ae(e),Be(!1),N&&N(t,e,"input")),e===""?!P&&!x&&J(t,null,"clear"):U(t)},gt=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));T.current!==e&&q({event:t,index:e,reason:"mouse"})},mt=t=>{q({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),ue.current=!0},bt=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));te(t,y[e],"selectOption"),ue.current=!1},ht=t=>e=>{const i=s.slice();i.splice(t,1),J(e,i,"removeOption",{option:s[t]})},We=t=>{_?ee(t,"toggleInput"):U(t)},ft=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==F&&t.preventDefault()},xt=t=>{t.currentTarget.contains(t.target)&&(k.current.focus(),tt&&be.current&&k.current.selectionEnd-k.current.selectionStart===0&&k.current.select(),be.current=!1)},yt=t=>{!f&&(m===""||!_)&&We(t)};let ye=Q&&m.length>0;ye=ye||(x?s.length>0:s!==null);let He=y;return le&&(He=y.reduce((t,e,i)=>{const n=le(e);return t.length>0&&t[t.length-1].group===n?t[t.length-1].options.push(e):t.push({key:i,index:i,group:n,options:[e]}),t},[])),f&&ne&&Ee(),{getRootProps:(t={})=>Ke({"aria-owns":fe?`${F}-listbox`:null},t,{onKeyDown:ut(t),onMouseDown:ft,onClick:xt}),getInputLabelProps:()=>({id:`${F}-label`,htmlFor:F}),getInputProps:()=>({id:F,value:m,onBlur:Ee,onFocus:dt,onChange:ct,onMouseDown:yt,"aria-activedescendant":M?"":null,"aria-autocomplete":p?"both":"list","aria-controls":fe?`${F}-listbox`:void 0,"aria-expanded":fe,autoComplete:"off",ref:k,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:f}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:$e}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:We}),getTagProps:({index:t})=>Ke({key:t,"data-tag-index":t,tabIndex:-1},!Z&&{onDelete:ht(t)}),getListboxProps:()=>({role:"listbox",id:`${F}-listbox`,"aria-labelledby":`${F}-label`,ref:st,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{var i;const n=(x?s:[s]).some(S=>S!=null&&Y(e,S)),c=re?re(e):!1;return{key:(i=ve==null?void 0:ve(e))!=null?i:j(e),tabIndex:-1,role:"option",id:`${F}-option-${t}`,onMouseMove:gt,onClick:bt,onTouchStart:mt,"data-option-index":t,"aria-disabled":c,"aria-selected":n}},id:F,inputValue:m,value:s,dirty:ye,expanded:M&&ie,popupOpen:M,focused:ne||D!==-1,anchorEl:ie,setAnchorEl:rt,focusedTag:D,groupedOptions:He}}const d=[{label:"The Shawshank Redemption",year:1994},{label:"The Godfather",year:1972},{label:"The Godfather: Part II",year:1974},{label:"The Dark Knight",year:2008},{label:"12 Angry Men",year:1957},{label:"Schindler's List",year:1993},{label:"Pulp Fiction",year:1994},{label:"The Lord of the Rings: The Return of the King",year:2003},{label:"The Good, the Bad and the Ugly",year:1966},{label:"Fight Club",year:1999},{label:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{label:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{label:"Forrest Gump",year:1994},{label:"Inception",year:2010},{label:"The Lord of the Rings: The Two Towers",year:2002},{label:"One Flew Over the Cuckoo's Nest",year:1975},{label:"Goodfellas",year:1990},{label:"The Matrix",year:1999},{label:"Seven Samurai",year:1954},{label:"Star Wars: Episode IV - A New Hope",year:1977},{label:"City of God",year:2002},{label:"Se7en",year:1995},{label:"The Silence of the Lambs",year:1991},{label:"It's a Wonderful Life",year:1946},{label:"Life Is Beautiful",year:1997},{label:"The Usual Suspects",year:1995},{label:"Léon: The Professional",year:1994},{label:"Spirited Away",year:2001},{label:"Saving Private Ryan",year:1998},{label:"Once Upon a Time in the West",year:1968},{label:"American History X",year:1998},{label:"Interstellar",year:2014},{label:"Casablanca",year:1942},{label:"City Lights",year:1931},{label:"Psycho",year:1960},{label:"The Green Mile",year:1999},{label:"The Intouchables",year:2011},{label:"Modern Times",year:1936},{label:"Raiders of the Lost Ark",year:1981},{label:"Rear Window",year:1954},{label:"The Pianist",year:2002},{label:"The Departed",year:2006},{label:"Terminator 2: Judgment Day",year:1991},{label:"Back to the Future",year:1985},{label:"Whiplash",year:2014},{label:"Gladiator",year:2e3},{label:"Memento",year:2e3},{label:"The Prestige",year:2006},{label:"The Lion King",year:1994},{label:"Apocalypse Now",year:1979},{label:"Alien",year:1979},{label:"Sunset Boulevard",year:1950},{label:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{label:"The Great Dictator",year:1940},{label:"Cinema Paradiso",year:1988},{label:"The Lives of Others",year:2006},{label:"Grave of the Fireflies",year:1988},{label:"Paths of Glory",year:1957},{label:"Django Unchained",year:2012},{label:"The Shining",year:1980},{label:"WALL·E",year:2008},{label:"American Beauty",year:1999},{label:"The Dark Knight Rises",year:2012},{label:"Princess Mononoke",year:1997},{label:"Aliens",year:1986},{label:"Oldboy",year:2003},{label:"Once Upon a Time in America",year:1984},{label:"Witness for the Prosecution",year:1957},{label:"Das Boot",year:1981},{label:"Citizen Kane",year:1941},{label:"North by Northwest",year:1959},{label:"Vertigo",year:1958},{label:"Star Wars: Episode VI - Return of the Jedi",year:1983},{label:"Reservoir Dogs",year:1992},{label:"Braveheart",year:1995},{label:"M",year:1931},{label:"Requiem for a Dream",year:2e3},{label:"Amélie",year:2001},{label:"A Clockwork Orange",year:1971},{label:"Like Stars on Earth",year:2007},{label:"Taxi Driver",year:1976},{label:"Lawrence of Arabia",year:1962},{label:"Double Indemnity",year:1944},{label:"Eternal Sunshine of the Spotless Mind",year:2004},{label:"Amadeus",year:1984},{label:"To Kill a Mockingbird",year:1962},{label:"Toy Story 3",year:2010},{label:"Logan",year:2017},{label:"Full Metal Jacket",year:1987},{label:"Dangal",year:2016},{label:"The Sting",year:1973},{label:"2001: A Space Odyssey",year:1968},{label:"Singin' in the Rain",year:1952},{label:"Toy Story",year:1995},{label:"Bicycle Thieves",year:1948},{label:"The Kid",year:1921},{label:"Inglourious Basterds",year:2009},{label:"Snatch",year:2e3},{label:"3 Idiots",year:2009},{label:"Monty Python and the Holy Grail",year:1975}];function Nt(){return o.jsx(L,{title:"Basic",sx:{overflow:"visible"},codeHighlight:!0,codeString:`<Autocomplete
  fullWidth
  disablePortal
  id="basic-autocomplete-label"
  options={data}
  renderInput={(params) => <TextField {...params} label="Label" />}
/>
<Autocomplete
  fullWidth
  disablePortal
  id="basic-autocomplete"
  options={data}
  renderInput={(params) => <TextField {...params} placeholder="Placeholder" />}
/>`,children:o.jsxs(X,{container:!0,spacing:2,children:[o.jsx(X,{item:!0,xs:12,lg:6,children:o.jsx(v,{fullWidth:!0,disablePortal:!0,id:"basic-autocomplete-label",options:d,renderInput:l=>o.jsx(w,{...l,label:"Label"})})}),o.jsx(X,{item:!0,xs:12,lg:6,children:o.jsx(v,{fullWidth:!0,disablePortal:!0,id:"basic-autocomplete",options:d,renderInput:l=>o.jsx(w,{...l,placeholder:"Placeholder"})})})]})})}function qt(){return o.jsx(L,{title:"With Image",codeString:`<Autocomplete
  id="country-select-demo"
  fullWidth
  options={countries}
  autoHighlight
  getOptionLabel={(option) => option.label}
  renderOption={(props, option) => (
    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
      {option.code && (
        <img
          loading="lazy"
          width="20"
          src={https://flagcdn.com/w20/{option.code.toLowerCase()}.png}
          srcSet={https://flagcdn.com/w40/{option.code.toLowerCase()}.png 2x}
          alt=""
        />
      )}
      {option.label} ({option.code}) +{option.phone}
    </Box>
  )}
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Choose a country"
      inputProps={{
        ...params.inputProps,
        autoComplete: 'new-password' // disable autocomplete and autofill
      }}
    />
  )}
/>`,children:o.jsx(v,{id:"country-select-demo",fullWidth:!0,options:Rt,autoHighlight:!0,getOptionLabel:l=>l.label,renderOption:(l,a)=>o.jsxs($,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...l,children:[a.code&&o.jsx("img",{loading:"lazy",width:"20",src:`https://flagcdn.com/w20/${a.code.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${a.code.toLowerCase()}.png 2x`,alt:""}),a.label," (",a.code,") +",a.phone]}),renderInput:l=>o.jsx(w,{...l,placeholder:"Choose a country",inputProps:{...l.inputProps,autoComplete:"new-password"}})})})}const Ut=d,_t=At();function Jt(){const[r,l]=b.useState(null);return o.jsx(L,{title:"Creatable",codeString:`<Autocomplete
  fullWidth
  value={value}
  onChange={(event, newValue) => {
    if (typeof newValue === 'string') {
      setValue({
        label: newValue
      });
    } else if (newValue && newValue.inputValue) {
      setValue({
        label: newValue.inputValue
      });
    } else {
      setValue(newValue);
    }
  }}
  filterOptions={(options, params) => {
    const filtered = filter(options, params);

    const { inputValue } = params;

    const isExisting = options.some((option) => inputValue === option.label);
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        label: 'Add {inputValue}'
      });
    }

    return filtered;
  }}
  selectOnFocus
  clearOnBlur
  handleHomeEndKeys
  id="free-solo-with-text-demo"
  options={data}
  getOptionLabel={(option) => {
    // Value selected with enter, right from the input
    if (typeof option === 'string') {
      return option;
    }
    // Add "xxx" option created dynamically
    if (option.inputValue) {
      return option.inputValue;
    }
    // Regular option
    return option.label;
  }}
  renderOption={(props, option) => <li {...props}>{option.label}</li>}
  freeSolo
  renderInput={(params) => <TextField {...params} placeholder="Free solo with text demo" />}
/>`,children:o.jsx(v,{fullWidth:!0,value:r,onChange:(p,u)=>{typeof u=="string"?l({label:u}):u&&u.inputValue?l({label:u.inputValue}):l(u)},filterOptions:(p,u)=>{const A=_t(p,u),{inputValue:g}=u,I=p.some(V=>g===V.label);return g!==""&&!I&&A.push({inputValue:g,label:`Add "${g}"`}),A},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:Ut,getOptionLabel:p=>typeof p=="string"?p:p.inputValue?p.inputValue:p.label,renderOption:(p,u)=>o.jsx("li",{...p,children:u.label}),freeSolo:!0,renderInput:p=>o.jsx(w,{...p,placeholder:"Free solo with text demo"})})})}function Xt(){const r=d.map(a=>{const p=a.label[0].toUpperCase();return{firstLetter:/[0-9]/.test(p)?"0-9":p,...a}});return o.jsx(L,{title:"Grouped",codeString:`<Autocomplete
  id="grouped-demo"
  fullWidth
  options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
  groupBy={(option) => option.firstLetter}
  getOptionLabel={(option) => option.label}
  renderInput={(params) => <TextField {...params} placeholder="With categories" />}
/>`,children:o.jsx(v,{id:"grouped-demo",fullWidth:!0,options:r.sort((a,p)=>-p.firstLetter.localeCompare(a.firstLetter)),groupBy:a=>a.firstLetter,getOptionLabel:a=>a.label,renderInput:a=>o.jsx(w,{...a,placeholder:"With categories"})})})}function Qt(){return o.jsx(L,{title:"Disabled Options",codeString:`<Autocomplete
  fullWidth
  id="disabled-options-demo"
  options={timeSlots}
  getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]}
  renderInput={(params) => <TextField {...params} placeholder="Disabled options" />}
/>`,children:o.jsx(v,{fullWidth:!0,id:"disabled-options-demo",options:Oe,getOptionDisabled:l=>l===Oe[0]||l===Oe[2],renderInput:l=>o.jsx(w,{...l,placeholder:"Disabled options"})})})}const Oe=Array.from(new Array(24*2)).map((r,l)=>`${l<20?"0":""}${Math.floor(l/2)}:${l%2===0?"00":"30"}`);function Yt(){const[r,l]=b.useState(!1),[a,p]=b.useState([]),u=r&&a.length===0;return b.useEffect(()=>{if(u)return()=>{}},[u]),b.useEffect(()=>{r||p([])},[r]),o.jsx(L,{title:"Asynchronous",codeString:`<Autocomplete
  id="asynchronous-demo"
  sx={{ width: 300 }}
  open={open}
  onOpen={() => {
    setOpen(true);
  }}
  onClose={() => {
    setOpen(false);
  }}
  isOptionEqualToValue={(option, value) => option.title === value.title}
  getOptionLabel={(option) => option.title}
  options={options}
  loading={loading}
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Asynchronous"
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <>
            {loading ? <CircularProgress color="inherit" size={20} /> : null}
            {params.InputProps.endAdornment}
          </>
        )
      }}
    />
  )}
/>`,children:o.jsx(v,{id:"asynchronous-demo",sx:{width:300},open:r,onOpen:()=>{l(!0)},onClose:()=>{l(!1)},isOptionEqualToValue:(g,I)=>g.title===I.title,getOptionLabel:g=>g.title,options:a,loading:u,renderInput:g=>o.jsx(w,{...g,placeholder:"Asynchronous",InputProps:{...g.InputProps,endAdornment:o.jsxs(o.Fragment,{children:[u?o.jsx(It,{color:"inherit",size:20}):null,g.InputProps.endAdornment]})}})})})}const Ue=G("div")(({theme:r})=>`
color: ${r.palette.text.primary};
font-size: 14px;
`);Ue.displayName="Root";const Zt=G("div")(({theme:r})=>`
width: 100%;
border: 1px solid ${r.palette.divider};
background-color: ${r.palette.background.default};
border-radius: 4px;
padding: 8px;
display: flex;
flex-wrap: wrap;

&:hover {
  border-color: ${r.palette.primary.main};
}

&.focused {
  border-color: ${r.palette.primary.main};
  box-shadow: ${r.customShadows.primary};
}

& input {
  background-color: transparent;
  height: 30px;
  box-sizing: border-box;
  padding: 4px 6px;
  width: 0;
  min-width: 30px;
  flex-grow: 1;
  border: 0;
  margin: 0;
  outline: 0;
}
`);function _e({label:r,onDelete:l,...a}){return o.jsxs("div",{...a,children:[o.jsx("span",{children:r}),o.jsx(qe,{onClick:l,variant:"Bold",size:18})]})}const eo=G(_e)(({theme:r})=>`
display: flex;
align-items: center;
height: 24px;
margin: 4px;
line-height: 22px;
background-color: ${r.palette.secondary.lighter};
border: 1px solid ${r.palette.secondary.light};
border-radius: 2px;
box-sizing: content-box;
padding: 0 4px 0 10px;
outline: 0;
overflow: hidden;

& span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

& svg {
  font-size: 0.625rem;
  cursor: pointer;
  padding: 4px;
}
`),to=G("ul")(({theme:r})=>`
width: 300px;
margin: 2px 0 0;
padding: 0;
position: absolute;
list-style: none;
background-color: ${r.palette.background.paper};
overflow: auto;
max-height: 250px;
border-radius: 4px;
box-shadow: ${r.customShadows.z1};
z-index: 1;

& li {
  padding: 5px 12px;
  display: flex;

  & span {
    flex-grow: 1;
  }

  & svg {
    color: transparent;
  }
}

& li[aria-selected='true'] {
  background-color: ${r.palette.primary.lighter};
  font-weight: 600;

  & svg {
    color: ${r.palette.primary.main};
  }
}

& li[data-focus='true'] {
  background-color: ${r.palette.primary.lighter};
  cursor: pointer;

  & svg {
    color: currentColor;
  }
}
`);function oo(){const{getRootProps:r,getInputProps:l,getTagProps:a,getListboxProps:p,getOptionProps:u,groupedOptions:A,value:g,focused:I,setAnchorEl:V}=Kt({id:"customized-hook-demo",defaultValue:[d[1],d[3],d[8]],multiple:!0,options:d,getOptionLabel:C=>C.label});return o.jsx(L,{title:"Customized",sx:{overflow:"visible"},codeString:`// CustomizedAutocomplete.tsx
<Root>
  <div {...getRootProps()}>
    <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
      {value.map((option: FilmOptionType, index: number) => (
        <StyledTag label={option.label} {...getTagProps({ index })} />
      ))}
      <input {...getInputProps()} />
    </InputWrapper>
  </div>
  {groupedOptions.length > 0 ? (
    <Listbox {...getListboxProps()}>
      {(groupedOptions as typeof data).map((option, index) => (
        <li {...getOptionProps({ option, index })}>
          <span>{option.label}</span>
          <TickSquare variant="Bold" size={16} style={{ marginTop: 2 }} />
        </li>
      ))}
    </Listbox>
  ) : null}
</Root>`,children:o.jsxs(Ue,{children:[o.jsx("div",{...r(),children:o.jsxs(Zt,{ref:V,className:I?"focused":"",children:[g.map((C,P)=>o.jsx(eo,{label:C.label,...a({index:P})},P)),o.jsx("input",{...l()})]})}),A.length>0?o.jsx(to,{...p(),children:A.map((C,P)=>b.createElement("li",{...u({option:C,index:P}),key:P},o.jsx("span",{children:C.label}),o.jsx(vt,{variant:"Bold",size:16,style:{marginTop:2}})))}):null]})})}_e.propTypes={label:Ce.string,onDelete:Ce.any,other:Ce.any};function ro(){return o.jsx(L,{title:"Multiple Tags",codeString:`<Autocomplete
  multiple
  id="tags-outlined"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[7], data[13]]}
  filterSelectedOptions
  renderInput={(params) => <TextField {...params} placeholder="Favorites" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsx(v,{multiple:!0,id:"tags-outlined",options:d,getOptionLabel:l=>l.label,defaultValue:[d[7],d[13]],filterSelectedOptions:!0,renderInput:l=>o.jsx(w,{...l,placeholder:"Favorites"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function lo(){const r=[d[6]],[l,a]=b.useState([...r,d[13]]);return o.jsx(L,{title:"Fixed Options",codeString:`<Autocomplete
  multiple
  fullWidth
  id="fixed-tags-demo"
  value={value}
  onChange={(event, newValue) => {
    setValue([...fixedOptions, ...newValue.filter((option) => fixedOptions.indexOf(option) === -1)]);
  }}
  options={data}
  getOptionLabel={(option) => option.label}
  renderTags={(tagValue, getTagProps) =>
    tagValue.map((option, index) => (
      <Chip label={option.label} {...getTagProps({ index })} disabled={fixedOptions.indexOf(option) !== -1} />
    ))
  }
  renderInput={(params) => <TextField {...params} placeholder="Fixed Tag" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsx(v,{multiple:!0,fullWidth:!0,id:"fixed-tags-demo",value:l,onChange:(u,A)=>{a([...r,...A.filter(g=>r.indexOf(g)===-1)])},options:d,getOptionLabel:u=>u.label,renderTags:(u,A)=>u.map((g,I)=>o.jsx(kt,{label:g.label,...A({index:I}),disabled:r.indexOf(g)!==-1},I)),renderInput:u=>o.jsx(w,{...u,placeholder:"Fixed Tag"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function io(){return o.jsx(L,{title:"Checkboxes",codeString:`<Autocomplete
  multiple
  id="checkboxes-tags-demo"
  options={data}
  disableCloseOnSelect
  getOptionLabel={(option) => option.label}
  renderOption={(props, option, { selected }) => (
    <li {...props}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.label}
    </li>
  )}
  renderInput={(params) => <TextField {...params} placeholder="Checkboxes" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsx(v,{multiple:!0,id:"checkboxes-tags-demo",options:d,disableCloseOnSelect:!0,getOptionLabel:l=>l.label,renderOption:(l,a,{selected:p})=>o.jsxs("li",{...l,children:[o.jsx(wt,{style:{marginRight:8},checked:p}),a.label]}),renderInput:l=>o.jsx(w,{...l,placeholder:"Checkboxes"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function ao(){return o.jsx(L,{title:"Limit Tags",codeString:`<Autocomplete
  multiple
  limitTags={2}
  id="multiple-limit-tags"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[12], data[11]]}
  renderInput={(params) => <TextField {...params} placeholder="Limit Tags" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderRadius: 1,
      height: 32,
      pl: 1.5,
      pr: 1.5,
      lineHeight: '32px',
      borderColor: 'primary.light',
      '& .MuiChip-label': {
        paddingLeft: 0,
        paddingRight: 0
      },
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        ml: 1,
        mr: -0.75,
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsx(v,{multiple:!0,limitTags:2,id:"multiple-limit-tags",options:d,getOptionLabel:l=>l.label,defaultValue:[d[13],d[12],d[11]],renderInput:l=>o.jsx(w,{...l,placeholder:"Limit Tags"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderRadius:1,height:32,pl:1.5,pr:1.5,lineHeight:"32px",borderColor:"primary.light","& .MuiChip-label":{paddingLeft:0,paddingRight:0},"& .MuiSvgIcon-root":{color:"primary.main",ml:1,mr:-.75,"&:hover":{color:"primary.dark"}}}}})})}function no(){return o.jsx(L,{title:"Sizes",codeString:`<Autocomplete
  id="size-small-outlined"
  size="small"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={data[13]}
  renderInput={(params) => <TextField {...params} placeholder="Size Small" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  id="size-small-outlined"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={data[13]}
  renderInput={(params) => <TextField {...params} placeholder="Size Small" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  multiple
  id="size-small-outlined-multi"
  size="small"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[3]]}
  renderInput={(params) => <TextField {...params} placeholder="Size Small" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  multiple
  id="size-default-outlined-multi"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[3]]}
  renderInput={(params) => <TextField {...params} placeholder="Size Medium" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  multiple
  size="medium"
  id="size-large-outlined-multi"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[3]]}
  renderInput={(params) => <TextField {...params} placeholder="Size Large" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsxs(Ae,{spacing:2,children:[o.jsx(v,{id:"size-small-outlined",size:"small",options:d,getOptionLabel:l=>l.label,defaultValue:d[13],renderInput:l=>o.jsx(w,{...l,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),o.jsx(v,{id:"size-small-outlined",options:d,getOptionLabel:l=>l.label,defaultValue:d[13],renderInput:l=>o.jsx(w,{...l,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),o.jsx(v,{multiple:!0,id:"size-small-outlined-multi",size:"small",options:d,getOptionLabel:l=>l.label,defaultValue:[d[13],d[3]],renderInput:l=>o.jsx(w,{...l,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),o.jsx(v,{multiple:!0,id:"size-default-outlined-multi",options:d,getOptionLabel:l=>l.label,defaultValue:[d[13],d[3]],renderInput:l=>o.jsx(w,{...l,placeholder:"Size Medium"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),o.jsx(v,{multiple:!0,size:"medium",id:"size-large-outlined-multi",options:d,getOptionLabel:l=>l.label,defaultValue:[d[13],d[3]],renderInput:l=>o.jsx(w,{...l,placeholder:"Size Large"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})]})})}const so=G($)(({theme:r})=>({[`& .${ce.paper}`]:{boxShadow:"none",margin:0,color:"inherit",fontSize:13},[`& .${ce.listbox}`]:{backgroundColor:r.palette.background.default,padding:0,[`& .${ce.option}`]:{minHeight:"auto",alignItems:"flex-start",padding:8,borderBottom:`1px solid ${r.palette.divider}`,'&[aria-selected="true"]':{backgroundColor:"transparent"},'&[data-focus="true"], &[data-focus="true"][aria-selected="true"]':{backgroundColor:r.palette.action.hover}}},[`&.${ce.popperDisablePortal}`]:{position:"relative"}}));function po({...r}){return o.jsx(so,{...r})}const uo=G(Pt)(({theme:r})=>({border:"1px solid",borderColor:r.palette.divider,boxShadow:r.customShadows.z1,borderRadius:6,width:300,zIndex:r.zIndex.modal,fontSize:13,color:r.palette.mode===Mt.DARK?r.palette.secondary.light:r.palette.secondary.dark,backgroundColor:r.palette.background.default})),co=G(Vt)(({theme:r})=>({padding:10,width:"100%",borderBottom:"1px solid ",borderColor:r.palette.divider,"& input":{borderRadius:4,backgroundColor:r.palette.background.paper,padding:8,transition:r.transitions.create(["border-color","box-shadow"]),border:"1px solid",borderColor:r.palette.primary.main,fontSize:14,"&:focus-visible":{boxShadow:r.customShadows.primary,borderColor:r.palette.primary.main}}})),go=G(zt)(({theme:r})=>({fontSize:13,width:"100%",textAlign:"left",marginBottom:8,color:r.palette.text.primary,fontWeight:600,"&:hover":{color:r.palette.primary.main},"&:focus-visible":{borderRadius:1,outline:`2px solid ${r.palette.secondary.dark}`,outlineOffset:2},"& span":{width:"100%"},"& svg":{width:16,height:16}}));function mo(){const[r,l]=b.useState(null),[a,p]=b.useState([oe[1],oe[11]]),[u,A]=b.useState([]),g=Tt(),I=h=>{A(a),l(h.currentTarget)},V=()=>{p(u),r&&r.focus(),l(null)},E=!!r,C=E?"github-label":void 0,P=`<StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
  <ClickAwayListener onClickAway={handleClose}>
    <Box sx={{ bgcolor: 'background.default' }}>
      <Box
        sx={{
          borderBottom: '1px solid ${g.palette.divider}',
          padding: '8px 10px',
          fontWeight: 600
        }}
      >
        Apply labels to this pull request
      </Box>
      <Autocomplete
        open
        multiple
        onClose={(event: ChangeEvent<{}>, reason: AutocompleteCloseReason) => {
          if (reason === 'escape') {
            handleClose();
          }
        }}
        value={pendingValue}
        onChange={(event, newValue, reason) => {
          if (event.type === 'keydown' && (event as KeyboardEvent).key === 'Backspace' && reason === 'removeOption') {
            return;
          }
          setPendingValue(newValue);
        }}
        disableCloseOnSelect
        PopperComponent={PopperComponent}
        renderTags={() => null}
        noOptionsText="No labels"
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Box
              component={TickCircle}
              sx={{ width: 17, height: 17, mr: '5px', ml: '-2px', mt: 0.25, color: 'success.main' }}
              style={{
                visibility: selected ? 'visible' : 'hidden'
              }}
            />
            <Box
              sx={{
                width: 14,
                height: 14,
                flexShrink: 0,
                borderRadius: '3px',
                mr: 1,
                mt: '2px'
              }}
              style={{ backgroundColor: option.color }}
            />
            <Box
              sx={{
                flexGrow: 1,
                '& span': {
                  color: theme.palette.text.primary
                }
              }}
            >
              {option.name}
              <br />
              <span>{option.description}</span>
            </Box>
            <Box
              component={CloseCircle}
              sx={{ opacity: 0.6, width: 18, height: 18, mt: 0.25, color: 'error.main' }}
              style={{
                visibility: selected ? 'visible' : 'hidden'
              }}
            />
          </li>
        )}
        options={[...labels].sort((a, b) => {
          // Display the selected labels first.
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
          return ai - bi;
        })}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <StyledInput ref={params.InputProps.ref} inputProps={params.inputProps} autoFocus placeholder="Filter labels" />
        )}
      />
    </Box>
  </ClickAwayListener>
</StyledPopper>`;return o.jsxs(L,{title:"GitHub's Picker",codeString:P,children:[o.jsxs($,{sx:{width:221,fontSize:13},children:[o.jsxs(go,{disableRipple:!0,"aria-describedby":C,onClick:I,sx:{justifyContent:"space-between","& span":{width:"auto"}},children:[o.jsx("span",{children:"Labels"}),o.jsx($t,{variant:"Bold"})]}),a.map((h,f)=>o.jsx($,{sx:{mt:"3px",height:20,padding:".15em 4px",fontWeight:600,lineHeight:"15px",borderRadius:"2px"},style:{backgroundColor:h.color,color:g.palette.getContrastText(h.color)},children:h.name},f))]}),o.jsx(uo,{id:C,open:E,anchorEl:r,placement:"bottom-start",children:o.jsx(jt,{onClickAway:V,children:o.jsxs($,{sx:{bgcolor:"background.default"},children:[o.jsx($,{sx:{borderBottom:`1px solid ${g.palette.divider}`,padding:"8px 10px",fontWeight:600},children:"Apply labels to this pull request"}),o.jsx(v,{open:!0,multiple:!0,onClose:(h,f)=>{f==="escape"&&V()},value:u,onChange:(h,f,z)=>{h.type==="keydown"&&h.key==="Backspace"&&z==="removeOption"||A(f)},disableCloseOnSelect:!0,PopperComponent:po,renderTags:()=>null,noOptionsText:"No labels",renderOption:(h,f,{selected:z})=>o.jsxs("li",{...h,children:[o.jsx($,{component:Lt,sx:{width:17,height:17,mr:"5px",ml:"-2px",mt:.25,color:"success.main",visibility:z?"visible":"hidden"}}),o.jsx($,{sx:{width:14,height:14,flexShrink:0,borderRadius:"3px",mr:1,mt:"2px",bgcolor:f.color}}),o.jsxs($,{sx:{flexGrow:1,"& span":{color:g.palette.text.primary}},children:[f.name,o.jsx("br",{}),o.jsx("span",{children:f.description})]}),o.jsx($,{component:qe,sx:{opacity:.6,width:18,height:18,mt:.25,color:"error.main",visibility:z?"visible":"hidden"}})]}),options:[...oe].sort((h,f)=>{let z=a.indexOf(h);z=z===-1?a.length+oe.indexOf(h):z;let K=a.indexOf(f);return K=K===-1?a.length+oe.indexOf(f):K,z-K}),getOptionLabel:h=>h.name,renderInput:h=>o.jsx(co,{ref:h.InputProps.ref,inputProps:h.inputProps,autoFocus:!0,placeholder:"Filter labels"})})]})})})]})}const oe=[{name:"good first issue",color:"#7057ff",description:"Good for newcomers"},{name:"help wanted",color:"#008672",description:"Extra attention is needed"},{name:"priority: critical",color:"#b60205",description:""},{name:"priority: high",color:"#d93f0b",description:""},{name:"priority: low",color:"#0e8a16",description:""},{name:"priority: medium",color:"#fbca04",description:""},{name:"status: can't reproduce",color:"#fec1c1",description:""},{name:"status: confirmed",color:"#215cea",description:""},{name:"status: duplicate",color:"#cfd3d7",description:"This issue or pull request already exists"},{name:"status: needs information",color:"#fef2c0",description:""},{name:"status: wont do/fix",color:"#eeeeee",description:"This will not be worked on"},{name:"type: bug",color:"#d73a4a",description:"Something isn't working"},{name:"type: discussion",color:"#d4c5f9",description:""},{name:"type: documentation",color:"#006b75",description:""},{name:"type: enhancement",color:"#84b6eb",description:""},{name:"type: epic",color:"#3e4b9e",description:"A theme of work that contain sub-tasks"},{name:"type: feature request",color:"#fbca04",description:"New feature or request"},{name:"type: question",color:"#d876e3",description:"Further information is requested"}];function Co(){return o.jsxs(Ft,{children:[o.jsx(Bt,{title:"Autocomplete",caption:"The autocomplete is a normal text input enhanced by a panel of suggested options.",directory:"src/pages/components-overview/autocomplete",link:"https://mui.com/material-ui/react-autocomplete/"}),o.jsx(Dt,{children:o.jsxs(X,{container:!0,spacing:3,children:[o.jsx(X,{item:!0,xs:12,sm:6,children:o.jsxs(Ae,{spacing:3,children:[o.jsx(Nt,{}),o.jsx(qt,{}),o.jsx(Jt,{}),o.jsx(Xt,{}),o.jsx(Qt,{}),o.jsx(Yt,{}),o.jsx(oo,{})]})}),o.jsx(X,{item:!0,xs:12,sm:6,children:o.jsxs(Ae,{spacing:3,children:[o.jsx(ro,{}),o.jsx(lo,{}),o.jsx(io,{}),o.jsx(ao,{}),o.jsx(no,{}),o.jsx(mo,{})]})})]})})]})}export{Co as default};
