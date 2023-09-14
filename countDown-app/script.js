function countdown() {
    let now = new Date();
    let eventDate = new Date(2024, 0, 1);

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // update display
    // document.querySelector("#days").innerText = d;
    document.querySelector("#days").textContent = d;

    document.querySelector("#hours").textContent = h;
    document.querySelector("#minutes").textContent = m;
    document.querySelector("#seconds").textContent = s;
}
setTimeout(countdown, 1000);
