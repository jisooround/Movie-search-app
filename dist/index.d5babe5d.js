async function e(e=""){return new Promise(((t,n)=>{fetch(`https://omdbapi.com/?apikey=7035c60c&i=${e}&plot=sho`).then((e=>e.json())).then((e=>t(e))).then((e=>{"False"===e.Response&&n(e.Error),t(e)})).catch((e=>{n(e)}))}))}function t(e){const t=document.getElementById("detail-bg"),n=document.getElementById("img-wrap");document.getElementById("detail-title").innerText=`${e.Title}`,document.getElementById("detail-released").innerText=`${e.Released}`,document.getElementById("detail-plot").innerText=`${e.Plot}`,document.getElementById("actors").innerText=`${e.Actors}`,document.getElementById("director").innerText=`${e.Director}`,document.getElementById("genre").innerText=`${e.Genre}`,n.style.backgroundImage=`url(${e.Poster})`,t.style.backgroundImage=`url(${e.Poster})`,"N/A"==`${e.Poster}`&&(n.style.backgroundImage="url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)");const o=document.getElementById("ratings-info");o.innerHTML="";for(let t=0;t<e.Ratings.length;t++){const n=document.createElement("div");n.className="rating";const c=document.createElement("img");c.className="logo";const s=document.createElement("p");s.className="result",c.src=`/${e.Ratings[t].Source}.png`,s.textContent=`${e.Ratings[t].Value}`,n.append(c,s),o.append(n)}if(0===e.Ratings.length){const e=document.createElement("div");e.className="rating";document.createElement("img").className="logo";const t=document.createElement("p");t.className="result",t.innerHTML="No rating results provided.",e.append(t),o.append(e)}window.scroll({top:document.body.scrollHeight,left:0,behavior:"smooth"})}async function n(n){const o=n.imdbID;try{t(await e(o))}catch(e){console.log(e)}}function o(e){for(let t of e){const e=document.createElement("div");e.className="group";const o=document.createElement("div");o.className="group__imgdiv";const c=document.createElement("div");c.className="group__infodiv";const s=document.createElement("h4");s.className="group__infodiv__title";const a=document.createElement("p");a.className="group__infodiv__year";const l=document.createElement("div");l.className="group__infodiv__detail",l.innerText="+",o.style.backgroundImage=`url(${t.Poster})`,s.innerText=`${t.Title}`,a.innerText=`${t.Year}`,"N/A"==`${t.Poster}`&&(o.style.backgroundImage="url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png)"),l.addEventListener("click",(()=>{n(t),document.querySelector("#detail-container").classList.add("display"),document.querySelector(".message").classList.add("none")})),c.appendChild(s),c.appendChild(a),c.appendChild(l),e.appendChild(o),e.appendChild(c),movieFeed.appendChild(e)}}async function c(e="",t=1,n="",o=""){return new Promise(((c,s)=>{fetch(`https://omdbapi.com/?apikey=7035c60c&s=${e}&page=${t}&type=${n}&y=${o}`).then((e=>e.json())).then((e=>c(e))).then((e=>{"False"===e.Response&&s(e.Error),c(e)})).catch((e=>{s(e)}))}))}const s=document.getElementById("year-select"),a=document.getElementById("search-input"),l=document.getElementById("search-btn"),d=document.getElementById("more-btn"),i=document.getElementById("movieFeed"),r=document.querySelectorAll("span"),m=document.getElementsByClassName("section"),u=m[0].offsetTop,g=m[1].offsetTop,p=document.getElementById("error"),h=document.getElementById("search-message"),y=document.getElementById("total-message-text");let v=1;async function E(){i.innerHTML="",h.classList.add("none");const e=s.options[s.selectedIndex].value,t=document.getElementById("type-select"),n=t.options[t.selectedIndex].value,l=document.getElementById("count-select");v=l.options[l.selectedIndex].value;const r=a.value;y.classList.add("none");for(let t=1;t<=v;t++)try{const{Search:s,totalResults:a}=await c(r,t,n,e),l=Math.ceil(Number(a)/10);if(o(s),f(a),p.classList.remove("display"),l<v){y.classList.remove("none"),y.textContent=`💬 The search results are  ${a}.`;break}}catch(e){d.classList.remove("active"),p.classList.add("display")}return v}function f(e){const t=Math.ceil(Number(e)/10);v<t?d.classList.add("active"):d.classList.remove("active")}!function(){for(let e=(new Date).getFullYear();e>=1980;e--){const t=document.createElement("option");t.classList.add("year-option"),t.innerText=e,t.value=`${e}`,s.appendChild(t)}}(),r[0].onclick=function(){window.scroll({top:u,behavior:"smooth"})},r[1].onclick=function(){window.scroll({top:u,behavior:"smooth"})},r[2].onclick=function(){window.scroll({top:g,behavior:"smooth"})},r[3].onclick=function(){window.scroll({top:document.body.scrollHeight,left:0,behavior:"smooth"})},r[4].onclick=function(){window.scroll({top:g,behavior:"smooth"})},l.addEventListener("click",E),a.addEventListener("keyup",(function(e){13===e.keyCode&&E()})),d.addEventListener("click",(async()=>{v++;const e=a.value;try{const{Search:t,totalResults:n}=await c(e,v);o(t),f(n)}catch(e){console.log(e)}}));
//# sourceMappingURL=index.d5babe5d.js.map
