/* setTimeout(() => {
    document.querySelector(".currency__table--container").scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}, 500) */

/* Funcion para centrar flecha next-table */
const centerArrow = () => {
    const container = document.querySelector('body');
    const buttonArrow = document.querySelector('.next-table');
    
    console.log(buttonArrow.clientWidth);
    buttonArrow.style.left = `${(container.clientWidth - buttonArrow.clientWidth) - 23}px`;
}

centerArrow()

/* Funcion para el slider de las tablas */
const sliderTables = () => {
    const buttonArrow = document.querySelector('.next-table')
    const body = document.querySelector('body');
    const container = document.querySelector('.main-tables__container')

    let slidecount = 1;
    console.log(container.childElementCount);
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

sliderTables()