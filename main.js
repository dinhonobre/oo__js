// Classe abstrata
class Animal {
    constructor(nome, idade) {
        if (this.constructor === Animal) {
            throw new Error("Classe abstrata 'Animal' não pode ser instanciada diretamente.");
        }
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        throw new Error("O método 'emitirSom' deve ser implementado pelas classes filhas.");
    }

    mover() {
        console.log(`${this.nome} está se movendo.`);
    }
}

// Classe herdeira 1
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome} está latindo: Au au!`);
    }
}

// Classe herdeira 2
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        console.log(`${this.nome} está miando: Miau!`);
    }
}

// Instâncias de objetos
const rex = new Cachorro("Rex", 3, "Labrador");
const whiskers = new Gato("Whiskers", 2, "Preto");
const luna = new Gato("Luna", 1, "Branca");

// Usando os métodos das classes
rex.emitirSom(); // Rex está latindo: Au au!
rex.mover();     // Rex está se movendo.

whiskers.emitirSom(); // Whiskers está miando: Miau!
luna.emitirSom();     // Luna está miando: Miau!

console.log(rex);      // Cachorro { nome: 'Rex', idade: 3, raca: 'Labrador' }
console.log(whiskers); // Gato { nome: 'Whiskers', idade: 2, cor: 'Preto' }
console.log(luna);     // Gato { nome: 'Luna', idade: 1, cor: 'Branca' }
