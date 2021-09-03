// find elements
var showPrefBtn = document.getElementById("show-pref-btn");
var showNextBtn = document.getElementById("show-next-btn");
var sligeImg = document.getElementById("slide-img");

// subscribe to events
showPrefBtn.addEventListener("click", onShowPrefBtn);
showNextBtn.addEventListener("click", onShowNextBtn);


// create img array
var imagesUrls = [];
// imagesUrls.push("https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg");
imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDPm6Y-X6ad9_xR1KaKijdtkbH04RrWPJ2RUBGzAh6PxZCSjrmzpfbUftfVdqd4zb0No&usqp=CAU\n");
imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPFV1qfFeXHGwkc0uAmW1mGLPevoR-n6YC9fj0GZ9BAwPeKwJrLg268krb4CaN9T1vog&usqp=CAU");
imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTISyUWkm-4HpvKj97rk7oqjteSlF_3TCrw&usqp=CAU");
imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPFV1qfFeXHGwkc0uAmW1mGLPevoR-n6YC9fj0GZ9BAwPeKwJrLg268krb4CaN9T1vog&usqp=CAU");

var currentImageIndex = 0;

sligeImg.src = imagesUrls[currentImageIndex];
showPrefBtn.disabled = true;


// functions definitions
function onShowPrefBtn() {
    currentImageIndex--;
    sligeImg.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    // disable button
    if (currentImageIndex === 0) {
        showPrefBtn.disabled = true;
    }
}

function onShowNextBtn() {
    currentImageIndex++;
    sligeImg.src = imagesUrls[currentImageIndex];
    showPrefBtn.disabled = false;

    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}





















