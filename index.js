import{a as u,S as f,i as c}from"./assets/vendor-CI_1IWob.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="31000801-179358ed9db1a9fc0904af43d";function g(o){const a=new URLSearchParams({key:p,image_type:"photo",orientation:"horizontal",safesearch:!0,q:o});return u(`${m}?${a}`).then(({data:r})=>(console.log(r),r)).catch(r=>{throw console.log(r.message),r})}const n=document.querySelector(".gallery");let l=document.querySelector(".preloader");const h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(o=[]){return o.map(({webformatURL:a,largeImageURL:r,tags:i,likes:e,views:t,comments:s,downloads:d})=>`
        <li class="gallery-item">
          <a href="${r}" class="gallery-link">
            <div class="card-wrapper-img">
              <img
                class="card-img"
                src="${a}"
                alt="${i}"
              />
            </div>
            <div class="card-info">
              <div class="card-info-colum">
                <p class="card-info-title">likes</p>
                <p class="card-info-value">${e}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">views</p>
                <p class="card-info-value">${t}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">comments</p>
                <p class="card-info-value">${s}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">downloads</p>
                <p class="card-info-value">${d}</p>
              </div>
            </div>
          </a>
        </li>`).join("")}function v(o){n.innerHTML=y(o),h.refresh()}function L(){n.innerHTML=""}function w(){l.classList.add("show")}function b(){l.classList.remove("show")}const S=document.querySelector(".search-form");function $(o){o.preventDefault();const a=Object.fromEntries(new FormData(o.target));a.message!==""&&(w(),L(),g(a.message).then(({hits:r})=>{if(r.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}v(r)}).catch(r=>{c.error({message:"Error!!!"})}).finally(()=>{b()}))}S.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
