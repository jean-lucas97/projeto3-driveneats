function selecionarPrato(elemento){
    console.log(elemento)
    const selecionado = document.querySelector(".prato .selecionado")

    if (selecionado !== null) {
     selecionado.classList.remove("selecionado");
    } 
    elemento.classList.add("selecionado");
}

function selecionarBebida(elemento) {
    console.log(elemento)

    const selecionado = document.querySelector(".bebida .selecionado")
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
}

function selecionarSobremesa(elemento) {
    console.log(elemento)

    const selecionado = document.querySelector(".sobremesa .selecionado")
    if (selecionado !==null) {
        selecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
}