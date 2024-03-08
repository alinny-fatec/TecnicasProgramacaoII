# #########################################################################
# FATEC Diadema - Luigi Papaiz
# DSM - Desenvolvimento de Software Multiplataformas
# Disciplina - Técnica de Programação II
# Nome: Alinny Ribeiro     Data: 15/03/2024
# Description: Aplicação de padrão GOF - Criacional - Prototype
# Desenvolvido como exemplo na aula
# #########################################################################


import copy

#Classe Pessoa no qual será clonada:
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome;
        self. idade = idade;

    def __str__(self):
        return f'Nome: {self.nome}, Idade: {self.idade}'
    
    def clone(self):
        return copy.copy(self)
    
#Classe Gerenciadora de Pessoa (PessoaManager):
class PessoaManager:
    def __init__(self):
        self.pessoas={}

    def adicionaPessoa(self, nome, idade, id):
        pessoa = Pessoa (nome, idade)
        self.pessoas[id]= pessoa;

    def getPessoaById(self, id):
        return self.pessoas[id].clone()
    
##INTERFACE PARA O USUÁRIO *****
    
#Criando uma instância de PessoaManager:
manager = PessoaManager()

#Adicionando Pessoas:
manager.adicionaPessoa('João da Silva', 30, 1)
manager.adicionaPessoa('Maria da Silva', 25, 2)
manager.adicionaPessoa('Bruno dos Santos', 56, 3)
manager.adicionaPessoa('Joana da Silva', 22, 4)

#Clonando Pessoa e Modificando os Dados
pessoaClone1 = manager.getPessoaById(1);
pessoaClone1.nome= "Carlos de Oliveira"

pessoaClone2 = manager.getPessoaById(2);
pessoaClone2.nome= "Bruno Oliveir"
pessoaClone2.idade= 79

#Imprimindo as pessoa (originais ou clonadas) selecionadas
print('Pessoas Originais: \n')
print(manager.getPessoaById(1))
print(manager.getPessoaById(2))
print(manager.getPessoaById(3))
print(manager.getPessoaById(4))

print('----------------------------\n')
print('Pessoas Clonadas: \n')
print(pessoaClone1)
print(pessoaClone2)