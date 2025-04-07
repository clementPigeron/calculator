let digit = document.querySelectorAll(".digit")
digit.forEach(
    (btn) => {
        btn.addEventListener("click", () => {
            writeDigit(btn.textContent)
        })
    }
)

function writeDigit (nb) {
    document.getElementById("monitor").innerHTML = `${nb}`
}