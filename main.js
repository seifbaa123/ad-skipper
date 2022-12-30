// create black box
const blackBox = document.createElement("div")
blackBox.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background-color: #000; z-index: 1000"

const randomID = `black-box-random-id-${Math.floor(Math.random() * 10000)}`
blackBox.setAttribute("id", randomID)

// handle home page ads
function homePage() {
  const homePageAd = document.querySelector(".ytd-ad-slot-renderer")
  if(homePageAd) {
    homePageAd.remove()
  }

  const mastheadAd = document.getElementById("masthead-ad")
  if(mastheadAd) {
	homePageAd.remove()
  }
}

// handle watch page ads
let oldVideoVolume
function watchPage() {
  const adSkipButton = document.querySelector(".ytp-ad-skip-button-container")
  if(adSkipButton != null) {
    adSkipButton.click()
  }

  const video = document.querySelector("video")
  const adPreview = document.querySelector(".ytp-ad-preview-container")
  if(adPreview != null) {
    if(oldVideoVolume === undefined) {
        oldVideoVolume = video.volume
        video.volume = 0
    }
    document.body.appendChild(blackBox)    
  } else {
    if(oldVideoVolume !== undefined) {
        video.volume = oldVideoVolume
        oldVideoVolume = undefined
    }
    blackBox.remove()
  }
   
  const ad = document.getElementById("action-companion-click-target")
  if(ad) {
    ad.remove()
  }

  const otherAd = document.querySelector(".ytd-promoted-sparkles-web-renderer")
  if(otherAd) {
      otherAd.remove()
  }

  const adOverlayCloseButton = document.querySelector(".ytp-ad-overlay-close-button")
  if(adOverlayCloseButton) {
    adOverlayCloseButton.click()
  }
}

// handle search page ads
function searchPage() {
  const searchAd = document.querySelector(".ytd-search-pyv-renderer")
  if(searchAd) {
    searchAd.remove()
  }
}

// set the interval
setInterval(async () => {
  if(location.pathname === "/") {
    homePage()
  }

  else if(location.pathname.startsWith("/results")) {
    searchPage()
  }
  
  else if(location.pathname.startsWith("/watch")) {
    watchPage()
  }
}, 1000)
