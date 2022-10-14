// main.js

// imports
import { adicionarPonto, adicionarLinha } from './funcoes.js'

// variáveis
let ferramenta = ''; // variável para guardar qual ferramenta está sendo usada

// adicionar ponto
window.ferramentaPonto = () => {
    let canvas = document.getElementById('plano-cartesiano');

    if(ferramenta != 'ponto') {
        ferramenta = 'ponto';
        canvas.removeEventListener('click', adicionarLinha, false);
        canvas.addEventListener('click', adicionarPonto, false);
    } else {
        ferramenta = '';
        canvas.removeEventListener('click', adicionarPonto, false);
    }
}

window.ferramentaLinha = () => {
    let canvas = document.getElementById('plano-cartesiano');

    if(ferramenta != 'linha') {
        ferramenta = 'linha';
        canvas.removeEventListener('click', adicionarPonto, false);
        canvas.addEventListener('click', adicionarLinha, false);
    } else {
        ferramenta = '';
        canvas.removeEventListener('click', adicionarLinha, false);
    }
}