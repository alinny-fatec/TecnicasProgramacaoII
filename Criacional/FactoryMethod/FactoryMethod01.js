// #########################################################################
// FATEC Diadema - Luigi Papaiz
// DSM - Desenvolvimento de Software Multiplataformas
// Disciplina - Técnica de Programação II
// Nome: Alinny Ribeiro     Data: 23/02/2024
// Description: Aplicação de padrão GOF - Criacional - Factory Method
// Desenvolvido como exemplo na aula
// #########################################################################


// Classe base de veículos
class Veiculo{
    constructor(modelo){
        this.modelo=modelo;
    }
    mostrarDetalhamento(){
        console.log(`Modelo: ${this.modelo}`);
    }
}

// Subclasse de veículos
class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

// Fabrica abstrata de veículo
class FabricaVeiculos{
    criarVeiculo(){
        throw new Error("O método criar veículo deve ser implementado pelas subclasses");
    }
}

// Fabrica concreta de carros
class FabricaDeCarros extends FabricaVeiculos{
    criarVeiculo(modelo){
        return new Carro(modelo);
    }
}

// Fabrica concreta de motos
class FabricaDeMotos extends FabricaVeiculos{
    criarVeiculo(modelo){
        return new Moto(modelo);
    }
}

// Uso da Fabrica - Interface
const fabricaDeCarros = new FabricaDeCarros();
const carro = fabricaDeCarros.criarVeiculo("Ford KA");
carro.mostrarDetalhamento(); //Saída esperada: 'Modelo: Ford KA'

const fabricaDeMotos = new FabricaDeMotos();
const moto = fabricaDeMotos.criarVeiculo("PCX");
moto.mostrarDetalhamento(); //Saída esperada: 'Modelo: PCX'