import"./hoisted.Dg--clxO.js";import"./hoisted.2daoxv0f.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".faq-item");n.forEach(s=>{const o=s.querySelector(".question"),t=s.querySelector(".answer-wrapper"),r=s.querySelector(".answer"),c=o.querySelector(".icon"),i=o.querySelector(".hidden-icon");o&&t&&r&&c&&i&&o.addEventListener("click",()=>{if(n.forEach(e=>{if(e!==s){const l=e.querySelector(".answer-wrapper"),h=e.querySelector(".answer"),a=e.querySelector(".icon"),d=e.querySelector(".hidden-icon");l&&h&&a&&d&&(l.style.height="0px",a.classList.remove("hidden"),d.classList.add("hidden"))}}),t.style.height==="0px"){const e=r.offsetHeight;t.style.height=`${e}px`}else t.style.height="0px";c.classList.toggle("hidden"),i.classList.toggle("hidden")})})});
