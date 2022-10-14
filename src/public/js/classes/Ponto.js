// Ponto.js

export class Ponto {
    // atributos
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // getters
    get X() { return this.x; }
    get Y() { return this.y; }

    // setters
    set X(x) { this.x = x; }
    set Y(y) { this.y = y; }

    // método estático para comparar pontos
    static compararPontos(p1, p2) {
        // se as ambas as  coordenadas dos pontos forem iguais, então são o mesmo ponto
        if((p1.X-p2.X <= 4 && p1.X-p2.X >= -4)) {
            if((p1.Y-p2.Y <= 4 && p1.Y-p2.Y >= -4))
                return true
            
            else
                return false;
        }

        return false;
    }
}