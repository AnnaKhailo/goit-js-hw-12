import{a as v,S as q,i as s}from"./assets/vendor-95dc692e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function m(o,e){const n="https://pixabay.com/api/",t={key:"43143035-9a4852fc5446c1c5b1cb84510",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return(await v.get(n,{params:t})).data}const g=o=>o.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <ul class="gallery-image-info">
        <li>
          <h3>Likes</h3>
          <p>${e.likes}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p>${e.views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p>${e.comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p>${e.downloads}</p>
        </li>
      </ul>
    </a>
    </li>`).join(""),h=document.querySelector(".search-form"),c=document.querySelector(".gallery"),y=document.querySelector(".loader"),f=document.querySelector(".load-more-btn"),u=new q(".gallery a",{captionsData:"alt",captionDelay:250});let l,i=1,L=0;const P=15;h.addEventListener("submit",R);async function R(o){if(o.preventDefault(),l=h.elements.query.value.trim(),!l)return s.error({title:"Error",message:"Please fill in the search field!",position:"topRight"});p(),c.innerHTML="",i=1;try{w();const e=await m(l,i);L=Math.ceil(e.totalHits/P);const a=g(e.hits);c.insertAdjacentHTML("beforeend",a),u.on("show.simplelightbox",function(){}),u.refresh(),e.hits.length===0&&s.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch{s.error({title:"Error",message:"Sorry, there was an error processing your request. Please try again later!",position:"topRight"})}S(),b(),h.reset()}f.addEventListener("click",M);async function M(){i+=1,p(),w();try{const o=await m(l,i),e=g(o.hits);c.insertAdjacentHTML("beforeend",e),u.on("show.simplelightbox",function(){}),u.refresh()}catch{s.error({title:"Error",message:"Sorry, there was an error processing your request. Please try again later!",position:"topRight"})}$(),S(),b()}function b(){i>=L?(p(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):E()}function w(){y.classList.remove("hidden")}function S(){y.classList.add("hidden")}function E(){f.classList.remove("hidden")}function p(){f.classList.add("hidden")}function $(){const o=c.firstChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
