# #########################################################################
# FATEC Diadema - Luigi Papaiz
# DSM - Desenvolvimento de Software Multiplataformas
# Disciplina - Técnica de Programação II
# Nome: Alinny Ribeiro     Data: 01/03/2024
# Description: Aplicação de padrão GOF - Criacional - Abstract Factory 
# Desenvolvido como exemplo na aula
# ---------------------------------------------------------------------------
# ENUNCIADO: No código é implementado usando classes Python com uma 
# hierarquia de classes que define as fábricas abstratas, produtos abstratos 
# e suas implementações concretas. O cliente usa uma fábrica para criar 
# produtos do tipo A e B, sem se preocupar com as implementações específicas 
# das fábricas ou produtos.
# ****************************************************************************

#INTERFACE DA FABRICA ABSTRATA **
class AbstractFactory:
    def criaProdutoA(self):
        pass
    def criaProdutoB(self):
        pass

#Fabrica Concreta 1 que cria Produtos do Tipo A e B - Opção A:
class ConcretaFactory1(AbstractFactory):
    def criaProdutoA(self):
        return ConcretoProdutoA1()  
    def criaProdutoB(self):
        return ConcretoProdutoB1()

#Fabrica Concreta 2 que cria Produtos do Tipo A e B - Opção B:
class ConcretaFactory2(AbstractFactory):
    def criaProdutoA(self):
        return ConcretoProdutoA2()  
    def criaProdutoB(self):
        return ConcretoProdutoB2()

#----- PRODUTO A
#Interface dos Produtos do Tipo A:
class AbstractProdutoA:
    def metodoA(self):
        pass

#Implementação concreta dos Produtos do Tipo A - Opção A:
class ConcretoProdutoA1(AbstractProdutoA):
    def metodoA(self):
        return "Produto do Tipo A criado pela Fabrica A1"

#Implementação concreta dos Produtos do Tipo A - Opção B:
class ConcretoProdutoA2(AbstractProdutoA):
    def metodoA(self):
        return "Produto do Tipo A criado pela Fabrica A2"

#----- PRODUTO B
#Interface dos Produtos do Tipo B:
class AbstractProdutoB:
    def metodoB(self):
        pass

#Implementação concreta dos Produtos do Tipo B - Opção A:
class ConcretoProdutoB1(AbstractProdutoB):
    def metodoB(self):
        return "Produto do Tipo B criado pela Fabrica B1"

#Implementação concreta dos Produtos do Tipo B - Opção B:
class ConcretoProdutoB2(AbstractProdutoB):
    def metodoB(self):
        return "Produto do Tipo B criado pela Fabrica B2"

#INTERFACE (SIMULADA) PARA USO DO PADRAO -- CLIENTE ***
#Função para demonstração do Padrao Abstract Factory
def clientCode(factory):
    produtoA = factory.criaProdutoA()
    produtoB = factory.criaProdutoB()

    print(produtoA.metodoA())
    print(produtoB.metodoB())

#Exemplo de uso com a Primeira Fabrica
factory1 = ConcretaFactory1()
clientCode(factory1)

#Exemplo de uso com a Segunda Fabrica
factory2 = ConcretaFactory2()
clientCode(factory2)