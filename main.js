const blackBox = document.createElement("div")
blackBox.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background-color: #000; z-index: 1000"

const randomID = `black-box-random-id-${Math.floor(Math.random() * 10000)}`
blackBox.setAttribute("id", randomID)

setInterval(() => {
  const adSkipButton = document.querySelector(".ytp-ad-skip-button-container")
  if(adSkipButton != null) {
    adSkipButton.click()
  }

  const adPreview = document.querySelector(".ytp-ad-preview-container")
  if(adPreview != null) {
    document.body.appendChild(blackBox)    
  } else {
    blackBox.remove()
  }
}, 1000)
