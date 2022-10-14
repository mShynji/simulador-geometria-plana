// imports
import { Plano } from './classes/Plano.js'

// variáveis
let plano = new Plano(); // iniciando plano cartesiano
let pontos = [];
const canvas = document.getElementById('plano-cartesiano');

export let adicionarPonto = (e) => {
    plano.addPonto(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);

    console.log(plano.pontos);
}

export let adicionarLinha = (e) => {
    pontos.push(plano.addPonto(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop));

    if(pontos.length == 2) {
        
        pontos = [];
    }

    console.log(pontos);
}