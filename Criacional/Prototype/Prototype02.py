import copy
 
class Pizza:
    def __init__(self, sabor, preco):
        self.sabor = sabor
        self.preco = preco
 
    def clone(self):
        return copy.copy(self)
 
class PedidoPizza:
    def __init__(self, client, pizzas):
        self.client = client
        self.pizzas = pizzas
   
    def calcularTotal(self):
        total = sum(pizza.preco for pizza in self.pizzas)
        return total
 
class Pizzaria:
    def __init__(self, nome):
        self.nome = nome
        self.cardapio = {}
 
    def adicionarPizza(self, sabor, preco):
        self.cardapio[sabor] = Pizza(sabor, preco)
   
    def fazerPedido(self, client, sabores):
        pizzas = []
        for sabor in sabores:
            if sabor in self.cardapio:
                pizzas.append(self.cardapio[sabor].clone())
            else:
                print(f"Desculpe, não temos a pizza de {sabor}")
       
        if len(pizzas) > 0:
            pedido = PedidoPizza(client, pizzas)
            print(f'Pedido recebido')
            total = pedido.calcularTotal()
            print(f'Total: R$ {total:.2f}')
            for pizza in pizzas:
                print(f'{pizza.sabor} custa R$ {pizza.preco:.2f}')
 
 
if __name__ == "__main__":
    minhaPizzaria = Pizzaria("Minha Pizzaria")
    minhaPizzaria.adicionarPizza("mussarela", 30.0)
    minhaPizzaria.adicionarPizza("frango", 40.0)
    minhaPizzaria.adicionarPizza("portuguesa", 50.0)
 
    minhaPizzaria.fazerPedido("João", ["mussarela", "frango", "calabresa"])