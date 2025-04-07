let positionSelector = 1

document.getElementById("top").addEventListener("click", () => {
    selectTop()
})
document.getElementById("baseLine").addEventListener("click", () => {
    selectTop()
})
document.getElementById("bot").addEventListener("click", () => {
    selectBot()
})
document.getElementById("otherLine").addEventListener("click", () => {
    selectBot()
})


let digit = document.querySelectorAll(".digit")
digit.forEach(
    (btn) => {
        btn.addEventListener("click", () => {
            writeDigit(btn.textContent)
        })
    }
)

let operator = "add"
let operatorBloc = document.querySelectorAll(".operator")
operatorBloc.forEach(
    (btn) => {
        btn.addEventListener("click", () => {
            writeOperator(btn.textContent)
            operator = `${btn.id}`
            console.log(operator)
        })
    }
)

function writeDigit (nb) {
    if (positionSelector===1) {
        document.getElementById("baseLine").innerHTML += `${nb}`
    } else {
        document.getElementById("otherLine").innerHTML += `${nb}`
    }
}

function writeOperator (op) {
    document.getElementById("operatorLine").innerHTML = `${op}`
}

function selectTop () {
    document.getElementById("baseLine").style.border = "1px solid red"
    document.getElementById("otherLine").style.border = "0px"
    positionSelector = 1
}
function selectBot () {
    document.getElementById("otherLine").style.border = "1px solid red"
    document.getElementById("baseLine").style.border = "0px"
    positionSelector = 2
}