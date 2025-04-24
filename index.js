AOS.init();
gsap.registerPlugin(ScrollTrigger)

setTimeout(() => {
    document.querySelector('.banner1').classList.add('show');
    document.querySelector('.banner2').classList.add('show');
    document.querySelector('.banner3').classList.add('show');
}, 200);

setTimeout(() => {
    gsap.to('.banner1.show', {
        yPercent: -200,
        scrollTrigger: {
            trigger: '.banner',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            scrub: 0.5,
        }
    });

    gsap.to('.banner2.show', {
        yPercent: -200,
        scrollTrigger: {
            trigger: '.banner',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            scrub: 0.5,
        }
    });

    gsap.to('.banner3.show', {
        yPercent: -200,
        scrollTrigger: {
            trigger: '.banner',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            scrub: 0.5,
        }
    });
}, 300)

addEventListener("DOMContentLoaded", (event) => {
    if (window.screen.width > 768 || window.screen.innerWidth > 768) {
        const mediaList = document.querySelector(".leveraging-section-wrapper-a .block-right ul");
        const mediaItems = gsap.utils.toArray(".leveraging-section-wrapper-a .block-right.mobile-hide ul li");


        const itemHeight = document.querySelector(".leveraging-section-wrapper.leveraging-section-wrapper-a").offsetHeight;
        const textHeight = document.querySelector(".per-image-special-text").offsetHeight;
        let condition = (itemHeight - textHeight) - 196;

        console.log(itemHeight)

        gsap.to(mediaList, {
            x: () => `-$${condition}`,
            ease: "none",
            scrollTrigger: {
                trigger: ".leveraging-section-wrapper-a",
                start: "top 20%",
                end: () => `${condition} 20%`,
                scrub: 0.6,
                // markers: true,
                pin: "#pin-leveraging",
                anticipatePin: 1
            },
        });
    }
});
