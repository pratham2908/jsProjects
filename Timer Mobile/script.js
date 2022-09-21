const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const timer = document.querySelector(".timer");
const times = document.querySelectorAll(".time");
const paused = document.querySelector(".paused");
let playing = false;
let interval;

function run() {
    if (playing) {
        playing = false;
        paused.style.display = "block";
        clearInterval(interval);
        return;
    }
    playing = true;
    paused.style.display = "none";
    interval = setInterval(() => {
        let s = parseInt(second.innerHTML);
        let m = parseInt(minute.innerHTML);
        let h = parseInt(hour.innerHTML);

        s = s + 1;
        if (s == 60) {
            let audio = new Audio(
                "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"
            );
            audio.play();
            s = 00;
            m = m + 1;
            if (m == 60) {
                m = 00;
                h = h + 1;
                hour.innerText = h + ":";
                if (h < 10) {
                    hour.innerText = "0" + h + ":";
                }
            }
            minute.innerText = m + ": ";
            if (m < 10) {
                minute.innerText = "0" + m + ":";
            }
        }
        second.innerText = s;
        if (s < 10) {
            second.innerText = "0" + s;
        }

        if (h == 0) {
            hour.style.display = "none";
        } else {
            hour.style.display = "inline-block";
            times.forEach((time) => {
                time.classList.add("small");
            });
        }
    }, 1000);
}

timer.onclick = () => {
    run();
};