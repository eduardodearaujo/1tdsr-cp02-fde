window.addEventListener('keypress', function(event) {
    if(!isNaN(event.key) || event.key === "+" || event.key === "-" 
    || event.key === "x" || event.key === "/" || event.key === ".") {
        digit(event.key)
    }

    if(event.key === "=" || event.key === "Enter") {
        equals()
    }

    if(event.key === 'c') {
        clearAll()
    }
})

function digit(value) {
    const display = document.getElementById("result")

    if(!window.input) {
        window.input = ""
    }

    const lastInput = window.input[window.input.length - 1]

    if(isNaN(lastInput) && isNaN(value)) {
        window.input = window.input.substring(0, window.input.length - 1) + value
    } else {
        window.input += value
    }
    
    display.value = window.input
}

function equals() {
    const display = document.getElementById("result")

    if(window.input) {
        const soma = window.input.split("+")
        const multiplicacao = window.input.split("x")
        const divisao = window.input.split("/")
        const subtracao = window.input.split("-")

        if(subtracao.length === 2) {
            window.input = Number(subtracao[0]) - Number(subtracao[1])
        }

        if(soma.length === 2) {
            window.input = Number(soma[0]) + Number(soma[1])
        }

        if(divisao.length === 2) {
            window.input = Number(divisao[0]) / Number(divisao[1])
        }

        if(multiplicacao.length === 2) {
            window.input = Number(multiplicacao[0]) * Number(multiplicacao[1])
        }

        window.input = window.input.toString()
        display.value = window.input
    }
}

function addFloat() {
    if(!window.input) {
        return
    }

    digit('.')
}

function clearAll() {
    const display = document.getElementById("result")
    window.input = ""

    display.value = window.input
}