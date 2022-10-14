// Plano.js

// imports
import { Ponto } from './Ponto.js'

// classe para gerenciar o plano cartesiano
export class Plano {
    // dimensões
    altura;
    comprimento;

    // atributos
    pontos;
    linhas;

    constructor() {
        this.altura = 600
        this.comprimento = 800
        this.pontos = []
        this.linhas = []
    }

    // getters
    get altura()      { return this.altura; }
    get comprimento() { return this.comprimento; }
    get pontos()      { return this.pontos; }
    get linhas()      { return this.linhas; }

    // setters
    set altura(h)      { this.altura = h; }
    set comprimento(w) { this.comprimento = w; }
    set pontos(p)      { this.pontos = p; }
    set linhas(l)      { this.linhas = l; }

    // métodos (pontos)
    jaExiste(x, y)  { // verificando se ponto já existe no plano
        let p = new Ponto(x, y);

        for(let i = 0; i < this.pontos.length; i++) {
            if(Ponto.compararPontos(this.pontos[i], p))
                return [true, this.pontos[i]]
        }

        return [false, p]
    }

    renderizarPonto(x, y) {
        const ctx = document.getElementById('plano-cartesiano').getContext('2d');

        ctx.beginPath();
        ctx.fillRect(x-4, y-4, 8, 8);
        ctx.closePath();
    }

    addPonto(x, y) { // adicionando pontos para lista de pontos
        let result = this.jaExiste(x, y);

        if(!result[0]) {
            this.renderizarPonto(x, y); // renderizando ponto no plano
            this.pontos.push(new Ponto(x, y));
        }

        return result[1];
    }
}