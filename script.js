document.querySelector(".button").addEventListener('mouseover', () => {
    document.querySelector(".button").textContent = `Click me`;
})
document.querySelector(".button").addEventListener('click', () => {
    document.querySelector(".button").textContent = `Bye`;
    setTimeout(() => {
        document.querySelector(".button").style.marginTop = `2000px`;
        document.querySelector(".button").textContent = `Oh nice you found me, click to start again`;
    }, 1500);
})