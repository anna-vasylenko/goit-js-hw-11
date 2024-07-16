import{i as d,S as p}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const s={formSearchEl:document.querySelector(".form-search"),galleryListEl:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};s.loader.classList.add("loader-hidden");s.formSearchEl.addEventListener("submit",l=>{l.preventDefault(),s.galleryListEl.innerHTML="",s.loader.classList.remove("loader-hidden");let o=s.formSearchEl.elements.search.value.trim();f(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#fafafb"});return}h(t.hits)}).catch(t=>console.log(t)).finally(()=>{s.loader.classList.add("loader-hidden")}),s.formSearchEl.elements.search.value=""});function f(l){const o="https://pixabay.com/api/",t=new URLSearchParams({key:"44962724-2fcdbdaf7fb299db2b6841432",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${o}?${t}`)}function h(l){const o=l.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:a,comments:c,downloads:n})=>`
           <li class="gallery-item">
          <a href="${i}">
          <div class="image-container">
            <img src="${t}" alt="${e}" width="360" height="200"> </div>
            <ul class="photo-dsc">
               <li > 
                <p class="photo-dsc-title">Likes</p>
                <p class="photo-dsc-text">${r}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Views</p>
                <p class="photo-dsc-text">${a}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Comments</p>
                <p class="photo-dsc-text">${c}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Downloads</p>
                <p class="photo-dsc-text">${n}</p>
              </li>
            </ul>
          </a>
        </li>
      `).join("");s.galleryListEl.innerHTML=o,u.refresh()}const u=new p(".gallery-list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
