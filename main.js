const form = document.getElementById('form-adicionar')
const nome = []
const numero = []

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizarTabela();
});

function adicionalinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (nome.includes(inputNome.value)) {
        alert(`Contato exixtente`);
    } else {
        nome.push(inputNome.value);
        numero.push(parseFloat(inputNumero.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        linhas +=linha;
    }
    inputNome.value = '';
    inputNumero.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}