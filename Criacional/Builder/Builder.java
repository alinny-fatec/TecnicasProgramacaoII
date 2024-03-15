// ****************************************************************************
// FATEC Diadema - Luigi Papaiz
// Curso: Desenvolvimento de Sistema Multiplataformas - DSM
// Disciplina: Tecnica de Programação II
// Autor: Alinny Ribeiro         Data: 08/03/2024
// Descrição: Aplicação do padrão GoF - Criacional - Builder
// desenvolvido como exemplo na aula. 
// ---------------------------------------------------------------------------
// ENUNCIADO: No programa abaixo, é criado um software que simula a construção 
// de um carro, onde o Builder nos permitirá definir diferentes partes do 
// carro de forma flexível. Começa definindo as diferentes partes do carro e 
// na sequência se cria o Builder, que permite construir diferentes tipos de 
// carros; Se cria uma classe Carro que receberá as partes construídas pelo 
// Builder e na pra fechar, usa-se o Builder para construir diferentes tipos 
// de carros
// ****************************************************************************

// Definindo Partes de um Carros
class Motor {
    private String tipo;

    public Motor(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }
}

class Carroceria {
    private String estilo;

    public Carroceria(String estilo) {
        this.estilo = estilo;
    }

    public String getEstilo() {
        return estilo;
    }
}

class Rodas {
    private int tamanho;

    public Rodas(int tamanho) {
        this.tamanho = tamanho;
    }

    public int getTamanho() {
        return tamanho;
    }
}

class Interior {
    private String cor;

    public Interior(String cor) {
        this.cor = cor;
    }

    public String getCor() {
        return cor;
    }
}

// Builder
class CarroBuilder {
    private Motor motor;
    private Carroceria carroceria;
    private Rodas rodas;
    private Interior interior;

    public CarroBuilder adicionarMotor(String tipo) {
        this.motor = new Motor(tipo);
        return this;
    }

    public CarroBuilder adicionarCarroceria(String estilo) {
        this.carroceria = new Carroceria(estilo);
        return this;
    }

    public CarroBuilder adicionarRodas(int tamanho) {
        this.rodas = new Rodas(tamanho);
        return this;
    }

    public CarroBuilder adicionarInterior(String cor) {
        this.interior = new Interior(cor);
        return this;
    }

    public Carro construir() {
        return new Carro(motor, carroceria, rodas, interior);
    }
}

// Construindo o Carro:
class Carro {
    private Motor motor;
    private Carroceria carroceria;
    private Rodas rodas;
    private Interior interior;

    public Carro(Motor motor, Carroceria carroceria, Rodas rodas, Interior interior) {
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }

    public void mostrarDetalhes() {
        System.out.println("Carro com motor " + motor.getTipo() + ", carroceria " + carroceria.getEstilo() +
                           ", rodas de tamanho " + rodas.getTamanho() + " e interior na cor " + interior.getCor() + ".");
    }
}

// INTERFACE DO USUARIO - UTILIZAÇÃO DO PADRÃO **************************************
public class Builder01 {
    public static void main(String[] args) {
        CarroBuilder builder = new CarroBuilder();

        Carro carroEsportivo = builder
            .adicionarMotor("V8")
            .adicionarCarroceria("Esportiva")
            .adicionarRodas(18)
            .adicionarInterior("Preto")
            .construir();

        Carro carroSedan = builder
            .adicionarMotor("4 cilindros")
            .adicionarCarroceria("Sedan")
            .adicionarRodas(16)
            .adicionarInterior("Bege")
            .construir();

        carroEsportivo.mostrarDetalhes();
        carroSedan.mostrarDetalhes();
    }
}
