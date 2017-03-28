document.addEventListener('DOMContentLoaded', function () {

    var slide_1 = document.querySelector(".first");
    var slide_2 = document.querySelector(".second");
    var title_1 = document.querySelector(".title-first");
    var title_2 = document.querySelector(".title-second");

    console.log(slide_1);
    console.log(slide_2);

    slide_1.addEventListener('mouseover', function () {
        this.classList.toggle('rolled');
        this.classList.toggle('onTop');

    });

    slide_1.addEventListener('mouseleave', function () {
        this.classList.remove('rolled');
        this.classList.remove('onTop');
    });

    slide_2.addEventListener('mouseleave', function () {
        this.classList.remove('rolled');
        this.classList.remove('onTop');
    });

    slide_2.addEventListener('mouseover', function () {
        this.classList.toggle('rolled');
        this.classList.toggle('onTop');

    });

    /* NEED SOME FIXES // COLLAPSING ON TITLE HOVER */

});