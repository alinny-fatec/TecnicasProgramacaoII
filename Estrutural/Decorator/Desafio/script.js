// FATEC Diadema - Luigi Papaiz
// DSM - Desenvolvimento de Software Multiplataformas
// Disciplina - Técnica de Programação II
// Nome: Alinny Ribeiro & André Santos  Data: 19/04/2024
// Description: Aplicação de padrão GOF - Estrutural - Decorator
// Desenvolvido como desafio da aula

class CentralAlunos {
    constructor() {
        this.curso = 'CentralAlunos';
    }

    getCurso() {
        return this.curso;
    }

    getPeriodo() {
        return this.periodo;
    }

    custo() {
        return 0;
    }
}

class CentralAlunosPersonalizada extends CentralAlunos {
    constructor(curso, periodo, internet, estacionamento, armario, extras) {
        super();
        this.descricao = `CentralAlunos ${curso} ${periodo} ${internet} ${estacionamento} ${armario} ${extras}`;
        this.curso = curso;
        this.periodo = periodo;
        this.internet = internet;
        this.estacionamento = estacionamento;
        this.armario = armario;
        this.extras = extras;
    }

    custo() {
    }
}

// Decorador Abstrato:
class Decorator extends CentralAlunos {
    constructor(aluno) {
        super();
        this.aluno = aluno;
    }

    getDescricao() {
        return this.aluno.getDescricao();
    }

    custo() {
        return this.aluno.custo();
    }
}

function montarCentralAlunos() {
    // Obtendo Curso Selecionado:
    let cursoSelecionado = document.querySelector('input[name="curso"]:checked');
    let curso = cursoSelecionado ? cursoSelecionado.value : '';

    // Obtendo Periodo Selecionado:
    let periodoSelecionado = document.querySelector('input[name="periodo"]:checked');
    let periodo = periodoSelecionado ? periodoSelecionado.value : '';

    // Obtendo Internet Selecionada:
    let internetSelecionado = document.querySelector('input[name="internet"]:checked');
    let internet = internetSelecionado ? internetSelecionado.value : '';

    // Criando Objeto CentralAlunosPersonalizada com base nas seleções do usuarios:
    let alunoPersonalizado = new CentralAlunosPersonalizada(curso, periodo, internet);

    // Aplicar decoradores serviços adicionais
    let queijoExtraCheckbox = document.querySelector('input[name="queijo-extra"]:checked');
    if (queijoExtraCheckbox) {
        pizzaPersonalizada = new QueijoExtra(pizzaPersonalizada);
    }

    let baconExtraCheckbox = document.querySelector('input[name="bacon-extra"]:checked');
    if (baconExtraCheckbox) {
        pizzaPersonalizada = new BaconExtra(pizzaPersonalizada);
    }

    let pepperoniCheckbox = document.querySelector('input[name="pepperoni-extra"]:checked');
    if (pepperoniCheckbox) {
        pizzaPersonalizada = new PepperoniExtra(pizzaPersonalizada);
    }

    // Obter o custo total da pizza personalizada
    let custoTotal = parseFloat(pizzaPersonalizada.custo());

    // Exibir o custo total do pedido
    let totalPedidoElement = document.getElementById("total-pedido");
    totalPedidoElement.textContent = "R$ " + custoTotal.toFixed(2);
}
