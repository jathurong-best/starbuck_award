let lastScrollTop = 0;
let mainHeader = document.querySelector('header');
let subHeader = document.querySelector('.sub-header');


setExpression('nowShow');

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        console.log("Scroll Down");

        mainHeader.style.position = 'relative';
        mainHeader.classList.remove('noShow');
        mainHeader.classList.add('noShow');
        subHeader.style.top = '0';
        setExpression('noShow')

    } else if (currentScroll < lastScrollTop) {
        // Scroll up
        console.log("Scroll Up");
        mainHeader.style.position = 'sticky';
        mainHeader.style.zIndex = '2000';
        mainHeader.style.top = '0';
        mainHeader.classList.remove('nowShow');
        mainHeader.classList.add('nowShow');
        subHeader.style.top = '55px';
        setExpression('nowShow')
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function setExpression(status) {
    let expression = document.querySelector('.sub-header-expansion');
    if (!expression) return;

    if (status === 'nowShow') {
        const totalOffset = mainHeader.offsetHeight + subHeader.offsetHeight;
        expression.style.top = `${totalOffset}px`;
    } else {
        expression.style.top = `${subHeader.offsetHeight}px`;
    }

    console.log(expression.style.top);
}
