$("html").niceScroll();

if ($(window).width() > 1023) {

    tiles = $("h2, h3, .help_cards-item, .donation_content").fadeTo(0, 0);

    $(window).scroll(function (d, h) {
        tiles.each(function (i) {
            a = $(this).offset().top + $(this).height();
            b = $(window).scrollTop() + $(window).height();
            if (a < b) $(this).fadeTo(1000, 1);
        });
    });

}
window.onload = function () {
    const prev = document.getElementById('btn-prev'),
        next = document.getElementById('btn-next'),
        slides = document.querySelectorAll('.slide');

    let index = 0;

    const activeSlide = n => {
        for (let slide of slides) {
            slide.classList.remove('active');
        }
        slides[n].classList.add('active');

    }
    const nextSlide = () => {
        if (index == slides.length - 1) {
            index = 0;
            activeSlide(index);
        } else {
            index++;
            activeSlide(index);
        }
    }
    const prevSlide = () => {
        if (index == 0) {
            index = slides.length - 1;
            activeSlide(index);
        } else {
            index--;
            activeSlide(index);
        }
    }

    
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
    

    document.getElementById('openBtn').onclick = function() {
        document.getElementById("mySidenav").style.height = "100%";
    };
    document.getElementById('closeBtn').onclick = function() {
        document.getElementById("mySidenav").style.height = "0";
    };
}