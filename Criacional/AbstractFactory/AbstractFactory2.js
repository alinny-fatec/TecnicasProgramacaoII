// ****************************************************************************
// FATEC Diadema - Luigi Papaiz
// Curso: Desenvolvimento de Sistema Multiplataformas - DSM
// Disciplina: Tecnica de Programação II
// Autor: Alinny Ribeiro da Cunha        Data: 01/03/2024
// Descrição: Aplicação do padrão GoF - Criacional - AbstractFatory
// desenvolvido como exemplo na aula. 
// ---------------------------------------------------------------------------
// ENUNCIADO: No código é implementado produtos eletrônicos e produtos de moda, 
// cada um com sua própria fábrica que cria produtos específicos. Considerando 
// duas tipos de produtos: Telefone na fabrica de nome eletrônico e Camisa 
// na fabrica de nome moda. Neste caso, se tem duas fábricas  concretas: 
// FabricaEletronico e FabricaModa. A função lojaVirtual simula o uso do padrão 
// Abstract Factory em uma loja virtual, onde diferentes tipos de produtos são 
// criados de acordo com a fábrica escolhida para cada cliente.
// ****************************************************************************

// Interface da fábrica abstrata
class FabricaAbstrata {
    criarProdutoEletronico() {}
    criarProdutoModa() {}
  }
  
// Fábrica concreta para criar produtos eletrônicos
class FabricaEletronico extends FabricaAbstrata {
    criarProdutoEletronico() {
      return new Telefone();
    }
  
    criarProdutoModa() {
      return new ProdutoModa();
    }
  }
  
// Fábrica concreta para criar produtos de moda
class FabricaModa extends FabricaAbstrata {
    criarProdutoEletronico() {
      return new Telefone(); 
    }
  
    criarProdutoModa() {
      return new Camisa();
    }
}
  
// Classe abstrata para produtos eletrônicos
class ProdutoEletronico {
    constructor() {
      this.tipo = "eletrônico";
    }
  
    descricao() {
      return `Produto ${this.tipo}: telefone`;
    }
}
  
// Classe para produtos de moda
  class ProdutoModa {
    constructor() {
      this.tipo = "moda";
    }
  
    descricao() {
      return `Produto ${this.tipo}: camiseta`;
    }
}
  
// Classe concreta para produtos eletrônicos
class Telefone extends ProdutoEletronico {
    descricao() {
      return `Produto ${this.tipo}: telefone`;
    }
}
  
// Classe concreta para produtos de moda
class Camisa extends ProdutoModa {
    descricao() {
      return `Produto ${this.tipo}: camisa`;
    }
}
  
// Função para simular o uso do padrão Abstract Factory em uma loja virtual
function lojaVirtual(cliente, fabrica) {
    const produtoEletronico = fabrica.criarProdutoEletronico();
    const produtoModa = fabrica.criarProdutoModa();
  
    console.log(`${cliente} comprou:`);
    console.log(produtoEletronico.descricao());
    console.log(produtoModa.descricao());
}
  
// Exemplo de uso com fábrica de produtos eletrônicos e de moda
const cliente1 = "Cliente 1";
const carrinho1 = new FabricaEletronico();
lojaVirtual(cliente1, carrinho1);
  
console.log("\n---\n");
  
// Exemplo de uso com fábrica de produtos de moda
const cliente2 = "Cliente 2";
const carrinho2 = new FabricaModa();
lojaVirtual(cliente2, carrinho2);
  
  