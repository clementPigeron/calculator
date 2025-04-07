/*let positionSelector = 1

document.getElementById("top").addEventListener("click", () => {
    positionSelector = 1
})
document.getElementById("bottom").addEventListener("click", () => {
    positionSelector = 2
})
*/

let digit = document.querySelectorAll(".digit")
digit.forEach(
    (btn) => {
        btn.addEventListener("click", () => {
            writeDigit(btn.textContent)
        })
    }
)

let operator = document.querySelectorAll(".operator")
operator.forEach(
    (btn) => {
        btn.addEventListener("click", () => {
            writeOperator(btn.textContent)
        })
    }
)

function writeDigit (nb) {
    /*if (positionSelector===1) {
        document.getElementById("baseLine").innerHTML += `${nb}`
    } else {
        document.getElementById("otherLine").innerHTML += `${nb}`
    }*/

    document.getElementById("baseLine").innerHTML += `${nb}`
}

function writeOperator (op) {
    document.getElementById("operatorLine").innerHTML = `${op}`
}