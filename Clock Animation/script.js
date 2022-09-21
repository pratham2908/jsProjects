setInterval(setClock, 1000);

function setClock() {
    const hCircle = document.querySelector('.circle:nth-of-type(3) svg circle');
    const mCircle = document.querySelector('.circle:nth-of-type(2) svg circle');
    const sCircle = document.querySelector('.circle:nth-of-type(1) svg circle');
    const hour = document.querySelector('.hour ');
    const minute = document.querySelector('.minute ');
    const second = document.querySelector('.second ');
    const ampm = document.querySelector('.ampm ');
    const hdot = document.querySelector('.circle:nth-of-type(3) .dot');
    const mdot = document.querySelector('.circle:nth-of-type(2) .dot');
    const sdot = document.querySelector('.circle:nth-of-type(1) .dot');



    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    minute.innerHTML = m + ":";
    second.innerHTML = s;
    ampm.innerHTML = h >= 12 ? 'PM' : 'AM';

    h = h >= 12 ? h - 12 : h;
    hour.innerHTML = h + ":";

    hdot.style.transform = `rotate(${h * 30}deg)`;
    mdot.style.transform = `rotate(${m * 6}deg)`;
    sdot.style.transform = `rotate(${s * 6}deg)`;

    hCircle.style.strokeDashoffset = 942 - (h * 942) / 12;
    mCircle.style.strokeDashoffset = 1257 - (m * 1257) / 60;
    sCircle.style.strokeDashoffset = 1571 - (s * 1571) / 60;
}

setClock();


const start = document.querySelector('.start');
const clock = document.querySelector('.clock');


start.addEventListener('click', () => {
    start.style.transform = "translate(-50%, -50%) scale(0)";
    clock.style.display = 'flex';
    setTimeout(() => {
        start.style.display = "none";
        clock.style.transform = " scale(1)";
    }, 700);
});
