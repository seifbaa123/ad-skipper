const blackBox = document.createElement("div")
blackBox.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background-color: #000; z-index: 1000"

const randomID = `black-box-random-id-${Math.floor(Math.random() * 10000)}`
blackBox.setAttribute("id", randomID)

setInterval(() => {
  const adSkipButton = document.querySelector(".ytp-ad-skip-button-container")
  if(adSkipButton != null) {
    adSkipButton.click()
  }

  const muteSound = document.querySelector(".ytp-mute-button")
  const adPreview = document.querySelector(".ytp-ad-preview-container")
  if(adPreview != null) {
    if(muteSound.getAttribute("title") === "Mute (m)") {
      muteSound.click()
    }

    document.body.appendChild(blackBox)    
  } else {
    if(muteSound.getAttribute("title") === "Unmute (m)") {
      muteSound.click()
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

  const searchAd = document.querySelector(".ytd-search-pyv-renderer")
  if(searchAd) {
    searchAd.remove()
  }

  const adOverlayCloseButton = document.querySelector(".ytp-ad-overlay-close-button")
  if(adOverlayCloseButton) {
    adOverlayCloseButton.remove()
  }
}, 1000)
