let contadorPedidos = 0;

let food = '';
let drink = '';
let dessert = '';

let foodpreco = 0;
let drinkpreco = 0;
let dessertpreco = 0;

let nomeCliente = '';
let endereco = '';

function habilitarPedido() {
 
    if (contadorPedidos === 3){
        const finishRequest = document.querySelector(".fazerpedido");
        
        finishRequest.classList.add("ativo");
        finishRequest.innerHTML = "Fazer pedido";

    }
    
}



function selecionarPrato(element, foodName, foodPrice){
    console.log(element)
    const selectedfood = document.querySelector(".prato .selecionado")

    if (selectedfood !== null) {
     selectedfood.classList.remove("selecionado");
    } else {
        contadorPedidos = contadorPedidos + 1;
    }
    element.classList.add("selecionado");
    food = foodName;
    foodpreco = foodPrice;

    habilitarPedido();
}

function selecionarBebida(element, drinkName, drinkPrice) {
    console.log(element)

    const selecteddrink = document.querySelector(".bebida .selecionado")
    if (selecteddrink !== null) {
        selecteddrink.classList.remove("selecionado");
    } else {
        contadorPedidos = contadorPedidos + 1;
    }
    element.classList.add("selecionado");
    drink = drinkName;
    drinkpreco = drinkPrice;

    habilitarPedido();
}

function selecionarSobremesa(element, dessertName, dessertPrice) {
    console.log(element)

    const selecteddessert = document.querySelector(".sobremesa .selecionado")
    if (selecteddessert !==null) {
        selecteddessert.classList.remove("selecionado");
    } else {
        contadorPedidos = contadorPedidos + 1;
    }
    element.classList.add("selecionado");
    dessert = dessertName;
    dessertpreco = dessertPrice;

    habilitarPedido();
}

function finalizarPedido () {
    const nomeCliente = prompt("Qual é o seu nome?");
    const endereco = prompt("Qual é o seu endereço? Rua, número, bairro e cidade.")

    const total = foodpreco + drinkpreco + dessertpreco;
    const telefone = 5511985734068;

    const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${food}
        - Bebida: ${drink}
        - Sobremesa: ${dessert}
        Total:  R$ ${total.toFixed(2)}
        Nome: ${nomeCliente}
        Endereço: ${endereco}`)
       
    const whatsmensagem = `https://wa.me/${telefone}?text=${mensagem}`
    

    window.open(whatsmensagem)
}
