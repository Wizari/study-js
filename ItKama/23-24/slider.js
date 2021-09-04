var slider1 = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrefBtn: document.getElementById("show-pref-btn"),
    showNextBtn: document.getElementById("show-next-btn"),
    slideImg: document.getElementById("slide-img"),

    start: function () {
        var that = this;
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
    },

    onShowPrefBtn: function (event) {
        this.currentImageIndex--;
        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        // disable button
        if (this.currentImageIndex === 0) {
            this.showPrefBtn.disabled = true;
        }
    },

    onShowNextBtn: function (event) {
        this.currentImageIndex++;
        var getImageIndex = this.currentImageIndex;
        this.slideImg.src = this.imagesUrls[getImageIndex];
        this.showPrefBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }
};
