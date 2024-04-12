# FATEC Diadema - Luigi Papaiz
# DSM - Desenvolvimento de Software Multiplataformas
# Disciplina - Técnica de Programação II
# Nome: Alinny Ribeiro     Data: 12/04/2024
# Description: Aplicação de padrão GOF - Estrutural - Composite
# Desenvolvido como exemplo na aula
# ESCOPO: Programa que cria algumas frutas e uma caixa de fruta (container). 
#Adiciona as frutas na caixa, e a embalagem. Um metodo chamado obterPreco() da 
#caixa deve percorrer todos os sub-elementos da arvore, somar os preços e de todos
#os componentes adicionados (composição), por fim retorna o preço total. 

class Componente:
    def __init__(self, nome):
        self.nome = nome

    def adicionar(self):
        pass  # Implemente este método conforme necessário

    def remover(self):
        pass  # Implemente este método conforme necessário

    def obterNome(self):
        return self.nome

    def __str__(self):
        return f'{self.__class__.__name__}({self.nome})'

class Folha(Componente):
    def __init__(self, nome, preco):
        super().__init__(nome)
        self.preco = preco

    def obterPreco(self):
        return self.preco

    def __str__(self):
        return f'{self.__class__.__name__}({self.nome}, {self.preco})'


class Container(Componente):
    def __init__(self, nome):
        super().__init__(nome)
        self.arrayComponente = []

    def adicionar(self, componente):
        self.arrayComponente.append(componente)

    def remover(self, componente):
        self.arrayComponente.remove(componente)

    def obterPreco(self):
        preco = 0
        for componente in self.arrayComponente:
            preco += componente.obterPreco()
        return preco

    def obterNome(self):
        return self.nome

    def __str__(self):
        componentes_str = '\n'.join(str(c) for c in self.arrayComponente)
        return f'{self.__class__.__name__}({self.nome}):\n{componentes_str}'

maca = Folha('Maçã', 8.99)
laranja = Folha('Laranja', 3.69)
uva = Folha('Uva', 9.98)

produto = Container('Carrinho de Compra')
produto.adicionar(maca)
produto.adicionar(laranja)
produto.adicionar(uva)

pedido = Container('Pedido Fechado')
pedido.adicionar(produto)
pedido.adicionar(Folha('Embalagem', 1.90))

pedidoEntrega = Container('Pedido Completo')
pedidoEntrega.adicionar(pedido)
pedidoEntrega.adicionar(Folha('Frete SP', 35.00))

print(produto)
print(pedido)
print(pedidoEntrega)
print(f"Preço Total: R${pedidoEntrega.obterPreco()}")