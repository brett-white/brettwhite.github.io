window.onload=()=>{const e=78,t="scrollBehavior"in document.documentElement.style;document.querySelectorAll('a[href^="#"]').forEach((o=>{o.addEventListener("click",(n=>{n.preventDefault();const c=document.querySelector(o.getAttribute("href"));if(c){const o=c.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:o,behavior:t?"smooth":"auto"})}}))}))};