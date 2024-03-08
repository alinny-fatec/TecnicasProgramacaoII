// #########################################################################
// FATEC Diadema - Luigi Papaiz
// DSM - Desenvolvimento de Software Multiplataformas
// Disciplina - Técnica de Programação II
// Nome: Alinny Ribeiro     Data: 15/03/2024
// Description: Aplicação de padrão GOF - Criacional - Prototype
// Desenvolvido como exemplo na aula
// #########################################################################


//Classe Pessoa que será o Protótipo
class Pessoa{
    constructor(id, nome, idade){
        this.id=id;
        this.nome=nome;
        this.idade=idade;
    }

    //Método que clona para realizar a cópia do objeto:
    clone(){
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

//Classe Pessoa Manager que gerencia e instancia pessoas
class PessoaManager{
    constructor(){
        this.pessoas = {};
    }

    //Adiciona uma nova pessoa (objeto) ao dicionário Pessoa:
    adicionaPessoa(id, nome, idade){
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    //Solicita uma pessoa pelo id e retorna uma cópia dela 
    getPessoaById(id){
        const pessoaOriginal = this.pessoas[id];
        if (pessoaOriginal){
            return pessoaOriginal.clone();
        }else{
            return null;
        }
    }
}


//INTERFACE PARA O USUÁRIO *****

//Criando uma instância de PessoaManager:
const manager = new PessoaManager();

//Adicionando Pessoas:
manager.adicionaPessoa(1, 'João da Silva', 30);
manager.adicionaPessoa(2, 'Maria da Silva', 25);
manager.adicionaPessoa(3, 'Bruno dos Santos', 56);
manager.adicionaPessoa(4, 'Joana da Silva', 22);

//Clonando Pessoa e Modificando os Dados
const pessoaClone1 = manager.getPessoaById(1);
if(pessoaClone1){
    pessoaClone1.nome = 'João Ribeiro';
}

const pessoaClone2 = manager.getPessoaById(3);
if(pessoaClone2){
    pessoaClone2.nome = 'Bruno Oliveira';
    pessoaClone2.idade = 79;
}

//Imprimindo as pessoa (originais ou clonadas) selecionadas
console.log('Pessoas Originais: \n');
console.log(manager.getPessoaById(1));
console.log(manager.getPessoaById(2));
console.log(manager.getPessoaById(3));
console.log(manager.getPessoaById(4));

console.log('\n----------------------------\n');
console.log('Pessoas Clonadas: \n')
console.log(pessoaClone1);
console.log(pessoaClone2)