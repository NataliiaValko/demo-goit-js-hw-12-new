import{a as L,S as w,i as n}from"./assets/vendor-CI_1IWob.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const b="https://pixabay.com/api/",S="31000801-179358ed9db1a9fc0904af43d";async function f({query:e,page:t}){const s=new URLSearchParams({key:S,image_type:"photo",orientation:"horizontal",safesearch:!0,q:e,page:t,per_page:15}),{data:i}=await L(`${b}?${s}`);return i}const u=document.querySelector(".gallery");let p=document.querySelector(".preloader");const q=document.querySelector(".load-more");document.querySelector(".end-text");const m=new w(".gallery a",{captionsData:"alt",captionDelay:250});function h(e=[]){return e.map(({webformatURL:t,largeImageURL:s,tags:i,likes:r,views:o,comments:c,downloads:v})=>`
        <li class="gallery-item">
          <a href="${s}" class="gallery-link">
            <div class="card-wrapper-img">
              <img
                class="card-img"
                src="${t}"
                alt="${i}"
              />
            </div>
            <div class="card-info">
              <div class="card-info-colum">
                <p class="card-info-title">likes</p>
                <p class="card-info-value">${r}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">views</p>
                <p class="card-info-value">${o}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">comments</p>
                <p class="card-info-value">${c}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">downloads</p>
                <p class="card-info-value">${v}</p>
              </div>
            </div>
          </a>
        </li>`).join("")}function $(e){u.innerHTML=h(e),m.refresh()}function E(e){u.insertAdjacentHTML("beforeend",h(e)),m.refresh()}function M(){u.innerHTML=""}function g(){p.classList.add("show")}function y(){p.classList.remove("show")}function l({totalHits:e=[],page:t=1}){q.classList.toggle("hidden",e<=t*15)}function R(){window.scrollBy({top:u.firstElementChild.getBoundingClientRect().height*2,behavior:"smooth"})}const B=document.querySelector(".search-form"),P=document.querySelector(".load-more");let d="",a=1;async function O(e){if(e.preventDefault(),d=e.target.elements.message.value.trim(),e.target.reset(),d!==""){g(),l({}),M(),a=1;try{const{hits:t,totalHits:s}=await f({query:d,page:a});if(t.length===0){n.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}$(t),l({totalHits:s,page:a}),s<=a*15&&n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{n.error({position:"topRight",message:"Error!!!"})}finally{y()}}}async function x(){a+=1,g(),l({});try{const{hits:e,totalHits:t}=await f({query:d,page:a});if(e.length===0){n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),l({totalHits:t,page:a});return}E(e),R(),l({totalHits:t,page:a}),t<=a*15&&n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(e){n.error({position:"topRight",message:e.message})}finally{y()}}B.addEventListener("submit",O);P.addEventListener("click",x);
//# sourceMappingURL=index.js.map
