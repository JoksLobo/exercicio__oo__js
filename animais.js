// Classe de abstração
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom() {
        // Método abstrato
        throw new Error("Este método deve ser implementado pelas subclasses");
    }
}

// Classe Cachorro que herda de Animal
class Cachorro extends Animal {
    fazerSom() {
        return "Au Au!";
    }
}

// Classe Gato que herda de Animal
class Gato extends Animal {
    fazerSom() {
        return "Miau!";
    }
}

// Criando instâncias dos objetos
const cachorro1 = new Cachorro("Rex", 5);
const gato1 = new Gato("Mimi", 3);
const cachorro2 = new Cachorro("Buddy", 2);

// Exibindo informações e sons dos animais
console.log(`${cachorro1.nome} tem ${cachorro1.idade} anos e faz ${cachorro1.fazerSom()}`);
console.log(`${gato1.nome} tem ${gato1.idade} anos e faz ${gato1.fazerSom()}`);
console.log(`${cachorro2.nome} tem ${cachorro2.idade} anos e faz ${cachorro2.fazerSom()}`);
