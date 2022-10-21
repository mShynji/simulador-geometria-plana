// Plano.js

// imports
import { Ponto } from './Ponto.js'
import { Linha } from './Linha.js'

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
    jaExistePonto(x, y)  { // verificando se ponto já existe no plano
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
        let result = this.jaExistePonto(x, y);

        if(!result[0]) {
            this.renderizarPonto(x, y); // renderizando ponto no plano
            this.pontos.push(new Ponto(x, y));
        }

        return result[1];
    }

    // métodos (linhas)
    jaExisteLinha(p1, p2) {
        let l = new Linha(p1, p2);

        for(let i = 0; i < this.linhas.length; i++) {
            if(Linha.compararLinhas(this.linhas[i], l))
                return [true, this.linhas[i]];
        }

        return [false, l];
    }

    renderizarLinha(l) {
        const ctx = document.getElementById('plano-cartesiano').getContext('2d');

        ctx.beginPath();
        ctx.moveTo(l.p1.X, l.p1.Y);
        ctx.lineTo(l.p2.X, l.p2.Y);
        ctx.stroke();
        ctx.closePath();
    }

    addLinha(p1, p2) {
        let result = this.jaExisteLinha(p1, p2);

        if(!result[0]) {
            this.renderizarLinha(result[1]);
            this.linhas.push(result[1]);
        }

        return result[1];
    }
}