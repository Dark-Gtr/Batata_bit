/* setInterval(() => {
    document.querySelector('footer').scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}, 1000); */

/* Funcion para el slider de las tablas */
const sliderTables = () => {
    const buttonArrow = document.querySelector('.next-table')
    const body = document.querySelector('body');
    const container = document.querySelector('.main-tables__container')

    let slidecount = 1;
    buttonArrow.onclick = () => {
        const slider = document.querySelector('.main-tables__container')
        if (slidecount != container.childElementCount) {
            slider.style.transform = `translate(-${body.clientWidth}px, 0px)`;
            slidecount++;
            buttonArrow.style.transform = 'rotate(180deg)'
        } else {
            slider.style.transform = `translate(0px, 0px)`
            slidecount--;
            buttonArrow.style.transform = 'rotate(0deg)'
        }
        
    }
}

const sliderPlans = () => {
    const buttonLeft = document.querySelector('.plans__button--left');
    const buttonRight = document.querySelector('.plans__button--right')
    const container = document.querySelector('.main-plans__cards--container')
    
    const limit = container.childElementCount;
    let currentSlid = -100;
    let countSlid = 2;
    container.style.transform = `translate(${currentSlid}vw,0px)`
    buttonLeft.onclick = () => {
        if (countSlid < limit) {
            countSlid++;
            currentSlid += (1 * 100);
            container.style.transform = `translate(${currentSlid}vw, 0px)`;
            buttonRight.style.visibility = 'visible';
        }
        if (countSlid === limit) {
            buttonLeft.style.visibility = 'hidden';
        }
    }

    buttonRight.onclick = () => {
        if (countSlid > 1) {
            countSlid--;
            currentSlid += -(1 * 100);
            container.style.transform = `translate(${currentSlid}vw, 0px)`;
            buttonLeft.style.visibility = 'visible';
        }
        
        if (countSlid == 1) {
            buttonRight.style.visibility = 'hidden';
        }
    }
}

sliderTables()
sliderPlans()