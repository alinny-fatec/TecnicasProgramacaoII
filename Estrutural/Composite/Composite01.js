// FATEC Diadema - Luigi Papaiz
// DSM - Desenvolvimento de Software Multiplataformas
// Disciplina - Técnica de Programação II
// Nome: Alinny Ribeiro     Data: 12/04/2024
// Description: Aplicação de padrão GOF - Estrutural - Composite
// Desenvolvido como exemplo na aula
/* ESCOPO: Programa que cria algumas frutas e uma caixa de fruta (container). 
Adiciona as frutas na caixa, e a embalagem. Um metodo chamado obterPreco() da 
caixa deve percorrer todos os sub-elementos da arvore, somar os preços e de todos
os componentes adicionados (composição), por fim retorna o preço total. 
*/



// Classe Componentes:
class Componente {
    constructor(nome){
        this.nome = nome;
    }

    adicionar(){}

    remover(){}

    obterNome(){}

}

// Classe Folha:
class Folha extends Componente{
    constructor(nome, preco){
        super(nome);
        this.preco = preco;
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        return this.preco;
    }
}

// Classe Container:
class Container extends Componente{
    constructor(nome){
        super(nome);
        this.arrayComponente = [];
    }

    adicionar(componente){
        this.arrayComponente.push(componente);
    }

    remover(componente){
        const index = this.arrayComponente.indexOf(componente);
        this.arrayComponente.splice(index, 1);
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        let preco = 0;
        this.arrayComponente.forEach(componente => {
            preco += componente.obterPreco();
        });
        return preco;
    }
}

// Interface de utilização ########################################
const maca      = new Folha('Maçã',     8.99);
const laranja   = new Folha('Laranja',  3.69);
const uva       = new Folha('Uva',      9.98);

const produto = new Container('Carrinho de Compra');
produto.adicionar(maca);
produto.adicionar(laranja);
produto.adicionar(uva);

const pedido = new Container('Pedido Fechado');
pedido.adicionar(produto);
pedido.adicionar(new Folha('Embalagem', 1.90));

const pedidoEntrega = new Container('Pedido Completo');
pedidoEntrega.adicionar(pedido);
pedidoEntrega.adicionar(new Folha('Frete SP', 35.00));

console.log(produto)
console.log(pedido)
console.log(pedidoEntrega)
console.log(`Preço Total: R$${pedidoEntrega.obterPreco()}`);