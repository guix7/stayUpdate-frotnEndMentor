const botao = document.querySelector('.btn');
const tela1 = document.querySelector('.tela-1');
const tela2 = document.querySelector('.tela-2');

botao.addEventListener('click', (event) =>{
    event.preventDefault();

    let campo = document.getElementById('input')
    let mensagem = document.getElementById('sub')
    let valor = campo.value

    if(valor.indexOf('@') === -1 || valor.indexOf('.com') === -1 || valor.length <= 5 || valor.includes(' ')){
        mensagem.classList.remove('invisivel')
        campo.classList.add('validacao')
    }else{
        tela1.classList.add('invisivel');
        tela2.classList.remove('invisivel')
    }
    
})

const retorno = document.querySelector('.btn-2');

retorno.addEventListener('click', () =>{
    location.reload();
})