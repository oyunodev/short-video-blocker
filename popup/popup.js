let ativo = false;
function realizarFuncao(){
    const botao = document.getElementById('meuBotao');
    const resp = document.getElementById("respo");
    if (!ativo){
        botao.innerText = 'Desativar';
        ativo = true;
        resp.innerText = "Funcionou";
    } else{
        botao.innerText = 'Ativar';
        ativo = false;
        resp.innerText = "Funcionou2";
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const botao = document.getElementById('meuBotao');
    botao.addEventListener('click', realizarFuncao);
});