function tiles() {
  const openWin = document.getElementById("open-win"),
    winOver = document.getElementById("window-overlay");

  let tileContainer = document.getElementById("tile-container"),
    closeWin = document.getElementById("close-window"),
    realFile = document.getElementById("real-file"),
    addTile = document.getElementById("add-tile"),
    selectText = document.getElementById("upload-text"),
    resetForm = document.getElementById("reset-window"),
    newBtn = document.getElementById("custom-btn"),
    imgPrv = document.getElementById("prev-img"),
    imgShow = document.createElement("img"),
    tileBox = [],
    tileImg;
    
    let reader;

  openWin.addEventListener("click", function () {
    winOver.classList.add("show");
  });

  closeWin.addEventListener("click", function () {
    winOver.classList.remove("show");
    resetForm.click();
    imgShow.remove("img");
    selectText.innerHTML = "No Image file Selected";
  });

  //Add tile button
  addTile.addEventListener("click", function () {
    tileBox = tileCreate();
    resetForm.click();
    imgShow.remove("img");
  });

  function tileCreate() {
    let link = document.createElement("a"),
      image = document.createElement("img"),
      hoverOverlay = document.createElement("div"),
      fileType = document.getElementById("file-type").value,
      urlText = document.getElementById("page-link").value,
      tile = document.createElement("div"),
      tileName = document.createElement("h4"),
      tileTitle = document.getElementById("tile-name").value,
      tileBox = [];

    //tile
    tileContainer.appendChild(tile);
    tile.setAttribute("class", "p-2 bd-highlight tile");
    tile.setAttribute('data-target', fileType + "-" + "tile");
    tile.setAttribute('aria-label', fileType + "-" + "tile");
    
    for (let i = 0; i < fileType.length; i++) {
      if (fileType === "website") {
        tile.setAttribute("id", "website");
      } else if (fileType === "UI") {
        tile.setAttribute("id", "UI");
      } else if (fileType === "logo") {
        tile.setAttribute("id", "logo");
      } else if (fileType === "brand") {
        tile.setAttribute("id", "brand");
      }
      break;
    }

    tileBox = tile;    

    tile.append(image);
    image.setAttribute("alt", fileType + '-' + "image");    
    image.setAttribute("src", tileImg);

    tile.append(hoverOverlay);
    hoverOverlay.setAttribute("class", "hover-overlay");

    hoverOverlay.append(link);
    link.setAttribute("href", "#");
    link.setAttribute('role', 'button');
    link.setAttribute('name', fileType + "-" + 'button');
    link.setAttribute('target', '_parent');
    link.innerHTML = '<i class="fas fa-search-plus"></i>';
    link.href = urlText;

    link.append(tileName);
    tileName.innerHTML = tileTitle;

    winOver.classList.remove("show");
    selectText.innerHTML = "No Image file Selected";
    imgShow.setAttribute("src", "");

    return tileBox;
  }

  newBtn.addEventListener("click", function () {
    realFile.click();
  });

  realFile.addEventListener("change", function () {
    changeImage(this);

    if (realFile.value) {
      selectText.innerHTML = realFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

      //back end node.js
      imgShow.src = tileImg + realFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
      selectText.innerHTML = "No Image file Selected";
    }
  });

  function changeImage(input) {  
    if (input.files && input.files[0]) {
      reader = new FileReader();
  
      reader.onload = function(e) {     

        imgPrv.append(imgShow);
        imgShow.setAttribute("class", "img-show");
        imgShow.setAttribute("id", "img-show");
        imgShow.setAttribute("alt", "Previous Image");
        imgShow.setAttribute("src", e.target.result);
        tileImg = imgShow.src;
      }
  
      reader.readAsDataURL(input.files[0]);
    }
  }
}

const profileTiles = new tiles();
