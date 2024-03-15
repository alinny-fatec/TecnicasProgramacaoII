# ****************************************************************************
# FATEC Diadema - Luigi Papaiz
# Curso: Desenvolvimento de Sistema Multiplataformas - DSM
# Disciplina: Tecnica de Programação II
# Autor: Alinny Ribeiro         Data: 08/03/2024
# Descrição: Aplicação do padrão GoF - Criacional - Builder
# desenvolvido como exemplo na aula. 
# ---------------------------------------------------------------------------
# ENUNCIADO: No programa abaixo, é criado um software que simula a construção 
# de um carro, onde o Builder nos permitirá definir diferentes partes do 
# carro de forma flexível. Começa definindo as diferentes partes do carro e 
# na sequência se cria o Builder, que permite construir diferentes tipos de 
# carros; Se cria uma classe Carro que receberá as partes construídas pelo 
# Builder e na pra fechar, usa-se o Builder para construir diferentes tipos 
# de carros.
#
# ****************************************************************************

#Definir partes de um carro
class NomeVeiculo:
    def __init__(self, nome):
        self.nome = nome

class Motor:
    def __init__(self, tipo):
        self.tipo = tipo

class Carroceria:
    def __init__(self, estilo):
        self.estilo = estilo

class Roda:
    def __init__(self, tamanho):
        self.tamanho = tamanho

class CorVeiculo:
    def __init__(self, cor):
        self.cor = cor


# Builder
class CarroBuilder:
    def __init__(self):
        self.nome = None
        self.motor = None
        self.carroceria = None
        self.roda = None
        self.cor = None

    def addNome(self, nome):
        self.nome = NomeVeiculo(nome)
        return self

    def addMotor(self, tipo):
        self.motor = Motor(tipo)
        return self

    def addCarroceria(self, estilo):
        self.carroceria = Carroceria(estilo)
        return self
    
    def addRoda(self, tamanho):
        self.roda = Roda(tamanho)
        return self
    
    def addCor(self, cor):
        self.cor = CorVeiculo(cor)
        return self
    
    def getCarro(self):
        return Carro(self.nome, self.motor, self.carroceria, self.roda, self.cor)
#construtor do carro - faz a montagem de acordo com as configuracoes
    
class Carro:
    def __init__(self, nome, motor, carroceria, roda, cor):
        self.nome = nome
        self.motor = motor
        self.carroceria = carroceria
        self.roda = roda
        self.cor = cor

    def MostrarDetalhes(self):
        print (f"Nome: {self.nome.nome}\nMotor: {self.motor.tipo}\nCarroceria: {self.carroceria.estilo}\nRoda: {self.roda.tamanho}\nCor: {self.cor.cor}\n")

#interface do usuario - ultilizacao do padrao
build = CarroBuilder()
#Carro padrao
#Construção carro padrao 1
carroPadrao1 = build\
    .addNome("------")\
    .addMotor("------")\
    .addCarroceria("------")\
    .addRoda("------")\
    .addCor("------")\
    .getCarro()
#Construção carro esportivo
carroEsportivo = build\
    .addNome("Ferrari")\
    .addMotor("V8")\
    .addCarroceria("Esportivo")\
    .addRoda(20)\
    .addCor("Vermelho")\
    .getCarro()

#Construção carro padrao 2
carroPadrao2 = build\
    .addNome("------")\
    .addMotor("------")\
    .addCarroceria("------")\
    .addRoda("------")\
    .addCor("------")\
    .getCarro()
#Construção carro sedan 

carroSedan = build\
    .addNome("Fiat")\
    .addMotor("V4")\
    .addCarroceria("Sedan")\
    .addRoda(15)\
    .addCor("Preto")\
    .getCarro()

#Mostrar os veiculos construidos
carroPadrao1.MostrarDetalhes()
carroEsportivo.MostrarDetalhes()
carroSedan.MostrarDetalhes()

#construtor do carro com padrao builder