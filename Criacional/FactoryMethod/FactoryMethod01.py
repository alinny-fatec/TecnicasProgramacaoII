# #########################################################################
# FATEC Diadema - Luigi Papaiz
# DSM - Desenvolvimento de Software Multiplataformas
# Disciplina - Técnica de Programação II
# Nome: Alinny Ribeiro     Data: 23/02/2024
# Description: Aplicação de padrão GOF - Criacional - Factory Method
# Desenvolvido como exemplo na aula
# #########################################################################

# Classe Base de Veículos
class Veiculo:
    def __init__(self, modelo):
        self.modelo=modelo

    def mostrarDetalhamento(self):
        print(f"Modelo: {self.modelo}")

# Subclasse de Veículos
class Carro(Veiculo):
    def __init__(modelo):
        super().__init__(modelo)

class Moto(Veiculo):
    def __init__(modelo):
        super().__init__(modelo)


# Fabrica abstrata de veículo
class FabricaDeVeiculos:
    def criarVeiculo(self, modelo):
        raise NotImplementedError("O método criar veículo deve ser implementado pelas subclasses")

# Fabrica concreta de carros
class FabricaDeCarros(FabricaDeVeiculos):
    def criarVeiculo(self, modelo):
        return Carro(modelo)

# Fabrica concreta de motos
class FabricaDeMotos(FabricaDeVeiculos):
    def criarVeiculo(self, modelo):
        return Moto(modelo)

# Uso da fabrica - Interface
fabricaDeCarros = FabricaDeCarros()
carro = fabricaDeCarros.criarVeiculo("Ford KA")
carro.mostrarDetalhamento() #Saída: 'Modelo: Ford KA'

fabricaDeMotos = FabricaDeMotos()
moto = fabricaDeMotos.criarVeiculo("PCX")
moto.mostrarDetalhamento() #Saída: 'Modelo: PCX'