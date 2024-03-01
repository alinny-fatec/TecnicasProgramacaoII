// #########################################################################
// FATEC Diadema - Luigi Papaiz
// DSM - Desenvolvimento de Software Multiplataformas
// Disciplina - Técnica de Programação II
// Nome: Alinny Ribeiro     Data: 01/03/2024
// Description: Aplicação de padrão GOF - Criacional - Abstract Factory 
// Desenvolvido como exemplo na aula
// ---------------------------------------------------------------------------
// ENUNCIADO: No código é implementado usando classes JavaScript com uma 
// hierarquia de classes que define as fábricas abstratas, produtos abstratos 
// e suas implementações concretas. O cliente usa uma fábrica para criar 
// produtos do tipo A e B, sem se preocupar com as implementações específicas 
// das fábricas ou produtos.
// ****************************************************************************

//INTERFACE DA FABRICA ABSTRATA **
class AbstractFactroty{
    criaProdutoA(){};
    criaProdutoB(){};
}

// Fabrica Concreta 1 que cria Produtos do Tipo A e B - Opção A:
class ConcretaFactory1 extends AbstractFactroty{
    criaProdutoA(){
        return new ConcretoProdutoA1();
    }
    criaProdutoB(){
        return new ConcretoProdutoB1();
    }
}

// Fabrica Concreta 2 que cria Produtos do Tipo A e B - Opção B:
class ConcretaFactory2 extends AbstractFactroty{
    criaProdutoA(){
        return new ConcretoProdutoA2();
    }
    criaProdutoB(){
        return new ConcretoProdutoB2();
    }
}

//----- PRODUTO A
//Interface dos Produtos do Tipo A:
class AbstractProdutoA{
    metodoA(){};
}

//Implementação concreta dos Produtos do Tipo A - Opção A:
class ConcretoProdutoA1 extends AbstractProdutoA{
    metodoA(){
        return "Produto do Tipo A criado pela Fabrica 1";

    }
}

//Implementação concreta dos Produtos do Tipo A - Opção B:
class ConcretoProdutoA2 extends AbstractProdutoA{
    metodoA(){
        return "Produto do Tipo a criado pela Fabrica 2";
    }
}

//----- PRODUTO B
//Interface dos Produtos do Tipo B:
class AbstractProdutoB{
    metodoB(){};
}

//Implementação concreta dos Produtos do Tipo B - Opção A:
class ConcretoProdutoB1 extends AbstractProdutoB{
    metodoB(){
        return "Produto do Tipo B criado pela Fabrica 1";
    }
}

//Implementação concreta dos Produtos do Tipo B - Opção B:
class ConcretoProdutoB2 extends AbstractProdutoB{
    metodoB(){
        return "Produto do Tipo B criado pela Fabrica 2"
    }
}

//INTERFACE (SIMULADA) ARA USO DO PADRAO -- CLIENTE ***

//Função para demonstração do Padrao Abstract Factory
function clienteCod(factory){
    const produtoA = factory.criaProdutoA();
    const produtoB = factory.criaProdutoB();

    console.log(produtoA.metodoA());
    console.log(produtoB.metodoB());
}

//Exemplo de uso com a Primeira Fabrica
const factory1 = new ConcretaFactory1();
clienteCod(factory1);

//Exemplo de uso com a Segunda Fabrica
const factory2 = new ConcretaFactory2();
clienteCod(factory2);