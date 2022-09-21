const button = document.querySelector('button');



button.addEventListener('click', (e) => {

    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.top = `${y - buttonTop - 50}px`;
    ripple.style.left = `${x - buttonLeft - 50}px`;
    button.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 300);
});
