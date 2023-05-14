$(document).ready(function () {
    AOS.init({
        duration: 600,
    });

    // --------------- Navbar script start ------------

    let navtop = document.querySelector(".navbar")
    window.addEventListener("scroll", function () {
        navscroll = window.scrollY;
        if (navscroll > 50) {
            navtop.classList.add("sticky");
        } else {
            navtop.classList.remove("sticky");
        }
    })

    // --------------- Navbar script end ------------

    // --------------- Venu Box start -------------
    new VenoBox({
        selector: ".popup",
        spinner: "fold",
        maxWidth: "60%",
        spinColor: "#ff0022",
        navSpeed: "500",
    });
    // --------------- Venu Box end -------------

    // ---------------- slick slider start -----------

    $('.slick_silder_2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slick_silder',
        prevArrow: '<span class="left_arrow"><i class="fa-solid fa-angle-left"></i></span>',
        nextArrow: '<span class="right_arrow"><i class="fa-solid fa-angle-right"></i></span>',
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                nextArrow: false,
                prevArrow: false,
                autoplay: true,
                fade: false,
            }
        }],
    });

    $('.slick_silder').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slick_silder_2',
        dots: false,
        arrows: false,
        focusOnSelect: true,
    });

    // ----------------------- sponser slider --------------

    $('.sponser_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
        }],
    });

    // ---------------- slick slider end -----------

    // ----------------- navbar active start -----------

    let hero_content = document.querySelector("#hero_content");
    let about_contnet = document.querySelector("#about_contnet");
    let service_content = document.querySelector("#service_content");
    let portfolio_content = document.querySelector("#portfolio_content");
    let price_content = document.querySelector("#price_content");
    let testimonial_content = document.querySelector("#testimonial_content");
    let bolg_content = document.querySelector("#bolg_content");
    let footer = document.querySelector("#footer");
    // --------------------------------------------------------------
    let home = document.querySelector(".hm_ac");
    let about = document.querySelector(".ab_ac");
    let services = document.querySelector(".sr_ac");
    let portfolio = document.querySelector(".pt_ac");
    let price = document.querySelector(".pr_ac");
    let testimonial = document.querySelector(".ts_ac");
    let blog = document.querySelector(".bl_ac");
    let contact = document.querySelector(".con_ac");
    let active_remove = document.querySelector(".ac_re");
    let collapse = document.querySelector(".navbar-collapse");

    collapse.addEventListener("mousewheel", function (event) {
        event.preventDefault();
    })

    home.addEventListener("click",function(){
        collapse.classList.remove("show");
        bars.classList.remove("hvr-ac");
    })
    about.addEventListener("click",function(){
        collapse.classList.remove("show");
        bars.classList.remove("hvr-ac");
    })
    services.addEventListener("click",function(){
        collapse.classList.remove("show");
        bars.classList.remove("hvr-ac");
    })
    portfolio.addEventListener("click",function(){
        collapse.classList.remove("show");
        bars.classList.remove("hvr-ac");
    })
    testimonial.addEventListener("click",function(){
        collapse.classList.remove("show");
        bars.classList.remove("hvr-ac");
    })
    blog.addEventListener("click",function(){
        collapse.classList.remove("show");
        bars.classList.remove("hvr-ac");
    })
    contact.addEventListener("click",function(){
        collapse.classList.remove("show");
        bars.classList.remove("hvr-ac");
    })
    about.addEventListener("click",function(){
        collapse.classList.remove("show");
        bars.classList.remove("hvr-ac");
    })

    about.addEventListener("mouseenter", function () {
        active_remove.classList.remove("active");
    })
    services.addEventListener("mouseenter", function () {
        active_remove.classList.remove("active");
    })
    portfolio.addEventListener("mouseenter", function () {
        active_remove.classList.remove("active");
    })
    price.addEventListener("mouseenter", function () {
        active_remove.classList.remove("active");
    })
    testimonial.addEventListener("mouseenter", function () {
        active_remove.classList.remove("active");
    })
    blog.addEventListener("mouseenter", function () {
        active_remove.classList.remove("active");
    })
    contact.addEventListener("mouseenter", function () {
        active_remove.classList.remove("active");
    })

    hero_content.addEventListener("mouseenter", function () {
        home.classList.add("active");
    })
    about_contnet.addEventListener("mouseenter", function () {
        about.classList.add("active");
        home.classList.remove("active");
    })
    about_contnet.addEventListener("mouseleave", function () {
        about.classList.remove("active");
    })
    service_content.addEventListener("mouseenter", function () {
        services.classList.add("active");
        home.classList.remove("active");
    })
    service_content.addEventListener("mouseleave", function () {
        services.classList.remove("active");
    })
    portfolio_content.addEventListener("mouseenter", function () {
        portfolio.classList.add("active");
        home.classList.remove("active");
    })
    portfolio_content.addEventListener("mouseleave", function () {
        portfolio.classList.remove("active");
    })
    price_content.addEventListener("mouseenter", function () {
        price.classList.add("active");
        home.classList.remove("active");
    })
    price_content.addEventListener("mouseleave", function () {
        price.classList.remove("active");
    })
    testimonial_content.addEventListener("mouseenter", function () {
        testimonial.classList.add("active");
        home.classList.remove("active");
    })
    testimonial_content.addEventListener("mouseleave", function () {
        testimonial.classList.remove("active");
    })
    bolg_content.addEventListener("mouseenter", function () {
        blog.classList.add("active");
        home.classList.remove("active");
    })
    bolg_content.addEventListener("mouseleave", function () {
        blog.classList.remove("active");
    })
    footer.addEventListener("mouseenter", function () {
        contact.classList.add("active");
        home.classList.remove("active");
    })
    footer.addEventListener("mouseleave", function () {
        contact.classList.remove("active");
    })

    // ----------------- navbar active end -----------

    // ---------------- footer media start --------------
    let m_fb = document.querySelector(".m_fb");
    let m_tw = document.querySelector(".m_tw");
    let m_go = document.querySelector(".m_go");
    let m_in = document.querySelector(".m_in");
    let m_li = document.querySelector(".m_li");
    let m_gi = document.querySelector(".m_gi");

    let pop_fb = document.querySelector(".pop_fb");
    let pop_tw = document.querySelector(".pop_tw");
    let pop_go = document.querySelector(".pop_go");
    let pop_in = document.querySelector(".pop_in");
    let pop_li = document.querySelector(".pop_li");
    let pop_gi = document.querySelector(".pop_gi");

    m_fb.addEventListener("mouseenter", function () {
        pop_fb.classList.add("show");
    })
    m_fb.addEventListener("mouseleave", function () {
        pop_fb.classList.remove("show");
    })
    m_tw.addEventListener("mouseenter", function () {
        pop_tw.classList.add("show");
    })
    m_tw.addEventListener("mouseleave", function () {
        pop_tw.classList.remove("show");
    })
    m_go.addEventListener("mouseenter", function () {
        pop_go.classList.add("show");
    })
    m_go.addEventListener("mouseleave", function () {
        pop_go.classList.remove("show");
    })
    m_in.addEventListener("mouseenter", function () {
        pop_in.classList.add("show");
    })
    m_in.addEventListener("mouseleave", function () {
        pop_in.classList.remove("show");
    })
    m_li.addEventListener("mouseenter", function () {
        pop_li.classList.add("show");
    })
    m_li.addEventListener("mouseleave", function () {
        pop_li.classList.remove("show");
    })
    m_gi.addEventListener("mouseenter", function () {
        pop_gi.classList.add("show");
    })
    m_gi.addEventListener("mouseleave", function () {
        pop_gi.classList.remove("show");
    })

    // ---------------- footer media end --------------

    // ------------ progress value start------------
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#ff0022 ${scrollValue}%, #ffffff ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
    // ------------ progress value end------------

    // ----------- preloader start --------------

    var preloader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        setTimeout(() => {
            preloader.style.display = "none";
        }, 2000);
    });

    preloader.addEventListener("mousewheel", function (event) {
        event.preventDefault();
    })
    // ----------- preloader end --------------

    // -------------- Counter up ----------------
    $('.counter').counterUp({
        delay: 10,
        time: 5000,
    });
    // -------------- Counter up ----------------

    // ---------- Hover active --------------
    let bars = document.querySelector(".navbar-toggler-icon");
    bars.addEventListener("click", function () {
        bars.classList.toggle("hvr-ac");
    })

    // ---------- Hover active --------------
});