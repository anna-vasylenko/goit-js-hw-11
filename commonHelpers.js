import{i as c,S as n}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function d(a){return a.map(e=>`
           <li class="gallery-item">
          <a href="${e.largeImageURL}">
          <div class="image-container">
            <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200"> </div>
            <ul class="photo-dsc">
               <li > 
                <p class="photo-dsc-title">Likes</p>
                <p class="photo-dsc-text">${e.likes}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Views</p>
                <p class="photo-dsc-text">${e.views}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Comments</p>
                <p class="photo-dsc-text">${e.comments}</p>
              </li>
               <li > 
                <p class="photo-dsc-title">Downloads</p>
                <p class="photo-dsc-text">${e.downloads}</p>
              </li>
            </ul>
          </a>
        </li>
      `).join("")}function f(a){const e="https://pixabay.com/api/",o=new URLSearchParams({key:"44962724-2fcdbdaf7fb299db2b6841432",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${e}?${o}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}const s={formSearchEl:document.querySelector(".form-search"),galleryListEl:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};s.loader.classList.add("loader-hidden");s.formSearchEl.addEventListener("submit",a=>{a.preventDefault();let e=s.formSearchEl.elements.search.value.trim();e&&(s.galleryListEl.innerHTML="",s.loader.classList.remove("loader-hidden"),f(e).then(o=>{if(o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#fafafb"});return}s.galleryListEl.innerHTML=d(o.hits),p.refresh()}).catch(o=>{c.error({message:`Error: ${o.message}`,backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",progressBarColor:"#fafafb"})}).finally(()=>{s.loader.classList.add("loader-hidden")}),s.formSearchEl.elements.search.value="")});const p=new n(".gallery-list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
