import{j as e}from"./jsx-runtime.ojTTAiD7.js";import{r as t}from"./index.Dck49-wq.js";import{M as o,E as l}from"./DownloadBtn.CU3i8ZO5.js";import"./index.C3ZEiZ-o.js";const d={src:"/_astro/mobile-icon.CoIpksUu.svg",width:24,height:24,format:"svg"},f={src:"/_astro/closs-icon.CyYAuwgR.svg",width:24,height:24,format:"svg"},i=[{name:"Roadmap",href:"https://hootz.featurebase.app/roadmap",target:"blank"},{name:"Blog",href:"/blog"},{name:"Pricing",href:"/pricing"}],j=()=>{const[c,n]=t.useState(!1),[r,x]=t.useState(!1);return t.useEffect(()=>{const s=new IntersectionObserver(([m])=>{x(!m.isIntersecting)},{root:null,threshold:.1}),a=document.getElementById("open-btn");return console.log("kjljk",a),a&&s.observe(a),()=>{a&&s.unobserve(a)}},[]),e.jsx(e.Fragment,{children:e.jsxs("header",{className:"flex-none sticky top-0 xl:mx-auto mx-[16px] md:mx-[40px] max-w-[1270px] mt-[26px] px-[24px] py-[18px] z-[99]",children:[e.jsx("div",{className:"absolute inset-0 rounded-[20px] bg-gradient-to-b from-[#2D3748] to-[rgba(45,55,72,0.4)]"}),e.jsx("div",{className:"absolute inset-[1px] rounded-[19px] bg-black"}),e.jsxs("nav",{"aria-label":"Global",className:"mx-auto max-w-[1270px] flex relative z-[1] items-center justify-between",children:[e.jsx("div",{className:"flex flex-row lg:flex-1",children:e.jsx("a",{href:"/",className:"flex gap-[5px] items-center",children:e.jsx("img",{src:o.src,alt:"Mezuto Logo",className:"md:max-w-[75%] lg:max-w-full max-w-[65%] h-full"})})}),e.jsxs("div",{className:"flex gap-[20px]",children:[r&&e.jsx("div",{className:" bottom-6 right-6 z-[100] lg:hidden block",children:e.jsx(l,{downloadBtnTxt:"Try for free"})}),e.jsx("div",{className:"flex lg:hidden",children:e.jsxs("button",{type:"button",onClick:()=>n(!0),className:"-m-2.5 inline-flex items-center justify-center rounded-md text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx("img",{src:d.src,alt:"Mobile Menu Icon"})]})})]}),e.jsx("div",{className:"hidden lg:flex lg:gap-x-[22px]",children:i.map(s=>e.jsx("a",{href:s.href,target:s.target,className:"text-[14px] font-inter tracking-[0.28px] text-[#A0AEC0] font-sf hover:text-[#E2E8F0] transition-colors duration-300",children:s.name},s.name))}),e.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:e.jsx("div",{className:"flex justify-center items-center lg:block",children:e.jsx(l,{})})})]}),c&&e.jsxs("div",{className:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10",children:[e.jsxs("div",{className:"flex items-center justify-between p-[16px]",children:[e.jsx("div",{className:"flex flex-row lg:flex-1",children:e.jsx("a",{href:"Header",className:"flex gap-[5px] items-center -m-1.5 p-1.5",children:e.jsx("img",{src:o.src,alt:"Mezuto Logo",className:"max-w-[65%]"})})}),e.jsxs("div",{className:"flex gap-[8px]",children:[r&&e.jsx("div",{className:" bottom-6 right-6 z-[100]",children:e.jsx(l,{downloadBtnTxt:"Try for free"})}),e.jsxs("button",{type:"button",onClick:()=>n(!1),className:"-m-2.5 rounded-md p-2.5 text-gray-400",children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx("img",{src:f.src,alt:"Close Menu Icon"})]})]})]}),e.jsx("div",{className:"mt-6 flow-root",children:e.jsx("div",{className:"-my-6 divide-y divide-gray-500/25",children:e.jsx("div",{className:"space-y-2 py-[56px]",children:i.map(s=>e.jsx("a",{href:s.href,target:s.target,className:"-mx-3 block rounded-lg px-[24px] py-[24px] text-base font-sf leading-7 text-[#A0AEC0] hover:bg-gray-800",children:s.name},s.name))})})})]})]})})};export{j as default};
