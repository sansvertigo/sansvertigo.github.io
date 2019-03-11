function gh_banner() {
 bannerHTML = `
 <a href='https://github.com/sansvertigo/theoretical-processor' target='_blank'>
   <span id='gh-banner'>
     <span id='gh-button'>
       <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
         <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
         </path>
       </svg>
     </span>
     <span id='gh-text'>
     View this project on GitHub
     </span>
   </span>
 </a>
 <style>
    #gh-banner {
      position: absolute;
      width: 285px;
      height: 60px;
      border-radius: 0px 0px 25px;
      margin-left: -8px;
      margin-top: -8px;
      background-image: linear-gradient(to top, #4b267a, #612f88, #783896, #8e41a4, #a64bb1);
    }
    #gh-button {
      float: left;
      width: 32px;
      height: 32px;
      margin-top: 12px;
      margin-left: 16px;
    }
    #gh-button svg path{
      fill: white;
    }
    #gh-text{
      float: left;
      margin-top: 20px;
      margin-left: 20px;
      font-size: 16px;
    }
    #gh-text {
      text-align: left:
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
      text-decoration: none;
      color:white;
    }

  </style>
 `

  bodyHTML = document.body.innerHTML
  document.body.innerHTML = bannerHTML + bodyHTML;
}
