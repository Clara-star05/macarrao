//Função para enviar os dados POST - CREATE
function enviarDados() {
    //Obter os valores dos campos informados pelo usuário
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('identificadorSobrenome').value
    var idade = document.getElementById('idade').value
    var cpf = document.getElementById('identificadorCPF').value
    var cidade = document.getElementById('identificadorCidade').value
    var estado = document.getElementById('identificadorEstado').value
    var telefone = document.getElementById('telefone').value

    //Enviar um função que puxa o valor de uma API - FETCH
    fetch('http://localhost:3000/pessoas', {
        method: 'POST', //Metodo POST HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome, idade: idade, cpf: cpf, telefone:telefone, cidade:cidade, estado:estado, sobrenome: sobrenome

        }) //Dados a serem enviados e convertidos
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON
}