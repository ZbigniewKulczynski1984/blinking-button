const btn = document.querySelector('.btn');


const btnAnimation = e => {
    const top = e.clientY
    const left = e.clientX
    //pozycja w którą klikamy
    const btnTopPosition = e.target.offsetTop
    const btnLeftPosition = e.target.offsetLeft
    //zmienne reprezentują pozycje przycisku
}

btn.addEventListener('click', btnAnimation);