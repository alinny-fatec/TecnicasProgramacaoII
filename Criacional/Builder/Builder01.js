// ****************************************************************************
// FATEC Diadema - Luigi Papaiz
// Curso: Desenvolvimento de Sistema Multiplataformas - DSM
// Disciplina: Tecnica de Programação II
// Autor: Alinny Ribeiro         Data: 08/03/2024
// Descrição: Aplicação do padrão GoF - Criacional - Builder
// desenvolvido como exemplo na aula. 
// ---------------------------------------------------------------------------
// ENUNCIADO: No programa abaixo, é criado um software que simula a construção 
// de um carro, onde o Builder nos permitirá definir diferentes partes do 
// carro de forma flexível. Começa definindo as diferentes partes do carro e 
// na sequência se cria o Builder, que permite construir diferentes tipos de 
// carros; Se cria uma classe Carro que receberá as partes construídas pelo 
// Builder e na pra fechar, usa-se o Builder para construir diferentes tipos 
// de carros
// ****************************************************************************

// Define as partes de um carro:
class NomeCarro{
    constructor(nome){
        this.nome = nome;
    };
};

class Motor{
    constructor(tipo){
        this.tipo = tipo;
    };
};

class Carroceria{
    constructor(estilo){
        this.estilo = estilo;
    };
};

class Rodas{
    constructor(tamanho){
        this.tamanho = tamanho;
    };
};

class CorVeiculo{
    constructor(cor){
        this.cor = cor;
    };
};

// Builder:
class CarroBuilder{
    constructor(){
        this.nome = null;
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.corVeiculo = null;
    };

    adicionarNome(nome){
        this.nome = new NomeCarro(nome);
        return this;
    }

    adicionarMotor(tipo){
        this.motor = new Motor(tipo);
        return this;
    };

    adicionarCarroceria(estilo){
        this.carroceria = new Carroceria(estilo);
        return this;
    };

    adicionarRodas(tamanho){
        this.rodas = new Rodas(tamanho);
        return this;
    };

    adicionarCorVeiculo(cor){
        this.corVeiculo = new CorVeiculo(cor);
        return this;
    };

    montarCarro(){
        return new Carro(this.nome, this.motor, this.carroceria, this.rodas, this.corVeiculo);
    };
};

// Construindo o Carro:
class Carro{
    constructor(nome, motor, carroceria, rodas, corVeiculo){
        this.nome = nome;
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.corVeiculo = corVeiculo;
    };

    montarDetalhes(){
        console.log(`
        Nome: ${this.nome.nome},
        Motor: ${this.motor.tipo}, 
        Carroceria: ${this.carroceria.estilo}, 
        Rodas de Tamanho: ${this.rodas.tamanho},
        Cor: ${this.corVeiculo.cor}\n`);
    };
}


// Construção do Carro Esportivo:
const carroEsportivo = builder
    .adicionarNome('Esportivo')
    .adicionarMotor('V8')
    .adicionarCarroceria('Esportiva')
    .adicionarRodas(18)
    .adicionarCorVeiculo('Preto')
    .montarCarro();

const carroPadrao2 = builder
    .adicionarNome('------')
    .adicionarMotor('------')
    .adicionarCarroceria('------')
    .adicionarRodas('------')
    .adicionarCorVeiculo('------')
    .montarCarro();

// Construção do Carro Sedan:
const carroSedan = builder 
    .adicionarNome('Sedan')
    .adicionarMotor('4 Cilindros')
    .adicionarCarroceria('Sedan')
    .adicionarRodas(16)
    .adicionarCorVeiculo('Bege')
    .montarCarro();

// Mostrar os veiculos construidos:
carroPadrao1.montarDetalhes();
carroEsportivo.montarDetalhes();
carroSedan.montarDetalhes();
