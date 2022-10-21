// Linha.js

import { Ponto } from './Ponto.js'

export class Linha {
    // atributos
    pontos;

    constructor(p1, p2) {
        this.pontos = [];
        this.pontos.push(p1, p2);
    }

    // getters
    get pontos() { return this.pontos; }
    get p1()     { return this.pontos[0]; }
    get p2()     { return this.pontos[1]; }


    // setters
    set pontos(p) { this.pontos = p; }
    set p1(p)     { this.pontos[0] = p; }
    set p2(p)     { this.pontos[1] = p; }

    // método estático para comparar linhas
    static compararLinhas(l1, l2) {
        if(Ponto.compararPontos(l1.p1, l2.p1) || Ponto.compararPontos(l1.p1, l2.p2)) {
            if(Ponto.compararPontos(l1.p2, l2.p1) || Ponto.compararPontos(l1.p2, l2.p2))
                return true;
        }

        return false;
    }
}