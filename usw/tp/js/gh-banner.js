function gh_banner() {
 bannerHTML = `
 <div id='gh-banner'>
    <img id='gh-button' src='https://jsnow.co.uk/img/gh-btn.png'>
    <div id='gh-text'>
      <a href='https://github.com/sansvertigo/theoretical-processor' target=blank'>View this project on GitHub</a>
    </div>
 </div>
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
      margin-top: 13px;
      margin-left: 16px;
    }

    #gh-text{
      float: left;
      margin-top: 20px;
      margin-left: 20px;
      font-size: 16px;
    }

    #gh-text a {
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
