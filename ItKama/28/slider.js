function Slider() {
    this.imagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrefBtn = null;
    this.showNextBtn = null;
    this.slideImg = null;
    this.start = function (elId) {
        var that = this;

        var el = document.querySelector("#" + elId);

        this.showPrefBtn = el.querySelector(".show-pref-btn");
        this.showNextBtn = el.querySelector(".show-next-btn");
        this.slideImg = el.querySelector(".slide-img");

        this.showPrefBtn.addEventListener("click", function (e) {
            that.onShowPrefBtn(e);
        });
        this.showNextBtn.addEventListener("click", function (e) {
            that.onShowNextBtn(e);
        });

        // this.imagesUrls.push("https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg");
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDPm6Y-X6ad9_xR1KaKijdtkbH04RrWPJ2RUBGzAh6PxZCSjrmzpfbUftfVdqd4zb0No&usqp=CAU\n");
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPFV1qfFeXHGwkc0uAmW1mGLPevoR-n6YC9fj0GZ9BAwPeKwJrLg268krb4CaN9T1vog&usqp=CAU");
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTISyUWkm-4HpvKj97rk7oqjteSlF_3TCrw&usqp=CAU");
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPFV1qfFeXHGwkc0uAmW1mGLPevoR-n6YC9fj0GZ9BAwPeKwJrLg268krb4CaN9T1vog&usqp=CAU");

        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.showPrefBtn.disabled = true;
    };

    this.onShowPrefBtn = function (event) {
        this.currentImageIndex--;
        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        // disable button
        if (this.currentImageIndex === 0) {
            this.showPrefBtn.disabled = true;
        }
    };

    this.onShowNextBtn = function (event) {
        this.currentImageIndex++;
        var getImageIndex = this.currentImageIndex;
        this.slideImg.src = this.imagesUrls[getImageIndex];
        this.showPrefBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }
}

// var sliderFactory27 = {
//     createNewSlider: function () {
//         var newSlider = new Slider();
//         return newSlider;
//     }
// };





